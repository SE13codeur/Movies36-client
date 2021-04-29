import React from 'react'

import SignBar from '../../components/Layout/SignMenuBar'
import SignIn from '../../components/Start/SignIn'

const SignPage = () => {

    // STATES
    // useConnected
    
    // eslint-disable-next-line no-lone-blocks
    {/* // REDIRECT IF USER IS LOGGED-IN OR SIGNED-IN */}
            // if(user.connected){
            //     return(
            //         <Redirect to='/welcomeMovies' />
            //     )
            // }

    return (
        <div>
            
            <SignBar />

            <SignIn />
            {/* useConnected =><Redirect to='/signUp' /> */}
    
        </div>
    )
}

export default SignPage
