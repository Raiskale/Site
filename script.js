let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Correctly toggle the class name as a string
    menuIcon.classList.toggle('bx-x'); // Use the actual class name
    navbar.classList.toggle('active'); // Optional: Toggle the navbar visibility
};








let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });

    // sticky header 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


  //  poistetaan toggle icon ja navbar kun clickataan navbar linkkiä (scroll)
  menuIcon.classList.remove('bx-x'); 
  navbar.classList.remove('active');
}
