//burger menu
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
});


//formularz i wyswietlanie potwierdzenia
document.addEventListener('DOMContentLoaded', () => {
  const reservationButton = document.querySelector('#hero button');
  const modal = document.querySelector('#reservationModal');
  const closeModal = document.querySelector('.close-modal');
  const reservationForm = document.querySelector('#reservationForm');
  const confirmationModal = document.querySelector('#confirmationModal');

  reservationButton.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    modal.classList.remove('active');
    confirmationModal.classList.add('active');

    setTimeout(() => {
      confirmationModal.classList.remove('active');
      reservationForm.reset();
    }, 5000);
  });
});



// Ustawienie minimalnej daty na dzisiaj
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today); //min data na dzis
});

//walidacja formularza, żeby nie przesłać pustego
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) {
      alert("Proszę podać imię i nazwisko.");
      return;
    }

    if (!email) {
      alert("Proszę podać adres e-mail.");
      return;
    }

    if (!message) {
      alert("Proszę wpisać wiadomość.");
      return;
    }

    window.location.href = "contact-done.html";
  });
});
