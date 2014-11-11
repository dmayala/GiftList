var AppDispatcher = require('../dispatcher/AppDispatcher');
var GiftListConstants = require('../constants/GiftListConstants');

var GiftListActions = {

  addGift: function (data) {
    AppDispatcher.handleViewAction({
      actionType: GiftListConstants.ADD_GIFT,
      data: data
    });
  },

  deleteGift: function (id) {
    AppDispatcher.handleViewAction({
      actionType: GiftListConstants.DELETE_GIFT,
      id: id
    });
  },

  editGift: function (id, data) {
    AppDispatcher.handleViewAction({
      actionType: GiftListConstants.DELETE_GIFT,
      id: id
    });
  }
};

module.exports = GiftListActions;