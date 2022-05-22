// Type assertions
type JogoAssertion = {
  nome:string;
  descricao: string;
}

let jogo = {} as JogoAssertion;
//let jogo = <JogoAssertion>{}; tanto uma quanto a outra forma são permitidas
jogo.nome = 'nome';
jogo.descricao = 'descricao do jogo'