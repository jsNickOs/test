console.log('code.js');

$(document).ready(function () {

    console.dir(window);

    // $(window).scroll(function(){
    //     console.log('wow');
    //     // if ($(this).scrollTop() > 500) {
    //     //     $('.scrollUp').css('opacity','1');
    //     // } else {
    //     //     $('.scrollUp').css('opacity','0');
    //     // }
    // });

    window.addEventListener('scroll',()=>{
        console.log('wsdsdf');
    });

    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href');

        // console.log('id = "' + id + '"');

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        let top = $(id).offset().top;

        // console.log('top = ' + top);

        //анимируем переход на расстояние - top за 1500 мс
        // $('body,html').animate({scrollTop: top}, 1500);
        $('body,html').animate({scrollTop: top}, 1500);

    });

//toggle message_body
    $("#MostPopularPosts").click(function(){
        // console.log('$(this)' + $(this).id);
        $("main div.most-popular-img").slideToggle(500);
        return false;
    });

//кнопка наверх




    $('.scrollUp').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 700);
        return false;
    });



});







