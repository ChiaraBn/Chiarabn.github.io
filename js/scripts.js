
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


$(document).ready(function () {
    typingTerminal();
    
    $("span.navbar-toggler-icon").on("click", function() {
        toggleNavbar();
    })
    $(".nav-link").on('click', function() {
        document.getElementById('navbarNav').classList.remove('show');
    });


    $('#downloadCv').on('click', function() {
        let target = "./assets/ChiaraBoni.pdf";
        window.open(target, "_blank");
    })
})
