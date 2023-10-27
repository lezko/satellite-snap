import React, {ChangeEvent, useState} from 'react';
import axios from 'axios';
import {useAppDispatch} from 'store';
import {logInError, logInSuccess} from 'store/userSlice';
import {ApiUrl} from 'api/ApiUrl';
import Spinner from 'components/Spinner';
import {Button, Input} from 'antd';
import Container from 'components/layout/Container';
import Flow, {Dir} from 'components/layout/Flow';

const SignUpPage = () => {
    const dispatch = useAppDispatch();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState({
        login: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match');
            return;
        } else {
            setError('');
        }
        setPending(true);
        axios.post(ApiUrl.register(), JSON.stringify({
            name: 'dummy name',
            login: data.login,
            password: data.password
        }))
            .then(res => {
                dispatch(logInSuccess(res.data));
                setError('');
            })
            .catch(e => {
                if (axios.isAxiosError(e)) {
                    const message = e.response?.data.message;
                    dispatch(logInError(message));
                    setError(message);
                } else {
                    setError(e.message);
                    dispatch(logInError(e.message));
                }
            })
            .finally(() => setPending(false));
    };

    return (
        <Container maxWidth={500}>
            <form style={{marginTop: 30}} className="sign-up-form" onSubmit={e => e.preventDefault()}>
                <Flow dir={Dir.Vertical} gap={10}>
                    <div>
                        <label htmlFor="login">Login:</label>
                        <Input disabled={pending} onChange={handleChange} value={data.login} type="text" id="login" name="login" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Input disabled={pending} onChange={handleChange} value={data.password} type="password" name="password"
                               id="password" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <Input disabled={pending} onChange={handleChange} value={data.confirmPassword} type="password" name="confirmPassword"
                               id="confirmPassword" />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Button disabled={pending} onClick={handleSubmit}>Sign up</Button>
                        {pending && <Spinner />}
                    </div>
                    <div className="error" style={{color: 'red'}}>{error}</div>
                </Flow>
            </form>
        </Container>
    );
};

export default SignUpPage;