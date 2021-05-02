import { purple, blue, pink } from '@material-ui/core/colors'
import { responsiveFontSizes, createMuiTheme } from "@material-ui/core"

let theme = {
    "typography": {
      "fontFamily": [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ]
    },
    "palette": {
      "common": {
        "black": "#000",
        "white": "#fff"
      },
      "background": {
        "paper": "#fff",
        "default": "#fafafa"
      },
      "primary": {
        "light": pink,
        "main": blue,
        "dark": "#000",
        "contrastText": "#fff"
      },
      "secondary": {
        "light": "#ff4081",
        "main": "#f50057",
        "dark": purple,
        "contrastText": "#fff"
      },
      "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
      },
      "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
      }
    }
  };
  
  theme = createMuiTheme(theme)
  theme = responsiveFontSizes(theme)
  export default theme