import styled from "styled-components";

interface TitleTextProps {
    size?: "xl" | "l" | "m" | "s" | "xs";
    color?: "title" | "subtitle" | "text";
    weight?: string | number;
}

interface RegularTextProps {
    size?: "l" | "m" | "s";
    color?: "title" | "subtitle" | "label";
    weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
    color: ${({ theme}) => theme.colors["base-text"]};
    font-size: ${({ theme, size}) => theme.textSizes[`title-title-${size ?? "m"}`]};
    font-family: ${({ theme }) => theme.fonts.title};
    line-height: 1.2;
    font-weight: ${({ weight }) => weight ?? 800};
    margin-bottom: 1rem;

`

export const RegularText = styled.p<RegularTextProps>`
    color: ${({ theme}) => theme.colors["base-text"]};
    font-size: ${({ theme, size}) => theme.textSizes[`text-regular-${size ?? "m"}`]};
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: 1.6;
    font-weight: ${({ weight }) => weight ?? 400};

   

`