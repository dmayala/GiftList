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
Gift = (title, price) ->
  @Title = ko.observable(title)
  @Price = ko.observable(price)

ViewModel = ->
  self = this
  
  # Values
  self.gifts = ko.observableArray(initialData)
  self.selectedGift = ko.observable()
  self.editing = ko.observable(false)
  
  # Behaviors
  self.addGift = ->
    self.gifts.push new Gift("", "")

  self.deleteGift = (gift) ->
    self.gifts.remove gift

  self.editItem = (gift) ->
    self.selectedGift gift
    self.editing true

  self.stopEditing = ->
    self.editing false

  self.save = ->
    if $("form").valid()
      $.post location.href,
        gifts: ko.toJSON(self.gifts)
      , (response) ->
        toastr.success response.count + " item(s) saved!"

ko.applyBindings new ViewModel()
$("form").validate ignore: []