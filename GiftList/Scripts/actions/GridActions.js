var AppDispatcher = require('../dispatcher/AppDispatcher');
var GridConstants = require('../constants/GridConstants');

var GridActions = {

  addGift: function (data) {
    AppDispatcher.handleViewAction({
      actionType: GridConstants.ADD_GIFT,
      data: data
    });
  },

  removeGift: function (id) {
    AppDispatcher.handleViewAction({
      actionType: GridConstants.REMOVE_GIFT,
      id: id
    });
  },

  editGift: function (id, data) {
    AppDispatcher.handleViewAction({
      actionType: GridConstants.EDIT_GIFT,
      id: id
    });
  }
};

module.exports = GridActions;