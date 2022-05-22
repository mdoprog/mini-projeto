let estaAtivo: boolean;

// ..
estaAtivo = true;

function mapearStatusDeUsuario(status: boolean) {
  if (status) {
    return `Usuario está ativo`
  } else {
    return `Usuário NÂO está ativo`
  }
}

mapearStatusDeUsuario(true);