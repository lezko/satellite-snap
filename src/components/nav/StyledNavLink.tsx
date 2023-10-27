import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {AppTheme} from 'AppTheme';

const StyledNavLink = styled(NavLink)<{ $border: boolean, theme: AppTheme }>`
  padding: 5px 10px;
  font-weight: 700;
  border-radius: 5px;
  border: 1px solid ${props => props.$border ? props.theme.color.text : 'transparent'};
  text-decoration: none;
  transition: ${props => props.theme.transition}s;
  &:hover {
    color: ${props => props.theme.color.hover};
    border-color: ${props => props.$border ? props.theme.color.hover : 'transparent'};
  }
  &.active {
    color: ${props => props.theme.color.hover};
    border-color: ${props => props.$border ? props.theme.color.hover : 'transparent'};
  }
`;

export default StyledNavLink;