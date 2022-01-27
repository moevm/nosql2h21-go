import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import UsersTable from 'components/UsersTable';

const Matches: NextPage = () => {
  return (
    <UsersTable />
  )
}

export default Matches
