var React = require('react');

var GiftItem = React.createClass({
  render: function () {
    var gift = this.props.gift;
    return (
      <tr>
        <td><input value={gift.name} /></td>
        <td><input value={gift.price} /></td>
        <td><button className="btn btn-danger">Delete</button></td>
      </tr>
    );
  }
});

module.exports = GiftItem;