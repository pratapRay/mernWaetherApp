/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        lora: "'Lora', serif",
        piazzolla: "'Piazzolla', serif",
        poppins: "'Poppins', sans-serif",
        PtSans: "'PT Sans', sans-serif",
        WorkSans: "'Work Sans', sans-serif",
      }

    },
    
    
  },
  plugins: [],
}

