document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done:"Select"}
    });

    // select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });

 