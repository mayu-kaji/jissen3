const loadAnime = $ ('#load-animation');

  $(window).on('load',function(){
    loadAnime.delay(3500).fadeOut(1000)
  });

  function stopload(){
    loadAnime.delay(1000).fadeOut(700)
  }
  setTimeout('stopload()',10000);

$(function(){ 
  $('#js-nav a').on('click', function () {
      let hrefElement = $(this).attr('href');
      let headerHeight = $('#header').outerHeight(true);
      let position = $(hrefElement).offset().top - headerHeight;
      $('body,html').animate({
        scrollTop: position
      }, 500);
      return false;
    });
});

$(function(){ 
  $('.slideShow').slick({
    autoplaySpeed: 2500, // 自動再生の速度
    speed: 1200, // スライド自体の速度
    autoplay: true, // 自動再生の設定
    infinite: true, // 永続化
    slideToShow: 1, // スライド数
    slideToScroll: 1, // スライドのスクロール数
    arrows: true, // 矢印の表示
    prevArrow: '<div class="slick_prev"></div>', // 矢印部分のHTML変更
    nextArrow: '<div class="slick_next"></div>', // 矢印部分のHTML変更
    dots: true, // 下部ドットナビゲーションの表示
    pauseOnFocus: false, // フォーカス時の一時停止の設定
    pauseOnHover: false, // マウスホバー時の一時停止の設定
    pauseOnDotsHover: false, // ドットマウスホバー時の一時停止の設定
  });
});