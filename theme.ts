import {createTheme, responsiveFontSizes} from "@mui/material";
import {yellow, grey, lightBlue} from "@mui/material/colors";

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: yellow["800"]
        },
        secondary: {
            main: grey["800"]
        },
        info: lightBlue
    },
}));