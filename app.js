
// const sections = document.querySelectorAll('section');
// const navList = document.querySelectorAll('nav .container ul li');

// window.addEventListener('scroll', ()=> {

//     let current = '';

//     console.log(scrollY);
//     sections.forEach( section => {

//         const sectionTop = section.offsetTop;
        
//         const sectionHeight = section.clientHeight;
//         if (scrollY >= ((sectionTop - sectionHeight) / 4)) {
//             current = section.getAttribute('class');
//         }


//     })

//     navList.forEach( li => {
//         li.classList.remove('active');
//         if (li.classList.contains(current)) {
//             li.classList.add('active');
//         }
//     })

// })


let sections = document.querySelectorAll('section');
let navList = document.querySelectorAll('nav ul li a');

window.onscroll = () => {


    sections.forEach(sec => {

        let top = window.scrollY;

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navList.forEach(links => {

                links.classList.remove('active');
                document.querySelector('nav ul li a [href*' + id + ']').classList.add('active');


            });

        };




    });




}



// function navFunction() {


//     var navigation = document.querySelector("nav");

//     navigation.classList.toggle("sticky", window.scrollY > 0);





// }
