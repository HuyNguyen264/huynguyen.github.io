$('#cam-nhan').owlCarousel({
loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
dots:true
})

$('#gallery').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:true,
	dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

