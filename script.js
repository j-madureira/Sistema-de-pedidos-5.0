//Boas vindas ao cliente
alert(`Bem vindo ao comida bacana!`);

//Recebendo o nome do cliente
var nomeCliente;
if(nomeCliente = prompt(`Digite seu nome:`)){
    alert(`Tudo certo ${nomeCliente}, agora vamos ao cadastro!`);
}
else{
    while(nomeCliente == ""){
        alert(`Você não digitou seu nome!`);
        if(nomeCliente = prompt(`Digite seu nome para continuar:`)){
        alert(`Tudo certo ${nomeCliente}, agora vamos ao cadastro!`)
        break;
        }
    }
}

//Recebendo o nome de usuário para cadastro
var nomeUsuario;
if(nomeUsuario = prompt(`Crie seu nome de usuário:`)){
    alert(`Tudo certo com a criação do nome de usuário ${nomeCliente}!`)
}
else{
    while(nomeUsuario == ""){
        alert(`Você ainda não criou seu nome de usuário ${nomeCliente}!`);
        if(nomeUsuario = prompt(`Crie seu nome de usuário para continuar:`)){
        alert(`Tudo certo com a criação do nome de usuário ${nomeCliente}!`);
        break;
        }
    }
}

var senhaUsuario;
if(senhaUsuario = prompt(`Crie sua senha:`)){
    alert(`${nomeCliente}, você já pode fazer login!`);
}
else{
    while(senhaUsuario == ""){
        alert(`Você ainda não criou sua senha!`);
        if(senhaUsuario = prompt(`Crie sua senha para continuar:`)){
        alert(`${nomeCliente}, você já pode fazer login!`);
        break;
        }
    }
}

//LOGIN
var nomeUsuarioLogin = prompt(`Digite seu nome de usuário para Login:`);
if(nomeUsuarioLogin == nomeUsuario){
}
else{
    while(nomeUsuarioLogin != nomeUsuario || nomeUsuarioLogin == ""){
        alert(`Verifique se você digitou seu nome de usuário errado ou se você não digitou!`)
        nomeUsuarioLogin = prompt(`Digite seu nome de usuário para continuar`)
        if(nomeUsuarioLogin == nomeUsuario){
        break;
        }
    }
}

var senhaUsuarioLogin = prompt(`Digite sua senha para Login:`);
if(senhaUsuarioLogin == senhaUsuario){
    alert(`Tudo certo ${nomeCliente}, você pode começar a fazer seus pedidos!`);
    console.log(`O usuário ${nomeCliente}, está ativo no sistema`)
}
else{
    while(senhaUsuarioLogin != senhaUsuario || senhaUsuarioLogin == ""){
        alert(`Verifique se você digiotu sua senha, ou se digitou
        verifique se não digiotu errado!`);
        senhaUsuarioLogin = prompt(`Digite sua senha para continuar`);
        if(senhaUsuarioLogin == senhaUsuario){
        alert(`Tudo certo ${nomeCliente}, você pode começar a fazer seus pedidos!`);
        console.log(`O usuário ${nomeCliente}, está ativo no sistema`);
        break;
        }
    }
}

// Pedido do cliente
var pedidoLanche = prompt(`Peça seu lanche:`);
while(pedidoLanche == ""){
    alert(`${nomeCliente}, você esqueceu de pedir seu lanche :(`);
    if(pedidoLanche = prompt(`Peça seu lanche para continuar seu pedido:`)){
    break;
    }
}

var pedidoBebida = prompt(`Peça seu refrigerante:`);
while(pedidoBebida == ""){
    alert(`Você esqueceu de pedir sua bebida ${nomeCliente}!`);
    if(pedidoBebida = prompt(`Peça sua bebida para continuar:`)){
    break;
    }
}
var pedidoSobremesa = prompt(`Peça sua sobremesa:`);
while(pedidoSobremesa == ""){
    alert(`${nomeCliente}, peça sua sobremesa para finalizar seu pedido!`);
    if(pedidoSobremesa = prompt(`Peça sua sobremesa para finalizar seu pedido:`)){
    break;
    }
}

var cidadeEntrega = prompt(`Informe sua cidade para a entrega do pedido:`);
while(cidadeEntrega == ""){
    alert(`Informe sua cidade para a entrega do seu pedido ${nomeCliente}!`);
    if(cidadeEntrega = prompt(`Informe sua cidade para que seu pedido seja entregue ${nomeCliente}:`)){
    break;
    }
}

var bairroEntrega = prompt(`Informe seu bairro para a entrega do pedido:`);
while(bairroEntrega == ""){
    alert(`Informe seu bairro para que seja feita a entrega ${nomeCliente}`);
    if(bairroEntrega = prompt(`Informe seu bairro para que a entrega seja feita ${nomeCliente}`)){
    break;
    }
}

var ruaEntrega = prompt(`Informe sua rua para a entrega:`);
while(ruaEntrega == ""){
    alert(`Você ainda não informou a rua para a entrega ${nomeCliente}!`);
    if(ruaEntrega = prompt(`Informe sua rua para a entrega ${nomeCliente}:`)){
    break;
    }
}

var numeroCasa = prompt(`Informe o número da casa para finalizar seu pedido:`);
while(numeroCasa == ""){
    alert(`Você ainda não informou o Nº da sua casa para entrega ${nomeCliente}!`);
    if(numeroCasa = prompt(`${nomeCliente}, Informe o número da sua casa para finalizar seu pedido:`)){
        break;
    }
}
console.log(`O cliente ${nomeCliente} fez um pedido:\n
Um lanche: ${pedidoLanche}\n
Um refrigerante: ${pedidoBebida}\n
Uma sobremesa: ${pedidoSobremesa}\n
Entregar no endereço: Cidade: ${cidadeEntrega}\n
Bairro: ${bairroEntrega}\n
Rua: ${ruaEntrega} Nº: ${numeroCasa}`);