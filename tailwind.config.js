/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };




module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    "bg-red-500", // Classes you want to protect from purging
    "text-xl",
    "lg:text-2xl",
  ],
  theme: {
    extend: {},
  },
};
