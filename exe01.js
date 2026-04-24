function mostrar(){
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerText = "Olá " + nome + " digite dois números";
}

function somar(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let soma = numero1 + numero2;

    document.getElementById("resultado").innerText = "Soma = " + soma;
}

function verificar(){
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if(idade >= 18){
        document.getElementById("msg").innerText = nome + " ,você pode encher a cara!"
    }
    else if(idade > 10 && idade < 18){
        document.getElementById("msg").innerText = nome + " ,você é um pentelhudo!"
    }
    else if(idade <= 10 && idade >= 1){
        document.getElementById("msg").innerText = nome + " ,você é uma peraltinha!"
    }
    else{
        document.getElementById("msg").innerText = nome + " ,você não exite!";
    }
}

function paridade(){
    let 
}