(function() {
  emailjs.init("ABxQ2mUgZFgF1JDyA"); // ✅ Your Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_26hxf6p", "template_zwmfku6", {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
  })
  .then(function() {
    alert("✅ Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function(error) {
    alert("❌ Failed to send message. Error: " + JSON.stringify(error));
  });
});
