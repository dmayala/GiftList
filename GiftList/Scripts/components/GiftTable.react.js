var React = require('react');

var GiftTable = React.createClass({displayName: 'GiftTable',
  render: function () {
    return (
      React.createElement("table", {className: "table"}, 
        React.createElement("thead", null, 
          React.createElement("tr", null, 
            React.createElement("th", null, "Gift name"), 
            React.createElement("th", null, "Price"), 
            React.createElement("th", null)
          )
        ), 
        React.createElement("tbody", null, 
          this.props.gifts
        )
      )
    );
  },
});

module.exports = GiftTable;