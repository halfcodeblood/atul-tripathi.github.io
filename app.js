// Portfolio data
const portfolioData = {
  personalInfo: {
    name: "Atul Tripathi",
    title: "MTech Student - Data Science & AI",
    subtitle: "IIT Tirupati | Exploring the intersection of Data Science and Full Stack Development",
    location: "IIT Tirupati, Andhra Pradesh",
    email: "atul.tripathi@iittp.ac.in",
    phone: "+91 XXXXX-XXXXX",
    bio: "I'm currently pursuing my Master's in Data Science and AI at IIT Tirupati, specializing in machine learning algorithms and predictive modeling. I'm passionate about building end-to-end solutions that combine data-driven insights with intuitive web interfaces. Currently expanding my skillset through comprehensive full-stack development courses.",
    resumeLink: "#",
    institution: "Indian Institute of Technology Tirupati",
    degree: "MTech in Data Science & Artificial Intelligence",
    department: "Computer Science & Engineering"
  },
  socialLinks: {
    github: "https://github.com/atultripathi",
    linkedin: "https://linkedin.com/in/atultripathi",
    twitter: "https://twitter.com/atultripathi",
    email: "mailto:atul.tripathi@iittp.ac.in"
  },
  skills: [
    {
      category: "Data Science & Machine Learning",
      items: [
        {name: "Python", level: 85, icon: "🐍"},
        {name: "Pandas/NumPy", level: 80, icon: "📊"},
        {name: "Scikit-learn", level: 75, icon: "🤖"},
        {name: "TensorFlow", level: 70, icon: "🧠"},
        {name: "Data Visualization", level: 78, icon: "📈"}
      ]
    },
    {
      category: "Full Stack Development (Learning)",
      items: [
        {name: "HTML/CSS", level: 60, icon: "🎨"},
        {name: "JavaScript", level: 55, icon: "📜"},
        {name: "React", level: 45, icon: "⚛️"},
        {name: "Node.js", level: 40, icon: "🟢"},
        {name: "MongoDB", level: 35, icon: "🍃"}
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        {name: "Git", level: 75, icon: "📝"},
        {name: "Jupyter", level: 85, icon: "📓"},
        {name: "SQL", level: 70, icon: "🗄️"},
        {name: "R", level: 65, icon: "📊"},
        {name: "Docker", level: 30, icon: "🐳"}
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Stock Price Prediction Model",
      description: "ML model using LSTM networks to predict stock prices with historical data analysis and feature engineering. Built with Python, TensorFlow, and real market data.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTA3M2VlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjZmZmIj5TdG9jayBQcmVkaWN0aW9uPC90ZXh0Pjwvc3ZnPg==",
      technologies: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
      liveDemo: "#",
      github: "#",
      category: "ml",
      status: "planned"
    },
    {
      id: 2,
      title: "House Price Prediction System",
      description: "End-to-end ML project predicting house prices using regression algorithms with comprehensive data preprocessing and model evaluation.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTBiOTgxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjZmZmIj5Ib3VzZSBQcmljZSBNTDwvdGV4dD48L3N2Zz4=",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Seaborn", "Flask"],
      liveDemo: "#",
      github: "#",
      category: "ml",
      status: "planned"
    },
    {
      id: 3,
      title: "Full Stack To-Do Application",
      description: "Complete CRUD application with user authentication, built following Angela Yu's course. Features modern UI and RESTful API design.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjU5ZTBiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjZmZmIj5Ub0RvIEFwcDwvdGV4dD48L3N2Zz4=",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveDemo: "#",
      github: "#",
      category: "fullstack",
      status: "planned"
    },
    {
      id: 4,
      title: "Blog Website with CMS",
      description: "Dynamic blog platform with admin panel, built as part of web development learning journey. Features responsive design and content management.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGI1Y2Y2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjZmZmIj5CbG9nIFdlYnNpdGU8L3RleHQ+PC9zdmc+",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "EJS"],
      liveDemo: "#",
      github: "#",
      category: "fullstack",
      status: "planned"
    },
    {
      id: 5,
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for exploratory data analysis with visualization capabilities. Academic project focusing on data insights and patterns.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWY0NDQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjZmZmIj5EYXRhIERhc2hib2FyZDwvdGV4dD48L3N2Zz4=",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "Seaborn"],
      liveDemo: "#",
      github: "#",
      category: "academic",
      status: "in-progress"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my academic journey and projects. Built with modern web technologies and smooth animations.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDY5MWQ0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjZmZmIj5Qb3J0Zm9saW8gU2l0ZTwvdGV4dD48L3N2Zz4=",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      liveDemo: "#",
      github: "#",
      category: "fullstack",
      status: "completed"
    }
  ],
  statistics: [
    {label: "Current CGPA", value: 8.5, suffix: "/10"},
    {label: "Courses Completed", value: 12, suffix: "+"},
    {label: "Projects Planned", value: 4, suffix: ""},
    {label: "Technologies Learning", value: 15, suffix: "+"}
  ]
};

// Global variables
let currentFilter = 'all';
let isScrolling = false;
let countersAnimated = false;
let typingStarted = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize App
function initializeApp() {
    setupLoadingScreen();
    setupImageHandling();
    setupNavigation();
    setupScrollAnimations();
    setupSkillsSection();
    setupProjectsSection();
    setupContactForm();
    setupModal();
    
    // Hide loading screen after delay
    setTimeout(() => {
        hideLoadingScreen();
        // Start typing animation after loading screen is hidden
        setTimeout(() => {
            setupTypingAnimation();
        }, 500);
    }, 1500);
}

// Image Handling - Critical Fix
function setupImageHandling() {
    // Handle hero profile image
    const heroImage = document.querySelector('.profile-image');
    const heroFallback = document.querySelector('.profile-fallback');
    
    if (heroImage) {
        // Try to load the image
        const img = new Image();
        img.onload = function() {
            heroImage.src = 'MyPic.jpg';
            heroImage.alt = 'Atul Tripathi - MTech Student at IIT Tirupati - loaded';
            heroImage.classList.add('loaded');
            if (heroFallback) {
                heroFallback.style.opacity = '0';
            }
        };
        
        img.onerror = function() {
            heroImage.classList.add('error');
            if (heroFallback) {
                heroFallback.style.opacity = '1';
            }
            console.log('Hero image failed to load, showing fallback');
        };
        
        // Set a timeout to show fallback if image doesn't load within 3 seconds
        setTimeout(() => {
            if (!heroImage.classList.contains('loaded')) {
                heroImage.classList.add('error');
                if (heroFallback) {
                    heroFallback.style.opacity = '1';
                }
                console.log('Hero image load timeout, showing fallback');
            }
        }, 3000);
        
        img.src = 'MyPic.jpg';
    }
    
    // Handle about section image
    const aboutImage = document.querySelector('.about-profile-image');
    const aboutFallback = document.querySelector('.about-fallback');
    
    if (aboutImage) {
        // Try to load the image
        const img = new Image();
        img.onload = function() {
            aboutImage.src = 'MyPic.jpg';
            aboutImage.alt = 'Atul Tripathi - Data Science & AI Student at IIT Tirupati - loaded';
            aboutImage.classList.add('loaded');
            if (aboutFallback) {
                aboutFallback.style.opacity = '0';
            }
        };
        
        img.onerror = function() {
            aboutImage.classList.add('error');
            if (aboutFallback) {
                aboutFallback.style.opacity = '1';
            }
            console.log('About image failed to load, showing fallback');
        };
        
        // Set a timeout to show fallback if image doesn't load within 3 seconds
        setTimeout(() => {
            if (!aboutImage.classList.contains('loaded')) {
                aboutImage.classList.add('error');
                if (aboutFallback) {
                    aboutFallback.style.opacity = '1';
                }
                console.log('About image load timeout, showing fallback');
            }
        }, 3000);
        
        img.src = 'MyPic.jpg';
    }
}

// Loading Screen
function setupLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            hideLoadingScreen();
        }, 1000);
    });
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Navigation - Fixed
function setupNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    const logo = document.querySelector('.nav-logo');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links - Fixed
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            isScrolling = true;
            
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    setTimeout(() => {
                        isScrolling = false;
                    }, 1000);
                }
            }
        });
    });

    // Logo click to scroll to top - Fixed
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            isScrolling = true;
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        });
    }

    // Navbar scroll effect and active link highlighting
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        if (!isScrolling) {
            updateActiveNavLink();
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Typing Animation - Fixed
function setupTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    if (!typingText || typingStarted) return;
    
    typingStarted = true;
    const texts = ['Atul Tripathi', 'MTech Student', 'Data Scientist', 'AI Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    // Set initial text to prevent truncation
    typingText.textContent = 'Atul Tripathi';
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start typing animation after a delay
    setTimeout(() => {
        typeWriter();
    }, 1000);
}

// Scroll Animations - Fixed counter animation trigger
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                if (entry.target.classList.contains('about') && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Skills Section
function setupSkillsSection() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    portfolioData.skills.forEach(category => {
        const categoryElement = createSkillCategory(category);
        skillsGrid.appendChild(categoryElement);
    });
}

function createSkillCategory(category) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';
    
    let skillsHTML = `<h3>${category.category}</h3>`;
    
    category.items.forEach(skill => {
        skillsHTML += `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-icon">${skill.icon}</span>
                    <span class="skill-name">${skill.name}</span>
                </div>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-progress">
                <div class="skill-progress-bar" data-level="${skill.level}"></div>
            </div>
        `;
    });
    
    categoryDiv.innerHTML = skillsHTML;
    return categoryDiv;
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    skillBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        
        setTimeout(() => {
            bar.style.width = `${level}%`;
        }, index * 100);
    });
}

// Projects Section - Fixed filtering
function setupProjectsSection() {
    const projectsGrid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (!projectsGrid) return;
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    // Setup filter buttons - Fixed
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

function createProjectCard(project) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'project-card';
    cardDiv.setAttribute('data-category', project.category);
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    const statusText = {
        'planned': 'Planned',
        'in-progress': 'In Progress',
        'completed': 'Completed'
    };
    
    cardDiv.innerHTML = `
        <div class="project-status ${project.status}">${statusText[project.status]}</div>
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" />
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            <div class="project-links">
                <a href="${project.liveDemo}" class="project-link project-link--primary" target="_blank">View Project</a>
                <a href="${project.github}" class="project-link project-link--secondary" target="_blank">GitHub</a>
            </div>
        </div>
    `;
    
    cardDiv.addEventListener('click', (e) => {
        if (!e.target.classList.contains('project-link') && !e.target.closest('.project-link')) {
            e.preventDefault();
            openProjectModal(project);
        }
    });
    
    return cardDiv;
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            card.style.display = 'block';
        } else {
            card.classList.add('hidden');
            card.style.display = 'none';
        }
    });
    
    currentFilter = filter;
}

// Modal
function setupModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    const modalClose = modal.querySelector('.modal-close');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    const statusText = {
        'planned': 'Planned Project',
        'in-progress': 'Currently Working On',
        'completed': 'Completed Project'
    };
    
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem;" />
            <div style="margin-bottom: 1rem;">
                <span class="project-status ${project.status}" style="position: static; margin-bottom: 1rem; display: inline-block;">${statusText[project.status]}</span>
            </div>
            <h2 style="margin-bottom: 1rem; color: var(--color-text);">${project.title}</h2>
            <p style="margin-bottom: 1.5rem; color: var(--color-text-secondary); line-height: 1.6;">${project.description}</p>
            <div style="margin-bottom: 1.5rem;">
                <h3 style="margin-bottom: 0.5rem; color: var(--color-text);">Technologies:</h3>
                <div class="project-tech">${techTags}</div>
            </div>
            <div class="project-links">
                <a href="${project.liveDemo}" class="project-link project-link--primary" target="_blank">View Project</a>
                <a href="${project.github}" class="project-link project-link--secondary" target="_blank">GitHub</a>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Counter Animations - Fixed to prevent multiple triggers
function animateCounters() {
    const statItems = document.querySelectorAll('.stat-item');
    const statistics = portfolioData.statistics;
    
    statItems.forEach((item, index) => {
        if (index < statistics.length) {
            const target = statistics[index].value;
            const suffix = statistics[index].suffix;
            const numberElement = item.querySelector('.stat-number');
            
            if (numberElement) {
                animateCounter(numberElement, target, suffix, 2000);
            }
        }
    });
}

function animateCounter(element, target, suffix, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        
        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };
    
    updateCounter();
}

// Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        if (!data.name || !data.email || !data.subject || !data.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        handleFormSubmission(data);
    });
}

function handleFormSubmission(data) {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    setTimeout(() => {
        submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
        submitBtn.style.background = 'var(--color-success)';
        submitBtn.style.opacity = '1';
        
        showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
        
        document.getElementById('contact-form').reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'var(--color-primary)';
            submitBtn.style.opacity = '1';
        }, 3000);
        
        console.log('Form submitted:', data);
    }, 2000);
}

function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `<p>${message}</p>`;
    
    messageElement.style.cssText = `
        padding: 1rem;
        margin: 1rem 0;
        border-radius: var(--radius-base);
        font-weight: 500;
        animation: slideIn 0.3s ease;
        ${type === 'success' 
            ? 'background: rgba(33, 128, 141, 0.1); color: var(--color-success); border: 1px solid rgba(33, 128, 141, 0.25);' 
            : 'background: rgba(192, 21, 47, 0.1); color: var(--color-error); border: 1px solid rgba(192, 21, 47, 0.25);'
        }
    `;
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm && contactForm.parentNode) {
        contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
        
        setTimeout(() => {
            if (messageElement && messageElement.parentNode) {
                messageElement.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    messageElement.remove();
                }, 300);
            }
        }, 5000);
    }
}

// Form message animations
const formMessageStyles = document.createElement('style');
formMessageStyles.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(formMessageStyles);

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedUpdateActiveNavLink = debounce(updateActiveNavLink, 100);

// Parallax effect for hero shapes
function addParallaxEffect() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${parallax * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Initialize parallax effect
setTimeout(() => {
    addParallaxEffect();
}, 2000);

// Performance optimization
let ticking = false;

function updateScrollAnimations() {
    debouncedUpdateActiveNavLink();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollAnimations);
        ticking = true;
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Keyboard navigation styles
const keyboardNavStyles = document.createElement('style');
keyboardNavStyles.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--color-primary) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardNavStyles);

// Smooth reveal animations for elements
function initSmoothReveal() {
    const elements = document.querySelectorAll('.skill-category, .project-card, .contact-item');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Initialize smooth reveal after DOM is loaded
setTimeout(initSmoothReveal, 1000);

// Academic focus enhancements
function addAcademicFeatures() {
    const academicElements = document.querySelectorAll('.institution, .duration');
    academicElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.05)';
            element.style.transition = 'transform 0.2s ease';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
}

// Initialize academic features
setTimeout(addAcademicFeatures, 2000);