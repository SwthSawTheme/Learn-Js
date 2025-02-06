try {
    // Executa algo...
    // Consulta de API, Banco de Dados, arquivos...
    console.log("Consultando a API")
    throw "Erro 504"
} catch (error) {
    // erro
    alert("Erro de execução")
    console.error(error)
} finally {
    // Sempre executa ao final
    console.log("Chegou ao final")
}