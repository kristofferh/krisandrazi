import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';

export default function Map () {
    const glasserie = {lat: 40.737722, lng: -73.956176};
    return (
        <section style={{height: '100vh', width: '100vw'}}>
            <GoogleMapLoader
                containerElement = {
                    <div
                        {...this.props}
                        style={{
                            height: '100%'
                        }}
                    />
                }

                googleMapElement={
                    <GoogleMap
                        defaultZoom={13}
                        defaultCenter={glasserie}
                        defaultOptions={{
                            scrollwheel: false,
                            styles: require('./styles.json')
                        }}
                    >
                        <Marker
                            defaultPosition={glasserie}
                            title="Click to zoom"
                        />
                    </GoogleMap>
                }
            />
        </section>
    );
}
