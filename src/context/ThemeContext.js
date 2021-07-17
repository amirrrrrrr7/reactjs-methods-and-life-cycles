import React from 'react'

export const themes = {
    light: {
        color: '#111',
        background: '#eee'
    },
    dark: {
        color: '#fff',
        background: '#222'
    }
}

const ThemeContext = React.createContext()

export default ThemeContext
