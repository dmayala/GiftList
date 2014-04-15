// Generated by CoffeeScript 1.7.1
(function() {
  var Gift, ViewModel, convertedData, initialData;

  initialData = [
    {
      'Title': 'Tall Hat',
      'Price': 49.95
    }, {
      'Title': 'Long Cloak',
      'Price': 78.25
    }
  ];

  Gift = (function() {
    function Gift(title, price) {
      this.Title = ko.observable(title);
      this.Price = ko.observable(price);
    }

    return Gift;

  })();

  convertedData = $.map(initialData, function(a) {
    return new Gift(a.Title, a.Price);
  });

  ViewModel = (function() {
    function ViewModel() {
      this.gifts = ko.observableArray(convertedData);
      this.selectedGift = ko.observable();
      this.editing = ko.observable(false);
      this.addGift = (function(_this) {
        return function() {
          return _this.gifts.push(new Gift("", ""));
        };
      })(this);
      this.deleteGift = (function(_this) {
        return function(gift) {
          return _this.gifts.remove(gift);
        };
      })(this);
      this.editItem = (function(_this) {
        return function(gift) {
          _this.selectedGift(gift);
          return _this.editing(true);
        };
      })(this);
      this.stopediting = (function(_this) {
        return function() {
          return _this.editing(false);
        };
      })(this);
      this.save = (function(_this) {
        return function() {
          if ($('form').valid()) {
            return $.post(location.href, {
              'gifts': ko.toJSON(_this.gifts)
            }, function(response) {
              return toastr.success(response.count + ' item(s) saved!');
            });
          }
        };
      })(this);
    }

    return ViewModel;

  })();

  $(function () {
      ko.applyBindings(new ViewModel());

      $("form").validate({
          ignore: []
      });
  });

}).call(this);
