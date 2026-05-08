function searchJobs() {
  alert("Searching jobs... (demo function)");
}

// Simple subscribe action
document.querySelector(".newsletter button").addEventListener("click", function () {
  let email = document.querySelector(".newsletter input").value;

  if (email) {
    alert("Subscribed successfully: " + email);
  } else {
    alert("Please enter an email.");
  }
});
