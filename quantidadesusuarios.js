async function quantidadeUsuarios () {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
      
      console.log(dados)
}