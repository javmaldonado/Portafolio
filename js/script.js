// Data


// DOM Elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")
const backToTopBtn = document.getElementById("back-to-top")
const projectsGrid = document.getElementById("projects-grid")
const filterBtns = document.querySelectorAll(".filter-btn")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeProjects()
  initializeSoftwareSkills()
  initializeCoreSkills()
  initializeSoftSkills()
  initializeEducation()
  initializeLanguages()
  initializeAnimations()
  initializeNavigation()
})

// Mobile menu toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show")
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // Close mobile menu if open
      mobileMenu.classList.remove("show")
    }
  })
})

// Back to top button
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("visible")
  } else {
    backToTopBtn.classList.remove("visible")
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Initialize Projects
function initializeProjects() {
  projectsGrid.innerHTML = ""

  projectsData.forEach((project, index) => {
    const projectCard = document.createElement("div")
    projectCard.className = `project-card project-item ${project.category}`
    projectCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110">
                <div class="absolute top-3 left-3 bg-teal-600 text-white px-2 py-1 rounded text-xs font-medium">
                    ${project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-semibold text-lg mb-2 hover:text-teal-600 transition-colors">
                    ${project.title}
                </h3>
                <p class="text-gray-600 text-sm mb-4">${project.description}</p>
                <button class="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center">
                    Ver Proyecto <i class="fas fa-external-link-alt ml-1 text-xs"></i>
                </button>
            </div>
        `
    projectsGrid.appendChild(projectCard)
  })
}

// Project filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter")

    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"))
    this.classList.add("active")

    // Filter projects
    const projectItems = document.querySelectorAll(".project-item")
    projectItems.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block"
        item.classList.remove("hidden")
      } else {
        item.classList.add("hidden")
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// Initialize Software Skills
function initializeSoftwareSkills() {
  const container = document.getElementById("software-skills")
  container.innerHTML = ""

  softwareSkills.forEach((software) => {
    const skillElement = document.createElement("div")
    skillElement.className = "flex items-center gap-4"
    skillElement.innerHTML = `
            <div class="w-12 h-12 bg-gray-900 rounded flex items-center justify-center text-white font-bold text-sm">
                ${software.icon}
            </div>
            <div class="flex-1">
                <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-gray-900">${software.name}</span>
                    <span class="text-sm text-gray-600">${software.level}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" data-width="${software.level}"></div>
                </div>
            </div>
        `
    container.appendChild(skillElement)
  })
}

// Initialize Core Skills
function initializeCoreSkills() {
  const container = document.getElementById("core-skills")
  container.innerHTML = ""

  coreSkills.forEach((skill) => {
    const skillElement = document.createElement("div")
    skillElement.className = "flex items-center gap-2"
    skillElement.innerHTML = `
            <div class="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span class="text-gray-700">${skill}</span>
        `
    container.appendChild(skillElement)
  })
}

// Initialize Soft Skills
function initializeSoftSkills() {
  const container = document.getElementById("soft-skills")
  container.innerHTML = ""

  softSkills.forEach((skill) => {
    const skillElement = document.createElement("div")
    skillElement.className = "flex items-center gap-2"
    skillElement.innerHTML = `
            <div class="w-2 h-2 bg-teal-600 rounded-full"></div>
            <span class="text-gray-700">${skill}</span>
        `
    container.appendChild(skillElement)
  })
}

// Initialize Education
function initializeEducation() {
  const container = document.getElementById("education")
  container.innerHTML = ""

  education.forEach((edu) => {
    const eduElement = document.createElement("div")
    eduElement.className = `border-l-4 ${edu.active ? "border-teal-600" : "border-gray-300"} pl-6`
    eduElement.innerHTML = `
            <h3 class="font-semibold text-lg text-gray-900">${edu.institution}</h3>
            <p class="${edu.active ? "text-teal-600" : "text-gray-600"} font-medium">${edu.period}</p>
            <p class="text-gray-700">${edu.degree}</p>
            ${edu.specialization ? `<p class="text-gray-600 text-sm">${edu.specialization}</p>` : ""}
        `
    container.appendChild(eduElement)
  })
}

// Initialize Languages
function initializeLanguages() {
  const container = document.getElementById("languages")
  container.innerHTML = ""

  languages.forEach((lang) => {
    const langElement = document.createElement("div")
    langElement.className = "p-4 bg-gray-50 rounded-lg"
    langElement.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="font-medium text-gray-900">${lang.language}</span>
                <span class="text-sm text-gray-600">${lang.level}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" data-width="${lang.percentage}"></div>
            </div>
        `
    container.appendChild(langElement)
  })
}

// Initialize Animations
function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"

        // Animate progress bars
        const progressBars = entry.target.querySelectorAll(".progress-fill")
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          setTimeout(() => {
            bar.style.width = width + "%"
          }, 200)
        })
      }
    })
  }, observerOptions)

  // Observe all fade-in elements
  document.querySelectorAll(".fade-in, .fade-in-delay").forEach((el) => {
    observer.observe(el)
  })

  // Observe skills section for progress bar animation
  const skillsSection = document.getElementById("skills")
  if (skillsSection) {
    observer.observe(skillsSection)
  }
}

// Initialize Navigation
function initializeNavigation() {
  // Active navigation highlighting
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("text-teal-600")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-teal-600")
      }
    })
  })
}

// Add loading states for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })
  })
})