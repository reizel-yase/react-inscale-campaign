"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_google_maps_1 = require("react-google-maps");
const Map = react_google_maps_1.withScriptjs(react_google_maps_1.withGoogleMap((props) => {
    return (React.createElement(react_google_maps_1.GoogleMap, { defaultZoom: props.defaultZoom, center: { lat: props.center.lat, lng: props.center.lng } }, props.markerLatLng && (React.createElement(react_google_maps_1.Marker, { position: { lat: props.markerLatLng.lat, lng: props.markerLatLng.lng } }))));
}));
exports.default = Map;
//# sourceMappingURL=index.js.map