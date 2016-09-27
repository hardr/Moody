(function() {
  'use strict';
  $('#bpmSubmit').on('click', function (event) {
    event.preventDefault();
    console.log("analyze is clicked");
    const recordingAddress = $('#recordingslist li a').attr('href');
    var payload = {
      recordingAddress: recordingAddress
    }
    $.ajax({
      type: 'POST',
      url: `/getBPM`,
      data: payload
    })
    .done((data) => {
      alert("Your Speach Was: " + data);
      console.log(data);
    })
    .fail((err) => {
      console.log(err);
    });
  })
}());
