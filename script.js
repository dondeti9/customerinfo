document.addEventListener("DOMContentLoaded", function() {
    const datepicker = document.querySelector(".datepicker");
    datepicker.addEventListener("focus", function() {
      const picker = new Pikaday({ field: datepicker });
    });
  });
  
