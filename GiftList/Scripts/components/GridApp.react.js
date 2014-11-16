var React = require('react');
var GiftStore = require('../stores/GiftStore');
var MainSection = require('./MainSection.react');

function getGiftStoreState() {
  return {
    allGifts: GiftStore.fetchGifts()
  }
}

var GridApp = React.createClass({displayName: 'GridApp',

  getInitialState: function () {
    return getGiftStoreState();
  },

  componentDidMount: function () {
    GiftStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    GiftStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState(getGiftStoreState());
  },

  render: function () {
    return (
      React.createElement(MainSection, {allGifts: this.state.allGifts}) 
    );
  }

});

module.exports = GridApp;
