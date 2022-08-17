export {};

declare global {
  export type IconTyping =
    | "text-bold"
    | "text-italic"
    | "text-underline"
    | "text-color-primary"
    | "text-color-secondary"
    | "media-play"
    | "media-pause";

  export type ButtonStyleVariant =
    | "default"
    | "success"
    | "warning"
    | "error"
    | "disabled"
    | "loading";
}
