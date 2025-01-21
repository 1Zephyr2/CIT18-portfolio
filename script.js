// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  // Initialize Feather icons
  feather.replace()
  
  // Form submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault()
  
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log("Form submitted!")
    console.log("Name:", this.name.value)
    console.log("Email:", this.email.value)
    console.log("Message:", this.message.value)
  
    // Clear the form
    this.reset()
  
    // Show a success message (you can replace this with a more user-friendly notification)
    alert("Thank you for your message! I'll get back to you soon.")
  })
  
  // Add a simple animation to the skills icons
  const skills = document.querySelectorAll(".skill")
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`
  })
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle")
  const body = document.body
  
  function setDarkMode(isDark) {
    body.classList.toggle("dark-mode", isDark)
    localStorage.setItem("darkMode", isDark)
    updateDarkModeIcon(isDark)
  }
  
  function updateDarkModeIcon(isDark) {
    const icon = darkModeToggle.querySelector("i")
    icon.setAttribute("data-feather", isDark ? "sun" : "moon")
    feather.replace()
  }
  
  darkModeToggle.addEventListener("click", () => {
    const isDark = !body.classList.contains("dark-mode")
    setDarkMode(isDark)
  })
  
  // Check for saved dark mode preference or system preference
  const savedDarkMode = localStorage.getItem("darkMode")
  const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  
  if (savedDarkMode === "true" || (savedDarkMode === null && prefersDarkMode)) {
    setDarkMode(true)
  } else {
    setDarkMode(false)
  }
  
  // Listen for changes in system color scheme
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("darkMode") === null) {
      setDarkMode(e.matches)
    }
  })
  
  