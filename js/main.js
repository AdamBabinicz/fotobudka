$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });
  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });
  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Zapobiega domyślnemu wysłaniu formularza

      var formData = new FormData(form);

      // Ustawienia dla formularza, by wysłać dane bez przeładowania strony
      fetch(form.action, {
        method: form.method,
        body: formData,
      })
        .then(function (response) {
          // Ukrywa formularz i pokazuje komunikat o sukcesie
          form.style.display = "none";
          document.getElementById("success-message").style.display = "block";
        })
        .catch(function (error) {
          // W przypadku błędu, wyświetl komunikat
          alert(
            "Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie."
          );
        });
    });
  }
});
