const lista = document.getElementById('lista')
const item = document.getElementById('item')
const botao = document.getElementById('botao')

botao.addEventListener('click', function(){
    item.focus()
    let valor = item.value
    const listas = document.querySelector('#lista')
    const itemLista = document.createElement('li')
    const botaoExcluir = document.createElement('button')

    itemLista.textContent = valor
    botaoExcluir.textContent= 'Excluir'
    
    if(!valor){
        alert('Você tem que inserir um pokemon e não estragar o rolê!')
    }else{
        listas.appendChild(itemLista)
        listas.appendChild(botaoExcluir)
    
        botaoExcluir.addEventListener('click', function(){
            listas.removeChild(itemLista)
            listas.removeChild(botaoExcluir)
        })
        
        
        
        limpaCampo()
    }
})
function limpaCampo(){
    document.getElementById('item').value = ""

}