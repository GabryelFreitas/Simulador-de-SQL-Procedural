document.getElementById('executeBtn').addEventListener('click', function() {
    const sqlInput = document.getElementById('sqlInput').value;
    const resultDiv = document.getElementById('result');

    //simulação básica de execução SQL
    if (sqlInput.toLowerCase().includes('select')) {
        resultDiv.innerHTML = '<P> Resultado da consulta: Exemplo de dados retornados. </P>';
    } else if (sqlInput.toLowerCase().includes('insert')) {
        resultDiv.innerHTML = '<P> Dados inseridos com succeso!.</P>';
    } else if (sqlInput.toLowerCase().includes('update')) {
        resultDiv.innerHTML = '<P> Dados atualizados com sucesso!.</P>';
    } else if (sqlInput.toLowerCase().includes('delete')) {
        resultDiv.innerHTML = '<P> Dados deletados com sucesso. </P>';
    } else {
        resultDiv.innerHTML = '<P>Erro: Comando SQL não reconhecido ou não suportado.</P>';
    }
});
