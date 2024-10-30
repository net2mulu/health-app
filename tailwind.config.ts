import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "13": "13px",
      },
      spacing: {
        customGap: "448px",
      },
      boxShadow: {
        custom: "0px 82px 112.4px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        ab: ["ABeeZee", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "gilroy-semi-bold": ["gilroy-semiBold", "sans-serif"],
        "gilroy-bold": ["gilroy-bold", "sans-serif"],
        "gilroy-heavy": ["gilroy-heavy", "sans-serif"],
        "gilroy-medium": ["gilroy-medium", "sans-serif"],
      },
      colors: {
        primary: "#0D447A",
        secondary: "#353535",
        lime: "#5DBA47",
        mediumGray: "#868686",
        blue: "#BDDEFF",
        bluePrimary: "#236AD4",
        white: "#FFFFFF",
      },
      fontSize: {
        "head-48": "48px",
        "head-40": "40px",
        "head-24": "24px",
        "head-20": "20px",
        "head-16": ["1rem", { lineHeight: "1.3rem" }],
        "head-15": ["0.9375rem", { lineHeight: "1.2188rem" }],
        "head-14": "14px",
        "head-13": "13px",
        "head-12": "12px",
      },
      maxWidth: {
        custom: "1138.54px",
        inner: "785.91px",
      },
    },
  },
  plugins: [],
});

export default config;
