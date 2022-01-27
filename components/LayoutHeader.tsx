import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { Box, styled } from "@mui/system";
import { IconButton } from "@mui/material";
import { Home, Group, VideogameAsset } from "@mui/icons-material";
import { Offset } from "./LayoutOffset";
import Link from 'next/link';
;



const Component = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="lg" sx={{ display: `flex`, justifyContent: `space-between`, alignItems: "center", padding: "4px 0" }}>
                        <Link href="/" passHref>
                            <IconButton edge="start" aria-label="home" >
                                <Home color={"info"} fontSize="large" />
                            </IconButton>
                        </Link>
                        <Box width={24} />
                        <Link href="/matches" passHref>
                            <IconButton edge="start" aria-label="home">

                                <VideogameAsset color={"info"} fontSize="large" />
                            </IconButton>
                        </Link>
                        <Box width={24} />
                        <Link href="/users" passHref>
                            <IconButton edge="start" aria-label="home">
                                <Group color={"info"} fontSize="large" />
                            </IconButton>
                        </Link>
                        <h2>Go Viewer</h2>
                    </Container>
                </Toolbar>
            </AppBar>
            <Offset />
            <Box height={24} />
        </>
    );
}

export default Component;