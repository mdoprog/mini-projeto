type User = {
  name: string;
  lastName: string;
  birthday: string;
  age?: number;
}

const marco: User = {
  name: 'marco',
  lastName: 'de Oliveira',
  birthday: '28/03/1980'
}

// union types
// | (como se fosse o ||)

type logLevel = 'info' | 'error' | 'debug';
function logMessage(message: string, level: logLevel) {
  console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')
// logMessage('Uma mensagem info', 'erro')

// intersection types: &
type About = {
  bio: string;
  interests: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
  name: 'marco',
  lastName: 'de Oliveira',
  birthday: '28/03/1980',
  bio: 'Olá, meu nome é Marco',
  interests: ['sports', 'martial arts', 'technology']
}