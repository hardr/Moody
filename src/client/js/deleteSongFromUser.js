(function() {
  console.log("delete song sanity check");
  'use strict';
  $(document).on('click', '.delete-btn', function (event) {
    event.preventDefault();
    console.log("delete song is clicked");
    const $this = $(this);
    const $song_uuid = $this.attr("data-id");
    console.log("the song id is " + $song_uuid);
    var payload = {
      song_uuid: $song_uuid
    }
    $.ajax({
      type: 'DELETE',
      url: `/user/deleteSong`,
      data: payload
    })
    .done((data) => {
      console.log(data);
      alert("Song was removed from to your account");
      location.reload();
    })
    .fail((err) => {
      console.log(err);
      location.reload();
    });
  })
}());
