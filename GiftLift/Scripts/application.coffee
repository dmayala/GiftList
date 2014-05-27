initialData = [
  {
    Title: "Tall Hat"
    Price: 49.95
  }
  {
    Title: "Long Cloak"
    Price: 78.25
  }
]

class Gift
  constructor: (title = "", price = "") ->
    @Title = ko.observable(title)
    @Price = ko.observable(price)
    
class ViewModel
  self = this

  constructor: ->
    # Values
    @gifts = ko.observableArray(initialData)
    @selectedGift = ko.observable()
    @editing = ko.observable(false)
  
  # Behaviors
  addGift: ->
    self.gifts.push new Gift()

  deleteGift: (gift) ->
    self.gifts.remove gift

  editItem: (gift) ->
    self.selectedGift gift
    self.editing true

  stopEditing: ->
    self.editing false

  save: ->
    if $("form").valid()
      $.post location.href,
        gifts: ko.toJSON(self.gifts)
      , (response) ->
        toastr.success response.count + " item(s) saved!"

ko.applyBindings new ViewModel()
$("form").validate ignore: []