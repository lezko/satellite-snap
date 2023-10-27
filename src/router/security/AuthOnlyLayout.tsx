import ProtectedLayout from 'router/security/ProtectedLayout';
import Spinner from 'components/Spinner';
import {useUser} from 'store/userSlice';
import {FC} from 'react';

interface AuthOnlyLayoutProps {
    redirectPath: string;
}

const AuthOnlyLayout: FC<AuthOnlyLayoutProps> = ({redirectPath}) => {
    const {user, loading} = useUser();
    return loading ?
        <div style={{display: 'flex', justifyContent: 'center'}}><Spinner /></div> :
        <ProtectedLayout isAllowed={user !== null} redirectPath={redirectPath} />;
};

export default AuthOnlyLayout;