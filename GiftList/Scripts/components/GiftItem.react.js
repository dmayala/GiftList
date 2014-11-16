var React = require('react');
var GridActions = require('../actions/GridActions');

var GiftItem = React.createClass({displayName: 'GiftItem',

  getInitialState: function() {
    var gift = this.props.gift;
    return {
      name: gift.name,
      price: gift.price
    }
  },
  render: function () {
    return (
      React.createElement("tr", null, 
        React.createElement("td", null, React.createElement("input", {onChange: this.handleChange.bind(this, 'name'), value: this.state.name})), 
        React.createElement("td", null, React.createElement("input", {onChange: this.handleChange.bind(this, 'price'), value: this.state.price})), 
        React.createElement("td", null, React.createElement("button", {onClick: this.remove, className: "btn btn-danger"}, "Delete"))
      )
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