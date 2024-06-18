function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 
    // Get the modal 
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





    // Get the modal 1
    var modal1 = document.getElementById("modal1");

    // Get the button that opens the modal
    var btn1 = document.getElementById("openModalBtn1");
    
    // Get the <span> element that closes the modal
    var span1 = document.getElementsByClassName("close1")[0];
    
    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
        modal1.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
        modal1.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event1) {
        if (event1.target == modal) {
            modal1.style.display = "none";
        }
    }





        // Get the modal  2
        var modal2 = document.getElementById("modal2");

        // Get the button that opens the modal
        var btn2 = document.getElementById("openModalBtn2");
        
        // Get the <span> element that closes the modal
        var span2 = document.getElementsByClassName("close2")[0];
        
        // When the user clicks on the button, open the modal
        btn2.onclick = function() {
            modal2.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span2.onclick = function() {
            modal2.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event2) {
            if (event2.target == modal2) {
                modal2.style.display = "none";
            }
        }




        

        // Get the modal  3
        var modal3 = document.getElementById("modal3");

        // Get the button that opens the modal
        var btn3 = document.getElementById("openModalBtn3");
        
        // Get the <span> element that closes the modal
        var span3 = document.getElementsByClassName("close3")[0];
        
        // When the user clicks on the button, open the modal
        btn3.onclick = function() {
            modal3.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span3.onclick = function() {
            modal3.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event3) {
            if (event3.target == modal3) {
                modal3.style.display = "none";
            }
        }
 

docReady(function() {
    console.log('Pagina geladen');
let shoes = Array.from(document.querySelectorAll(".shoes"))
let sweater = Array.from(document.querySelectorAll(".sweater"))
let pants = Array.from(document.querySelectorAll(".pants"))



let sweaterfilter = document.getElementById("checkbox-Sweater")
let shoesfilter = document.getElementById("checkbox-Shoes")
let pantsfilter = document.getElementById("checkbox-Pants")

sweaterfilter.onchange = function () {
    if (sweaterfilter.checked === true) {
        for (let i = 0; i < sweater.length; i++) {
            if (sweater[i].dataset.category === "Sweater") {
                sweater[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < sweater.length; i++) {
            if (sweater[i].dataset.category === "Sweater") {
                sweater[i].style.display = "none";
            }
        }
    }

}


// pants
pantsfilter.onchange = function () {
    if (pantsfilter.checked === true) {
        for (let i = 0; i < pants.length; i++) {
            if (pants[i].dataset.category === "Pants") {
                pants[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < pants.length; i++) {
            if (pants[i].dataset.category === "Pants") {
                pants[i].style.display = "none";
            }
        }
    }

}

//filter shoes

shoesfilter.onchange = function () {
    if (shoesfilter.checked === true) {
        for (let i = 0; i < shoes.length; i++) {
            if (shoes[i].dataset.category === "Shoes") {
                shoes[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < shoes.length; i++) {
            if (shoes[i].dataset.category === "Shoes") {
                shoes[i].style.display = "none";
            }
        }
    }

}
});


let shoppingmodal = document.getElementById("js--shoppingmodal")
let addtocartbuttons  = document.getElementsByClassName("add__button")
let cartmsgvalue  = document.getElementById("cartNumber")
let cartmsg= 0 
modalisopen = false

for (let i = 0; i < addtocartbuttons.length; i++) {
    addtocartbuttons[i].onclick = function () {
        cartmsg += 1;
        switch (addtocartbuttons[i].dataset.product) {
            case "tas":
                tas += 1
                break;
            case "planeet":
                planeet += 1
                break;
            case "maan":
                maan += 1
                break;

        }
        if (modalisopen === false) {
            shoppingmodal.style.display = "flex";
            modalisopen = true
            setTimeout(function () {
                shoppingmodal.style.display = "none";
                modalisopen = false
            }, 2000)
        }
    }
}


// start sheart bar function

const games = document.getElementsByClassName("collectionsimg shoes")
searchbar.onkeyup = function(event){
    if(event.keyCode === 13){
        let searchTerm = searchbar.value.toUpperCase().split(" ").join("");

        for(let i = 0; i < games.length ; i++){
           if(games[i].dataset.title.search(searchTerm) === -1){
            games[i].style.opacity = 0.3;
           }
           else{
            games[i].style.opacity = 1
           }
        }
    }
}
