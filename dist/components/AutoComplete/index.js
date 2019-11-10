"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const creators_1 = require("../../action/creators");
class AutoCompleteComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            city: '',
            area: '',
            state: '',
            mapPosition: {
                lat: 42.3601,
                lng: -71.0589
            },
            markerPosition: {
                lat: -34.397,
                lng: 150.644
            }
        };
        this.updateSearchKey = this.updateSearchKey.bind(this);
    }
    componentDidMount() {
    }
    updateSearchKey(e) {
        this.props.dispatch(creators_1.getResults(e.target.value));
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Search"),
            React.createElement("input", { id: "greeting-input", className: "searchbox", ref: "greetingInputRef", type: "text", onChange: (e) => this.updateSearchKey(e) })));
    }
}
exports.AutoCompleteComponent = AutoCompleteComponent;
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};
const AutoComplete = react_redux_1.connect(mapDispatchToProps)(AutoCompleteComponent);
exports.default = AutoComplete;
//# sourceMappingURL=index.js.map