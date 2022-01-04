function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value
    ConvidadosLeonardo = ['Leonardo', 'Elainy', 'Alyne', 'Pedrinho']

    if(ConvidadosLeonardo.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}