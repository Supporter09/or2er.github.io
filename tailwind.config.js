/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite/**/*.js",
        "node_modules/flowbite-react/lib/esm/**/*.js",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                neue: ["var(--font-neue)"],
                right_grotesk: ["var(--font-right_grotesk)"],
                right_grotesk_dark: ["var(--font-right_grotesk-dark)"],
            },
            colors: {
                "primary-red": "#F10000",
            },
            screens: {
                "xsm": "375px"
            }
        },
    },
    plugins: [require("flowbite/plugin")],
};
