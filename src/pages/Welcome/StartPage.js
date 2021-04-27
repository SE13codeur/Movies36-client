import React from 'react'
import SignBar from '../../components/Layout/LogOut/SignBar'
import SignIn from '../../components/Layout/Sign.js/SignIn'
import SignUp from '../../components/Layout/Sign.js/SignUp'
import WelcomePage from './WelcomePage'

const StartPage = () => {
    return (
        <div>
            
            <SignBar />

        {/* If connected == false => SignBar with <SignIn /> || <SignUp />
        If connected => redirect <WelcomePage />  */}
            
        </div>
    )
}

export default StartPage
