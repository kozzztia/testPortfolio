$(document).ready(function(){

    // const main = document.querySelector('.main__container');

    // const biography = document.querySelector('.biography');
    // const work = document.querySelector('.landing');
    // const code = document.querySelector('.code');
    // const contact = document.querySelector('.contact');

    // biography.addEventListener('click', () =>{
    //   main.style.right = '0';
    // })
    // work.addEventListener('click', () =>{
    //   main.style.right = '100%';
    // })
    // code.addEventListener('click', () =>{
    //   main.style.right = '200%';
    // })

      $('.biography').click(() =>{
        $('.main__container').animate({'right':'0'}),100;
      })
      $('.landing').click(() =>{
        $('.main__container').animate({'right':'100%'}),100;
      })
      $('.code').click(() =>{
        $('.main__container').animate({'right':'200%'}),100;
      })











  });