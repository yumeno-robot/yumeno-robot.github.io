let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let slideshowContainer = document.querySelector".slideshow-container");
    let dots = document.getElementsByClassName("dot");

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    // スライドの位置を計算し、横にスライドさせる
    slideshowContainer.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

    // ドットのアクティブ状態を更新
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";

    // 次のスライドに切り替える
    setTimeout(showSlides, 10000); // 10秒ごとにスライドを自動的に変更
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
