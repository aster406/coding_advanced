
$(function(){
    // ここに処理を記述

    let mySwiper = new Swiper ('.swiper', {

        // オプション設定
        loop: true,
        autoplay: {
          delay: 3000,
        },
      
        pagination: {
          el: '.swiper-pagination', //ページネーション要素
          type: 'bullets', //ページネーション種類
          clickable: true, //クリックに反応させる
        },
      
        //ナビゲーションボタン（矢印）表示設定
        navigation: {
          nextEl: '.swiper-button-next', //「次へボタン」要素指定
          prevEl: '.swiper-button-prev', //「前へボタン」要素指定
        },
      
        //スクロールバー表示設定
        scrollbar: {
          el: '.swiper-scrollbar', //要素指定
        },

        slidesPerView: 1,
        breakpoints: {
         // スライドの表示枚数：500px以上の場合
         500: {
            slidesPerView: 2,
            }
        }
      });

      $(".gdn-btn1").click(function(){//.button1をクリックしたら
        $(".guidance1").slideToggle();//スライドin/out
      });

      $(".gdn-btn2").click(function(){//.button1をクリックしたら
        $(".guidance2").slideToggle();//スライドin/out
      });

      $(".gdn-btn3").click(function(){//.button1をクリックしたら
        $(".guidance3").slideToggle();//スライドin/out
      });

      $(window).scroll(function (){
        $('.js-fade').each(function(){
          let pos = $(this).offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > pos - windowHeight + 150){
            $(this).addClass('scroll');
          }
        });
      });



    });