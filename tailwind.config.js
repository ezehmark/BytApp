module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}", // ✅ this line catches root files like buydata.tsx
  ],
  theme: { extend: {} },
  plugins: [],
};
