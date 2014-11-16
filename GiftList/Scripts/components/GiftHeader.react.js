var React = require('react');

var GiftHeader = React.createClass({displayName: 'GiftHeader',
  render: function () {
    return (
      React.createElement("p", null, "You have asked for ", React.createElement("span", null, this.props.numGifts), " gift(s)")
    );
  }
});

module.exports = GiftHeader;