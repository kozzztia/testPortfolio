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
    // ---------------------------------------------------------------main slider
    let changeColor = function(element){
      $('.header__btn').css({'backgroundColor':'#C4C4C4'});
      $(element).css({'backgroundColor':'#CBE918'});
      }
      $('.biography').click(() =>{
        changeColor('.biography');
        $('.main__container').animate({'right':'0'}),100;

      })
      $('.landing').click(() =>{
        changeColor('.landing');
        $('.main__container').animate({'right':'100%'}),100;

      })
      $('.code').click(() =>{
        changeColor('.code');
        $('.main__container').animate({'right':'200%'}),100;

      })
      // -------------------------------------------------------------header burger
      $('.menu').click(() =>{
        if($('.header__nav').css('height') == '50px'){
          $('.header__nav').animate({height:'248px', opacity:0.9},100);
          $('.menu').html('&#10006')
        }
        if($('.header__nav').css('height') == '248px'){
          $('.header__nav').animate({height:'50px', opacity:1},100);
          $('.menu').html('&#9776')
        }
      })
 









  });