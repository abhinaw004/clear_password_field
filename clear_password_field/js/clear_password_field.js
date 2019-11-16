(function ($, Drupal, drupalSettings) {
  $(document).ready(function() {
    $('#edit-name').attr('autocomplete', 'OFF').val('');
    $('#edit-pass').attr('autocomplete', 'OFF').val('');
    $('#edit-mail').attr('autocomplete', 'OFF').val('');
    $('#edit-current-pass').attr('autocomplete', 'OFF').val('');
    $('#edit-pass-pass1').attr('autocomplete', 'OFF').val('');
    $('#edit-pass-pass2').attr('autocomplete', 'OFF').val('');
  });
})(jQuery, Drupal, drupalSettings);
