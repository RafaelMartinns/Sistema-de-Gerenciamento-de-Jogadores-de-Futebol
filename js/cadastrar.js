document.getElementById("form").addEventListener("submit",function(){
    
    const nome =document.getElementById("nome").value
    const time =document.getElementById("time").value
    let gols =document.getElementById("gols").value
    let assistencias =document.getElementById("assistencias").value
    const foto =document.getElementById("foto").value
    if(nome=="" || time=="" || gols=="" || assistencias=="" || foto=="" ){
        alert("Preencha todos os campos!")
    } else{
        let jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
        let jogador = {
        "nome": nome,
        "time": time,
        "gols": gols,
        "assistencias": assistencias,
        "foto": foto
        }
        jogadores.push(jogador)

        alert("O jogador foi cadastrado")

        localStorage.setItem("jogadores",JSON.stringify(jogadores))

        console.log(jogador)

    }
    
    
    

})
