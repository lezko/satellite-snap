import {Outlet} from 'react-router-dom';
import {useAppDispatch} from 'store';
import {useEffect} from 'react';
import {verifyUser} from 'store/userActionCreators';
import {useUser} from 'store/userSlice';
import Navbar from 'components/nav/Navbar';

const Root = () => {
    const dispatch = useAppDispatch();
    const {loading, user} = useUser();
    useEffect(() => {
        if (loading && user) {
            dispatch(verifyUser());
        }
    });
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Root;
