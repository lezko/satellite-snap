import ProtectedLayout from 'router/security/ProtectedLayout';
import {UserRole} from 'models/User';
import {useLoggedInUser} from 'store/userSlice';
import {FC} from 'react';

interface AdminOnlyLayout {
    redirectPath: string;
}

const AdminOnlyLayout: FC<AdminOnlyLayout> = ({redirectPath}) => {
    const {user} = useLoggedInUser();
    return <ProtectedLayout isAllowed={user.role === UserRole.Admin} redirectPath={redirectPath} />
};

export default AdminOnlyLayout;