import {Navigate, Outlet} from 'react-router-dom';
import {FC} from 'react';

interface ProtectedLayoutProps {
    redirectPath: string;
    isAllowed: boolean;
}

const ProtectedLayout: FC<ProtectedLayoutProps> = ({redirectPath, isAllowed}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
};

export default ProtectedLayout;