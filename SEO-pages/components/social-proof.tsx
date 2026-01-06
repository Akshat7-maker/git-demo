"use client";

import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Divider,
  Box,
} from "@mui/material";
import { ChevronDown, Share2 } from "lucide-react";
import TiptapEditor from "../../cms/_components/TiptapEditor";

/**
 * 1. STATIC COMPONENT DEFINITION
 * Defined outside the main function to prevent the input from losing
 * focus when typing (avoids unmounting during state updates).
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
  const fieldPath = `${section}.${field}`;
  const fieldError = errors[section]?.[field];

  // Live watch for character counter
  const currentText = watch(fieldPath) || "";
  const charCount = currentText.length;

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      size="small"
      multiline={multiline}
      rows={rows}
      {...register(fieldPath)}
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
          borderWidth: "1px",
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

export default function SocialFooterEditor() {
  // 1. Consume RHF context
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext();

  // 2. Logic to detect errors in either 'social_proof' or 'footer'
  const hasSocialError = Boolean(errors?.social_proof);
  const hasFooterError = Boolean(errors?.footer);
  const hasSectionError = hasSocialError || hasFooterError;

  // 3. Control expansion state
  const [expanded, setExpanded] = useState<boolean>(false);

  // 4. Auto-open if validation fails
  useEffect(() => {
    if (hasSectionError) {
      setExpanded(true);
    }
  }, [hasSectionError]);

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
          sx={{ color: hasSectionError ? "#d32f2f" : "inherit" }}
        >
          <Share2 size={18} className="me-2" />
          Social Proof & Footer {hasSectionError && "(Errors Found)"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* <ContentInput 
                    section="social_proof" 
                    field="title" 
                    label="Trusted By Section Title" 
                    max={63}
                    register={register}
                    watch={watch}
                    errors={errors}
                />
                
                <Divider sx={{ my: 2 }} />
                
                <ContentInput 
                    section="footer" 
                    field="about" 
                    label="Footer About Text" 
                    multiline 
                    rows={3} 
                    max={245}
                    register={register}
                    watch={watch}
                    errors={errors}
                /> */}
        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Trusted By Section Title
        </Typography>

        <TiptapEditor
          value={watch("social_proof.title")}
          onChange={(value: string) =>
            setValue("social_proof.title", value, { shouldValidate: true })
          }
        />

        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Footer About Text
        </Typography>

        <TiptapEditor
          value={watch("footer.about")}
          onChange={(value: string) =>
            setValue("footer.about", value, { shouldValidate: true })
          }
        />
      </AccordionDetails>
    </Accordion>
  );
}
