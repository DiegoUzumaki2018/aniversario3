const canvas = document.getElementById("coracao");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particulas = [];


function criarCoracao() {

    for (let i = 0; i < 3000; i++) {

        let t = Math.random() * Math.PI * 2;

        let x = 16 * Math.pow(Math.sin(t), 3);

        let y =
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t);


        let tamanho = Math.random();


        particulas.push({

            x: canvas.width / 2 + x * 20,
            y: canvas.height / 2 - y * 20,

            tamanho: tamanho,

            velocidade: Math.random() * 4

        });

    }
}


function desenhar() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    for (let particula of particulas) {

        ctx.beginPath();

        ctx.arc(
            particula.x,
            particula.y,
            particula.tamanho,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "pink";

        ctx.fill();
    }
    ctx.textAlign = "center";
ctx.textBaseline = "middle";

ctx.font = "bold 35px Arial";
ctx.fillStyle = "red";
ctx.fillText("EU TE AMO", canvas.width / 2, canvas.height / 2 - 10);

ctx.font = "bold 20px Arial";
ctx.fillStyle = "purple";
ctx.fillText("MUITAS FELICIDADES", canvas.width / 2, canvas.height / 2 + 30);

    requestAnimationFrame(desenhar);
}


criarCoracao();

desenhar();
