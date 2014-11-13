var React = require('react');

var GiftTable = React.createClass({
  render: function () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Gift name</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.props.gifts}
        </tbody>
      </table>
    );
  },
});

module.exports = GiftTable;