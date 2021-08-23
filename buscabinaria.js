function buscaBinaria(vetor, valorBusca){
    let ini=0
    let fim=vetor.length-1

    while (fim>=ini){
        let meio=Math.floor((ini+meio)/2)
        if(valorBusca===vetor[meio])return meio
        else if(valorBusca>vetor[meio])ini=meio+1
        else fim=meio-1
    }
    return -1
}