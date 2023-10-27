import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader} from '@react-three/fiber';

const Globe = () => {

    const gltf = useLoader(GLTFLoader, '/sphere.gltf')
    return <primitive  object={gltf.scene} />
};

export default Globe;