"use client";

import React, { useState, useEffect } from 'react';
import { useFormContext } from "react-hook-form";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Box } from "@mui/material";
import { ChevronDown, FileText } from "lucide-react";
import TiptapEditor from '@/app/(DashboardLayout)/cms/_components/TiptapEditor';

/** * Reusable Input Component
 * Styled with black labels that turn blue on focus.
 */
const ContentInput = ({ section, field, label, multiline = false, rows = 1, max, register, watch, errors }: any) => {
    const fieldName = `${section}.${field}`;
    const fieldError = errors?.[section]?.[field];
    
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
                <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span style={{ color: fieldError ? '#d32f2f' : 'inherit' }}>
                        {fieldError ? (fieldError.message as string) : ""}
                    </span>
                    {max && (
                        <span style={{ color: charCount > max ? '#d32f2f' : 'inherit', marginLeft: 'auto' }}>
                            {charCount}/{max}
                        </span>
                    )}
                </Box>
            }
            sx={{ 
                mb: 3, 
                // Default Label Color (Black)
                '& .MuiInputLabel-root': { color: '#000' },
                // Focused Label and Border Color (Blue)
                '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' },
                '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1976d2' },
                // Error States
                '& .MuiInputLabel-root.Mui-error': { color: '#d32f2f' },
                '& .MuiFormHelperText-root': { 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontWeight: 500 
                }
            }}
        />
    );
};

export default function HeroContentSection() {
    const { 
        register, 
        watch,
        formState: { errors } ,
        setValue
    } = useFormContext();

    const hasSectionError = Boolean(errors?.hero);
    const [expanded, setExpanded] = useState<boolean>(false);

    // Auto-open if validation fails
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
                    <FileText size={18} className="me-2"/> 
                    Hero & Intro Section {hasSectionError && "(Errors Found)"}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                
                {/* <ContentInput 
                    section="artist" field="mainTitle" label="Main Heading" max={16} 
                    register={register} watch={watch} errors={errors} 
                /> */}
                <TiptapEditor
                value={watch('artist.mainTitle')}
                onChange={(value: string) => setValue('artist.mainTitle', value)}
                height={200}
                />
                
                {/* <ContentInput 
                    section="artist" field="subTitle" label="Sub-Heading Line" max={80} 
                    register={register} watch={watch} errors={errors} 
                />
                 */}
                 <TiptapEditor
                value={watch('artist.subTitle')}
                onChange={(value: string) => setValue('artist.subTitle', value)}
                height={200}
                />
                {/* <ContentInput 
                    section="artist" field="description" label="Intro Paragraph" multiline rows={3} max={325} 
                    register={register} watch={watch} errors={errors} 
                /> */}
                <TiptapEditor
                value={watch('artist.description')}
                onChange={(value: string) => setValue('artist.description', value)}
                height={200}
                />

            </AccordionDetails>
        </Accordion>
    );
}