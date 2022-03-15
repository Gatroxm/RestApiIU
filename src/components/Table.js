import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'

import useUSers from '../hooks/useUsers'

const TableData = () => {
  const { users } = useUSers()
 
  return (
    <TableContainer
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Nombre</strong>
            </TableCell>
            <TableCell>
              <strong>Apellido</strong>
            </TableCell>
            <TableCell>
              <strong>E-mail</strong>
            </TableCell>
            <TableCell>
              <strong>Teléfono</strong>
            </TableCell>
            <TableCell>
              <strong>C.C.</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, key) => (
            <TableRow
              key={key}
            >
              <TableCell>
                {user.name}
              </TableCell>
              <TableCell>
                {user.lastName}
              </TableCell>
              <TableCell>
                {user.email}
              </TableCell>
              <TableCell>
                {user.phoneNumber}
              </TableCell>
              <TableCell>
                {user.cc}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableData
