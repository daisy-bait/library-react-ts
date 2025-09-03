import type { CSSProperties } from "react";

export interface ButtonProperties {
    style?: CSSProperties | undefined,
    class?: string | undefined,
    text: string,
    type?: "button" | "submit",
}