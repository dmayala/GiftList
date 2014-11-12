var AppDispatcher = require('../dispatcher/AppDispatcher');
var GridConstants = require('../constants/GridConstants');

var EventEmitter = require('events').EventEmitter;
var uuid = require('node-uuid');
var _ = require('underscore');

var _gifts = {
  "87b4bd50-6a29-11e4-8c23-edcf6eae63be": {
    id: "87b4bd50-6a29-11e4-8c23-edcf6eae63be",
    name: "Tall Hat",
    price: 39.95
  },
  "87b4bd51-6a29-11e4-8c23-edcf6eae63be": {
    id: "87b4bd51-6a29-11e4-8c23-edcf6eae63be",
    name: "Long Cloak",
    price: 120.00
  }
};

var add = function (data) {
  var id = uuid.v1();
  _gifts[id] = {
    id: id,
    name: data.name,
    price: data.price
  };
};

var GiftStore = _.extend({}, EventEmitter.prototype, {
  fetchGifts: function () {
    return _gifts;
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (cb) {
    this.on('change', cb);
  },

  removeChangeListener: function (cb) {
    this.removeListener('change', cb);
  }

});

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch (action.actionType) {
    case GridConstants.ADD_GIFT:
      add(action.data);
      break;
    default:
      return true;
  }

  GiftStore.emitChange();
  return true;
});

module.exports = GiftStore;