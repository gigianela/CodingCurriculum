// mobile nav fxn
document.querySelector(".mobile_menu").addEventListener("click",
    function () {
        var x = document.getElementById("mobile_Nav_List");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
);





