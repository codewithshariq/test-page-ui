import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          light: "hsl(240, 17%, 45%)",
        },
        primary: {
          DEFAULT: "hsl(246, 53%, 47%)",
          light: "hsl(241, 82%, 59%)",
          foreground: "hsl(51, 91%, 91%)",
        },
        secondary: {
          DEFAULT: "hsl(242, 91%, 83%)",
        },
        tertiary: {
          DEFAULT: "hsl(290, 85%, 82%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
