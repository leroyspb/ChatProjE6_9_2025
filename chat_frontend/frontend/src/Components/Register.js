import React from 'react'
import {TextField, Button} from "@mui/material";

export default function Register() {
    return (
        <>
            <div className='container text-center'>
                <div className='mt-3'><TextField id="email" type='email' label="Email" variant="filled" /></div>
                <div className='mt-3'><TextField id="first_name" type='text' label="First Name" variant="filled"/></div>
                <div className='mt-3'><TextField id="last_name" type='text' label="Last Name" variant="filled"/></div>
                <div className='mt-3'><TextField id="password" type='password' label="Password" variant="filled"/></div>
                <div className='mt-3'><Button variant="contained" color="primary">Register</Button></div>
            </div>
        </>
    )
}