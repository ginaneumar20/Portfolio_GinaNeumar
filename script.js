// document.addEventListener("DOMContentLoaded", function() {
//     const resumeButton = document.getElementById("resume-button");
//     const languageButton = document.querySelector(".language-button");
//     const languageSelection = document.querySelector(".language-selection");
//     const languageOptions = document.querySelectorAll(".language-option");
  
//     resumeButton.addEventListener("click", function(e) {
//       e.preventDefault();
//       languageButton.classList.add("hidden");
//       languageSelection.classList.remove("hidden");
//     });
  
//     languageOptions.forEach(function(option) {
//       option.addEventListener("click", function(e) {
//         e.preventDefault();
//         const lang = option.getAttribute("data-lang");
//         const resumeUrl = `pictures/Lebenslauf_portfolio_${lang}.pdf`;
//         window.open(resumeUrl, "_blank");
//       });
//     });
//   });
  

document.addEventListener("DOMContentLoaded", function() {
    const resumeButton = document.getElementById("resume-button");
    const languageButton = document.querySelector(".language-button");
    const languageSelection = document.querySelector(".language-selection");
    const languageOptions = document.querySelectorAll(".language-option");
  
    resumeButton.addEventListener("click", function(e) {
      e.preventDefault();
      resumeButton.style.display = "none";
      languageButton.style.marginBottom = "0";
      languageSelection.classList.remove("hidden");
    });
  
    languageOptions.forEach(function(option) {
      option.addEventListener("click", function(e) {
        e.preventDefault();
        const lang = option.getAttribute("data-lang");
        const resumeUrl = `Bewerbung2023_${lang}.pdf`;
        window.open(resumeUrl, "_blank");
      });
    });
  });
  