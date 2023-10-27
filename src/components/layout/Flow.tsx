import styled from 'styled-components';
import {FC, ReactNode} from 'react';

export enum Dir {
    Vertical = 'Vertical',
    Horizontal = 'Horizontal',
}

function getStyleName(dir: Dir) {
    if (dir === Dir.Horizontal) {
        return 'margin-left:';
    } else {
        return 'margin-top:';
    }
}

const StyledFlow = styled.div<{$dir: Dir; $gap: number}>`
  & > * + * {
    ${props => getStyleName(props.$dir)} ${props => props.$gap}px;
  }
`;

// todo breakpoint parameter
interface FlowProps {
    children: ReactNode;
    gap: number;
    dir: Dir;
}

const Flow: FC<FlowProps> = ({dir, children, gap}) => {
    return (
        <StyledFlow $dir={dir} $gap={gap}>
            {children}
        </StyledFlow>
    );
};

export default Flow;