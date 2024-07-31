document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('img__anim');
        } else {
          entry.target.classList.remove('img__anim');
        }
      });
    });

    const animatedImage = document.querySelectorAll(".cat__img");
    animatedImage.forEach(img => observer.observe(img));
  });