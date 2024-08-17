//function untuk pesanan

document.addEventListener("DOMContentLoaded", function() {
  var orderButtons = document.querySelectorAll("#menu .btn-primary");

  orderButtons.forEach(function(button) {
      button.addEventListener("click", function() {
          var product = this.getAttribute("data-product");
          var price = this.getAttribute("data-price");
          var whatsappNumber = "6283895775553"; // Format nomor Indonesia dengan '62' di depan
          var message = `Order ${product} dengan harga Rp ${price}`;
          var whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

          window.location.href = whatsappUrl;
      });
  });
});



// function untuk order

document.addEventListener("DOMContentLoaded", function() {
  var orderForm = document.getElementById("orderForm");

  orderForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Mencegah form untuk submit secara default

      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var menuChoice = document.getElementById("menuChoice").value;
      var notes = document.getElementById("notes").value;

      if (!menuChoice) {
          alert("Silakan pilih menu.");
          return;
      }

      var whatsappNumber = "6283895775553"; // Nomor WhatsApp dalam format internasional
      var message = `Nama: ${name}%0ANomor Telepon: ${phone}%0AMenu Pilihan: ${menuChoice}`;
      
      if (notes) {
          message += `%0ACatatan Khusus: ${notes}`;
      }

      var whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.location.href = whatsappUrl;
  });
});
