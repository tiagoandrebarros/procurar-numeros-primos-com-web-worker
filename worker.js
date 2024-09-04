onmessage = function (e) {
  let inicio = e.data[0]
  let fim = e.data[1]
  
  inicio = parseInt(inicio)
  fim = parseInt(fim)
  
  if(Number.isNaN(inicio) || Number.isNaN(fim)){
    postMessage(false)
    return
  }
  
  let listaResultado = []

  if(inicio > fim || inicio < 0 || fim < 0){
    postMessage(false)
  } else if(inicio === 0 || inicio === 1){
    inicio = 2
  }

  let i
  let primo
  
  while(inicio <= fim){
    i = 2
    primo = true

    while(i < inicio){
      if(inicio % i === 0){
        primo = false
        break
      }
      i++
    }

    if(primo){
      listaResultado.push(inicio)
    }

    inicio++
  }

  postMessage(listaResultado)
}
