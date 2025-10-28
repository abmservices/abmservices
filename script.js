// Initialize EmailJS
(function() {
  emailjs.init("ABxQ2mUgZFgF1JDyA"); // Your Public Key
})();

// Form submission
document.getElementById("serviceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect form data
  const params = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
  };

  // Send the email
  emailjs.send("service_26hxf6p", "template_zwmfku6", params)
  .then(() => {
    alert("✅ Your service request has been sent successfully!");
    document.getElementById("serviceForm").reset();
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    alert("❌ Failed to send message. Please check your EmailJS setup.");
  });
});
