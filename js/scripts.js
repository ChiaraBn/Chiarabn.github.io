
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

    let slide1 = document.getElementById("slide_one");
    let slide2 = document.getElementById("slide_two");
    let slide3 = document.getElementById("slide_three");
    let slide4 = document.getElementById("slide_four");
    let ul = document.getElementById("tech_list");
    ul.innerHTML = '';
    let text = document.getElementById('modal-text');
    text.innerHTML = '';
    let tools = [];
    let description = '';

    switch(projectName) {
        case 'dalloways':
            slide1.src="./assets/img/portfolio/dalloways/frame1.png";
            slide2.src="./assets/img/portfolio/dalloways/frame2.png";
            slide3.src="./assets/img/portfolio/dalloways/frame3.png";
            slide4.src="./assets/img/portfolio/dalloways/frame4.png";
            tools = ['GDevelop - ', 'MidJourney'];
            description = '<p>“DalloWays - Le vie di Mrs. Dalloway” is a <b>side-view</b> adventure game that follows the main character,' + 
                ' Clarissa Dalloway, during a walk in London during June 13, 1923. </p>' +
                'The play is inspired by Virginia Woolf\'s novel, <b>Mrs. Dalloway</b>, with the aim of bringing the audience closer to one' +
                ' of the classics of contemporary literature.<br> '+
                '<p>The player progresses by exploring different areas of <b>London</b>, interacting with various characters and collecting fragments of stories and reflections,'+
                ' following the plot of the book.</p>' +
                'There is a “catching objects” <b>mini-game</b> to simulate the purchase of the bouquet of flowers that Clarissa picks up for her party.';
            break;

        case 'cento':
            slide1.src="./assets/img/portfolio/riot/frame1.png";
            slide2.src="./assets/img/portfolio/riot/frame2.png";
            slide3.src="./assets/img/portfolio/riot/frame3.png";
            slide4.src="./assets/img/portfolio/riot/frame4.png";
            tools = ['Adobe After Effects - ', 'Blender'];
            break;

        case 'medusa': 
            slide1.src="./assets/img/portfolio/medusa/frame1.png";
            slide2.src="./assets/img/portfolio/medusa/frame2.png";
            slide3.src="./assets/img/portfolio/medusa/frame3.png";
            slide4.src="./assets/img/portfolio/medusa/frame4.png";
            tools = ['MidJourney'];

            break;

        case 'palisade':
            slide1.src="./assets/img/portfolio/palisade/frame1.png";
            slide2.src="./assets/img/portfolio/palisade/frame2.png";
            slide3.src="./assets/img/portfolio/palisade/frame3.png";
            slide4.src="./assets/img/portfolio/palisade/frame4.png";
            tools = ['C++ - ', 'Palisade - ', 'Python - ', 'Pandas'];

            break;

        case 'smartweets':
            slide1.src="./assets/img/portfolio/smartweets/frame1.png";
            slide2.src="./assets/img/portfolio/smartweets/frame2.png";
            slide3.src="./assets/img/portfolio/smartweets/frame3.png";
            slide4.src="./assets/img/portfolio/smartweets/frame4.png";
            tools = ['Android Studio - ', 'Java - ', 'Python' ];
            break;
    }

    text.innerHTML = description;

    // tools
    for (var i = 0; i < tools.length; i++) {
        var name = tools[i];
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
