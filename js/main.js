$(document).ready(function () {
  console.log("📌 Dokument gotowy!");

  // Obsługa menu mobilnego
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  // Płynne przewijanie do sekcji
  $('nav a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 100,
        },
        2000
      );
    }
  });

  // Przycisk powrotu do góry
  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });

  // Sprawdzenie, czy AOS jest załadowany
  if (typeof AOS !== "undefined") {
    console.log("✅ AOS załadowany!");
    AOS.init({
      easing: "ease",
      duration: 1800,
      once: true,
    });
  } else {
    console.error("🚨 AOS nie został załadowany!");
  }
});

// Obsługa formularza kontaktowego
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

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("✅ Formularz wysłany pomyślnie!");
          form.reset(); // Resetujemy pola formularza

          // Pokazujemy komunikat o sukcesie
          if (successMessage) {
            successMessage.style.display = "block";
            console.log("✅ Komunikat o sukcesie wyświetlony");

            // Automatyczne znikanie komunikatu po 10 sekundach
            setTimeout(() => {
              successMessage.style.display = "none";
            }, 10000);
          }

          return response.text();
        } else {
          console.error(
            "❌ Błąd serwera:",
            response.status,
            response.statusText
          );
          return Promise.reject("Błąd: " + response.status);
        }
      })
      .catch((error) => {
        console.error("⚠️ Wystąpił błąd:", error);
        alert("Wystąpił błąd. Spróbuj ponownie.");
      });
  });

  // Ukrywanie komunikatu o sukcesie po edycji formularza
  form.addEventListener("input", function () {
    if (successMessage) {
      successMessage.style.display = "none";
    }
  });
});
