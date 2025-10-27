// Handle form submission
document.getElementById("serviceForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;

  alert(`Thank you, ${name}! Your ${service} request has been received. We'll contact you soon.`);

  this.reset();
});
