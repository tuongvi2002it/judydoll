d/// khai báo api
var courseAPI = "https://6641a9743d66a67b343484f0.mockapi.io/api/judydool/products";

/// Hàm gọi api
function getCourses (callback){
    fetch(courseAPI)  //Gets
    .then((Response) => {
        return Response.json();
    })
    .then(callback)
}

function RenderCourses(courses){
    var htmls = courses.map((currentValue) => {
        return `
        <div class="products_content d-flex">
        <div class="products_content-left d-flex w-50 p-5">
            <div class="product_slider d-flex flex-column w-100">



                <div class="slider-for d-flex w-100 ">
                <img src="${currentValue.img}">
                </div>
                <div class="slider-nav d-flex  w-100">
                <img src="${currentValue.img}">
            </div>
            <div class="products_content-right w-50 p-5">
                    <div class="name_review d-flex flex-column">
                        <h4 class="name_products ">${currentValue.name_products}</h4>
                        <div class="star-rating">
                            <input type="radio" id="star5" name="rating" value="5">
                            <label for="star5"></label>
                            <input type="radio" id="star4" name="rating" value="4">
                            <label for="star4"></label>
                            <input type="radio" id="star3" name="rating" value="3">
                            <label for="star3"></label>
                            <input type="radio" id="star2" name="rating" value="2">
                            <label for="star2"></label>
                            <input type="radio" id="star1" name="rating" value="1">
                            <label for="star1"></label>
                        </div>
                    </div> 
                    <div class="sold_out d-flex">
                    <svg viewBox="0 0 384 512" class="icon icon-fire" id="icon-fire">
                        <path
                            d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z">
                        </path>
                    </svg>
                    <span>3 sold in last 17 hours</span>
                </div>
                <p class="price_products ">
                   $ ${currentValue.price_products}
                </p>
                <div class="pro_color d-flex w-75 justify-content-around">
                <a class="color_select" data-slide="8">
                   ${currentValue.color_select}
                </a>
                <a class="color_select" data-slide="9">
                ${currentValue.color_select}
                </a>
                <a class="color_select" data-slide="10">
                ${currentValue.color_select}
                </a>
                <a class="color_select" data-slide="11">
                ${currentValue.color_select}
                </a>
            </div>
            <div class="list_quaty  d-flex">
            <div class="quantity">
                <button class="minus-btn" onclick="decreaseQuantity()">-</button>
                <input type="text" class="quantity-input" value="1">
                <button class="plus-btn" onclick="increaseQuantity()">+</button>
            </div>
            <button class="add_cart">ADD TO CART</button>
            <i class="fa-solid fa-heart" id="colorIcon"></i>
            <a href="">
                <i class="fa-solid fa-share-nodes"></i>
            </a>
        </div>

        <button class="buy_payall w-100 mt-4">
            <span>Buy With</span>
            <svg viewBox="0 -140 780 780" enable-background="new 0 0 780 500" version="1.1"
                xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="m168.38 169.35c-8.399-5.774-19.359-8.668-32.88-8.668h-52.346c-4.145 0-6.435 2.073-6.87 6.215l-21.264 133.48c-0.221 1.311 0.107 2.51 0.981 3.6 0.869 1.092 1.962 1.635 3.271 1.635h24.864c4.361 0 6.758-2.068 7.198-6.215l5.888-35.986c0.215-1.744 0.982-3.162 2.291-4.254 1.308-1.09 2.944-1.803 4.907-2.129 1.963-0.324 3.814-0.488 5.562-0.488 1.743 0 3.814 0.111 6.217 0.328 2.397 0.217 3.925 0.324 4.58 0.324 18.756 0 33.478-5.285 44.167-15.867 10.684-10.576 16.032-25.242 16.032-44.004 0-12.868-4.203-22.191-12.598-27.974zm-26.989 40.08c-1.094 7.635-3.926 12.649-8.506 15.049-4.581 2.403-11.124 3.599-19.629 3.599l-10.797 0.326 5.563-35.007c0.434-2.397 1.851-3.597 4.252-3.597h6.218c8.72 0 15.049 1.257 18.975 3.761 3.924 2.51 5.233 7.801 3.924 15.869z"
                        fill="#003087"></path>
                    <path
                        d="m720.79 160.68h-24.207c-2.406 0-3.822 1.2-4.254 3.601l-21.266 136.1-0.328 0.654c0 1.096 0.436 2.127 1.311 3.109 0.867 0.98 1.963 1.471 3.27 1.471h21.596c4.137 0 6.428-2.068 6.871-6.215l21.264-133.81v-0.325c-1e-3 -3.055-1.423-4.581-4.257-4.581z"
                        fill="#009CDE"></path>
                    <path
                        d="m428.31 213.36c0-1.088-0.438-2.126-1.305-3.105-0.875-0.981-1.857-1.475-2.945-1.475h-25.191c-2.404 0-4.367 1.096-5.891 3.271l-34.678 51.039-14.395-49.074c-1.096-3.487-3.492-5.236-7.197-5.236h-24.541c-1.093 0-2.074 0.492-2.941 1.475-0.875 0.979-1.309 2.019-1.309 3.105 0 0.439 2.127 6.871 6.379 19.303 4.252 12.436 8.832 25.85 13.74 40.246 4.908 14.393 7.469 22.031 7.688 22.896-17.886 24.432-26.825 37.518-26.825 39.26 0 2.838 1.415 4.254 4.253 4.254h25.191c2.398 0 4.36-1.088 5.89-3.27l83.427-120.4c0.433-0.432 0.65-1.192 0.65-2.29z"
                        fill="#003087"></path>
                    <path
                        d="m662.89 208.78h-24.865c-3.057 0-4.904 3.6-5.559 10.799-5.678-8.722-16.031-13.089-31.084-13.089-15.703 0-29.064 5.89-40.076 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.762 23.121 11.285 30.752 7.525 7.639 17.611 11.451 30.266 11.451 6.324 0 12.758-1.311 19.301-3.926 6.543-2.617 11.664-6.105 15.379-10.469 0 0.219-0.223 1.197-0.654 2.941-0.441 1.748-0.656 3.061-0.656 3.926 0 3.494 1.414 5.234 4.254 5.234h22.576c4.139 0 6.541-2.068 7.193-6.215l13.416-85.39c0.215-1.31-0.111-2.507-0.982-3.599-0.877-1.088-1.965-1.635-3.273-1.635zm-42.694 64.454c-5.562 5.453-12.27 8.178-20.121 8.178-6.328 0-11.449-1.742-15.377-5.234-3.928-3.482-5.891-8.281-5.891-14.395 0-8.064 2.727-14.886 8.182-20.447 5.445-5.562 12.213-8.342 20.283-8.342 6.102 0 11.174 1.799 15.213 5.396 4.031 3.6 6.055 8.562 6.055 14.889-2e-3 7.851-2.783 14.505-8.344 19.955z"
                        fill="#009CDE"></path>
                    <path
                        d="m291.23 208.78h-24.865c-3.058 0-4.908 3.6-5.563 10.799-5.889-8.722-16.25-13.089-31.081-13.089-15.704 0-29.065 5.89-40.078 17.668-11.016 11.778-16.521 25.632-16.521 41.552 0 12.871 3.763 23.121 11.288 30.752 7.525 7.639 17.61 11.451 30.262 11.451 6.104 0 12.433-1.311 18.975-3.926 6.543-2.617 11.778-6.105 15.704-10.469-0.875 2.615-1.309 4.906-1.309 6.867 0 3.494 1.417 5.234 4.253 5.234h22.574c4.141 0 6.543-2.068 7.198-6.215l13.413-85.39c0.215-1.31-0.111-2.507-0.981-3.599-0.873-1.088-1.962-1.635-3.269-1.635zm-42.695 64.616c-5.563 5.35-12.382 8.016-20.447 8.016-6.329 0-11.4-1.742-15.214-5.234-3.819-3.482-5.726-8.281-5.726-14.395 0-8.064 2.725-14.886 8.18-20.447 5.449-5.562 12.211-8.343 20.284-8.343 6.104 0 11.175 1.8 15.214 5.397 4.032 3.6 6.052 8.562 6.052 14.889-1e-3 8.07-2.781 14.779-8.343 20.117z"
                        fill="#003087"></path>
                    <path
                        d="m540.04 169.35c-8.398-5.774-19.355-8.668-32.879-8.668h-52.02c-4.363 0-6.764 2.073-7.197 6.215l-21.266 133.48c-0.221 1.311 0.107 2.51 0.982 3.6 0.865 1.092 1.961 1.635 3.27 1.635h26.826c2.617 0 4.361-1.416 5.236-4.252l5.889-37.949c0.217-1.744 0.98-3.162 2.291-4.254 1.309-1.09 2.943-1.803 4.908-2.129 1.961-0.324 3.812-0.488 5.561-0.488 1.744 0 3.814 0.111 6.215 0.328 2.398 0.217 3.93 0.324 4.58 0.324 18.76 0 33.479-5.285 44.168-15.867 10.688-10.576 16.031-25.242 16.031-44.004 1e-3 -12.868-4.2-22.192-12.595-27.974zm-33.533 53.819c-4.799 3.271-11.998 4.906-21.592 4.906l-10.471 0.328 5.562-35.008c0.432-2.396 1.85-3.598 4.252-3.598h5.887c4.799 0 8.615 0.219 11.455 0.654 2.83 0.438 5.561 1.799 8.178 4.088 2.619 2.291 3.926 5.619 3.926 9.979 0 9.164-2.402 15.377-7.197 18.651z"
                        fill="#009CDE"></path>
                </g>
            </svg>
        </button>
        <a href="" class="payment ">More payment options</a>

        <div class="ship_cod d-flex flex-column mt-5">
            <div class="ship_cod-items d-flex flex-column">
                <a href="" class="title_ship d-flex">
                    <i class="fa-solid fa-truck-fast"></i>
                    <span>Fast Shipping</span>
                    <i class="fa-solid fa-circle-info"></i>
                </a>
                <div class="content_ship d-flex flex-column">
                    <span>Free standard shipping on orders over $49</span>
                    <span>Postage varies from region to region.</span>
                </div>
            </div>
            <div class="ship_cod-items d-flex flex-column">
                <a href="" class="title_ship d-flex">
                    <i class="fa-solid fa-shield-halved"></i>
                    <span>Fast Shipping</span>
                    <i class="fa-solid fa-circle-info"></i>
                </a>
                <div class="content_ship d-flex flex-column">
                    <span>Free standard shipping on orders over $49</span>
                    <span>Postage varies from region to region.</span>
                </div>
            </div>
        </div>

     

       

    </div>
    

</div>

        `
    });
    main.innerHTML = htmls.join("");
}

