import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {FC} from 'react';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

interface SpinnerProps {
    size?: number;
}

const Spinner: FC<SpinnerProps> = ({size = 20}) => {
    return <FontAwesomeIcon style={{width: size, height: size}} icon={faSpinner} />;
};

export default Spinner;