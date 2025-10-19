export interface PillProps {
    title: string
}
export interface ButtonProps {
    title: string;
    styles: string;
    size?: "small" | "medium" | "large";
    shapes?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
}