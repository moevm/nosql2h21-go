import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import MatchesTable from 'components/MatchesTable';

const Matches: NextPage = () => {
  return (
    <MatchesTable />
  )
}

export default Matches
