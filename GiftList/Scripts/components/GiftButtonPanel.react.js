var React = require('react');
var GridAction = require('../actions/GridActions')

var GiftButtonPanel = React.createClass({
  render: function () {
    return (
      <div className="btn-toolbar">
        <button onClick={this.addGift} className="btn btn-default">Add Gift</button>
        <button 
          disabled={!this.props.numGifts ? 'disabled' : ''}
          onClick={this.props.submitHandler}
          type="submit"
          className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  },

  addGift: function (e) {
    e.preventDefault();
    GridAction.addGift();
  }
});

module.exports = GiftButtonPanel;