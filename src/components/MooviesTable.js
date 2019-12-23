import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import ErrorSnackbar from './ErrorSnackbar'

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    marginTop: '2rem'
  },
  tableFooterRoot: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const MooviesTable = () => {
  const classes = useStyles()
  const moovies = useSelector(state => state.moovies.moovieList)
  const isMoovieListLoading = useSelector(state => state.moovies.isMoovieListLoading)
  const errorMessage = useSelector(state => state.moovies.error)

  return (
    isMoovieListLoading
      ? <CircularProgress className={classes.root} />
      : (
        <TableContainer component={Paper}>
          <Table aria-label='moovies table'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Release Date</TableCell>
                <TableCell>Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                moovies.length
                  ? moovies.map(moovie => (
                    <TableRow key={moovie.id}>
                      <TableCell component='th' scope='moovie'>
                        {moovie.title}
                      </TableCell>
                      <TableCell>{moovie.release_date}</TableCell>
                      <TableCell>{moovie.overview}</TableCell>
                    </TableRow>
                  ))
                  : (
                    <TableRow>
                      <TableCell colSpan={3} align='center' variant='footer'>No results</TableCell>
                    </TableRow>
                  )
              }
            </TableBody>
          </Table>
          <ErrorSnackbar message={errorMessage} />
        </TableContainer>
      )
  )
}

export default MooviesTable
