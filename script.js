
//método simples

let titulo = document.createElement("h1");

titulo.innerText = 'Loja';
titulo.id = "titulo";

let corpo = document.querySelector("body");
corpo.appendChild(titulo);

let produto = document.createElement("p");

produto.innerText = `Produto: SmartPhone iPhone XR

Descrição: O iPhone XR, lançado em 2018, apresenta um design semelhante ao iPhone X, com uma tela Liquid Retina HD de 6,1 polegadas. Equipado com uma câmera principal de 12 MP, processador A12 Bionic e opções de armazenamento de 64GB a 256GB. Oferece recursos como Face ID, resistência à água (certificação IP67) e carregamento sem fio, sendo uma opção mais acessível dentro da linha iPhone.

Preço: R$1.800,00
`;

corpo = document.querySelector("body");
corpo.appendChild(produto);

//método complexo

let mensagemComplexa = document.createElement("section");

mensagemComplexa.innerHTML = 
`
<h1 id="titulo2">Loja</h1>
<p>
Produto: SmartPhone iPhone XR
</p>
<p>
Descrição: O iPhone XR, lançado em 2018, apresenta um design semelhante ao iPhone X, com uma tela Liquid Retina HD de 6,1 polegadas. Equipado com uma câmera principal de 12 MP, processador A12 Bionic e opções de armazenamento de 64GB a 256GB. Oferece recursos como Face ID, resistência à água (certificação IP67) e carregamento sem fio, sendo uma opção mais acessível dentro da linha iPhone.
</p>
<p>
Preço: R$1.800,00
</p>
`;

corpo.appendChild(mensagemComplexa);