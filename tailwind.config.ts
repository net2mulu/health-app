import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 82px 112.4px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        ab: ["ABeeZee", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        "gilroy-semi-bold": ["gilroy-semi-bold", "sans-serif"],
        "gilroy-bold": ["gilroy-bold", "sans-serif"],
        "gilroy-medium": ["gilroy-medium", "sans-serif"],
      },
      colors: {
        primary: "#0D447A",
        secondary: "#353535",
        lime: "#5DBA47",
        mediumGray: "#868686",
        blue: "#BDDEFF",
        white: "#FFFFFF",
      },
      fontSize: {
        "head-48": "48px",
        "head-40": "40px",
        "head-24": "24px",
        "head-20": "20px",
        "head-15": "15px",
        "head-14": "14px",
      },
      maxWidth: {
        custom: "1138.54px",
      },
    },
  },
  plugins: [],
});

export default config;
