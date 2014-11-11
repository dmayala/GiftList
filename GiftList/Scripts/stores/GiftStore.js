var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var GiftListConstants = require('../constants');
var _ = require('underscore');

var _gifts = {};

var add = function (data) {
  
};

var GiftStore = _.extend({}, EventEmitter.prototype, {
  getGifts: function () {
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
    case GiftListConstants.ADD_GIFT:
      add(action.data);
      break;
    default:
      return true;
  }

  GiftStore.emitChange();
  return true;
});

module.exports = GiftStore;