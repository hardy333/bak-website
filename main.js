const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".navbar nav");

window.addEventListener("scroll", handleScroll);

navToggler.addEventListener("click", (e) => {
    if(!nav.classList.contains("open")){
        document.body.addEventListener("click", removeNav);

    }else{
        document.body.removeEventListener("click", removeNav);
    }
    navToggler.classList.toggle("open");
    nav.classList.toggle("open");
    document.body.classList.toggle("deactive");

  
})

nav.addEventListener("click", (e) => {
    if(e.target.tagName !== "A") return;
    navToggler.classList.remove("open");
    nav.classList.remove("open");
    document.body.classList.remove("deactive");



    const targetName = e.target.innerText.toLowerCase();
    document.body.removeEventListener("click", removeNav);


})


function removeNav(e){
    if(e.target.offsetParent.tagName === "NAV" || e.target.classList.contains("nav-toggler")) return;
    navToggler.classList.remove("open");
    nav.classList.remove("open");
    document.body.classList.remove("deactive");

    document.body.removeEventListener("click", removeNav);

}

function handleScroll(){
    if(nav.classList.contains("open")){
        navToggler.classList.remove("open");
        nav.classList.remove("open");
        document.body.classList.remove("deactive");
    
        document.body.removeEventListener("click", removeNav);

    }
    if(window.pageYOffset > 100 ){
        nav.offsetParent.classList.add("scrolled");

    }else{
        nav.offsetParent.classList.remove("scrolled");

    }
    
}