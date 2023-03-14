module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //dark background for code block
        'dark-code': '#1e293b',
        //socil media icon
        'github': '#171515',
        'linkedin': '#1d66c2',
        'facebook': '#2677f2',
        'twiter': '#2ba1f2',
        'behance': '#2557ff',
        'youtube': '#FF0000',
      },
    },
    container: {
      center: true,
    },

  },
  plugins: [
    // require('flowbite/plugin')

  ]
}
