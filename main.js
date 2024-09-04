const inicio = document.querySelector('#inicio')
const fim = document.querySelector('#fim')
const situacao = document.querySelector('#situacao')
const telaResultado = document.querySelector('#telaResultado')

function calcular() {
  situacao.textContent = 'Processando...'
  
  // instanciando worker em nova thread
  const worker = new Worker("worker.js")

  // enviando menssagem para o worker
  worker.postMessage([inicio.value, fim.value])

  // ouvindo, aguardando resposta do worker
  worker.onmessage = function (e) {
    
    // fazendo processamento após receber a resposta do worker
    telaResultado.textContent = ''

    if(e.data.length == 0){
      situacao.textContent = 'Não foi encontrado algum número primo'
    } else if(e.data == false){
      situacao.textContent = 'Aconteceu algum erro, verifique a digitação e tente novamente'
    } else{
      situacao.textContent = 'processamento concluído'

      for(let i in e.data){
        let container = document.getElementById("telaResultado")
        let elemento = document.createElement("span")
        elemento.appendChild(document.createTextNode(e.data[i]))
        container.appendChild(elemento)
      }
    }
    
    // finalizando o worker/thread
    worker.terminate()
  }
}
