// Form Validation and Submission
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const terms = document.getElementById('terms').checked;

    // Validate age
    if (age === '') {
        alert('Vänligen välj din ålder.');
        return;
    }

    // Validate terms
    if (!terms) {
        alert('Du måste acceptera användarvillkoren för att fortsätta.');
        return;
    }

    // Save user data to localStorage
    const userData = {
        fullname: fullname,
        phone: phone,
        age: age,
        timestamp: new Date().toISOString(),
        id: Date.now()
    };

    // Get existing users or initialize empty array
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    users.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(users));

    // Show success modal
    const successModal = document.querySelector('.success-model');
    successModal.style.display = 'flex';

    // Reset form
    this.reset();

    // Auto-hide after 4 seconds
    setTimeout(() => {
        successModal.style.display = 'none';
    }, 4000);
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// Register button click handler
const registerBtn = document.querySelector('.btn-register');
if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Scroll to form
        document.getElementById('signupForm').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Focus on first input
        setTimeout(() => {
            document.getElementById('fullname').focus();
        }, 500);
    });
}

// Secondary button click handlers
const secondaryBtn = document.querySelector('.info-container .btn-secondary');
if (secondaryBtn) {
    secondaryBtn.addEventListener('click', () => {
        // Scroll to form
        document.getElementById('signupForm').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Focus on first input
        setTimeout(() => {
            document.getElementById('fullname').focus();
        }, 500);
    });
}// Path selection buttons
const pathButtons = document.querySelectorAll('.btn-path');
pathButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Scroll to form
        document.getElementById('signupForm').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Add visual feedback
        const formContainer = document.querySelector('.form-container');
        formContainer.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.5)';

        setTimeout(() => {
            formContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        }, 2000);
    });
});

// Urgent button
const urgentBtn = document.querySelector('.btn-urgent');
if (urgentBtn) {
    urgentBtn.addEventListener('click', () => {
        // Scroll to form
        document.getElementById('signupForm').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Focus on first input
        setTimeout(() => {
            document.getElementById('fullname').focus();
        }, 500);
    });
}

// Close modals when clicking outside
document.querySelector('.success-model')?.addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

document.querySelector('.age-warning-modal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.path-card, .bonus-card, .req-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Dynamic viewer count (simulated)
function updateViewerCount() {
    const statNumber = document.querySelector('.stat-box .stat-number');
    if (statNumber) {
        const currentCount = parseInt(statNumber.textContent);
        const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        const newCount = Math.max(20, Math.min(30, currentCount + variation));
        statNumber.textContent = newCount;
    }
}

// Update viewer count every 5 seconds
setInterval(updateViewerCount, 5000);

// Phone number formatting
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');

        // Add +46 prefix if not present
        if (value.length > 0 && !value.startsWith('46')) {
            value = '46' + value;
        }

        // Format: +46 XXX XXX XXX
        if (value.length > 2) {
            value = '+' + value.substring(0, 2) + ' ' + value.substring(2);
        }
        if (value.length > 7) {
            value = value.substring(0, 7) + ' ' + value.substring(7);
        }
        if (value.length > 11) {
            value = value.substring(0, 11) + ' ' + value.substring(11, 14);
        }

        e.target.value = value.substring(0, 16); // Limit length
    });
}

// Add loading state to form submission
const form = document.getElementById('signupForm');
if (form) {
    form.addEventListener('submit', function () {
        const submitBtn = this.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Skickar in...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Console welcome message
console.log('%c👋 Välkommen till BusinessJungle!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cLämna en intresseanmälan så kontaktar vi dig.', 'color: #4a5568; font-size: 14px;');
