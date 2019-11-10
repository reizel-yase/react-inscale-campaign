"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const creators_1 = require("../../action/creators");
class SearchResultsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onMatchSelect = this.onMatchSelect.bind(this);
    }
    onMatchSelect(e, placeId) {
        e.preventDefault();
        this.props.dispatch(creators_1.getLocation(placeId));
    }
    render() {
        return (React.createElement("div", { className: "search-results-wrapper" },
            React.createElement("ul", null, this.props.results.map((match) => (React.createElement("li", null,
                React.createElement("a", { href: "/", onClick: (e) => this.onMatchSelect(e, match.place_id) }, match.description)))))));
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};
const mapStateToProps = (state) => {
    return {
        results: state.results,
        fetched: state.fetched
    };
};
const SearchResults = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchResultsComponent);
exports.default = SearchResults;
//# sourceMappingURL=index.js.map