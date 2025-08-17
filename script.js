/***************************** Toggle icon and navbar *****************************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Toggle navbar icon and menu on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/***************************** Scroll section active link *****************************/

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; // Current scroll position
        let offset = sec.offsetTop - 150; // Section top position minus offset
        let height = sec.offsetHeight; // Section height
        let id = sec.getAttribute('id'); // Get section id

        // If the scroll is within the current section
        if (top >= offset && top < offset + height) {
            // Remove 'active' from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' to the current section's nav link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Optional: Auto-close navbar on scroll (for mobile view)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/***************************** Scroll reveal *****************************/
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });
// Reveal from top
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

// Reveal from bottom
ScrollReveal().reveal('.home-img, .services-container','.portfolio-box','.contact form',{ origin: 'bottom' });

// Reveal from left
ScrollReveal().reveal('.about-img', { origin: 'left' });

// Reveal from right
ScrollReveal().reveal('.about-content', { origin: 'right' });

// Reveal contact section
ScrollReveal().reveal('.contact form', { origin: 'bottom', delay: 300 });

/***************************** typed js  *****************************/

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Developer','UI/UX Designer','Graphic Designer','Content Writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
/***************************** Chatbot *****************************/
function userReply(message) {
    const chatBox = document.getElementById('chat-box');
    
    // Show user message
    const userMsg = document.createElement('div');
    userMsg.classList.add('user-msg');
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);
  
    // Bot response logic
    const botMsg = document.createElement('div');
    botMsg.classList.add('bot-msg');
    console.log(message);
    if (message.includes("about")) {
      botMsg.innerText = "I'm Keerthana, a Frontend Developer skilled in React, HTML, and CSS!";
    } else if (message.includes("name")) {
      botMsg.innerText = "Keerthana";
    } else if (message.includes("age")) {
      botMsg.innerText = "23";
    } else if (message.includes("gender")) {
        botMsg.innerText = "female";
    } else if (message.includes("email")) {
        botMsg.innerText = "123@gmail.com";
    } else if (message.includes("phone number")) {
        botMsg.innerText = "9876543210";
    } else if (message.includes("address")) {
        botMsg.innerText = "123, Main Street, Anytown, USA";
    }else {
      botMsg.innerText = "Sorry, I didn't understand that.";
    }
  
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll
  }

  
