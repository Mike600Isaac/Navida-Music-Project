//  const dots = document.querySelectorAll('.pagination-dots .dot');

//     dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         dots.forEach(d => d.classList.remove('active'));
//         dot.classList.add('active');
//         console.log('Page selected:', index + 1);
//     });
//     });


       
//     $(document).ready(function() {
//         $('.change-bg').click(function() {
//             var imgUrl = $(this).data('img'); 
//             $('body').css({
//                 'background-image': imgUrl,
//                 'transition': 'background 0.5s ease-in-out'
//             });
//         });
//     });



$(document).ready(function() {
    const dots = $('.pagination-dots .dot');
    let currentIndex = 0;
    const total = dots.length;
    const intervalTime = 5000; // 5 seconds per image

    function showImage(index) {
        // Remove active from all dots
        dots.removeClass('active');
        // Add active to current dot
        dots.eq(index).addClass('active');

        // Get the image from data-img
        let imgUrl = dots.eq(index).data('img');
        $('body').css({
            'background-image': imgUrl,
            'transition': 'background 0.5s ease-in-out'
        });
    }

    // Initial load
    showImage(currentIndex);

    // Auto-scroll every 5s
    let autoScroll = setInterval(function() {
        currentIndex = (currentIndex + 1) % total;
        showImage(currentIndex);
    }, intervalTime);

    // Manual click
    dots.click(function() {
        currentIndex = $(this).index();
        showImage(currentIndex);

        // Reset interval so it doesn't conflict
        clearInterval(autoScroll);
        autoScroll = setInterval(function() {
            currentIndex = (currentIndex + 1) % total;
            showImage(currentIndex);
        }, intervalTime);
    });
});



