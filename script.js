$(function(){
    $(document).on('click', 'button.btn', function() {  
        // Retorna o valor da jogada
        let jogada = $('#jogador').text()                  
        
        // Muda a jogada de acordo com a vez
        trocarJogada(jogada)
        
        // Substitui o texto do botão 
        let jogador = $(this).text(jogada)
        if(jogador.text() == 'X') {
            $(this).addClass('activedX').removeClass('activedO')
        } else {
            $(this).addClass('activedO').removeClass('activedX')
        }
        
        // Desabilitar o botão clicado
        $(this).attr('disabled', true)
        
        // Verifica o vencedor
        verificarVencedor()
    })
    
    $(document).on('click', 'button.resetar', function(){
        window.location.reload()
        history.go(0)
    })
})

// Trocar o símbolo
let trocarJogada = (jogada) => {
    if(jogada == 'X') {
        $('#jogador').text('O')
    } else {
        $('#jogador').text('X')
    }
}

// Verificar o Vencedor
let verificarVencedor = () => {
    vencedorHorizontal()
    vencedorVertical()
    vencedorDiagonal()
}

// Horizontais
let vencedorHorizontal = () => {
    for(let i = 1; i <= 3; i++) {
        let combinacao = ''
    
        for(let j = 1; j <= 3; j++) {
            combinacao += $(`#${i}${j}`).text()
        }

        if(combinacao == 'XXX') {
            pararJogo()
            $('#resultado').text('O Jogador X Ganhou!!!')
        } else if(combinacao == 'OOO') {
            pararJogo()
            $('#resultado').text('O Jogador O Ganhou!!!')
        }  
    }
}

// Verticais
let vencedorVertical = () => {
    for(let i = 1; i <= 3; i++) {
        let combinacao = ''
        
        for(let j = 1; j <= 3; j++) {
            combinacao += $(`#${j}${i}`).text()         
        }
        
        if(combinacao == 'XXX') {
            pararJogo()            
            $('#resultado').text('O Jogador X Ganhou!!!')
        } else if(combinacao == 'OOO') {
            pararJogo()
            $('#resultado').text('O Jogador O Ganhou!!!')
        }
    }
}

// Diagonais
let vencedorDiagonal = () => {
    let combinacao = ''
    
    // Diagonal Principal
    combinacao = $('#11').text() + $('#22').text() + $('#33').text() 
    
    if(combinacao == 'XXX') {
        pararJogo()
        $('#resultado').text('O Jogador X Ganhou!!!')
    } else if(combinacao == 'OOO') {
        pararJogo()
        $('#resultado').text('O Jogador O Ganhou!!!')
    } 

    // Diagonal Secundária
    combinacao = $('#13').text() + $('#22').text() + $('#31').text() 
    
    if(combinacao == 'XXX') {
        pararJogo()
        $('#resultado').text('O Jogador X Ganhou!!!')
    } else if(combinacao == 'OOO') {
        pararJogo()
        $('#resultado').text('O Jogador O Ganhou!!!')
    } 
}

// Parar jogo após alguém vencer
let pararJogo = () => {
    for(let i = 1; i <= 3; i++) {
        for(let j = 1; j <= 3; j++) {
            $(`#${i}${j}`).attr('disabled', true)
        }
    }     
}