$(document).ready(function() {
    $("html").fadeIn(1000);
});

/*** BAKERY CONTROLLER ****/

myApp.controller('BakeryController', function(BakeryService) {
  console.log('in BakeryController');
  var vm = this;

  // contact function
  vm.contactMessage = function() {
    console.log('in contactMessage function');
    var contactObject = {
      name: vm.nameInput,
      email: vm.emailInput,
      subject: vm.subjectInput,
      message: vm.messageInput
    }; // end contactObject
    console.log('contactObject:', contactObject);
    BakeryService.contactMessage(contactObject).then(function() {
      vm.nameInput = '';
      vm.emailInput = '';
      vm.subjectInput = '';
      vm.messageInput = '';
    }); // end BakeryService.contactMessage
  }; // end contact function
}); // end controller
