'use client';

import * as React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import styled from "styled-components";

interface StyledButtonProps {
    $border?: string;
    $bgColor?: string;
    $bgHover?: string;
    $textColor?: string;
}

export interface CustomButtonProps extends MuiButtonProps {
    border?: string;
    bgColor?: string;
    bgHover?: string;
    textColor?: string;
    label: string;
}

const StyledButton = styled(MuiButton)<StyledButtonProps>`
    border-radius: 10px;
    border: ${(props) => props.$border || "none"};
    font-size: 16px;
    padding: 10px 25px;
    text-transform: none;
    font-weight: 600;
    background-color: ${(props) => props.$bgColor || "var(--color-primary)"};
    color: ${(props) => props.$textColor || "var(--background)"};

    &:hover {
        background-color: ${(props) => props.$bgHover || "var(--color-primary-focus)"};
        color: var(--background);
    }
`;

export default function CustomButton({
    border,
    bgColor,
    bgHover,
    textColor,
    label,
    variant = "contained",
    size = "medium",
    ...props
}: CustomButtonProps) {
    return (
        <StyledButton
        variant={variant}
        size={size}
        $border={border}
        $bgColor={bgColor}
        $bgHover={bgHover}
        $textColor={textColor}
        {...props}
        >
        {label}
        </StyledButton>
    );
}