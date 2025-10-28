// ✅ Initialize EmailJS with your Public Key
(function() {
  emailjs.init("ABxQ2mUgZFgF1JDyA"); // Replace with your actual Public Key
})();

// ✅ Handle form submission
document.getElementById("serviceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Send data using EmailJS
  emailjs.send("service_26hxf6p", "template_zwmfku6", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
  })
  .then(function() {
    alert("✅ Your service request has been sent successfully!");
    document.getElementById("serviceForm").reset();
  }, function(error) {
    alert("❌ Failed to send message. Please check console for details.");
    console.log("EmailJS Error:", error);
  });
});
