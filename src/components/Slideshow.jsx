import React from 'react';
import '../styles/SlideShow.css'

export const Slideshow = () => {
        var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }

  return <div className='SlideShow'>
        <div className="slideshow-container">

            <div className="mySlides fade">
                {/* <div className="numbertext">1 / 3</div> */}
                <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_2X_19012022_nd.jpg" alt="imgslider1" style={{width:"100%"}} />
                {/* <div className="text">Caption Text</div> */}
            </div>

            <div className="mySlides fade">
                {/* <div className="numbertext">2 / 3</div> */}
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Sofa_HeroBanner_23122021.jpg" alt="img2" style={{width:"100%"}} />
                {/* <div className="text">Caption Two</div> */}
            </div>

            <div className="mySlides fade">
                {/* <div className="numbertext">3 / 3</div> */}
                <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/QSBEDS_HeroBanner_23122021.jpg" alt="img3" style={{width:"100%"}} />
                {/* <div className="text">Caption Three</div> */}
            </div>

            <p className="prev" onclick="plusSlides(-1)">;</p>
            <p className="next" onclick="plusSlides(1)">;</p>

        </div>
            <br />

        <div style={{textAlign:"center"}}>
            <span className="dot" onClick="currentSlide(1)"></span> 
            <span className="dot" onClick="currentSlide(2)"></span> 
            <span className="dot" onClick="currentSlide(3)"></span> 
        </div>
    </div>
}
