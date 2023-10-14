
const toggleButton = document.querySelector('.open-btn');
const icon1 = document.getElementById('icon-1');
const icon2 = document.getElementById('icon-2');
const icon3 = document.getElementById('icon-3');
const closeMenu = document.querySelector('.close-navbar');
const sidebar = document.querySelector('.menu');
const menuLinks = document.querySelectorAll(".menu_links li a")

/*------------------------------------------
       MOBILE SCROLL
-------------------------------------------*/
function handleScroll() {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
        toggleButton.style.visibility = 'visible'
    }
     else {
        navbar.classList.remove('sticky');
        toggleButton.style.visibility = "hidden"
    }
}
window.addEventListener('scroll', handleScroll);

// sidebar
toggleButton.addEventListener('click', () => {
    icon1.classList.toggle('icon-1');
    icon2.classList.toggle('icon-2');
    icon3.classList.toggle('icon-3');
    sidebar.classList.toggle('visible');
});
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        sidebar.classList.remove('visible');
        icon1.classList.remove('icon-1');
        icon2.classList.remove('icon-2');
        icon3.classList.remove('icon-3');
    });
}   

const buttonHolder = document.querySelectorAll('#nav-tab li');
const panes = document.querySelectorAll(".tab-content .tab-pane")

function remover(elements, classNames){
    if (typeof elements === "object") {
        elements.forEach((el) => {
            el.classList.remove(classNames)
        })
    }
}
const hidePanes = () => {
    panes.forEach((ele) => {
        ele.classList.remove("active")
        ele.classList.add("active")
    })
}
buttonHolder.forEach((el, index) => {
    el.addEventListener("click", () => {
        remover(panes,"active")
        remover(buttonHolder,"active")

        panes[index].classList.add("active")
        buttonHolder[index].classList.add("active")
    })
})

/*------------------------------------------
   GROOMSMEN & BRIDESMAID IMAGE POPUP MODAL
-------------------------------------------*/
const previewModalOverlay = document.getElementById('myModal');
const image = document.querySelector(".image");
const modalImage = document.getElementById('modal_Img');
const captionText = document.getElementById('caption');
const modalCloseBtn = document.getElementById('modal-close-btn');
const money = document.getElementById("money");
const cash = document.querySelector(".cashGift");

const weddingFolks = document.querySelectorAll('.popup-image');
for (i = 0; i < weddingFolks.length; i++) {
    weddingFolks[i].addEventListener('click', showPopupImage);
}
function showPopupImage() {
    previewModalOverlay.style.display = "block";
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;
    cash.style.display = 'none';
}
modalCloseBtn.addEventListener('click', () => {
    image.style.display = 'flex';
    cash.style.display = 'block';
    myModal.style.display = "none";
});

/*------------------------------------------
       MODAL FOR GIFT REGSITRY (CASH GIFT)
-------------------------------------------*/
money.addEventListener('click', () => {
    previewModalOverlay.style.display = "block";
    image.style.display = 'none';
    cash.style.display = 'block';
});

/*------------------------------------------
       TEXT TO CLIPBOARD JS
-------------------------------------------*/
// first account details
const bank1 = document.getElementById('bankName1');
const firstName = document.getElementById('accountName1');
const firstNumber = document.getElementById('accountNumber1');
const copyButton1 = document.getElementById('copyButton1');
copyButton1.addEventListener("click", ()=>{
    // Create a string to hold the concatenated values
    var concatenatedValues = bank1.value  + " " + firstName.value + " " + firstNumber.value;

    navigator.clipboard.writeText(concatenatedValues)
    .then(function() {
        console.log("Text copied successfully!");
    })
    .catch(function(error) {
        console.error("Error copying text: ", error);
    });

    copyButton1.innerHTML = '<i class="fa-solid fa-check"></i>';

    setTimeout(function(){
        copyButton1.innerHTML = '<i class="fa-regular fa-clone"></i>'
    }, 3000);
});
 
// second account details
const bank2 = document.getElementById('bankName2');
const secondName = document.getElementById('accountName2');
const secondNumber = document.getElementById('accountNumber2');
const sortCode = document.getElementById('sortCode');
const copyButton2 = document.getElementById('copyButton2');

copyButton2.addEventListener("click", ()=>{
    // Create a string to hold the concatenated values
    var concatenatedValues = bank2.value  + " " + secondName.value + " " + secondNumber.value + " " + sortCode.value;

    navigator.clipboard.writeText(concatenatedValues)
    .then(function() {
        console.log("Text copied successfully!");
    })
    .catch(function(error) {
        console.error("Error copying text: ", error);
    });
    copyButton2.innerHTML = '<i class="fa-solid fa-check"></i>';

    setTimeout(function(){
        copyButton2.innerHTML = '<i class="fa-regular fa-clone"></i>'
    }, 3000);
    
});
/*------------------------------------------
       WEDDING GALLERY 
-------------------------------------------*/
let list = document.querySelectorAll('.gallery-filters .list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');
        for (let k = 0; k < itemBox.length; k++) {
            // itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

/*------------------------------------------
       SCROLL TO TOP
-------------------------------------------*/
const btnScrollToTop = document.querySelector(".back-to-top");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 2000 ? 'block' : 'none';
});
/*------------------------------------------
       COUNT DOWN TIMER
-------------------------------------------*/
// Set the date we're counting down to
const targetDate = new Date('2023-10-14 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (distance < 1) {
        document.getElementById('clock').style.display = 'none';
        document.getElementById('endMessage').style.display = 'block';
        // do this for 30 seconds
        var duration = 30 * 1000;
        var end = Date.now() + duration;

        (function frame() {
        // launch a few confetti from the left edge
        confetti({
            particleCount: 3,
            angle: 360,
            spread: 100,
            origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2
              }
        });
        // and launch a few from the right edge
        confetti({
            particleCount: 3,
            angle: 360,
            spread: 100,
            origin: {
                x: Math.random(),
                // since they fall down, start a bit higher than random
                y: Math.random() - 0.2
              }
        });

        // keep going until we are out of time
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        }());
        // clearInterval(updateTimer);
        setTimeout(() => {
            confetti.reset();
        }, 3000);
         // keep going until we are out of time
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }
}
setInterval(updateTimer, 1000);

// sticky navigation
const navbar = document.querySelector('#header');
const navbarOffsetTop = navbar.offsetTop;

/*------------------------------------------
        FORM VALIDTION
-------------------------------------------*/
// form success popup
const successPopUp = document.getElementById("success");
const popupClose = document.getElementById("close");

// form inputs
const nameInput = document.getElementById('name');
const phoneNumber = document.getElementById('number');
const emailInput = document.getElementById('email');
const comments = document.getElementById('comments');
const guests = document.getElementById('guestNumber');
const form = document.getElementById('myForm');
// error messages
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const guestError = document.getElementById("guestError");
const commentError = document.getElementById("commentError");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = nameInput.value.toUpperCase();
    const phone = phoneNumber.value;
    const emailValue = emailInput.value;
    const selectedOption = guests.value;
    const message = comments.value;

    // name validation
    if (nameValue.trim() === "") {
        nameError.textContent = "Please enter your full name.";
        return;
    }
    if (nameValue.length < 3 || !nameValue.includes(" ")) {
        nameError.textContent = "Please enter your full name with at least two names separated by a space.";
        return;
    }
    else {
        nameError.textContent = "";
    }

    // phone validation regex
    const phoneRegex = /^[0-9]{11}$/; // matches 11 digits only
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Please enter a valid phone number with 11 digits only.";
        return;
    }
    else {
        phoneError.textContent = "";
    }

    // Email validation
    if (emailValue.trim() === "") {
        emailError.textContent = "Please enter your email";
        return;
    }
    // email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }
    else {
        emailError.textContent = "";
    }

    // validation for number of guests
    if (guests.value === "") {
        guestError.textContent = "select an option";
    }

    // validation for comments
    if (message.trim() === "") {
        commentError.textContent = "Please a comment is required.";
        return;
    }
    else if (message.split(' ').length < 3) {
        commentError.textContent = "Please Enter a minimum of 3 words";
        return;
    }
    else {
        commentError.textContent = "";
    }
    // Send email using EmailJS service
    emailjs.send("service_6noctkb", "template_zb9bzie", {
        to_name: couple_Name,
        from_name: nameValue,
        from_phone: phone,
        from_email: emailValue,
        no_Attendees: selectedOption,
        message: message
    }).then(function (response) {
        showSuccess();
        document.getElementById('myForm').reset();
    },function (error) {
        console.log("FAILED...", error);
    });
});
function showSuccess() {
    successPopUp.classList.add("active");
    setTimeout(() => {
        successPopUp.classList.remove("active");
    }, 5000);
}
popupClose.addEventListener("click", () => {
    successPopUp.classList.remove("active");
})

/*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
-------------------------------------------*/
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    innerHeight: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
/*------------------------------------------
        = MUSIC PLAYER
-------------------------------------------*/
const musicBtn = document.querySelector(".music-box-toggle-btn");
const musicBox = document.querySelector(".player");
const curr_track = document.createElement('audio');
const track_art = document.querySelector('.track-art');
const playpauseBtn = document.querySelector('.playPause-track');
const volumeSlider = document.querySelector('.volume_slider');
let isPlaying = true;
curr_track.src = '../assets/media/Ryan_Mack_-_Forever_And_Ever_And_Always.mp3';

musicBtn.addEventListener('click', ()=>{
    musicBox.classList.toggle('toggle-music-box');
})
playpauseBtn.addEventListener('click' ,()=>{
    isPlaying ? pauseTrack() : playTrack();
})
volumeSlider.addEventListener('change', (evt)=>{
    curr_track.volume = volumeSlider.value / 100;
})
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}
/*------------------------------------------
        HOTELS DIV SLIDER
-------------------------------------------*/
const hotelContainer = document.querySelector('.hotels');
const hotelBackBtn = document.getElementById('hotelBackBtn');
const hotelNextBtn = document.getElementById('hotelNextBtn');

hotelBackBtn.addEventListener("click", () =>{
    hotelContainer.scrollLeft -=320;
});
hotelNextBtn.addEventListener("click", () =>{
    hotelContainer.scrollLeft +=320;
});
/*------------------------------------------
        AIRBNB DIV SLIDER
-------------------------------------------*/
const airbnbConatiner = document.querySelector('.airbnbs');
const airbnbPrevBtn = document.getElementById('airbnbPrevBtn');
const airbnbNextBtn = document.getElementById('airbnbNextBtn');

airbnbPrevBtn.addEventListener("click", () =>{
    airbnbConatiner.scrollLeft -=380;
});
airbnbNextBtn.addEventListener("click", () =>{
    airbnbConatiner.scrollLeft +=380;
});
/*------------------------------------------
        TOUR CENTERS SLIDER
-------------------------------------------*/
const tourCentersContainer = document.querySelector('.tourInfo');
const tourBackBtn = document.getElementById('tourBackBtn');
const tourNextBtn = document.getElementById('tourNextBtn');

tourBackBtn.addEventListener("click", () =>{
    tourCentersContainer.scrollLeft -=320;
});
tourNextBtn.addEventListener("click", () =>{
    tourCentersContainer.scrollLeft +=320;
});