function principal(): void {
  console.log('executando')
  //Não retorna nada
}

principal()

// laços de repetição infinitos
// ou funções que disparam erros
function funcaoQueNuncaRetorna(): never {
  throw new Error('ola')
}

const a = funcaoQueNuncaRetorna()