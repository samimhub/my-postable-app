import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getRandomHexColor = ({ opacity = "10" }: { opacity?: string }) => {
  const randomColor = Math.floor(Math.random() * 16777215);
  return `#${randomColor.toString(16).padStart(6, "0") + opacity}`;
};
