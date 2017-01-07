var socket = io();

socket.on('connect', function () {
    var params = jQuery.deparam(window.location.search);
    if (params.room) {
        roomField = jQuery('#room-field');
        roomField.attr('hidden', 'hidden');

        jQuery('[name=room]').val(params.room);
    }
});