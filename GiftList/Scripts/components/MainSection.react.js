var React = require('react');
var GiftItem = require('./GiftItem.react');

var MainSection = React.createClass({
  render: function () {
    var allGifts = this.props.allGifts;
    var gifts = [];

    for (key in allGifts) {
      gifts.push(<GiftItem key={allGifts[key].id} gift={allGifts[key]} />);
    }

    return (
      <form>
        <p>You have asked for <span>{gifts.length}</span> gift(s)</p>
        <table className="table">
          <thead>
            <tr>
              <th>Gift name</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {gifts}
          </tbody>
        </table>
        <button className="btn btn-default">Add Gift</button>
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
});

module.exports = MainSection;