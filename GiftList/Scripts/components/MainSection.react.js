var React = require('react');
var GiftItem = require('./GiftItem.react');
var GiftTable = require('./GiftTable.react');
var GiftHeader = require('./GiftHeader.react');
var GiftButtonPanel = require('./GiftButtonPanel.react');

var MainSection = React.createClass({
  render: function () {
    var allGifts = this.props.allGifts;
    var gifts = [];

    for (key in allGifts) {
      gifts.push(<GiftItem key={allGifts[key].id} gift={allGifts[key]} />);
    }

    var body = gifts.length ? <GiftTable gifts={gifts} /> : null;

    return (
      <form ref="form">
        <GiftHeader numGifts={gifts.length} />
        {body}
        <GiftButtonPanel numGifts={gifts.length} submitHandler={this._onSubmit} />
      </form>
    );
  },

  _onSubmit: function (e) {
    e.preventDefault();
    alert('Could not transfer to server');
  }
});

module.exports = MainSection;