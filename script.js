document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather icons
  feather.replace()

  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle")
  const body = document.body

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    const isDarkMode = body.classList.contains("dark-mode")
    localStorage.setItem("darkMode", isDarkMode)
    updateDarkModeIcon(isDarkMode)
  })

  // Check for saved dark mode preference
  const savedDarkMode = localStorage.getItem("darkMode")
  if (savedDarkMode === "true") {
    body.classList.add("dark-mode")
    updateDarkModeIcon(true)
  }

  function updateDarkModeIcon(isDarkMode) {
    const icon = darkModeToggle.querySelector("i")
    if (isDarkMode) {
      icon.setAttribute("data-feather", "sun")
    } else {
      icon.setAttribute("data-feather", "moon")
    }
    feather.replace()
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Form submission (you can add your own logic here)
  const contactForm = document.getElementById("contact-form")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted")
  })

  // Typing animation for the name
  function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
      document.getElementById("animated-name").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

      setTimeout(() => {
        typeWriter(text, i + 1, fnCallback)
      }, 100)
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700)
    }
  }

  // Start the typing animation
  function startTextAnimation(textArray, i) {
    if (typeof textArray[i] == "undefined") {
      setTimeout(() => {
        startTextAnimation(textArray, 0)
      }, 20000) // Wait for 20 seconds before restarting the animation
    } else if (i < textArray[i].length) {
      typeWriter(textArray[i], 0, () => {
        startTextAnimation(textArray, i + 1)
      })
    }
  }

  // Initialize the typing animation
  const nameArray = ["Your Name"] // Replace with your actual name
  startTextAnimation(nameArray, 0)
})

