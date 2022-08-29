const navigator =  document.getElementById('navigator-toggler');
const navigatorToggler =  document.querySelector('#navigator-toggler + label');
const manuContainer = document.querySelector('.manu');
const socialLinksContainer = document.querySelector('.social');
const addressLinksContainer = document.querySelector('.address');
const profileImage = document.querySelector('.profile-image');
const downAnimationContainer = document.querySelectorAll('.downAnimation');
const header = document.querySelector('.header');
const frontViewContainer = document.querySelector('.front-view');
const frontView = document.querySelectorAll('.front-view .box');
const featuredMainBtn = document.querySelector('.featured-projects');
const capabiltiesMainBtn = document.querySelector('.my-capabilties');
const featuredMainContainer = document.querySelector('.projects');
const capabiltiesMainContainer = document.querySelector('.capabilities');
const backToFrontBtns = document.querySelectorAll('.back-to-front');
const cardDownAnimation = document.querySelectorAll('.card-downa-animation');
const aboutLink = document.querySelector('.about-link');
const backAboutLink = document.querySelector('.back-about');
const mainManuContainer = document.querySelector('.manu-container');
const aboutMeContainer = document.querySelector('.about-me');
const contactUsLink = document.querySelector('.contact-us-link');
const contactUsContainer = document.querySelector('.contact-us');
const backContactUs = document.querySelector('.back-contact-us');



navigator.addEventListener('change', function(){
    //DownAnimation Start
    if(this.checked){
        //document Background 
        
        setTimeout(() => {
            document.querySelector('body').classList.toggle('orange');
            socialLinksContainer.classList.toggle('visible');
            addressLinksContainer.classList.toggle('visible');
            manuContainer.classList.toggle('visible');
            profileImage.classList.toggle('visible');
            header.classList.toggle('set-max-height');
            downAnimationContainer.forEach(links => {
                links.classList.toggle('visible');
            });
        }, 700);

        

        frontView.forEach(box => {
            box.classList.toggle('hide');
        });
        
    }else {
        //document Background 
        document.querySelector('body').classList.toggle('orange');

        socialLinksContainer.classList.toggle('visible');
        addressLinksContainer.classList.toggle('visible');
        manuContainer.classList.toggle('visible');
        profileImage.classList.toggle('visible');
        header.classList.toggle('set-max-height');
        
        downAnimationContainer.forEach(links => {
            links.classList.toggle('visible');
        });

        setTimeout(() => {
            frontView.forEach(box => {
                box.classList.toggle('hide');
            });
        }, 700);
    }
    //DownAnimation End
})


//Featured Btn
featuredMainBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Featired');
    frontView.forEach(box => {
        box.classList.toggle('hide');
    });
    header.classList.toggle('hide');
    document.querySelector('body').classList.add(this.getAttribute('add-data-bg'));
    document.querySelector('body').classList.remove(this.getAttribute('remove-data-bg'));
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
    frontViewContainer.classList.toggle('pointer-none');

    setTimeout(() => {
        featuredMainContainer.classList.add('show');
        cardDownAnimation.forEach(card => {
            card.classList.toggle('visible');
        })
    }, 1000);
})

//Capabilites Btn
capabiltiesMainBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Caoablites');
    frontView.forEach(box => {
        box.classList.toggle('hide');
    });
    header.classList.toggle('hide');
    document.querySelector('body').classList.add(this.getAttribute('add-data-bg'));
    document.querySelector('body').classList.remove(this.getAttribute('remove-data-bg'));
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#F5B331');
    frontViewContainer.classList.toggle('pointer-none');

    setTimeout(() => {
        capabiltiesMainContainer.classList.add('show');
        cardDownAnimation.forEach(card => {
            card.classList.toggle('visible');
        })
    }, 1000);
})

//Back to Front

backToFrontBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        cardDownAnimation.forEach(card => {
            card.classList.toggle('visible');
        })
        setTimeout(() => {
            frontView.forEach(box => {
                box.classList.toggle('hide');
            });
            featuredMainContainer.classList.remove('show');
            capabiltiesMainContainer.classList.remove('show');
            frontViewContainer.classList.toggle('pointer-none');    
            header.classList.toggle('hide');
            document.querySelector('body').classList.remove('orange');
            document.querySelector('body').classList.remove('white');
        }, 1000);
        setTimeout(() => {
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#F5B331');
        }, 1500)
    })
})


//About Links
aboutLink.addEventListener('click', function(e){
    e.preventDefault();
    downAnimationContainer.forEach(links => {
        links.classList.toggle('visible');
    });
    aboutMeContainer.classList.remove('max-height-0');
    setTimeout(() => {
        mainManuContainer.classList.add('max-height-0');
        aboutMeContainer.classList.add('show');
    }, 1000);
    
});

backAboutLink.addEventListener('click', function(e){
    e.preventDefault();
    aboutMeContainer.classList.remove('show');
    setTimeout(() => {
        mainManuContainer.classList.remove('max-height-0');
        downAnimationContainer.forEach(links => {
            links.classList.toggle('visible');
        });
        aboutMeContainer.classList.add('max-height-0');
    }, 800);
});

//Contact Us Link
contactUsLink.addEventListener('click', function(e){
    e.preventDefault();
    downAnimationContainer.forEach(links => {
        links.classList.toggle('visible');
    });
    contactUsContainer.classList.remove('max-height-0');
    setTimeout(() => {
        mainManuContainer.classList.add('max-height-0');
        contactUsContainer.classList.add('show');
    }, 1000);
    
});

backContactUs.addEventListener('click', function(e){
    e.preventDefault();
    contactUsContainer.classList.remove('show');
    setTimeout(() => {
        mainManuContainer.classList.remove('max-height-0');
        downAnimationContainer.forEach(links => {
            links.classList.toggle('visible');
        });
        contactUsContainer.classList.add('max-height-0');
    }, 800);
});

