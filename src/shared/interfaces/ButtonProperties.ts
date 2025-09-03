import type { CSSProperties } from "react";

export interface ButtonProperties {
    style?: CSSProperties | undefined,
    className?: string | undefined,
    text: string,
    type?: "button" | "submit",
}