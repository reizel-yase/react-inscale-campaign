"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const react_bootstrap_1 = require("react-bootstrap");
const AutoComplete_1 = require("../../components/AutoComplete");
const Map_1 = require("../../components/Map");
const SearchResults_1 = require("../../components/SearchResults");
require("../../styles/index.scss");
class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 14,
            center: {
                lat: 42.3601,
                lng: -71.0589
            },
            markerLatLng: {
                lat: -34.397,
                lng: 150.644
            }
        };
    }
    componentWillReceiveProps(props) {
        if (props.located && props.location) {
            this.setState({
                markerLatLng: props.location,
                center: props.location
            });
        }
    }
    render() {
        const { center, markerLatLng, zoom } = this.state;
        return (React.createElement("div", { id: "app" },
            React.createElement(react_bootstrap_1.Navbar, { bg: "dark", variant: "dark" },
                React.createElement(react_bootstrap_1.Navbar.Brand, { href: "#home" }, "React/Redux AutoComplete Search")),
            React.createElement("div", { id: "wrapper" },
                React.createElement("div", { className: "map-wrapper" },
                    React.createElement(Map_1.default, { googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBiAJBK9gGHhTW1-TAdCczJ2Sf1maih8ZQ&v=3.exp&libraries=geometry,drawing,places`, loadingElement: React.createElement("div", { style: { height: `100%` } }), containerElement: React.createElement("div", { style: { height: `800px`, width: `100%` } }), mapElement: React.createElement("div", { style: { height: `100%` } }), defaultZoom: zoom, center: center, markerLatLng: markerLatLng })),
                React.createElement("div", { className: "search-wrapper" },
                    React.createElement(AutoComplete_1.default, null),
                    React.createElement(SearchResults_1.default, null)))));
    }
}
const mapStateToProps = (state) => {
    return {
        located: state.located,
        location: state.location
    };
};
const App = react_redux_1.connect(mapStateToProps)(AppComponent);
exports.default = App;
//# sourceMappingURL=index.js.map