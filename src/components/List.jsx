var React = require('react');
var ListItem = require('./ListItem.jsx');

var list = [
  {id:1,text:'lorem ipsum'},
  {id:2, text:'dolor sit'}
];

var List = React.createClass({
  render: function() {
    var listItems = list.map(function(item) {
      return <ListItem key={item.id} bone={item.text} />;
    });
    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
