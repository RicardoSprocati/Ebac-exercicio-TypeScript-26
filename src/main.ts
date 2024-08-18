function multiplicar(a:number,b:number ):number{
    return a * b 
}

function saudacao(nome:string):string{
    return "olá "+ nome + ",";
}

console.log(`${saudacao('Ricardo')} o resultado é ${multiplicar(10,2)}!`)