
alert("hello")
var Name = prompt("please enter your name: ")
alert("Thank you: \n"  + Name + "\nfor visiting my website")




$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('togle');


    });

});

