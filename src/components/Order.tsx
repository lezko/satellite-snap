import {FC} from 'react';
import styled from 'styled-components';

interface OrderProps {
    rect: google.maps.LatLngBoundsLiteral;
}

const StyledOrder = styled.div`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.text};
  padding: 5px;
`;

const Order: FC<OrderProps> = ({rect}) => {
    return (
        <StyledOrder>
            <h3>Order</h3>
            <div>North = {rect.north}, South - {rect.south}, East - {rect.east}, West - {rect.west}</div>
        </StyledOrder>
    );
};

export default Order;