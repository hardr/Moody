(function() {
  console.log("add song sanity check");
  'use strict';
  $('#addSong').on('click', function (event) {
    event.preventDefault();
    console.log("add song is clicked");
    const $song_id = $('#existing-iframe-example').attr("data-id");
    console.log("the song id is " + $song_id);
    var payload = {
      song_id: $song_id
    }
    $.ajax({
      type: 'POST',
      url: `/user/addSong`,
      data: payload
    })
    .done((data) => {
      console.log(data);
      alert("Song Was Added to Your Account");
    })
    .fail((err) => {
      console.log(err);
    });
  })
}());
