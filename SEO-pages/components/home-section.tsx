"use client";

import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Box,
  Button,
  Avatar,
  FormHelperText,
} from "@mui/material";
import {
  ChevronDown,
  FileText,
  Image as ImageIcon,
  Upload,
} from "lucide-react";
import useUpload from "@/hooks/useUpload";
import TiptapEditor from "../../cms/_components/TiptapEditor";

/** * 1. MOVE THIS OUTSIDE THE MAIN COMPONENT
 * This prevents the component from being re-created on every render.
 */
const ContentInput = ({
  section,
  field,
  label,
  multiline = false,
  rows = 1,
  max,
  register,
  watch,
  errors,
}: any) => {
  const fieldName = `${section}.${field}`;
  const fieldError = errors?.[section]?.[field];

  // Watch specifically for this field to update the counter
  const currentText = watch(fieldName) || "";
  const charCount = currentText.length;

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      size="small"
      multiline={multiline}
      InputLabelProps={{ shrink: true }}
      rows={rows}
      {...register(fieldName)}
      error={Boolean(fieldError)}
      helperText={
        <Box
          component="span"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>{fieldError ? (fieldError.message as string) : ""}</span>
          {max && (
            <span
              style={{
                color: charCount > max ? "#d32f2f" : "inherit",
                marginLeft: "auto",
              }}
            >
              {charCount}/{max}
            </span>
          )}
        </Box>
      }
      sx={{
        mb: 3,
        "& .MuiInputLabel-root.Mui-error": { color: "#d32f2f" },
        "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d32f2f",
        },
        "& .MuiFormHelperText-root": {
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 500,
        },
        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
          borderColor: "#DBC489",
        },
      }}
    />
  );
};

export default function HeroContentSection() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const hasSectionError = Boolean(
    errors?.hero && Object.keys(errors.hero).length > 0
  );
  const imagePathError = (errors?.hero as any)?.image;
  const [expanded, setExpanded] = useState<boolean>(false);
  const { isUploading, uploadFile } = useUpload();

  const currentImagePath = watch("hero.image");
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (currentImagePath) {
      setPreview(currentImagePath);
    }
  }, [currentImagePath]);

  useEffect(() => {
    if (hasSectionError) {
      setExpanded(true);
    }
  }, [hasSectionError]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const res = await uploadFile(file);
      if (res) {
        setValue("hero.image", res[0] || "", { shouldValidate: true });
      }
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      elevation={0}
      sx={{
        // border: hasSectionError ? "1px solid #d32f2f" : "1px solid #eee",
        mb: 2,
        borderRadius: "8px !important",
      }}
    >
      <AccordionSummary expandIcon={<ChevronDown />}>
        <Typography
          className="fw-bold d-flex align-items-center"
          sx={{ 
            color: hasSectionError ? "#d32f2f" : "inherit" 
          }}
        >
          <FileText size={18} className="me-2" />
          Hero & Intro Section {hasSectionError && "(Errors Found)"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* --- IMAGE SECTION --- */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            alignItems: "center",
            gap: 3,
            p: 2,
            border: imagePathError ? "2px dashed #d32f2f" : "1px dashed #ccc",
            borderRadius: "8px",
          }}
        >
          <Avatar
            src={
              preview
                ? preview.startsWith("blob:")
                  ? preview
                  : `${process.env.NEXT_PUBLIC_MEDIA_URL}/${preview}`
                : ""
            }
            variant="rounded"
            sx={{
              width: 100,
              height: 100,
              bgcolor: "#f5f5f5",
              border: imagePathError ? "1px solid #d32f2f" : "none",
            }}
          >
            {!preview && (
              <ImageIcon
                size={40}
                color={imagePathError ? "#d32f2f" : "#ccc"}
              />
            )}
          </Avatar>

          <Box>
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              color={imagePathError ? "error" : "inherit"}
              gutterBottom
            >
              Hero Background Image
            </Typography>
            <Button
              variant="outlined"
              component="label"
              disabled={isUploading}
              startIcon={<Upload size={16} />}
              size="small"
            >
              {isUploading ? "Uploading..." : "Upload New Image"}
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            {imagePathError && (
              <FormHelperText error sx={{ fontWeight: 600, mt: 1 }}>
                {imagePathError.message as string}
              </FormHelperText>
            )}
          </Box>
        </Box>

        {/* 2. PASS PROPS EXPLICITLY TO THE EXTERNAL COMPONENT */}
        {/* <ContentInput 
                    section="hero" field="mainTitle" label="Main Heading" max={27} 
                    register={register} watch={watch} errors={errors} 
                />
                <ContentInput 
                    section="hero" field="subTitle" label="Sub-Heading Line" max={96} 
                    register={register} watch={watch} errors={errors} 
                />
                <ContentInput 
                    section="hero" field="description" label="Intro Paragraph" multiline rows={3} max={350} 
                    register={register} watch={watch} errors={errors} 
                /> */}
        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Main Heading
        </Typography>

        <TiptapEditor
          value={watch("hero.mainTitle")}
          onChange={(value: string) => setValue("hero.mainTitle", value)}
          height={200}
        />

        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Sub-Heading Line
        </Typography>

        <TiptapEditor
          value={watch("hero.subTitle")}
          onChange={(value: string) =>
            setValue("hero.subTitle", value, { shouldValidate: true })
          }
          height={200}
        />

        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Intro Paragraph
        </Typography>

        <TiptapEditor
          value={watch("hero.description")}
          onChange={(value: string) =>
            setValue("hero.description", value, { shouldValidate: true })
          }
        />
      </AccordionDetails>
    </Accordion>
  );
}
