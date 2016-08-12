/**
 * Created by ayham on 6/24/16.
 */


function test() {
    document.getElementById("design").innerHTML = "HAHA!"
}


$(function () { //everything so far need to be placed in a function as a selector
    var stickyHeaderTop = $('.myNavBar').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= stickyHeaderTop) {
            $('.myNavBar').addClass('navbar-fixed-top').css({"box-shadow":"0 1px 2px rgba(0,0,0,0.2)","transition":"300ms"});
            $('.aboutUs').addClass('aboutUsPadding');
        } else {
            $('.myNavBar').removeClass('navbar-fixed-top').css({"box-shadow":"0 0px 0px rgba(0,0,0,0.0)","transition":"300ms"});;
            $('.aboutUs').removeClass('aboutUsPadding')


        }
    });
});



$(function (){
    $('.info1').hover(
        function () {
            $('.icon1').css({"background-color":"#40e0d0"});
        },
        function () {
            $('.icon1').css({"background-color":" #333"});
        })




    $('.info2').hover(
        function () {
            $('.icon2').css({"background-color":"#40e0d0"});

        },
        function () {
            $('.icon2').css({"background-color":" #333"});
        }
    )



    $('.info3').hover(
        function () {
            $('.icon3').css({"background-color":"#40e0d0"});

        },
        function () {
            $('.icon3').css({"background-color":" #333"});
        }
    )



    $('.info4').hover(
        function () {
            $('.icon4').css({"background-color":"#40e0d0"});

        },
        function () {
            $('.icon4').css({"background-color":" #333"});
        }
    )


});



$(function () {

    $('.card').hover(

        function () {
            //$(this).css({ "height":"2000px" ,"transition":"500ms"});
            $('.test').css({"height":"200px","transition":"500ms"});
            //$('#clientJoy').css({"text-align":"left","transition":"1000ms"})
        },

        function () {
            //$(this).css({"height":"110px" ,"transition":"500ms"});
            $('.test').css({"height":"0","transition":"500ms"});
            //$('#clientJoy').css({"text-align":"center","transition":"1000ms"})


        }
    );


        $('.card2').hover(

            function () {
                //$(this).css({ "height":"2000px" ,"transition":"500ms"});
                $('.test2').css({"height":"200px","transition":"500ms"});
                //$('#clientJoy').css({"text-align":"left","transition":"1000ms"})
            },

            function () {
                //$(this).css({"height":"110px" ,"transition":"500ms"});
                $('.test2').css({"height":"0","transition":"500ms"});
                //$('#clientJoy').css({"text-align":"center","transition":"1000ms"})


            }
        );

    
        $('.card3').hover(

            function () {
                //$(this).css({ "height":"2000px" ,"transition":"500ms"});
                $('.test3').css({"height":"200px","transition":"500ms"});
                //$('#clientJoy').css({"text-align":"left","transition":"1000ms"})
            },

            function () {
                //$(this).css({"height":"110px" ,"transition":"500ms"});
                $('.test3').css({"height":"0","transition":"500ms"});
                //$('#clientJoy').css({"text-align":"center","transition":"1000ms"})


            }
        );


});
