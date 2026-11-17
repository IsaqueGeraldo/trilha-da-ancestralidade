# Trilha da Ancestralidade — O Arquivo da Memória

> *“O que sobrevive quando tentam apagar a história de um povo?”*

[![Jogar Agora no GitHub Pages](https://img.shields.io/badge/▶_JOGAR_AGORA-Trilha_da_Ancestralidade-d2744f?style=for-the-badge&logo=githubpages&logoColor=white)](https://isaquegeraldo.github.io/trilha-da-ancestralidade/)
[![Repositório GitHub](https://img.shields.io/badge/GitHub-isaqueGeraldo%2Ftrilha--da--ancestralidade-2d1e14?style=for-the-badge&logo=github&logoColor=f1e3c8)](https://github.com/isaqueGeraldo/trilha-da-ancestralidade)

---

## Sobre o Projeto

**Trilha da Ancestralidade — O Arquivo da Memória** é um jogo narrativo interativo e educativo desenvolvido para navegador que convida o jogador a atravessar **7 eras fundamentais da história dos povos africanos e afro-brasileiros**, equilibrando quatro pilares comunitários (**Memória**, **Cultura**, **Comunidade** e **Direitos**) enquanto reconstrói um arquivo histórico vivo.

### As 7 Eras da Jornada

1. **África Pré-Colonial** — Tradição oral dos griots, comércio transaariano, metalurgia Nok e os manuscritos de Tombuctu.
2. **Kemet** — Agricultura nas cheias do Nilo, escribas, papiros científicos e os laços africanos com Núbia/Kush.
3. **Reino de Oyó** — Organização política iorubá, mercados comandados por mulheres, Ifá e as raízes culturais que chegaram ao Brasil.
4. **Travessia Atlântica** — Laços de *malungo*, preservação de saberes botânicos e resistência nos navios e portos.
5. **Brasil Colonial** — Ofícios especializados, irmandades negras, tabuleiros das ganhadeiras e estratégias de liberdade.
6. **Quilombo** — Palmares, Serra da Barriga, Dandara, Zumbi, Tereza de Benguela e a autonomia quilombola.
7. **Brasil Pós-Abolição** — Protagonismo negro na Abolição, Imprensa Negra, Tias Baianas, Constituição de 1988 e Lei 10.639/2003.

---

## Recursos Principais

- **Mecânica de Decisões e Consequências:** Deslize ou escolha entre caminhos que alteram os pilares coletivos e desbloqueiam eventos condicionais.
- **Livro de Memórias & Museu:** Registre 33 conhecimentos historiográficos referenciados e colete 16 relíquias culturais ao longo das eras.
- **5 Modalidades de Desafios do Arquivo:** Conectar pares, quiz de escolha única, linha do tempo cronológica, restauração de manuscritos (lacunas) e classificação de estratégias.
- **Áudio Procedural (Web Audio API):** Trilhas pentatônicas dinâmicas por era, efeitos sonoros e vozes sintetizadas nos diálogos.
- **Acessibilidade e Temas:** Alternância entre modo escuro e modo claro, texto ampliado e suporte completo a navegação por teclado e leitores de tela.

---

## Estrutura de Pastas

```text
trilha-da-ancestralidade/
├── index.html          # Estrutura semântica das telas, overlays e metadados SEO
├── README.md           # Documentação e link de acesso ao jogo
├── css/
│   ├── tokens.css      # Paleta de cores (dark/light), tipografia, variáveis e keyframes
│   ├── layout.css      # Grid base, botões, appbar, toasts e diálogos
│   ├── game.css        # Tela inicial, palco de cartas, pilares e diálogos introdutórios
│   └── screens.css     # Livro de Memórias, Museu, Desafios (puzzles), Configurações e Créditos
├── data/
│   ├── eras.json       # As 7 eras, diálogos, cartas, condições declarativas e guardiões (bosses)
│   ├── knowledge.json  # Registros historiográficos, títulos, categorias e relíquias do Museu
│   ├── puzzles.json    # Configurações das 5 modalidades de desafios por era
│   └── credits.json    # Ficha técnica e créditos da equipe
└── js/
    ├── main.js         # Ponto de entrada: carrega os JSONs e inicializa os módulos
    ├── state.js        # Persistência em localStorage e preferências do usuário
    ├── audio.js        # Motor Web Audio API (trilha pentatônica por era, efeitos e voz)
    ├── art.js          # Gerador procedural de cenários e personagens SVG
    ├── engine.js       # Regras de partida, avaliação de condições, pilares e crises
    ├── puzzles.js      # Controlador das 5 modalidades de desafios do Arquivo
    └── ui.js           # Renderização de telas, gestos de arraste e atalhos de teclado
```

---

## Como Executar Localmente

Por utilizar `fetch("./data/*.json")` e `<script type="module">`, sirva o diretório através de um servidor HTTP local:

```bash
# Usando Python
python -m http.server 8000

# Ou usando Node.js (npx)
npx serve .
```

Em seguida, abra `http://localhost:8000` no navegador.

---

## Créditos

- **Isaque Lima** — *Desenvolvimento* (Implementação técnica e desenvolvimento do jogo)
- **Jordan Mayron** — *Idealização* (Concepção das ideias, construção das narrativas e definição das histórias)
- **Odirixi LTDA** — *Criação e Produção* (Criação e produção do jogo)
