"use client";

import React, { useState, useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Box } from "@mui/material";
import { ChevronDown, Music } from "lucide-react";
import TiptapEditor from '@/app/(DashboardLayout)/cms/_components/TiptapEditor';

/**
 * 1. MOVE COMPONENT OUTSIDE
 * This prevents React from re-mounting the input and losing focus 
 * every time a user types (which triggers a 'watch' re-render).
 */
const ContentInput = ({ section, field, label, multiline = false, rows = 1, max, register, watch, errors }: any) => {
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
            size="small"
            InputLabelProps={{ shrink: true }}
            multiline={multiline}
            rows={rows}
            {...register(fieldPath)}
            error={Boolean(fieldError)}
            // Helper text shows the error message and the character count
            helperText={
                <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span>{fieldError ? (fieldError.message as string) : ""}</span>
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

export default function JobPostingPackage() {
    const {
        register,
        watch,
        setValue,
        formState: { errors }
    } = useFormContext();

    const hasSectionError = Boolean(errors?.bookArtist);
    const [expanded, setExpanded] = useState<boolean>(false);

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
                border: hasSectionError ? '1px solid #d32f2f' : '1px solid #eee',
                mb: 2,
                borderRadius: '8px !important'
            }}
        >
            <AccordionSummary expandIcon={<ChevronDown />}>
                <Typography
                    className="fw-bold d-flex align-items-center"
                    sx={{ color: hasSectionError ? '#d32f2f' : 'inherit' }}
                >
                    <Music size={18} className="me-2" />
                    Job Posting {hasSectionError && "(Errors Found)"}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* 2. PASS PROPS EXPLICITLY */}
                {/* <ContentInput 
                    section="job_post" 
                    field="title" 
                    label="Section Title" 
                    max={23}
                    register={register}
                    watch={watch}
                    errors={errors}
                /> */}
                <TiptapEditor
                    value={watch("job_post.title")}
                    onChange={(val: any) => setValue("job_post.title", val)}
                    height={200}
                />
                {/* <ContentInput
                    section="job_post"
                    field="description"
                    label="Description Text"
                    multiline
                    rows={3}
                    max={180}
                    register={register}
                    watch={watch}
                    errors={errors}
                /> */}
                <TiptapEditor
                    value={watch("job_post.description")}
                    onChange={(val: any) => setValue("job_post.description", val)}
                    height={200}
                />
            </AccordionDetails>
        </Accordion>
    );
}