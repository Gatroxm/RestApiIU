import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from "@mui/material";
import { useEffect, useState } from "react";
import { deleteUser } from "../services/userService";
import useFormStyles from "../styles/useFormFields";
import { FormEdit } from "./FormEdit";
import useUsers from "../hooks/useUsers";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const TableData = (props) => {
  const [userEdit, setUserEdit] = useState({});
  const [open, setOpen] = useState(false);
  const classes = useFormStyles();
  const [users, setUsers] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (user) => {
    setUserEdit(user);
    setOpen(true);
  };
  const handleDelete = (id) => {
    deleteUser(id).then((resp) => {
      if (resp.status === 200) {
        setUsers(users.filter((users) => users._id !== id));
        props.openAlerta('Se Eliminó el usuario')
      }
    });
  };
  useEffect(() => {
    setUsers(props.users);
  }, [props.users]);

  return (
    <>
      <TableContainer component={Paper}>
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
              <TableCell>
                <strong>Accions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, key) => (
              <TableRow key={key}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.cc}</TableCell>
                <TableCell>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      color="error"
                      className={classes.borderButton}
                      onClick={() => handleDelete(user._id)}
                    >
                      Eliminar
                    </Button>
                    <Button color="warning" onClick={() => handleOpen(user)}>
                      Editar
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button className={classes.borderButton} onClick={() => props.back()}>Back</Button>
        <Button className={classes.borderButton} onClick={() => props.next()}>Next</Button>
      </ButtonGroup>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormEdit user={userEdit} handleClose={handleClose} openAlerta={props.openAlerta} />
        </Box>
      </Modal>
    </>
  );
};

export default TableData;
