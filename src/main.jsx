var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

ReactDOM.render(React.createElement(List), document.getElementById('bonesDiv'));
ReactDOM.render(<List/>, document.getElementById('bonesDiv'));
