import {GoogleMap, MarkerF, RectangleF, useLoadScript} from '@react-google-maps/api';
import {FC, useMemo, useState} from 'react';

const greenDotMarkerUrl = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';

interface MapProps {
    rectangles: google.maps.LatLngBoundsLiteral[];
    firstPoint?: google.maps.LatLngLiteral;
    onClick: (pos: google.maps.LatLngLiteral) => void;
}

const Map: FC<MapProps> = ({rectangles, onClick, firstPoint}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: '',
    });
    const center = useMemo(() => ({lat: 18.52043, lng: 73.856743}), []);
    const [pos, setPos] = useState<google.maps.LatLngBoundsLiteral>({
        north: 18.589, // сервер
        south: 18.458, // юг
        east: 73.964, // восток
        west: 73.455 // запад
    });

    function getMarkers() {
        return (
            <>
                <MarkerF // top-right
                    onDrag={e => {
                        const north = e.latLng?.lat();
                        const east = e.latLng?.lng();
                        if (north == undefined || east == undefined) {
                            throw new Error('Invalid coordinate');
                        }
                        setPos({...pos, north, east});
                    }}
                    draggable={true}
                    position={{lat: pos.north, lng: pos.east}}
                    icon={greenDotMarkerUrl}
                />
                <MarkerF // bottom-right
                    onDrag={e => {
                        const south = e.latLng?.lat();
                        const east = e.latLng?.lng();
                        if (south == undefined || east == undefined) {
                            throw new Error('Invalid coordinate');
                        }
                        setPos({...pos, south, east});
                    }}
                    draggable={true}
                    position={{lat: pos.south, lng: pos.east}}
                    icon={greenDotMarkerUrl}
                />
                <MarkerF // bottom-left
                    onDrag={e => {
                        const south = e.latLng?.lat();
                        const west = e.latLng?.lng();
                        if (south == undefined || west == undefined) {
                            throw new Error('Invalid coordinate');
                        }
                        setPos({...pos, south, west});
                    }}
                    draggable={true}
                    position={{lat: pos.south, lng: pos.west}}
                    icon={greenDotMarkerUrl}
                />
                <MarkerF // top-left
                    onDrag={e => {
                        const north = e.latLng?.lat();
                        const west = e.latLng?.lng();
                        if (north == undefined || west == undefined) {
                            throw new Error('Invalid coordinate');
                        }
                        setPos({...pos, north, west});
                    }}
                    draggable={true}
                    position={{lat: pos.north, lng: pos.west}}
                    icon={greenDotMarkerUrl}
                />
            </>
        );
    }

    return (
        <div>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: 300
                    }}
                    onClick={e => {
                        onClick({
                            lat: e.latLng?.lat() || 0,
                            lng: e.latLng?.lng() || 0
                        });
                    }}
                    center={center}
                    zoom={10}
                >
                    {rectangles.map((r, i) =>
                        <RectangleF key={i} bounds={r} draggable={false} editable={false} />
                    )}
                    {firstPoint &&
                        <MarkerF
                            draggable={false}
                            position={firstPoint}
                            icon={greenDotMarkerUrl}
                        />
                    }
                </GoogleMap>
            )}
        </div>
    );
};
export default Map;