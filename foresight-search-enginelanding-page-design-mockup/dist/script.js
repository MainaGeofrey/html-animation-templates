class App extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
      currentYear };

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "flex-align-center-justify-center-direction-column view-height p-all" }, /*#__PURE__*/
      React.createElement("img", { className: "foresight-logo m-bottom", src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/312465/Foresight%20Logo-01.svg" }), /*#__PURE__*/
      React.createElement("div", { className: "foresight-search-bar fill-space m-bottom" }, /*#__PURE__*/
      React.createElement("input", { type: "text", placeholder: "Search the Pok\xE9mon Universe" }), /*#__PURE__*/
      React.createElement("i", { className: "material-icons" }, "search")), /*#__PURE__*/

      React.createElement("div", { className: "m-bottom" }, /*#__PURE__*/
      React.createElement("button", { className: "btn primary m-right" }, "Search"), /*#__PURE__*/
      React.createElement("button", { className: "btn dark-grey" }, "Browse Pok\xE9News")), /*#__PURE__*/

      React.createElement("div", { className: "text-center text-grey font-lighter" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, "\xA9 Cole Waldrip, ", this.state.currentYear)), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/React.createElement("small", null, "All rights reserved."))))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));