import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import {Link} from "@mui/material";

const LayoutHeader = () => {
    return (
        <Container maxWidth="sm">
            <h1>Home Page</h1>
            <p>lorem*15</p>
            <Link href="#">Link</Link>
        </Container>
    )
}

export default LayoutHeader;