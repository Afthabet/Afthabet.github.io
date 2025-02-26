document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.glow-container');
    const textElement = document.querySelector('.heading-title');
    const originalText = textElement.textContent;
    
    // Define specific colors for each letter
    const letterColors = {
        'S': 'orange',
        'P': 'green',
        'E': 'blue',
        'R': 'red',
        'A': 'yellow',
        'N': 'purple',
        'Z': 'cyan'
    };
    
    // Clear the text content to replace with spans
    textElement.textContent = '';
    
    // Create individual letter spans
    for (let i = 0; i < originalText.length; i++) {
        const letter = document.createElement('span');
        letter.textContent = originalText[i];
        letter.className = 'letter';
        letter.style.position = 'relative';
        letter.style.display = 'inline-block';
        letter.style.color = 'transparent';
        letter.style.transition = 'color 0.3s ease, text-shadow 0.3s ease';
        
        // Store the letter's color
        const letterColor = letterColors[originalText[i]] || '#ffffff';
        
        // Add hover event listener to each letter
        letter.addEventListener('mouseenter', () => {
            letter.style.color = letterColor;
            letter.style.textShadow = `0 0 20px ${letterColor}, 0 0 40px ${letterColor}, 0 0 60px ${letterColor}`;
        });
        
        letter.addEventListener('mouseleave', () => {
            letter.style.color = 'transparent';
            letter.style.textShadow = '0 0 10px rgba(40, 125, 170, 0.2)';
        });
        
        textElement.appendChild(letter);
    }
    
    // Keep the mouse following effect
    const updatePosition = (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        container.style.setProperty('--x', `${x}px`);
        container.style.setProperty('--y', `${y}px`);
    };

    container.addEventListener('mousemove', updatePosition);
    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        updatePosition(e.touches[0]);
    });
});
