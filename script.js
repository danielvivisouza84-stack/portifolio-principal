
        // Função para abrir cada projeto
        function abrirProjeto(nomePasta) {
            // Altere os caminhos abaixo conforme organizar seus arquivos
            const caminho = `../${nomePasta}/index.html`;
            window.open(caminho, '_blank');
        }

        // Mensagem de boas-vindas ao abrir o portfólio
        window.onload = function() {
            console.log("Portfólio carregado com sucesso!");}
            // Se quiser mostrar mensagem na tela:
            // alert("Bem-vindo ao meu portfólio!");