document.addEventListener('DOMContentLoaded', function() {
    // Glow effect for hero title
    const glowText = document.getElementById('glowText');
    if (glowText) {
        const text = glowText.textContent;
        glowText.innerHTML = '';

        text.split('').forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            glowText.appendChild(span);
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        glowText.addEventListener('mouseover', (event) => {
            if (event.target.tagName === 'SPAN') {
                const randomColor = getRandomColor();
                event.target.style.textShadow = `0 0 5px ${randomColor}, 0 0 10px ${randomColor}, 0 0 15px ${randomColor}, 0 0 20px ${randomColor}`;
            }
        });

        glowText.addEventListener('mouseout', (event) => {
            if (event.target.tagName === 'SPAN') {
                event.target.style.textShadow = '';
            }
        });
    }

    // Navbar hide on scroll
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        
        // Hide navbar when scrolling down, show when scrolling up
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-80px"; // Adjust this value based on your navbar height
        }
        
        prevScrollpos = currentScrollPos;
    };

    // Make event cards clickable with respective pages
    const eventMappings = {
        '.event-card1': 'workshop.html',
        '.event-card2': 'autoshow.html',
        '.event-card3': 'proshow.html'
    };

    Object.keys(eventMappings).forEach(selector => {
        const cards = document.querySelectorAll(selector);
        cards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                window.location.href = eventMappings[selector];
            });
        });
    });

    // Make images zoomable when clicked
    document.querySelectorAll(".event-card1 img, .event-card2 img, .event-card3 img").forEach(img => {
        img.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent triggering the card's click event
            this.classList.toggle("zoomed");
        });
    });
});
