import React from 'react'
import { Redirect } from 'react-router-dom'

import SignBar from '../../components/Layout/StartMenuBar'
import SignIn from '../../components/Welcome/Sign/SignIn'
import SignUp from '../../components/Welcome/Sign/SignUp'

const StartPage = () => {

    // STATES
    const [userExists, setUserExists] = useState(false)
    
    {/* // REDIRECT IF USER IS LOGGED-IN OR SIGNED-UP */}
            // if(userExists){
            //     return(
            //         <Redirect to='/welcome' />
            //     )
            // }

    return (
        <div>
            
            <SignBar />

            <SignIn />
            {/* if user.signIn == false => <SignUp /> */}
    
        </div>
    )
}

export default StartPage
