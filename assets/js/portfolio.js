const CV_URL = "";

document.querySelectorAll(".cv-link").forEach((link) => {
  if (CV_URL) {
    link.href = CV_URL;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.removeAttribute("aria-disabled");
  } else {
    link.title = "CV link coming soon";
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
