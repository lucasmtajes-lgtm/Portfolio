# Lucas Tajes — Performance & Growth

Portfólio pessoal em Jekyll, adaptado à referência visual indicada por Lucas: [perfil de Vitali Bakun na Onlinuum](https://onlinuum.com/team/vitali-bakun/). A marca, o retrato, as experiências e os cases pertencem ao portfólio de Lucas.

Site de destino: https://lucasmtajes-lgtm.github.io/Portfolio/

## O que mudou

O layout ganhou navegação lateral fixa com ícones, marca própria centralizada no cabeçalho, apresentação do perfil em duas colunas e uma hierarquia tipográfica mais próxima da referência. As seções usam espaçamento amplo, divisórias discretas, cartões numerados e a combinação de creme com verde-floresta.

O menu se torna recolhível no celular. O tema claro é o padrão, com opção de tema escuro persistente. Os controles de teclado, foco visível, navegação por Escape e preferência de movimento reduzido foram considerados. O JavaScript cuida somente de menu, tema e carrosséis; o conteúdo é gerado como HTML pelo Jekyll.

As páginas e os caminhos existentes foram preservados, assim como o prefixo `/Portfolio`. Não foram inventados períodos, métricas ou novas experiências.

## Publicação

Veja [COMO-PUBLICAR.md](COMO-PUBLICAR.md) para aplicar os arquivos no repositório existente. O pacote não altera o site publicado automaticamente.

## Estrutura

```text
Portfolio/
├── _config.yml                  # URL, baseurl, plugins e configuração Jekyll
├── Gemfile                      # Dependências Ruby
├── _includes/icons.html         # Ícones SVG locais
├── _layouts/default.html        # Cabeçalho, menu, conteúdo, contato e rodapé
├── _layouts/case.html           # Template dos cases
├── assets/css/main.css          # Estilo, temas e responsividade
├── assets/js/main.js            # Menu, tema e carrosséis
├── assets/images/               # Retrato e favicon de Lucas
├── index.md                     # Perfil e apresentação principal
├── cases/                       # Listagem e páginas de cases
├── growth/index.md              # Growth
├── leadership/index.md          # Liderança
├── tech-stack/index.md          # Plataformas e ferramentas
└── automation/index.md          # Automação
```

## Edição

Edite `index.md` para atualizar o perfil. Os cases estão em `cases/`, e as páginas institucionais ficam em suas pastas correspondentes. O contato no layout compartilhado está em `_layouts/default.html`; o contato principal da home fica no final de `index.md`. As datas e resultados foram mantidos conforme o projeto recebido.

Referencie arquivos e links internos usando o filtro Liquid `relative_url`, para que continuem funcionando no subdiretório do GitHub Pages:

```liquid
<img src="{{ '/assets/images/exemplo.jpg' | relative_url }}" alt="Descrição da imagem">
<a href="{{ '/cases/brinox/' | relative_url }}">Conhecer o case Brinox</a>
```

## Desenvolvimento local

Com Ruby, Bundler e ferramentas de compilação instalados:

```bash
bundle install
bundle exec jekyll serve
```

Abra `http://localhost:4000/Portfolio/`. Para compilar sem iniciar o servidor:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

O resultado fica em `_site/`. Não copie essa pasta sobre os arquivos-fonte. O Google Fonts fornece a JetBrains Mono; se estiver indisponível, o site usa a fonte monoespaçada do sistema.
