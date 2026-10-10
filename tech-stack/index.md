---
layout: default
title: "Stack Técnica"
description: "Ferramentas, linguagens, plataformas e arquiteturas que uso no dia a dia."
---
<div class="hero" style="padding: var(--spacing-lg) 0;">
  <h1>Stack Técnica</h1>
  <p class="lead">Escolho ferramentas pelo problema, não pelo hype. Priorizo: controle de dados, custo previsível, versionamento, observabilidade.</p>
</div>

<section class="section">
  <h2 class="section-title">Linguagens & Core</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Python 3.11+</h3>
      <p style="color: var(--color-text-muted);">Linguagem principal. <strong>Libs:</strong> pandas, numpy, requests, httpx, google-ads, facebook-business, playwright, fastapi, pydantic, python-dotenv, beautifulsoup4, lxml, stability-sdk, replicate.</p>
      <span class="tag primary">Core</span><span class="tag">Data</span><span class="tag">APIs</span><span class="tag">Automation</span>
    </div>
    <div class="card">
      <h3>SQL / PostgreSQL</h3>
      <p style="color: var(--color-text-muted);">Supabase (PostgreSQL managed), BigQuery (analytics). <strong>Skills:</strong> queries complexas, CTEs, window functions, JSONB, RLS policies, migrações versionadas.</p>
      <span class="tag primary">Data</span><span class="tag">Warehouse</span><span class="tag">Multi-tenant</span>
    </div>
    <div class="card">
      <h3>TypeScript / JavaScript</h3>
      <p style="color: var(--color-text-muted);">n8n custom nodes, Supabase Edge Functions, dashboard frontend (React/Next.js quando necessário), Playwright scripts.</p>
      <span class="tag">n8n</span><span class="tag">Edge Functions</span><span class="tag">Frontend</span>
    </div>
    <div class="card">
      <h3>PowerShell / Bash</h3>
      <p style="color: var(--color-text-muted);">Automação Windows (Task Scheduler), deploy scripts, log analysis, CI/CD local.</p>
      <span class="tag">Windows</span><span class="tag">Scheduler</span><span class="tag">DevOps</span>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Ads & Analytics Platforms</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Google Ads API v16+</h3>
      <p style="color: var(--color-text-muted);">GAQL, Search/PMax/Shopping/Video campaigns, Keyword Planner, Change History, Recommendations, Offline Conversions.</p>
      <span class="tag primary">MCP Server</span><span class="tag">3 Skills</span>
    </div>
    <div class="card">
      <h3>Meta Marketing API v20+</h3>
      <p style="color: var(--color-text-muted);">Campaigns, Ad Sets, Ads, Creatives (upload chunks), Custom Audiences, CAPI, Insights, Async Jobs, Webhooks.</p>
      <span class="tag primary">127+ Scripts</span><span class="tag">10+ Clientes</span>
    </div>
    <div class="card">
      <h3>GA4 + GTM Server-side</h3>
      <p style="color: var(--color-text-muted);">Eventos customizados, Enhanced Ecommerce, User Properties, BigQuery Export, Consent Mode v2.</p>
      <span class="tag">Analytics</span><span class="tag">Attribution</span>
    </div>
    <div class="card">
      <h3>BigQuery + Looker Studio</h3>
      <p style="color: var(--color-text-muted);">Data warehouse unificado (ads + CRM + vendas). Dashboards executivos: ROAS, CAC, LTV, Budget Pacing, Creative Performance.</p>
      <span class="tag">Warehouse</span><span class="tag">BI</span>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Automação & Orquestração</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>n8n (Self-hosted)</h3>
      <p style="color: var(--color-text-muted);">Orquestração principal: webhooks Evolution API → Supabase → CAPI → Slack/Email. Flows versionados em JSON (Git). Custom nodes TypeScript.</p>
      <span class="tag primary">Produção</span><span class="tag">Multi-tenant</span>
    </div>
    <div class="card">
      <h3>MCP (Model Context Protocol)</h3>
      <p style="color: var(--color-text-muted);">Servidores próprios: Google Ads MCP, Meta Ads MCP. Expõem APIs como ferramentas tipadas para LLMs (Claude Code). Base de 3 skills em produção.</p>
      <span class="tag primary">Innovation</span><span class="tag">LLM-Ops</span>
    </div>
    <div class="card">
      <h3>Evolution API</h3>
      <p style="color: var(--color-text-muted);">WhatsApp Business API self-hosted: webhooks, envio mídia, grupos, status, QR code. Integração nativa n8n.</p>
      <span class="tag primary">CRM WhatsApp</span>
    </div>
    <div class="card">
      <h3>Playwright</h3>
      <p style="color: var(--color-text-muted);">Browser automation para: criação campanhas Google Ads (UI gaps), extração dados não-API, testes visuais, screenshots relatórios.</p>
      <span class="tag">Google Ads Creator</span><span class="tag">Scraping</span>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Infra & Deploy</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Docker / Docker Compose</h3>
      <p style="color: var(--color-text-muted);">Todos os serviços: n8n, Evolution API, Supabase (local), MCP servers, dashboards. <code>docker-compose.yml</code> versionado = ambiente replicável.</p>
    </div>
    <div class="card">
      <h3>GitHub Actions</h3>
      <p style="color: var(--color-text-muted);">CI: lint (ruff), typecheck (pyright), tests (pytest), build Docker. CD: deploy autômato para VPS/Cloud Run.</p>
    </div>
    <div class="card">
      <h3>VPS (Ubuntu) + Cloudflare Tunnel</h3>
      <p style="color: var(--color-text-muted);">Hospedagem própria: custo fixo, controle total, zero vendor lock-in. Cloudflare Tunnel = HTTPS + DDoS + sem porta aberta.</p>
    </div>
    <div class="card">
      <h3>Obsidian (Vault "Mãe")</h3>
      <p style="color: var(--color-text-muted);">Segundo cérebro: notas interligadas [[wikilink]], MOCs por tipo, templates, projetos linkados aos arquivos reais. Skills `cerebro-obsidian` automatiza registro.</p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Growth & IA Tools</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Stable Diffusion XL (Replicate/Stability)</h3>
      <p style="color: var(--color-text-muted);">Geração hero banners, fotos serviço, variações criativo. Custo ~$0.008/img vs $50+ designer. Prompts templateados por vertical.</p>
    </div>
    <div class="card">
      <h3>Firecrawl</h3>
      <p style="color: var(--color-text-muted);">Scraping web confiável (JS rendering, anti-bot bypass). Enriquecimento leads: telefone, email, site, horários.</p>
    </div>
    <div class="card">
      <h3>OpenStreetMap (Overpass API)</h3>
      <p style="color: var(--color-text-muted);">Descoberta POIs sem site por categoria + geo. Fonte bruta para funil "Leads Sem Site".</p>
    </div>
    <div class="card">
      <h3>Google Places API</h3>
      <p style="color: var(--color-text-muted);">Detalhes lugar: telefone, website, horários, fotos, reviews. Validação/enriquecimento OSM.</p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Princípios de Escolha</h2>
  <ul style="color: var(--color-text-muted); line-height: 2; max-width: 700px;">
    <li><strong>Data Ownership:</strong> Prefiro self-hosted (n8n, Evolution, Postgres) a SaaS — dados do cliente não vazam, custo previsível, migração trivial.</li>
    <li><strong>Versionamento Tudo:</strong> Code (Git), Infra (Docker Compose), Flows n8n (JSON), Config (YAML), Docs (Markdown no vault).</li>
    <li><strong>Observabilidade Nativa:</strong> Logs estruturados (JSON), métricas (Prometheus/Grafana quando escala), alertas (Slack/Telegram).</li>
    <li><strong>API First:</strong> Se não tem API, não escalo. Uso Playwright só para gaps temporários.</li>
    <li><strong>Custo Marginal Zero:</strong> Automações rodam na minha VPS — custo fixo independe de volume. Escala sem pedir orçamento.</li>
  </ul>
</section>