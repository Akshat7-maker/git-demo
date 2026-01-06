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
} from "@mui/material";
import { ChevronDown, Briefcase } from "lucide-react";
import TiptapEditor from "../../cms/_components/TiptapEditor";

/**
 * 1. COMPONENT DEFINED OUTSIDE
 * This prevents the input from losing focus because React preserves
 * the component identity across parent re-renders.
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

  // Watch current value for the live counter
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

export default function HireTalentEditor() {
  // 1. Access the RHF context
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useFormContext();

  // 2. Logic to detect errors in this specific section
  const hasSectionError = Boolean(errors?.hireTalent);

  // 3. Control expansion state
  const [expanded, setExpanded] = useState<boolean>(false);

  // 4. Force expand when errors are detected
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
          <Briefcase size={18} className="me-2" />
          Section 3: Hire Professional Talent{" "}
          {hasSectionError && "(Errors Found)"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* 2. PASS PROPS EXPLICITLY */}
        {/* <ContentInput 
                    section="hireTalent" 
                    field="title" 
                    label="Section Title" 
                    max={35}
                    register={register}
                    watch={watch}
                    errors={errors}
                />
                <ContentInput 
                    section="hireTalent" 
                    field="description" 
                    label="Description" 
                    multiline 
                    rows={3} 
                    max={400}
                    register={register}
                    watch={watch}
                    errors={errors}
                /> */}

        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Section Title
        </Typography>

        <TiptapEditor
          value={watch("hireTalent.title")}
          onChange={(value: string) =>
            setValue("hireTalent.title", value, { shouldValidate: true })
          }
        />

        <Typography variant="subtitle2" fontWeight={600} mb={1}>
          Description
        </Typography>

        <TiptapEditor
          value={watch("hireTalent.description")}
          onChange={(value: string) =>
            setValue("hireTalent.description", value, { shouldValidate: true })
          }
        />
      </AccordionDetails>
    </Accordion>
  );
}
