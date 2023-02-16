/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      width: px0_200,
      height: px0_200,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      colors: {
        black: "#000",
        white: "white",
        "black-100": "#F9FAFB",
        "black-200": "#F3F4F6",
        "black-300": "#E5E7EB",
        "black-400": "#D1D5DB",
        "black-500": "#9CA3AF",
        "black-600": "#6B7280",
        "black-700": "#4B5563",
        "black-800": "#374151",
        "black-900": "#1F2937",
        "black-1000": "#111827",
        "white-100": "#FFFFFF",
        "white-200": "#F9FAFB",
        "white-300": "#F3F4F6",
        "white-400": "#E5E7EB",
        "white-500": "#D1D5DB",
        "white-600": "#9CA3AF",
        "white-700": "#6B7280",
        "white-800": "#4B5563",
        "white-900": "#374151",
        "white-1000": "#1F2937",
        "primary-100": "#F3F4F6",
        "primary-200": "#E5E7EB",
        "primary-300": "#D1D5DB",
        "primary-400": "#9CA3AF",
        "primary-500": "#6B7280",
        "primary-600": "#4B5563",
        "primary-700": "#374151",
        "primary-800": "#1F2937",
        "primary-900": "#111827",
      },
    },
  },
  plugins: [],
};
