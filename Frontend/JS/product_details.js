var prod_details = JSON.parse(localStorage.getItem("ProductDetails")) || [];
displyDetails();

function displyDetails() {
    prod_details.map(function (elem) {
        var div1 = document.createElement("div");

        var img1 = document.createElement("img");
        img1.setAttribute("src", elem.img_u1);
        img1.setAttribute("alt", elem.name);



        var div2 = document.createElement("div");

        var img2 = document.createElement("img");
        img2.setAttribute("src", elem.img_u2);
        img2.setAttribute("alt", elem.name);



        var div3 = document.createElement("div");

        var img3 = document.createElement("img");
        img3.setAttribute("src", elem.img_u3);
        img3.setAttribute("alt", elem.name);



        var div4 = document.createElement("div");

        var img4 = document.createElement("img");
        img4.setAttribute("src", elem.img_u4);
        img4.setAttribute("alt", elem.name);



        var div5 = document.createElement("div");

        var img5 = document.createElement("img");
        img5.setAttribute("src", elem.img_u5);
        img5.setAttribute("alt", elem.name);


        div1.append(img1);
        div2.append(img2);
        div3.append(img3);
        div4.append(img4);
        div5.append(img5);

        document.getElementById("prod_img").append(div1, div2, div3, div4, div5);


        var h2 = document.createElement("h2");
        h2.textContent = elem.name;


        var h5 = document.createElement("h5");
        h5.textContent = "Shop all " + elem.brand;



        // pricebox

        var TpriceBox = document.createElement("div");
        TpriceBox.setAttribute("class", "TpriceBox");

        var priceBox = document.createElement("div");
        priceBox.setAttribute("class", "priceBox");

        var pric = document.createElement("h3");
        pric.textContent = "$" + elem.price;

        var mrp = document.createElement("h3");
        mrp.textContent = "$" + elem.MRP;

        priceBox.append(pric, mrp);


        // payment details
        var pay = document.createElement("div");
        pay.setAttribute("class", "pay");

        var p = document.createElement("p");
        p.textContent = "or 3% off with";

        var payimg = document.createElement("div");
        payimg.setAttribute("class", "payimg");

        var payi = document.createElement("img");
        payi.setAttribute("src", "https://www.bing.com/th?id=OIP.Vs62kDq0ibOSf4SeMr9nIwHaC0&w=283&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
        img4.setAttribute("alt", "VISA");

        payimg.append(payi);
        pay.append(p, payimg);


        TpriceBox.append(priceBox, pay)




        // rating

        var rate = document.createElement("div");
        rate.setAttribute("class", "rate");

        var star = document.createElement("h3");
        star.textContent = "Rating : " + elem.rating + ".0";

        var ri = document.createElement("img");
        ri.setAttribute("src", elem.rate_img);
        ri.setAttribute("alt", elem.rating);

        var p1 = document.createElement("p");
        p1.textContent = "Coupon Excluded";


        rate.append(star, ri, p1);


        // size
        var sizeBo = document.createElement("div");
        sizeBo.setAttribute("class", "sizeBo");



        var size = document.createElement("div");
        size.setAttribute("class", "size");

        var sizeT = document.createElement("h3");
        sizeT.textContent = "Size:";



        var btna = document.createElement("button");
        btna.textContent = "3.0";
        btna.addEventListener("click", function () {
            like("3.0");
        });

        var btnb = document.createElement("button");
        btnb.textContent = "4.0";
        btnb.addEventListener("click", function () {
            like("4.0");
        });
        var btnc = document.createElement("button");
        btnc.textContent = "4.5";
        btnc.addEventListener("click", function () {
            like("4.5");
        });

        var btnd = document.createElement("button");
        btnd.textContent = "5.0";
        btnd.addEventListener("click", function () {
            like("5.0");
        });
        var btne = document.createElement("button");
        btne.textContent = "5.5";
        btne.addEventListener("click", function () {
            like("5.5");
        });

        var btnf = document.createElement("button");
        btnf.textContent = "6.0";
        btnf.addEventListener("click", function () {
            like("6.0");
        });
        var btng = document.createElement("button");
        btng.textContent = "6.5";
        btng.addEventListener("click", function () {
            like("6.5");
        });




        var btn1 = document.createElement("button");
        btn1.textContent = "7.0";
        btn1.addEventListener("click", function () {
            like("7.0");
        });

        var btn2 = document.createElement("button");
        btn2.textContent = "7.5";
        btn2.addEventListener("click", function () {
            like("7.5");
        });

        var btn3 = document.createElement("button");
        btn3.textContent = "8.0";
        btn3.addEventListener("click", function () {
            like("8.0");
        });

        var btn4 = document.createElement("button");
        btn4.textContent = "8.5";
        btn4.addEventListener("click", function () {
            like("8.5");
        });

        var btn5 = document.createElement("button");
        btn5.textContent = "9.0";
        btn5.addEventListener("click", function () {
            like("9.0");
        });

        var btn6 = document.createElement("button");
        btn6.textContent = "9.5";
        btn6.addEventListener("click", function () {
            like("9.5");
        });

        var btn7 = document.createElement("button");
        btn7.textContent = "10";
        btn7.addEventListener("click", function () {
            like("10");
        });

        var btn8 = document.createElement("button");
        btn8.textContent = "10.5";
        btn8.addEventListener("click", function () {
            like("10.5");
        });

        var btn9 = document.createElement("button");
        btn9.textContent = "11";
        btn9.addEventListener("click", function () {
            like("11");
        });

        var btn10 = document.createElement("button");
        btn10.textContent = "12";
        btn10.addEventListener("click", function () {
            like("12");
        });


        size.append(btna, btnb, btnc, btnd, btne, btnf, btng, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10);


        sizeBo.append(sizeT, size);


        //  width

        var width = document.createElement("div");
        width.setAttribute("class", "width");


        var W = document.createElement("h3");
        W.textContent = "Width:";


        var btnW = document.createElement("button");
        btnW.textContent = "Medium";
        btnW.setAttribute("class", "btnW");


        width.append(W, btnW);



        //  adreess


        var Oinp = document.createElement("div");
        Oinp.setAttribute("class", "Oinp");



        var inp = document.createElement("div");
        inp.setAttribute("class", "inp");

        var ip = document.createElement("input");
        ip.setAttribute("type", "radio");

        // var inpD=document.createElement("div");

        var inpT = document.createElement("h3");
        inpT.textContent = "Ship to Adress";

        var par = document.createElement("p");
        par.textContent = "Receive in 4-7 business days with standard";
        par.setAttribute("class", "par");


        inp.append(ip, inpT);


        var inpS = document.createElement("div");
        inpS.setAttribute("class", "inpS");

        var ipS = document.createElement("input");
        ipS.setAttribute("type", "radio");

        // var inpD=document.createElement("div");

        var inpTS = document.createElement("h3");
        inpTS.textContent = "Store Pickup - FREE";

        var parS = document.createElement("p");
        parS.textContent = "Typically ready within 1 hour, never track a package again! Plus, Rewards members earn a bonus reward after picking up your order.";
        parS.setAttribute("class", "parS");

        inpS.append(ipS, inpTS);

        Oinp.append(inp, par, inpS, parS)




        var btns = document.createElement("div");
        btns.setAttribute("class", "btns");

        var btn = document.createElement("button");
        btn.textContent = "Add to Cart";
        btn.setAttribute("class", "btnn");

        btn.addEventListener("click", function () {
            addToCart(elem);
        });



        var wish = document.createElement("button");
        wish.textContent = "Add to Wishlist";
        wish.setAttribute("class", "btnn1");

        wish.addEventListener("click", function () {
            addToWhish(elem);
        });

        btns.append(btn, wish);






        document.getElementById("prod_det").append(h2, h5, TpriceBox, rate, sizeBo, width, Oinp, btns);

        document.getElementById("name").textContent = elem.name;
        document.getElementById("detail").textContent = elem.Details;

    });

    //     var cartArr=JSON.parse(localStorage.getItem("Products"))|| [];
    //  function addToCart(elem)
    // {
    //     cartArr.push(elem);
    //     console.log(cartArr);
    //     localStorage.setItem("Products",JSON.stringify(cartArr));

    // }
    var a = "";
    function like(b) {
        a = b;
        localStorage.setItem("sizeList", a);

    }

    var cartArr = JSON.parse(localStorage.getItem("cartProducts")) || [];
    function addToCart(elem) {
        cartArr.push(elem);
        console.log(cartArr);
        window.location.assign("./cart.html");
        localStorage.setItem("cartProducts", JSON.stringify(cartArr));
    }

    var whishArr = JSON.parse(localStorage.getItem("whishProducts")) || [];
    function addToWhish(elem) {

        whishArr.push(elem);
        console.log(whishArr);
        window.location.assign("./wishlist.html");
        localStorage.setItem("whishProducts", JSON.stringify(whishArr));
    }
}




var shoe = [
    {
        img_u1: "https://www.famousfootwear.com/blob/product-images/20000/96/06/9/96069_right_feed1000.jpg",
        img_u2: "https://www.famousfootwear.com/blob/product-images/20000/96/06/9/96069_pair_feed1000.jpg",
        img_u3: "https://www.famousfootwear.com/blob/product-images/20000/96/06/9/96069_left_feed1000.jpg",
        img_u4: "https://www.famousfootwear.com/blob/product-images/20000/96/06/9/96069_top_feed1000.jpg",
        img_u5: "https://www.famousfootwear.com/blob/product-images/20000/96/06/9/96069_back_feed1000.jpg",
        Details: "Leather upper in a high-top lifestyle sneaker style",
        MRP: "79",
        type: "Sneaker",
        color: "grey",
        brand: "Nike",
        name: "Men's Court Royale 2 High Top Sneaker",
        price: "70",
        rate_img: "5.png",
        rating: "5",

    },
    {
        img_u1: "https://www.famousfootwear.com/blob/product-images/20000/92/74/5/92745_right_feed1000.jpg",
        img_u2: "https://www.famousfootwear.com/blob/product-images/20000/92/74/5/92745_pair_feed1000.jpg",
        img_u3: "https://www.famousfootwear.com/blob/product-images/20000/92/74/5/92745_left_feed1000.jpg",
        img_u4: "https://www.famousfootwear.com/blob/product-images/20000/92/74/5/92745_top_feed1000.jpg",
        img_u5: "https://www.famousfootwear.com/blob/product-images/20000/92/74/5/92745_back_feed1000.jpg",
        Details: "Leather upper in a high-top lifestyle sneaker style",
        MRP: "89",
        type: "Sneaker",
        brand: "Nike",
        color: "white",
        name: "Men's Court Royale 2 High Top Sneaker",
        price: "85",
        rate_img: "0.png",
        rating: "0",
    },
    {
        img_u1: "https://www.famousfootwear.com/blob/product-images/20000/38/32/6/38326_right_feed1000.jpg",
        img_u2: "https://www.famousfootwear.com/blob/product-images/20000/38/32/6/38326_pair_feed1000.jpg",
        img_u3: "https://www.famousfootwear.com/blob/product-images/20000/38/32/6/38326_left_feed1000.jpg",
        img_u4: "https://www.famousfootwear.com/blob/product-images/20000/38/32/6/38326_top_feed1000.jpg",
        img_u5: "https://www.famousfootwear.com/blob/product-images/20000/38/32/6/38326_back_feed1000.jpg",
        Details: "Flat wide base gives you enhanced stability",
        MRP: "99",
        type: "Sneaker",
        color: "Red",
        brand: "Nike",
        name: "Men's Air Max Alpha Trainer 5 Sneaker",
        price: "90",
        rate_img: "5.png",
        rating: "5",
    },
    {
        img_u1: "https://www.famousfootwear.com/blob/product-images/20000/99/05/5/99055_right_feed1000.jpg",
        img_u2: "https://www.famousfootwear.com/blob/product-images/20000/99/05/5/99055_pair_feed1000.jpg",
        img_u3: "https://www.famousfootwear.com/blob/product-images/20000/99/05/5/99055_left_feed1000.jpg",
        img_u4: "https://www.famousfootwear.com/blob/product-images/20000/99/05/5/99055_top_feed1000.jpg",
        img_u5: "https://www.famousfootwear.com/blob/product-images/20000/99/05/5/99055_back_feed1000.jpg",
        Details: "Mesh and synthetic upper in a fashion sneaker style with a round toe",
        MRP: "100.9",
        type: "Sneaker",
        color: "Black",
        brand: "Adidas",
        name: "Men's Kaptir 2.0 Magic Sneaker ",
        price: "89.99",
        rate_img: "4.png",
        rating: "4",
    },
    {
        img_u1: "https://www.famousfootwear.com/blob/product-images/20000/38/45/8/38458_right_feed1000.jpg",
        img_u2: "https://www.famousfootwear.com/blob/product-images/20000/38/45/8/38458_pair_feed1000.jpg",
        img_u3: "https://www.famousfootwear.com/blob/product-images/20000/38/45/8/38458_left_feed1000.jpg",
        img_u4: "https://www.famousfootwear.com/blob/product-images/20000/38/45/8/38458_top_feed1000.jpg",
        img_u5: "https://www.famousfootwear.com/blob/product-images/20000/38/45/8/38458_back_feed1000.jpg",
        Details: "Foam midsole with a Max Air unit at the heel",
        MRP: "100.99",
        type: "Sneaker",
        color: "White",
        brand: "Nike",
        name: "Men's Air Max Alpha Trainer 5 Sneaker",
        price: "89.99",
        rate_img: "5.png",
        rating: "5",
    },
    {
        img_u1: "https://www.famousfootwear.com/blob/product-images/20000/98/15/6/98156_right_feed1000.jpg",
        img_u2: "https://www.famousfootwear.com/blob/product-images/20000/98/15/6/98156_pair_feed1000.jpg",
        img_u3: "https://www.famousfootwear.com/blob/product-images/20000/98/15/6/98156_left_feed1000.jpg",
        img_u4: "https://www.famousfootwear.com/blob/product-images/20000/98/15/6/98156_top_feed1000.jpg",
        img_u5: "https://www.famousfootwear.com/blob/product-images/20000/98/15/6/98156_back_feed1000.jpg",
        Details: "Synthetic leather upper in a mid-top basketball inspired sneaker with a round toe",
        MRP: "159",
        type: "Sneaker",
        color: "White",
        brand: "Adidas",
        name: "Men's Hoops 3.0 Mid Magic Sneaker",
        price: "129",
        rate_img: "5.png",
        rating: "5",
    }
]

displayProd(shoe);


function displayProd(shoe) {
    shoe.map(function (elem) {
        var mast = document.createElement("div");
        mast.setAttribute("class", "mast");

        mast.addEventListener("click", function () {
            productDetails(elem);
        });

        // wishlist

        var i = document.createElement("h3");
        i.innerHTML = "<i class='fa-sharp fa-regular fa-heart'></i>";
        i.setAttribute("class", "i");
        i.addEventListener("click", function () {
            addToWhish(elem);
        });


        //    img section

        var outer = document.createElement("div");
        outer.setAttribute("class", "outer");


        var img1 = document.createElement("img");

        img1.setAttribute("src", elem.img_u1);
        img1.setAttribute("alt", elem.name);


        var inner = document.createElement("div");
        inner.setAttribute("class", "inner");


        var img2 = document.createElement("img");

        img2.setAttribute("src", elem.img_u2);
        img2.setAttribute("alt", elem.name);

        //  name

        var para = document.createElement("div");
        para.setAttribute("class", "para");


        var h4 = document.createElement("h4");
        h4.textContent = elem.brand;


        var p1 = document.createElement("p");
        p1.textContent = elem.name;

        //    prices box

        var box = document.createElement("div");
        box.setAttribute("class", "box1");

        var p2 = document.createElement("p");
        p2.textContent = "$" + elem.price;


        var p7 = document.createElement("p");
        p7.textContent = "$" + elem.MRP;


        // rating

        var imgR = document.createElement("img");

        imgR.setAttribute("src", elem.rate_img);
        imgR.setAttribute("alt", elem.rating);


        inner.append(img2);

        box.append(p2, p7);

        para.append(h4, p1, box, imgR);

        outer.append(img1, inner);

        mast.append(i, outer, para);

        document.querySelector("#product").append(mast);

    });

    var DetailsArr = [];
    function productDetails(elem) {
        DetailsArr.push(elem);
        window.location.assign("./pruduct_details.html");
        localStorage.setItem("ProductDetails", JSON.stringify(DetailsArr));
    }



}