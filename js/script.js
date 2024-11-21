//부드러운 스크롤 이벤트
        $(document).ready(function() {
            $("section").on("mousewheel", function(event, delta) {
                var target = null;
                var sections = $("section");
                var firstSection = sections.first(); 
                var lastSection = sections.last();   
                var currentSection = $(this);
                if (currentSection.is(lastSection) && delta < 0) {
                    return;  
                }
                if (currentSection.is(firstSection) && delta > 0) {
                    return;
                }
                if (delta > 0) { 
                    target = currentSection.prev(); 
                } 
                else if (delta < 0) {  
                    target = currentSection.next();  
                }
                if (target.length) {
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, 1000, 'easeInOutQuad'); 
                }
            });
        });
        
        
        
        
        
        
 //캔메이크 앱창 열기
        function openInNewWindow(event) {
                event.preventDefault();
                var url = event.target.parentElement.href;
                window.open(url, '_blank', 'width=375, height=866, scrollbars=yes');
            }
        
        
        
        
 // web 넘기기
        $(document).ready(function() {
            const $slider = $('#webapp-slider');
            const $slides = $('#webapp-slider > div'); 
            const $prevArrow = $('.prev-arrow');
            const $nextArrow = $('.next-arrow');
            let currentSlide = -3;  


            function goToSlide(index) {
                if (index < -3) {
                    currentSlide = $slides.length - 1; 
                } else if (index >= $slides.length) {
                    currentSlide = -3; 
                } else {
                    currentSlide = index;
                }

                $slider.css('transform', 'translateX(' + (-currentSlide * 50) + 'vw)');
            }
            $prevArrow.click(function() {
                goToSlide(currentSlide - 2); 
            });
            $nextArrow.click(function() {
                goToSlide(currentSlide + 2); 
            });
        
            $('.prev-arrow').click(function() {
                moveSlide('prev');
            });
            $('.next-arrow').click(function() {
                moveSlide('next');
            });
            goToSlide(currentSlide); 
        });
       
        
        


        
        
        
        
// 배너 모달창 띄우기
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');
    const openModalLinks = document.querySelectorAll('.open-modal');
    openModalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const imageUrl = this.getAttribute('data-image');
            modalImg.src = imageUrl; 
            modal.style.display = 'flex'; 
        });
    });
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none'; 
        }
    });
});


