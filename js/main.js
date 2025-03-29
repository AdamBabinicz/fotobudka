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
  const form = document.querySelector('form[name="contact"]');
  const successMessage = document.getElementById("success-message");
  const backToFormLink = document.getElementById("back-to-form");

  // Przywróć formularz po kliknięciu w link "Wracaj na naszą stronę"
  if (backToFormLink) {
    backToFormLink.addEventListener("click", function (event) {
      event.preventDefault(); // Zatrzymuje standardowe działanie linku
      form.style.display = "block"; // Przywróć formularz
      successMessage.style.display = "none"; // Ukryj komunikat sukcesu
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Zatrzymanie standardowego wysyłania formularza

      // Tu nie musisz ręcznie wysyłać formularza, ponieważ Netlify to obsługuje
      // ale możesz pokazać komunikat sukcesu, jeśli wysłanie się powiedzie.

      form.style.display = "none"; // Ukryj formularz
      successMessage.style.display = "block"; // Pokaż komunikat o sukcesie
    });
  } else {
    console.error("Formularz nie został znaleziony w dokumencie.");
  }
});
