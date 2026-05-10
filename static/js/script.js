document.addEventListener('DOMContentLoaded', () => {

    // Scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.feature-card, .flow-step, .tech-card, .stat');
    revealElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(32px)';
        el.style.transition = `all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ${i * 0.06}s`;
        revealObserver.observe(el);
    });

    const styleTag = document.createElement('style');
    styleTag.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(styleTag);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.borderBottomColor = 'rgba(0,200,150,0.12)';
        } else {
            navbar.style.borderBottomColor = 'rgba(255,255,255,0.07)';
        }
    }, { passive: true });

    console.log('ClassLens Landing Page Active');
});
