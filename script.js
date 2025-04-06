// Smooth scroll behaviour
document.querySelector('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
         })
     });
      
    //Scroll animations
    const scrollElement = document.querySelectorAll('.feature-card, .game-card');
    const observer =new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.style.opacity =1;
                entry.target.style.transform ='translateY(0)';
            }
        })
    });

