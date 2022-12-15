function helloWord()
{
    console.log("Hello Word");
}

const saudacao = () => {
    var data = new Date()
    return data.getHours() <= 12? "Bom dia": data.getHours() <= 18? "Boa tarde": "Boa noite";
}




// TODO resolver aqui
helloWord();
console.log('A saudação do momento é ' + saudacao());