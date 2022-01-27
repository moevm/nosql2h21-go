import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import MatchesTable from 'components/MatchesTable';
import { Grid } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Grid container direction="column" alignItems="center" width="100%" >
      <Grid item>
        <h1>
          Визуализатор партий в игре Го
        </h1>
      </Grid>
      <Grid item>
        <Image src="/Go_board.png" width={512} height={512} alt="cat" />
      </Grid>
    </Grid >
  )
}

export default Home
