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
import {
  ChevronDown,
  Save,
  FileText,
  AlertCircle,
  Globe,
  Eye,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import HeroContentSection from "../components/home-section";
import BookArtistEditor from "../components/book-perfect-artist";
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
import LandingPagePreview from "./_components/Preview";

// 1. Hero Section Schema
const heroSchema = z.object({
  mainTitle: z
    .string()
    .min(1, "Main title is required")
    .max(27, "Title too long"),
  subTitle: z
    .string()
    .min(1, "Sub-title is required")
    .max(97, "Sub-title is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(350, "Description too long"),
  image: z.string().min(1, "Image is required"),
});

// 2. Book Artist Section Schema
const bookArtistSchema = z.object({
  title: z
    .string()
    .min(1, "Section title is required")
    .max(44, "Title too long"),
  //   subText: z.string().min(1, "Sub-text is required"), // copied from artist hub
  description: z
    .string()
    .min(1, "Description is required")
    .max(400, "Description is required"),
});

// 3. Artist Hub Section Schema
const artistHubSchema = z.object({
  title: z
    .string()
    .min(1, "Section title is required")
    .max(40, "Title too long"),
  //   subText: z.string().min(1, "Sub-text is required"),
  description: z
    .string()
    .min(1, "Main description is required")
    .max(334, "Description too long"),
});

// 4. Hire Talent Section Schema
const hireTalentSchema = z.object({
  title: z
    .string()
    .min(1, "Section title is required")
    .max(35, "Title too long"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(400, "Description too long"),
});

const partnerSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(17, "Title too long"),
  description: z
    .string()
    .trim()
    .min(1, "Description is required")
    .max(331, "Description too long"),
  points: z
    .string()
    .trim()
    .min(1, "Checklist points are required")
    .max(150, "Too many points"), // We'll split by newline
});

// 5. Social Proof & Footer Schema
const footerSchema = z.object({
  social_proof: z.object({
    title: z
      .string()
      .min(1, "Social proof title is required")
      .max(63, "Title too long"),
  }),
  footer: z.object({
    about: z
      .string()
      .min(1, "Footer about text is required")
      .max(245, "About text too long"),
    // copyright: z.string().min(1, "Copyright text is required"),
  }),
});

const seoSchema = z.object({
  title: z
    .string()
    .min(1, "SEO title is required")
    .max(60, "Title should be under 60 characters"), // Optimal for SEO
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
  hero: heroSchema,
  bookArtist: bookArtistSchema,
  artistHub: artistHubSchema,
  hireTalent: hireTalentSchema,
  partner: partnerSchema,
  seo: seoSchema,
  //   footer: footerSchema,
  ...footerSchema.shape, // Merges social_proof and footer into the top level
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
  const [showPreview, setShowPreview] = useState(false);

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
    `add-home-page`,
    {
      method: "POST",
    }
  );

  const { data: SEOData, loading: isLoadingSEO } = useFetch(`get-home-page`, {
    method: "GET",
  });

  useEffect(() => {
    if (SEOData) {
      reset(SEOData);
    }
  }, [SEOData]);

  console.log("initialData", getValues());
  console.log("SEOData", SEOData);
  console.log("errors", errors);

  // Initialize data with safety checks
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const onSubmit = async (data: LandingPageInputs) => {
    // const savePromise = onSave(data);

    const payload = {
      ...data,
      bookArtist: {
        ...data.bookArtist,
        title: data.bookArtist?.title?.toUpperCase(),
      },
      artistHub: {
        ...data.artistHub,
        title: data.artistHub?.title?.toUpperCase(),
      },
      hireTalent: {
        ...data.hireTalent,
        title: data.hireTalent?.title?.toUpperCase(),
      },
      partner: {
        ...data.partner,
        title: data.partner?.title?.toUpperCase(),
      },
      //   social_proof: {
      //     ...data.social_proof,
      //     title: data.social_proof?.title?.toUpperCase(),
      //   },
    };

    console.log("payload", payload);
    return;
    await addSEOData(payload);

    // console.log("savePromise", data);
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
                Edit all highlighted labels and paragraphs from the landing
                page.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                type="button"
                // onClick={handleFormSubmit}
                disabled={isLoading}
                onClick={() => setShowPreview(true)}
                startIcon={<Globe size={18} />}
                sx={{
                  bgcolor: "#DBC489",
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
                disabled={isLoading}
                startIcon={
                  isLoading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Save size={18} />
                  )
                }
                sx={{
                  bgcolor: "#DBC489",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#cbad6c" },
                }}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </Box>
          </Box>

          {/* SECTION 1: HERO */}
          <HeroContentSection />

          {/* SECTION 2: BOOK ARTIST */}
          <BookArtistEditor />

          {/* SECTION 3: ARTIST HUB */}
          <ArtistHubEditor />

          {/* SECTION 4: HIRE TALENT */}
          <HireTalentEditor />

          {/* SECTION 5: PARTNER */}
          <PartnerSectionEditor />

          {/* SECTION 6: SOCIAL PROOF & FOOTER */}
          <SocialFooterEditor />

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
        open={showPreview}
        onClose={() => setShowPreview(false)}
        // TransitionComponent={Transition}
      >
        {/* Preview Header Bar */}
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
            onClick={() => setShowPreview(false)}
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
          {/* <BlogPreview data={methods.getValues()} /> */}
          {/* <AboutPreview data={methods.getValues()} /> */}
          <LandingPagePreview data={methods.getValues()} />
        </Box>
      </Dialog>
    </>
  );
}
