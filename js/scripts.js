
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
            description = 
                '<p>“DalloWays - Le vie di Mrs. Dalloway” is a <b>side-view</b> cultural adventure game that follows the main character,' + 
                ' Clarissa Dalloway, during a walk in London during June, 1923. </p>' +
                'The play is inspired by Virginia Woolf\'s novel, <b>Mrs. Dalloway</b>, with the aim of bringing the audience closer to one' +
                ' of the classics of contemporary literature.<br> '+
                '<p>The player progresses by exploring different areas of <b>London</b>, interacting with various characters and collecting fragments of stories and reflections,'+
                ' following the plot of the book.</p>' +
                '<p>There is a “catching objects” <b>mini-game</b> to simulate the purchase of the bouquet of flowers that Clarissa picks up for her party.</p>' +
                '<a href="https://claire-dev.itch.io/dalloways" class="neon_text">Play it here!</h1>';
            break;

        case 'isoroom':
            slide1.src="./assets/img/portfolio/isoRoom/frame1.png";
            slide2.src="./assets/img/portfolio/isoRoom/frame2.png";
            slide3.src="./assets/img/portfolio/isoRoom/frame3.png";
            slide4.src="./assets/img/portfolio/isoRoom/frame4.png";
            tools = ['Blender'];
            description = '<p>In this experiment I began to study <b>environments</b> and how it might be possible to replicate them within ' +
            'a <b>3D modeling</b> software such as is <b>Blender</b>.<br>'+
            'I had fun thinking about how to replicate small <b>everyday objects</b> as it might be an ordinary teenager\'s room, so with posters, '+
            'plants, and books ready to study.</p>' +
            '<p>I wanted to give importance to <b>light</b>, so using various sources of lighting throughout the room: the <b>candle</b>, for a soft, small light; '+
            'the <b>lamp</b> to give the impression of an enveloping light; and, finally, the <b>open window</b> to remind us of the warm light of a late afternoon.</p>';
            break;

        case 'cento':
            slide1.src="./assets/img/portfolio/riot/frame1.png";
            slide2.src="./assets/img/portfolio/riot/frame2.png";
            slide3.src="./assets/img/portfolio/riot/frame3.png";
            slide4.src="./assets/img/portfolio/riot/frame4.png";
            tools = ['Adobe After Effects - ', 'Blender'];
            description = '<p>On the occasion of the centennial celebration of the <b>Treccani Encyclopedia</b>, it was the final project of the Master of Digital and Immersive Technologies for Art and Culture '+
            'to perform a <b>videomapping</b> celebrating these 100 years, from 1925 to 2025.</p>'+
            '<p>It was a <b>group effort</b>, starting off first with <b>3D modeling</b> of the building facade on which the videomapping was to be done, '+
            'and then dividing up the various historical events, which happened in Italy and around the world.</p>'+
            '<p>I was mainly concerned with animating concepts set in the 1960s in Italy, so with movements of <b>rebellion</b>, demands for civil rights and riots. '+
            'Specifically, I was able to create small <b>loop animations</b> of protesters that would then be projected onto the windows of the building.</p>' +
            '<p><a href="https://treccaniaccademia.it/mostra-videomapping-centenario-treccani/" class="neon_text">The full article</a></p>';
            break;

        case 'concepts creation': 
            slide1.src="./assets/img/portfolio/medusa/frame1.png";
            slide2.src="./assets/img/portfolio/medusa/frame2.png";
            slide3.src="./assets/img/portfolio/medusa/frame3.png";
            slide4.src="./assets/img/portfolio/medusa/frame4.png";
            tools = ['MidJourney'];
            description = '<p>This was a project totally devoted to the study of <b>environments</b>, stories, '+
                'and the use of photography techniques. <br>'+
                'I was inspired by a world of <b>contrasts</b>, intrigued by how an idea can arise exactly where you least expect it.</p>'+
                '<p>For the <b>first</b> image, I thought of combining two very distant worlds: <b>Medusa</b> by Caravaggio and Bill Everett\'s drawings '+
                'for the <b>Daredevil</b> series. In my version of the story, however, Medusa stands out as the winner and, in fact, prevails over '+
                'the defeated <b>Perseus</b>.</p>' +
                '<p>Subsequently, I wanted to imagine a <b>colorful</b> and dynamic cartoon with a cute wooden <b>skeleton</b> as the main character.<br>'+
                'In this case, the contrast comes from the <b>friendly</b> nature of the background, where a skeleton is not meant to be given its stereotypical '+
                'somber and gray look.</p>'+
                '<p>In the <b>third</b> image, I wanted to emphasize <b>feelings</b>: a drag queen with sad features appears in the foreground, '+
                'while she is enveloped in <b>bright</b> and harmonious colors, as of celebration.</p>' +
                '<p>As a <b>final</b> concept I wanted to represent <b>nature</b>, which is forgotten due to technological development, '+ 
                'but which knows how to take back its own <b>space</b>: in this case by conquering a <b>keyboard</b>.</p>';

            break;

        case 'palisade':
            slide1.src="./assets/img/portfolio/palisade/frame1.png";
            slide2.src="./assets/img/portfolio/palisade/frame2.png";
            slide3.src="./assets/img/portfolio/palisade/frame3.png";
            slide4.src="./assets/img/portfolio/palisade/frame4.png";
            tools = ['C++ - ', 'Palisade - ', 'Python - ', 'Pandas'];
            description = '<p>This was my <b>master thesis</b> project in which I had to study an example case of a <b>sensor network</b>, '+
            'which presented a <b>security</b> problem in data exchange and, therefore, apply <b>homomorphic encryption</b> in that exchange.</p>'+
            '<p>This study was divided into <b>three parts</b>: first, <b>GPS sensor data</b> was collected and encrypted to maintain security.'+
            'Next, the redundant residue-system representation (RRNS) was applied to that encryption, and then, finally, the ciphers were <b>aggregated</b> '+
            'to apply a <b>sum</b> to that data as an example operation.</p>' +
            '<p>Homomorphic data encryption was possible through the use of the C++ library <b>Palisade</b>, '+
            'which also allowed aggregation operations to be performed on the encrypted data <b>without previously decrypting</b> it.</p>';
            break;

        case 'smartweets':
            slide1.src="./assets/img/portfolio/smartweets/frame1.png";
            slide2.src="./assets/img/portfolio/smartweets/frame2.png";
            slide3.src="./assets/img/portfolio/smartweets/frame3.png";
            slide4.src="./assets/img/portfolio/smartweets/frame4.png";
            tools = ['Android Studio - ', 'Java - ', 'Python' ];
            description = '<p>This was my <b>bachelor thesis</b> project, consisting of the development of a smart <b>dashboard</b> in order to create more efficient '+
            '<b>tweets</b> so that museums and other cultural sectors can be publicized.</p>'+
            '<p>The web framework used was <b>Flask</b>, written in Python.<br>'+
            'In order to create the <b>classifier model</b>, the Python libraries Scikit-learn, Pandas, and finally Seaborn were studied '+
            'and implemented in order to visualize the data produced.</p>' +
            '<p>The <b>dashboard</b> was developed using <b>Android Studio</b>. It presents a simple design: '+
            'the admin is asked to enter the name of his <b>museum</b>, so it can be identified inside its study group. '+
            'Next, an input window opens in which to try out one\'s <b>tweet</b> idea: if the classifier assesses a possible lack of content, '+
            'it will make <b>suggestions</b> in order to improve the coverage of the message itself.<br>'+
            'Once the message refinement process is complete, one can enter their <b>Twitter</b> credentials and publish the message.</p>';
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
