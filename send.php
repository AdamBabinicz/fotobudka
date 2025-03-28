<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   $to = "mariusz1989poczta@wp.pl"; // Twój adres e-mail
   $subject = "Nowa wiadomość z formularza";

   $name = htmlspecialchars($_POST["name"]);
   $email = htmlspecialchars($_POST["email"]);
   $service = htmlspecialchars($_POST["services"]);
   $message = htmlspecialchars($_POST["subject"]);

   $headers = "From: " . $email . "\r\n";
   $headers .= "Reply-To: " . $email . "\r\n";
   $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

   $body = "Imię i Nazwisko: $name\n";
   $body .= "Email: $email\n";
   $body .= "Usługa: $service\n";
   $body .= "Wiadomość: $message\n";

   if (mail($to, $subject, $body, $headers)) {
      echo "Wiadomość wysłana!";
   } else {
      echo "Błąd podczas wysyłania wiadomości.";
   }
}
