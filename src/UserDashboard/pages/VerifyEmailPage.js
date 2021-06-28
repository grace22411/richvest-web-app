import React from 'react'
import {VerifyPage } from '../styles/DashboardStyles'
import {Link} from "react-router-dom"

const VerifyEmailPage = () => {
    return (
        <VerifyPage>
            <h3>Please check your mail for the link  verify your email, so that you can login</h3>
            <Link to="/">
            <button>Go to Login</button>
            </Link>
            
            
        </VerifyPage>
    )
}

export default VerifyEmailPage
