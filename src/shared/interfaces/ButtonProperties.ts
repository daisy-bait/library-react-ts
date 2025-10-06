
export interface ButtonProperties {
    class?: string | undefined,
    type: "button" | "submit",
    text: string,
    parentMethod?: () => void,
}