/* ============================================================
   DADOS DAS 15 REDAÇÕES
   👉 Substitua os textos pelos seus textos reais!
============================================================ */
const redacoes = [
    {
        id: 1,
        genero: "Narrativa",
        titulo: "O Primeiro Dia de Aula",
        resumo: "Uma história sobre o nervosismo e a alegria do primeiro dia de aula.",
        data: "Março de 2022",
        texto: `Era uma manhã de março quando tudo começou. O sol brilhava lá fora, mas dentro de mim havia uma tempestade de emoções. O primeiro dia de aula sempre traz consigo aquele frio na barriga, aquela mistura de medo e expectativa que só quem já passou por isso conhece.

Lembro-me de estar parado em frente ao portão da escola, segurando a mão da minha mãe com uma força que parecia dizer: "não me deixe aqui". As crianças corriam de um lado para o outro, rindo, enquanto eu observava tudo com os olhos arregalados.

— Vai ficar tudo bem — disse minha mãe, com aquele sorriso que sempre me acalmava.

E não é que ela estava certa? Algumas horas depois, eu já estava sentado em uma rodinha, aprendendo uma música nova sobre os animais. A professora tinha um jeito doce de falar, e o lanche era o melhor que eu já tinha comido.

Aquele dia me ensinou algo que carrego até hoje: por trás de todo medo existe uma descoberta esperando para acontecer.`
    },
    {
        id: 2,
        genero: "Narrativa",
        titulo: "O Amigo que Mudou Tudo",
        resumo: "Como uma amizade transformou minha visão sobre a escola.",
        data: "Junho de 2022",
        texto: `Conheci o Lucas no primeiro ano do Ensino Médio. Ele era o típico garoto quieto, que sentava no fundo da sala e não falava com ninguém. Eu também era meio assim, então acabamos nos entendendo sem precisar dizer uma palavra.

Um dia, durante o intervalo, ele me chamou para jogar bola. Eu nunca tinha sido bom em esportes, mas aceitei. E, pela primeira vez, me senti parte de algo.

O Lucas me ensinou que não precisamos ser iguais para sermos amigos. Ele me mostrou como ver a escola de outra forma: não como um lugar de obrigações, mas como um espaço de descobertas.

Nos anos seguintes, passamos por tudo juntos: provas difíceis, trabalhos em grupo, as piadas que só nós entendíamos. Hoje, no terceiro ano, sei que aquela amizade foi essencial para minha trajetória.

Algumas pessoas passam pela nossa vida e deixam marcas. O Lucas deixou a marca de uma amizade verdadeira.`
    },
    {
        id: 3,
        genero: "Carta",
        titulo: "Carta ao Meu Eu do Futuro",
        resumo: "Uma carta aberta sobre sonhos e expectativas para depois da formatura.",
        data: "Agosto de 2022",
        texto: `Querido eu do futuro,

Espero que quando você leia esta carta, esteja exatamente onde sonhei. Ou que tenha encontrado um caminho ainda melhor.

Hoje estou no primeiro ano do Ensino Médio. Ainda tenho tantas perguntas. Será que vou conseguir passar no vestibular? Será que vou fazer amigos na faculdade? Será que vou me lembrar de todas as coisas que aprendi aqui?

Escrevo para te lembrar de algumas coisas importantes:

1. Nunca perca a curiosidade. Foi ela que te trouxe até aqui.
2. Valorize os amigos. Eles são o porto seguro nas tempestades.
3. Não tenha medo de errar. Cada erro é uma lição.
4. Lembre-se das noites de estudo, dos trabalhos em grupo, dos professores que acreditaram em você.
5. E, acima de tudo, lembre-se de que a escola foi o começo, não o fim.

Com carinho,
Seu eu de 2022.`
    },
    {
        id: 4,
        genero: "Dissertativo-Argumentativo",
        titulo: "A Importância da Leitura na Formação do Indivíduo",
        resumo: "Reflexão sobre como a leitura transforma vidas e mentes.",
        data: "Setembro de 2022",
        texto: `A leitura é, sem dúvida, uma das práticas mais transformadoras na vida de um indivíduo. Mais do que decifrar códigos, ler é mergulhar em mundos, entender perspectivas diferentes e desenvolver o pensamento crítico. Ao longo da história, grandes mudanças sociais tiveram na palavra escrita seu ponto de partida.

Em primeiro lugar, a leitura amplia a visão de mundo. Quem lê conhece realidades que não pode vivenciar diretamente. Um adolescente que lê sobre a vida em outro continente desenvolve empatia e compreensão. É por meio dos livros que aprendemos a nos colocar no lugar do outro.

Além disso, a leitura potencializa a capacidade de argumentação. Em um mundo cada vez mais exigente, saber expressar opiniões com clareza e fundamento é uma vantagem significativa. A leitura frequente amplia o vocabulário, aprimora a escrita e aguça o raciocínio lógico.

Portanto, investir em leitura — seja em casa, na escola ou em políticas públicas — é investir no futuro. Uma sociedade que lê é uma sociedade que pensa, questiona e evolui.`
    },
    {
        id: 5,
        genero: "Narrativa",
        titulo: "A Festa Junina Mais Inesquecível",
        resumo: "Uma história sobre tradição, amigos e momentos felizes na escola.",
        data: "Junho de 2022",
        texto: `Toda escola tem aquela festa junina que fica marcada na memória. A minha aconteceu no primeiro ano do Ensino Médio, quando eu e meus amigos decidimos nos fantasiar de personagens caipiras como nunca antes.

O dia começou cedo. A escola estava toda enfeitada com bandeirinhas coloridas, e o cheiro de pipoca e canjica se espalhava pelo pátio. As barracas estavam montadas, e cada turma tinha sua apresentação.

Nossa quadrilha foi a última a se apresentar. Estávamos nervosos. Cada passo tinha sido ensaiado por semanas, e agora era o momento da verdade. Quando a música começou, todo o nervosismo desapareceu. Viramos uma só equipe, rindo, dançando, errando alguns passos e improvisando outros.

No final, recebemos os aplausos mais calorosos da noite. Mas o melhor prêmio não foi a vitória: foi o momento que passamos juntos. A festa junina me ensinou que os momentos mais felizes não são planejados — eles simplesmente acontecem.`
    },
    {
        id: 6,
        genero: "Dissertativo-Argumentativo",
        titulo: "Os Desafios da Educação no Brasil",
        resumo: "Uma análise sobre os obstáculos e as soluções para a educação brasileira.",
        data: "Outubro de 2022",
        texto: `A educação é um direito fundamental garantido pela Constituição Brasileira, mas, na prática, ainda enfrenta enormes desafios. A desigualdade no acesso, a infraestrutura precária e a desvalorização dos professores são problemas que comprometem o futuro de milhões de jovens.

Um dos principais desafios é a desigualdade educacional. Enquanto escolas particulares oferecem laboratórios, bibliotecas e atividades extracurriculares, muitas escolas públicas carecem de recursos básicos. Essa disparidade perpetua um ciclo de exclusão social.

Outro ponto crítico é a valorização dos profissionais da educação. Professores mal remunerados, sem condições adequadas de trabalho, têm dificuldade em oferecer um ensino de excelência. Investir na formação e na carreira docente é essencial para transformar a realidade educacional.

Por fim, é preciso repensar o modelo de ensino. A escola do século XXI não pode ser a mesma do século XIX. É necessário incorporar tecnologia, metodologias ativas e uma abordagem que valorize as habilidades socioemocionais.

Só com investimento sério e políticas públicas eficazes será possível construir uma educação verdadeiramente inclusiva e transformadora.`
    },
    {
        id: 7,
        genero: "Narrativa",
        titulo: "O Dia em que Fui Professor",
        resumo: "Uma experiência inesperada que mudou minha forma de ver os professores.",
        data: "Agosto de 2023",
        texto: `Aconteceu no segundo ano do Ensino Médio, durante a Semana dos Estudantes. Os professores propuseram uma dinâmica: os alunos assumiriam o papel de professores por um dia.

Fui escolhido para dar uma aula de História para o primeiro ano. Passei a noite anterior estudando como um louco, preparando slides, anotações e até piadas para deixar a aula mais interessante.

Quando cheguei à sala, o nervosismo tomou conta. Vinte pares de olhos me olhavam com expectativa. Comecei a falar, gaguejei algumas vezes, mas aos poucos fui me soltando.

— Vocês sabiam que a Revolução Francesa começou por causa do pão? — perguntei, e a sala se interessou.

Ao final da aula, os alunos aplaudiram. Mas o que ficou comigo foi a lição: dar aula não é apenas passar conteúdo, é inspirar, conectar e transformar. Aquele dia mudou minha forma de ver os professores. Eles são verdadeiros heróis.`
    },
    {
        id: 8,
        genero: "Poema",
        titulo: "Passos no Corredor",
        resumo: "Um poema sobre a jornada escolar e suas lembranças.",
        data: "Maio de 2023",
        texto: `Passos no corredor, risadas no ar,
Lápis na mão, histórias a criar.
Sinos que tocam, livros a abrir,
Sonhos que nascem, vontade de ir.

Do jardim de infância ao terceiro ano,
Foram tantos dias, foi tanto engano.
Choros, abraços, provas e notas,
Amigos que ficam, memórias remotas.

Professores que ensinam, que cuidam,
Que riem, que brigam, que acreditam.
Cada palavra, cada gesto, cada olhar,
Um pedaço de mim a se formar.

Agora o fim se aproxima, é verdade,
Mas levo comigo a saudade.
Não é o adeus que vai me parar,
É a certeza de que posso sonhar.

E quando o amanhã chegar,
Com novos caminhos a trilhar,
Lembrarei destes dias com gratidão,
Pois a escola mora no meu coração.`
    },
    {
        id: 9,
        genero: "Narrativa",
        titulo: "A Olimpíada de Matemática",
        resumo: "Como a matemática deixou de ser um monstro e se tornou uma paixão.",
        data: "Setembro de 2023",
        texto: `Eu sempre tive medo de matemática. Desde as tabuadas do fundamental, os números pareciam um bicho de sete cabeças. No primeiro ano do Ensino Médio, minha professora de matemática me desafiou a participar da Olimpíada Brasileira de Matemática.

— Você pode não saber tudo, mas tem potencial — disse ela.

Comecei a estudar com raça. Fiz cursos online, resolvi exercícios todos os dias, pedi ajuda. Aos poucos, os números começaram a fazer sentido. Descobri que a matemática tem lógica, tem beleza, tem até poesia.

No dia da prova, o coração disparou. Mas quando li a primeira questão, sorri. Eu sabia resolver. Resolvi todas com calma e entreguei a prova com a sensação de dever cumprido.

Semanas depois, o resultado: medalha de prata! Nunca esquecerei a emoção daquele dia. Não pela medalha, mas pela descoberta de que eu era capaz. A matemática deixou de ser um monstro. Virou uma amiga.`
    },
    {
        id: 10,
        genero: "Dissertativo-Argumentativo",
        titulo: "O Papel das Redes Sociais na Sociedade Atual",
        resumo: "Uma análise sobre os impactos das redes sociais na vida dos jovens.",
        data: "Novembro de 2023",
        texto: `As redes sociais transformaram radicalmente a forma como nos comunicamos, nos informamos e nos relacionamos. Se, por um lado, oferecem conexão e acesso a informação, por outro, trazem desafios que precisam ser discutidos com seriedade.

Inicialmente, é inegável o benefício das redes sociais para a comunicação. Elas aproximam pessoas, permitem o compartilhamento de ideias e impulsionam causas importantes. Movimentos sociais ganharam força graças à mobilização digital.

Entretanto, o uso excessivo e não crítico pode ser prejudicial. O cyberbullying, a disseminação de notícias falsas e a comparação constante com vidas perfeitas que não existem têm afetado a saúde mental de milhões de jovens.

Além disso, a privacidade é uma questão preocupante. Dados pessoais são coletados e utilizados por empresas, muitas vezes sem o devido consentimento. A educação digital, portanto, torna-se urgente.

Conclui-se que as redes sociais são ferramentas poderosas que exigem uso consciente. A escola, a família e o Estado devem atuar juntos para formar cidadãos digitais responsáveis.`
    },
    {
        id: 11,
        genero: "Narrativa",
        titulo: "A Viagem de Formatura",
        resumo: "Uma história sobre o fim de um ciclo e o início de outro.",
        data: "Dezembro de 2024",
        texto: `A viagem de formatura do terceiro ano foi o presente que todos esperávamos. Meses de economia, planejamento e ansiedade culminaram naqueles cinco dias que se tornariam inesquecíveis.

O destino era uma praia no litoral. Chegamos ao hotel na sexta-feira, e a energia era contagiante. Quarenta alunos, todos com a mesma vontade: aproveitar cada segundo.

Os dias passaram como um sopro. Dias de sol, jogos na areia, mergulhos no mar e noites de conversa até tarde. Foi naquela viagem que descobri o quanto nossos laços eram fortes.

Na última noite, fizemos uma fogueira na praia. Cada um falou algo sobre o que a escola significou. Houve risos, lágrimas e abraços. Percebemos que estávamos encerrando um capítulo e, ao mesmo tempo, começando outro.

A viagem de formatura não foi apenas uma viagem. Foi um ritual de passagem, um momento de celebrar a amizade e de agradecer por tudo o que vivemos.`
    },
    {
        id: 12,
        genero: "Carta",
        titulo: "Carta à Minha Escola",
        resumo: "Uma despedida em forma de carta, agradecendo por tudo.",
        data: "Dezembro de 2024",
        texto: `Querida escola,

Hoje é meu último dia aqui. Parece que foi ontem que entrei pela primeira vez, pequeno e assustado, segurando a mão da minha mãe. O tempo passou tão rápido que nem percebi.

Você me viu crescer. Viu meus primeiros passos, minhas primeiras notas, minhas primeiras decepções. Viu meus erros e meus acertos. Viu tudo.

Quero te agradecer pelos professores que me inspiraram, pelos amigos que me acompanharam, pelos funcionários que sempre tinham um sorriso para dar. Agradeço pelos corredores que me viram correr, pelas salas que me viram aprender, pelo pátio que me viu brincar.

Levo comigo não só o conhecimento, mas os valores. Aprendi sobre respeito, empatia, resiliência. Aprendi que aprender é um ato de coragem.

Agora sigo em frente, mas levo você comigo. No meu coração, na minha história, na minha formação.

Com gratidão,
Seu aluno.`
    },
    {
        id: 13,
        genero: "Narrativa",
        titulo: "O Trabalho em Grupo que Deu Errado",
        resumo: "Uma história sobre superação e amadurecimento em meio ao caos.",
        data: "Abril de 2024",
        texto: `No terceiro ano, um trabalho de biologia quase virou um drama. O grupo era de cinco pessoas, e as ideias eram completamente diferentes. Enquanto uns queriam fazer uma maquete, outros queriam um vídeo. As reuniões viravam discussões.

A uma semana da entrega, o grupo estava dividido, e ninguém tinha avançado. Foi quando percebi que precisávamos de liderança. Me ofereci para mediar a conversa.

— Vamos pensar no que é viável — sugeri — e cada um fica com uma parte.

Aos poucos, as coisas se ajeitaram. Cada um se comprometeu com uma tarefa, e eu fiquei responsável por integrar tudo. Trabalhei dia e noite, mas o esforço valeu a pena.

No dia da apresentação, o resultado foi incrível. A professora elogiou a organização e a criatividade. Mais do que a nota, o que ficou foi a lição: um grupo unido pode superar qualquer diferença.

Aquele trabalho me ensinou sobre liderança, empatia e resiliência. A vida real é feita de trabalhos em grupo, e é preciso aprender a conviver com as diferenças.`
    },
    {
        id: 14,
        genero: "Dissertativo-Argumentativo",
        titulo: "O Combate ao Bullying nas Escolas",
        resumo: "Reflexão sobre a violência escolar e a importância da empatia.",
        data: "Março de 2024",
        texto: `O bullying é uma realidade presente em muitas escolas brasileiras, e seus impactos vão muito além do ambiente escolar. Ele afeta a autoestima, o desempenho acadêmico e a saúde mental das vítimas, podendo deixar sequelas duradouras.

Para combater essa violência, é essencial entender suas causas. O bullying, muitas vezes, é fruto de problemas familiares, insegurança e falta de empatia. Os agressores, em geral, reproduzem comportamentos que vivenciam ou buscam aceitação em grupos.

A escola desempenha papel fundamental na prevenção. Criação de espaços de diálogo, programas de mediação de conflitos e abordagens que valorizem a diversidade são estratégias eficazes. Mas não basta punir: é preciso educar para a empatia.

A família também tem responsabilidade. Pais atentos, que conversam com os filhos e os ensinam a respeitar as diferenças, contribuem para a formação de cidadãos conscientes.

O combate ao bullying é uma luta de todos. Uma escola sem violência é uma escola mais justa, mais humana e mais preparada para formar cidadãos.`
    },
    {
        id: 15,
        genero: "Narrativa",
        titulo: "O Último Dia de Aula",
        resumo: "Um relato emocionante sobre a despedida do Ensino Médio.",
        data: "Dezembro de 2025",
        texto: `O último dia de aula não foi como os outros. Não houve sinos, não houve chamada, não houve tarefas. Houve abraços, sorrisos, lágrimas.

Cheguei à escola cedo, querendo aproveitar cada minuto. O portão que sempre cruzava apressado agora parecia merecer uma pausa. As árvores do pátio, que nunca notei, estavam mais bonitas.

A sala de aula virou palco de memórias. O quadro, que tanto nos ensinou, agora tinha uma última mensagem: "Sempre fomos mais do que alunos. Fomos uma família."

Cada palavra dos professores soou diferente. Não era mais sobre matéria, era sobre vida. As despedidas aos amigos, aos funcionários, à escola inteira. Houve quem chorasse, houve quem risse. Eu fiz um pouco dos dois.

Ao final do dia, ainda no pátio, olhei para trás. Vi minha história inteira ali. Os dias bons, os dias ruins, os dias comuns. E chorei.

O último dia de aula não foi um ponto final. Foi uma reticência. Porque a escola termina, mas as memórias e as amizades ficam. Para sempre.`
    }
];

/* ============================================================
   PRELOADER
============================================================ */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
    }, 1200);
});

/* ============================================================
   CURSOR PERSONALIZADO (desktop)
============================================================ */
const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".custom-cursor-dot");

if (window.matchMedia("(min-width: 1024px)").matches) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, .redacao-card, .timeline-card, .polaroid").forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
}

/* ============================================================
   HEADER SCROLL
============================================================ */
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 50);
    backToTop.classList.toggle("visible", y > 500);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   MENU MOBILE
============================================================ */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("open");
        navLinks.classList.remove("open");
    });
});

/* ============================================================
   TEMA ESCURO / CLARO
============================================================ */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    themeToggle.innerHTML = savedTheme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.innerHTML = next === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

/* ============================================================
   ANIMAÇÃO AO SCROLL (IntersectionObserver)
============================================================ */
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
);

document.querySelectorAll("[data-anim], .redacao-card").forEach((el) => {
    observer.observe(el);
});

/* ============================================================
   RENDERIZAR REDAÇÕES
============================================================ */
const redacoesGrid = document.getElementById("redacoesGrid");

function renderRedacoes(filter = "todos") {
    redacoesGrid.innerHTML = "";

    const lista = filter === "todos"
        ? redacoes
        : redacoes.filter((r) => r.genero === filter);

    lista.forEach((redacao, index) => {
        const card = document.createElement("article");
        card.className = "redacao-card";
        card.style.transitionDelay = `${index * 0.05}s`;
        card.setAttribute("data-id", redacao.id);
        card.innerHTML = `
            <span class="card-number">${String(redacao.id).padStart(2, "0")}</span>
            <span class="card-genero">${redacao.genero}</span>
            <h3 class="card-titulo">${redacao.titulo}</h3>
            <p class="card-resumo">${redacao.resumo}</p>
            <span class="card-action">
                Ler redação <i class="fas fa-arrow-right"></i>
            </span>
        `;
        card.addEventListener("click", () => abrirModal(redacao.id));
        redacoesGrid.appendChild(card);
        observer.observe(card);
    });
}

/* ============================================================
   FILTROS
============================================================ */
document.querySelectorAll(".filtro").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filtro").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderRedacoes(btn.dataset.filter);
    });
});

/* ============================================================
   MODAL DE REDAÇÃO
============================================================ */
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalBadge = document.getElementById("modalBadge");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const modalCounter = document.getElementById("modalCounter");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let redacaoAtual = 0;

function abrirModal(id) {
    redacaoAtual = redacoes.findIndex((r) => r.id === id);
    renderModal();
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

function renderModal() {
    const r = redacoes[redacaoAtual];
    modalBadge.textContent = r.genero;
    modalTitle.textContent = r.titulo;
    modalMeta.textContent = `${r.genero} • ${r.data}`;
    modalBody.innerHTML = r.texto
        .split("\n\n")
        .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
        .join("");
    modalCounter.textContent = `${redacaoAtual + 1} / ${redacoes.length}`;
    modalBody.scrollTop = 0;
    modalPrev.disabled = redacaoAtual === 0;
    modalNext.disabled = redacaoAtual === redacoes.length - 1;
    modalPrev.style.opacity = redacaoAtual === 0 ? 0.4 : 1;
    modalNext.style.opacity = redacaoAtual === redacoes.length - 1 ? 0.4 : 1;
}

modalClose.addEventListener("click", fecharModal);
modal.querySelector("[data-close]").addEventListener("click", fecharModal);
modalPrev.addEventListener("click", () => {
    if (redacaoAtual > 0) {
        redacaoAtual--;
        renderModal();
    }
});
modalNext.addEventListener("click", () => {
    if (redacaoAtual < redacoes.length - 1) {
        redacaoAtual++;
        renderModal();
    }
});

document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") fecharModal();
    if (e.key === "ArrowLeft" && redacaoAtual > 0) {
        redacaoAtual--;
        renderModal();
    }
    if (e.key === "ArrowRight" && redacaoAtual < redacoes.length - 1) {
        redacaoAtual++;
        renderModal();
    }
});

/* ============================================================
   INICIALIZAÇÃO
============================================================ */
renderRedacoes("todos");