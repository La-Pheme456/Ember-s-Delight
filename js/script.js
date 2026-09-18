var menubtn = document.querySelector('header nav .menubtn i'),
    menucontent = document.querySelector('header nav .list');
    
    menubtn.addEventListener('click', () => {
        console.log('clicked')
        menucontent.classList.toggle('active');
    })