'use client';

import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActions, CardProps } from "@mui/material";
import type { CardMediaProps } from "@mui/material/CardMedia";
import styled from "styled-components";
import CustomButton from "./Button";
import type { CustomButtonProps } from "./Button";

interface CustomCardProps extends CardProps {
  bgColor?: string;
  textColor?: string;
  alignItems?: string;
  textAlign?: string;
  borderRadius?: string;
  title?: string;
  borderTop?: boolean;
  borderLeft?: boolean;
  paddingLeft?: boolean;
  justifyContent?: string;
  width?: string;
  height?: string;
  description?: string;
  mediaProps?: Partial<CardMediaProps> & { alt?: string };
  mediaWidth?: string | number;
  mediaHeight?: string | number;
  buttonLabel?: string;
  buttonProps?: Partial<CustomButtonProps>;
  buttonLink?: string;
}

const StyledCard = styled(Card)<{
  $bgColor?: string;
  $textColor?: string;
  $alignItems?: string;
  $textAlign?: string;
  $justifyContent?: string;
  $borderRadius?: string;
  $width?: string;
  $height?: string;
}>`
  background-color: ${(props) => props.$bgColor || "var(--color-primary)"};
  color: ${(props) => props.$textColor || "var(--background)"};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$alignItems || "flex-start"};
  text-align: ${(props) => props.$textAlign || "left"};
  justify-content: ${(props) => props.$justifyContent || "space-between"};
  padding: 10px;
  border-radius: ${(props) => props.$borderRadius || "12px"};
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};

  @media (min-width: 768px) {
    align-items: ${(props) => props.$alignItems || "center"};
    text-align: ${(props) => props.$textAlign || "center"};
  }
`;

const StyledCardMedia = styled(CardMedia)<{
  $width?: string | number;
  $height?: string | number;
}>`
  width: ${(props) => props.$width || "50px"};
  height: ${(props) => props.$height || "50px"};
  max-width: 400px;
  margin: 0 auto;
`;

const Description = styled(Typography)<{
  $borderTop?: boolean;
  $borderLeft?: boolean;
  $paddingLeft?: boolean;
}>`
  color: text.secondary;
  white-space: pre-line;
  line-height: 1.8;
  border-top: ${(props) => (props.$borderTop ? "2px solid var(--color-primary)" : "none")};
  border-left: ${(props) => (props.$borderLeft ? "2px solid var(--color-primary)" : "none")};
  padding-left: ${(props) => (props.$paddingLeft ? "10px" : "0")};
`;

const CustomCard: React.FC<CustomCardProps> = ({
  bgColor,
  textColor,
  alignItems,
  textAlign,
  borderRadius,
  title,
  borderTop,
  borderLeft,
  paddingLeft,
  justifyContent,
  width,
  height,
  description,
  mediaProps = {},
  mediaHeight,
  mediaWidth,
  buttonLabel,
  buttonProps = {},
}) => {
  return (
    <StyledCard
      $bgColor={bgColor}
      $textColor={textColor}
      $alignItems={alignItems}
      $textAlign={textAlign}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $justifyContent={justifyContent}
    >
      {mediaProps?.image && (
        <StyledCardMedia
          {...mediaProps}
          $width={mediaWidth}
          $height={mediaHeight}
        />
      )}
      <CardContent>
        {title && (
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
        )}
        <Description
          variant="body2"
          $borderTop={borderTop}
          $borderLeft={borderLeft}
          $paddingLeft={paddingLeft}
        >
          {description}
        </Description>
      </CardContent>
      {buttonLabel && (
        <CardActions>
          <CustomButton
            label={buttonLabel}
            {...buttonProps}
          />
        </CardActions>
      )}
    </StyledCard>
  );
};

export default CustomCard;