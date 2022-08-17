import { createGlobalStyle } from 'styled-components'
 
export const accentColor = '#ff3131'
export const borderColor = '#e6e6e6'
export const activeColor = '#b3b7ff'
export const eventColor  = '#ebecff'
export const timeColor   = '#c0c0c0'
export const bgColor     = '#f6f6f6'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
  isolation: isolate;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
 
export default GlobalStyle