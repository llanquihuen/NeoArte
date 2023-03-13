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



    //------ Formulario de contacto
    const form = document.getElementById("contact-form");
    const botonSubmit = document.getElementById("button_submit");

    let tamanio = '1.5rem'
    const x = window.matchMedia("(max-width: 560px)")
    if (x.matches) {
        tamanio ='.9rem'
    }else{
        tamanio = '1.5rem'
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        botonSubmit.innerHTML = "Enviando...";
        botonSubmit.disabled = true;
        botonSubmit.classList.add("loading");
        const formData = new FormData(form);
        console.log(Object.fromEntries(formData.entries()));
        fetch('https://www.neoarte.cl/enviomail/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        })
            .then(response => {
                if (response.ok) {
                    botonSubmit.innerHTML = "Enviar";
                    botonSubmit.disabled = false;
                    botonSubmit.classList.remove("loading");
                    Toastify({
                        text: 'Mensaje enviado correctamente',
                        duration: 3000,
                        gravity: 'bottom',
                        position: 'right',
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                            fontWeight: '600',
                            fontSize: tamanio,
                        },
                    }).showToast();
                    form.reset();
                } else {
                    console.error('Error al enviar el mensaje');
                    botonSubmit.innerHTML = "Enviar";
                    botonSubmit.disabled = false;
                    botonSubmit.classList.remove("loading");
                    Toastify({
                        text: 'Error al enviar el mensaje',
                        duration: 3000,
                        gravity: 'bottom',
                        position: 'right',
                        style: {
                            background: "linear-gradient(to right, #ca0018, #4d220b)",
                            fontWeight: '600',
                            fontSize: tamanio,
                        },
                    }).showToast();
                    form.reset();
                    }

            })
            .catch(error => console.error(error));
    })

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

