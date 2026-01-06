"use client";
import React, { useState, useEffect } from 'react';
import { useFormContext, useFieldArray } from "react-hook-form";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Divider, Box, IconButton, Button } from "@mui/material";
import { ChevronDown, Globe, Plus, Trash2 } from "lucide-react";

/**
 * Shared Style Object for the Labels and Focus state
 */
const inputStyle = {
    mb: 3,
    // 1. Default Label Color (Black)
    '& .MuiInputLabel-root': { color: '#000' },
    // 2. Focused Label Color (Blue)
    '& .MuiInputLabel-root.Mui-focused': { color: '#1976d2' },
    // 3. Error Label Color (Red - MUI default override)
    '& .MuiInputLabel-root.Mui-error': { color: '#d32f2f' },
    // 4. Focused Border Color (Blue)
    '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1976d2' },
    // Helper text styling
    '& .MuiFormHelperText-root.Mui-error': { 
        color: '#d32f2f',
        fontWeight: 500 
    }
};

const ContentInput = ({ section, field, label, multiline = false, rows = 1, max, register, watch, errors }: any) => {
    const fieldPath = `${section}.${field}`;
    const fieldError = errors[section]?.[field];
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
                <Box component="span" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <span style={{ color: fieldError ? '#d32f2f' : 'inherit' }}>
                        {fieldError ? (fieldError.message as string) : ""}
                    </span>
                    {max && (
                        <span style={{ color: charCount > max ? '#d32f2f' : 'inherit' }}>
                            {charCount}/{max}
                        </span>
                    )}
                </Box>
            }
            sx={inputStyle}
        />
    );
};

export default function MetaSEOEditor() {
    const { register, watch, control, formState: { errors } } = useFormContext<any>();
    const { fields, append, remove } = useFieldArray({ control, name: "seo.meta_tags" });
    
    const hasError = Boolean(errors?.seo);
    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => { if (hasError) setExpanded(true); }, [hasError]);

    return (
        <Accordion expanded={expanded} onChange={(_, isExpanded) => setExpanded(isExpanded)}
            elevation={0} sx={{ border: hasError ? '1px solid #d32f2f' : '1px solid #eee', mb: 2, borderRadius: '8px !important' }}>
            <AccordionSummary expandIcon={<ChevronDown />}>
                <Typography className="fw-bold d-flex align-items-center" sx={{ color: hasError ? '#d32f2f' : 'inherit' }}>
                    <Globe size={18} className="me-2"/> SEO & Meta Tags
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                
                <ContentInput section="seo" field="title" label="Page Title (SEO)" max={60} register={register} watch={watch} errors={errors} />

                <ContentInput section="seo" field="description" label="Site Description (SEO)" multiline rows={2} max={160} register={register} watch={watch} errors={errors} />
                
                <Divider sx={{ mb: 2 }}>
                    <Typography variant="caption" sx={{ color: '#999', fontWeight: 600 }}>ADDITIONAL META TAGS</Typography>
                </Divider>
                
                {fields.map((item, index) => {
                    const keyErrorMessage = (errors?.seo as any)?.meta_tags?.[index]?.key?.message;
                    const contentErrorMessage = (errors?.seo as any)?.meta_tags?.[index]?.content?.message;

                    return (
                        <Box key={item.id} sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'flex-start' }}>
                            <Box sx={{ flex: 1 }}>
                                <TextField 
                                    fullWidth size="small" label="Property" 
                                    InputLabelProps={{ shrink: true }}
                                    {...register(`seo.meta_tags.${index}.key`)} 
                                    error={Boolean(keyErrorMessage)}
                                    helperText={keyErrorMessage ?? ""}
                                    sx={inputStyle}
                                />
                            </Box>
                            <Box sx={{ flex: 2 }}>
                                <TextField 
                                    fullWidth size="small" label="Content" 
                                    InputLabelProps={{ shrink: true }}
                                    {...register(`seo.meta_tags.${index}.content`)} 
                                    error={Boolean(contentErrorMessage)}
                                    helperText={contentErrorMessage ?? ""}
                                    sx={inputStyle}
                                />
                            </Box>
                            <IconButton onClick={() => remove(index)} sx={{ color: '#d32f2f', mt: 0.5 }}>
                                <Trash2 size={18} />
                            </IconButton>
                        </Box>
                    );
                })}
                
                <Button 
                    startIcon={<Plus size={16} />} 
                    onClick={() => append({ key: '', content: '' })} 
                    sx={{ 
                        color: '#1976d2', // Matching the new blue theme
                        textTransform: 'none', 
                        fontWeight: 600, 
                        mt: 1,
                        '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.08)' } 
                    }}
                >
                    Add Custom Meta Tag
                </Button>
            </AccordionDetails>
        </Accordion>
    );
}