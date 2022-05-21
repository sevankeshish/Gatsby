import { createGlobalStyle } from "styled-components"
import NunitoRegular from "./fonts/Nunito-Regular.ttf"
import NunitoBlack from "./fonts/Nunito-Black.ttf"

export const colors = {
  white: "#fff",
  darkGrey: "#1c1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
}

export const darkTheme = {
  colors: {
    background: colors.darkGrey,
    menuBackground: colors.blueShade1,
    textDark: colors.blueShade3,
    textMain: colors.blueShade2,
    textSecondary: colors.blueShade3,
  },
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGrey,
  },
}
