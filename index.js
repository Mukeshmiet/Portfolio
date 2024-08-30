document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const overlayText = document.getElementById('overlay-text');
    const closeButton = document.getElementById('close-button');
    const showButtons = document.querySelectorAll('.show-button');
    
    const buttonTexts = {
        1: "Mitras3D (https://mukeshmiet.github.io/Mitras3D.com/ / www.mitras3d.com) - Static Website for 3D Printing and CAD Services Mitras3D is a static website that provides a comprehensive range of 3D printing and CAD (Computer-Aided Design) services. This repository serves as the central hub for the development and maintenance of the Mitras3D website. Table of Contents Introduction Features Installation Usage Contributing License Introduction Mitras3D is a user-friendly website designed to facilitate 3D printing and CAD services. It aims to cater to individuals, professionals, and businesses seeking high-quality 3D printed models or assistance with CAD designs. Whether you need a prototype for a product, custom-made objects, or help with designing complex models, Mitras3D is the platform you can rely on. Features 3D Printing Services: Mitras3D offers a range of 3D printing services, allowing users to upload their 3D models and have them printed in various materials and finishes. From simple prototypes to intricate models, we are equipped to handle diverse requirements. CAD Design Services: Our team of experienced CAD designers provides comprehensive assistance in creating and optimizing 3D models. Whether you require modifications to an existing design or need a new concept designed from scratch, we have the expertise to bring your ideas to life.",
        2: "Welcome to the my personal portfolio website! Here, you’ll find the assets for showcasing my work, skills, and projects. This site is designed to highlight my abilities in [list relevant skills, e.g., web development etc.] and provide a comprehensive overview of my professional journey. Features Responsive Design: Accessible and optimized for various devices and screen sizes. Interactive Elements: Showcases my technical skills with interactive components. Project Showcase: Detailed descriptions of my work, including [mention any specific types of projects, e.g., web apps, design projects, etc.]. Contact Information: Easy ways to get in touch with me for collaborations or inquiries.",
        3: "Welcome to the Number Guessing Game! This simple yet engaging web game challenges players to guess a randomly generated number between 1 and 20. The game is built using only HTML, CSS, and JavaScript, demonstrating a clean and interactive design. Game Overview Objective: Guess the correct number between 1 and 20 to win the game. Gameplay: Players enter a number in the input field and submit their guess. The game provides feedback on whether the guess is too high, too low, or correct. Winning: Upon guessing the correct number, players are greeted with a winning message and can restart the game. Features Interactive Gameplay: Immediate feedback on each guess helps players adjust their strategy. Simple Design: A user-friendly interface with intuitive controls. Styling: Clean and responsive design using CSS to ensure a pleasant gaming experience on any device. Technologies Used HTML: Structuring the game’s layout and elements. CSS: Styling the game to make it visually appealing and user-friendly. JavaScript: Implementing game logic, number generation, and user interaction.",
        4: "Welcome to the FAQ Website! This project features a straightforward and user-friendly website dedicated solely to providing answers to frequently asked questions. The site is built using HTML, CSS, and a touch of JavaScript to ensure a clean, responsive, and interactive experience. Overview Purpose: A simple website designed to display frequently asked questions and their answers. Design: Focused on clarity and ease of navigation with a clean and minimalistic design. Interaction: Basic interactivity to enhance user experience. Features Responsive Layout: Designed to be accessible on various devices, including desktops, tablets, and smartphones. Accordion Functionality: Utilizes JavaScript to expand and collapse answers, allowing users to view information without overwhelming the interface. Technologies Used HTML: Structure of the FAQ content. CSS: Styling for a clean and modern look, with responsive design elements. JavaScript: Basic scripts to handle interactive elements like accordion-style question and answer toggling.",
        5: "Text for Button 5",
        6: "Text for Button 6",
        7: "Text for Button 7",
        8: "Text for Button 8",
        9: "Text for Button 9",
        10: "Text for Button 10"
    };

    showButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonId = this.getAttribute('data-button');
            const text = buttonTexts[buttonId] || "Default Text";
            overlayText.textContent = text;
            overlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});

// FOOTER YEAR 

const yearEl = document.querySelector("#copyright span");
const currentYear=new Date().getFullYear();

yearEl.textContent = currentYear;
