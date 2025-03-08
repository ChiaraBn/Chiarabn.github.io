
function toggleNavbar() {
    let target = document.getElementById('navbarNav');
    (target.classList.contains('show')) ?
        target.classList.remove('show') :  
        target.classList.add('show');
}

function typingTerminal() {
    const messages = [
        "Start coding here",
        "Do not do this at home",
        "rm -f /",
        "command > /dev/sda",
        "mv /home/root/*  dev/null",
        "mkfs.ext4 /dev/sda",
        ":(){ :|:& };:"
    ];
    
    const typingTextElement = document.getElementById('typing_text');
    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    
    function typeMessage() {
        typingTextElement.textContent = '';    
        const currentMessage = messages[currentMessageIndex];
        
        function typeCharacter() {
            if (currentCharIndex < currentMessage.length) {
                typingTextElement.textContent += currentMessage.charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(typeCharacter, 100); 
            } else {
                setTimeout(clearMessage, 1000);
            }
        }
    
        typeCharacter();
    }
    
    function clearMessage() {
        currentCharIndex = 0;
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        typeMessage();
    }
    
    typeMessage();
}

function contentModalPortfolio(projectName) {
    $('#portfolioModalLabel').text(projectName);

    // on modal shown
    $('#portfolioModal').on('shown.bs.modal', function (event) {

    });

    let slide1 = document.getElementById("slide_one");
    let slide2 = document.getElementById("slide_two");
    let slide3 = document.getElementById("slide_three");
    let ul = document.getElementById("tech_list");
    ul.innerHTML = '';
    let names = [];

    switch(projectName) {
        case 'dalloways':
            slide1.src="./assets/img/portfolio/dalloways/frame1.png";
            slide2.src="./assets/img/portfolio/dalloways/frame2.png";
            slide3.src="./assets/img/portfolio/dalloways/frame3.png";
            names = ['GDevelop', 'MidJourney'];
            break;

        case 'riot':
            break;

        case 'medusa':
            break;

        case 'palisade':
            break;

        case 'smartweets':
            break;
    }

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var li = document.createElement('li');
        li.classList.add('list-inline-item');
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);
    }
}

$(document).ready(function () {
    typingTerminal();
    
    // navbar
    $("span.navbar-toggler-icon").on("click", function() {
        toggleNavbar();
    })
    $(".nav-link").on('click', function() {
        document.getElementById('navbarNav').classList.remove('show');
    });

    // cv button
    $('#downloadCv').on('click', function() {
        let target = "./assets/ChiaraBoni.pdf";
        window.open(target, "_blank");
    })
})
