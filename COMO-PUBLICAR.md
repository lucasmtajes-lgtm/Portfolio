# Como aplicar a nova versão no GitHub Pages

O pacote adapta o seu projeto existente. Ele não cria outro portfólio, não altera sua conta e não publica nada sozinho.

Repositório de destino: https://github.com/lucasmtajes-lgtm/Portfolio

Site de destino: https://lucasmtajes-lgtm.github.io/Portfolio/

## 1. Guarde a versão atual

Antes de substituir os arquivos, baixe uma cópia do repositório atual pelo botão **Code → Download ZIP**. Se você usa Git, mantenha os arquivos salvos em um commit antes da atualização. Isso permite voltar ao layout anterior.

## 2. Extraia e copie os arquivos

Extraia `Portfolio-Lucas-Tajes-GitHub-Pages.zip`. Abra a pasta `Portfolio` do pacote e copie o seu conteúdo para a raiz do repositório existente. A raiz deve conter `index.md`, `_config.yml`, `Gemfile`, `_layouts/`, `_includes/` e `assets/` lado a lado.

Não coloque a pasta inteira dentro de outra pasta `Portfolio` do repositório. Os arquivos devem substituir os equivalentes existentes. Preserve os seus arquivos `.git` e eventuais alterações pessoais realizadas depois da cópia que originou este pacote.

O pacote mantém os arquivos existentes de `cases/`, `growth/`, `leadership/`, `tech-stack/` e `automation/`. A atualização principal está em `index.md`, `_layouts/default.html`, `_config.yml`, `assets/css/main.css`, `_includes/icons.html`, `assets/js/main.js` e `assets/images/favicon.svg`.

## 3. Envie a atualização

Se você usa o site do GitHub, abra a raiz do repositório, use **Add file → Upload files** e arraste o conteúdo da pasta extraída, mantendo a estrutura de subpastas. Confira os arquivos antes de confirmar. Não envie o ZIP como um único arquivo: ele precisa ser extraído.

Se você usa Git localmente, copie os arquivos para o seu clone, revise as alterações e execute:

```bash
git status
git add .
git commit -m "Atualiza layout do portfolio com navegacao lateral"
git push
```

Use a branch que já publica o seu site. Se desejar revisar antes de publicar, faça as alterações em uma branch separada e abra um pull request, em vez de enviar diretamente à branch de publicação.

## 4. Mantenha a forma atual de publicação

O `_config.yml` já está configurado para:

```yaml
url: "https://lucasmtajes-lgtm.github.io"
baseurl: "/Portfolio"
```

Não altere esses valores se o endereço do portfólio continuar o mesmo.

Se o repositório usa **GitHub Actions**, mantenha esse método em **Settings → Pages** e confira a execução na aba **Actions** depois de enviar os arquivos. Se ele já usa **Deploy from a branch**, preserve a branch e a pasta configuradas. Você não precisa recriar o repositório nem mudar a hospedagem para aplicar o layout.

Caso um fluxo personalizado de build já exista, mantenha-o. As dependências continuam declaradas em `Gemfile`; o layout não exige React, Node.js, banco de dados ou um servidor de aplicação.

## 5. Confira a versão publicada

Depois que o GitHub confirmar o build e a publicação, abra o endereço do site. Se ainda aparecer o visual antigo, recarregue sem cache.

Confira o menu lateral no computador e o botão de menu no celular, a foto do perfil, os links dos cases e os contatos. O botão de tema guarda sua preferência apenas no navegador utilizado.

## Contatos e informações preservados

O e-mail de contato utilizado é `lucas.m.tajes@gmail.com`, que já constava no layout do projeto recebido. O LinkedIn e o GitHub também foram preservados. Revise esse contato antes de publicar caso queira utilizar outro endereço.

As métricas, os cargos e as datas vieram do site existente. Nenhum resultado novo ou data ausente foi acrescentado. Se houver ajustes de conteúdo, edite os arquivos Markdown antes de enviar a atualização.
