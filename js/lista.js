window.onload = listar()

function listar(){
    let jogadores = JSON.parse(localStorage.getItem("jogadores") ||[])
    if(jogadores.length!=0){

        let lista = document.getElementById("lista")
    jogadores.forEach(jogador => {
        const artigo = document.createElement("article")
        artigo.className="data"

        let div1 = document.createElement("div")
        div1.className ="div"

        let div2 = document.createElement("div")
        div2.className = "div"

        let foto = document.createElement("img")
        foto.src = jogador.foto
        div1.appendChild(foto)
        foto.className ="avatar"

        let nome = document.createElement("h3")
        nome.textContent = jogador.nome
        div1.appendChild(nome)
        

        let time=document.createElement("p")
        time.textContent = jogador.time
        div2.appendChild(time)
        time.className ="row"
        time.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half"> <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /> <path d="M12 22V2" /> </svg>')
               
        let gols = document.createElement("div")

        let quantGols = document.createElement("p")
        quantGols.className="quantGols"
        quantGols.textContent = jogador.gols + " gols"

        gols.appendChild(quantGols)
        div2.appendChild(gols)

        gols.className ="row"

        gols.insertAdjacentHTML("afterbegin",'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"class="lucide lucide-award"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>')

        let botaoAddGols = document.createElement("button")
        botaoAddGols.className="outline sm"
        botaoAddGols.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-minus">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg> `

        let botaoDelGols = document.createElement("button")
        botaoDelGols.className = "outline sm"
        botaoDelGols.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" class="lucide lucide-plus">
                <path d="M5 12h14" />
                
            </svg>
        `

        botaoAddGols.addEventListener("click",function(){
            quantGols.textContent = parseInt(gols.textContent) + 1 + " gols"

        
             jogador= jogadores.find(j => j.nome === jogador.nome)
             jogador.gols++
            
           

            localStorage.setItem('jogadores',JSON.stringify(jogadores))

            

        })

        botaoDelGols.addEventListener("click",function(){

            if(jogador.gols!=0){
                quantGols.textContent = parseInt(gols.textContent) - 1 + " gols"
                jogador = jogadores.find(j=> j.nome === jogador.nome )
                jogador.gols--
                localStorage.setItem('jogadores',JSON.stringify(jogadores))
            }


        })
           
        
        let assistencias = document.createElement("div")
        let quantAssist = document.createElement("p")
        quantAssist.className = "quantAssist"
        quantAssist.textContent = jogador.assistencias + " assistências"
        div2.appendChild(assistencias)
        assistencias.className ="row"
        assistencias.insertAdjacentHTML("afterbegin",`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-hand-heart">

                <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                <path
                    d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 15 6 6" />
                <path
                    d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />

            </svg>
        `)
        
        let btnAddAssit = document.createElement("button")
        btnAddAssit.className="outline sm"
        btnAddAssit.innerHTML=`       
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-minus">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>  
        
        `
        btnAddAssit.addEventListener("click",function(){

            quantAssist.textContent = parseInt(quantAssist.textContent) + 1 + " assistências"

            jogador.assistencias ++ 

            localStorage.setItem('jogadores',JSON.stringify(jogadores))

        })

        let btnDelAssist = document.createElement("button")
        btnDelAssist.className =" outline sm"
        btnDelAssist.innerHTML =`
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="lucide lucide-plus">
                <path d="M5 12h14" />
                
            </svg>       
        `
        btnDelAssist.addEventListener("click",function(){

            if(jogador.assistencias!=0){
                quantAssist.textContent = parseInt(quantAssist.textContent) - 1 + " assistências"

                jogador.assistencias--

                localStorage.setItem('jogadores',JSON.stringify(jogadores))

            }

            

        })


       
        

        gols.appendChild(botaoDelGols) 
        gols.appendChild(botaoAddGols)
        assistencias.appendChild(quantAssist)
        assistencias.appendChild(btnDelAssist)
        assistencias.appendChild(btnAddAssit)  
        artigo.appendChild(div1)
        artigo.appendChild(div2)

        let btnApagar = document.createElement("button")
        btnApagar.className = "pico-background-pink-600"
        btnApagar.innerHTML = `
            
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-trash">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
                apagar
            
        `
        artigo.appendChild(btnApagar)

        btnApagar.addEventListener("click",function(){
            artigo.remove()
            jogadores = jogadores.filter(j=> j.nome !== jogador.nome)
            localStorage.setItem('jogadores',JSON.stringify(jogadores))
            if(jogadores.length==0){
                location.reload()
            }

        })
    
        lista.appendChild(artigo)
        
    });

    }else{
        let artigo = document.createElement("article")
        let aviso = document.createElement("p")
        aviso.textContent = "Nenhum jogador cadastrado..."
        artigo.appendChild(aviso)
        document.getElementById("lista").appendChild(artigo)

    }
    
    
}