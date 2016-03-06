import {default as React, Component} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps';
import {default as canUseDOM} from 'can-use-dom';
import {triggerEvent} from 'react-google-maps/lib/utils';

export default class Map extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        if (!canUseDOM) {
            return;
        }
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        if (!canUseDOM) {
            return;
        }
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        // console.log(this._googleMapComponent);
        // triggerEvent(this._googleMapComponent, 'resize');
    }

    render() {
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

                    googleMapElement = {
                        <GoogleMap
                            ref={(map) => (this._googleMapComponent = map)}
                            defaultZoom={13}
                            defaultCenter={glasserie}
                            defaultOptions={{
                                scrollwheel: false,
                                styles: require('./styles.json')
                            }}
                        >
                            <Marker
                                defaultPosition = {glasserie}
                                defaultAnimation = {2}
                                title = 'Glasserie'
                            />
                        </GoogleMap>
                    }
                />
            </section>
        );
    }
}
