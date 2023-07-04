import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse
} from '@mui/material'

const Register = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  //media
  const isNotMobile = useMediaQuery('(min-width:1000px)')
  //states
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  return (
    <div>
      <h1>Register</h1>
    </div>
  )
}

export default Register
