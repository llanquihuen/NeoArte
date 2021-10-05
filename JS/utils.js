    // ---- MENU STICKY
    let menu= document.getElementById("menu")
    let logoG = document.getElementById("logoG")
    window.addEventListener("scroll", (e) => {
        if (window.scrollY<105) {
            menu.classList.remove("stick")
            menu.classList.add("menu")
            logoG.classList.remove("disp_none")


        }else{
            menu.classList.add("stick")
            menu.classList.remove("menu")
            logoG.classList.add("disp_none")

        }
    });