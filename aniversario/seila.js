  const botao = document.getElementById("botao");
        const parabens = document.getElementById("parabens");

        botao.addEventListener("click", function() {

          
            parabens.classList.add("mostrar");

            botao.style.display = "none";

            
            criarFogos();

        });


        function criarFogos() {

            for (let i = 0; i < 50; i++) {

                const fogo = document.createElement("div");

                fogo.classList.add("fogo");

                
                fogo.style.left = "50%";
                fogo.style.top = "50%";

           
                const x = (Math.random() - 0.5) * 600;
                const y = (Math.random() - 0.5) * 600;

                fogo.style.setProperty("--x", x + "px");
                fogo.style.setProperty("--y", y + "px");

                
                fogo.style.background =
                    "hsl(" + Math.random() * 360 + ", 100%, 50%)";

                document.body.appendChild(fogo);

               
                setTimeout(function() {
                    fogo.remove();
                }, 1500);
            }
        }