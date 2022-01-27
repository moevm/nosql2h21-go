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



export default function UsersTable() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState({
    name: "",
    lastName: "",
    rank: ""
  })

  const getData = () => axios.post("/api/users", { filter }).then(res => {
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
                <TextField variant="filled" label="Имя" fullWidth value={filter.name} onChange={(e) => { setFilter(prev => ({ ...prev, name: e.target.value })) }} />
              </Grid>
            </Grid>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Фамилия" fullWidth value={filter.lastName} onChange={(e) => { setFilter(prev => ({ ...prev, lastName: e.target.value })) }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="row" wrap='nowrap' justifyContent="space-between" spacing={1}>
            <Grid item container direction="column" spacing={1}>
              <Grid item>
                <TextField variant="filled" label="Ранг" fullWidth value={filter.rank} onChange={(e) => { setFilter(prev => ({ ...prev, rank: e.target.value })) }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Button onClick={getData} fullWidth>Поиск</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="right">Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.lastName}</TableCell>
                <TableCell align="right">{row.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
