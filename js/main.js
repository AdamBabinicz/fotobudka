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

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Zatrzymanie standardowego wysyłania formularza

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            form.style.display = "none";
            document.getElementById("success-message").style.display = "block";
          } else {
            alert(
              "Wystąpił błąd podczas wysyłania formularza. Proszę spróbować ponownie."
            );
          }
        })
        .catch((error) => {
          alert("Wystąpił błąd. Proszę spróbować ponownie.");
        });
    });
  } else {
    console.error("Formularz nie został znaleziony w dokumencie.");
  }
});
