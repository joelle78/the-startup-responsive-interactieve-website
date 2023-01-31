//Cube 19 senior brand designers
document.getElementById('build-button').addEventListener("click",
    function () {
        document.getElementById('buildCube19').style.animation = "slideIn 2s forwards";
    });

//Cube 16 senior UX designers
document.getElementById('build-button').addEventListener("click",
    function () {
        document.getElementById('buildCube16').style.animation = "slideIn-2 2s forwards";
        document.getElementById('buildCube16').style.animationDelay = "1s";
    });

//Cube 13 developers
document.getElementById('build-button').addEventListener("click",
    function () {
        document.getElementById('buildCube13').style.animation = "slideIn-3 2s forwards";
        document.getElementById('buildCube13').style.animationDelay = "1.8s";
    });

//Cube 10 UX'ers
document.getElementById('build-button').addEventListener("click",
    function () {
        document.getElementById('buildCube10').style.animation = "slideIn-4 2s forwards";
        document.getElementById('buildCube10').style.animationDelay = "2.6s";
    });

//Cube 7 junior designer
document.getElementById('build-button').addEventListener("click",
    function () {
        document.getElementById('buildCube7').style.animation = "slideIn-5 2s forwards";
        document.getElementById('buildCube7').style.animationDelay = "3.2s";
    });

//Cube 4 open application
document.getElementById('build-button').addEventListener("click",
    function () {
        document.getElementById('buildCube4').style.animation = "slideIn-6 2s forwards";
        document.getElementById('buildCube4').style.animationDelay = "4s";
    });


// navbar
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});

// Reveal in function intro text (onder naar boven)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Reveal in function intro text 2 (rechts naar links)
function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal2);

// Reveal in function intro text 2 (rechts naar links)
function reveal3() {
    var reveals = document.querySelectorAll(".reveal3");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal3);