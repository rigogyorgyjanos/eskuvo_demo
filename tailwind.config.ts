/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx,js,jsx}",
        "./components/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1c1c1c",
                accent: "#e5d3b3",
                secondary: "#f8f4f0",
                highlight: "#c19f7f",
                grayLight: "#faf7f5",
                grayDark: "#4a4a4a",
            },
            fontFamily: {
                sans: ["Montserrat", "ui-sans-serif", "system-ui"],
                serif: ["Playfair Display", "ui-serif", "Georgia"],
            },
            boxShadow: {
                card: "0 10px 25px rgba(0,0,0,0.05)",
                hoverCard: "0 15px 35px rgba(0,0,0,0.1)",
                button: "0 5px 15px rgba(0,0,0,0.08)",
            },
            borderRadius: {
                xl: "1rem",
            },
            spacing: {
                section: "6rem",
            },
            transitionDuration: {
                400: "400ms",
            },
        },
    },
    plugins: [],
};