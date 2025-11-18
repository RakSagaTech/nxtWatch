import React from 'react'

const ThemeContext = React.createContext({
  theme: 'Dark',
  toggleTheme: () => {},
})

export default ThemeContext
