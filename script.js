window.onload = function() {
    obterDadosFilmes();
}

async function obterDadosFilmes() {
    const numMin = 0;
    const numMax = 18;

    let urlsImg = [];
    let titulos = [];
    let datasLancamento = [];
    let mediasVotos = [];
    let textosFilmes = [];

    
    for (let i = 0; i < 4; i++) {
        let numAleatorio = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
        const urlDados = `https://api.themoviedb.org/3/movie/popular?api_key=dbe871c953394d408ded062054f01eb8`;
        const resposta = await fetch(urlDados);
        const info = await resposta.json();

        urlsImg.push(info.results[numAleatorio].poster_path);
        titulos.push(info.results[numAleatorio].title);
        datasLancamento.push(info.results[numAleatorio].release_date);
        mediasVotos.push(info.results[numAleatorio].vote_average);

        textosFilmes.push(info.results[numAleatorio].overview);
    }

    const urlImg = 'https://image.tmdb.org/t/p/w500';

    var titulo1 = document.getElementById('card1');
    titulo1.innerText = titulos[0];
    var titulo2 = document.getElementById('card2');
    titulo2.innerText = titulos[1];
    var titulo3 = document.getElementById('card3');
    titulo3.innerText = titulos[2];
    var titulo4 = document.getElementById('card4');
    titulo3.innerText = titulos[3];

    var img1 = document.createElement('img');
    img1.src = urlImg + urlsImg[0];
    document.getElementById("card1").appendChild(img1);

    var img2 = document.createElement('img');
    img2.src = urlImg + urlsImg[1];
    document.getElementById("card2").appendChild(img2);

    var img3 = document.createElement('img');
    img3.src = urlImg + urlsImg[2];
    document.getElementById("card3").appendChild(img3);

    var img4 = document.createElement('img');
    img3.src = urlImg + urlsImg[3];
    document.getElementById("card4").appendChild(img4);

    var texto1 = document.createElement('p');
    texto1.innerHTML = textosFilmes[0];
    var texto2 = document.createElement('p');
    texto2.innerHTML = textosFilmes[1];
    var texto3 = document.createElement('p');
    texto3.innerHTML = textosFilmes[2];
    var texto4 = document.createElement('p');
    texto3.innerHTML = textosFilmes[3];

    document.getElementById("card1").appendChild(texto1);
    document.getElementById("card2").appendChild(texto2);
    document.getElementById("card3").appendChild(texto3);
    document.getElementById("card4").appendChild(botao4);

    var botao1 = document.createElement('a');
    botao1.innerHTML = "Go somewhere";
    botao1.href = "#";
    botao1.className = "btn";

    var botao2 = document.createElement('a');
    botao2.innerHTML = "Go somewhere";
    botao2.href = "#";
    botao2.className = "btn";

    var botao3 = document.createElement('a');
    botao3.innerHTML = "Go somewhere";
    botao3.href = "#";
    botao3.className = "btn";



    document.getElementById("card1").appendChild(botao1);
    document.getElementById("card2").appendChild(botao2);
    document.getElementById("card3").appendChild(botao3);
    document.getElementById("card4").appendChild(botao4);


    console.log(titulos, datasLancamento, mediasVotos);

    console.log(texto3);
}