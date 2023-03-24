document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".main, .projects, .skills, .achievements");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.add("slide-in");
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.remove("slide-in");
        }
      });
    }, {
      threshold: 0.5
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  