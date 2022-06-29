import axios from "axios";

export const createUser = async(user) => {
    const resp = await axios.post(process.env.REACT_APP_USERS_URL, user);
    return resp;
}

export const deleteUser = async(id) => {
    const resp = await axios.delete(`${process.env.REACT_APP_USERS_URL}/${id}`)
    return resp
}

export const editUser = async(user) => {
    const resp = await axios.patch(`${process.env.REACT_APP_USERS_URL}/${user._id}`, user);
    return resp;
}
export const getUsers = async(skip = 0, limit = 5) => {
    const resp = await axios.get(`${process.env.REACT_APP_USERS_URL}/?skip=${skip}&limit=${limit}`);
    return resp;
}