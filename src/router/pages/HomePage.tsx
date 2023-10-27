import Container from 'components/layout/Container';
import styled from 'styled-components';
import lang from 'language.json';
import {AppTheme} from 'AppTheme';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledCover = styled.div`
  background-image: url("/space.jpg");
  background-position: center;
  background-size: cover;
  height: 300px;
  filter: blur(5px);
`;

const Slogan = styled.div<{theme: AppTheme}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Kanit', sans-serif;
  font-size: 3.2rem;
  color: white;
  // color: ${props => props.theme.color.hover};
  //text-shadow: 1px 1px 0 white
`;

const HomePage = () => {
    return (
        <div>
            <Wrapper>
                <StyledCover />
                <Slogan>{lang.slogan}</Slogan>
            </Wrapper>
            <Container maxWidth={1200}>
            </Container>
        </div>
    );
};

export default HomePage;