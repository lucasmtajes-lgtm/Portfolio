# Lucas Tajes — Performance & Growth Portfolio

[![Deploy to GitHub Pages](https://github.com/lucastraba/portfolio/actions/workflows/jekyll.yml/badge.svg)](https://github.com/lucastraba/portfolio/actions/workflows/jekyll.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Analista de Performance | Growth | Squad Leader**  
Transformo budgets em resultados mensuráveis via Google Ads, Meta Ads, automação e decisões baseadas em dados.

🌐 **Live:** https://lucastraba.github.io/portfolio  
📧 **Contato:** lucas.traba@gmail.com  
💼 **LinkedIn:** [linkedin.com/in/lucastraba](https://linkedin.com/in/lucastraba)  
🐙 **GitHub:** [github.com/lucastraba](https://github.com/lucastraba)

---

## 📊 Resumo Executivo

| Métrica | Valor |
|---------|-------|
| Budget gerido/ano | R$ 1M+ |
| Contas ativas | 15+ |
| ROAS médio alvo | 3.5x |
| Automações em produção | 10+ |
| Anos experiência | 4+ |
| Squad liderado | 3-5 pessoas |

---

## 🎯 Cases Principais

| Case | Role | Budget | Stack Principal | Link |
|------|------|--------|-----------------|------|
| **MCP Google Ads** | Performance Analyst / Backend | R$ 3M+/ano | Python, Google Ads API, MCP, GAQL, BigQuery | [Ver case](/cases/mcp-google-ads/) |
| **MCP Meta Ads** | Performance Analyst / Backend | R$ 2M+/ano | Python, Meta API, n8n, Evolution API | [Ver case](/cases/mcp-meta-ads/) |
| **Leads Sem Site** | Growth Engineer | R$ 0 (R&D) | Python, SDXL, Firecrawl, OSM, Places API | [Ver case](/cases/leads-sem-site/) |
| **CRM WhatsApp** | Squad Leader / Tech Lead | R$ 500k+ otimizado | n8n, Supabase, Docker, Meta CAPI | [Ver case](/cases/crm-whatsapp/) |
| **Lab Probabilidade M1** | Growth / Data Science | Próprio | Python, Pandas, Wilson CI, PyInstaller | [Ver case](/cases/prob-lab-trading/) |

---

## 🛠 Stack Principal

**Ads & Analytics:** Google Ads API, Meta Marketing API, GA4/GTM Server-side, BigQuery, Looker Studio, Mixpanel  
**Backend & Data:** Python 3.11, SQL/PostgreSQL (Supabase), Pandas, FastAPI, Docker  
**Automação & Orquestração:** n8n (self-hosted), MCP (Model Context Protocol), Playwright, Evolution API  
**Growth Tools:** Stable Diffusion XL, Firecrawl, OpenStreetMap, Google Places API, Replicate  
**Infra:** VPS Ubuntu + Cloudflare Tunnel, GitHub Actions CI/CD, Obsidian (vault "Mãe")

---

## 📁 Estrutura do Repo

```
portfolio/
├── _config.yml              # Jekyll config
├── index.md                 # Homepage
├── README.md                # Este arquivo
├── assets/
│   ├── css/main.css         # Estilos
│   ├── images/              # Prints/dashboard (adicionar)
│   └── pdfs/                # Relatórios (adicionar)
├── _layouts/
│   ├── default.html         # Layout base
│   └── case.html            # Layout case study
├── cases/
│   ├── index.md             # Lista de cases
│   ├── mcp-google-ads.md
│   ├── mcp-meta-ads.md
│   ├── leads-sem-site.md
│   ├── crm-whatsapp.md
│   └── prob-lab-trading.md
├── growth/index.md          # Growth & Experimentação
├── leadership/index.md      # Liderança & Squad
├── tech-stack/index.md      # Stack Técnica
└── automation/index.md      # Automações em Produção
```

---

## 🚀 Deploy no GitHub Pages

### 1. Criar repositório
```bash
# No GitHub: New repository → "portfolio" → Public
# Clone local:
git clone https://github.com/lucastraba/portfolio.git
cd portfolio
```

### 2. Copiar arquivos
```bash
# Copie todo o conteúdo desta pasta para o repo clonado
# Ou use este diretório como working tree
```

### 3. Push inicial
```bash
git add .
git commit -m "feat: portfolio inicial com 5 cases, growth, leadership, tech-stack, automation"
git push origin main
```

### 4. Ativar GitHub Pages
- Settings → Pages → Source: **Deploy from a branch**
- Branch: **main** / **/(root)** (Jekyll builda automaticamente)
- Save → Aguarde ~2 min → Disponível em `https://lucastraba.github.io/portfolio`

### 5. Custom Domain (opcional)
- Settings → Pages → Custom domain: `portfolio.lucastraba.com`
- DNS: CNAME `portfolio` → `lucastraba.github.io`
- Enforce HTTPS ✅

---

## 🔧 Desenvolvimento Local

```bash
# Pré-requisitos: Ruby 3.2+, Bundler
gem install bundler jekyll
bundle install
bundle exec jekyll serve --livereload
# Abre em http://localhost:4000/portfolio
```

---

## 📝 Adicionando Assets (Prints, Dashboards, PDFs)

1. **Imagens:** Coloque em `assets/images/` (ex: `dashboard-roas.png`, `crm-kanban.png`)
2. **PDFs:** Coloque em `assets/pdfs/` (ex: `relatorio-mensal-cliente-x.pdf`)
3. **Referenciar nos cases:**
   ```markdown
   ![Dashboard ROAS](/assets/images/dashboard-roas.png)
   [Relatório PDF](/assets/pdfs/relatorio-mensal.pdf)
   ```

**Dica:** Anonimize dados sensíveis (nomes clientes, IDs contas, valores absolutos) — use "% de melhoria", "indexado base 100", ranges.

---

## 📄 Licença

MIT License — sinta-se livre para usar como referência para seu próprio portfolio.

---

## 🤝 Conecte-se

- **LinkedIn:** [linkedin.com/in/lucastraba](https://linkedin.com/in/lucastraba)
- **GitHub:** [github.com/lucastraba](https://github.com/lucastraba)
- **Email:** lucas.traba@gmail.com

---

*Última atualização: Outubro 2026*