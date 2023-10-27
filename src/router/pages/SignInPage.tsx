import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from 'store';
import {logIn} from 'store/userActionCreators';
import Spinner from 'components/Spinner';
import Container from 'components/layout/Container';
import Flow, {Dir} from 'components/layout/Flow';
import {Button, Input} from 'antd';

const SignInPage = () => {
    const dispatch = useAppDispatch();
    const {error, loading} = useAppSelector(state => state.user);
    const [data, setData] = useState({
        login: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        dispatch(logIn(data.login, data.password));
    };

    return (
        <Container maxWidth={500}>
            <form style={{marginTop: 30}} className="login-form" onSubmit={e => e.preventDefault()}>
                <Flow gap={10} dir={Dir.Vertical}>
                    <div>
                        <label htmlFor="login">Login:</label>
                        <Input disabled={loading} onChange={handleChange} value={data.login} type="text" id="login" name="login" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Input disabled={loading} onChange={handleChange} value={data.password} type="password" name="password"
                               id="password" />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Button disabled={loading} onClick={handleSubmit}>Sign in</Button>
                        {loading && <Spinner />}
                    </div>
                    <div className="error" style={{color: 'red'}}>{error}</div>
                </Flow>
            </form>
        </Container>
    );
};

export default SignInPage;