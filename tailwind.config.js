/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tur' : "url('https://cdn.wallpapersafari.com/59/88/JV03Rj.jpg')",
        'und' : "url('https://i.pinimg.com/originals/7e/c2/39/7ec239cfebe8feb54b026828d5bdc82f.jpg')",
        'logo' : "url('https://media.discordapp.net/attachments/1048873610460283001/1119240251420979290/oceanpal_logo.png')"
      }
    },

  },
  plugins: [
    require("daisyui")
  ],
}

