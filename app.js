

// // CODIGO GEMINI, para criar objetos JS lendo do HTML

// // Função para criar um objeto a partir de um elemento HTML
// function criarObjetoAtleta(elemento) {
//   const titulo = elemento.querySelector('h2').textContent;
//   const descricao = elemento.querySelector('.descricao-meta').textContent;
//   const link = elemento.querySelector('a').href;

//   return {
//     titulo,
//     descricao,
//     link
//   };
// }

// // Selecionando todos os elementos com a classe "item-resultado"
// const elementosAtletas = document.querySelectorAll('.item-resultado');

// // Criando um array para armazenar os objetos
// const atletas = [];

// // Iterando sobre os elementos e criando os objetos
// elementosAtletas.forEach(elemento => {
//   const atleta = criarObjetoAtleta(elemento);
//   atletas.push(atleta);
// });

// // Exemplo de uso:
// console.log(atletas); // Imprime um array com os objetos dos atletas

// // teste
// console.log(dados);

// // Funcao para um ALERTA
// function mostrarAlerta() {
//     alert("Avancini, é o Cara !!!");
//   };

// // Solucao 1 - Acessar o Doc.HTML Direto - ( em LOOP, nao é uma Boa Pratica )
// ///////////////////////////////////////////////////////////////////////////////
// // Pegar a Section de Resultados
// let secao = document.getElementById("resultados-pesquisa");
// // Zerar o Conteudo
// secao.innerHTML = ``;
// // Loop passando pelos itens do Array
// atletasMTB.forEach(element => {
//     secao.innerHTML = secao.innerHTML + `
//   <div class="item-resultado">
//       <h2>${element.titulo}</h2>
//       <p class="descricao-meta">${element.descricao}</p>
//       <a href="${element.link}" target="_blank">Ver Mais...</a>    
//   </div>
// `;  
// });


// // Solucao 2 - Acessar Doc.HTML Uma Vez - ( usar o LOOP, sobre uma varivavel )
// ///////////////////////////////////////////////////////////////////////////////
// // Pegar a Section de Resultados
// let secao = document.getElementById("resultados-pesquisa");
// // Varivavel Temporaria
// let resultado = "";
// // Loop passando pelos itens do Array
// atletasMTB.forEach(element => {
//     resultado += `<div class="item-resultado">
//                   <h2>${element.titulo}</h2>
//                   <p class="descricao-meta">${element.descricao}</p>
//                   <a href="${element.link}" target="_blank">Ver Mais...</a>    
//                   </div> `;  
// });
// // Acessar Doc.HTML Uma Vez
// secao.innerHTML = resultado;



// Função para filtrar os atletas por parte do nome
function filtrarPorNome(atletas, substring) {
  return atletas.filter(atleta => atleta.titulo.toLowerCase().includes(substring.toLowerCase()));
};


// Funcao para pesquisar - Usando Filtro 
/////////////////////////////////////////////////
function pesquisarFiltro() {

// Pega o Conteudo do Input Pesquisa
const filtrando = document.getElementById("filtro");

// Ativando um Filtro
let atletasFiltro = filtrarPorNome(atletasMTB, filtrando.value);

// Pegar a Section de Resultados
let secao = document.getElementById("resultados-pesquisa");

// Varivavel Temporaria
let resultado = "";
// Loop passando pelos itens do Array
atletasFiltro.forEach(element => {
    resultado += `<div class="item-resultado">
                  <h2>${element.titulo}</h2>
                  <p class="descricao-meta">${element.descricao}</p>
                  <a href="${element.link}" target="_blank">Ver Mais...</a>    
                  </div> `;  
});
// Acessar Doc.HTML Uma Vez
secao.innerHTML = resultado;

};


// Funcao para pesquisar
/////////////////////////////////////////////////
function pesquisarCondicao() {

  // Pega o Conteudo do Input Pesquisa
  const filtrando = document.getElementById("filtro").value.toLowerCase();

  // Validar o Campo Pesquisa
  if ( filtrando == "" ) {
    // Mostra uma Mensagem
    window.alert("Digite algo para Pesquisar");
    // Interompe a Função
    return
  }

  // Pegar a Section de Resultados
  let secao = document.getElementById("resultados-pesquisa");

  // Varivaveis Temporarias
  let resultado = "";
  let mtitulo = "";
  let mdescri = "";

  // Loop passando pelos itens do Array
  atletasMTB.forEach(element => {
    // Converte para minusculas antes de comparar
    mtitulo = element.titulo.toLowerCase();
    mdescri = element.descricao.toLowerCase();
    // Validar o Atleta para incluir no Resultado
    if ( mtitulo.includes(filtrando) || mdescri.includes(filtrando) ) {
      resultado += `<div class="item-resultado">
                    <h2>${element.titulo}</h2>
                    <p class="descricao-meta">${element.descricao}</p>
                    <a href="${element.link}" target="_blank">Ver Mais...</a>    
                    </div> `;  
    };
  });
  // Acessar Doc.HTML Uma Vez
  secao.innerHTML = resultado;
  
  };
  