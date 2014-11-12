var AppDispatcher = require('../dispatcher/AppDispatcher');
var GridConstants = require('../constants/GridConstants');

var GridActions = {

  addGift: function (data) {
    AppDispatcher.handleViewAction({
      actionType: GridConstants.ADD_GIFT,
      data: data
    });
  },

  deleteGift: function (id) {
    AppDispatcher.handleViewAction({
      actionType: GridConstants.DELETE_GIFT,
      id: id
    });
  },

  editGift: function (id, data) {
    AppDispatcher.handleViewAction({
      actionType: GridConstants.DELETE_GIFT,
      id: id
    });
  }
};

module.exports = GiftListActions;