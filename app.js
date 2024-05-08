$(document).ready(function(){
    $('.slider').slick(
{
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    arrow:false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
     
        {
            breakpoint: 800, // Kích thước màn hình 600px và nhỏ hơn
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

              
            }
        }
    ]
}
     
    );
  });

  $(document).ready(function(){
    $('.slider_footer').slick(
{
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: true,
    arrow:false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
     
        {
            breakpoint: 800, // Kích thước màn hình 600px và nhỏ hơn
            settings: {
                slidesToShow: 2,
              
            }
        }
    ]
    
}
     
    );
  });


  
  $(document).ready(function(){
    $('.single-list').slick(
{
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrow:false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
   
    
}
     
    );
  });
// Lấy tham chiếu đến nút dropdown và nội dung dropdown
// Lấy tham chiếu đến nút dropdown và menu chính
var mainBtn = document.getElementById("mainBtn");
var mainMenu = document.getElementById("mainMenu");

// Lấy danh sách các nút con của menu chính
var branchBtns = document.querySelectorAll(".branchBtn");

// Thêm sự kiện click cho nút dropdown chính
mainBtn.addEventListener("click", function() {
    mainMenu.classList.toggle("show");
});

// Thêm sự kiện click cho từng nút con
branchBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var target = btn.getAttribute("data-target");
        var submenu = document.getElementById(target);
        submenu.classList.toggle("show");
    });
});

// Đóng dropdown menu nếu click bên ngoài
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.branchBtn')) {
        mainMenu.classList.remove("show");
        var submenus = document.querySelectorAll(".submenu");
        submenus.forEach(function(submenu) {
            submenu.classList.remove("show");
        });
    }
});


/// cái thứ 2
var mainBtnSc = document.getElementById("mainBtnSc");
var mainMenuSc = document.getElementById("mainMenuSc");

// Lấy danh sách các nút con của menu chính
var branchBtnSc = document.querySelectorAll(".dropdownSc .branchBtnSc");

// Thêm sự kiện click cho nút dropdown chính
mainBtnSc.addEventListener("click", function() {
    mainMenuSc.classList.toggle("show");
});

// Thêm sự kiện click cho từng nút con
branchBtnSc.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var targetSc = btn.getAttribute("data-target");
        var submenuSc = document.getElementById(targetSc);
        submenuSc.classList.toggle("show");
    });
});

// Đóng dropdown menu nếu click bên ngoài
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdownSc')) {
        mainMenuSc.classList.remove("show");
        var submenus = document.querySelectorAll(".submenuSc");
        submenus.forEach(function(submenu) {
            submenu.classList.remove("show");
        });
    }
});


//hiện input
function toggleSearchInput() {
    var input = document.getElementById("searchInput");
    if (input.style.display === "none") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  }
  
  //tìm kiếm
  function toggleSearchInput() {
    var input = document.getElementById("searchInput");
    if (input.style.display === "none") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  }
  
  document.getElementById("searchInput").addEventListener("input", function() {
    var searchQuery = this.value.toLowerCase();
    var searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";
  
    if (searchQuery.length > 0) {
      // Điều này chỉ là một ví dụ giả định, bạn cần thay thế nó bằng cách lấy dữ liệu từ nguồn tìm kiếm thực tế
      var data = ["son", "eyeliner", "phấn má"]; // Dữ liệu tìm kiếm giả định
  
      data.forEach(function(item) {
        if (item.toLowerCase().includes(searchQuery)) {
          var li = document.createElement("li");
          li.textContent = item;
          searchResults.appendChild(li);
        }
      });
    }
  });
  ////
  function redirectToSelectedPage() {
    var selectedPage = document.getElementById("mySelect").value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  }
//// giá sản phẩm

