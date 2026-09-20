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