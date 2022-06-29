import {
    makeStyles
} from '@mui/styles'

const useFormStyles = makeStyles(() => ({
    formField: {
        marginBottom: '2.5em'
    },
    formButtons: {
        marginRight: '1em'
    },
    borderButton: {
        borderColor: 'transparent !important'
    },
    hiddem: {
        display: 'none'
    }
}))
export default useFormStyles