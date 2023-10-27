import styled from 'styled-components';
import Container from 'components/layout/Container';
import {AppTheme} from 'AppTheme';
import lang from 'language.json';
import {useUser} from 'store/userSlice';
import SignButtons from 'components/nav/SignButtons';
import {Paths} from 'router/paths';
import StyledNavLink from 'components/nav/StyledNavLink';
import {UserRole} from 'models/User';
import Flow, {Dir} from 'components/layout/Flow';

const StyledNavbarWrapper = styled.div<{ theme: AppTheme }>`
  background-color: ${props => props.theme.color.bgElevated};
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 15px;

`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const HomeLink = <StyledNavLink to={Paths.home}>{lang.navbar.home}</StyledNavLink>;
const SnapsLink = <StyledNavLink to={Paths.snaps}>{lang.navbar.snaps}</StyledNavLink>;
const DashboardLink = <StyledNavLink to={Paths.dashboard}>{lang.navbar.dashboard}</StyledNavLink>;

const Navbar = () => {
    const {user} = useUser();
    let buttons: JSX.Element;
    if (!user) {
        buttons = <SignButtons />;
    } else {
        if (user.role === UserRole.User) {
            buttons = (<>
                {HomeLink}
                {SnapsLink}
            </>);
        } else {
            buttons = (<>
                {HomeLink}
                {SnapsLink}
                {DashboardLink}
            </>);
        }
    }

    // todo 1200 to config
    return (
        <StyledNavbarWrapper>
            <Container maxWidth={1200}>
                <StyledNavbar>
                    <Logo>{lang.title}</Logo>
                    <div><Flow gap={10} dir={Dir.Horizontal}>{buttons}</Flow></div>
                </StyledNavbar>
            </Container>
        </StyledNavbarWrapper>
    );
};

export default Navbar;