var React = require('react');
var GiftItem = require('./GiftItem.react');
var GiftTable = require('./GiftTable.react');
var GiftHeader = require('./GiftHeader.react');
var GiftButtonPanel = require('./GiftButtonPanel.react');

var MainSection = React.createClass({displayName: 'MainSection',
  render: function () {
    var allGifts = this.props.allGifts;
    var gifts = [];

    for (key in allGifts) {
      gifts.push(React.createElement(GiftItem, {key: allGifts[key].id, gift: allGifts[key]}));
    }

    var body = gifts.length ? React.createElement(GiftTable, {gifts: gifts}) : null;

    return (
      React.createElement("form", {ref: "form"}, 
        React.createElement(GiftHeader, {numGifts: gifts.length}), 
        body, 
        React.createElement(GiftButtonPanel, {numGifts: gifts.length, submitHandler: this._onSubmit})
      )
    );
  },

  _onSubmit: function (e) {
    e.preventDefault();
    alert('Could not transfer to server');
  }
});

module.exports = MainSection;