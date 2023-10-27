import styled from 'styled-components';
import {FC, ReactNode} from 'react';

const MAX_CONTAINER_WIDTH = 1000;

const StyledContainer = styled.div<{$maxWidth: number}>`
  max-width: ${props => props.$maxWidth}px;
  margin: 0 auto;
  padding-inline: 10px;
`;

interface ContainerProps {
    children: ReactNode;
    maxWidth?: number;
}

const Container: FC<ContainerProps> = ({children, maxWidth = MAX_CONTAINER_WIDTH}) => {
    return (
        <StyledContainer $maxWidth={maxWidth}>
            {children}
        </StyledContainer>
    );
};

export default Container;