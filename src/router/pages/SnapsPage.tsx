import Container from 'components/layout/Container';
import Map from 'map/Map';
import {useState} from 'react';
import {Button, Flex} from 'antd';
import Order from 'components/Order';
import Flow, {Dir} from 'components/layout/Flow';

const SnapsPage = () => {
    const [rectangles, setRectangles] = useState<google.maps.LatLngBoundsLiteral[]>([]);
    const [firstPoint, setFirstPoint] = useState<google.maps.LatLngLiteral>();
    const [newRectangle, setNewRectangle] = useState<google.maps.LatLngBoundsLiteral>();

    function getBounds(pos1: google.maps.LatLngLiteral, pos2: google.maps.LatLngLiteral): google.maps.LatLngBoundsLiteral {
        if (pos1.lat > pos2.lat) {
            const t = pos1.lat;
            pos1.lat = pos2.lat;
            pos2.lat = t;
        }
        if (pos1.lng > pos2.lng) {
            const t = pos1.lng;
            pos1.lng = pos2.lng;
            pos2.lng = t;
        }
        return {
            north: Math.max(pos1.lat, pos2.lat),
            south: Math.min(pos1.lat, pos2.lat),
            east: Math.max(pos1.lng, pos2.lng),
            west: Math.min(pos1.lng, pos2.lng),
        };
    }

    function addRectangle() {
        if (!newRectangle) {
            throw new Error('Bounds is undefined');
        }
        setRectangles([...rectangles, newRectangle]);
        setNewRectangle(undefined);
        setFirstPoint(undefined);
    }

    function handleClick(pos: google.maps.LatLngLiteral) {
        if (!firstPoint) {
            setFirstPoint(pos);
            setNewRectangle(undefined);
            return;
        }
        setNewRectangle(getBounds(firstPoint, pos));
        setFirstPoint(undefined);
    }

    const rects = rectangles.slice();
    if (newRectangle) {
        rects.push(newRectangle);
    }
    return (
        <Container maxWidth={1200}>
            <div style={{marginTop: 30}}>
                <Map
                    rectangles={rects}
                    onClick={handleClick}
                    firstPoint={firstPoint}
                />
            </div>
            <Flex style={{marginTop: 10}}>
                {newRectangle && <Button onClick={addRectangle}>Add</Button>}
            </Flex>
            <div style={{marginTop: 20}}>
                <Flow dir={Dir.Vertical} gap={5}>{rectangles.map((r, i) =>
                    <Order key={i} rect={r} />
                )}</Flow>
            </div>
            {rectangles.length === 0 &&
                <div style={{marginTop: 10}}>No orders yet</div>
            }
        </Container>
    );
};

export default SnapsPage;