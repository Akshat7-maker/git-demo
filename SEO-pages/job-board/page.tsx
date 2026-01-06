"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Divider,
  CircularProgress,
  Dialog,
  IconButton,
} from "@mui/material";
import { ChevronDown, Save, FileText, AlertCircle, Eye, X } from "lucide-react";
import toast from "react-hot-toast";
import ArtistHubEditor from "../components/elevate-career";
import HireTalentEditor from "../components/hire-professional";
import SocialFooterEditor from "../components/social-proof";

import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PartnerSectionEditor from "../components/partner-with-us";
import { useMutation } from "@/hooks/useMutation";
import { useFetch } from "@/hooks/useFetch";
import MetaSEOEditor from "../components/meta-tags";
import HeroContentSection from "./components/home-section";
import BrandsWeLove from "./components/job-board";
import Affililate from "./components/job-posting";
import JobBoard from "./components/job-board";
import JobPostingPackage from "./components/job-posting";
import JobBoardPreview from "./components/Preview";

// 1. Hero Section Schema
const heroSchema = z.object({
  mainTitle: z
    .string()
    .min(1, "Main title is required")
    .max(44, "Title too long"),
  subTitle: z.string().min(1, "Sub-title is required").max(55, "Sub-title is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(375, "Description too long"),
  // image: z.string().min(1, "Image is required"),
});

// 2. Book Artist Section Schema
const jobBoardSchema = z.object({
  title: z.string().min(1, "Section title is required").max(26, "Title too long"),
  //   subText: z.string().min(1, "Sub-text is required"), // copied from artist hub
  description: z.string().min(1, "Description is required").max(175, "Description is required"),
});


const jobPostingSchema = z.object({
  title: z.string().min(1, "Section title is required").max(23, "Title too long"),
  //   subText: z.string().min(1, "Sub-text is required"), // copied from artist hub
  description: z.string().min(1, "Description is required").max(180, "Description is required"),
});


const seoSchema = z.object({
  title: z
    .string()
    .min(1, "SEO title is required")
    .max(44, "Title should be under 60 characters"), // Optimal for SEO
  description: z
    .string()
    .min(1, "SEO description is required")
    .max(160, "Keep under 160 chars for Google"),
  meta_tags: z
    .array(
      z.object({
        key: z.string().min(1, "Property name required"),
        content: z.string().min(1, "Value required"),
      })
    )
    .optional()
    .default([]),
});

// --- COMBINED MASTER SCHEMA ---
export const landingPageSchema = z.object({
  makeup_artist: heroSchema,
  job_board: jobBoardSchema,
  job_post: jobPostingSchema,
  //   hireTalent: hireTalentSchema,
  //   partner: partnerSchema,
  seo: seoSchema,
  //   footer: footerSchema,
  //   ...footerSchema.shape, // Merges social_proof and footer into the top level
});

// Type inference for TypeScript
export type LandingPageInputs = z.infer<typeof landingPageSchema>;

export default function LandingPageTextManager({
  initialData,
  onSave,
  isLoading,
}: any) {
  // Local state for form editing
  const [formData, setFormData] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const methods = useForm<LandingPageInputs>({
    resolver: zodResolver(landingPageSchema) as any,
    defaultValues: initialData,
  });

  const {
    handleSubmit,
    reset,
    getValues,
    formState: { isDirty, errors },
  } = methods;

  const { mutate: addSEOData, loading: isLoadingAddSEO } = useMutation(
    `add-job-board`,
    {
      method: "POST",
    }
  );

  const { data: SEOData, loading: isLoadingSEO } = useFetch(
    `get-job-board`,
    {
      method: "GET",
    }
  );

  useEffect(() => {
    if (SEOData) {
      reset(SEOData);
    }
  }, [SEOData]);


  console.log("initialData", getValues());
  //   console.log("SEOData", SEOData);
  console.log("errors", errors);

  // Initialize data with safety checks
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const onSubmit = async (data: LandingPageInputs) => {
    try {
      // Show loading toast
      const toastId = toast.loading("Saving Data...");

      // Call the API
      await addSEOData(data);

      // Dismiss loading and show success
      toast.dismiss(toastId);
      toast.success("Data saved successfully!");

      console.log("payload", data);
    } catch (error) {
      // Show error toast
      toast.error("Failed to save data. Please try again.");
      console.error("Save error:", error);
    }
  };



  const handleFieldChange = (section: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [section]: {
        ...(prev?.[section] ?? {}),
        [field]: value,
      },
    }));
  };

  const handleFormSubmit = async () => {
    if (isLoading) return;

    const savePromise = onSave(formData);
    toast.promise(savePromise, {
      loading: "Updating website text...",
      success: <b>Content Published Successfully!</b>,
      error: <b>Failed to update content.</b>,
    });
  };

  // if (!formData) return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>;

  // Reusable Input Component with Null Checks
  const ContentInput = ({
    section,
    field,
    label,
    multiline = false,
    rows = 1,
  }: any) => (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      size="small"
      multiline={multiline}
      rows={rows}
      value={formData?.[section]?.[field] ?? ""} // Null check: defaults to empty string
      onChange={(e) => handleFieldChange(section, field, e.target.value)}
      sx={{
        mb: 3,
        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
          borderColor: "#DBC489",
        },
      }}
    />
  );

  return (
    <>

      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ maxWidth: "900px", margin: "0 auto", p: 4 }}
        >
          <Box className="d-flex justify-content-between align-items-center mb-4">
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Homepage Text Content
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Edit all highlighted labels and paragraphs from the landing page.
              </Typography>
            </Box>
            <Box className="d-flex gap-2">
              <Button
                type="button"
                variant="contained"
                onClick={() => setPreviewOpen(true)}
                startIcon={<Eye size={18} />}
                sx={{
                  bgcolor: "#7a776dff",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#cbad6c" },
                }}
              >
                Preview
              </Button>
              <Button
                variant="contained"
                type="submit"
                // onClick={handleFormSubmit}
                disabled={isLoadingAddSEO}
                startIcon={
                  isLoadingAddSEO ? <CircularProgress size={20} /> : <Save size={18} />
                }
                sx={{
                  bgcolor: "#7a776dff",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#cbad6c" },
                }}
              >
                {isLoadingAddSEO ? "Saving..." : "Save Changes"}
              </Button>
            </Box>
          </Box>

          {/* SECTION 1: HERO */}
          <HeroContentSection />

          {/* SECTION 2: JOB BOARD DESCRIPTION */}
          <JobBoard />


          {/* SECTION 3: JOB POSTING PACKAGE HEADING */}
          <JobPostingPackage />


          <MetaSEOEditor />

          {/* <Box sx={{ mt: 2, p: 2, bgcolor: '#fff4e5', borderRadius: 1, display: 'flex', gap: 2 }}>
                <AlertCircle size={20} color="#663c00" />
                <Typography variant="caption" color="#663c00">
                    Note: Empty fields will appear as blank on the live website. Ensure all required marketing text is filled before saving.
                </Typography>
            </Box> */}
        </Box>
      </FormProvider>

      <Dialog
        fullScreen
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
      >

        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            bgcolor: "#1976d2",
            color: "white",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Eye size={24} />
            <Box>
              <Box sx={{ fontWeight: "bold", fontSize: "18px" }}>
                Live Preview
              </Box>
              <Box sx={{ fontSize: "12px", opacity: 0.9 }}>
                Changes appear instantly as you type
              </Box>
            </Box>
          </Box>

          <IconButton
            onClick={() => setPreviewOpen(false)}
            sx={{
              color: "white",
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            <X size={24} />
          </IconButton>
        </Box>

        {/* Preview Content */}
        <Box
          sx={{
            mt: "80px", // Offset for fixed header
            height: "calc(100vh - 80px)",
            overflow: "auto",
            bgcolor: "#fafafa",
          }}
        >
          <JobBoardPreview data={methods.getValues()} />
        </Box>

      </Dialog>

    </>
  );
}
