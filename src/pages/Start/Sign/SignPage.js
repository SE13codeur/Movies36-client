import React from 'react'
import { Redirect } from 'react-router-dom'

import SignBar from '../../../components/Layout/SignMenuBar'
import SignIn from '../../../components/Start/Sign/SignIn'

const SignPage = () => {

    // STATES
    // useConnected
    
    {/* // REDIRECT IF USER IS LOGGED-IN OR SIGNED-IN */}
            // if(user.connected){
            //     return(
            //         <Redirect to='/start' />
            //     )
            // }

    return (
        <div>
            
            <SignBar />

            <SignIn />
            {/* if user.signIn == false =><Redirect to='/signUp' /> */}
    
        </div>
    )
}

export default SignPage
