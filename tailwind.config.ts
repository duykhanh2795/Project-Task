import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app.pages.tsx",
  ],
  safelist: [
    "bg-[red]",
    "bg-[yellow]",
    "bg-[green]",
    "bg-[blue]",
    "bg-[purple]",
    "bg-[pink]",
    "bg-[orange]",
    "bg-[brown]",
    "bg-[black]",
    "bg-[white]",
    "bg-[gray]",
    "bg-[turmeric]",
    "bg-[coral]",
    "bg-[blush]",
    "bg-[lime]",
    "bg-[brick]",
    "bg-[mint]",
    "bg-[jade]",
    "bg-[lavender]",
    "bg-[terracotta]",
    "bg-[indigo]",
    "bg-[cyan]",
    "bg-[magenta]",
    "bg-[amber]",
    "bg-[emerald]",
    "bg-[teal]",
    "bg-[violet]",
    "bg-[rose]",
    "bg-[lightblue]",
    "bg-[lightgreen]",
    "bg-[lightpink]",
    "bg-[lightskyblue]",
    "bg-[lightcoral]",
    "bg-[lightseagreen]",
    "bg-[lightsteelblue]",
    "bg-[lightyellow]",
    "bg-[lightgrey]",
    "bg-[lightcyan]",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      wordBreak: ['hover'], // Add this line
    },
  },
  plugins: [],
};
export default config;
