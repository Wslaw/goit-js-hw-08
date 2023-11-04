
      const numStars = 1000;
    function createStars() {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(star);
      }
    }
    createStars();
 