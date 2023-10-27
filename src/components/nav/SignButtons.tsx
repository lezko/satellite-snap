import {Paths} from 'router/paths';
import lang from 'language.json';
import StyledNavLink from 'components/nav/StyledNavLink';

const SignButtons = () => {
    return (
        <>
            <StyledNavLink $border to={Paths.signIn}>{lang.navbar.signIn}</StyledNavLink>
            <StyledNavLink $border to={Paths.signUp}>{lang.navbar.signUp}</StyledNavLink>
        </>
    );
};

export default SignButtons;