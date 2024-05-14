$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // arrows: true,
    infinite: true,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });


  // đánh giá
  let ratingResult = document.getElementById('ratingResult');
  let ratingValue = document.getElementById('ratingValue');
  
  // Lắng nghe sự kiện thay đổi của các radio button
  document.querySelectorAll('.star-rating input[type="radio"]').forEach(input => {
      input.addEventListener('change', function() {
          ratingValue.textContent = this.value;
          ratingResult.style.display = 'block';
      });
  });
  
//   let chooseImage = document.querySelector('.chooseimg');
//   // Đặt sự kiện click cho mỗi slider
// chooseImage.forEach(chooseimg => {
//     chooseimg.addEventListener('click', function() {
//         // Loại bỏ lớp active khỏi tất cả các chooseimg
//         chooseImage.forEach(chooseimg => {
//             chooseimg.classList.remove('active');
//         });

//         // Thêm lớp active cho slider hiện tại
//         this.classList.add('active');
//     });
// });
//BUTTON CHỌN MÀU
$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });
  // Lắng nghe sự kiện click trên thẻ a
// Lắng nghe sự kiện click trên phần tử có class color_select
document.querySelectorAll('.color_select').forEach(element => {
    element.addEventListener('click', function() {
        // Loại bỏ class 'click' từ tất cả các phần tử khác
        document.querySelectorAll('.color_select').forEach(otherElement => {
            otherElement.classList.remove('click');
        });
        // Thêm class 'click' vào phần tử được nhấn
        this.classList.add('click');
    });
});
////
function increaseQuantity() {
  var input = document.querySelector('.quantity-input');
  var value = parseInt(input.value);
  input.value = value + 1;
}

function decreaseQuantity() {
  var input = document.querySelector('.quantity-input');
  var value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
};
///icon tim 
var colorIcon = document.getElementById("colorIcon");
var colorClick = "indianred";
colorIcon.addEventListener('click',function(){
  colorIcon.style.color = colorClick;
});
//link tramg details

// var courseAPI = "https://6641a9743d66a67b343484f0.mockapi.io/api/judydool/products";
// var main = document.getElementById("main_content");
// var $ = document.querySelector.bind(document);

// compomentDidMount(){ 
//   fetch("https://6641a9743d66a67b343484f0.mockapi.io/api/judydool/products,1")
//   .then(res => res.json())
//   .then (json => {
//     this.setState ({
//       isLoaded : true;
//       infomation : json,
//     })
//   })}
