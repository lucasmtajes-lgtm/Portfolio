---
layout: default
title: "Automações em Produção"
description: "Scripts, bots, skills e workflows rodando diariamente — código real, problemas reais resolvidos."
---
<div class="hero" style="padding: var(--spacing-lg) 0;">
  <h1>Automações em Produção</h1>
  <p class="lead">10+ automações rodando em produção. Cada uma nasceu de uma dor real, foi versionada, testada, documentada e está no GitHub (privado) ou no vault Obsidian.</p>
</div>

<section class="section">
  <h2 class="section-title">Skills Claude Code (Produção Diária)</h2>
  <ul class="automation-list">
    <li>
      <article class="card">
        <h3>checar-saldos</h3>
        <p style="color: var(--color-text-muted);">Lê "Fundos disponíveis" de todas as contas MCC via Google Ads API → retorna 2 listas: (1) sem saldo ou ≤ R$100, (2) com saldo > R$100 mas não rodou. Roda diário via Task Scheduler. Base: `saldo_contas/checar_saldos.py` do MCP Google Ads.</p>
        <div class="card-tags">
          <span class="tag primary">Google Ads API</span><span class="tag">MCP</span><span class="tag">Task Scheduler</span><span class="tag">Daily</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>pmax-search-terms</h3>
        <p style="color: var(--color-text-muted);">Extrai search term insights de campanhas PMax via `search_term_view` + segmentação por asset group → identifica termos irrelevantes → sugere negativos em lote. Usado semanal para auditoria PMax.</p>
        <div class="card-tags">
          <span class="tag primary">Google Ads API</span><span class="tag">GAQL</span><span class="tag">PMax</span><span class="tag">Weekly</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>google-ads-creator</h3>
        <p style="color: var(--color-text-muted);">Input: URL + brief → GPT gera copy (headlines/descriptions) → Playwright cria campanha Search ou PMax direto no Ads Manager. Do brief ao live em <3 min.</p>
        <div class="card-tags">
          <span class="tag primary">Playwright</span><span class="tag">GPT</span><span class="tag">MCP</span><span class="tag">On-demand</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>post-lt-digital</h3>
        <p style="color: var(--color-text-muted);">Pipeline conteúdo Instagram @lt__digital: pesquisa tendências (web search) → copy → arte Canva (imagem/carrossel) → hospeda imagens → publica. Com revisão humana antes de postar.</p>
        <div class="card-tags">
          <span class="tag primary">Web Search</span><span class="tag">Canva API</span><span class="tag">Instagram API</span><span class="tag">Weekly</span>
        </div>
      </article>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section-title">Scripts & Bots (Produção)</h2>
  <ul class="automation-list">
    <li>
      <article class="card">
        <h3>MCP Google Ads Server</h3>
        <p style="color: var(--color-text-muted);">Servidor MCP completo: 30+ ferramentas (GAQL, mutations, keyword planner, accounts). Base das 3 skills acima. Roda local via stdio, credenciais em `.venv`. Versionado, documentado, testado.</p>
        <div class="card-tags">
          <span class="tag primary">MCP</span><span class="tag">Python</span><span class="tag">OAuth2</span><span class="tag">MCC</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>MCP Meta Ads Scripts (127+)</h3>
        <p style="color: var(--color-text-muted);">Biblioteca de scripts reutilizáveis: análise performance, criação campanhas/criativos (carrossel, vídeo, WhatsApp, formulário), gestão públicos, migração Form→WhatsApp, fix geo, preview links. Padrão: `criar_*.py`, `analise_*.py`.</p>
        <div class="card-tags">
          <span class="tag primary">Meta API</span><span class="tag">Python</span><span class="tag">Multi-client</span><span class="tag">Templates</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>CRM WhatsApp (n8n + Evolution + Supabase)</h3>
        <p style="color: var(--color-text-muted);">Flows: ingestão webhook → atribuição metadados Meta → lead scoring (Frio/Quente/Comprador) → dashboard → CAPI (Lead+Purchase). 3 flows principais + sub-workflows. Multi-tenant via RLS. `crm-kit-replicacao.md` para onboarding.</p>
        <div class="card-tags">
          <span class="tag primary">n8n</span><span class="tag">Evolution API</span><span class="tag">Supabase</span><span class="tag">CAPI</span><span class="tag">Docker</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>Leads Sem Site (Pipeline IA)</h3>
        <p style="color: var(--color-text-muted);">OSM → Places/Firecrawl → Stable Diffusion XL → Site HTML/CSS/JS demo. Orquestrador `gerar_site_completo.py`. 3 demos publicadas. Funil validado: 87→63→11 (13%).</p>
        <div class="card-tags">
          <span class="tag primary">Python</span><span class="tag">SDXL</span><span class="tag">Firecrawl</span><span class="tag">OSM</span><span class="tag">R&D</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>Lab Probabilidade M1 (Trading Bot)</h3>
        <p style="color: var(--color-text-muted);">Coleta velas M1 Pocket Option → Wilson CI 95% > BE real (payout médio wins) → backtest offline → automação análise diária (Task Scheduler 07:30 + PowerShell + Python) → iteração autônoma (V1→V2→FLUXO→JACARÉ). 300+ trades auditados.</p>
        <div class="card-tags">
          <span class="tag primary">Python</span><span class="tag">Pandas</span><span class="tag">Statistics</span><span class="tag">Task Scheduler</span><span class="tag">Autonomous</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>Dashboard Motorleads (Google Ads)</h3>
        <p style="color: var(--color-text-muted);">Dashboard web (`dashboard/app.py` + `index.html`) — métricas por conta: spend, impressions, clicks, CTR, CPC, conversions, cost/conv, ROAS. Filtros data, conta, campanha. Deploy local/VPS.</p>
        <div class="card-tags">
          <span class="tag primary">FastAPI</span><span class="tag">HTML/JS</span><span class="tag">BigQuery</span><span class="tag">Real-time</span>
        </div>
      </article>
    </li>
    <li>
      <article class="card">
        <h3>Relatórios Automatizados (HTML/PDF/MD)</h3>
        <p style="color: var(--color-text-muted);">Scripts `analise_*.py` geram relatórios por cliente/período: performance resumida, creative breakdown, search terms, budget pacing, anomalias. Output: HTML (interativo), PDF (cliente), MD (vault).</p>
        <div class="card-tags">
          <span class="tag primary">Python</span><span class="tag">Jinja2</span><span class="tag">WeasyPrint</span><span class="tag">Weekly</span>
        </div>
      </article>
    </li>
  </ul>
</section>

<section class="section">
  <h2 class="section-title">Arquitetura de Automação (Padrão)</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>1. Inputs Tipados</h3>
      <p style="color: var(--color-text-muted);">Pydantic models / dataclasses para config, secrets (`.env`), parâmetros CLI. Validação falha cedo.</p>
    </div>
    <div class="card">
      <h3>2. Idempotência</h3>
      <p style="color: var(--color-text-muted);">Chaves únicas (event_id, lead_id, campaign_id) + tabelas de controle → re-run seguro, sem duplicatas.</p>
    </div>
    <div class="card">
      <h3>3. Logs Estruturados</h3>
      <p style="color: var(--color-text-muted);">JSON lines: timestamp, level, module, action, payload, result, duration_ms. Queryable (jq, pandas, Loki).</p>
    </div>
    <div class="card">
      <h3>4. Observabilidade</h3>
      <p style="color: var(--color-text-muted);">Healthcheck endpoint, métricas Prometheus (quando escala), alerta Slack/Telegram em falha + retry com backoff.</p>
    </div>
    <div class="card">
      <h3>5. Deploy Reproduzível</h3>
      <p style="color: var(--color-text-muted);">Dockerfile + docker-compose + GitHub Actions (lint, typecheck, test, build). `make deploy` = um comando.</p>
    </div>
    <div class="card">
      <h3>6. Documentação Viva</h3>
      <p style="color: var(--color-text-muted);">README com uso, arquitetura, troubleshooting, subcodes mapeados. Atualizado a cada change. Linkado no vault Obsidian.</p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Repositórios Privados (Referência)</h2>
  <p style="color: var(--color-text-muted); max-width: 700px; margin-bottom: var(--spacing-md);">Código real não é público (dados sensíveis, IP da agência). Disponível para revisão técnica em entrevista:</p>
  <ul style="color: var(--color-text-muted); line-height: 2; max-width: 700px;">
    <li><strong>mcp-google-ads/</strong> — MCP server + skills + dashboard + scripts cliente</li>
    <li><strong>mcp-meta-ads/</strong> — 127+ scripts, flows n8n, relatórios, templates</li>
    <li><strong>crm-whatsapp/</strong> — n8n flows, Supabase schemas, Docker, CAPI impl</li>
    <li><strong>leads-sem-site/</strong> — Pipeline IA completo, 3 demos, CSV funil</li>
    <li><strong>trader/</strong> — Lab probabilidade, 9 estratégias, automação diária, bot 3 autônomo</li>
    <li><strong>Mãe/ (Vault Obsidian)</strong> — 100+ notas interligadas, MOCs, templates, decisões, learnings</li>
  </ul>
</section>