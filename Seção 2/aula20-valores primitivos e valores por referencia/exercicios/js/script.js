/* evento para nao atualizar a pagina - nao enviar formulario
function meuEscopo(){
    const form = document.querySelector('.form');

    form.onsubmit = function(evento){//funçao anonima
        evento.preventDefault();//diz para o navegador previnir oq ia ser feito por padrao, enviar o form
        alert(1);
        console.log('Foi enviado.');
    }; //nao esquecer de colocar o ; quando para um evento tiver = 
}
meuEscopo();*/

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');

       pessoas.push({
           nome: nome.value,
           sobrenome: sobrenome.value,
           peso: peso.value,
           altura: altura.value 
       });

       console.log(pessoas);

       resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
   
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();


// para proteger nosso codigo, para que ele nao polua o escopo global e nem sofra influencias externas criamos as varaveis dentro do escopo da funçao 
