
window.addEventListener("DOMContentLoaded", e => {
    document.getElementById('button1').addEventListener('click', function() {
        pickOption(1)
    });
    document.getElementById('button2').addEventListener('click', function() {
        pickOption(2)
    });
    document.getElementById('button3').addEventListener('click', function() {
        pickOption(3)
    });
    document.getElementById('button4').addEventListener('click', function() {
        pickOption(4)
    });

    document.getElementById('next').addEventListener('click', function() {
        next()
    });
})

let answers = [1, 2, 3, 4, 2, 3, 4];
let currentQuestions = 0;
let score = 0;
function pickOption(number) {
    let results = document.getElementById("results");
    results.classList.remove("hidden");
    console.log(results.classList);
    document.getElementById('button1').classList.add("hidden");
    document.getElementById('button2').classList.add("hidden");
    document.getElementById('button3').classList.add("hidden");
    document.getElementById('button4').classList.add("hidden");
    if (number == answers[currentQuestions]) {
        results.getElementsByTagName("h2")[0].classList.remove("hidden");
        score++;
        document.getElementById("score").innerHTML = "Current Score: " + score + "/7";
    } else {
        results.getElementsByTagName("h2")[1].classList.remove("hidden");
        results.getElementsByTagName("h2")[1].innerHTML = "Wrong. The right option was: " + answers[currentQuestions];
    }
}

function next() {
    console.log(document.getElementById("results").classList);
    document.getElementById('question'+(currentQuestions+1)).classList.add("hidden");
    document.querySelectorAll('audio').forEach(el => el.pause());
    document.getElementById("results").classList.add("hidden");
    
    document.getElementById("results").getElementsByTagName("h2")[0].classList.add("hidden");
    document.getElementById("results").getElementsByTagName("h2")[1].classList.add("hidden");
    currentQuestions++;
    if (currentQuestions == 6) {
        let finished = document.getElementById("finished");
        finished.classList.remove("hidden");
        finished.innerHTML = "You finished with a score of " + score + " out of 7!";
        document.getElementById("score").classList.add("hidden");
        return;
    }
    
    document.getElementById('button1').classList.remove("hidden");
    document.getElementById('button2').classList.remove("hidden");
    document.getElementById('button3').classList.remove("hidden");
    document.getElementById('button4').classList.remove("hidden");
    
    document.getElementById('question'+(currentQuestions+1)).classList.remove("hidden");
}