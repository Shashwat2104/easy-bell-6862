var cartAr = JSON.parse(localStorage.getItem("cartProducts")) || [];


if (cartAr === 0) {
    document.querySelector("#child").value;
} else {

    displayCart(cartAr);
    updateCount(cartAr);
    caltotal(cartAr)



}

function displayCart(cartAr) {
    document.querySelector("#child").textContent = "";
    console.log(cartAr);
    cartAr.map(function (elem) {
        var pyr = localStorage.getItem("sizeList");
        var div = document.createElement("div");
        div.setAttribute("id", "cartprod");
        var image = document.createElement("img");
        image.setAttribute("src", elem.img_u2);
        image.setAttribute("alt", elem.name);

        var divp = document.createElement("div");
        divp.setAttribute("class", "clas");

        var h3 = document.createElement("h3");
        h3.textContent = elem.name;

        var p = document.createElement("p");
        p.textContent = "Brand:" + elem.brand;

        var pa = document.createElement("p");
        pa.textContent = "Width:" + pyr;



        var diva = document.createElement("div");
        diva.setAttribute("id", "rsk");

        var price = document.createElement("p");
        price.textContent = "$" + elem.price;

        var quantity = document.createElement("h2");
        quantity.textContent = "Qty";

        var span = document.createElement("span");
        span.textContent = " " + "1";



        var increase = document.createElement("button");
        increase.setAttribute("id", "btn")
        increase.textContent = "+";
        increase.onclick = function () {
            increaseval(span.textContent);
        };
        function increaseval(value) {
            var pr = parseInt(value) + 1;
            var va = pr * (elem.price);
            span.textContent = pr;
            price.textContent = "$" + va;
            var a = document.getElementById("pr").textContent;
            var last = parseInt(a) + parseInt(elem.price);
            document.getElementById("pr").textContent = last;

        }

        var decrease = document.createElement("button");
        decrease.setAttribute("id", "btn")
        decrease.textContent = "-";
        decrease.onclick = function () {
            decreaseval(span.textContent);
        };
        function decreaseval(value) {
            if (value == 1) {
                return;
            } else {
                var pr = parseInt(value) - 1;
                var va = pr * elem.price
                span.textContent = pr;
                price.textContent = "$" + va;
                var a = document.getElementById("pr").textContent;
                var last = parseInt(a) - parseInt(elem.price);
                document.getElementById("pr").textContent = last;
            }

        }


        var tree = document.createElement("div");
        tree.setAttribute("id", "pers");

        var del = document.createElement("button");
        del.setAttribute("id", "delbtn")
        del.textContent = "Remove";
        del.addEventListener("click", function () {
            delrow(elem);
        });

        quantity.append(span);
        diva.append(price, increase, quantity, decrease);
        divp.append(h3, p, pa);
        tree.append(del);

        div.append(image, divp, diva, tree);
        document.querySelector("#child").append(div);


    });

}

// console.log(cart);
function delrow(elem) {
    console.log(typeof cart);
    cartAr.splice(elem, 1);
    // console.log(p);
    localStorage.setItem("cartProducts", JSON.stringify(cartAr))
    displayCart(cartAr);
    caltotal(cartAr);
    updateCount(cartAr);
}
var pert = localStorage.getItem("cartper")
function updateCount(cartAr) {
    document.getElementById("per").textContent = cartAr.length;
    localStorage.setItem("cartper", cartAr.length);
}

var cart = localStorage.getItem("cartp")
function caltotal() {
    var carval = 0;
    for (var i = 0; i < cartAr.length; i++) {
        carval += parseInt(cartAr[i].price);

    }
    document.getElementById("pr").textContent = carval;
    localStorage.setItem("cartp", (carval));
}
document.querySelector("#poi").addEventListener("click", checkpu);
function checkpu() {
    // event.preventDefault();
    var ch = document.getElementById("promo").value;
    console.log(ch);
    if (ch == "masai30") {
        var temp = document.createElement("p");
        temp.setAttribute("class", "krp");
        temp = "Hurray!... You got 30% off";
        console.log(temp);
        document.getElementById("Offer").append(temp);
        var t = parseInt(document.getElementById("pr").textContent);
        var change = (t * 3) / 10;
        document.getElementById("pr").textContent = t - change;
    }
}
var username = localStorage.getItem("name1");
if (username) {
    document.getElementById("wxs").textContent = username;
} else {
    document.getElementById("wxs").textContent = "Sign In/Join now";
}
let home = document.getElementById("kranti")
home.addEventListener("click", () => {
    alert("Item successfully Purchased")
})