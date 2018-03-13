/*** BAKERY SERVICE ***/

myApp.service('BakeryService', function($http) {
  var sv = this;

  // POST for contact
  sv.contactMessage = function(contactMessage) {
    console.log('in contactMessage POST in bakeryService.js');
    return $http({
      method: 'POST',
      url: '/message',
      data: contactMessage
    }).then(function(response) {
      console.log('back from contactMessage POST:', response);
    });
  };
}); // end service
