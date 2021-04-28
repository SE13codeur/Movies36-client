import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

import SignBar from '../../components/Layout/SignMenuBar'
import SignIn from '../../components/start/Sign/SignIn'
import SignUp from '../../components/start/Sign/SignUp'

const StartPage = () => {

    // STATES
    const [userExists, setUserExists] = useState(false)
    
    {/* // REDIRECT IF USER IS LOGGED-IN OR SIGNED-UP */}
            if(userExists){
                return(
                    <Redirect to='/welcome' />
                )
            }

    return (
        <div>
            
            <SignBar />

            <SignIn />
            {/* if user.signIn == false => <SignUp /> */}
    
        </div>
    )
}

export default StartPage
