(function() {
  console.log("admin delete insanity");
  'use strict';
  $(document).on('click', '.delete-btn', function (event) {
    event.preventDefault();
    console.log("delete admin");
    const $this = $(this);
    const $table = $this.attr("data-table");
    const $id = $this.attr("data-id");
    var payload = {
      table: $table,
      id: $id
    }
    $.ajax({
      type: 'DELETE',
      url: `/user/adminDelete`,
      data: payload
    })
    .done((data) => {
      console.log(data);
      alert("Removed");
      location.reload();
    })
    .fail((err) => {
      console.log(err);
      location.reload();
    });
  })
}());
