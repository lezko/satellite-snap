import Container from 'components/layout/Container';
import Globe from '3d/Globe';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

const Dashboard = () => {
    return (
        <Container maxWidth={1200}>
            <Canvas  style={{width: 300, height: 300}}>
                <Globe />
                <OrbitControls />
            </Canvas>
        </Container>
    );
};

export default Dashboard;