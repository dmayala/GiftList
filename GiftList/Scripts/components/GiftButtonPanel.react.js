var React = require('react');
var GridAction = require('../actions/GridActions')

var GiftButtonPanel = React.createClass({displayName: 'GiftButtonPanel',
  render: function () {
    return (
      React.createElement("div", {className: "btn-toolbar"}, 
        React.createElement("button", {onClick: this.addGift, className: "btn btn-default"}, "Add Gift"), 
        React.createElement("button", {
          disabled: !this.props.numGifts ? 'disabled' : '', 
          onClick: this.props.submitHandler, 
          type: "submit", 
          className: "btn btn-primary"}, 
          "Submit"
        )
      )
    );
  },

  addGift: function (e) {
    e.preventDefault();
    GridAction.addGift();
  }
});

module.exports = GiftButtonPanel;