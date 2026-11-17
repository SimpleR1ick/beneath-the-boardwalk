// Dados completos das 18 faixas de "Beneath the Boardwalk" (Arctic Monkeys, 2004 / 2023 Remaster)
// Timestamps exatos extraídos da descrição do vídeo "Arctic Monkeys: Beneath the Boardwalk (2023 Remaster)"
// (https://www.youtube.com/watch?v=OqhLafny2Tc - Remasterizado por Hollie Taylor)

const YOUTUBE_REMASTER_VIDEO_ID = "OqhLafny2Tc";
const YOUTUBE_PLAYLIST_ID = "PLuq0qv2jY_zu9JrO9xyO8quQbHO66gPMt";

const BOARDWALK_TRACKS = [
  {
    id: 1,
    number: "01",
    title: "A Certain Romance",
    originalTitle: "A Certain Romance",
    startTimestamp: "0:00",
    endTimestamp: "5:21",
    startSeconds: 0,
    endSeconds: 321,
    duration: "5:21",
    durationSeconds: 321,
    audioSrc: "audio/01-a-certain-romance.mp3",
    keywords: ["certain romance", "01", "romance"],
    category: "album",
    categoryLabel: "Lançada no 1º Álbum (2006)",
    officialRelease: "Whatever People Say I Am, That's What I'm Not (Faixa 13)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "O épico de encerramento do álbum de estreia já nascia quase completo nesta demo, mas com uma introdução mais crua e guitarras ainda mais estridentes.",
    demoKarakter: "Andamento ligeiramente mais urgente na seção central, bateria menos comprimida e vocais de Alex Turner com forte sotaque de Sheffield e menos reverberação.",
    studioKarakter: "Produzida por Jim Abbiss em 2005: baixo de Andy Nicholson ganha muito mais peso, bateria de Matt Helders soa explosiva na introdução e o solo final tem timbres mais encorpados.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 0:00 até 5:21.",
      "Na demo, a transição para o riff final pós-pausa tem um timbre de guitarra mais seco e 'garagista'.",
      "Considerada a música que definiu a crônica social da juventude inglesa dos anos 2000 ('Reeboks classics', 'tracky bottoms tucked in socks')."
    ],
    lyricsExcerpt: `Well, oh, they might wear classic Reeboks
Or knackered Converse
Or tracky bottoms tucked in socks
But all of that's what the point is not
The point's that there ain't no romance around there...

And yeah, I'd love to tell you all my problem
You're not from New York City, you're from Rotherham
So get off the bandwagon, and put down the handbook
Yeah, yeah, yeah, yeah, yeah...`,
    lyricsNote: "Timestamp no Remaster: 0:00 – 5:21. Letra idêntica na estrutura principal, com pequenas variações de entonação."
  },
  {
    id: 2,
    number: "02",
    title: "Bigger Boys and Stolen Sweethearts",
    originalTitle: "Bigger Boys and Stolen Sweethearts",
    startTimestamp: "5:21",
    endTimestamp: "8:12",
    startSeconds: 321,
    endSeconds: 492,
    duration: "2:51",
    durationSeconds: 171,
    audioSrc: "audio/02-bigger-boys-and-stolen-sweethearts.mp3",
    keywords: ["bigger boys", "stolen sweethearts", "02"],
    category: "bside",
    categoryLabel: "Lançada como B-Side (2005)",
    officialRelease: "B-side do single 'I Bet You Look Good on the Dancefloor'",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Uma das favoritas absolutas dos fãs: um retrato ácido e bem-humorado da inveja adolescente na saída da escola.",
    demoKarakter: "A versão do Beneath the Boardwalk é praticamente a mesma gravação que acabou sendo usada como B-side oficial, com vocais duplos de Alex e Matt Helders no refrão.",
    studioKarakter: "Recebeu apenas uma masterização mais limpa para o lançamento no single 'I Bet You Look Good on the Dancefloor' em outubro de 2005.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 5:21 até 8:12.",
      "Tornou-se um clássico cult que muitos fãs acham que deveria estar no álbum principal.",
      "Mudança brusca de ritmo no meio da faixa ('Cause she's not nice, she's pretty fucking far from nice')."
    ],
    lyricsExcerpt: `There's always somebody taller
With more of a wit
And he's equipped to enthrall her
And her friends think he's fit
And you just can't measure up
No, you don't have a prayer
Wishing that you'd made the most of her
When she was there...

Wait there, 'cause she's not nice
She's pretty fucking far from nice
She's looking at you funny
Rarely looking at you twice...`,
    lyricsNote: "Timestamp no Remaster: 5:21 – 8:12. A versão da demo já traz toda a letra definitiva que saiu no single de 2005."
  },
  {
    id: 3,
    number: "03",
    title: "Choo Choo",
    originalTitle: "Choo Choo",
    startTimestamp: "8:12",
    endTimestamp: "11:21",
    startSeconds: 492,
    endSeconds: 681,
    duration: "3:09",
    durationSeconds: 189,
    audioSrc: "audio/03-choo-choo.mp3",
    keywords: ["choo choo", "03", "choo"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Nunca Lançada)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Uma joia energética e bem-humorada da fase embrionária da banda que nunca chegou a nenhum álbum ou single comercial.",
    demoKarakter: "Riff contagiante de guitarra limpa estilo The Libertines/The Strokes, andamento acelerado e Alex cantando de forma quase teatral e debochada.",
    studioKarakter: "Nunca regravada em estúdio comercial. Foi aposentada dos setlists ao vivo já no início de 2005 conforme o repertório do primeiro disco amadureceu.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 8:12 até 11:21.",
      "Exclusiva do Beneath the Boardwalk — nunca teve lançamento pela Domino Records.",
      "Riff principal extremamente dançante e refrão chiclete ('Well I say choo choo!')."
    ],
    lyricsExcerpt: `Well I say choo choo, baby
Hop on board the rhythm train
Yeah I say choo choo, baby
Let me take you away from the rain...

Talk to me, tell me what's on your mind
Or don't talk at all if you're not that inclined
Just give us a smile and a nod of the head
And remember the things that you wish you'd not said...`,
    lyricsNote: "Timestamp no Remaster: 8:12 – 11:21. Faixa inédita em lançamentos oficiais; sobreviveu graças aos CD-Rs distribuídos em Sheffield."
  },
  {
    id: 4,
    number: "04",
    title: "Cigarette Smoke",
    originalTitle: "Cigarette Smoker Fiona (título posterior)",
    startTimestamp: "11:21",
    endTimestamp: "14:17",
    startSeconds: 681,
    endSeconds: 857,
    duration: "2:56",
    durationSeconds: 176,
    audioSrc: "audio/04-cigarette-smoke.mp3",
    keywords: ["cigarette smoke", "fiona", "04", "cigarette"],
    category: "bside",
    categoryLabel: "Reescrita em EP (2006)",
    officialRelease: "Reescrita como 'Cigarette Smoker Fiona' no EP Who the Fuck Are Arctic Monkeys?",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Uma das faixas que mais mudou! Na demo original, a letra é muito mais explícita, suja e agressiva do que na versão oficial lançada em 2006.",
    demoKarakter: "Versos abertamente mais pesados ('Smoking tabs and sniffing lines', referências diretas a drogas e prostituição) e andamento punk frenético.",
    studioKarakter: "Em 2006, foi rebatizada para 'Cigarette Smoker Fiona' e teve versos inteiros reescritos para focar em uma garota mimada em uma festa na piscina.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 11:21 até 14:17.",
      "Mudança radical na letra: a demo fala em 'sniffing lines' e 'dirty little Herbert', enquanto a versão de estúdio mudou para 'Cigarette smoker, I'm sorry to say...'.",
      "O título original na demo era apenas 'Cigarette Smoke' (sem 'Fiona')."
    ],
    lyricsExcerpt: `[Versão Demo Original - 2004]
Cigarette smoke, why do you mystify?
Why do you sting my eyes?
Smoking tabs and sniffing lines
Out with the dirty little Herberts all night...

[Versão Oficial - Cigarette Smoker Fiona, 2006]
Comprehending how she's reached the dizzy heights
Looking at her parents, well it's really not a shock...
Cigarette smoker, I'm sorry to say
Looks like you've been led astray...`,
    lyricsNote: "Timestamp no Remaster: 11:21 – 14:17. Uma das maiores transformações líricas entre a demo de 2004 e o catálogo oficial."
  },
  {
    id: 5,
    number: "05",
    title: "Dancing Shoes",
    originalTitle: "Dancin' Shoes",
    startTimestamp: "14:17",
    endTimestamp: "16:40",
    startSeconds: 857,
    endSeconds: 1000,
    duration: "2:23",
    durationSeconds: 143,
    audioSrc: "audio/05-dancin-shoes.mp3",
    keywords: ["dancin shoes", "dancing shoes", "05", "shoes"],
    category: "album",
    categoryLabel: "Lançada no 1º Álbum (2006)",
    officialRelease: "Whatever People Say I Am, That's What I'm Not (Faixa 5)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Retrato irônico da caça noturna nas pistas de dança, com uma ponte instrumental e timbres mais secos na versão original.",
    demoKarakter: "Grafada como 'Dancin' Shoes' nos arquivos originais. Possui alguns segundos a mais na ponte instrumental e um timbre de guitarra mais cortante.",
    studioKarakter: "Mais curta e direta (2:21), com bateria mais seca e o famoso diálogo de guitarras entre Alex Turner e Jamie Cook muito mais definido.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 14:17 até 16:40.",
      "Na demo, o final se estende um pouco mais e o vocal de Alex no refrão ('Get on your dancing shoes') é mais gritado.",
      "Pequenas diferenças nas viradas de bateria de Matt Helders antes do segundo verso."
    ],
    lyricsExcerpt: `Get on your dancing shoes
You sexy little swine
Looking for a new place to start
Someone you don't even know the name of...

Oh, the lights are blinding me
And I can't see what I want to see
So won't you come and dance with me?`,
    lyricsNote: "Timestamp no Remaster: 14:17 – 16:40. Estrutura lírica quase idêntica, mas com entrega vocal mais crua e espontânea."
  },
  {
    id: 6,
    number: "06",
    title: "Fake Tales of San Francisco",
    originalTitle: "Fake Tales of San Francisco",
    startTimestamp: "16:40",
    endTimestamp: "19:41",
    startSeconds: 1000,
    endSeconds: 1181,
    duration: "3:01",
    durationSeconds: 181,
    audioSrc: "audio/06-fake-tales-of-san-francisco.mp3",
    keywords: ["fake tales", "san francisco", "06", "rotherham"],
    category: "album",
    categoryLabel: "Lançada no 1º Álbum (2006)",
    officialRelease: "EP Five Minutes with Arctic Monkeys (2005) & WPSIATWIN (Faixa 3)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "A faixa que lançou a banda ao estrelato underground: teve o primeiro videoclipe amador editado por Mark Bull com imagens dos shows em 2004.",
    demoKarakter: "A explosão final ('He talks of San Francisco, he's from Hunter's Bar') já tem toda a fúria característica, porém com mixagem bem mais crua e vocal seco.",
    studioKarakter: "Lançada primeiro no raro EP 'Five Minutes with Arctic Monkeys' (maio de 2005) e depois regravada para o álbum de estreia com guitarras mais preenchidas.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 16:40 até 19:41.",
      "Referência local icônica a 'Hunter's Bar' (bairro de Sheffield) e 'Rotherham'.",
      "Mark Bull usou justamente esta gravação da demo para montar o primeiro clipe não-oficial da banda."
    ],
    lyricsExcerpt: `Fake tales of San Francisco
Echo through the room
More point to a wedding disco
Without a bride or groom...

He talks of San Francisco, he's from Hunter's Bar
I don't quite know the distance
But I'm sure that's far
Yeah, I'm sure that's pretty far!

And yeah, I'd love to tell you all my problem
You're not from New York City, you're from Rotherham!`,
    lyricsNote: "Timestamp no Remaster: 16:40 – 19:41. O grito de guerra de Sheffield que ridicularizava bandas locais que fingiam ser americanas."
  },
  {
    id: 7,
    number: "07",
    title: "Knock a Door Run",
    originalTitle: "Knock a Door Run",
    startTimestamp: "19:41",
    endTimestamp: "24:04",
    startSeconds: 1181,
    endSeconds: 1444,
    duration: "4:23",
    durationSeconds: 263,
    audioSrc: "audio/07-knock-a-door-run.mp3",
    keywords: ["knock a door run", "07", "knock"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Nunca Lançada)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Uma das faixas mais longas e atmosféricas da coletânea, batizada com a gíria do norte da Inglaterra para a brincadeira de tocar a campainha e sair correndo.",
    demoKarakter: "Mais de 4 minutos de duração, com linhas de baixo melódicas de Andy Nicholson, mudanças de dinâmica e uma crítica precoce ao sensacionalismo e aparências.",
    studioKarakter: "Nunca regravada. Permanece como um documento raro do lado mais cadenciado e experimental do quarteto em 2004.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 19:41 até 24:04.",
      "Segunda faixa mais longa de todo o Beneath the Boardwalk (atrás apenas de 'A Certain Romance').",
      "Destaque para a linha de baixo proeminente que conduz toda a música."
    ],
    lyricsExcerpt: `It's like playing knock a door run
Yeah, you're only doing it for fun
And when they open up the door
You're already halfway down the street...

Well they all want a piece of the action
Looking for a cheap reaction
Talking like they know the score
When they don't know nothing at all...`,
    lyricsNote: "Timestamp no Remaster: 19:41 – 24:04. Inédita comercialmente; muito elogiada pelos fãs pela construção instrumental longa."
  },
  {
    id: 8,
    number: "08",
    title: "Mardy Bum",
    originalTitle: "Mardy Bum",
    startTimestamp: "24:04",
    endTimestamp: "26:55",
    startSeconds: 1444,
    endSeconds: 1615,
    duration: "2:51",
    durationSeconds: 171,
    audioSrc: "audio/08-mardy-bum.mp3",
    keywords: ["mardy bum", "08", "mardy"],
    category: "album",
    categoryLabel: "Lançada no 1º Álbum (2006)",
    officialRelease: "Whatever People Say I Am, That's What I'm Not (Faixa 9)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Na demo de 2004, 'Mardy Bum' tinha uma levada quase ska/upbeat e um timbre de órgão/teclado sutil que dá um charme único à gravação original!",
    demoKarakter: "Guitarra rítmica com levada sincopada (quase ska nos versos), andamento ligeiramente mais saltitante e timbre lo-fi encantador.",
    studioKarakter: "No álbum de 2006, o arranjo ficou mais limpo, pop-indie clássico, removendo a batida ska acentuada dos versos para focar na doçura melódica.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 24:04 até 26:55.",
      "A levada de guitarra nos versos da demo tem um swing ska/reggae bem mais perceptível do que na versão do álbum!",
      "'Mardy' é uma gíria típica de Sheffield/Yorkshire para alguém emburrado, mal-humorado ou mimado."
    ],
    lyricsExcerpt: `Now then Mardy Bum
I've seen your frown and it's like looking down
The barrel of a gun
And it goes off
And out come all these words
Oh there's a very pleasant side to you
A side I much prefer...

Laughing and joking around
Remember cuddles in the kitchen
Yeah, to get things off the ground
And it was up, up and away...`,
    lyricsNote: "Timestamp no Remaster: 24:04 – 26:55. Ouça com atenção a guitarra rítmica nos versos da demo: é uma das diferenças mais charmosas da coletânea."
  },
  {
    id: 9,
    number: "09",
    title: "On the Run From the MI5",
    originalTitle: "On the Run From the MI5",
    startTimestamp: "26:55",
    endTimestamp: "28:40",
    startSeconds: 1615,
    endSeconds: 1720,
    duration: "1:45",
    durationSeconds: 105,
    audioSrc: "audio/09-on-the-run-from-the-mi5.mp3",
    keywords: ["mi5", "on the run", "09"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Nunca Lançada)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "A faixa mais curta da coletânea (1m45s): uma vinheta punk-dub paranoica e divertida sobre fugir do serviço secreto britânico.",
    demoKarakter: "Crua, curtíssima, quase um esboço de estúdio guiado pelo baixo e por uma narrativa cômica de paranoia após uma noitada.",
    studioKarakter: "Nunca foi regravada para lançamento oficial, tornando-se uma das curiosidades mais queridas do Beneath the Boardwalk.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 26:55 até 28:40.",
      "Apenas 1 minuto e 45 segundos de duração.",
      "Forte influência de The Clash e The Specials na levada de baixo e guitarra."
    ],
    lyricsExcerpt: `I'm on the run from the MI5
Just trying to keep myself alive
Hiding out behind the blinds
Watching the street for any signs...

They're tapping the phone, they know where I've been
Greatest escape that you've ever seen...`,
    lyricsNote: "Timestamp no Remaster: 26:55 – 28:40. Faixa mais curta da coletânea e 100% exclusiva desta era."
  },
  {
    id: 10,
    number: "10",
    title: "Riot Van",
    originalTitle: "Riot Van (Versão Demo Sombria)",
    startTimestamp: "28:40",
    endTimestamp: "30:54",
    startSeconds: 1720,
    endSeconds: 1854,
    duration: "2:14",
    durationSeconds: 134,
    audioSrc: "audio/10-riot-van.mp3",
    keywords: ["riot van", "10", "riot"],
    category: "album",
    categoryLabel: "Letra Totalmente Diferente no Álbum",
    officialRelease: "Reescrita em Whatever People Say I Am, That's What I'm Not (Faixa 6)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "A diferença mais chocante de toda a coletânea: enquanto a versão do álbum é nostálgica e leve, a demo de 'Riot Van' conta uma história trágica e fatal.",
    demoKarakter: "Na demo, a letra narra jovens que fumam um bong, roubam um celular e um carro com um farol quebrado, sofrendo um acidente fatal onde a brigada de incêndio chega tarde demais.",
    studioKarakter: "Para o álbum de 2006, Alex Turner manteve a melodia e o refrão inicial, mas reescreveu os versos para tratar apenas de adolescentes bebendo na rua e provocando policiais.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 28:40 até 30:54.",
      "HISTÓRIA COMPLETAMENTE DIFERENTE: na demo, os personagens roubam um carro ('Pinched a car with one headlight') e morrem num acidente ('called the fire brigade / But it was already too late / And there was no arrests to make').",
      "Na versão oficial do álbum, a história termina apenas com os policiais dando uma bronca e soltando os garotos."
    ],
    lyricsExcerpt: `[LETRA EXCLUSIVA DA DEMO - 2004]
We got thrown in a riot van
And the coppers kicked him in
And there was no way he could win
Just had to take it on the chin
Smoked a bong last night
And stole somebody's telephone...

Pinched a car with one headlight
And lost control, the passengers were screaming
Made him shut his eyes right tight
And think of you, and hope that he was dreaming
Then up rolled the riot van
And called the fire brigade
But it was already too late
And there was no arrests to make...`,
    lyricsNote: "Timestamp no Remaster: 28:40 – 30:54. O final trágico da demo foi totalmente removido no álbum de 2006."
  },
  {
    id: 11,
    number: "11",
    title: "Scummy (When the sun goes down)",
    originalTitle: "When the Sun Goes Down",
    startTimestamp: "30:54",
    endTimestamp: "34:14",
    startSeconds: 1854,
    endSeconds: 2054,
    duration: "3:20",
    durationSeconds: 200,
    audioSrc: "audio/11-scummy.mp3",
    keywords: ["scummy", "when the sun goes down", "11", "sun goes down"],
    category: "album",
    categoryLabel: "Lançada como 'When the Sun Goes Down'",
    officialRelease: "Single #1 no Reino Unido & WPSIATWIN (Faixa 11)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Originalmente chamada apenas de 'Scummy', esta demo sobre a zona de prostituição em Neepsend (Sheffield) virou um dos maiores hinos da banda.",
    demoKarakter: "Introdução com guitarra limpa dedilhada (inspirada em 'Roxanne' do The Police) e explosão punk crua; Alex pronuncia cada consoante com sotaque carregado de Yorkshire.",
    studioKarakter: "Renomeada para 'When the Sun Goes Down' para evitar censura nas rádios britânicas, atingindo o 1º lugar da parada do Reino Unido em janeiro de 2006.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 30:54 até 34:14.",
      "Na época do Beneath the Boardwalk, todos os fãs conheciam a música pelo título 'Scummy'.",
      "Deu origem ao curta-metragem 'Scummy Man' (2006), estrelado por Stephen Graham."
    ],
    lyricsExcerpt: `I said, who's that girl there?
I wonder what went wrong
So that she had to roam the streets
She don't do major credit cards
I doubt she does receipts
It's all not quite legitimate...

And what a scummy man
Just give him half a chance
I bet he'll rob you if he can
Can see it in his eyes, yeah, that he's got a driving ban
Amongst some other offenses...`,
    lyricsNote: "Timestamp no Remaster: 30:54 – 34:14. A letra já estava completa na demo; apenas o título foi alterado comercialmente."
  },
  {
    id: 12,
    number: "12",
    title: "Still Take You Home",
    originalTitle: "Still Take You Home",
    startTimestamp: "34:14",
    endTimestamp: "37:20",
    startSeconds: 2054,
    endSeconds: 2240,
    duration: "3:06",
    durationSeconds: 186,
    audioSrc: "audio/12-still-take-you-home.mp3",
    keywords: ["still take you home", "12", "take you home"],
    category: "album",
    categoryLabel: "Lançada no 1º Álbum (2006)",
    officialRelease: "Whatever People Say I Am, That's What I'm Not (Faixa 7)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Co-escrita por Alex Turner e Jamie Cook, esta demo é cerca de 13 segundos mais longa que a versão do álbum e tem uma energia punk avassaladora.",
    demoKarakter: "Andamento ligeiramente diferente na introdução estendida e vocais divididos entre Alex e Jamie/Matt com um timbre de garagem sem polimento.",
    studioKarakter: "No álbum (2:53), a introdução foi enxugada para entrar direto na jugular com máxima pressão sonora.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 34:14 até 37:20.",
      "A demo tem 3:06 contra 2:53 da versão do álbum, graças a compassos instrumentais extras.",
      "Uma das poucas faixas creditadas conjuntamente a Alex Turner e Jamie Cook."
    ],
    lyricsExcerpt: `Well, it's ever so funny
'Cause I don't think you're special
I don't think you're cool
You're just probably alright
But under these lights you look beautiful...

And what do you know?
Oh, you know nothing
Yeah, automated response:
"You know nothing!"
Still take you home, yeah, I'd still take you home...`,
    lyricsNote: "Timestamp no Remaster: 34:14 – 37:20. Preserva os compassos extras da introdução tocada nos primeiros shows."
  },
  {
    id: 13,
    number: "13",
    title: "Wavin' Bye to the Train or the Bus",
    originalTitle: "Wavin' Bye to the Train or the Bus",
    startTimestamp: "37:20",
    endTimestamp: "40:22",
    startSeconds: 2240,
    endSeconds: 2422,
    duration: "3:02",
    durationSeconds: 182,
    audioSrc: "audio/13-wavin-bye-to-the-train-or-the-bus.mp3",
    keywords: ["wavin bye", "train or the bus", "13", "wavin"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Nunca Lançada)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Talvez a mais amada entre as faixas inéditas da coletânea: melancólica, irônica e brilhantemente narrativa sobre perder o transporte e a dignidade no amor.",
    demoKarakter: "Arranjo agridoce com guitarras cintilantes e uma melodia vocal nostálgica que antecipa o estilo lírico de 'Favourite Worst Nightmare' e 'Fluorescent Adolescent'.",
    studioKarakter: "Nunca lançada oficialmente, embora muitos fãs a considerem superior a várias B-sides oficiais.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 37:20 até 40:22.",
      "Faixa favorita entre colecionadores do Beneath the Boardwalk.",
      "Nunca ganhou versão de estúdio após 2004."
    ],
    lyricsExcerpt: `Wavin' bye to the train or the bus
There's no point in kickin' up a fuss
Just accept that you're gonna be late
And wait for the next one at the gate...

She's got a face like a shattered glass
And a tongue that cuts right through your past
Leaving you standing in the rain
Wavin' bye to the bus or the train...`,
    lyricsNote: "Timestamp no Remaster: 37:20 – 40:22. Uma obra-prima escondida da fase 2004 que nunca saiu em CD ou vinil oficial."
  },
  {
    id: 14,
    number: "14",
    title: "Bet You Look Good on the Dancefloor",
    originalTitle: "I Bet You Look Good on the Dancefloor",
    startTimestamp: "40:22",
    endTimestamp: "43:14",
    startSeconds: 2422,
    endSeconds: 2594,
    duration: "2:52",
    durationSeconds: 172,
    audioSrc: "audio/14-bet-you-look-good-on-the-dancefloor.mp3",
    keywords: ["bet you look good", "dancefloor", "14"],
    category: "album",
    categoryLabel: "Lançada no 1º Álbum (2006)",
    officialRelease: "1º Single Oficial pela Domino (Out/2005) & WPSIATWIN (Faixa 2)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Sem o 'I' no começo do título! A demo que fez multidões cantarem cada palavra antes mesmo da banda ter contrato com uma gravadora.",
    demoKarakter: "Listada originalmente apenas como 'Bet You Look Good on the Dancefloor'. Timbre de guitarra afiado, bateria menos polida e toda a urgência dos 18 anos.",
    studioKarakter: "Ganhou o pronome 'I' no título oficial e foi gravada ao vivo no estúdio Chapel para o single que estreou direto em #1 no Reino Unido.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 40:22 até 43:14.",
      "Título original nos CD-Rs era 'Bet You Look Good on the Dancefloor' (sem o 'I' inicial).",
      "Foi graças à circulação desta faixa na internet que o público já sabia a música inteira nos shows de 2004/2005."
    ],
    lyricsExcerpt: `Stop making the eyes at me
I'll stop making my eyes at you
What it is that surprises me
Is that I don't really want you to...

Your name isn't Rio, but I don't care for sand
And lighting the fuse might result in a bang
B-b-b-bang-go!
I bet that you look good on the dancefloor
I don't know if you're looking for romance or
I don't know what you're looking for...`,
    lyricsNote: "Timestamp no Remaster: 40:22 – 43:14. O hino definitivo do indie rock britânico dos anos 2000 em sua gravação embrionária."
  },
  {
    id: 15,
    number: "15",
    title: "Stickin' to the Floor",
    originalTitle: "Stickin' to the Floor",
    startTimestamp: "43:14",
    endTimestamp: "45:10",
    startSeconds: 2594,
    endSeconds: 2710,
    duration: "1:56",
    durationSeconds: 116,
    audioSrc: "audio/15-stickin-to-the-floor.mp3",
    keywords: ["stickin to the floor", "sticking to the floor", "15", "floor"],
    category: "bside",
    categoryLabel: "Regravada como B-Side (2006)",
    officialRelease: "B-side do single 'When the Sun Goes Down' (2006)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Quase dois minutos de puro garage-punk inspirado no chão grudento de cerveja derramada das casas de show como o The Boardwalk e o Leadmill.",
    demoKarakter: "Mais longa que a versão B-side posterior (1:56 na demo contra 1:25 no single de 2006), com mais repetições instrumentais e vocal rasgado.",
    studioKarakter: "Regravada de forma ainda mais rápida e curta (1m25s) como lado B do single 'When the Sun Goes Down'.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 43:14 até 45:10.",
      "A versão do Beneath the Boardwalk tem 1:56, enquanto a regravação oficial de 2006 foi encurtada para apenas 1:25!",
      "Retrata literalmente os tênis grudando no piso sujo dos clubes de Sheffield."
    ],
    lyricsExcerpt: `Stickin' to the floor
Yeah my shoes are stickin' to the floor
Don't wanna dance here anymore
When my shoes are stickin' to the floor...

Spilt pints and broken glass
Trying to get to the bar quite fast...`,
    lyricsNote: "Timestamp no Remaster: 43:14 – 45:10. A versão da demo tem mais de 30 segundos extras em relação ao B-side de 2006."
  },
  {
    id: 16,
    number: "16",
    title: "Space Invaders",
    originalTitle: "Space Invaders",
    startTimestamp: "45:10",
    endTimestamp: "47:50",
    startSeconds: 2710,
    endSeconds: 2870,
    duration: "2:40",
    durationSeconds: 160,
    audioSrc: "audio/16-space-invaders.mp3",
    keywords: ["space invaders", "16", "invaders"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Nunca Lançada)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Riff hipnótico com efeitos de guitarra que imitam fliperamas antigos dos anos 80, usando o jogo como metáfora para invasores de espaço pessoal nos pubs.",
    demoKarakter: "Jamie Cook usa pedais e slides agudos para simular sons de arcade 'Space Invaders', enquanto a cozinha de baixo e bateria mantém um groove pós-punk tenso.",
    studioKarakter: "Nunca lançada comercialmente. Ficou restrita às sessões de 2004.",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 45:10 até 47:50.",
      "Efeitos de guitarra criativos imitando sons de máquinas de fliperama.",
      "Excelente exemplo da influência de bandas como Gang of Four e Franz Ferdinand no som inicial do grupo."
    ],
    lyricsExcerpt: `Space invaders, coming closer every night
Underneath the neon light
You can't move left, you can't move right
Space invaders in your sight...

Put another coin inside the slot
Give it everything you've got...`,
    lyricsNote: "Timestamp no Remaster: 45:10 – 47:50. Exclusiva do Beneath the Boardwalk, famosa pelos timbres de guitarra estilo arcade."
  },
  {
    id: 17,
    number: "17",
    title: "Curtains Closed",
    originalTitle: "Curtains Close / Curtains Closed",
    startTimestamp: "47:50",
    endTimestamp: "49:59",
    startSeconds: 2870,
    endSeconds: 2999,
    duration: "2:09",
    durationSeconds: 129,
    audioSrc: "audio/17-curtains-closed.mp3",
    keywords: ["curtains closed", "curtains close", "17", "curtains"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Nunca Lançada)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "2Fly Studios, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "Faixa urgente e dramática que costumava encerrar alguns dos primeiros shows da banda em 2004, antes de 'A Certain Romance' assumir esse posto.",
    demoKarakter: "Guitarras entrelaçadas em alta velocidade e uma mudança de andamento dramática que simula o fechar das cortinas no fim da noite.",
    studioKarakter: "Nunca regravada em estúdio comercial (às vezes listada nos arquivos P2P como 'Curtains Close').",
    diffHighlights: [
      "Recortada do Remaster de 2023 no trecho 47:50 até 49:59.",
      "Muitas vezes aparecia com o nome 'Curtains Close' ou 'Curtains Closed' nos downloads do LimeWire/Soulseek.",
      "Riff intrincado entre as duas guitarras que já antecipava a sonoridade de Favourite Worst Nightmare."
    ],
    lyricsExcerpt: `Now the curtains are closed
And everybody knows
That the show is over for tonight
Turn off the spotlight...

Walking home through the quiet street
With aching head and blistered feet...`,
    lyricsNote: "Timestamp no Remaster: 47:50 – 49:59. Penúltima faixa da coletânea e mais uma raridade exclusiva de 2004."
  },
  {
    id: 18,
    number: "18",
    title: "Ravey Ravey Ravey Club (live)",
    originalTitle: "Ravey Ravey Ravey Club",
    startTimestamp: "49:59",
    endTimestamp: "52:03",
    startSeconds: 2999,
    endSeconds: 3123,
    duration: "2:04",
    durationSeconds: 124,
    audioSrc: "audio/18-ravey-ravey-ravey-club.mp3",
    keywords: ["ravey", "ravey club", "18"],
    category: "exclusive",
    categoryLabel: "Exclusiva da Demo (Gravação Ao Vivo)",
    officialRelease: "Nunca lançada oficialmente (Exclusiva do Beneath the Boardwalk)",
    recordedAt: "Gravação Ao Vivo, Sheffield (Remaster 2023: Hollie Taylor)",
    year: "2004",
    summary: "O encerramento caótico e lendário do Beneath the Boardwalk: uma gravação ao vivo crua tirando sarro das baladas 'ravey' de Sheffield.",
    demoKarakter: "Qualidade de bootleg ao vivo de palco pequeno, com Alex apresentando a música, batida dançante frenética e barulho de público ao fundo.",
    studioKarakter: "Jamais gravada em versão limpa de estúdio — a versão ao vivo presente no Beneath the Boardwalk é o único registro clássico conhecido!",
    diffHighlights: [
      "Recortada do Remaster de 2023 a partir de 49:59 até o final.",
      "Única faixa da coletânea proveniente de um registro ao vivo.",
      "Captura perfeitamente a atmosfera suada e barulhenta de um show do Arctic Monkeys para 100 pessoas em 2004."
    ],
    lyricsExcerpt: `Welcome to the Ravey Ravey Ravey Club!
Where the floor is sticky and they don't serve grub
Flashing lights and a terrible DJ
Playing the same tunes every single Friday...

Down at the Ravey Ravey Ravey Club
Yeah, the Ravey Ravey Ravey Club!`,
    lyricsNote: "Timestamp no Remaster: 49:59 – Fim. Registro histórico ao vivo que fecha o álbum com a energia crua dos clubes de Sheffield."
  }
];
