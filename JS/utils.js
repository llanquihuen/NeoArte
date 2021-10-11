    // ---- MENU STICKY
    let menu= document.getElementById("menu")
    let logoG = document.getElementById("logoG")
    window.addEventListener("scroll", () => {
        if (window.scrollY<110) {
            menu.classList.remove("stick")
            menu.classList.add("menu")
            logoG.classList.remove("disp_none")


        }else{
            menu.classList.add("stick")
            menu.classList.remove("menu")
            logoG.classList.add("disp_none")

        }
    });

    // ------ DETECTAR CELULAR
    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    // ------ Change images class fotos-cha => (sm to xs)------
    const images = document.getElementsByClassName("fotos-cha");

    if(detectMob()){
        for (let i = 0; i < images.length; i++) {
            images[i].src = (images[i].src.replace("sm","xs"))
        }
    }

    // window.addEventListener("resize",()=>{
    //     if (window.innerWidth < 500){
    //         for (let i = 0; i < images.length; i++) {
    //             images[i].src = (images[i].src.replace("sm","xs"))
    //        }
    //     }else{
    //         for (let i = 0; i < images.length; i++) {
    //             images[i].src = (images[i].src.replace("xs","sm"))
    //         }
    //     }
    // })

