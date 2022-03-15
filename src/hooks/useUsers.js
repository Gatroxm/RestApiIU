import {
  useState,
  useEffect
} from 'react'

import axios from 'axios'

const useUSers = () => {
  const [users, setUsers] = useState([])

  /** GET USERS */
  useEffect(() => {
    const getUSers = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_USERS_URL)

        setUsers(data)
      } catch (err) {
        console.log('KO::USERS', err)
      }
    }

    getUSers()
  }, [])

  return {
    users
  }
}

export default useUSers
