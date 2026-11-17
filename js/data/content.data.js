/**
 * Conteúdo Editorial, Textos Históricos, Estatísticas e Metadados de Navegação
 * Centraliza os dados estáticos das 4 abas SPA para manter o index.html enxuto e escalável.
 */

const SITE_CONTENT = {
  pages: {
    default: {
      title: "Beneath the Boardwalk (2004) | Arctic Monkeys — Início"
    },
    faixas: {
      title: "As 18 Faixas (MP3) | Beneath the Boardwalk (2004)"
    },
    comparativo: {
      title: "Letras & Comparativo (Demo vs. Estúdio) | Beneath the Boardwalk"
    },
    historia: {
      title: "A História (2004) | Beneath the Boardwalk — Sheffield"
    }
  },

  hero: {
    eyebrowTag: "DEMOS ORIGINAIS • 2004",
    eyebrowMeta: "2FLY STUDIOS • REMASTER 2023",
    titlePrefix: "BENEATH THE",
    titleHighlight: "BOARDWALK",
    leadHtml:
      "Antes de quebrarem todos os recordes no Reino Unido, quatro adolescentes de High Green, Sheffield, gravaram 18 faixas cruas, queimaram em CD-Rs caseiros e distribuíram de graça na saída dos shows. Ouça a coletânea completa na ordem clássica, compare as letras originais censuradas e descubra as <strong>7 músicas que nunca saíram em nenhum álbum oficial</strong>.",
    coverImage: "img/capa-quadrada.jpg",
    coverAlt: "Capa Beneath the Boardwalk - Arctic Monkeys",
    cdrDisc: {
      top: "ARCTIC MONKEYS",
      sub: "Demos '04 (The Boardwalk)",
      note: "18 Tracks • Free CD-R"
    },
    stats: [
      { value: "18", label: "Faixas em MP3" },
      { value: "07", label: "Inéditas em Estúdio" },
      { value: "52:03", label: "Duração Total" },
      { value: "2004", label: "Sheffield, UK" }
    ],
    quickCards: [
      {
        icon: "fa-solid fa-headphones",
        title: "Tracklist Completa (18 MP3s)",
        description:
          "Ouça todas as 18 gravações remasterizadas por Hollie Taylor a partir das fitas/CD-Rs de 2004, filtre pelas 7 músicas inéditas e baixe qualquer faixa individualmente.",
        targetNav: "faixas",
        ctaLabel: "Abrir As 18 Faixas"
      },
      {
        icon: "fa-solid fa-code-compare",
        title: "Demo 2004 vs. Estúdio 2006",
        description:
          "Descubra o final trágico removido de <em>Riot Van</em>, os versos explícitos originais de <em>Cigarette Smoke</em> e a levada ska de <em>Mardy Bum</em>.",
        targetNav: "comparativo",
        ctaLabel: "Ver Letras & Comparativo"
      },
      {
        icon: "fa-solid fa-timeline",
        title: "The Boardwalk & Mark Bull",
        description:
          "A linha do tempo completa de como os CDs distribuídos de graça nos shows em Sheffield criaram uma revolução na internet antes da Domino Records.",
        targetNav: "historia",
        ctaLabel: "Ler A História"
      }
    ]
  },

  tracksSection: {
    kicker: "REPERTÓRIO COMPLETO • 18 FAIXAS",
    title: "Tracklist Oficial do CD-R (2004)",
    subtitleHtml:
      "Clique em qualquer faixa para reproduzir imediatamente, baixar o arquivo <code>.mp3</code> ou abrir a análise lírica na aba de comparativo.",
    filters: [
      { id: "all", label: "Todas", count: 18 },
      { id: "exclusive", label: "Exclusivas da Demo (Inéditas)", count: 7 },
      { id: "album", label: "Foram para o 1º Álbum", count: 8 },
      { id: "bside", label: "B-Sides & EPs", count: 3 }
    ]
  },

  comparisonSection: {
    kicker: "ANÁLISE FAIXA A FAIXA • 2FLY STUDIOS VS. DOMINO RECORDS",
    title: "Letras Originais & Comparativo de Versões",
    shortcuts: [
      { trackId: 10, label: "🔥 #10 Riot Van (Final Trágico)" },
      { trackId: 4, label: "🚬 #04 Cigarette Smoke (Letra Explícita)" },
      { trackId: 11, label: "🌅 #11 Scummy (When the Sun Goes Down)" },
      { trackId: 8, label: "🎹 #08 Mardy Bum (Versão Ska)" },
      { trackId: 13, label: "🚌 #13 Wavin' Bye (Inédita)" }
    ]
  },

  historySection: {
    kicker: "DOCUMENTÁRIO & CONTEXTO HISTÓRICO",
    title: "Como um CD-R Caseiro Mudou a Música Britânica",
    subtitleHtml:
      "<em>Beneath the Boardwalk</em> nunca foi vendido em lojas, mas transformou o Arctic Monkeys na maior banda da geração da internet antes mesmo de assinarem contrato.",
    factSheet: {
      title: "Ficha Histórica",
      location: "Sheffield, South Yorkshire",
      descriptionHtml:
        "Gravado principalmente no <strong>2Fly Studios</strong> com produção de Alan Smyth e compilado pelo fotógrafo e amigo da banda <strong>Mark Bull (\"The Sheriff\")</strong> no final de 2004.",
      members: [
        { name: "Alex Turner", icon: "fa-solid fa-microphone-lines text-warning" },
        { name: "Jamie Cook", icon: "fa-solid fa-guitar text-warning" },
        { name: "Andy Nicholson", icon: "fa-solid fa-guitar text-info" },
        { name: "Matt Helders", icon: "fa-solid fa-drum text-danger" }
      ]
    },
    timeline: [
      {
        step: "CAPÍTULO 01 • 2003–2004",
        title: "O Porão do 2Fly Studios e os CDs de Graça",
        paragraphsHtml: [
          "Formado em High Green (subúrbio de Sheffield) por <strong>Alex Turner</strong>, <strong>Jamie Cook</strong>, <strong>Andy Nicholson</strong> e <strong>Matt Helders</strong>, o Arctic Monkeys começou a gravar suas primeiras demos no modesto <strong>2Fly Studios</strong> com o produtor local Alan Smyth.",
          "Sem gravadora nem dinheiro para prensagens profissionais, a banda comprava tubos de CDs virgens (CD-Rs), gravava algumas faixas em casa e entregava <strong>gratuitamente</strong> para qualquer pessoa que fosse assisti-los tocar em pubs pequenos como o <em>The Grapes</em>."
        ]
      },
      {
        step: "CAPÍTULO 02 • O CLUBE LENDÁRIO",
        title: "Por que se chama \"Beneath the Boardwalk\"?",
        paragraphsHtml: [
          "<strong>The Boardwalk</strong> era uma tradicional casa de shows em Snig Hill, no centro de Sheffield, onde o Arctic Monkeys fez apresentações decisivas no início da carreira — e onde <strong>Alex Turner trabalhava atrás do bar</strong> recolhendo copos para pagar as contas.",
          "Quando os primeiros fãs começaram a reunir todas as demos espalhadas em diferentes CD-Rs num único pacote digital, batizaram a coletânea de <em>\"Beneath the Boardwalk\"</em> (Sob o Boardwalk) em homenagem ao ponto de encontro da cena local."
        ]
      },
      {
        step: "CAPÍTULO 03 • \"THE SHERIFF\"",
        title: "Mark Bull e a Explosão no MySpace",
        paragraphsHtml: [
          "O fotógrafo amador e amigo da banda <strong>Mark Bull</strong> (apelidado de <em>\"The Sheriff\"</em>) filmava os primeiros shows e dirigiu o primeiro clipe caseiro de <em>\"Fake Tales of San Francisco\"</em>. Para ajudar a divulgar o grupo, Bull hospedou todas as demos do 2Fly Studios para download gratuito em seu site pessoal.",
          "Em poucos meses, os arquivos se espalharam por fóruns, MSN Messenger, Soulseek, LimeWire e por uma página no <strong>MySpace</strong> criada pelos próprios fãs — sem que a banda sequer soubesse quem havia criado o perfil!"
        ]
      },
      {
        step: "CAPÍTULO 04 • O LEGADO E O REMASTER DE 2023",
        title: "Shows Lotados Antes do Primeiro Contrato",
        paragraphsHtml: [
          "Quando o Arctic Monkeys saía de Sheffield para tocar pela primeira vez em Londres, Manchester ou Glasgow no final de 2004, o público já sabia cantar cada palavra de <em>\"Scummy\"</em>, <em>\"Mardy Bum\"</em> e <em>\"A Certain Romance\"</em>.",
          "Das 18 faixas clássicas do <em>Beneath the Boardwalk</em>, 8 formaram a espinha dorsal do álbum de estreia mais vendido da história do Reino Unido (<em>Whatever People Say I Am, That's What I'm Not</em>, 2006), 3 viraram B-sides lendárias e <strong>7 permaneceram exclusivas para sempre nesta coletânea</strong>."
        ]
      }
    ],
    genealogy: [
      {
        title: "💿 Foram para o 1º Álbum (8)",
        tracks:
          "A Certain Romance • Dancing Shoes • Fake Tales of San Francisco • Mardy Bum • Riot Van (reescrita) • Scummy (When the Sun Goes Down) • Still Take You Home • Bet You Look Good on the Dancefloor"
      },
      {
        title: "🎚️ Viraram B-Sides / EPs (3)",
        tracks:
          "Bigger Boys and Stolen Sweethearts • Cigarette Smoke (reescrita como Cigarette Smoker Fiona) • Stickin' to the Floor"
      },
      {
        title: "🔥 Exclusivas do Boardwalk (7)",
        tracks:
          "Choo Choo • Knock a Door Run • On the Run From the MI5 • Wavin' Bye to the Train or the Bus • Space Invaders • Curtains Closed • Ravey Ravey Ravey Club (live)"
      }
    ]
  }
};
