import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import {Container, Link} from "@mui/material";
import PageAddReplay from "../components/PageAddReplay";


// http://localhost:3000/add-replay


const Page: NextPage = () => {
    return <PageAddReplay/>
}

export default Page
