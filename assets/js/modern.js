// Modern interactive enhancements for the website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all timeline items and publications
    document.querySelectorAll('.timeline-item, section li').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });

    // Add hover effects to external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(3px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add a subtle parallax effect to the header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            if (window.innerWidth > 768) { // Only on desktop
                header.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Add typing effect to the main title (optional)
    const title = document.querySelector('header h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }
});

// Add a fun easter egg for astronomy enthusiasts
let starCount = 0;
document.addEventListener('click', function(e) {
    if (e.target.closest('a[href*="astrobin"]')) {
        starCount++;
        if (starCount === 5) {
            // Create a small star animation
            const star = document.createElement('div');
            star.innerHTML = '⭐';
            star.style.position = 'fixed';
            star.style.left = e.clientX + 'px';
            star.style.top = e.clientY + 'px';
            star.style.fontSize = '20px';
            star.style.pointerEvents = 'none';
            star.style.zIndex = '9999';
            star.style.animation = 'starBurst 1s ease-out forwards';

            document.body.appendChild(star);

            setTimeout(() => {
                star.remove();
                starCount = 0;
            }, 1000);
        }
    }
});

// Add CSS for star animation
const style = document.createElement('style');
style.textContent = `
    @keyframes starBurst {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
