import React from 'react';
import { LoginBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    return(
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg"/>
            </div>
            <div className="right">
                <p>Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={18}/>
                <Input label="Password" placeholder="Pasword"/>
                <Gap height={50}/>
                <Button title="Login" onClick={() => history.push('./register')}/>
                <Gap height={100}/>
                <Link title="Sign Up"/>
            </div>
        </div>
    )
}
export default Login;


