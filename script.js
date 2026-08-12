// ================= Banco de Perguntas =================
const perguntasIniciais = [
    { p: "Por que o Cerrado é considerado um dos biomas mais importantes do Brasil?", c: "Por sua grande biodiversidade e importância para as águas", e: ["Porque não possui áreas de vegetação", "Porque é formado apenas por campos"] },
    { p: "Qual animal possui uma 'crina' escura e pernas longas, sendo facilmente reconhecido no Cerrado?", c: "Lobo-guará", e: ["Tamanduá-bandeira", "Tatu-canastra"] },
    { p: "Qual fruto do Cerrado possui uma polpa amarela e é bastante utilizado na culinária brasileira?", c: "Pequi", e: ["Morango", "Uva"] },
    { p: "Qual característica ajuda algumas plantas do Cerrado a sobreviverem durante períodos de seca?", c: "Raízes profundas", e: ["Folhas gigantes e aquáticas", "Ausência total de raízes"] },
    { p: "O que pode acontecer quando uma estrada atravessa uma área natural do Cerrado?", c: "Pode aumentar o isolamento entre populações de animais", e: ["Pode criar automaticamente novos habitats", "Pode impedir a ocorrência de qualquer planta"] },
    { p: "Qual destes animais é conhecido por possuir uma poderosa mordida e viver em diferentes ambientes do Cerrado?", c: "Onça-pintada", e: ["Beija-flor", "Ema"] },
    { p: "Qual planta do Cerrado é famosa por produzir uma castanha muito utilizada na alimentação?", c: "Baruzeiro", e: ["Bananeira", "Coqueiro"] },
    { p: "Qual é uma das funções das frutas produzidas pelas plantas nativas?", c: "Servir de alimento para diversos animais", e: ["Impedir a reprodução das plantas", "Aumentar a poluição do solo"] },
    { p: "O que é uma nascente?", c: "Local onde a água subterrânea ou acumulada começa a formar um curso d'água", e: ["Local onde termina um rio", "Uma área sem água"] },
    { p: "Qual atitude pode ajudar a proteger uma nascente?", c: "Manter a vegetação ao seu redor", e: ["Retirar toda a vegetação", "Jogar resíduos próximo à água"] },
    { p: "Qual destes animais possui hábitos principalmente noturnos?", c: "Tatu-canastra", e: ["Ema", "Seriema"] },
    { p: "Por que o lobo-guará é importante para o Cerrado?", c: "Participa da cadeia alimentar e ajuda na dispersão de sementes", e: ["Alimenta-se somente de plantas aquáticas", "Vive exclusivamente em árvores"] },
    { p: "O que pode ocorrer quando espécies invasoras chegam a um ambiente natural?", c: "Podem competir com espécies nativas", e: ["Sempre aumentam a biodiversidade", "Eliminam a necessidade de conservação"] },
    { p: "Qual desses animais possui uma dieta baseada principalmente em formigas e cupins?", c: "Tamanduá-bandeira", e: ["Onça-pintada", "Ema"] },
    { p: "Qual é uma consequência da retirada da vegetação das margens dos rios?", c: "Aumento da erosão e do assoreamento", e: ["Aumento garantido da qualidade da água", "Surgimento de novas nascentes"] },
    { p: "O que significa 'espécie ameaçada de extinção'?", c: "Espécie que corre risco de desaparecer", e: ["Espécie que acabou de ser descoberta", "Espécie que vive somente em zoológicos"] },
    { p: "Qual animal possui uma carapaça formada por placas e é um dos maiores tatus existentes?", c: "Tatu-canastra", e: ["Lobo-guará", "Jaguatirica"] },
    { p: "Qual dessas atividades pode causar impactos negativos quando realizada sem planejamento ambiental?", c: "Agricultura e pecuária", e: ["Educação ambiental", "Recuperação de nascentes"] },
    { p: "Por que as queimadas durante períodos muito secos podem ser especialmente perigosas?", c: "O fogo pode se espalhar rapidamente e atingir grandes áreas", e: ["A chuva aumenta imediatamente", "As plantas deixam de precisar de água"] },
    { p: "Qual destes é um exemplo de recurso natural fornecido pelo Cerrado?", c: "Água", e: ["Plástico", "Combustível produzido artificialmente"] },
    { p: "O que acontece com o solo quando a vegetação é retirada e ele fica exposto?", c: "Pode sofrer maior erosão", e: ["Fica automaticamente mais fértil", "Torna-se impermeável imediatamente"] },
    { p: "Qual animal do Cerrado é uma ave que não consegue voar?", c: "Ema", e: ["Seriema", "Tucano"] },
    { p: "Por que os animais precisam de diferentes tipos de habitat?", c: "Para encontrar alimento, abrigo e locais para reprodução", e: ["Apenas para fugir da chuva", "Para evitar qualquer contato com plantas"] },
    { p: "O que significa desmatamento?", c: "Retirada da vegetação de uma determinada área", e: ["Plantio de árvores nativas", "Proteção de uma floresta"] },
    { p: "Qual destas ações contribui diretamente para a conservação da fauna?", c: "Combater o tráfico de animais silvestres", e: ["Retirar animais da natureza para mantê-los em casa", "Destruir seus habitats"] },
    { p: "Por que o Cerrado é importante para outros biomas brasileiros?", c: "Seus rios e nascentes contribuem para grandes bacias hidrográficas", e: ["Porque todos os outros biomas dependem exclusivamente de suas árvores", "Porque não possui nenhum curso d'água"] },
    { p: "Qual fenômeno pode ser intensificado pela destruição da vegetação e pelo aumento das emissões de gases de efeito estufa?", c: "Mudanças climáticas", e: ["Formação de novas espécies imediatamente", "Diminuição da temperatura mundial"] },
    { p: "Qual destas opções representa uma atitude de consumo consciente?", c: "Evitar desperdícios e reduzir a produção de lixo", e: ["Jogar resíduos em terrenos vazios", "Desperdiçar água porque é um recurso infinito"] },
    { p: "O que pode ajudar uma população de animais isolada por áreas desmatadas?", c: "Corredores ecológicos", e: ["Mais desmatamento", "Retirada da vegetação restante"] },
    { p: "Se você encontrasse lixo em uma área de Cerrado, qual seria a atitude mais adequada?", c: "Recolher de forma segura e dar a destinação correta ao resíduo", e: ["Enterrar o lixo no solo", "Jogá-lo em um rio próximo"] }
];

// Cópia das perguntas para ir sorteando e removendo para não repetir
let bancoPerguntas = [...perguntasIniciais]; 

// ================= Coordenadas do Tabuleiro (%) =================
// Baseado no grid da imagem 'fundo.png'. A casa 0 é a SAÍDA, a 25 é a CHEGADA.
// X = esquerda para direita, Y = topo para baixo.
const coordenadas = [
    { x: 13, y: 15 }, // 0: SAÍDA (Texto SAÍDA)
    { x: 13, y: 28 }, // 1 (Amarelo)
    { x: 13, y: 41 }, // 2 (Verde)
    { x: 13, y: 55 }, // 3 (Azul)
    { x: 13, y: 68 }, // 4 (Vermelho)
    { x: 13, y: 81 }, // 5 (Amarelo)
    { x: 13, y: 94 }, // 6 (Verde - Canto inf esquerdo)
    { x: 25, y: 94 }, // 7 (Azul)
    { x: 38, y: 94 }, // 8 (Vermelho)
    { x: 50, y: 94 }, // 9 (Amarelo)
    { x: 62, y: 94 }, // 10 (Verde)
    { x: 75, y: 94 }, // 11 (Azul)
    { x: 87, y: 94 }, // 12 (Vermelho)
    { x: 100, y: 94 },// 13 (Amarelo - Canto inf direito)
    { x: 100, y: 81 },// 14 (Azul)
    { x: 100, y: 68 },// 15 (Verde)
    { x: 87, y: 68 }, // 16 (Amarelo perto do tronco)
    { x: 75, y: 68 }, // 17 (Verde)
    { x: 62, y: 68 }, // 18 (Azul)
    { x: 50, y: 68 }, // 19 (Vermelho perto da onça)
    { x: 50, y: 55 }, // 20 (Azul)
    { x: 50, y: 41 }, // 21 (Amarelo)
    { x: 62, y: 41 }, // 22 (Verde)
    { x: 75, y: 41 }, // 23 (Azul)
    { x: 87, y: 41 }, // 24 (Vermelho)
    { x: 87, y: 20 }  // 25: CHEGADA (Texto CHEGADA)
];

// ================= Variáveis de Estado =================
let turnoAtual = 1; // 1 = Sapo, 2 = Arara
let posJogador1 = 0;
let posJogador2 = 0;
let valorDadoSorteado = 0;
let bloqueado = false; // Impede duplo clique no dado

// ================= Elementos da DOM =================
const jogador1El = document.getElementById('jogador1');
const jogador2El = document.getElementById('jogador2');
const btnGirar = document.getElementById('btnGirar');
const dadoValor = document.getElementById('dado-valor');
const nomeJogador = document.getElementById('nome-jogador');
const modalPergunta = document.getElementById('modal-pergunta');
const textoPergunta = document.getElementById('texto-pergunta');
const opcoesContainer = document.getElementById('opcoes-container');

// ================= Inicialização e Tela Cheia =================
function iniciarJogo() {
    document.getElementById('tela-inicio').classList.add('escondido');
    atualizarPosicaoPersonagens();
}

document.getElementById('btn-iniciar').addEventListener('click', iniciarJogo);
document.getElementById('btn-reiniciar').addEventListener('click', () => location.reload());

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Erro ao tentar modo tela cheia: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
document.getElementById('btn-tela-cheia-inicio').addEventListener('click', toggleFullScreen);
document.getElementById('btn-fullscreen-jogo').addEventListener('click', toggleFullScreen);

// ================= Lógica do Tabuleiro =================
function atualizarPosicaoPersonagens() {
    // Sapo
    const coord1 = coordenadas[posJogador1];
    jogador1El.style.left = `calc(${coord1.x}% - 15px)`; // -15px para afastar um do outro na mesma casa
    jogador1El.style.top = `${coord1.y}%`;

    // Arara
    const coord2 = coordenadas[posJogador2];
    jogador2El.style.left = `calc(${coord2.x}% + 15px)`; // +15px para o outro lado
    jogador2El.style.top = `${coord2.y}%`;
}

// ================= Lógica do Turno e Dado =================
document.getElementById('btn-girar').addEventListener('click', () => {
    if (bloqueado) return;
    bloqueado = true;

    // Sorteia de 1 a 3
    valorDadoSorteado = Math.floor(Math.random() * 3) + 1;
    
    // Efeito simples de girar o dado
    let tempo = 0;
    let intervalo = setInterval(() => {
        dadoValor.innerText = Math.floor(Math.random() * 3) + 1;
        tempo += 100;
        if (tempo >= 1000) {
            clearInterval(intervalo);
            dadoValor.innerText = valorDadoSorteado;
            setTimeout(abrirPergunta, 500);
        }
    }, 100);
});

function passarTurno() {
    turnoAtual = turnoAtual === 1 ? 2 : 1;
    nomeJogador.innerText = turnoAtual === 1 ? "Sapo" : "Arara";
    nomeJogador.style.color = turnoAtual === 1 ? "#4caf50" : "#2196F3"; // Verde ou Azul
    dadoValor.innerText = "?";
    bloqueado = false;
}

// ================= Lógica das Perguntas =================
function abrirPergunta() {
    if (bancoPerguntas.length === 0) {
        // Recarrega as perguntas se acabarem
        bancoPerguntas = [...perguntasIniciais]; 
    }

    // Puxa uma pergunta aleatória
    const indexSorteado = Math.floor(Math.random() * bancoPerguntas.length);
    const questao = bancoPerguntas[indexSorteado];
    
    // Remove do banco temporário
    bancoPerguntas.splice(indexSorteado, 1);

    // Configura o modal
    textoPergunta.innerText = questao.p;
    opcoesContainer.innerHTML = '';

    // Cria array com a certa e as erradas, e depois embaralha
    let alternativas = [
        { texto: questao.c, correta: true },
        { texto: questao.e[0], correta: false },
        { texto: questao.e[1], correta: false }
    ];
    alternativas = alternativas.sort(() => Math.random() - 0.5);

    alternativas.forEach(alt => {
        const btn = document.createElement('button');
        btn.classList.add('btn-pixel', 'btn-opcao');
        btn.innerText = alt.texto;
        btn.onclick = () => verificarResposta(btn, alt.correta);
        opcoesContainer.appendChild(btn);
    });

    modalPergunta.classList.remove('escondido');
}

function verificarResposta(botaoClicado, isCorreta) {
    // Desabilita todos os botões para não clicar de novo
    const botoes = document.querySelectorAll('.btn-opcao');
    botoes.forEach(b => b.disabled = true);

    if (isCorreta) {
        botaoClicado.classList.add('opcao-certa');
        setTimeout(() => {
            modalPergunta.classList.add('escondido');
            moverJogador();
        }, 1500);
    } else {
        botaoClicado.classList.add('opcao-errada');
        // Pinta a certa de verde para o jogador aprender
        botoes.forEach(b => {
            // Checa no array de alternativas iniciais pelo texto se era a correta (via lógica simples)
            // Aqui simplificamos marcando a que ele clicou de vermelho e aguardamos
        });
        setTimeout(() => {
            modalPergunta.classList.add('escondido');
            passarTurno();
        }, 2000);
    }
}

// ================= Movimentação =================
function moverJogador() {
    let passosDados = 0;
    let posAtual = turnoAtual === 1 ? posJogador1 : posJogador2;

    let moverInterval = setInterval(() => {
        if (passosDados < valorDadoSorteado && posAtual < 25) {
            posAtual++;
            passosDados++;
            
            if (turnoAtual === 1) posJogador1 = posAtual;
            else posJogador2 = posAtual;

            atualizarPosicaoPersonagens();
        } else {
            clearInterval(moverInterval);
            verificarVitoria();
        }
    }, 500); // 500ms entre pular cada casa para efeito de jogo de tabuleiro
}

function verificarVitoria() {
    if (posJogador1 >= 25 || posJogador2 >= 25) {
        const vencedor = posJogador1 >= 25 ? "Sapo" : "Arara";
        document.getElementById('texto-vencedor').innerText = `${vencedor} Venceu!`;
        document.getElementById('tela-fim').classList.remove('escondido');
    } else {
        passarTurno();
    }
}

