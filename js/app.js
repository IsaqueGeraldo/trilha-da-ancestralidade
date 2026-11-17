/* ===== CONTENT (data only: add eras/cards without touching the engine) ===== */
const ART={
 1:(k)=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#c9893f"/><circle cx="220" cy="48" r="26" fill="#f2d28a"/><g fill="#8e3f22"><path d="M0 160V110l25-22 25 22v50zM60 160V96l30-30 30 30v64zM130 160V114l22-18 22 18v46zM190 160V100l28-26 28 26v60z"/></g><g fill="#2b1a10"><path d="M${20+k*30} 160v-22h14v22zM${150-k*8} 160v-18h12v18z"/></g></svg>`,
 2:(k)=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#d9a94a"/><circle cx="${60+k*30}" cy="52" r="28" fill="#a8482a"/><path d="M0 110q38-18 75 0t75 0 75 0 75 0v50H0z" fill="#4a6b3a"/><path d="M0 128q38-14 75 0t75 0 75 0 75 0v32H0z" fill="#2f4a28"/><path d="M215 110l32-62 32 62z" fill="#e9cf93" stroke="#2b1a10" stroke-width="3"/></svg>`
};
const ERAS=[
{name:"África pré-colonial",char:"Amara (fictícia)",intro:"Amara é uma jovem aprendiz numa cidade comercial fictícia da África Ocidental, inspirada em cidades reais como Djenné e Tombuctu.",
 cards:[
 {t:"CONHECIMENTO",ch:"Amara (fictícia)",title:"Um continente, muitos mundos",text:"Na praça, um griot diz que a África é feita de desertos, florestas, savanas, cidades e reinos. Amara pergunta por onde começar.",ctx:"Fato: a África tem mais de mil línguas e sociedades muito diferentes entre si.",
  L:{l:"Ouvir o griot",fx:[8,6,0,0],learn:"A tradição oral guarda genealogias e história. Os griots (jeli) são especialistas nessa memória.",obj:"Tambor do griot"},
  R:{l:"Visitar o mercado",fx:[0,4,6,0],learn:"Os mercados conectavam regiões distantes e espalhavam ideias, não só mercadorias."}},
 {t:"DECISÃO",ch:"Comerciante Sidi (fictício)",title:"Ouro e sal",text:"Caravanas atravessam o Saara levando sal e produtos do norte, e voltam com ouro. Sidi propõe investir o tesouro da cidade nessa rota.",ctx:"Fato: o comércio transaariano ligou o Norte da África ao Sahel por séculos.",
  L:{l:"Investir na rota",fx:[0,6,8,0],flag:"trade",learn:"O comércio trouxe riqueza e contatos, mas deixou a cidade dependente das caravanas."},
  R:{l:"Guardar para as lavouras",fx:[4,0,6,0],flag:"farm",learn:"Celeiros fortes protegem a comunidade contra más colheitas."}},
 {t:"CONHECIMENTO",ch:"Mestre ferreira Nneka (fictícia)",title:"O fogo que transforma",text:"No ateliê, o ferro vira enxada, lança e adorno. Nneka mostra a Amara como o minério se torna ferramenta.",ctx:"Fato: há evidências de metalurgia do ferro na África há mais de 2.500 anos, como na cultura Nok (atual Nigéria).",
  L:{l:"Aprender a forja",fx:[8,0,4,0],learn:"A metalurgia africana é antiga e própria. Ela mudou a agricultura, a guerra e a arte.",obj:"Figura de terracota (inspirada em Nok)"},
  R:{l:"Pedir ferramentas p/ a lavoura",fx:[0,4,6,0],learn:"Ferramentas de ferro permitem abrir mais terra e colher mais."}},
 {t:"ACONTECIMENTO",ch:"A cidade",title:"A seca",text:"Chove pouco. As caravanas atrasam e os preços sobem.",ctx:"Dramatização: eventos climáticos afetaram muitas sociedades do Sahel.",if:f=>f.trade,
  L:{l:"Abrir os celeiros públicos",fx:[0,2,6,-0],learn:"A cidade passa o aperto com solidariedade, mas aprende a diversificar."},
  R:{l:"Esperar as caravanas",fx:[0,-6,-10,0],learn:"A espera custa caro: uma economia só em comércio é frágil."}},
 {t:"ACONTECIMENTO",ch:"A cidade",title:"A colheita farta",text:"Os celeiros estão cheios. Sobram grãos para trocar e a cidade ganha tempo para estudar.",ctx:"Dramatização.",if:f=>!f.trade,
  L:{l:"Trocar o excedente",fx:[0,6,6,0],learn:"Excedente agrícola sustenta artesãos, escolas e comércio."},
  R:{l:"Financiar estudiosos",fx:[10,4,0,0],learn:"Alimento garantido permite que muita gente se dedique ao saber."}},
 {t:"DECISÃO",ch:"Erudita Fatou (fictícia)",title:"Muralha ou biblioteca?",text:"Há verba para uma obra. Fatou quer copiar manuscritos de astronomia e direito. O capitão quer reforçar a muralha.",ctx:"Fato: Tombuctu teve centros de estudo e acervos de manuscritos que existem até hoje.",
  L:{l:"Copiar manuscritos",fx:[12,6,0,0],flag:"lib",learn:"Manuscritos de Tombuctu tratam de astronomia, medicina, direito e poesia. Muitos continuam preservados por famílias.",obj:"Manuscrito de Tombuctu"},
  R:{l:"Reforçar a muralha",fx:[-4,0,8,0],learn:"Defesa protege a comunidade, mas o saber também precisa de proteção."}},
 {t:"DECISÃO",ch:"Griot Dembo (fictício)",title:"Palavra falada ou escrita?",text:"Dembo teme que a escrita substitua a memória viva. Fatou teme que histórias se percam quando os mais velhos partem.",ctx:"Interpretação: oralidade e escrita convivem em muitas sociedades africanas.",
  L:{l:"Fortalecer a tradição oral",fx:[8,8,0,0],learn:"A história oral é fonte reconhecida pela historiografia e pela UNESCO."},
  R:{l:"Registrar também por escrito",fx:[8,0,0,4],learn:"Registrar não apaga a oralidade: os dois caminhos se complementam."}}
 ]},
{name:"Kemet",char:"Khety (fictício)",intro:"Khety é um jovem escriba em formação, em Kemet, o antigo Egito africano às margens do Nilo. Kemet é uma civilização específica, não representa toda a África.",
 cards:[
 {t:"CONHECIMENTO",ch:"Khety (fictício)",title:"O dom do rio",text:"Todo ano o Nilo transborda e deixa um solo escuro e fértil. Os escribas medem a cheia para calcular a colheita e os impostos.",ctx:"Fato: a agricultura de Kemet dependia da cheia anual do Nilo.",
  L:{l:"Ler o nilômetro",fx:[6,0,4,0],learn:"Medir a cheia permitia planejar estoques e distribuir trabalho.",obj:"Nilômetro"},
  R:{l:"Visitar os canais",fx:[0,0,8,0],learn:"Canais e diques exigiam trabalho coletivo organizado."}},
 {t:"CONHECIMENTO",ch:"Mestre Ptahmose (fictício)",title:"Palavras sagradas",text:"Khety treina hieróglifos em cacos de cerâmica antes de usar o papiro, que é caro.",ctx:"Fato: escrita hieroglífica e hierática, papiro feito de uma planta do Nilo.",
  L:{l:"Copiar textos de medicina",fx:[10,0,4,0],learn:"Papiros médicos descrevem exames, feridas e tratamentos.",obj:"Papiro médico"},
  R:{l:"Copiar registros do celeiro",fx:[4,0,8,0],learn:"A escrita nasceu muito ligada à administração: contar grãos, gado e tributos."}},
 {t:"DECISÃO",ch:"Khety (fictício)",title:"Quem preserva o saber?",text:"Um incêndio ameaça uma sala de arquivos do templo. Há tempo de salvar só uma parte.",ctx:"Dramatização inspirada nas “Casas da Vida”, onde se copiavam textos.",
  L:{l:"Salvar tratados de matemática",fx:[10,0,0,0],flag:"math",learn:"A matemática de Kemet resolvia áreas, volumes e repartição de pães e grãos (ex.: Papiro Rhind).",obj:"Papiro matemático"},
  R:{l:"Salvar o calendário e os astros",fx:[10,4,0,0],flag:"sky",learn:"O calendário de Kemet seguia o ciclo do Nilo e a observação da estrela Sírio."}},
 {t:"ACONTECIMENTO",ch:"A corte",title:"Cheia fraca",text:"O rio sobe pouco. A colheita será curta e o palácio pede mais impostos.",ctx:"Dramatização: cheias fracas podiam causar crises.",
  L:{l:"Abrir os celeiros do templo",fx:[0,0,10,4],learn:"Reservas coletivas eram uma forma de proteção contra fome."},
  R:{l:"Cobrar o imposto inteiro",fx:[0,-4,-10,-6],learn:"Pressionar um povo em crise gera revolta e perda de confiança."}},
 {t:"DECISÃO",ch:"Arquiteta Neferet (fictícia)",title:"Uma obra para gerações",text:"Neferet propõe um templo orientado pelo sol. A obra emprega muita gente e consome pedra, tempo e alimento.",ctx:"Fato: as grandes obras de Kemet envolviam equipes organizadas de trabalhadores especializados.",
  L:{l:"Construir com calma",fx:[4,10,0,0],learn:"A arquitetura de pedra uniu astronomia, geometria e crença."},
  R:{l:"Priorizar casas e canais",fx:[0,0,10,4],learn:"Infraestrutura cotidiana também é patrimônio."}},
 {t:"CONHECIMENTO",ch:"Khety (fictício)",title:"O que é Kemet?",text:"Khety descobre que Kemet era uma sociedade africana em contato com Núbia, Punt e o Mediterrâneo.",ctx:"Fato: Kemet manteve relações comerciais e culturais com outras regiões africanas.",
  L:{l:"Conhecer os vizinhos do sul",fx:[6,6,0,2],learn:"Kemet e Núbia (Kush) tiveram contatos, trocas e conflitos. Ver Kemet como isolada seria um erro.",obj:"Escaravelho"},
  R:{l:"Estudar os cultos do rio",fx:[6,6,0,0],learn:"Religião, política e conhecimento caminhavam juntos em Kemet."}}
 ]},
{name:"Reino de Oyó",lock:1},{name:"Travessia Atlântica",lock:1},{name:"Brasil Colonial",lock:1},{name:"Quilombo",lock:1},{name:"Brasil pós-abolição",lock:1}
];
const KEYS=["Memória","Cultura","Comunidade","Direitos"];

/* ===== CONTENT PATCH: Era 3 draft, late-consequence cards, fact registry ===== */
const SL={DOC:"Fato",DEB:"Debate",INT:"Interpretação",FIC:"Dramatização"},GL="J2 (fonte global; fonte específica pendente, L-05)";
const KR={
"K-101":["DOC","Souza, M. de M., África e Brasil africano; UNESCO, História Geral da África","Mais de mil línguas e sociedades muito diferentes: Axum, Mali, Songhai, Oyó, Congo, Grande Zimbábue."],
"K-102":["DOC","UNESCO, História Geral da África, vol. IV; Hunwick, J., Timbuktu and the Songhay Empire","Tombuctu, ligada a Mali e Songhai, foi centro de comércio e estudo, com manuscritos de astronomia, medicina, direito e poesia. Em 1324, o mansa Mussa fez a peregrinação a Meca."],
"K-103":["DOC",GL,"A tradição oral guarda genealogias e história; griots (jeli) são seus especialistas. A história oral é fonte reconhecida pela historiografia e pela UNESCO."],
"K-104":["INT","J2 (interpretação)","Oralidade e escrita convivem em muitas sociedades africanas e se complementam."],
"K-105":["DOC",GL,"Mercados conectavam regiões distantes; o comércio transaariano ligou o Norte da África ao Sahel por séculos."],
"K-106":["DOC","UNESCO, História Geral da África, vols. II e III; Heywood, L., Diáspora negra no Brasil","Metalurgia do ferro na África há mais de 2.500 anos, como na cultura Nok (atual Nigéria)."],
"K-201":["DOC","Gardiner, A., Egypt of the Pharaohs; Shaw, I. (org.), The Oxford History of Ancient Egypt","Kemet, “terra negra”: o solo escuro e fértil deixado pelas cheias do Nilo."],
"K-202":["DOC",GL,"A agricultura dependia da cheia anual do Nilo; escribas a mediam; cheias fracas podiam causar crises."],
"K-203":["DOC","Shaw, I. (org.), The Oxford History of Ancient Egypt","Escribas registravam colheitas, impostos e obras; a escrita nasceu muito ligada à administração."],
"K-204":["DOC",GL,"Papiros médicos descrevem exames, feridas e tratamentos; a matemática resolvia áreas, volumes e repartição de grãos (ex.: Papiro Rhind)."],
"K-205":["DOC",GL,"O calendário de Kemet seguia o ciclo do Nilo e a observação da estrela Sírio."],
"K-206":["DOC",GL,"Canais e diques exigiam trabalho coletivo organizado; as grandes obras envolviam equipes especializadas."],
"K-207":["DOC",GL,"As Casas da Vida eram instituições de Kemet onde se copiavam textos."],
"K-208":["DOC","Shaw, I. (org.), The Oxford History of Ancient Egypt; UNESCO, História Geral da África, vol. II","Kemet estava em contato com Núbia, Punt e o Mediterrâneo; reis kushitas governaram o Egito na 25ª dinastia (c. 744–656 a.C.). Kemet não representa toda a África."],
"K-209":["INT","J2 (interpretação)","Em Kemet, religião, política e conhecimento estavam ligados."],
"K-301":["DOC","Law, R., The Oyo Empire, c. 1600–c. 1836","Oyó, povo iorubá da atual Nigéria, foi potência regional nos séculos XVII e XVIII; o soberano tinha o título de Alaafin e a cavalaria era famosa. A partir do início do séc. XIX o império entrou em colapso."],
"K-302":["DOC","Verger, P., Fluxo e refluxo; Parés, L. N., A formação do candomblé","Ifá é um sistema de saber e adivinhação dos iorubás; os orixás, como Xangô, são lembrados em Oyó. Muitas pessoas iorubás foram trazidas ao Brasil, sobretudo à Bahia no séc. XIX, e recriaram tradições que deram origem ao candomblé e, em Pernambuco, ao xangô."],
"K-303":["DOC","Law, R., The Oyo Empire; Dias, M. O. L. da S., Quotidiano e poder em São Paulo no século XIX","Os mercados iorubás trocavam tecidos, alimentos, metais e contas, e muitas mulheres comandavam esse comércio. Essa experiência reaparece no comércio de rua das cidades brasileiras."]};
const OBJ=[["O-01","Tambor do griot",0,"K-103"],["O-02","Figura de terracota (inspirada em Nok)",0,"K-106"],["O-03","Manuscrito de Tombuctu",0,"K-102"],["O-04","Nilômetro",1,"K-202"],["O-05","Papiro médico",1,"K-204"],["O-06","Papiro matemático",1,"K-204"],["O-07","Escaravelho",1,"K-208"],["O-08","Contas do mercado iorubá",2,"K-303"]];
const META={"Um continente, muitos mundos":["E1-C1","K-101 K-103 K-105"],"Ouro e sal":["E1-C2","K-105 F-102"],"O fogo que transforma":["E1-C3","K-106"],"A seca":["E1-C4","F-103"],"A colheita farta":["E1-C5","F-104"],"Muralha ou biblioteca?":["E1-C6","K-102 F-105"],"Palavra falada ou escrita?":["E1-C7","K-103 K-104 F-106"],
"Eco dos manuscritos":["E1-C8","K-102 F-107"],"Pátio em silêncio":["E1-C9","K-103 K-104 F-108"],
"O dom do rio":["E2-C1","K-201 K-202 K-206"],"Palavras sagradas":["E2-C2","K-203 K-204"],"Quem preserva o saber?":["E2-C3","K-204 K-205 K-207 F-201"],"Cheia fraca":["E2-C4","K-202 F-202"],"Uma obra para gerações":["E2-C5","K-206 F-203"],"O que é Kemet?":["E2-C6","K-208 K-209"],"Canais sem reparo":["E2-C7","K-202 K-206 F-204"],
"Um império iorubá":["E3-C1","K-301"],"Mercado ou cavalaria?":["E3-C2","K-301 K-303 F-301"],"Consultar Ifá?":["E3-C3","K-302 F-302"],"O mercado cheio":["E3-C4","K-303 F-303"],"Verba disputada":["E3-C5","K-301 F-305"],"Tradições em contato":["E3-C6","K-302 F-304"],"De Oyó ao Brasil":["E3-C7","K-302"]};
ERAS[0].cards.push(
{t:"ACONTECIMENTO",ch:"Erudita Fatou (fictícia)",title:"Eco dos manuscritos",text:"As cópias de Fatou passam de mão em mão. Uns querem guardá-las com as famílias; outros, abri-las à cidade inteira.",ctx:"Dramatização (F-107), ancorada em K-102: muitos manuscritos continuam preservados por famílias.",if:f=>f.lib,
 L:{l:"Guardar com as famílias",fx:[6,0,2,0],learn:"Em Tombuctu, muitos manuscritos continuam preservados por famílias."},R:{l:"Abrir à cidade",fx:[4,4,0,2],learn:"Mestres, escolas e grandes coleções faziam do saber escrito um bem de várias mãos."}},
{t:"ACONTECIMENTO",ch:"Griot Dembo (fictício)",title:"Pátio em silêncio",text:"As crianças já não pedem histórias. Dembo diz que a memória viva precisa de quem escute.",ctx:"Dramatização (F-108), ancorada em K-103 e K-104.",if:f=>!f.lib,
 L:{l:"Convidar os jovens à roda",fx:[10,4,0,0],learn:"A tradição oral guarda genealogias e história, e depende de gente que a transmita."},R:{l:"Registrar tudo por escrito",fx:[6,0,0,0],learn:"Interpretação: registrar não apaga a oralidade; os dois caminhos se complementam."}});
ERAS[1].cards[3].R.flag="harsh";
ERAS[1].cards.push({t:"ACONTECIMENTO",ch:"A Corte (coletivo)",title:"Canais sem reparo",text:"Depois da cobrança dura, ninguém aparece para limpar os canais. A confiança na administração diminuiu.",ctx:"Dramatização (F-204), ancorada em K-202 e K-206.",if:f=>f.harsh,
 L:{l:"Chamar a manutenção coletiva",fx:[0,0,8,4],learn:"Canais e diques exigiam trabalho coletivo organizado."},R:{l:"Adiar o reparo",fx:[0,0,-8,-4],learn:"Sem organização coletiva, canais e diques deixam de cumprir a sua função."}});
ERAS[2]={name:"Reino de Oyó",draft:1,char:"Feirante e Babalaô (personagens-síntese)",intro:"Rascunho pendente de validação. Numa cidade-síntese iorubá (fictícia), você acompanha a Feirante (P-105) e o Babalaô (P-104). Oyó foi potência regional nos séculos XVII e XVIII.",
cards:[
{t:"CONHECIMENTO",ch:"Feirante (síntese)",title:"Um império iorubá",text:"No mercado, a Feirante diz que a cidade pertence a um império cujo soberano leva o título de Alaafin e cuja cavalaria é famosa.",ctx:"Fato: K-301. Nenhum Alaafin específico é citado.",
 L:{l:"Seguir até o mercado",fx:[0,6,4,0],learn:"Oyó, na atual Nigéria, foi potência regional nos séculos XVII e XVIII."},R:{l:"Perguntar pela cavalaria",fx:[4,4,0,0],learn:"O soberano tinha o título de Alaafin, e a cavalaria era famosa. O império entrou em colapso a partir do início do século XIX."}},
{t:"DECISÃO",ch:"Feirante (síntese)",title:"Mercado ou cavalaria?",text:"Há recursos para uma obra. A Feirante pede mais bancas e depósitos. A guarda pede reforço para a cavalaria.",ctx:"Dramatização (F-301), ancorada em K-301 e K-303.",
 L:{l:"Ampliar o mercado",fx:[0,6,8,0],flag:"market",learn:"Os mercados iorubás trocavam tecidos, alimentos, metais e contas, e muitas mulheres os comandavam.",obj:"Contas do mercado iorubá"},R:{l:"Reforçar a cavalaria",fx:[0,0,4,2],flag:"horse",learn:"A cavalaria de Oyó era famosa. Segurança também disputa recursos com outras necessidades da cidade."}},
{t:"DECISÃO",ch:"Babalaô (síntese)",title:"Consultar Ifá?",text:"Uma decisão difícil divide o conselho. O Babalaô propõe consultar Ifá antes de agir; outros querem decidir logo.",ctx:"Ifá é tradição viva. A cena é uma dramatização social (F-302), sem poder sobrenatural.",
 L:{l:"Consultar antes",fx:[6,4,4,0],flag:"ifa",learn:"Ifá é um sistema de saber e de adivinhação dos iorubás; os orixás, como Xangô, são lembrados em Oyó."},R:{l:"Decidir sem consulta",fx:[0,-4,0,4],learn:"Ifá segue sendo um sistema de saber vivo, não um recurso do jogo. Decidir sem consultá-lo muda o vínculo da decisão com a tradição."}},
{t:"ACONTECIMENTO",ch:"Feirante (síntese)",title:"O mercado cheio",text:"Mulheres de várias praças trazem tecidos e contas. O mercado vira ponto de encontro de gente de fora.",ctx:"Dramatização (F-303), ancorada em K-303.",if:f=>f.market,
 L:{l:"Receber os visitantes",fx:[0,6,4,0],learn:"Essa experiência reaparece nas ruas das cidades brasileiras, onde mulheres negras tinham papel central no comércio de rua."},R:{l:"Manter só o comércio local",fx:[0,-2,2,0],learn:"Mercados conectavam gente e ideias; fechar-se muda quem circula e o que circula."}},
{t:"ACONTECIMENTO",ch:"A guarda (coletivo)",title:"Verba disputada",text:"A guarda cresceu, mas o custo aparece: menos recursos chegam ao mercado e às casas.",ctx:"Dramatização (F-305), ancorada em K-301.",if:f=>f.horse,
 L:{l:"Remanejar para o mercado",fx:[0,4,6,0],flag:"market",learn:"Potência militar e vida cotidiana disputam os mesmos recursos."},R:{l:"Manter a guarda",fx:[0,-4,-4,2],learn:"A cavalaria era famosa, mas ela é só uma parte da vida do império."}},
{t:"DECISÃO",ch:"Babalaô e Feirante (síntese)",title:"Tradições em contato",text:"Viajantes de outros povos chegam à cidade. Alguns querem abrir festas e ritos; outros preferem guardá-los.",ctx:"Dramatização (F-304), ancorada em K-302.",
 L:{l:"Compartilhar a festa",fx:[0,8,4,0],learn:"Tradições iorubás seriam recriadas mais tarde no Brasil, por caminhos diferentes."},R:{l:"Guardar os ritos",fx:[8,0,0,0],learn:"Guardar também é uma forma de transmitir: os ritos iorubás foram recriados no Brasil por quem os levou na memória."}},
{t:"CONHECIMENTO",ch:"Babalaô (síntese)",title:"De Oyó ao Brasil",text:"O Babalaô fala de tradições iorubás que, no século XIX, seriam recriadas do outro lado do Atlântico.",ctx:"Fato: K-302. A cena é uma dramatização.",
 L:{l:"Ouvir sobre o candomblé",fx:[8,6,0,0],learn:"Muitas pessoas iorubás foram trazidas ao Brasil, sobretudo à Bahia no século XIX, e recriaram suas tradições religiosas, que originaram o candomblé."},R:{l:"Ouvir sobre o xangô",fx:[8,6,0,0],learn:"Em Pernambuco, a recriação de tradições iorubás deu origem ao xangô."}}]};
ERAS.forEach(e=>(e.cards||[]).forEach(c=>{const m=META[c.title];if(m){c.id=m[0];c.k=m[1].split(" ")}}));

/* ===== ENGINE ===== */
const SKEY="trilha-v1",$=s=>document.querySelector(s);
let S={unlocked:1,museum:[],log:[],done:{},msg:"",known:[],chars:[],run:null,set:{}},G=null,busy=false;
try{const r=localStorage.getItem(SKEY);if(r)S=Object.assign(S,JSON.parse(r))}catch(e){}
const save=()=>{try{localStorage.setItem(SKEY,JSON.stringify(S))}catch(e){}};
function applySet(){document.documentElement.classList.toggle("lg",!!S.set.lg);document.documentElement.dataset.theme=S.set.th==="light"?"light":"dark";
 $("#bTh").textContent=S.set.th==="light"?"Claro":"Escuro";$("#bLg").textContent=S.set.lg?"Ligado":"Desligado"}
$("#bTh").onclick=()=>{S.set.th=S.set.th==="light"?"dark":"light";save();applySet()};
$("#bLg").onclick=()=>{S.set.lg=!S.set.lg;save();applySet()};
function show(id){document.querySelectorAll(".scr").forEach(s=>s.classList.toggle("on",s.id===id));window.scrollTo(0,0);
 if(id==="home")renderHome();if(id==="eras")renderEras();if(id==="mus")renderMus();if(id==="diary")renderDiary()}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));

function renderEras(){
 $("#eraList").innerHTML="";
 ERAS.forEach((e,i)=>{const b=document.createElement("button");b.className="era";const open=!e.lock&&i<S.unlocked;b.disabled=!open;
  b.innerHTML=`<b>Era ${i+1} · ${e.name}</b><small>${e.lock?"Em validação":!open?"Conclua a era anterior":(e.draft?"Rascunho · ":"")+(S.done[i]?"Concluída · jogar de novo":"Disponível")}</small>`;
  if(open)b.onclick=()=>begin(i);$("#eraList").append(b)});
}
function begin(i,r){
 const cards=ERAS[i].cards;
 G=r?{i,st:r.st.slice(),f:Object.assign({},r.f),used:r.used.slice(),learned:r.learned.slice(),q:cards.filter(c=>!r.used.includes(c.title)),cur:null}
    :{i,st:[50,50,50,50],f:{},used:[],learned:[],q:cards.slice(),cur:null};
 $("#eraName").textContent=`Era ${i+1} · ${ERAS[i].name}${ERAS[i].draft?" (rascunho)":""}`;
 show("game");$("#choices").style.display="none";$("#stage").innerHTML="";bars();$("#prog").textContent="";
 if(r){$("#fbBox").innerHTML="";nextCard()}else introDlg(i,nextCard);
}
/* ===== ANIMATION SYSTEM (single source of motion settings) ===== */
const ANIM={enter:420,exit:320,back:400,dist:140,tilt:16,lift:.05,thr:90,exitEase:"cubic-bezier(.5,0,.9,.6)",spring:"cubic-bezier(.34,1.56,.64,1)"};
const RMQ=matchMedia("(prefers-reduced-motion:reduce)"),dur=ms=>RMQ.matches?0:ms;
function figure(name){
 let h=0;for(const ch of name)h=(h*31+ch.charCodeAt(0))>>>0;
 const skin=["#6b3f27","#8a5233","#4f2c1b","#a1673e"][h%4],cl=["#a8482a","#4a6b3a","#b8892b","#2b1a10","#7a3b2e"][(h>>3)%5],wr=["#f2d28a","#a8482a","#2b1a10","#4a6b3a"][(h>>5)%4],t=h%3;
 const hat=t===0?`<path d="M126 82c2-22 46-22 48 0-10-6-38-6-48 0z" fill="${wr}"/>`:t===1?`<path d="M128 78c4-24 40-24 44 0z" fill="${wr}"/><rect x="126" y="76" width="48" height="6" fill="${cl}"/>`:`<path d="M126 88c-4-30 52-30 48 0-6-12-42-12-48 0z" fill="#2b1a10"/>`;
 return `<g class="fig" stroke="#2b1a10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M104 160c0-34 20-50 46-50s46 16 46 50z" fill="${cl}"/><g class="tilt"><g class="head"><circle cx="150" cy="86" r="22" fill="${skin}"/>${hat}<circle class="eye" cx="143" cy="86" r="1.8" fill="#2b1a10"/><circle class="eye" cx="157" cy="86" r="1.8" fill="#2b1a10"/><path class="fl" d="M144 96h12" fill="none"/><path class="sm" d="M143 94q7 7 14 0" fill="none"/><path class="wr" d="M143 98q7-6 14 0" fill="none"/></g></g></g>`}
ART[3]=k=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#c47a3a"/><circle cx="${70+k*20}" cy="46" r="24" fill="#f2d28a"/><path d="M0 112h300v48H0z" fill="#8e3f22"/><path d="M14 112l32-28 32 28zM214 112l36-32 36 32z" fill="#e9cf93" stroke="#2b1a10" stroke-width="3"/></svg>`;
function isDark(){return S.set.th!=="light"}

const IC={"book-open":'<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',landmark:'<path d="M3 22h18"/><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',"arrow-left":'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',"arrow-right":'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',"file-text":'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>'};
const ic=(n,s)=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"${s?` style="width:${s}px;height:${s}px"`:""}>${IC[n]}</svg>`;
const KI=["book-open","music","users","landmark"];
const KT={"K-101":"Uma África, muitas sociedades","K-102":"Tombuctu e o saber escrito","K-103":"Griots e tradição oral","K-104":"Oralidade e escrita se complementam","K-105":"Mercados e comércio transaariano","K-106":"Metalurgia do ferro","K-201":"Kemet, a “terra negra”","K-202":"A cheia do Nilo e o nilômetro","K-203":"Escrita e administração","K-204":"Papiros de medicina e de matemática","K-205":"Calendário e astronomia","K-206":"Obras e trabalho coletivo","K-207":"Casas da Vida","K-208":"Kemet, Kush/Núbia e os vizinhos","K-209":"Religião, política e saber","K-301":"O Império de Oyó","K-302":"Ifá, orixás e o Brasil","K-303":"Mercados iorubás"};
if(!S.disc)S.disc=(S.known||[]).map((id,n)=>({id,e:+id[2]-1,n:n+1,card:"",ch:""}));
let inRun=false,tT=null,tN=0,tO=0;
let tK=[],tOb=null;
function toast(nk,ob){
 tK.push(...nk);if(ob)tOb=ob;if(!tK.length&&!tOb)return;const t=$("#toast");
 const l1=tK.length?(tK.length>1?`${tK.length} conhecimentos registrados`:"Conhecimento registrado"):"Novo objeto no Museu";
 const l2=tK.length===1?KT[tK[0]]:tK.length>1?tK.slice(0,2).map(k=>KT[k]).join(" · ")+(tK.length>2?"…":""):tOb;
 t.innerHTML=`<span class="tb">${ic(tK.length?"book-open":"landmark")}</span><span class="tt"><b>${l1}</b><small>${l2}${tK.length&&tOb?" · "+tOb:""}</small></span>`;
 t.classList.remove("on");void t.offsetWidth;t.classList.add("on");
 clearTimeout(tT);tT=setTimeout(()=>{t.classList.remove("on");tK=[];tOb=null},3600)}
function bars(d,mode){
 d=d||[];const B=$("#bars");
 if(B.children.length!==4)B.innerHTML=KEYS.map((k,n)=>`<div class="ind" role="img" aria-label="${k}"><span class="b">${ic(KI[n])}</span><span class="f">${ic(KI[n])}</span></div>`).join("");
 [...B.children].forEach((el,k)=>{const v=G.st[k];el.style.setProperty("--p",v+"%");el.setAttribute("aria-label",`${KEYS[k]}: ${v}%`);
  el.classList.toggle("crit",v<25);el.classList.toggle("edge",v<=5||v>=95);el.classList.toggle("aff",mode==="pre"&&!!d[k]);
  if(mode==="chg"){el.classList.remove("pop");if(d[k]){void el.offsetWidth;el.classList.add("pop")}}});
 document.documentElement.style.setProperty("--sat",Math.min(...G.st)<30?".75":"1");
}
function chips(ks){return [...new Set(ks.map(id=>id[0]==="F"?"Cena dramatizada":KR[id]?kcat(id):""))].filter(Boolean).map(t=>`<span class="chip">${t}</span>`).join("")}
function nextCard(){
 const k=G.q.findIndex(c=>!c.if||c.if(G.f,G.st));
 if(k<0)return finish();
 inRun=true;const c=G.cur=G.q.splice(k,1)[0],A=ANIM;setEra();let hs=0;for(const ch of (c.id||c.title))hs=(hs*31+ch.charCodeAt(0))>>>0;G.flip=hs%2===1;const V=G.flip?{L:c.R,R:c.L}:{L:c.L,R:c.R};
 $("#fbBox").innerHTML="";$("#choices").style.display="";$("#prog").textContent=`· carta ${G.used.length+1}`;
 $("#bL").innerHTML="<span>"+V.L.l+"</span>";$("#bR").innerHTML="<span>"+V.R.l+"</span>";$("#bL").disabled=$("#bR").disabled=false;
 const sc=(ART[G.i+1]||ART[1])(G.used.length%4).replace("</svg>",figure(c.ch)+"</svg>"),ks=c.k||[];
 const el=document.createElement("div");el.className="card in"+(c.boss?" boss":"");el.tabIndex=0;el.style.animationDuration=dur(A.enter)+"ms";
 el.innerHTML=`<div class="art">${sc}<span class="tag">${c.t}</span></div><div class="body"><h3>${c.title}</h3><div class="who">${c.ch}</div><p>${c.text}</p><div class="hist">${ic("file-text",14)} ${clean(c.ctx)}<div class="src">${chips(ks)}</div></div></div><div class="hint l">${V.L.l}</div><div class="hint r">${V.R.l}</div><div class="tint"></div>`;
 $("#stage").innerHTML="";$("#stage").append(el);busy=false;bars([0,1,2,3].map(k=>(c.L.fx[k]||c.R.fx[k])?1:0),"pre");
 const hl=el.querySelector(".hint.l"),hr=el.querySelector(".hint.r"),tn=el.querySelector(".tint");let x0=null,dx=0;
 const pose=x=>{const p=Math.min(1,Math.abs(x)/A.thr);
  el.style.transform=`translate(${x}px,${-Math.abs(x)*A.lift}px) rotate(${x/A.tilt}deg)`;
  tn.style.background=x<0?"var(--acc)":"var(--grn)";tn.style.opacity=p*.35;hl.style.opacity=x<-30?p:0;hr.style.opacity=x>30?p:0;
  el.dataset.d=Math.abs(x)>12?(x<0?"L":"R"):"";el.style.setProperty("--tilt",x/12+"deg")};
 let y0=null,dragging=false;
 el.onpointerdown=e=>{if(busy)return;x0=e.clientX;y0=e.clientY;dragging=false;dx=0};
 el.onpointermove=e=>{if(x0===null)return;const mx=e.clientX-x0,my=e.clientY-y0;
  if(!dragging){if(Math.abs(my)>Math.abs(mx)&&Math.abs(my)>8){x0=null;return}if(Math.abs(mx)>8){dragging=true;el.classList.remove("in");el.style.animation="none";el.style.transition="none";try{el.setPointerCapture(e.pointerId)}catch(_){}}}
  if(dragging){dx=mx;pose(dx)}};
 el.onpointerup=()=>{if(x0===null)return;x0=null;
  if(dragging&&Math.abs(dx)>A.thr)choose(dx<0?"L":"R");
  else if(dragging){el.style.transition=`transform ${dur(A.back)}ms ${A.spring}`;pose(0);el.style.transform="";delete el.dataset.d}dx=0;dragging=false};
 el.onkeydown=e=>{if(e.key==="ArrowLeft")choose("L");if(e.key==="ArrowRight")choose("R")};
}
function choose(side){
 if(busy||!G.cur)return;busy=true;const c=G.cur,o=(G.flip?{L:c.R,R:c.L}:c)[side],A=ANIM,s=side==="L"?-1:1;G.cur=null;G.used.push(c.title);
 const el=$(".card");el.classList.remove("in");el.style.animation="none";el.dataset.d=side;
 el.style.transition=`transform ${dur(A.exit)}ms ${A.exitEase},opacity ${dur(A.exit)}ms`;
 el.style.transform=`translate(${s*A.dist}%,-6%) rotate(${s*A.tilt*1.2}deg)`;el.style.opacity=0;
 const tn=el.querySelector(".tint");tn.style.background=s<0?"var(--acc)":"var(--grn)";tn.style.opacity=.6;
 o.fx.forEach((d,k)=>G.st[k]=Math.max(0,Math.min(100,G.st[k]+d)));
 if(o.flag)G.f[o.flag]=1;G.learned.push(o.learn);
 const ks=c.k||[],nk=ks.filter(x=>x[0]==="K"&&!S.disc.some(d=>d.id===x));
 nk.forEach(x=>S.disc.push({id:x,e:G.i,n:S.disc.length+1,card:c.id||"",ch:c.ch}));
 if(!S.chars.includes(c.ch))S.chars.push(c.ch);
 S.log.push({e:G.i,id:c.id||"",t:c.title,l:o.l,fx:o.fx,k:ks,n:o.learn});
 const no=o.obj&&!S.museum.includes(o.obj)?1:0;if(no)S.museum.push(o.obj);
 S.run={i:G.i,st:G.st,f:G.f,used:G.used,learned:G.learned};save();
 bars(o.fx,"chg");toast(nk,no?o.obj:null);
 setTimeout(nextCard,dur(A.exit)+120);
}
$("#bL").onclick=()=>choose("L");$("#bR").onclick=()=>choose("R");

Object.assign(KT,{"K-101":"A diversidade dos povos africanos","K-102":"Tombuctu, cidade do saber","K-103":"Os guardiões da tradição oral","K-104":"Palavra falada e palavra escrita","K-105":"As antigas rotas comerciais africanas","K-106":"O conhecimento da metalurgia do ferro","K-201":"Kemet, a terra negra","K-202":"O Nilo e a medida das cheias","K-203":"Os escribas e a escrita","K-204":"Papiros de medicina e matemática","K-205":"O calendário e as estrelas","K-206":"Canais, diques e grandes obras","K-207":"As Casas da Vida","K-208":"Kemet e seus vizinhos africanos","K-209":"Religião, poder e saber","K-301":"O Império de Oyó","K-302":"Ifá, os orixás e o Brasil","K-303":"Os mercados iorubás"});
const CAT={"K-103":"Tradição cultural","K-302":"Tradição cultural","K-104":"Interpretação","K-209":"Interpretação"};
const kcat=id=>CAT[id]||"Conhecimento histórico";
const ksrc=id=>{const s=KR[id][1];return s.startsWith("J2 (int")?{t:"Leitura interpretativa do projeto",st:"referência específica a incluir"}:s.startsWith("J2")?{t:"Fonte geral do projeto",st:"referência específica a incluir"}:{t:s,st:"revisão histórica pendente"}};
const clean=s=>s.replace(/,?\s*ancorada em K-\d+(?:\s*(?:e|,)\s*K-\d+)*/g,"").replace(/\s*\([FKPO]-\d+\)/g,"").replace(/^Fato:\s*K-\d+\.?\s*/,"Conhecimento histórico. ").replace(/^Fato:/,"Conhecimento histórico:").replace(/\b[KFOP]-\d{3}\b/g,"").replace(/\s+([.,:;])/g,"$1").replace(/\s{2,}/g," ").trim();
ERAS.forEach(e=>{if(e.intro)e.intro=clean(e.intro)});
const kBlock=id=>{const s=ksrc(id);return `<div class="dl"><b>${KT[id]}</b> <span class="chip">${kcat(id)}</span><br>${KR[id][2]}<br><span class="note">Fonte: ${s.t} · ${s.st}</span></div>`};
const SC=n=>(ART[n]||ART[1])(0);
function finish(){
 inRun=false;const i=G.i,last=i===ERAS.length-1,min=Math.min(...G.st),low=KEYS[G.st.indexOf(min)];
 const end=min>=45?"A comunidade avançou sem abrir mão de nenhuma dimensão da vida coletiva. Isso vale só para esta partida: a ficção não muda a história.":`O ponto mais frágil desta jornada foi ${low}. Nada se perde para sempre, mas há o que reconstruir.`;
 S.done[i]=1;S.unlocked=Math.max(S.unlocked,i+1);S.run=null;save();
 const nx=ERAS[i+1],next=!last&&nx&&!nx.lock,ds=S.disc.filter(d=>d.e===i);
 const sp=[...new Set(ds.flatMap(d=>ksrc(d.id).st==="revisão histórica pendente"?KR[d.id][1].split("; "):[]))],gen=ds.some(d=>ksrc(d.id).st!=="revisão histórica pendente");
 $("#sum").innerHTML=`<section class="rs"><p class="meta">Capítulo concluído</p><h2>${ERAS[i].name}</h2><div class="rimg">${SC(i+1)}</div></section>
 <section class="rs"><h3>A jornada</h3><p>${end}</p><p class="note">${G.used.length} decisões tomadas nesta era.</p></section>
 <section class="rs"><h3>Indicadores finais</h3><div class="bars">${G.st.map((v,k)=>`<div class="bar ${v<25?"crit":""}"><b>${ic(KI[k])} ${KEYS[k]}<em>${v}</em></b><i><s style="width:${v}%"></s></i></div>`).join("")}</div></section>
 <section class="rs"><h3>${ic("book-open")} Conhecimentos adquiridos (${ds.length})</h3>${ds.map(d=>`<details class="ent"><summary><b>${KT[d.id]}</b> <span class="chip">${kcat(d.id)}</span></summary><p>${KR[d.id][2]}</p></details>`).join("")}</section>
 <section class="rs"><h3>${ic("file-text")} Fontes históricas</h3><details class="ent"><summary>Ver referências (${sp.length+(gen?1:0)})</summary><ul class="l">${sp.map(s=>`<li>${s}</li>`).join("")}${gen?`<li>Fonte geral do projeto <span class="note">(referência específica a incluir)</span></li>`:""}</ul><p class="note">As referências ainda passarão por revisão de historiadores.</p></details></section>
 <section class="rs"><h3>Consequências das suas escolhas</h3><ul class="l">${G.learned.map(l=>`<li>${l}</li>`).join("")}</ul></section>
 <section class="rs"><h3>Desafio do Arquivo</h3><p>Restaure uma página do Livro de Memórias usando o que você aprendeu. É opcional e não tem penalidade.</p><button id="bPz">${S.puz[i]!==undefined?"Praticar novamente":"Iniciar desafio"}</button></section><section class="rs"><h3>${next?"A seguir":"Próximos passos"}</h3>${next?`<p><b>${nx.name}</b><br>${nx.intro.split(". ")[0]}.</p>`:last?"":`<p class="note">As próximas eras estão em validação. O encerramento geral só acontece ao fim da Era 7.</p>`}
 ${last?`<h3>Mensagem para as próximas gerações</h3><p>Depois de conhecer essa história, o que você acredita que precisa ser preservado para o futuro?</p><textarea id="msg" aria-label="Mensagem">${S.msg||""}</textarea><p class="note">“A história de um povo não começa com sua escravização, não termina com sua libertação e não pode ser contada apenas por aqueles que tentaram dominá-lo.”</p>`:""}
 ${next?`<button class="p big" id="bNx">Seguir para a próxima era</button>`:""}${last?`<button class="p big" id="bSv">Guardar mensagem</button>`:""}
 <div class="aux"><button class="t" data-go="arch">Livro de Memórias</button><button class="t" data-go="eras">Mapa de eras</button><button class="t" data-go="cred">Créditos</button></div><p id="saved" class="note"></p></section>`;
 show("sum");document.querySelectorAll("#sum [data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
 $("#bPz").onclick=()=>puzzle(i);if(next)$("#bNx").onclick=()=>begin(i+1);
 if(last)$("#bSv").onclick=()=>{S.msg=$("#msg").value.trim();save();$("#saved").textContent="Mensagem guardada neste aparelho."};
}
let bi=0,flip=false;
function bookPages(){
 const P=[{t:"cover"},{t:"toc"}];
 ERAS.forEach((E,e)=>{const ks=Object.keys(KR).filter(k=>+k[2]-1===e);if(!ks.length)return;
  P.push({t:"era",e,ks});ks.filter(k=>S.disc.some(d=>d.id===k)).forEach(k=>P.push({t:"k",k,e}))});
 P.push({t:"end"});return P}
function pageHTML(P,i){
 const p=P[i];
 if(p.t==="cover")return `<div><svg viewBox="0 0 100 100" width="110" aria-hidden="true"><g fill="none" stroke="#d9a94a" stroke-width="2"><circle cx="50" cy="50" r="14"/><circle cx="50" cy="50" r="26"/><circle cx="50" cy="50" r="38" stroke-dasharray="2 6"/></g><circle cx="50" cy="50" r="6" fill="#d9a94a"/></svg><h2>Livro de Memórias</h2><p>Trilha da Ancestralidade</p><p class="note">${S.disc.length} conhecimentos registrados</p>${Object.keys(S.puz||{}).length?`<p class="note">${Object.keys(S.puz).length} páginas restauradas</p>`:""}<p class="note">Toque em “próxima” ou deslize para abrir</p></div>`;
 if(p.t==="end")return `<div><h2>Fim por ora</h2><p class="note">Novas páginas surgem conforme você joga e descobre mais da história.</p></div>`;
 if(p.t==="toc")return `<h2>Sumário</h2><div class="orn"></div>`+ERAS.map((E,e)=>{const ks=Object.keys(KR).filter(k=>+k[2]-1===e);
  if(!ks.length)return `<div class="toc"><span>Era ${e+1} · ${E.name}</span><span class="note">em validação</span></div>`;
  const got=ks.filter(k=>S.disc.some(d=>d.id===k)).length,pg=P.findIndex(x=>x.t==="era"&&x.e===e);
  return `<button class="toc" data-j="${pg}"><span>Era ${e+1} · ${E.name}</span><span class="note">${got}/${ks.length} · p. ${pg}</span></button>`}).join("");
 if(p.t==="era"){const got=p.ks.filter(k=>S.disc.some(d=>d.id===k)).length;
  return `<p class="meta">Era ${p.e+1}</p><h2>${ERAS[p.e].name}</h2><div class="rimg">${SC(p.e+1)}</div><p>${ERAS[p.e].intro.split(". ")[0]}.</p><p class="note">${got?`${got} de ${p.ks.length} conhecimentos registrados. Vire a página para lê-los.`:"Nenhum conhecimento registrado ainda. Jogue esta era para preencher estas páginas."}</p>`}
 const k=p.k,d=S.disc.find(x=>x.id===k),lg=S.log.find(l=>typeof l==="object"&&l.k&&l.k.includes(k)),s=ksrc(k);
 return `<p class="meta">Era ${p.e+1} · ${ERAS[p.e].name}</p><h2>${KT[k]}</h2><span class="chip">${kcat(k)}</span><div class="orn"></div><p>${KR[k][2]}</p><p class="note">Fonte: ${s.t} · ${s.st}${lg?`<br>Surgiu em “${lg.t}”`:""}<br>Descoberta nº ${d.n}</p>`}
const mkPage=(P,i)=>{const d=document.createElement("div");d.className="pgx"+(P[i].t==="cover"||P[i].t==="end"?" cover":"");d.innerHTML=pageHTML(P,i);return d};
function updInd(){const P=bookPages(),n=P.length;
 $("#bkI").textContent=bi===0?"Capa":bi===n-1?"Contracapa":`Página ${bi} de ${n-2}`;
 $("#bkP").disabled=bi===0;$("#bkN").disabled=bi===n-1;
 $("#book").querySelectorAll("[data-j]").forEach(b=>b.onclick=()=>goPage(+b.dataset.j))}
function turn(d){
 const P=bookPages(),n=bi+d;if(flip||n<0||n>=P.length)return;flip=true;
 const bk=$("#book"),T=dur(700),leaf=mkPage(P,d>0?bi:n);leaf.classList.add("leaf");const tr=`transform ${T}ms var(--ease),opacity ${T}ms`;
 if(d>0){bk.replaceChildren(mkPage(P,n),leaf);requestAnimationFrame(()=>requestAnimationFrame(()=>{leaf.style.transition=tr;leaf.style.transform="rotateY(-105deg)";leaf.style.opacity="0"}))}
 else{bk.replaceChildren(mkPage(P,bi),leaf);leaf.style.transform="rotateY(-105deg)";leaf.style.opacity="0";requestAnimationFrame(()=>requestAnimationFrame(()=>{leaf.style.transition=tr;leaf.style.transform="none";leaf.style.opacity="1"}))}
 setTimeout(()=>{bi=n;bk.replaceChildren(mkPage(P,n));flip=false;updInd()},T+40);
}
function goPage(n){const d=n-bi;if(!d||flip)return;if(Math.abs(d)===1)return turn(d);
 const P=bookPages(),pg=mkPage(P,n);pg.classList.add("fadein");bi=n;$("#book").replaceChildren(pg);updInd()}
function renderArch(){
 bi=0;flip=false;
 $("#arch").innerHTML=`<h2>Livro de Memórias</h2><div class="book" id="book"></div><div class="bkc"><button id="bkP" aria-label="Página anterior">${ic("arrow-left")}</button><span id="bkI" class="note" aria-live="polite"></span><button id="bkN" aria-label="Próxima página">${ic("arrow-right")}</button></div><div class="row"><button class="t" id="archBack">Voltar</button></div>`;
 $("#book").append(mkPage(bookPages(),0));updInd();
 $("#archBack").onclick=goBack;$("#bkP").onclick=()=>turn(-1);$("#bkN").onclick=()=>turn(1);
 let x0=null;const bk=$("#book");
 bk.onpointerdown=e=>{x0=e.clientX};
 bk.onpointerup=e=>{if(x0===null)return;const dx=e.clientX-x0;x0=null;if(dx<-50)turn(1);else if(dx>50)turn(-1)};
}
document.addEventListener("keydown",e=>{if(!$("#arch").classList.contains("on"))return;if(e.key==="ArrowRight")turn(1);if(e.key==="ArrowLeft")turn(-1)});
function renderMus(){
 $("#musDet").innerHTML="";
 $("#musGrid").innerHTML=OBJ.map((o,n)=>S.museum.includes(o[1])?`<button class="obj" data-n="${n}"><b>${o[1]}</b><span class="note">Era ${o[2]+1} · ${ERAS[o[2]].name}</span></button>`:`<div class="obj lock"><b>Ainda guardado</b></div>`).join("");
 document.querySelectorAll("#musGrid button").forEach(b=>b.onclick=()=>{const o=OBJ[b.dataset.n];
  $("#musDet").innerHTML=`<div class="fb"><h3>${o[1]}</h3><p class="note">Era ${o[2]+1} · ${ERAS[o[2]].name}${o[0]==="O-08"?" · em validação":""}</p>${kBlock(o[3])}<p class="note">A descrição e o significado deste objeto ainda estão em pesquisa. Nada foi inventado aqui.</p></div>`})
}
function renderDiary(){
 const L=S.log.filter(l=>typeof l==="object").slice().reverse(),T=l=>l.k.filter(x=>x[0]==="K").map(x=>KT[x]).join(" · ");
 const dl=fx=>fx.map((d,k)=>d?`${KEYS[k]} ${d>0?"+":""}${d}`:"").filter(Boolean).join(", ")||"sem alteração";
 $("#diaryBody").innerHTML=`<h3>Decisões</h3>${L.length?L.map(l=>`<div class="dl"><b>Era ${l.e+1} · ${l.t}</b><br>${l.l}<br><span class="note">${dl(l.fx)}${T(l)?" · "+T(l):""}</span></div>`).join(""):"<p>Nenhuma decisão ainda.</p>"}
 <h3>Personagens encontrados</h3><p>${S.chars.join(" · ")||"—"}</p><h3>Objetos desbloqueados</h3><p>${S.museum.join(" · ")||"—"}</p><h3>Conhecimentos adquiridos</h3><p>${S.disc.map(d=>KT[d.id]).join(" · ")||"—"}</p>`;
}
function renderHome(){
 const open=ERAS.map((e,i)=>i).filter(i=>!ERAS[i].lock&&i<S.unlocked),total=ERAS.filter(e=>!e.lock).length,done=Object.keys(S.done).length;
 const ret=!!S.run||S.log.length>0||done>0,cur=S.run?S.run.i:(open.find(i=>!S.done[i])??open[open.length-1]);
 $("#home").innerHTML=`<div class="hero"><svg viewBox="0 0 360 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="360" height="300" fill="#2a1a10"/><circle class="sun" cx="250" cy="96" r="46" fill="#d9a94a"/><circle cx="250" cy="96" r="62" fill="none" stroke="#d9a94a" stroke-width="2" opacity=".35"/><g class="l1" fill="#4a2c1a"><path d="M-20 190q70-40 140-14t140-10 120 24v120H-20z"/></g><g class="l2" fill="#3a2214" stroke="#1a110a" stroke-width="2"><path d="M20 236v-46l12-14 12 14v46zM60 236v-70l16-20 16 20v70zM104 236v-52l12-12 12 12v52zM140 236v-36l10-10 10 10v36z"/></g><path d="M0 236q45-14 90 0t90 0 90 0 90 0v64H0z" fill="#2a1a10"/><path d="M0 266q45-12 90 0t90 0 90 0 90 0v34H0z" fill="#1a110a"/><path d="M300 300v-50c0-14 8-24 18-24s18 10 18 24v50z" fill="#120b06"/><circle cx="318" cy="214" r="10" fill="#120b06"/></svg></div>
 <h1 class="ttl">Trilha da Ancestralidade</h1><p class="sub">O Arquivo da Memória</p>
 ${ret?`<div class="st"><p class="meta">${done>=total&&!S.run?"Jornada concluída":"Jornada em andamento"}</p><h3>Era ${cur+1} · ${ERAS[cur].name}</h3><div class="lp"><i style="width:${done/total*100}%"></i></div><p class="note">${done} de ${total} eras disponíveis concluídas${S.run?` · carta ${S.run.used.length+1} em andamento`:""}</p></div>`:`<p class="lead">Atravesse a história dos povos africanos e afro-brasileiros, da diversidade do continente à luta por direitos, e reconstrua um arquivo de memória a cada decisão.</p><p class="lead2">“O que sobrevive quando tentam apagar a história de um povo?”</p>`}
 <button class="p big" id="hGo">${done>=total&&!S.run?"Escolher uma era":ret?"Continuar jornada":"Iniciar jornada"}</button>
 <div class="aux"><button class="t" id="hMap">Mapa de eras</button></div>`;
 $("#hGo").onclick=()=>S.run?begin(S.run.i,S.run):done>=total?show("eras"):begin(ret?cur:0);
 $("#hMap").onclick=()=>show("eras");
}
$("#bWipe").onclick=()=>$("#dlg").showModal();$("#dNo").onclick=()=>$("#dlg").close();
$("#dYes").onclick=()=>{S={unlocked:1,museum:[],log:[],done:{},msg:"",known:[],disc:[],puz:{},chars:[],run:null,set:S.set};save();$("#dlg").close();show("home")};
(()=>{const a=$("#amb");for(let n=0;n<14;n++){const i=document.createElement("i"),z=3+Math.random()*4;i.style.cssText=`left:${Math.random()*100}%;--dx:${Math.random()*60-30}px;width:${z}px;height:${z}px;animation-duration:${18+Math.random()*20}s;animation-delay:-${Math.random()*30}s`;a.append(i)}})();
const _show=show;show=id=>{_show(id);if(id!=="game")document.documentElement.style.removeProperty("--eb")};
const _s2=show;show=id=>{_s2(id);if(id==="arch")renderArch()};
const _begin=begin,VB=["#7a4a1a","#6b5a24","#6b2e1c","#1f2a3a","#5a3a1c","#2f4a28","#3a2a45"];
begin=(i,r)=>{const v=$("#veil");v.style.setProperty("--vb",VB[i]||"#2b1a10");v.innerHTML=`<p class="meta">Era ${i+1}</p><h2>${ERAS[i].name}</h2><p>${ERAS[i].char}</p>`;v.classList.add("on");setTimeout(()=>{_begin(i,r);setTimeout(()=>v.classList.remove("on"),dur(500))},dur(900))};
IC.home='<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>';
IC.sliders='<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>';
const SIDE=["arch","mus","diary","set","eras","puz"],TT={home:"Trilha da Ancestralidade",eras:"Mapa de eras",sum:"Retrospectiva",mus:"Museu da Memória",diary:"Diário",arch:"Livro de Memórias",set:"Configurações"};
let curS="home",prevS="home";
IC.x='<path d="M18 6 6 18M6 6l12 12"/>';IC.play='<polygon points="6 3 20 12 6 21 6 3"/>';
IC.map='<path d="M14.1 5.55a2 2 0 0 0 1.8 0l3.66-1.83A1 1 0 0 1 21 4.62v12.76a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.79 0l-4.21-2.1a2 2 0 0 0-1.79 0l-3.66 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9l4.55-2.27a2 2 0 0 1 1.79 0z"/><path d="M15 5.76v15M9 3.24v15"/>';
function abar(id){$("#abTitle").textContent=id==="game"&&G?`Era ${G.i+1} · ${ERAS[G.i].name}`:TT[id]||""}
function goBack(){show(SIDE.includes(curS)?(prevS==="game"&&!inRun?"home":prevS):"home")}
document.querySelectorAll('[data-go="home"]').forEach(b=>b.onclick=goBack);
let closeMenu=()=>{},openMenu=()=>{};
$("#abMenu").innerHTML=ic("menu");
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&curS==="navmenu")closeMenu()});
const _s3=show;show=id=>{if(SIDE.includes(id)&&!SIDE.includes(curS))prevS=curS;_s3(id);if(id==="game"&&G)setEra();curS=id;abar(id)};
ERAS[0].dlg=[["Amara","Eu sou Amara, uma jovem aprendiz.","Amara (fictícia)"],["Amara","Moro numa cidade comercial imaginária da África Ocidental, inspirada em cidades reais como Djenné e Tombuctu.","Amara (fictícia)"],["Amara","Aqui chegam griots, comerciantes, ferreiras e estudiosos. Vem comigo ver como a cidade decide o que fazer com o que tem?","Amara (fictícia)"]];
ERAS[1].dlg=[["Khety","Meu nome é Khety, aprendiz de escriba em Kemet, o antigo Egito africano, às margens do Nilo.","Khety (fictício)"],["Khety","Kemet foi uma civilização específica: ela não resume a África inteira.","Khety (fictício)"],["Khety","Entre o rio, a escrita e a cidade, tenho muito a aprender. Venha comigo?","Khety (fictício)"]];
ERAS[2].dlg=[["Feirante","Eu cuido de uma banca no mercado desta cidade iorubá imaginária.","Feirante (síntese)"],["Babalaô","E eu guardo e transmito os saberes da nossa tradição.","Babalaô (síntese)"],["Babalaô","Oyó foi uma potência regional nos séculos XVII e XVIII. A cidade é imaginária, mas o mundo que ela mostra foi real.","Babalaô (síntese)"]];
function introDlg(i,done){
 const E=ERAS[i],L=E.dlg,o=$("#intro");let n=0,tm=null,full=false;
 o.style.setProperty("--ib",VB[i]||"#2b1a10");
 const type=tx=>{clearInterval(tm);const el=$("#iTx");full=false;if(RMQ.matches){el.textContent=tx;full=true;return}let c=0;tm=setInterval(()=>{el.textContent=tx.slice(0,++c);if(c>=tx.length){clearInterval(tm);full=true}},20)};
 const end=()=>{clearInterval(tm);o.classList.remove("on");o.innerHTML="";done()};
 const adv=()=>{if(!full){clearInterval(tm);$("#iTx").textContent=L[n][1];full=true;return}if(n<L.length-1){n++;draw()}else end()};
 const draw=()=>{const [sp,tx,key]=L[n];
  o.innerHTML=`<div class="i-top"><span class="meta">Era ${i+1} · ${E.name}${E.draft?" · rascunho":""}</span><button class="t" id="iSkip" style="color:#f1e3c8">Pular</button></div><div class="i-sc" id="iSc">${(ART[i+1]||ART[1])(n).replace("</svg>",figure(key)+"</svg>")}</div><div class="i-box" id="iBox"><div class="i-name">${sp}</div><div class="i-txt" id="iTx"></div><div style="display:flex;justify-content:space-between;align-items:center"><span class="note">${n+1} de ${L.length}</span><button class="p" id="iNext">${n<L.length-1?"Continuar":"Começar"}</button></div></div>`;
  type(tx);$("#iNext").onclick=adv;$("#iSkip").onclick=end;$("#iSc").onclick=adv;$("#iBox").onclick=e=>{if(!e.target.closest("button"))adv()};$("#iNext").focus()};
 o.classList.add("on");draw();
}
S.puz=S.puz||{};Object.assign(TT,{puz:"Desafio do Arquivo"});
(()=>{const s=document.createElement("section");s.className="scr";s.id="puz";document.querySelector("main").append(s)})();
const shuf=a=>a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1]);
const shortK=k=>KR[k][2].split(/;|\.\s/)[0].replace(/\.$/,"");
function puzzle(i){
 const P=PZ[i],sec=$("#puz");let m=0;
 const done=()=>{if(typeof SND!=="undefined")SND.win();S.puz[i]=Math.min(S.puz[i]===undefined?99:S.puz[i],m);save();
  const nxEra=ERAS[i+1];sec.innerHTML=`<div class="retro"><p class="meta">Desafio concluído</p><h2>${nxEra?"Nova jornada desbloqueada":"Memória consolidada"}</h2><p>Você concluiu o desafio desta era${m?` com ${m} tentativa${m>1?"s":""} adicional${m>1?"is":""}`:" sem errar"} e fortaleceu os registros do Arquivo da Memória.${nxEra?` O caminho para <b>${nxEra.name}</b> está aberto.`:""}</p><button class="p big" id="pzBack">Voltar à retrospectiva</button></div>`;$("#pzBack").onclick=()=>show("sum")};
 const bad=b=>{m++;b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),700)};
 if(P.tl){let nx=0;
  sec.innerHTML=`<h2>Linha do tempo</h2><p>Toque nos acontecimentos do mais antigo para o mais recente.</p><div id="pT">${shuf(P.tl.map((t,n)=>n)).map(n=>`<button class="pzb" data-n="${n}">${P.tl[n]}</button>`).join("")}</div><div class="row"><button class="t" id="pzSkip">Voltar sem concluir</button></div>`;
  sec.querySelectorAll("#pT button").forEach(b=>b.onclick=()=>{if(+b.dataset.n===nx){b.classList.add("ok");b.disabled=true;b.insertAdjacentHTML("afterbegin",`<b>${nx+1}. </b>`);if(++nx===P.tl.length)done()}else bad(b)});
 }else{let sel=null,left=P.k.length;
  sec.innerHTML=`<h2>Restaure a página</h2><p>Ligue cada título ao trecho que o explica: toque num título e depois no trecho correspondente.</p><div class="pz"><div>${shuf(P.k).map(k=>`<button class="pzb" data-k="${k}">${KT[k]}</button>`).join("")}</div><div>${shuf(P.k).map(k=>`<button class="pzb" data-k="${k}">${shortK(k)}.</button>`).join("")}</div></div><div class="row"><button class="t" id="pzSkip">Voltar sem concluir</button></div>`;
  const [cl,cr]=sec.querySelectorAll(".pz>div");
  cl.querySelectorAll("button").forEach(b=>b.onclick=()=>{cl.querySelectorAll("button").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");sel=b});
  cr.querySelectorAll("button").forEach(b=>b.onclick=()=>{if(!sel)return;if(sel.dataset.k===b.dataset.k){sel.classList.remove("sel");sel.classList.add("ok");b.classList.add("ok");sel.disabled=b.disabled=true;sel=null;if(--left===0)done()}else bad(b)});
 }
 $("#pzSkip").onclick=()=>show("sum");show("puz");
}
/* ===== ERAS 4-7: registries ===== */
Object.assign(KR,{
"K-401":["DOC","Eltis, D. & Richardson, D., Atlas of the Transatlantic Slave Trade; Alencastro, L. F., O trato dos viventes","O Brasil foi o maior destino individual do tráfico transatlântico, recebendo cerca de 4,8 milhões de africanos desembarcados entre os séculos XVI e XIX, vindos da África Ocidental, Centro-Ocidental e Oriental."],
"K-402":["DOC","Mintz, S. & Price, R., O nascimento da cultura afro-americana; Rodrigues, J., De costa a costa","Nos portos de embarque e nos navios, pessoas que sobreviveram juntas à travessia formavam laços de “malungo” (companheiros de jornada), criando redes de parentesco simbólico e solidariedade vitalícias."],
"K-403":["DOC","Rediker, M., O navio negreiro; Reis, J. J.; Gomes, F. & Carvalho, M., O alufá Rufino","A resistência começava nos barracões costeiros e a bordo dos tumbeiros, incluindo levantes armados, greves de fome, redes de auxílio mútuo e preservação mental de cantos, preces e genealogias."],
"K-404":["DOC","Carney, J., Black Rice; Voeks, R., Sacred Leaves of Candomblé","Mulheres e homens africanos trouxeram saberes botânicos, agrícolas e medicinais (como o manejo do arroz, dendê, inhame, quiabo e folhas sagradas) que transformaram a alimentação e a farmacopeia no Brasil."],
"K-405":["INT","Thornton, J., A África e os africanos na formação do mundo atlântico; Slenes, R., Na senzala, uma flor","Os africanos escravizados não chegaram como “tábula rasa”: trouxeram cosmovisões, gramáticas culturais, técnicas metalúrgicas e agrícolas que estruturaram a sociedade brasileira."],
"K-501":["DOC","Schwartz, S., Segredos internos; Ferlini, V., Terra, trabalho e poder","Nos engenhos de açúcar e nas minas de ouro e diamantes, africanos e seus descendentes executavam não apenas o trabalho braçal extremo, mas dominavam ofícios especializados como mestres de açúcar, ferreiros, carpinteiros e mineradores."],
"K-502":["DOC","Castro, Y. P., Falares africanos na Bahia; Alkmim, T. & Petter, M., Palavras da África no Brasil","As línguas bantas (como quimbundo, quicongo e umbundo) e oeste-africanas (iorubá, fon) moldaram o vocabulário, a prosódia e a sintaxe do português brasileiro, além de sobreviverem em cantos litúrgicos e de trabalho."],
"K-503":["DOC","Reginaldo, L., Os Rosários dos Angolas; Souza, M. de M., Reis negros no Brasil escravista","As irmandades negras (como Nossa Senhora do Rosário e São Benedito) funcionavam como espaços de solidariedade, assistência médica, sepultamento digno, coroação de reis do Congo e compra coletiva de cartas de alforria."],
"K-504":["DOC","Soares, C. E. L., As ganhadeiras; Silva, M. B. N., Mulheres negras no Brasil colonial","Nas vilas e cidades coloniais, escravizadas e forras “de ganho” circulavam vendendo alimentos preparados, doces, peixes e tecidos, articulando redes de informação, poupança (pecúlio) e alforria."],
"K-505":["INT","Lara, S. H., Campos da violência; Reis, J. J. & Silva, E., Negociação e conflito","Entre a violência extrema do cativeiro e a luta aberta, os escravizados abriram brechas cotidianas por meio de fugas estratégicas, paralisações, cultivo de roças próprias (brecha camponesa) e disputas jurídicas."],
"K-601":["DOC","Carneiro, E., O Quilombo dos Palmares; Gomes, F. S., Palmares: escravidão e liberdade no Atlântico Sul","O Quilombo dos Palmares, na Serra da Barriga (atual Alagoas), durou quase todo o século XVII como uma confederação de mocambos (Macaco, Subupira, Amaro, Dandara, Zumbi) que reuniu dezenas de milhares de habitantes."],
"K-602":["DOC","Kent, R. K., Palmares: An African State in Brazil; Anderson, R. N., The Quilombo of Palmares","A organização política de Palmares dialogava com instituições centro-africanas (como o *kilombo* militar angolano), sob a liderança de Ganga Zumba e, posteriormente, de Zumbi e lideranças femininas como Dandara."],
"K-603":["DOC","Funari, P. P. & Orser, C., Arqueologia da resistência escrava; Gomes, F. S., Mocambos e quilombos","Arqueologia e documentos mostram que os quilombos não eram isolados: produziam milho, mandioca, feijão, azeite de palma, cerâmica e metalurgia, mantendo trocas comerciais e redes de informação com lavradores, tavernas e senzalas."],
"K-604":["DOC","Gomes, F. S., Histórias de quilombolas; Reis, J. J. & Gomes, F. S., Liberdade por um fio","Existiram centenas de quilombos e mocambos em todas as regiões do Brasil — na Amazônia (Trombetas), Mato Grosso (Quariterê, liderado por Tereza de Benguela), Minas Gerais (Ambrósio), Bahia (Buraco do Tatu) e Rio de Janeiro (Leblon)."],
"K-605":["INT","Moura, C., Rebeliões da senzala; Nascimento, B., O conceito de quilombo e a resistência cultural negra","Mais do que refúgio geográfico, o quilombo consolidou-se na historiografia e no pensamento negro brasileiro (como em Clóvis Moura e Beatriz Nascimento) como práxis contínua de autonomia, organização comunitária e liberdade."],
"K-701":["DOC","Chalhoub, S., Visões da liberdade; Grinberg, K., O fiador dos brasileiros: cidadania, escravidão e direito civil","Nas décadas finais da escravidão, o movimento abolicionista contou com protagonismo negro decisivo: Luís Gama libertou centenas nos tribunais, André Rebouças e José do Patrocínio articularam a imprensa e Francisco José do Nascimento (Dragão do Mar) liderou os jangadeiros no Ceará em 1881."],
"K-702":["DOC","Albuquerque, W., O jogo da dissimulação; Rios, A. L. & Mattos, H., Memórias do cativeiro","A Lei Áurea (13 de maio de 1888) extinguiu formalmente a escravidão sem prever acesso à terra, educação ou indenização aos libertos, exigindo que a população negra lutasse por cidadania efetiva na jovem República."],
"K-703":["DOC","Domingues, P., Uma história não contada; Gomes, F. S. & Domingues, P., Experiências da emancipação","No pós-abolição, trabalhadores negros criaram sociedades beneficentes, clubes dançantes e culturais, sindicatos portuários e jornais próprios (a Imprensa Negra, como *O Menelick*, *A Voz da Raça* e *O Clarim da Alvorada*)."],
"K-704":["DOC","Velloso, M. P., As tradições populares na Belle Époque; Sodré, M., Samba, o dono do corpo","No início do século XX, apesar da repressão policial às rodas de samba, capoeira e religiões de matriz africana, lideranças comunitárias como as “Tias Baianas” (Tia Ciata no Rio) e mestres no Recife e em Salvador transformaram a cultura afro-brasileira em alicerce da identidade nacional."],
"K-705":["DOC","Pereira, A. A., O mundo negro; Alberti, V. & Pereira, A. A., Histórias do movimento negro no Brasil","Da Frente Negra Brasileira (1931) e do Teatro Experimental do Negro (1944, com Abdias do Nascimento) ao Movimento Negro Unificado (1978), a mobilização negra conquistou marcos constitucionais como a titulação de terras quilombolas (1988), a Lei 10.639/2003 e as políticas de ações afirmativas."]});
Object.assign(KT,{"K-401":"A dimensão da travessia atlântica","K-402":"Laços de malungo","K-403":"Resistência nos portos e navios","K-404":"Sementes, folhas e saberes na diáspora","K-405":"Memória e bagagem cultural atlântica","K-501":"Ofícios e técnicas nos engenhos e minas","K-502":"Herança linguística banta e oeste-africana","K-503":"Irmandades negras e fundos de alforria","K-504":"Ganhadeiras e o comércio urbano","K-505":"Brechas, negociação e conflito no cativeiro","K-601":"Palmares e a Serra da Barriga","K-602":"Ganga Zumba, Dandara e Zumbi","K-603":"Agricultura, forja e comércio quilombola","K-604":"Geografia dos quilombos no Brasil","K-605":"O quilombo como horizonte de liberdade","K-701":"Protagonismo negro na Abolição","K-702":"1888 e os desafios do pós-abolição","K-703":"Associações de auxílio mútuo e Imprensa Negra","K-704":"Tias baianas, capoeira, samba e terreiros","K-705":"Movimento negro, Constituição e Lei 10.639/03"});
Object.assign(CAT,{"K-404":"Tradição cultural","K-405":"Interpretação historiográfica","K-502":"Tradição cultural","K-505":"Interpretação historiográfica","K-605":"Interpretação historiográfica","K-704":"Tradição cultural"});
OBJ.push(["O-09","Sementes e folhas da travessia",3,"K-404"],["O-10","Amuleto de malungo",3,"K-402"],["O-11","Cofre de alforria da Irmandade",4,"K-503"],["O-12","Tabuleiro das ganhadeiras",4,"K-504"],["O-13","Enxada e lança de ferro de Palmares",5,"K-603"],["O-14","Mapa dos mocambos da Serra",5,"K-601"],["O-15","Exemplar da Imprensa Negra",6,"K-703"],["O-16","Pandeiro e agogô de roda",6,"K-704"]);
Object.assign(ART,{
4:k=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#1f2e42"/><circle cx="${230-k*25}" cy="42" r="20" fill="#f1e3c8" opacity=".85"/><g fill="#f1e3c8" opacity=".6"><circle cx="45" cy="30" r="1.5"/><circle cx="95" cy="50" r="1.2"/><circle cx="170" cy="25" r="1.5"/></g><path d="M35 102l18-48 22 48z" fill="#d9a94a" opacity=".75"/><path d="M0 104q37-14 75 0t75 0 75 0 75 0v56H0z" fill="#2a435e"/><path d="M0 124q37-12 75 0t75 0 75 0 75 0v36H0z" fill="#162230"/></svg>`,
5:k=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#b36a3c"/><circle cx="${225-k*15}" cy="46" r="24" fill="#f2d28a"/><path d="M0 112h300v48H0z" fill="#5e3419"/><g fill="#e4d4b4" stroke="#2b1a10" stroke-width="2.5"><path d="M16 112V68l26-20 26 20v44z"/><path d="M42 36v14M35 43h14"/><rect x="210" y="76" width="66" height="36"/></g></svg>`,
6:k=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#3b5c36"/><circle cx="${75+k*25}" cy="44" r="24" fill="#d9a94a"/><path d="M-10 118l65-52 60 44 75-60 120 68v42H-10z" fill="#294225"/><path d="M0 120h300v40H0z" fill="#1e301b"/><g stroke="#2b1a10" stroke-width="2.5" fill="#c9893f"><path d="M22 124V96l18-16 18 16v28zM232 124V92l20-16 20 16v32z"/></g></svg>`,
7:k=>`<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#6a485e"/><circle cx="${80+k*28}" cy="44" r="22" fill="#f2d28a"/><g fill="#382534"><rect x="14" y="64" width="46" height="54"/><rect x="66" y="48" width="54" height="70"/><rect x="205" y="56" width="68" height="62"/></g><g fill="#d9a94a"><rect x="24" y="74" width="8" height="10"/><rect x="40" y="74" width="8" height="10"/><rect x="78" y="60" width="10" height="12"/><rect x="220" y="68" width="10" height="12"/></g><path d="M0 116h300v44H0z" fill="#241722"/></svg>`});
function setEra(){if(!G)return;const pal=isDark()?["#1f140b","#1c1a0e","#211210","#101924","#21150e","#121f12","#1c131e"]:["#efdfc0","#e5e3c3","#ecd6c2","#cbd8e6","#ead7c5","#cde0c8","#dfd1e3"];document.documentElement.style.setProperty("--eb",pal[G.i]||"")}
const PZ=[{k:["K-101","K-103","K-105","K-106"]},{k:["K-202","K-203","K-204","K-208"]},
{tl:["Cultura Nok desenvolve a metalurgia do ferro na África Ocidental (c. 500 a.C.)","Mansa Mussa realiza a peregrinação de Mali a Meca (1324)","O Império de Oyó consolida-se como potência regional (séculos XVII e XVIII)","Revolta e colapso de Oyó e diáspora iorubá para o Brasil (século XIX)"]},
{k:["K-401","K-402","K-403","K-404"]},{k:["K-501","K-502","K-503","K-504"]},
{tl:["Formação e fortalecimento dos mocambos do Quilombo dos Palmares na Serra da Barriga (início do séc. XVII)","Zumbi e Dandara rejeitam o acordo que entregaria novos fugitivos à escravidão (1678)","Tereza de Benguela lidera o parlamento e a defesa do Quilombo do Quariterê no Mato Grosso (séc. XVIII)","Constituição Federal reconhece o direito definitivo à terra às comunidades quilombolas (1988)"]},
{tl:["Greve dos jangadeiros liderada por Dragão do Mar impede o embarque de cativos no Ceará (1881)","Assinatura da Lei Áurea após intensa mobilização abolicionista negra e popular (1888)","Fundação da Frente Negra Brasileira e florescimento da Imprensa Negra (1931)","Sancionada a Lei 10.639, tornando obrigatório o ensino de História e Cultura Afro-Brasileira e Africana (2003)"]}];
const NEW_ERAS=[
{name:"Travessia Atlântica",char:"Malungo Kofi e Naê (síntese)",intro:"No porão de um navio negreiro e no desembarque no litoral brasileiro (séculos XVII–XIX), pessoas de diferentes regiões africanas criam laços de “malungo” para sobreviver e preservar a memória.",
dlg:[["Kofi","Fomos arrancados de nossas terras, mas não embarcamos vazios de história.","Malungo Kofi (síntese)"],["Naê","No balanço escuro do mar, quem partilha a mesma travessia torna-se “malungo” — irmão e irmã de destino.","Naê (síntese)"],["Naê","Cada palavra sussurrada, cada semente escondida e cada gesto de cuidado decide o que vai renascer do outro lado do oceano.","Naê (síntese)"]],
cards:[
{id:"E4-C1",k:["K-401","K-402"],t:"CONHECIMENTO",ch:"Malungo Kofi (síntese)",title:"Vozes na escuridão",text:"No porão, ouvem-se línguas iorubás, quimbundo, fon e macua. O medo isola, mas Kofi tenta encontrar palavras em comum com quem está ao lado.",ctx:"Conhecimento histórico: pessoas de diferentes povos criavam laços de parentesco simbólico (“malungo”) durante a travessia.",
L:{l:"Firmar pacto de malungo",fx:[8,6,10,0],flag:"malungo",learn:"Os malungos juravam proteger uns aos outros por toda a vida e tratavam os filhos uns dos outros como sobrinhos.",obj:"Amuleto de malungo"},
R:{l:"Guardar forças em silêncio",fx:[4,0,-4,0],learn:"O isolamento enfraquecia a resistência coletiva diante das condições extremas dos tumbeiros."}},
{id:"E4-C2",k:["K-404","K-405"],t:"CONHECIMENTO",ch:"Naê (síntese)",title:"O que cabe nas tranças e nas mãos",text:"Antes do embarque, Naê ocultou grãos e guardou na memória o feitio das folhas de cura e dos cantos de sua aldeia.",ctx:"Conhecimento histórico: saberes botânicos, agrícolas e medicinais africanos atravessaram o Atlântico.",
L:{l:"Preservar sementes e rezas",fx:[10,8,4,0],flag:"seeds",learn:"O manejo do arroz, do inhame, do quiabo, do dendê e das ervas medicinais remodelou o Brasil.",obj:"Sementes e folhas da travessia"},
R:{l:"Focar apenas na ração diária",fx:[0,-4,4,0],learn:"Sobreviver fisicamente era urgente, mas a memória técnica e espiritual também salvava vidas."}},
{id:"E4-C3",k:["K-403"],t:"DECISÃO",ch:"Marinheiro e cativos",title:"Sinais no convés",text:"Durante o banho de sol vigiado, um grupo percebe que parte da tripulação está distraída. Surge um murmúrio sobre agir agora ou organizar o apoio aos doentes.",ctx:"Conhecimento histórico: houve centenas de revoltas a bordo de navios negreiros, além de redes cotidianas de sobrevivência.",
L:{l:"Cuidar dos feridos e mapear rotas",fx:[6,4,8,2],learn:"Partilhar água, curar feridas e observar as estrelas mantinha o grupo vivo até o desembarque."},
R:{l:"Tentar levante no convés",fx:[4,0,-6,8],flag:"revolt",learn:"As revoltas nos tumbeiros amedrontavam os traficantes e afirmavam a luta pela liberdade desde o mar."}},
{id:"E4-C4",k:["K-402","K-405"],t:"ACONTECIMENTO",ch:"Naê (síntese)",title:"A febre no porão",text:"Uma epidemia ameaça os mais jovens. Os malungos reúnem seus conhecimentos de cuidado e cantos de alento.",ctx:"Dramatização histórica: a mortalidade na travessia era altíssima, e o amparo mútuo foi decisivo.",if:f=>f.malungo,
L:{l:"Entoar cantos e partilhar água",fx:[8,8,8,0],learn:"O amparo emocional e os cuidados tradicionais salvaram inúmeras vidas na travessia."},
R:{l:"Racionar apenas para os fortes",fx:[-6,-6,-8,0],learn:"Romper a solidariedade entre malungos feria o princípio comunitário africano."}},
{id:"E4-C5",k:["K-403"],t:"ACONTECIMENTO",ch:"Capitão do tumbeiro",title:"Ferros dobrados",text:"Após a tensão no convés, a vigilância aumenta. Como manter a comunicação entre os porões sem despertar os guardas?",ctx:"Conhecimento histórico: ritmos, cantos de trabalho e códigos linguísticos transmitiam mensagens sob o olhar dos captores.",if:f=>f.revolt,
L:{l:"Comunicar por cantos em código",fx:[8,10,4,2],learn:"Cantos na língua materna permitiam combinar ações e confortar os companheiros sem que os guardas entendessem."},
R:{l:"Cessar toda comunicação",fx:[-6,-8,-4,0],learn:"O silêncio forçado era uma das principais armas dos traficantes para quebrar laços."}},
{id:"E4-C6",k:["K-401","K-405"],t:"DECISÃO",ch:"Cais de desembarque",title:"Porto de chegada",text:"A terra firme surge no horizonte — Recife, Salvador ou Rio de Janeiro. No mercado do cais, os compradores tentarão separar os grupos.",ctx:"Conhecimento histórico: cerca de 4,8 milhões de africanos desembarcaram nos portos brasileiros.",
L:{l:"Memorizar nomes e origens de todos",fx:[12,4,8,2],learn:"Guardar quem veio no mesmo navio permitiu reencontrar parentes e malungos anos depois nas cidades e engenhos."},
R:{l:"Buscar contato com africanos no cais",fx:[4,6,8,4],learn:"Estivadores, canoeiros e ganhadeiras já estabelecidos no porto informavam os recém-chegados sobre a nova terra."}},
{id:"E4-C7",k:["K-404","K-405"],t:"CONHECIMENTO",ch:"Ancião do trapiche (fictício)",title:"Reconhecer a flora e o céu",text:"Ao pisar na terra americana, Naê repara nas matas ao redor da vila. Muitas folhas parecem irmãs das que cresciam na África.",ctx:"Conhecimento histórico: a identificação de espécies tropicais análogas permitiu recriar a medicina e a culinária sagrada no Brasil.",
L:{l:"Catalogar as folhas da nova terra",fx:[8,10,4,0],learn:"Sem folha não há cura nem axé: os saberes botânicos africanos logo se aliaram aos conhecimentos indígenas."},
R:{l:"Ensinar os mais novos a observar",fx:[8,4,6,2],learn:"Conhecer a geografia, os rios e as matas seria essencial para a sobrevivência e para futuras fugas."}}]},
{name:"Brasil Colonial",char:"Mestre Ferreiro Domingos e Luísa (síntese)",intro:"Entre os engenhos de açúcar, as minas de ouro e as ruas coloniais (séculos XVII–XVIII), africanos e crioulos articulam ofícios, irmandades, tabuleiros de ganho e estratégias de liberdade.",
dlg:[["Domingos","Nos engenhos e nas minas, dizem que somos apenas braços. Mas somos nós que conhecemos o ponto do açúcar e a têmpera do ferro.","Mestre Domingos (síntese)"],["Luísa","E nas ruas da vila, com meu tabuleiro de ganho, circulo notícias, junto moedas de cobre e articulo alforrias na Irmandade.","Luísa Ganhadeira (síntese)"],["Luísa","Sob o peso do cativeiro colonial, cada escolha entre negociação, fé e rebeldia abre uma fresta para o futuro.","Luísa Ganhadeira (síntese)"]],
cards:[
{id:"E5-C1",k:["K-501","K-505"],t:"CONHECIMENTO",ch:"Mestre Domingos (síntese)",title:"O segredo da forja e da caldeira",text:"O feitor exige mais pressa na moenda, mas só Domingos sabe consertar os eixos de ferro e medir o cozimento do caldo de cana.",ctx:"Conhecimento histórico: africanos trouxeram domínio técnico avançado em metalurgia, mineração e manufatura açucareira.",
L:{l:"Exigir folga e roça em troca do ofício",fx:[4,0,8,8],flag:"roca",learn:"O domínio de ofícios vitais dava margem para negociar a “brecha camponesa” — roças próprias para alimentar a senzala."},
R:{l:"Ensinar o ofício aos jovens cativos",fx:[10,6,6,0],learn:"Transmitir saberes técnicos entre gerações impedia que o conhecimento ficasse restrito e valorizava a comunidade."}},
{id:"E5-C2",k:["K-502"],t:"CONHECIMENTO",ch:"Cantadores do eito",title:"Vissungos e cantos de trabalho",text:"No corte da cana e na lavra do ouro em Minas, os trabalhadores entoam cantos em línguas bantas que o capataz não compreende.",ctx:"Conhecimento histórico: os vissungos e falares bantos moldaram o português do Brasil e serviram como língua franca nas senzalas.",
L:{l:"Passar avisos de fuga na letra do canto",fx:[8,8,4,6],learn:"A música de trabalho sincronizava o esforço físico, preservava o quimbundo e o quicongo e avisava sobre a aproximação de feitores."},
R:{l:"Cantar genealogias e histórias de origem",fx:[10,10,4,0],learn:"Lembrar os nomes dos ancestrais em voz alta impedia a desumanização imposta pelo sistema escravista."}},
{id:"E5-C3",k:["K-503"],t:"DECISÃO",ch:"Juíza da Irmandade",title:"A Irmandade do Rosário",text:"Aos domingos, pretos escravizados e forros reúnem-se na Irmandade de Nossa Senhora do Rosário dos Homens Pretos. Há recursos limitados no cofre.",ctx:"Conhecimento histórico: irmandades negras compravam alforrias, garantiam sepultamento digno e coroavam Reis do Congo.",
L:{l:"Comprar a alforria de uma jovem mãe",fx:[4,2,8,10],flag:"caixa",learn:"Os fundos de emancipação das irmandades libertaram milhares de pessoas e criaram redes jurídicas contra abusos senhoriais.",obj:"Cofre de alforria da Irmandade"},
R:{l:"Realizar a festa do Rei do Congo",fx:[8,12,8,0],learn:"As Congadas e coroações mantinham vivas as hierarquias políticas e diplomáticas centro-africanas dentro da colônia."}},
{id:"E5-C4",k:["K-504"],t:"DECISÃO",ch:"Luísa Ganhadeira (síntese)",title:"O tabuleiro na encruzilhada",text:"Luísa vende quitutes, peixe frito e panos da Costa na cidade. Após pagar a diária ao senhor, sobra um pequeno pecúlio.",ctx:"Conhecimento histórico: mulheres negras de ganho dominavam o comércio ambulante urbano e lideravam a compra de alforrias.",
L:{l:"Guardar para a própria carta de alforria",fx:[4,4,4,10],learn:"Mulheres conquistaram a maioria das alforrias pagas nas cidades coloniais graças ao trabalho nos tabuleiros e quitandas.",obj:"Tabuleiro das ganhadeiras"},
R:{l:"Apoiar esconderijo de fugitivos",fx:[2,2,10,8],flag:"rede",learn:"As quitandeiras conheciam cada beco e patrulha, funcionando como elo de abastecimento e informação para os quilombos."}},
{id:"E5-C5",k:["K-505"],t:"ACONTECIMENTO",ch:"Senzala do engenho",title:"Colheita da roça própria",text:"A mandioca e o feijão plantados nos domingos nas terras marginais deram boa colheita. O senhor tenta reduzir a ração semanal do engenho.",ctx:"Conhecimento histórico: escravizados defendiam com firmeza os direitos costumeiros conquistados, como o tempo e o fruto de suas roças.",if:f=>f.roca,
L:{l:"Cruzar os braços até manterem o acordo",fx:[4,0,8,10],learn:"Paralisações e fugas coletivas temporárias para o mato forçavam senhores a renegociar condições de trabalho e alimentação."},
R:{l:"Vender o excedente na feira da vila",fx:[2,6,8,4],learn:"A venda de produtos das roças permitia juntar moedas e estreitar laços com forros e roceiros livres."}},
{id:"E5-C6",k:["K-503","K-505"],t:"ACONTECIMENTO",ch:"Rábula da Irmandade",title:"Disputa no tribunal",text:"Um senhor recusa-se a reconhecer o pecúlio acumulado na caixa da Irmandade para libertar um irmão de ofício.",ctx:"Conhecimento histórico: escravizados acionaram a justiça colonial e imperial através de curadores e das irmandades.",if:f=>f.caixa,
L:{l:"Apresentar testemunhas e recibos ao juiz",fx:[8,0,6,12],learn:"As “ações de liberdade” criaram jurisprudência e mostraram que os cativos disputavam a lei palmo a palmo."},
R:{l:"Organizar a retirada dele para o quilombo",fx:[2,4,8,8],learn:"Quando a via judicial era bloqueada, a rede subterrânea entre cidade e mocambo entrava em ação."}},
{id:"E5-C7",k:["K-502","K-503"],t:"CONHECIMENTO",ch:"Tia Teresa (fictícia)",title:"O toque do calundu e do batuque",text:"À noite, longe das vistas do visitador do Santo Ofício, a comunidade reúne-se para curar enfermos com ervas, toques de atabaque e invocação dos ancestrais.",ctx:"Conhecimento histórico: os calundus coloniais preservaram matrizes espirituais centro e oeste-africanas que originaram as religiões afro-brasileiras.",
L:{l:"Realizar a roda de cura e memória",fx:[10,12,8,0],learn:"Nos calundus, a saúde do corpo e a integridade do espírito eram tratadas como uma só força coletiva."},
R:{l:"Sincretizar símbolos na capela local",fx:[8,8,6,2],learn:"Associar santos católicos a orixás, voduns e inquices foi uma estratégia inteligente de preservação sagrada sob perseguição."}}]},
{name:"Quilombo",char:"Dandara, Zumbi e Ferreiro Acotirene (síntese)",intro:"Na Serra da Barriga (Palmares, século XVII) e em centenas de mocambos pelo Brasil, comunidades inteiras erguem sociedades autônomas com agricultura diversificada, metalurgia, defesa estratégica e diplomacia.",
dlg:[["Dandara","Subimos a serra não apenas para fugir do chicote, mas para plantar um mundo onde ninguém nasça propriedade de outrem.","Dandara (síntese)"],["Zumbi","Palmares é uma rede de mocambos — Macaco, Subupira, Osenga, Dambrabanga — protegida por paliçadas, armadilhas e pelo conhecimento da mata.","Zumbi (síntese)"],["Dandara","Aqui cultivamos milho, mandioca e feijão, forjamos o ferro e debatemos em conselho o preço da paz e o valor da liberdade.","Dandara (síntese)"]],
cards:[
{id:"E6-C1",k:["K-601","K-603"],t:"CONHECIMENTO",ch:"Ferreiro de Subupira (síntese)",title:"Policultura e forjas na serra",text:"Enquanto a colônia planta quase só cana para exportar, nas terras altas de Palmares cultivam-se milho, mandioca, feijão, batata-doce e palmeiras, ao som das tendas de ferreiro.",ctx:"Conhecimento histórico: Palmares tinha economia autossuficiente e diversificada, gerando excedentes trocados com moradores vizinhos.",
L:{l:"Forjar enxadas e pontas de lança",fx:[6,6,10,6],flag:"forja",learn:"O domínio da metalurgia permitia fundir correntes capturadas e transformá-las em ferramentas agrícolas e armas de defesa.",obj:"Enxada e lança de ferro de Palmares"},
R:{l:"Ampliar os paióis subterrâneos",fx:[4,4,12,4],learn:"Guardar mantimentos em esconderijos estratégicos garantia o sustento dos mocambos durante os cercos militares."}},
{id:"E6-C2",k:["K-601","K-602"],t:"CONHECIMENTO",ch:"Conselho dos Mocambos",title:"A arquitetura do Kilombo",text:"Novos grupos chegam das senzalas de Pernambuco e Alagoas, além de indígenas aliados e perseguidos pobres. É preciso integrá-los à rede de aldeias.",ctx:"Conhecimento histórico: Palmares articulava dezenas de mocambos sob um conselho político-militar inspirado no *kilombo* centro-africano.",
L:{l:"Fundar novo mocambo vigiado na serra",fx:[8,6,10,6],learn:"A descentralização em várias aldeias fortificadas impedia que uma única expedição colonial destruísse Palmares.",obj:"Mapa dos mocambos da Serra"},
R:{l:"Treinar todos na defesa e no plantio",fx:[6,8,8,8],learn:"No quilombo, o trabalho da terra e a proteção coletiva eram responsabilidades partilhadas por homens e mulheres."}},
{id:"E6-C3",k:["K-603","K-604"],t:"DECISÃO",ch:"Mercador da várzea (fictício)",title:"Trocas na fronteira da mata",text:"Lavradores livres e taverneiros das vilas próximas oferecem pólvora, sal e ferramentas em troca da farinha, do azeite e dos cestos produzidos no quilombo.",ctx:"Conhecimento histórico: os quilombos mantinham extensas redes mercantis e de inteligência com a sociedade ao redor.",
L:{l:"Trocar mantimentos por pólvora e informações",fx:[6,4,8,8],flag:"spy",learn:"Saber com antecedência quando uma tropa bandeirante ou colonial partiria do litoral salvou Palmares dezenas de vezes."},
R:{l:"Manter segredo absoluto das trilhas",fx:[8,4,4,4],learn:"A segurança das rotas secretas na mata fechada era vital para evitar traições."}},
{id:"E6-C4",k:["K-602","K-605"],t:"DECISÃO",ch:"Dandara e Zumbi (síntese)",title:"O Tratado do Recife (1678)",text:"O governador propõe a Ganga Zumba paz e terras no vale do Cucaú para os nascidos em Palmares, mas exige a entrega de quem fugir das senzalas dali em diante.",ctx:"Conhecimento histórico: em 1678, o tratado dividiu Palmares; Zumbi e Dandara rejeitaram um acordo que mantivesse a escravidão para os demais.",
L:{l:"Rejeitar acordo que entregue irmãos",fx:[10,8,6,12],flag:"zumbi",learn:"Para Dandara e Zumbi, a liberdade não podia ser privilégio de alguns enquanto as senzalas continuassem existindo."},
R:{l:"Tentar ganhar tempo com a trégua",fx:[4,2,4,-6],learn:"A experiência no Cucaú mostrou que as autoridades coloniais logo violaram o acordo e tentaram reescravizar os palmarinos."}},
{id:"E6-C5",k:["K-601","K-602"],t:"ACONTECIMENTO",ch:"Vigias da Serra",title:"Fossos, estrepes e emboscadas",text:"Uma coluna de bandeirantes sobe a encosta com canhões. Os batedores que recebiam avisos da várzea já haviam preparado o terreno.",ctx:"Conhecimento histórico: Palmares derrotou mais de trinta expedições holandesas e luso-brasileiras usando guerrilha e fortificações de madeira e pedra.",if:f=>f.spy,
L:{l:"Atrair a tropa para as paliçadas falsas",fx:[8,6,10,10],learn:"A engenharia militar palmarina combinava fossos ocultos com estrepes pontiagudos e mobilidade rápida na floresta."},
R:{l:"Evacuar famílias para mocambos do interior",fx:[6,4,12,6],learn:"Proteger os mais velhos, as crianças e as sementes garantia que o quilombo renascesse mesmo se uma aldeia fosse queimada."}},
{id:"E6-C6",k:["K-604"],t:"CONHECIMENTO",ch:"Tereza de Benguela (histórica)",title:"De Palmares ao Quariterê e ao Trombetas",text:"Mensageiros contam que o exemplo de Palmares ecoa por todo o território: no Mato Grosso, a rainha Tereza de Benguela lidera o parlamento do Quilombo do Quariterê.",ctx:"Conhecimento histórico: no século XVIII, Tereza de Benguela governou o Quariterê com sistema de conselho, cultivo de algodão, teares e forjas.",
L:{l:"Fortalecer o conselho e os teares do quilombo",fx:[10,10,8,8],learn:"Do Pará ao Rio Grande do Sul, centenas de quilombos criaram instituições políticas próprias e economias vibrantes."},
R:{l:"Acolher indígenas e soldados desertores",fx:[6,8,10,6],learn:"Muitos quilombos, como o do Quariterê e os do Catucá em Pernambuco, articularam alianças entre negros e indígenas."}},
{id:"E6-C7",k:["K-605"],t:"CONHECIMENTO",ch:"Anciã Quilombola",title:"A semente que não morre",text:"Mesmo quando o canhão derruba a cerca de Macaco, os sobreviventes levam as sementes, os ritos e o modo de viver coletivo para novas serras e manguezais.",ctx:"Interpretação historiográfica: o quilombo permaneceu na história do Brasil como matriz de resistência e direito ao território.",
L:{l:"Transmitir a memória da Serra às crianças",fx:[12,10,8,8],learn:"Mais de três séculos depois, milhares de comunidades remanescentes de quilombos seguem vivas e conquistaram direito constitucional à terra."},
R:{l:"Espalhar núcleos quilombolas perto das cidades",fx:[6,8,10,10],learn:"No século XIX, quilombos abolicionistas como o do Leblon e o do Jabaquara seriam decisivos para o fim da escravidão."}}]},
{name:"Brasil pós-abolição",char:"Tipógrafo Teodoro e Tia Ciata (síntese)",intro:"Das lutas abolicionistas (Luís Gama, Dragão do Mar, quilombos urbanos) ao pós-1888 e século XX: imprensa negra, sociedades de auxílio mútuo, terreiros, rodas de samba e a conquista da Lei 10.639/2003.",
dlg:[["Teodoro","O 13 de maio de 1888 não caiu do céu: foi arrancado por greves nas fazendas, jangadeiros no mar, fugas em massa e batalhas jurídicas de gigantes como Luís Gama.","Teodoro Tipógrafo (síntese)"],["Tia Ciata","E quando a República tentou nos deixar sem terra, sem escola e proibiu nossos tambores, abrimos nossas casas, fundamos clubes, terreiros e sindicatos.","Tia Ciata (síntese)"],["Teodoro","Do jornal impresso no porão à Constituição e às salas de aula de hoje, cada escolha escreve a história da nossa cidadania.","Teodoro Tipógrafo (síntese)"]],
cards:[
{id:"E7-C1",k:["K-701"],t:"CONHECIMENTO",ch:"Luís Gama e Dragão do Mar (históricos)",title:"Tribunais, jangadas e fugas em massa",text:"Nos anos 1880, a escravidão rui por dentro: em São Paulo, o ex-escravizado Luís Gama liberta centenas na justiça; no Ceará, o jangadeiro Dragão do Mar declara que no porto não se embarcam mais cativos.",ctx:"Conhecimento histórico: o abolicionismo negro combinou ações jurídicas, greves portuárias, imprensa e fugas organizadas.",
L:{l:"Apoiar os jangadeiros e quilombos abolicionistas",fx:[10,6,10,12],learn:"Em 1884, a greve dos jangadeiros e a mobilização popular fizeram do Ceará a primeira província a abolir a escravidão."},
R:{l:"Multiplicar ações de liberdade nos tribunais",fx:[10,4,6,12],learn:"Luís Gama comprovou na justiça que milhares de africanos importados após a lei de 1831 e seus filhos eram legalmente livres."}},
{id:"E7-C2",k:["K-702"],t:"DECISÃO",ch:"Família liberta (1888)",title:"O dia 14 de maio",text:"Assinada a Lei Áurea sem reforma agrária nem indenização aos ex-escravizados, os fazendeiros oferecem manter o trabalho sob salários irrisórios e as antigas regras da senzala.",ctx:"Conhecimento histórico: no pós-abolição, libertos lutaram por autonomia familiar, acesso à roça própria e dignidade no trabalho.",
L:{l:"Exigir contrato justo e autonomia familiar",fx:[6,4,8,10],flag:"autonomia",learn:"Os libertos recusaram o trabalho vigiado por feitores e o trabalho infantil e feminino nos moldes da antiga senzala."},
R:{l:"Migrar para a cidade e formar associação",fx:[8,8,10,8],flag:"urbano",learn:"Nas cidades, trabalhadores negros na estiva, nas ferrovias e no serviço doméstico criaram redes de auxílio mútuo."}},
{id:"E7-C3",k:["K-704"],t:"CONHECIMENTO",ch:"Tia Ciata e Mestres (históricos)",title:"A casa como embaixada cultural",text:"A polícia da Primeira República persegue capoeiristas, sambistas e terreiros. Na Pequena África do Rio, em Salvador e no Recife, as Tias e Mestres organizam a resistência.",ctx:"Conhecimento histórico: casas como a de Tia Ciata articularam religiosidade, auxílio aos recém-chegados, festa e criação do samba urbano.",
L:{l:"Fazer a festa na sala e o samba no fundo",fx:[10,12,10,4],learn:"Com astúcia e prestígio comunitário, as Tias Baianas protegiam o candomblé e o samba, dando origem às escolas de samba e aos maracatus.",obj:"Pandeiro e agogô de roda"},
R:{l:"Articular defesa jurídica dos terreiros",fx:[8,8,8,10],learn:"Lideranças religiosas e intelectuais lutaram por décadas pelo direito constitucional à liberdade de culto afro-brasileiro."}},
{id:"E7-C4",k:["K-703"],t:"DECISÃO",ch:"Teodoro Tipógrafo (síntese)",title:"As páginas da Imprensa Negra",text:"Numa pequena oficina tipográfica, jovens redatores preparam mais uma edição de jornal (*O Clarim da Alvorada*, *A Voz da Raça*). Falta papel, mas sobram denúncias e poemas.",ctx:"Conhecimento histórico: a Imprensa Negra paulista, carioca, gaúcha e pernambucana alfabetizou, politizou e conectou comunidades negras no século XX.",
L:{l:"Denunciar o racismo e abrir escolas noturnas",fx:[12,8,8,12],flag:"imprensa",learn:"As associações negras criaram bibliotecas e cursos de alfabetização próprios quando o Estado lhes negava instrução pública.",obj:"Exemplar da Imprensa Negra"},
R:{l:"Publicar crônicas, poesias e história negra",fx:[12,12,6,4],learn:"Jornais e revistas negros valorizaram a estética, a literatura e a memória histórica de figuras como Zumbi, Dandara e Cruz e Sousa."}},
{id:"E7-C5",k:["K-703","K-705"],t:"ACONTECIMENTO",ch:"Sindicato da Estiva e Frente Negra",title:"Vozes na praça pública",text:"Com o jornal circulando de mão em mão nos bairros operários e nos portos, milhares de pessoas querem transformar as associações recreativas em força política nacional.",ctx:"Conhecimento histórico: em 1931 surgiu a Frente Negra Brasileira, reunindo dezenas de milhares de filiados em vários estados.",if:f=>f.imprensa,
L:{l:"Organizar congresso nacional e assistência",fx:[10,8,12,12],learn:"O associativismo negro oferecia atendimento médico, dentário, jurídico e formação política para enfrentar a exclusão."},
R:{l:"Fundar grupo de teatro e artes negras",fx:[10,12,8,8],learn:"Em 1944, Abdias do Nascimento criou o Teatro Experimental do Negro (TEN), formando atores, alfabetizando trabalhadores e debatendo direitos humanos."}},
{id:"E7-C6",k:["K-705"],t:"DECISÃO",ch:"Movimento Negro Contemporâneo",title:"O 20 de Novembro e a Constituição",text:"Nos anos 1970 e 1980, pesquisadores e militantes (como Oliveira Silveira, Lélia Gonzalez e Beatriz Nascimento) propõem o 20 de Novembro — dia de Zumbi — como Dia da Consciência Negra e levam propostas à Constituinte de 1988.",ctx:"Conhecimento histórico: a Constituição de 1988 tornou o racismo crime inafiançável e reconheceu o direito às terras quilombolas.",
L:{l:"Garantir terras quilombolas e criminalizar o racismo",fx:[10,6,10,14],learn:"O Artigo 68 do ADCT e o Artigo 5º da Constituição de 1988 foram conquistas históricas da mobilização negra na Constituinte."},
R:{l:"Lutar pela história da África em todas as escolas",fx:[14,12,8,10],learn:"Em 2003, a Lei 10.639 tornou obrigatório o ensino de História e Cultura Afro-Brasileira e Africana na educação básica."}},
{id:"E7-C7",k:["K-705"],t:"CONHECIMENTO",ch:"Estudantes e Guardiões do Arquivo",title:"O Arquivo Vivo do Presente",text:"Hoje, nas universidades, nos quilombos, nos terreiros e na tecnologia, uma nova geração reconstrói o arquivo que tentaram apagar.",ctx:"Conhecimento histórico: as políticas de ações afirmativas e a Lei 10.639/2003 ampliaram a produção científica e cultural negra no Brasil.",
L:{l:"Digitalizar acervos e ouvir os mais velhos",fx:[12,10,10,8],learn:"Quando a tecnologia se alia à tradição oral e à pesquisa histórica, a memória ancestral torna-se indestrutível."},
R:{l:"Partilhar este conhecimento na comunidade",fx:[10,10,12,10],learn:"Conhecer a história da África e da diáspora transforma a educação, combate o racismo e fortalece a democracia brasileira."}}]}];
NEW_ERAS.forEach((e,n)=>ERAS[3+n]=e);
const BOSSES={
3:{t:"PROVAÇÃO · GUARDIÃO DA ERA",ch:"Vozes do Atlântico",title:"A Travessia da Memória",text:"Os traficantes apostavam que o oceano apagaria nomes, línguas e deuses. Ao desembarcar no cais do Brasil, o que impede que as pessoas sejam reduzidas a mercadoria?",ctx:"Desafio Final da Era 4: os laços de malungo e a bagagem intelectual e espiritual africana.",
L:{l:"Os laços de malungo e os saberes trazidos na mente",fx:[12,10,12,6],learn:"O parentesco de malungo e os conhecimentos agrícolas, linguísticos e sagrados lançaram as bases do mundo afro-brasileiro."},
R:{l:"Esquecer o passado para sobreviver sozinho",fx:[-10,-10,-8,-4],learn:"O isolamento e o esquecimento serviam apenas ao projeto colonial de dominação."}},
4:{t:"PROVAÇÃO · GUARDIÃO DA ERA",ch:"Conselho da Irmandade e do Eito",title:"As Frestas do Sistema Colonial",text:"Diante das leis severas da colônia, alguns dizem que não há saída possível dentro das vilas e engenhos. Como manter viva a chama da autonomia?",ctx:"Desafio Final da Era 5: articulação entre irmandades, tabuleiros de ganho, ofícios e fugas.",
L:{l:"Articular irmandades, ganhadeiras, roças e mocambos",fx:[10,10,12,12],learn:"A combinação inteligente entre luta jurídica, fundos de alforria, preservação linguística e apoio aos quilombos minou o escravismo."},
R:{l:"Aceitar as regras senhoriais sem organização",fx:[-8,-8,-10,-10],learn:"Nenhum direito ou alforria no Brasil colonial foi dádiva senhorial: tudo resultou de pressão e organização."}},
5:{t:"PROVAÇÃO · GUARDIÃO DA ERA",ch:"Assembleia da Serra da Barriga",title:"O Legado de Palmares",text:"Após quase um século de resistência, exércitos inteiros cercam a Serra da Barriga. O que faz de Palmares e dos quilombos brasileiros uma vitória histórica permanente?",ctx:"Desafio Final da Era 6: o quilombo como modelo civilizatório de liberdade e comunidade.",
L:{l:"Multiplicar mocambos e semear a ideia de liberdade",fx:[12,10,12,12],learn:"A queda militar de Macaco em 1694 não extinguiu os quilombos: eles se multiplicaram por todo o Brasil até o presente."},
R:{l:"Render-se e devolver os refugiados aos engenhos",fx:[-12,-8,-12,-12],learn:"A memória de Dandara, Zumbi e Tereza de Benguela provou que a escravidão jamais foi aceita em silêncio."}},
6:{t:"PROVAÇÃO · GUARDIÃO DO ARQUIVO",ch:"Vozes da Ancestralidade e do Futuro",title:"O Que Sobrevive Quando Tentam Apagar a História?",text:"Você atravessou milênios — do Sahel, Kemet e Oyó à Travessia, aos Engenhos, a Palmares e às lutas contemporâneas. Qual é a resposta final do Arquivo da Memória?",ctx:"Provação Final da Jornada: síntese histórica, cultural e cidadã da Trilha da Ancestralidade.",
L:{l:"Sobrevive um povo que conhece sua história e luta por direitos",fx:[14,14,14,14],learn:"Memória, Cultura, Comunidade e Direitos caminharam juntos: o arquivo vivo da ancestralidade segue aberto em cada geração!"},
R:{l:"Deixar a memória restrita aos museus fechados",fx:[-6,-6,-8,-8],learn:"O patrimônio histórico só cumpre seu papel quando ilumina o presente e garante justiça social."}}};
Object.keys(BOSSES).forEach(i=>ERAS[i].cards.push(Object.assign({},BOSSES[i],{boss:true,id:"E"+(+i+1)+"-BOSS"})));
/* markdown-lite: *italic* -> <i> in new content */
const md=s=>typeof s==="string"?s.replace(/\*([^*]+)\*/g,"<i>$1</i>"):s;
Object.keys(KR).forEach(k=>KR[k][2]=md(KR[k][2]));
ERAS.forEach(e=>(e.cards||[]).forEach(c=>{c.text=md(c.text);c.ctx=md(c.ctx);["L","R"].forEach(s=>c[s].learn=md(c[s].learn))}));


/* ===== PATCH INTEGRADO: BOSSES 1-7, SISTEMA DE CRISE, FEEDBACK IMEDIATO E PORTAL DE PUZZLES ===== */
delete ERAS[2].draft;

const EARLY_BOSSES={
0:{t:"PROVAÇÃO · GUARDIÃO DA ERA",ch:"Conselho dos Anciãos e Eruditos",title:"O Enigma da Permanência",text:"Séculos passarão sobre o Sahel. Impérios mudarão de nome e fronteira. Quando o vento do deserto soprar sobre nossas muralhas, o que impedirá que nossa ciência e história desapareçam?",ctx:"Desafio Final da Era 1: a aliança entre a palavra viva dos griots, a metalurgia e os acervos escritos.",
L:{l:"Unir a voz dos griots, as oficinas e os manuscritos",fx:[12,12,10,6],learn:"A complementaridade entre tradição oral, saber técnico e escrita garantiu a sobrevivência milenar das culturas oeste-africanas."},
R:{l:"Confiar apenas na força das muralhas de pedra",fx:[-10,-8,-6,0],learn:"Muralhas caem com o tempo; é a transmissão ativa da cultura e da memória entre gerações que mantém um povo vivo."}},
1:{t:"PROVAÇÃO · GUARDIÃO DA ERA",ch:"Escribas da Casa da Vida",title:"O Espelho do Nilo",text:"Viajantes distantes tentarão contar a história de Kemet como se ela não pertencesse à África, ou como se seus monumentos fossem obra de poucos reis isolados.",ctx:"Desafio Final da Era 2: reconhecer Kemet como civilização africana sustentada pelo trabalho coletivo e ligada ao sul (Núbia/Kush).",
L:{l:"Honrar o trabalho coletivo e os laços africanos com Kush",fx:[12,10,12,6],learn:"A grandeza de Kemet nasceu do manejo coletivo do Nilo, da ciência dos papiros e do intercâmbio profundo com a Núbia e o interior da África."},
R:{l:"Tratar Kemet como um império isolado do continente",fx:[-12,-8,-8,0],learn:"Desconectar o Egito Antigo da África foi um erro histórico criado séculos depois para negar a ancestralidade científica africana."}},
2:{t:"PROVAÇÃO · GUARDIÃO DA ERA",ch:"Conselho de Oyó",title:"A Semente Antes da Tempestade",text:"As guerras do início do século XIX abalam as estruturas de Oyó e rotas de captura se aproximam. O que o povo iorubá deve carregar consigo como fortaleza invisível?",ctx:"Desafio Final da Era 3: a resiliência dos sistemas de Ifá, dos orixás e da organização feminina dos mercados.",
L:{l:"Preservar Ifá, a força dos orixás e as redes dos mercados",fx:[12,14,10,6],learn:"Mesmo sob a tragédia da diáspora, esses saberes atravessaram o oceano e recriaram o candomblé, o xangô e as redes de ganhadeiras no Brasil."},
R:{l:"Acreditar que o fim do império apaga a cultura",fx:[-10,-12,-8,0],learn:"O Estado de Oyó ruiu, mas sua matriz filosófica, linguística e comunitária renasceu com força imensa nas Américas."}}};

Object.keys(EARLY_BOSSES).forEach(i=>{
 if(!ERAS[i].cards.some(c=>c.boss)){
  const b=Object.assign({},EARLY_BOSSES[i],{boss:true,id:"E"+(+i+1)+"-BOSS"});
  b.text=md(b.text);b.ctx=md(b.ctx);b.L.learn=md(b.L.learn);b.R.learn=md(b.R.learn);
  ERAS[i].cards.push(b);
 }
});

function checkCrisis(){
 if(!G)return;
 const zeroIdx=G.st.findIndex(v=>v<=0);
 if(zeroIdx<0)return;
 const pillar=KEYS[zeroIdx];
 G.st[zeroIdx]=15;
 const cid=`CRISIS-${G.i}-${zeroIdx}-${G.used.length}`;
 G.q.unshift({
  id:cid,
  t:"CRISE COMUNITÁRIA",
  boss:true,
  crisis:true,
  ch:"Conselho de Emergência",
  title:`${pillar} em Risco Crítico!`,
  text:`O indicador de ${pillar} chegou ao limite crítico. A comunidade convoca uma roda de emergência para reerguer esse pilar antes que a memória coletiva se fragmente.`,
  ctx:"Equilíbrio coletivo: nenhuma dimensão da vida comunitária pode ser abandonada.",
  L:{
   l:`Mobilizar mutirão para restaurar ${pillar}`,
   fx:KEYS.map((_,k)=>k===zeroIdx?20:-4),
   learn:`A comunidade compartilhou esforços dos outros pilares para impedir o colapso de ${pillar}.`
  },
  R:{
   l:`Reorganizar prioridades em torno de ${pillar}`,
   fx:KEYS.map((_,k)=>k===zeroIdx?15:-2),
   learn:`Reconstruir ${pillar} exigiu cautela e pacto coletivo.`
  }
 });
}

let lastLearn="";
const _origNextCard=nextCard;
nextCard=function(){
 _origNextCard();
 const el=$(".card");
 if(el&&G&&G.cur&&G.cur.crisis)el.classList.add("crisis");
 if(lastLearn&&$("#fbBox")){
  $("#fbBox").innerHTML=`<div class="hist"><b>Consequência da escolha anterior:</b> ${lastLearn}</div>`;
 }
};

const _origBegin2=begin;
begin=function(i,r){
 lastLearn="";
 _origBegin2(i,r);
};

const _origChoose=choose;
choose=function(side){
 if(busy||!G.cur)return;
 const c=G.cur,o=(G.flip?{L:c.R,R:c.L}:c)[side];
 lastLearn=o&&o.learn?o.learn:"";
 _origChoose(side);
 checkCrisis();
};

const _origFinish=finish;
finish=function(){
 const i=G.i;
 lastLearn="";
 _origFinish();
 S.unlocked=Math.max(S.unlocked,i+2);
 save();
 const last=i===ERAS.length-1,nx=ERAS[i+1],next=!last&&nx&&!nx.lock;
 const puzDone=S.puz&&S.puz[i]!==undefined;
 const bNx=$("#bNx");
 if(bNx&&next){
  if(!puzDone){
   bNx.innerHTML=`<span>Desbloquear Era ${i+2}: ${nx.name}</span>`;
   bNx.onclick=()=>puzzle(i,true);
  }else{
   bNx.innerHTML=`<span>Seguir para Era ${i+2}: ${nx.name}</span>`;
   bNx.onclick=()=>begin(i+1);
  }
 }
};

const _origPuzzle=puzzle;
puzzle=function(i,advanceAfter=false){
 _origPuzzle(i);
 const sec=$("#puz");
 const obs=new MutationObserver(()=>{
  const backBtn=$("#pzBack");
  if(backBtn){
   obs.disconnect();
   const nx=ERAS[i+1];
   if(advanceAfter&&nx&&!nx.lock){
    backBtn.textContent=`Avançar para Era ${i+2}: ${nx.name}`;
    backBtn.onclick=()=>begin(i+1);
   }
  }
 });
 obs.observe(sec,{childList:true});
};



/* ===== UPGRADE v3: CONFERÊNCIA DE CARTAS, ÁUDIO (MÚSICA + SFX), MENU ESTILO MINECRAFT, SETAS DO TECLADO E AJUSTES VISUAIS ===== */

// 1. CONFERÊNCIA E CORREÇÃO DE TODAS AS CARTAS (IDs, Conhecimentos K, Objetos, Textos e Sinais)
delete ERAS[2].draft;

// Corrige sinal -0 na Era 1 Carta 4 ("A seca")
ERAS[0].cards[3].L.fx=[0,2,6,0];

// Vincula chaves K a todos os Bosses das Eras 1 a 7 para garantir 100% de cobertura historiográfica
const BOSS_K={0:["K-101","K-102","K-103","K-106"],1:["K-201","K-204","K-206","K-208"],2:["K-301","K-302","K-303"],3:["K-401","K-402","K-403","K-404","K-405"],4:["K-501","K-502","K-503","K-504","K-505"],5:["K-601","K-602","K-603","K-604","K-605"],6:["K-701","K-702","K-703","K-704","K-705"]};
ERAS.forEach((e,i)=>{
 (e.cards||[]).forEach(c=>{
  if(c.boss&&BOSS_K[i])c.k=BOSS_K[i];
 });
});

// Garante que qualquer objeto da Era possa também ser recuperado no Guardião caso o jogador tenha seguido outra rota
const ERA_OBJS={0:["Tambor do griot","Figura de terracota (inspirada em Nok)","Manuscrito de Tombuctu"],1:["Nilômetro","Papiro médico","Papiro matemático","Escaravelho"],2:["Contas do mercado iorubá"],3:["Amuleto de malungo","Sementes e folhas da travessia"],4:["Cofre de alforria da Irmandade","Tabuleiro das ganhadeiras"],5:["Enxada e lança de ferro de Palmares","Mapa dos mocambos da Serra"],6:["Pandeiro e agogô de roda","Exemplar da Imprensa Negra"]};

// 2. ÍCONES ADICIONAIS (Áudio, Volume, Troféu)
IC.vol='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>';
IC.mute='<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>';
Object.assign(TT,{navmenu:"Menu Principal"});
if(!SIDE.includes("navmenu"))SIDE.push("navmenu");

// 3. MOTOR DE ÁUDIO SINTETIZADO (Web Audio API — Música Ambiente Afro-Diaspórica + Efeitos Sonoros)
if(S.set.bgm===undefined)S.set.bgm=true;
if(S.set.sfx===undefined)S.set.sfx=true;

const SND=(()=>{
 let ctx=null,bgmTimer=null,step=0,curEra=-1;
 // Escalas pentatônicas por era (frequências em Hz) para harpa kora / kalimba + percussão suave
 const SCALES=[
  [196,220,261.6,293.7,329.6,392],   // Era 1: Sahel (Sol pentatônica quente)
  [164.8,196,220,246.9,293.7,329.6], // Era 2: Kemet (Mi modal)
  [220,261.6,293.7,329.6,392,440],   // Era 3: Oyó (Lá menor pentatônica)
  [146.8,174.6,196,220,261.6,293.7], // Era 4: Travessia (Ré grave oceânico)
  [196,233.1,261.6,293.7,349.2,392], // Era 5: Colonial (Sol menor)
  [220,246.9,293.7,329.6,392,440],   // Era 6: Quilombo (Lá firme da serra)
  [261.6,293.7,329.6,392,440,523.3]  // Era 7: Pós-abolição (Dó maior luminoso)
 ];
 function init(){
  if(!ctx){
   const AC=window.AudioContext||window.webkitAudioContext;
   if(AC)ctx=new AC();
  }
  if(ctx&&ctx.state==="suspended")ctx.resume();
  return ctx;
 }
 function tone(freq,durSec,type="sine",vol=0.08,delay=0,slideTo=null){
  if(!S.set.sfx||RMQ.matches)return;
  const c=init();if(!c)return;
  const t0=c.currentTime+delay;
  const osc=c.createOscillator(),g=c.createGain();
  osc.type=type;osc.frequency.setValueAtTime(freq,t0);
  if(slideTo)osc.frequency.exponentialRampToValueAtTime(slideTo,t0+durSec);
  g.gain.setValueAtTime(0.001,t0);
  g.gain.linearRampToValueAtTime(vol,t0+0.015);
  g.gain.exponentialRampToValueAtTime(0.0008,t0+durSec);
  osc.connect(g);g.connect(c.destination);
  osc.start(t0);osc.stop(t0+durSec+0.02);
 }
 function drum(freq,durSec,vol=0.05,delay=0){
  if(!S.set.bgm||RMQ.matches)return;
  const c=init();if(!c)return;
  const t0=c.currentTime+delay;
  const osc=c.createOscillator(),g=c.createGain();
  osc.type="triangle";
  osc.frequency.setValueAtTime(freq*1.6,t0);
  osc.frequency.exponentialRampToValueAtTime(freq*0.65,t0+durSec);
  g.gain.setValueAtTime(0.001,t0);
  g.gain.linearRampToValueAtTime(vol,t0+0.01);
  g.gain.exponentialRampToValueAtTime(0.0008,t0+durSec);
  osc.connect(g);g.connect(c.destination);
  osc.start(t0);osc.stop(t0+durSec+0.02);
 }
 function pluck(freq,durSec,vol=0.035,delay=0){
  if(!S.set.bgm||RMQ.matches)return;
  const c=init();if(!c)return;
  const t0=c.currentTime+delay;
  const osc=c.createOscillator(),g=c.createGain();
  osc.type="sine";
  osc.frequency.setValueAtTime(freq,t0);
  g.gain.setValueAtTime(0.001,t0);
  g.gain.linearRampToValueAtTime(vol,t0+0.02);
  g.gain.exponentialRampToValueAtTime(0.0008,t0+durSec);
  osc.connect(g);g.connect(c.destination);
  osc.start(t0);osc.stop(t0+durSec+0.02);
 }
 function tickBgm(){
  if(!S.set.bgm||!ctx||ctx.state!=="running")return;
  const idx=curEra>=0&&curEra<SCALES.length?curEra:0;
  const sc=SCALES[idx];
  const pat=[0,2,4,3,5,2,1,3];
  const note=sc[pat[step%pat.length]];
  pluck(note,0.75,0.032,0);
  if(step%2===0)drum(92,0.18,0.035,0);
  if(step%4===2)drum(138,0.14,0.025,0.22);
  if(step%8===0)pluck(sc[0]*0.5,1.4,0.025,0);
  step++;
 }
 function startBgm(eraIdx){
  if(eraIdx!==undefined)curEra=eraIdx;
  if(!S.set.bgm){stopBgm();return}
  init();
  if(!bgmTimer)bgmTimer=setInterval(tickBgm,460);
 }
 function stopBgm(){
  if(bgmTimer){clearInterval(bgmTimer);bgmTimer=null}
 }
 return {
  init,
  startBgm,
  stopBgm,
  setEra:e=>{curEra=e;if(S.set.bgm)startBgm(e)},
  click:()=>tone(520,0.06,"triangle",0.06,0,660),
  card:()=>tone(300,0.09,"sine",0.05,0,420),
  chooseL:()=>{tone(392,0.12,"triangle",0.07,0,330);tone(493.9,0.16,"sine",0.06,0.07)},
  chooseR:()=>{tone(440,0.12,"triangle",0.07,0,523.3);tone(587.3,0.16,"sine",0.06,0.07)},
  discover:()=>{[523.3,659.3,784,1046.5].forEach((f,i)=>tone(f,0.22,"sine",0.065,i*0.07))},
  boss:()=>{[220,196,164.8].forEach((f,i)=>tone(f,0.28,"sawtooth",0.045,i*0.11))},
  crisis:()=>{tone(185,0.25,"sawtooth",0.07,0,130);tone(175,0.3,"sawtooth",0.07,0.22,120)},
  ok:()=>{tone(523.3,0.12,"sine",0.07,0);tone(659.3,0.18,"sine",0.07,0.09)},
  bad:()=>{tone(210,0.18,"sawtooth",0.06,0,160)},
  win:()=>{[440,554.4,659.3,880].forEach((f,i)=>tone(f,0.28,"triangle",0.07,i*0.09))},
  page:()=>tone(360,0.08,"sine",0.045,0,280)
 };
})();

// Desbloqueia WebAudio no primeiro toque/clique ou tecla
["pointerdown","keydown"].forEach(ev=>document.addEventListener(ev,()=>{
 SND.init();
 if(S.set.bgm)SND.startBgm(G?G.i:0);
},{once:true}));

// Som universal em cliques de botões
document.addEventListener("click",e=>{
 const b=e.target.closest("button");
 if(b&&b.id!=="bL"&&b.id!=="bR")SND.click();
});

function updSoundUI(){
 const bS=$("#abSound"),bBgm=$("#bBgm"),bSfx=$("#bSfx");
 const on=S.set.bgm||S.set.sfx;
 if(bS){
  bS.innerHTML=ic(on?"vol":"mute");
  bS.setAttribute("aria-label",on?"Silenciar áudio":"Ativar áudio");
 }
 if(bBgm)bBgm.textContent=S.set.bgm?"Ligada":"Desligada";
 if(bSfx)bSfx.textContent=S.set.sfx?"Ligados":"Desligados";
}

$("#abSound").onclick=()=>{
 const anyOn=S.set.bgm||S.set.sfx;
 S.set.bgm=!anyOn;S.set.sfx=!anyOn;
 if(S.set.bgm)SND.startBgm(G?G.i:0);else SND.stopBgm();
 save();updSoundUI();
};
if($("#bBgm"))$("#bBgm").onclick=()=>{
 S.set.bgm=!S.set.bgm;
 if(S.set.bgm)SND.startBgm(G?G.i:0);else SND.stopBgm();
 save();updSoundUI();
};
if($("#bSfx"))$("#bSfx").onclick=()=>{
 S.set.sfx=!S.set.sfx;
 save();updSoundUI();if(S.set.sfx)SND.ok();
};

const _origApplySet=applySet;
applySet=function(){
 _origApplySet();
 updSoundUI();
};

// 4. TELA DE MENU DEDICADA (Substitui o antigo Drawer lateral) & TELA INICIAL ESTILO MINECRAFT
function renderNavMenu(){
 const open=ERAS.map((e,i)=>i).filter(i=>!ERAS[i].lock&&i<S.unlocked),total=ERAS.filter(e=>!e.lock).length,done=Object.keys(S.done).length;
 const cur=S.run?S.run.i:(open.find(i=>!S.done[i])??open[open.length-1]);
 $("#navmenu").innerHTML=`
  <div class="home-wrap">
   <h2>Menu do Arquivo</h2>
   <p class="note">${inRun?`Partida em pausa · Era ${G.i+1} (${ERAS[G.i].name})`:`${done} de ${total} eras concluídas · ${S.disc.length}/33 conhecimentos`}</p>
   <div class="mc-stack">
    ${inRun?`<button class="mc-btn p" data-nm="game">${ic("play")}<span>Voltar à Partida</span></button>`:`<button class="mc-btn p" id="nmPlay">${ic("play")}<span>${S.run?"Continuar Jornada":done>=total?"Jogar Novamente":"Iniciar Jornada"}</span></button>`}
    <button class="mc-btn" data-nm="eras">${ic("map")}<span>Mapa das Eras (${done}/${total})</span></button>
    <button class="mc-btn" data-nm="arch">${ic("book-open")}<span>Livro de Memórias (${S.disc.length}/33)</span></button>
    <button class="mc-btn" data-nm="mus">${ic("landmark")}<span>Museu da Memória (${S.museum.length}/${OBJ.length})</span></button>
    <button class="mc-btn" data-nm="diary">${ic("file-text")}<span>Diário de Escolhas (${S.log.length})</span></button>
    <button class="mc-btn" data-nm="set">${ic("sliders")}<span>Configurações e Áudio</span></button>
    <button class="mc-btn" data-nm="cred">${ic("award")}<span>Créditos</span></button>
    <button class="mc-btn" data-nm="home">${ic("home")}<span>Tela Inicial</span></button>
   </div>
  </div>`;
 $("#navmenu").querySelectorAll("[data-nm]").forEach(b=>b.onclick=()=>show(b.dataset.nm));
 const nmP=$("#nmPlay");
 if(nmP)nmP.onclick=()=>S.run?begin(S.run.i,S.run):done>=total?show("eras"):begin(cur||0);
}

openMenu=function(){
 if(curS==="navmenu"){goBack();return}
 show("navmenu");
};
closeMenu=function(){
 if(curS==="navmenu")goBack();
};
$("#abMenu").onclick=openMenu;

// Reescreve renderHome no estilo Minecraft: todos os botões empilhados um abaixo do outro na tela inicial, sem ícone de drawer no topo
renderHome=function(){
 const open=ERAS.map((e,i)=>i).filter(i=>!ERAS[i].lock&&i<S.unlocked),total=ERAS.filter(e=>!e.lock).length,done=Object.keys(S.done).length;
 const ret=!!S.run||S.log.length>0||done>0,cur=S.run?S.run.i:(open.find(i=>!S.done[i])??open[open.length-1]);
 $("#home").innerHTML=`
  <div class="home-wrap">
   <div class="hero"><svg viewBox="0 0 360 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="360" height="300" fill="#2a1a10"/><circle class="sun" cx="250" cy="96" r="46" fill="#d9a94a"/><circle cx="250" cy="96" r="62" fill="none" stroke="#d9a94a" stroke-width="2" opacity=".35"/><g class="l1" fill="#4a2c1a"><path d="M-20 190q70-40 140-14t140-10 120 24v120H-20z"/></g><g class="l2" fill="#3a2214" stroke="#1a110a" stroke-width="2"><path d="M20 236v-46l12-14 12 14v46zM60 236v-70l16-20 16 20v70zM104 236v-52l12-12 12 12v52zM140 236v-36l10-10 10 10v36z"/></g><path d="M0 236q45-14 90 0t90 0 90 0 90 0v64H0z" fill="#2a1a10"/><path d="M0 266q45-12 90 0t90 0 90 0 90 0v34H0z" fill="#1a110a"/><path d="M300 300v-50c0-14 8-24 18-24s18 10 18 24v50z" fill="#120b06"/><circle cx="318" cy="214" r="10" fill="#120b06"/></svg></div>
   <h1 class="ttl">Trilha da Ancestralidade</h1>
   <p class="sub">O Arquivo da Memória <span class="mc-splash">7 Eras!</span></p>
   ${ret?`<div class="st" style="text-align:left;max-width:380px;margin:8px auto"><p class="meta">${done>=total&&!S.run?"Jornada concluída":"Jornada em andamento"} · Era ${cur+1}: ${ERAS[cur].name}</p><div class="lp"><i style="width:${done/total*100}%"></i></div><p class="note">${done}/${total} eras · ${S.disc.length}/33 conhecimentos · ${S.museum.length}/${OBJ.length} relíquias</p></div>`:`<p class="lead" style="max-width:380px;margin:6px auto">Atravesse a história dos povos africanos e afro-brasileiros e reconstrua um arquivo vivo a cada decisão.</p>`}
   <div class="mc-stack">
    <button class="mc-btn p" id="hGo">${ic("play")}<span>${done>=total&&!S.run?"Escolher uma Era":ret?`Continuar (Era ${cur+1})`:"Iniciar Jornada"}</span></button>
    <button class="mc-btn" data-go="eras">${ic("map")}<span>Mapa das Eras (${done}/${total})</span></button>
    <button class="mc-btn" data-go="arch">${ic("book-open")}<span>Livro de Memórias (${S.disc.length}/33)</span></button>
    <button class="mc-btn" data-go="mus">${ic("landmark")}<span>Museu da Memória (${S.museum.length}/${OBJ.length})</span></button>
    <button class="mc-btn" data-go="diary">${ic("file-text")}<span>Diário de Escolhas</span></button>
    <button class="mc-btn" data-go="set">${ic("sliders")}<span>Opções e Áudio</span></button>
    <button class="mc-btn" data-go="cred">${ic("award")}<span>Créditos</span></button>
   </div>
  </div>`;
 $("#hGo").onclick=()=>S.run?begin(S.run.i,S.run):done>=total?show("eras"):begin(ret?cur:0);
 $("#home").querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
};

// Oculta o botão de menu na tela inicial (já que todos os botões estão na tela) e mostra nas demais telas como acesso à tela #navmenu
const _s4=show;
show=function(id){
 _s4(id);
 if(id==="navmenu")renderNavMenu();
 const abM=$("#abMenu");
 if(abM){
  abM.style.visibility=id==="home"?"hidden":"visible";
  abM.innerHTML=ic(id==="navmenu"?"x":"menu");
  abM.setAttribute("aria-label",id==="navmenu"?"Voltar":"Abrir tela de menu");
 }
};

// 5. MELHORIA VISUAL NOS INDICADORES E BOTÕES EMPILHADOS COM TECLAS DE SETA
bars=function(d,mode){
 d=d||[];const B=$("#bars");
 if(B.children.length!==4){
  B.innerHTML=KEYS.map((k,n)=>`<div class="ind-wrap"><div class="ind" role="img" aria-label="${k}"><span class="b">${ic(KI[n])}</span><span class="f">${ic(KI[n])}</span></div><span class="ind-lbl">${k}</span></div>`).join("");
 }
 [...B.children].forEach((wrap,k)=>{
  const el=wrap.querySelector(".ind"),v=G.st[k];
  el.style.setProperty("--p",v+"%");
  el.setAttribute("aria-label",`${KEYS[k]}: ${v}%`);
  el.classList.toggle("crit",v<25);
  el.classList.toggle("edge",v<=5||v>=95);
  el.classList.toggle("aff",mode==="pre"&&!!d[k]);
  if(mode==="chg"){el.classList.remove("pop");if(d[k]){void el.offsetWidth;el.classList.add("pop")}}
 });
 document.documentElement.style.setProperty("--sat",Math.min(...G.st)<30?".75":"1");
};

// Atualiza nextCard() para exibir indicadores de seta nos botões empilhados, tocar som da carta/boss e manter foco limpo
const _nextCardV2=nextCard;
nextCard=function(){
 _nextCardV2();
 SND.setEra(G?G.i:0);
 if(!G||!G.cur)return;
 const c=G.cur,V=G.flip?{L:c.R,R:c.L}:{L:c.L,R:c.R};
 // Se for Boss, garante que o último objeto não obtido da Era possa ser conquistado na resposta correta
 if(c.boss&&ERA_OBJS[G.i]){
  const miss=ERA_OBJS[G.i].find(o=>!S.museum.includes(o));
  if(miss&&!c.L.obj)c.L.obj=miss;
 }
 $("#bL").innerHTML=`<span class="ch-lbl">${V.L.l}</span><kbd class="kbd" title="Seta para Esquerda ou para Cima">← / ↑</kbd>`;
 $("#bR").innerHTML=`<span class="ch-lbl">${V.R.l}</span><kbd class="kbd" title="Seta para Direita ou para Baixo">→ / ↓</kbd>`;
 const el=$(".card");
 if(el){
  // Remove handler antigo na carta para usar o listener global de teclado
  el.onkeydown=null;
 }
 if(c.crisis)SND.crisis();
 else if(c.boss)SND.boss();
 else SND.card();
};

// Som ao escolher + sons de descoberta/finalização
const _chooseV2=choose;
choose=function(side){
 if(busy||!G||!G.cur)return;
 const c=G.cur,o=(G.flip?{L:c.R,R:c.L}:c)[side];
 const ks=c.k||[],nk=ks.filter(x=>x[0]==="K"&&!S.disc.some(d=>d.id===x));
 const no=o.obj&&!S.museum.includes(o.obj)?1:0;
 if(side==="L")SND.chooseL();else SND.chooseR();
 if(nk.length||no)setTimeout(()=>SND.discover(),140);
 _chooseV2(side);
};

// Listener global de teclado para a partida (Setas Esquerda/Cima = Botão 1, Setas Direita/Baixo = Botão 2) e Diálogo de Intro
document.addEventListener("keydown",e=>{
 if($("#intro").classList.contains("on")){
  if(e.key==="ArrowRight"||e.key==="ArrowDown"||e.key==="Enter"||e.key===" "){
   e.preventDefault();
   const nx=$("#iNext");if(nx)nx.click();
  }
  return;
 }
 if(curS==="game"&&G&&G.cur&&!busy){
  if(e.key==="ArrowLeft"||e.key==="ArrowUp"||e.key==="1"){
   e.preventDefault();
   choose("L");
  }else if(e.key==="ArrowRight"||e.key==="ArrowDown"||e.key==="2"){
   e.preventDefault();
   choose("R");
  }
 }
});

// Adiciona efeitos sonoros ao virar páginas do livro e ao resolver puzzles
const _origTurn=turn;
turn=function(d){
 SND.page();
 _origTurn(d);
};

const _origFinishV2=finish;
finish=function(){
 SND.win();
 _origFinishV2();
};


/* ===== UPGRADE v4: VOLUME SLIDER, INTERRUPTORES ON/OFF, VOZ NOS DIÁLOGOS, TEXTO DA PARTIDA E BOTÕES SEM SETAS ===== */
if(S.set.vol===undefined)S.set.vol=80;
const getVol=()=>Math.max(0,Math.min(1,(S.set.vol??80)/100));

// Adiciona som de fala dos personagens (blip suave modulado pelo timbre do personagem) ao motor SND
SND.voice=function(speaker,charIdx){
 if(!S.set.sfx||RMQ.matches||getVol()<=0)return;
 const c=SND.init();if(!c)return;
 let h=0;const s=speaker||"";
 for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;
 const base=210+(h%130);
 const f=base+((charIdx*17)%65);
 const t0=c.currentTime;
 const osc=c.createOscillator(),g=c.createGain();
 osc.type="triangle";
 osc.frequency.setValueAtTime(f,t0);
 osc.frequency.exponentialRampToValueAtTime(f*0.88,t0+0.032);
 const v=0.042*getVol();
 g.gain.setValueAtTime(0.0008,t0);
 g.gain.linearRampToValueAtTime(v,t0+0.006);
 g.gain.exponentialRampToValueAtTime(0.0008,t0+0.034);
 osc.connect(g);g.connect(c.destination);
 osc.start(t0);osc.stop(t0+0.038);
};

// Conecta o controle de volume mestre (GainNode dinâmico) ao AudioContext do SND
(()=>{
 const c=SND.init();
 // Sobrescreve connect para passar por um controle de ganho mestre se disponível
 const origCreateGain=AudioContext.prototype.createGain;
 AudioContext.prototype.createGain=function(){
  const g=origCreateGain.call(this);
  const origLin=g.gain.linearRampToValueAtTime.bind(g.gain);
  g.gain.linearRampToValueAtTime=function(val,t){
   return origLin(Math.max(0.0001,val*getVol()),t);
  };
  return g;
 };
})();

// Atualiza switches (interruptores) e slider de volume na tela de Configurações
function syncSettingsUI(){
 const isLight=S.set.th==="light";
 document.documentElement.classList.toggle("lg",!!S.set.lg);
 document.documentElement.dataset.theme=isLight?"light":"dark";
 const setSw=(id,on)=>{const el=$(id);if(el)el.setAttribute("aria-checked",on?"true":"false")};
 setSw("#bBgm",!!S.set.bgm);
 setSw("#bSfx",!!S.set.sfx);
 setSw("#bTh",isLight);
 setSw("#bLg",!!S.set.lg);
 const rv=$("#rVol"),vl=$("#vVolLbl");
 const vol=S.set.vol??80;
 if(rv)rv.value=vol;
 if(vl)vl.textContent=vol+"%";
 const bS=$("#abSound");
 const anyOn=(S.set.bgm||S.set.sfx)&&vol>0;
 if(bS){
  bS.innerHTML=ic(anyOn?"vol":"mute");
  bS.setAttribute("aria-label",anyOn?"Silenciar áudio":"Ativar áudio");
 }
}

applySet=syncSettingsUI;
updSoundUI=syncSettingsUI;

const rVolEl=$("#rVol");
if(rVolEl){
 rVolEl.oninput=e=>{
  S.set.vol=+e.target.value;
  if(S.set.vol>0&&!S.set.bgm&&!S.set.sfx){S.set.bgm=true;S.set.sfx=true;SND.startBgm(G?G.i:0)}
  save();syncSettingsUI();
 };
 rVolEl.onchange=()=>SND.ok();
}

// Sobrescreve introDlg para emitir som de fala enquanto as letras do personagem aparecem na tela
introDlg=function(i,done){
 const E=ERAS[i],L=E.dlg,o=$("#intro");let n=0,tm=null,full=false;
 o.style.setProperty("--ib",VB[i]||"#2b1a10");
 const type=(tx,sp)=>{
  clearInterval(tm);const el=$("#iTx");full=false;
  if(RMQ.matches){el.textContent=tx;full=true;return}
  let c=0;
  tm=setInterval(()=>{
   const ch=tx[c];
   el.textContent=tx.slice(0,++c);
   if(ch&&ch!==" "&&c%2===1)SND.voice(sp,c);
   if(c>=tx.length){clearInterval(tm);full=true}
  },24);
 };
 const end=()=>{clearInterval(tm);o.classList.remove("on");o.innerHTML="";done()};
 const adv=()=>{if(!full){clearInterval(tm);$("#iTx").textContent=L[n][1];full=true;return}if(n<L.length-1){n++;draw()}else end()};
 const draw=()=>{const [sp,tx,key]=L[n];
  o.innerHTML=`<div class="i-top"><span class="meta">Era ${i+1} · ${E.name}</span><button class="t" id="iSkip" style="color:#f1e3c8">Pular</button></div><div class="i-sc" id="iSc">${(ART[i+1]||ART[1])(n).replace("</svg>",figure(key)+"</svg>")}</div><div class="i-box" id="iBox"><div class="i-name">${sp}</div><div class="i-txt" id="iTx"></div><div style="display:flex;justify-content:space-between;align-items:center"><span class="note">Diálogo ${n+1} de ${L.length}</span><button class="p" id="iNext">${n<L.length-1?"Continuar":"Começar"}</button></div></div>`;
  type(tx,sp);$("#iNext").onclick=adv;$("#iSkip").onclick=end;$("#iSc").onclick=adv;$("#iBox").onclick=e=>{if(!e.target.closest("button"))adv()};$("#iNext").focus()};
 o.classList.add("on");draw();
};

// Atualiza os botões de ação (sem símbolos de seta) e melhora o texto do contador da partida (#prog)
const _nextCardV3=nextCard;
nextCard=function(){
 _nextCardV3();
 if(!G||!G.cur)return;
 const c=G.cur,V=G.flip?{L:c.R,R:c.L}:{L:c.L,R:c.R};
 // Botões limpos sem símbolo de seta
 $("#bL").innerHTML=`<span class="ch-lbl">${V.L.l}</span>`;
 $("#bR").innerHTML=`<span class="ch-lbl">${V.R.l}</span>`;
 // Calcula total de cartas elegíveis restantes na Era para exibir um indicador claro
 const remEligible=G.q.filter(x=>!x.if||x.if(G.f,G.st)).length;
 const curNum=G.used.length+1;
 const totalEst=curNum+remEligible;
 const progEl=$("#prog");
 if(progEl){
  if(c.crisis){
   progEl.textContent=`Crise Comunitária · Decisão Emergencial`;
  }else if(c.boss){
   progEl.textContent=`Provação Final da Era ${G.i+1} · Passo ${curNum} de ${totalEst}`;
  }else{
   progEl.textContent=`Passo ${curNum} de ${totalEst} · ${c.t.charAt(0)+c.t.slice(1).toLowerCase()}`;
  }
 }
};


/* ===== UPGRADE v6: 5 MODALIDADES DISTINTAS DE PUZZLES ENTRE AS 7 ERAS ===== */
// Cada Era tem uma modalidade própria para nunca ficar repetitivo:
// Era 1 (idx 0): CONECTAR PARES (Associação de conceitos da África Pré-Colonial)
// Era 2 (idx 1): RESPONDER (Quiz de Múltipla Escolha — 3 perguntas sobre Kemet)
// Era 3 (idx 2): ORDENAR (Linha do Tempo cronológica da África Ocidental a Oyó)
// Era 4 (idx 3): PREENCHER MANUSCRITO (Completar as lacunas do relato da Travessia Atlântica)
// Era 5 (idx 4): ESCOLHER A FONTE CORRETA (Quiz de Múltipla Escolha — 3 situações do Brasil Colonial)
// Era 6 (idx 5): CLASSIFICAR SABERES (Triagem rápida entre Saberes de Defesa vs. Produção & Diplomacia em Palmares)
// Era 7 (idx 6): ORDENAR MARCOS DOS DIREITOS (Linha do Tempo das conquistas abolicionistas à Lei 10.639/2003)

const PZ_MODES=[
 {
  type:"match",
  badge:"Modalidade · Conectar Saberes",
  title:"Conecte os Saberes do Sahel",
  desc:"Toque em um conceito à esquerda e depois na explicação correspondente à direita.",
  k:["K-101","K-103","K-105","K-106"]
 },
 {
  type:"quiz",
  badge:"Modalidade · Responder (Escolha Única)",
  title:"Os Registros de Kemet",
  desc:"Analise cada situação vivida pelos escribas do Nilo e escolha a única alternativa historicamente correta.",
  qs:[
   {
    q:"1. Para que servia a medição anual da cheia do Nilo com o nilômetro em Kemet?",
    opts:[
     "Planejar estoques agrícolas, obras de canais e o cálculo de tributos após a vazante.",
     "Isolar Kemet do restante da África proibindo a navegação para o sul.",
     "Substituir completamente o cultivo de grãos pelo comércio marítimo europeu."
    ],
    ans:0
   },
   {
    q:"2. O que demonstram documentos como o Papiro Rhind e os papiros médicos copiados nas Casas da Vida?",
    opts:[
     "Que a escrita hieroglífica era usada apenas para poemas funerários sem aplicação prática.",
     "O domínio avançado de geometria, cálculo de volumes, diagnósticos clínicos e cirurgia.",
     "Que todo o conhecimento científico de Kemet foi importado da Grécia clássica."
    ],
    ans:1
   },
   {
    q:"3. Como a historiografia compreende a relação de Kemet com seus vizinhos africanos ao sul, como Kush (Núbia)?",
    opts:[
     "Não havia rotas possíveis pelo rio Nilo acima da primeira catarata.",
     "Kemet era uma civilização africana em intenso contato comercial, cultural e político com a Núbia e Punt.",
     "Kush e Kemet jamais compartilharam tradições religiosas ou dinastias."
    ],
    ans:1
   }
  ]
 },
 {
  type:"timeline",
  badge:"Modalidade · Ordenar Linha do Tempo",
  title:"Cronologia da África Ocidental a Oyó",
  desc:"Toque nos acontecimentos do mais antigo (1º) para o mais recente (4º).",
  tl:[
   "Cultura Nok desenvolve a metalurgia do ferro na África Ocidental (c. 500 a.C.)",
   "Mansa Mussa realiza a célebre peregrinação de Mali a Meca e fortalece Tombuctu (1324)",
   "O Império de Oyó consolida-se como potência política e militar iorubá (séculos XVII e XVIII)",
   "Colapso de Oyó e recriação de tradições iorubás (candomblé e xangô) no Brasil (século XIX)"
  ]
 },
 {
  type:"cloze",
  badge:"Modalidade · Restaurar Relato (Lacunas)",
  title:"A Carta dos Malungos",
  desc:"Toque nas palavras abaixo na ordem correta para preencher as 3 lacunas do documento histórico sobre a Travessia Atlântica.",
  segments:[
   "O Brasil recebeu cerca de 4,8 milhões de africanos na diáspora. Nos navios e portos, os sobreviventes da mesma travessia firmavam laços vitalícios de ",
   ", protegendo uns aos outros como parentes. A resistência começava já nos ",
   ", com levantes e cantos em código, enquanto mulheres e homens preservavam ",
   " de arroz, inhame, dendê e folhas sagradas que transformaram o Brasil."
  ],
  blanks:["malungo","tumbeiros","sementes e saberes"],
  distractors:["isolamento","engenhos reais","moedas de prata"]
 },
 {
  type:"quiz",
  badge:"Modalidade · Responder (Escolha Única)",
  title:"Estratégias no Brasil Colonial",
  desc:"Escolha a única alternativa correta sobre as formas de resistência, cultura e organização sob o período colonial.",
  qs:[
   {
    q:"1. Qual era o papel das Irmandades de Homens Pretos (como a de Nossa Senhora do Rosário)?",
    opts:[
     "Atuar como espaços de solidariedade, auxílio mútuo, coroação de Reis do Congo e formação de cofres de alforria.",
     "Proibir qualquer manifestação cultural ou musical entre trabalhadores escravizados e forros.",
     "Cobrar impostos coloniais em nome da Coroa portuguesa nas regiões mineradoras."
    ],
    ans:0
   },
   {
    q:"2. Quem eram as chamadas “ganhadeiras” nas vilas e cidades coloniais brasileiras?",
    opts:[
     "Proprietárias de grandes engenhos de cana-de-açúcar no litoral nordestino.",
     "Mulheres negras (escravizadas ou forras) que dominavam o comércio ambulante, articulavam informações e compravam alforrias.",
     "Funcionárias enviadas por Lisboa para fiscalizar o comércio de tecidos."
    ],
    ans:1
   },
   {
    q:"3. Como os vissungos e as línguas bantas (quimbundo, quicongo) atuaram no cotidiano colonial?",
    opts:[
     "Desapareceram completamente logo na primeira década do século XVI.",
     "Moldaram o português brasileiro e permitiram transmitir avisos, memórias e genealogias sem que os feitores entendessem.",
     "Eram idiomas falados exclusivamente pelos governadores-gerais."
    ],
    ans:1
   }
  ]
 },
 {
  type:"classify",
  badge:"Modalidade · Classificar Estratégias",
  title:"O Conselho da Serra da Barriga",
  desc:"Classifique cada prática histórica de Palmares e dos quilombos brasileiros na categoria correta.",
  bins:["Defesa & Soberania Política","Produção & Redes de Troca"],
  items:[
   {t:"Paliçadas, fossos ocultos com estrepes e guerrilha na mata",b:0},
   {t:"Policultura de milho, mandioca, feijão e azeite de palma",b:1},
   {t:"Rejeição de Zumbi e Dandara a acordos que entregassem novos fugitivos",b:0},
   {t:"Oficinas de metalurgia para forjar enxadas e ferramentas agrícolas",b:1},
   {t:"Parlamento e conselho político liderado por Tereza de Benguela no Quariterê",b:0},
   {t:"Comércio de farinha, cestos e cerâmica por sal, pólvora e avisos na várzea",b:1}
  ]
 },
 {
  type:"timeline",
  badge:"Modalidade · Ordenar Linha do Tempo",
  title:"Da Abolição à Lei 10.639/2003",
  desc:"Ordene os marcos históricos da luta negra por cidadania e direitos no Brasil, do mais antigo ao mais recente.",
  tl:[
   "Greve dos jangadeiros liderada por Dragão do Mar impede o embarque de cativos no Ceará (1881)",
   "Assinatura da Lei Áurea após intensa pressão abolicionista negra, jurídica e popular (1888)",
   "Fundação da Frente Negra Brasileira e expansão dos jornais da Imprensa Negra (1931)",
   "Constituição criminaliza o racismo e garante direito às terras quilombolas (1988), seguida pela Lei 10.639 (2003)"
  ]
 }
];

puzzle=function(i,advanceAfter=false){
 const P=PZ_MODES[i]||PZ_MODES[0],sec=$("#puz");let m=0;
 const done=()=>{
  if(typeof SND!=="undefined")SND.win();
  S.puz[i]=Math.min(S.puz[i]===undefined?99:S.puz[i],m);save();
  const nxEra=ERAS[i+1];
  const canAdv=advanceAfter&&nxEra&&!nxEra.lock;
  sec.innerHTML=`<div class="retro"><p class="meta">Desafio concluído · ${P.badge}</p><h2>${nxEra?"Nova jornada desbloqueada":"Memória consolidada"}</h2><p>Você concluiu o desafio desta era${m?` com ${m} tentativa${m>1?"s":""} adicional${m>1?"is":""}`:" sem errar"} e fortaleceu os registros do Arquivo da Memória.${nxEra?` O caminho para <b>${nxEra.name}</b> está aberto.`:""}</p><button class="p big" id="pzBack">${canAdv?`Avançar para Era ${i+2}: ${nxEra.name}`:"Voltar à retrospectiva"}</button></div>`;
  $("#pzBack").onclick=()=>canAdv?begin(i+1):show("sum");
 };
 const bad=b=>{
  m++;if(typeof SND!=="undefined")SND.bad();
  b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),700);
 };
 const okHit=b=>{
  if(typeof SND!=="undefined")SND.ok();
  if(b)b.classList.add("ok");
 };

 const headerHTML=`<div class="pz-hdr"><span class="pz-badge">${P.badge}</span><span class="note">Era ${i+1} · ${ERAS[i].name}</span></div><h2>${P.title}</h2><p class="note">${P.desc}</p>`;
 const footerHTML=`<div class="row"><button class="t" id="pzSkip">Voltar sem concluir</button></div>`;

 if(P.type==="timeline"){
  let nx=0;
  sec.innerHTML=headerHTML+`<div id="pT" style="margin-top:12px">${shuf(P.tl.map((t,n)=>n)).map(n=>`<button class="pzb" data-n="${n}">${P.tl[n]}</button>`).join("")}</div>`+footerHTML;
  sec.querySelectorAll("#pT button").forEach(b=>b.onclick=()=>{
   if(+b.dataset.n===nx){
    okHit(b);b.disabled=true;
    b.insertAdjacentHTML("afterbegin",`<b>${nx+1}º · </b>`);
    if(++nx===P.tl.length)setTimeout(done,320);
   }else bad(b);
  });
 }else if(P.type==="match"){
  let sel=null,left=P.k.length;
  sec.innerHTML=headerHTML+`<div class="pz" style="margin-top:12px"><div>${shuf(P.k).map(k=>`<button class="pzb" data-k="${k}">${KT[k]}</button>`).join("")}</div><div>${shuf(P.k).map(k=>`<button class="pzb" data-k="${k}">${shortK(k)}.</button>`).join("")}</div></div>`+footerHTML;
  const [cl,cr]=sec.querySelectorAll(".pz>div");
  cl.querySelectorAll("button").forEach(b=>b.onclick=()=>{cl.querySelectorAll("button").forEach(x=>x.classList.remove("sel"));b.classList.add("sel");sel=b});
  cr.querySelectorAll("button").forEach(b=>b.onclick=()=>{
   if(!sel)return;
   if(sel.dataset.k===b.dataset.k){
    sel.classList.remove("sel");okHit(sel);b.classList.add("ok");
    sel.disabled=b.disabled=true;sel=null;
    if(--left===0)setTimeout(done,320);
   }else bad(b);
  });
 }else if(P.type==="quiz"){
  let qi=0;
  const drawQ=()=>{
   const cur=P.qs[qi];
   const order=shuf([0,1,2]);
   sec.innerHTML=headerHTML+`<div class="pz-card"><p class="meta">Pergunta ${qi+1} de ${P.qs.length}</p><p class="pz-q">${cur.q}</p><div class="pz-opts">${order.map((origIdx,pos)=>`<button class="pzb pz-opt" data-idx="${origIdx}"><b>${["A","B","C"][pos]}</b><span>${cur.opts[origIdx]}</span></button>`).join("")}</div></div>`+footerHTML;
   $("#pzSkip").onclick=()=>show("sum");
   sec.querySelectorAll(".pz-opt").forEach(b=>b.onclick=()=>{
    if(+b.dataset.idx===cur.ans){
     okHit(b);b.disabled=true;
     setTimeout(()=>{if(++qi>=P.qs.length)done();else drawQ()},380);
    }else bad(b);
   });
  };
  drawQ();show("puz");return;
 }else if(P.type==="cloze"){
  let bi2=0;
  const words=shuf([...P.blanks,...P.distractors]);
  const renderDoc=()=>P.segments.map((seg,idx)=>{
   if(idx>=P.blanks.length)return seg;
   const filled=idx<bi2;
   const active=idx===bi2;
   return `${seg}<span class="pz-slot${filled?" filled":active?" active":""}">${filled?P.blanks[idx]:`Lacuna ${idx+1}`}</span>`;
  }).join("");
  sec.innerHTML=headerHTML+`<div class="pz-doc" id="pzDoc">${renderDoc()}</div><p class="meta">Escolha o termo para a <b id="pzSlotLbl">Lacuna 1</b>:</p><div class="pz-bank" id="pzBank">${words.map(w=>`<button class="pzb pz-word" data-w="${w}">${w}</button>`).join("")}</div>`+footerHTML;
  sec.querySelectorAll(".pz-word").forEach(b=>b.onclick=()=>{
   if(b.dataset.w===P.blanks[bi2]){
    okHit(b);b.disabled=true;bi2++;
    $("#pzDoc").innerHTML=renderDoc();
    if(bi2>=P.blanks.length)setTimeout(done,360);
    else $("#pzSlotLbl").textContent=`Lacuna ${bi2+1}`;
   }else bad(b);
  });
 }else if(P.type==="classify"){
  const queue=shuf(P.items.slice());
  let qi=0;
  const drawItem=()=>{
   const cur=queue[qi];
   sec.innerHTML=headerHTML+`<div class="pz-card"><p class="meta">Item ${qi+1} de ${queue.length}</p><p class="pz-q">“${cur.t}”</p><p class="note">Toque na categoria a que pertence esta prática quilombola:</p><div class="pz-bins">${P.bins.map((bn,bIdx)=>`<button class="pzb pz-bin" data-b="${bIdx}"><b>${bn}</b></button>`).join("")}</div></div>`+footerHTML;
   $("#pzSkip").onclick=()=>show("sum");
   sec.querySelectorAll(".pz-bin").forEach(b=>b.onclick=()=>{
    if(+b.dataset.b===cur.b){
     okHit(b);b.disabled=true;
     setTimeout(()=>{if(++qi>=queue.length)done();else drawItem()},340);
    }else bad(b);
   });
  };
  drawItem();show("puz");return;
 }
 $("#pzSkip").onclick=()=>show("sum");
 show("puz");
};


/* ===== UPGRADE v8: TELA DE CRÉDITOS INTEGRADA AO MENU INICIAL, MENU DE PAUSA E ENCERRAMENTO ===== */
IC.award='<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>';
Object.assign(TT,{cred:"Créditos"});
if(!SIDE.includes("cred"))SIDE.push("cred");

// Garante que o botão Voltar da tela de créditos funcione com o histórico de navegação
document.querySelectorAll('#cred [data-go="home"]').forEach(b=>b.onclick=goBack);

abar("home");
applySet();show("home");