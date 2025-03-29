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

  if (!form) {
    console.error("🚨 Formularz nie został znaleziony w dokumencie.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Zatrzymujemy domyślne wysyłanie formularza
    console.log("📨 Wysyłanie formularza...");

    const formData = new FormData(form);

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    };

    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(Object.fromEntries(formData)),
    })
      .then((response) => {
        if (response.ok) {
          console.log("✅ Formularz wysłany pomyślnie!");
          form.reset(); // Resetujemy pola formularza

          // Sprawdzamy, czy successMessage istnieje, zanim go wyświetlimy
          if (successMessage) {
            setTimeout(() => {
              successMessage.style.display = "block";
            }, 500);
          }
        } else {
          return Promise.reject(
            `❌ Błąd: ${response.status} - ${response.statusText}`
          );
        }
      })
      .catch((error) => {
        console.error("⚠️ Wystąpił błąd:", error);
        alert("Wystąpił błąd. Spróbuj ponownie.");
      });
  });
});
