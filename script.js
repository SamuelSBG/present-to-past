var present = document.querySelector(".texto");
var past = document.querySelector(".past");
var cor = document.querySelector(".past");
function clicar() {
    if(past.value == "Type here") {
        past.value = "";
    }
}

var acertos = 0;

var verb_present = ["to drive", "to go", "to stop", "to feel", "to know", "to study", "to download", "to live",
"to text", "to travel", "to relax", "to chat", "to visit", "to play", "to dance", "to book", "to cry",
"to listen", "to love", "to kiss", "to finish", "to call", "to close", "to use", "to watch", "to want",
"to need", "to act", "to connect", "to depend", "to ask", "to open", "to prefer", "to shop", "to put",
"to understand", "to take", "to can", "to send", "spend", "to lend", "to fall", "to sleep", "to leave", "to meet",
"to keep", "to sweep", "to dream", "to read", "to say", "to grow", "to throw", "to fly", "to forget", "to get",
"to lose", "to be - am", "to hear", "to be - are", "to win", "to shut", "to cut", "to find", "to write",
"to wake", "to break", "to sell", "to tell", "to speak", "to choose", "to think", "to bring", "to fight",
"to buy", "to catch", "to teach", "to wear", "to tear", "to see", "to sit", "to swim", "to drink", "to sing",
"to ring", "to begin", "to run", "to have", "to make", "to come", "to give", "to eat", "to pay", "to build",
"to do"];

var verb_past = ["drove", "went", "stopped", "felt", "knew", "studied", "downloaded", "lived", "texted",
"traveled", "relaxed", "chatted", "visited", "played", "danced", "booked", "cried", "listened", "loved",
"kissed", "finished", "called", "closed", "used", "watched", "wanted", "needed", "acted", "connected",
"depended", "asked", "opened", "preferred", "shopped", "put", "understood", "took", "could", "sent", "spent", "lent", "fell",
"slept", "left", "met", "kept", "swept", "dreamt", "read", "said", "grew", "threw", "flew", "forgot", "got", "lost",
"was", "heard", "were", "won", "shut", "cut", "found", "wrote", "woke", "broke", "sold", "told", "spoke",
"chose", "thought", "brought", "fought", "bought", "caught", "taught", "wore", "tore", "saw", "sat", "swam",
"drank", "sang", "rang", "began", "ran", "had", "made", "came", "gave", "ate", "paid", "built", "did"];

var word = Math.floor(Math.random() * verb_present.length);
var palavras = verb_present.length;
mostrar_palavra();

// Funcao que mostra a palavra a ser exibida
function mostrar_palavra() {
    if(word == verb_present.length) {
        present.innerHTML = `Congratulations!`;
        past.value = `SCORE: ${acertos}/${palavras}`;
        past.disabled = true;
    } else {
        present.innerHTML = verb_present[word].toUpperCase();
    }
    
}

// Limpa o campo de texto aonde as palavras são digitadas
function limpar() {
    past.value="";
}

// Contabiliza o acerto e passa para a proxima palavra
function res_correta() {
    cor.style.background = "#00b300";
    setTimeout(function(){
        cor.style.background = "white";
        acertos += 1;
        limpar();
        verb_present.splice(word, 1);
        verb_past.splice(word, 1);
        word = Math.floor(Math.random() * verb_present.length);
        document.querySelector(".check").disabled = false;
        document.querySelector(".past").disabled = false;
        document.querySelector(".past").focus();
        mostrar_palavra();
    }, 1000);
    
}

// Notifica ao jogador que ele errou a palavra
function res_errada() {
    cor.style.background = "#ff1a1a";
    setTimeout(function(){
        alert(`A resposta certa é ${verb_past[word].toUpperCase()}`);
        cor.style.background = "white";
        limpar();
        verb_present.splice(word, 1);
        verb_past.splice(word, 1);
        word = Math.floor(Math.random() * verb_present.length);
        document.querySelector(".check").disabled = false;
        document.querySelector(".past").disabled = false;
        document.querySelector(".past").focus();
        mostrar_palavra();
    }, 1000);
    
}

// Ao apertar ENTER chama as funcoes necessarias para contabilizar o acerto ou o erro
past.addEventListener('keyup', function(e){
    var key = e.keyCode;
    if (key == 13) {
        if(past.value.trim().toLowerCase() == verb_past[word]) { // quando acertar
            res_correta();
        }else{ // quando errar
            res_errada();
        }
        document.querySelector(".past").disabled = true;
    }
});

function vereficar() {
    if(past.value.trim().toLowerCase() == verb_past[word]) { // quando acertar
        res_correta();
    }else{ // quando errar
        res_errada();
    }
    document.querySelector(".check").disabled = true;
}
