import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h4 style={{textAlign: 'center'}}>Unexpected error occurred.</h4>
            <NavLink style={{textAlign: 'center'}} to="/home" >Back to Home</NavLink>
        </div>
    );
};

export default ErrorPage;