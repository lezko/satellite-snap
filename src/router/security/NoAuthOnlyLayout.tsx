import ProtectedLayout from 'router/security/ProtectedLayout';
import {useAppSelector} from 'store';
import {FC} from 'react';

interface NoAuthOnlyLayout {
    redirectPath: string;
}

const NoAuthOnlyLayout: FC<NoAuthOnlyLayout> = ({redirectPath}) => {
    const {user} = useAppSelector(state => state.user);
    return <ProtectedLayout isAllowed={!user} redirectPath={redirectPath} />
};

export default NoAuthOnlyLayout;