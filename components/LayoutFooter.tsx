import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {styled} from "@mui/system";
import {Box, IconButton, Link} from "@mui/material";
import {Home} from "@mui/icons-material";
import {Offset} from "./LayoutOffset";

const Component = () => {
    return (
        <>
            <Offset/>
            <Box component="footer" sx={{py: 5, bgcolor: "primary.main"}}/>
        </>
    );
}

export default Component;