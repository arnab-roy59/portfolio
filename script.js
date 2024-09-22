        //Navbar
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

        //Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || !/^[a-zA-Z ]+$/.test(name)) {
        alert("Please enter a valid name (letters only).");
        return;
    }
    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (subject === "") {
        alert("Subject cannot be empty.");
        return;
    }
    if (message === "") {
        alert("Message cannot be empty.");
        return;
    }
    alert("Form submitted successfully!");
});





