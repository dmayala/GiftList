var React = require('react');

var GiftHeader = React.createClass({
  render: function () {
    return (
      <p>You have asked for <span>{this.props.numGifts}</span> gift(s)</p>
    );
  }
});

module.exports = GiftHeader;