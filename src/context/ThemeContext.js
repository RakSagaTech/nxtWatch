import React from 'react'

const ThemeContext = React.createContext({
  theme: 'Dark',
  toggleTheme: () => {},
  updateBanner: () => {},
})

export default ThemeContext
