var React = require('react');
var GridActions = require('../actions/GridActions');

var GiftItem = React.createClass({

  getInitialState: function() {
    var gift = this.props.gift;
    return {
      name: gift.name,
      price: gift.price
    }
  },
  render: function () {
    return (
      <tr>
        <td><input onChange={this.handleChange.bind(this, 'name')} value={this.state.name} /></td>
        <td><input onChange={this.handleChange.bind(this, 'price')} value={this.state.price} /></td>
        <td><button onClick={this.remove} className="btn btn-danger">Delete</button></td>
      </tr>
    );
  },

  handleChange: function (name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  remove: function () {
    GridActions.removeGift(this.props.gift.id);
  }
});

module.exports = GiftItem;