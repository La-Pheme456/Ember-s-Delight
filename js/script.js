var menubtn = document.querySelector('header nav .menubtn i'),
    menucontent = document.querySelector('header nav .list');
    
    menubtn.addEventListener('click', () => {
        console.log('clicked')
        menucontent.classList.toggle('active');
        if (menucontent.classList.contains('active')){
            menubtn.classList.remove("bi-list");
            menubtn.classList.add("bi-x-lg");
        }
        else {
            menubtn.classList.remove("bi-x-lg");
            menubtn.classList.add("bi-list");
        }
    });
let lastScroll = 0;
let header = document.querySelector('header');

window.addEventListener('scroll', () => {

    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll + 10 && currentScroll > 100) {
        header.classList.add('hide');

    } else if (currentScroll < lastScroll - 10) {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});