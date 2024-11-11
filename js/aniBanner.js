// Function to toggle animation
function toggleAnimation() {
    var banner = document.getElementById('banner');
    var styleSheet = document.getElementById('glitchStyle');
    var button = document.getElementById('toggle-button');

    if (banner && banner.style.animation !== 'none') {
        // Turn off animation
        banner.style.animation = 'none';
        if (styleSheet) document.head.removeChild(styleSheet);
        button.innerHTML = "Turn On All Animation";
    } else {
        // Turn on animation
        if (banner) banner.style.animation = 'glitch 1s infinite';
        if (!styleSheet) {
            var newStyleSheet = document.createElement("style");
            newStyleSheet.id = 'glitchStyle';
            newStyleSheet.innerHTML = `
                @keyframes glitch {
                    0% {
                        transform: translate(0);
                        opacity: 1;
                        text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 105, 180, 0.2);
                    }
                    20% {
                        transform: translate(-5px, 5px);
                        opacity: 0.8;
                        text-shadow: 0 0 5px rgba(255, 0, 255, 0.4), 0 0 10px rgba(255, 0, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.4);
                    }
                    40% {
                        transform: translate(5px, -5px);
                        opacity: 1;
                        text-shadow: 0 0 5px rgba(0, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.3), 0 0 15px rgba(255, 0, 0, 0.3);
                    }
                    60% {
                        transform: translate(-10px, 10px);
                        opacity: 0.9;
                        text-shadow: 0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.5), 0 0 15px rgba(0, 0, 255, 0.5);
                    }
                    80% {
                        transform: translate(10px, -10px);
                        opacity: 1;
                        text-shadow: 0 0 5px rgba(255, 0, 255, 0.6), 0 0 10px rgba(255, 0, 255, 0.6), 0 0 15px rgba(255, 255, 0, 0.6);
                    }
                    100% {
                        transform: translate(0);
                        opacity: 1;
                        text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 105, 180, 0.2);
                    }
                }
            `;
            document.head.appendChild(newStyleSheet);
        }
        button.innerHTML = "Turn Off All Animation";
    }
}

// Display "Go Eagle"
setTimeout(function () {
    var banner = document.createElement('div');
    banner.id = 'banner'; // Added ID for reference
    banner.innerHTML = "Go Eagle";
    banner.style.position = 'fixed';
    banner.style.width = 'min-content';
    banner.style.top = '120px';
    banner.style.left = '50%';
    banner.style.transform = 'translateX(-50%)';
    banner.style.background = '#16212d';
    banner.style.color = '#ffe0ff';
    banner.style.padding = '10px';
    banner.style.fontSize = '60px';
    banner.style.borderRadius = '10px';
    banner.style.zIndex = '1000';
    banner.style.fontFamily = 'orbitron', 'Audiowide', 'Bungee', 'Russo One', 'Electrolize';
    banner.style.textShadow = '0 0 5px #ff69b4, 0 0 10px #ff69b4, 0 0 15px #ff69b4';
    banner.style.animation = 'glitch 1s infinite';

    // Keyframes for the glitch effect
    var styleSheet = document.createElement("style");
    styleSheet.id = 'glitchStyle';
    styleSheet.innerHTML = `
        @keyframes glitch {
            0% {
                transform: translate(0);
                opacity: 1;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 105, 180, 0.2);
            }
            20% {
                transform: translate(-5px, 5px);
                opacity: 0.8;
                text-shadow: 0 0 5px rgba(255, 0, 255, 0.4), 0 0 10px rgba(255, 0, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.4);
            }
            40% {
                transform: translate(5px, -5px);
                opacity: 1;
                text-shadow: 0 0 5px rgba(0, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.3), 0 0 15px rgba(255, 0, 0, 0.3);
            }
            60% {
                transform: translate(-10px, 10px);
                opacity: 0.9;
                text-shadow: 0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.5), 0 0 15px rgba(0, 0, 255, 0.5);
            }
            80% {
                transform: translate(10px, -10px);
                opacity: 1;
                text-shadow: 0 0 5px rgba(255, 0, 255, 0.6), 0 0 10px rgba(255, 0, 255, 0.6), 0 0 15px rgba(255, 255, 0, 0.6);
            }
            100% {
                transform: translate(0);
                opacity: 1;
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.2), 0 0 15px rgba(255, 105, 180, 0.2);
            }
        }
    `;
    document.head.appendChild(styleSheet);

    document.body.appendChild(banner);

    setTimeout(function () {
        banner.remove();
        if (styleSheet) {
            document.head.removeChild(styleSheet);
        }
    }, 360); // Banner appears for 360 seconds
}, 2000); // Delay of 2 seconds before the banner appears

// Create the toggle button to turn off all animation
var button = document.createElement('button');
button.innerHTML = "Turn Off All Animation";
button.id = 'toggle-button';
button.style.position = 'fixed';
button.style.top = '75%'; // 1/4 from the bottom of the page
button.style.right = '0';  
button.style.transform = 'translateY(-50%)';
button.style.padding = '10px';
button.style.zIndex = '1001';
button.style.width = 'min-content';
button.onclick = toggleAnimation;
document.body.appendChild(button);