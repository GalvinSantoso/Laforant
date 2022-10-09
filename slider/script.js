let state = false

function toggleNavbarNav(){
    let nav = document.getElementById('nav-content')

    if(state==false){
        nav.style.display = 'flex'
        state=true
    }else if(state==true){
        nav.style.display='none'
        state=false
    }
}

$(document).ready(function(){
    $('#hide-btn').click(function(){
        // $('.image').css({display : 'none'})
        // $('.image').hide(1000, function(){
        //     alert('Sucess Hide Image')
        // })

        // $('.image').slideUp()

        // $('.image').fadeOut()
    })

    $('#show-btn').click(function(){
        // $('.image').css({display : 'none'})
        // $('.image').show(1000, function(){
        //     alert('Sucess Show Image')
        // })

        // $('.image').slideDown()

        // $('.image').fadeIn()
    })

    $('#toggle-btn').hover(function(){
        // $('.image').css({display : 'none'})
        // $('.image').slideToggle()

        $('.image').fadeToggle()
    })

    $('#animate-btn').click(function(){
        $('.image img').animate({
            width : '500px',
            height : '500px'
        }, 1000 , function(){
            $('.image img').animate({
                width : '100px',
                height : '100px'
            }, 1000)
        })
    })  

    $('#cc-btn').click(function(){
        // $('.image').empty()
        // $('.image').html('<h2>Chewy</h2> <img src="./../assets/assets/chewy.jpg" alt="">')
        $('.image').append('<h2>Chewy</h2> <img src="./../assets/assets/chewy.jpg" alt="">')
        $('.image').prepend('<h2>Chewy</h2> <img src="./../assets/assets/chewy.jpg" alt="">')
        // console.log($('.image').html())
        console.log($('.image').text())
    })

    let totalSlide = $('.slider div.slides div.slide').lenght
    let slideWidth = $('.slider div.slides div.slide').width()
    let slideHeight = $('.slider div.slides div.slide').height()
    let totalWidth = totalSlide * slideWidth

    $('.slider').css({width : slideWidth, height : slideHeight})
    $('.slider div.slides').css({width : totalWidth, marginLeft : -slideWidth})
    $('.slider div.slide div.slide:last-child').prependTo('.slider div.slides')

    $('#prev-btn').click(function(){
        $('.slider div.slides').animate({
            left : slideWidth
        }, 1000, function(){
            $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')
            $('.slider div.slides').css({left : ''})
        })
    })

    $('#next-btn').click(function(){
        $('.slider div.slides').animate({
            left : -slideWidth
        }, 1000, function(){
            $('.slider div.slides div.slide:first-child').appendTo('.slider div.slides')
            $('.slider div.slides').css({left : ''})
        })
    })
})
