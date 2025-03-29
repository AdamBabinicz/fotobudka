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

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Zatrzymujemy domyślne wysyłanie formularza

      const formData = new FormData(form);

      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            successMessage.style.display = "block"; // Pokaż komunikat o sukcesie
            form.reset(); // Resetowanie pól formularza
          } else {
            alert(
              "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie."
            );
          }
        })
        .catch(() => {
          alert("Wystąpił błąd. Proszę spróbować ponownie.");
        });
    });
  }
});
