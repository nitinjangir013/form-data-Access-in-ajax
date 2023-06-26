(function ($) {
  'use strict';

  var $document = $(document),
    $window = $(window),
    forms = {
      // contactForm: $('#contactForm'),
      // questionForm: $('#questionForm'),
      bookingForm: $('#bookingForm'),
      // requestForm: $('#requestForm')
    };

  $document.ready(function () {
    forms.bookingForm.submit(submitHandler);
    function submitHandler(form) {
      form.preventDefault();
      var formData = forms.bookingForm.serialize();

      $.ajax({
        type: 'POST',
        data: formData,
        url: 'demo_test.txt',
        success: function (result) {
          $('.successform').hide();
        },
        error: function () {
          console.log(formData);
        },
      });
    }
  });
})(jQuery);
