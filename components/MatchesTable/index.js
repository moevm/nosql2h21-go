import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Grid, TextField } from '@mui/material';
import Link from 'next/link';





export default function MatchesTable() {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState({
    event: "",
    whiteName: "",
    whiteLastName: "",
    blackName: "",
    blackLastName: "",
    komiMin: "",
    komiMax: "",
  })

  const getData = () => axios.post("/api/matches", { filter }).then(res => {
    if (Array.isArray(res.data?.data))
      setData(res.data?.data)
  })
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Box px={1} width="100%">
        <Grid container direction="column" spacing={1}>
          <Grid item container direction="row" wrap='nowrap' justifyContent="space-between" spacing={1}>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Событие" fullWidth value={filter.event} onChange={(e) => { setFilter(prev => ({ ...prev, event: e.target.value })) }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="row" wrap='nowrap' justifyContent="space-between" spacing={1}>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Имя белого" fullWidth value={filter.whiteName} onChange={(e) => { setFilter(prev => ({ ...prev, whiteName: e.target.value })) }} />
              </Grid>
              <Grid item>
                <TextField variant="filled" label="Фамилия белого" fullWidth value={filter.whiteLastName} onChange={(e) => { setFilter(prev => ({ ...prev, whiteLastName: e.target.value })) }} />
              </Grid>
            </Grid>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Имя черного" fullWidth value={filter.blackName} onChange={(e) => { setFilter(prev => ({ ...prev, blackName: e.target.value })) }} />
              </Grid>
              <Grid item>
                <TextField variant="filled" label="Фамилия черного" fullWidth value={filter.blackLastName} onChange={(e) => { setFilter(prev => ({ ...prev, blackLastName: e.target.value })) }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="row" wrap='nowrap' justifyContent="space-between" spacing={1}>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Коми мин" fullWidth type="number" value={filter.komiMin} onChange={(e) => { setFilter(prev => ({ ...prev, komiMin: e.target.value })) }} />
              </Grid>
            </Grid>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Коми макс" fullWidth type="number" value={filter.komiMax} onChange={(e) => { setFilter(prev => ({ ...prev, komiMax: e.target.value })) }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Button onClick={getData} fullWidth>Поиск</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow >
              <TableCell>Event</TableCell>
              <TableCell>White Player</TableCell>
              <TableCell>Black Player</TableCell>
              <TableCell align="right">Result</TableCell>
              <TableCell align="right">Komi</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Link key={row._id} href={`/game/${row._id}/play`}>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  hover
                  style={{ cursor: "pointer" }}
                >
                  <TableCell >{row.event}</TableCell>
                  <TableCell >{`${row.whitePlayer.name} ${row.whitePlayer.lastName}`}</TableCell>
                  <TableCell >{`${row.blackPlayer.name} ${row.blackPlayer.lastName}`}</TableCell>
                  <TableCell align="right">{row.result}</TableCell>
                  <TableCell align="right">{row.komi}</TableCell>
                  <TableCell align="right">{row.date && new Date(row.date).toLocaleDateString()}</TableCell>
                </TableRow>
              </Link>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
