import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-1": "#001122",
        blue: {
          1: "#001122",
        },
        gray: {
          1: "#F8F8F8",
          2: "#888888",
          3: "#EBEBEB",
          4: "#666666",
          5: "#F7F7F7",
          6: "#999999"
        },
      },
      fontSize:{
        "3.5xl" : "2.0rem"
      }
    },
  },
  plugins: [],
};
export default config;
