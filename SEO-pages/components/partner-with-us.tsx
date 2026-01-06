"use client";

import React, { useState, useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Box } from "@mui/material";
import { ChevronDown, Handshake } from "lucide-react";
import TiptapEditor from '../../cms/_components/TiptapEditor';

/**
 * 1. COMPONENT DEFINED OUTSIDE
 * This ensures the TextField does not lose focus during re-renders 
 * caused by the 'watch' function updating the character count.
 */
const ContentInput = ({ section, field, label, multiline = false, rows = 1, helper = "", max, register, watch, errors }:any) => {
    const fieldPath = `${section}.${field}`;
    const fieldError = errors[section]?.[field];
    
    // Watch for live character counting
    const currentText = watch(fieldPath) || "";
    const charCount = currentText.length;

    return (
        <TextField
            fullWidth
            label={label}
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
            multiline={multiline}
            rows={rows}
            {...register(fieldPath)}
            error={Boolean(fieldError)}
            // Display error message OR the static helper text, and the counter on the right
            helperText={
                <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>{(fieldError?.message as string) || helper}</span>
                    {max && (
                        <span style={{ color: charCount > max ? '#d32f2f' : 'inherit', marginLeft: 'auto' }}>
                            {charCount}/{max}
                        </span>
                    )}
                </Box>
            }
            sx={{ 
                mb: 3, 
                '& .MuiInputLabel-root.Mui-error': { color: '#d32f2f' },
                '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d32f2f',
                },
                '& .MuiFormHelperText-root': { 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontWeight: 500 
                },
                '& .MuiOutlinedInput-root.Mui-focused fieldset': { 
                    borderColor: '#DBC489' 
                }
            }}
        />
    );
};

export default function PartnerSectionEditor() {
    // 1. Access RHF context
    const { 
        register, 
        watch, 
        formState: { errors } ,
        setValue
    } = useFormContext();

    // 2. Logic to detect errors in the 'partner' section
    const hasSectionError = Boolean(errors?.partner);

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
                // border: hasSectionError ? '1px solid #d32f2f' : '1px solid #eee', 
                mb: 2, 
                borderRadius: '8px !important' 
            }}
        >
            <AccordionSummary expandIcon={<ChevronDown />}>
                <Typography 
                    className="fw-bold d-flex align-items-center"
                    sx={{ color: hasSectionError ? '#d32f2f' : 'inherit' }}
                >
                    <Handshake size={18} className="me-2" /> 
                    Partner With Us Section {hasSectionError && "(Errors Found)"}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* 2. PASS PROPS EXPLICITLY */}
                {/* <ContentInput 
                    section="partner" 
                    field="title" 
                    label="Section Title" 
                    max={17}
                    register={register}
                    watch={watch}
                    errors={errors}
                />

                <ContentInput 
                    section="partner" 
                    field="description" 
                    label="Main Description Paragraph" 
                    multiline 
                    rows={4} 
                    max={331}
                    register={register}
                    watch={watch}
                    errors={errors}
                />

                <ContentInput 
                    section="partner" 
                    field="points" 
                    label="Checklist Points (One per line)" 
                    multiline 
                    rows={3}
                    helper="Press Enter to start a new checklist item."
                    max={150}
                    register={register}
                    watch={watch}
                    errors={errors}
                /> */}

                <Typography variant="subtitle2" fontWeight={600} mb={1}>
  Section Title
</Typography>

<TiptapEditor
  value={watch("partner.title")}
  onChange={(value: string) =>
    setValue("partner.title", value, { shouldValidate: true })
  }
/>

<Typography variant="subtitle2" fontWeight={600} mb={1}>
  Main Description Paragraph
</Typography>

<TiptapEditor
  value={watch("partner.description")}
  onChange={(value: string) =>
    setValue("partner.description", value, { shouldValidate: true })
  }
/>

<Typography variant="subtitle2" fontWeight={600} mb={1}>
  Checklist Points
</Typography>

<TiptapEditor
  value={watch("partner.points")}
  onChange={(value: string) =>
    setValue("partner.points", value, { shouldValidate: true })
  }
/>
            </AccordionDetails>
        </Accordion>
    );
}