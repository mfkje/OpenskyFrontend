import { React, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const ProtectedRoute = ({children})=> {

    const {isAuth} = useContext(DataContext)

    if (!isAuth) {
        return <Navigate to="/" replace/>
    }
    return children
}

export default ProtectedRoute