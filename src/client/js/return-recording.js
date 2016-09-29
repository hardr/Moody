(function() {
  'use strict';
  $('#speechSubmit').on('click', function (event) {
    event.preventDefault();
    console.log("analyze is clicked");
    const recordingAddress = $('#linkDiv a').attr('href');
    var payload = {
      recordingAddress: recordingAddress
    }
    console.log(recordingAddress);
    $.ajax({
      type: 'POST',
      url: `/getText`,
      data: payload
    })
    .done((data) => {
      alert("Your Speech Was: " + data);
      console.log(data);
    })
    .fail((err) => {
      console.log(err);
    });
  })
}());
