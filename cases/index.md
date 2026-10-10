---
layout: default
title: "Cases"
description: "Cases detalhados de Performance, Growth e Liderança — métricas reais, abordagem e learnings."
---
<div class="hero" style="padding: var(--spacing-lg) 0;">
  <h1>Cases</h1>
  <p class="lead">Projetos reais com métricas reais. Cada case segue: Desafio → Hipótese → Ações → Resultados → Learnings.</p>
</div>

<ul class="cases-list">
  <li>
    <article class="card">
      <div class="card-meta">
        <span>Performance Analyst</span>
        <span>2024–Atual</span>
        <span>R$ 3M+/ano</span>
      </div>
      <h3><a href="{{ '/cases/mcp-google-ads/' | relative_url }}" style="color: inherit; text-decoration: none;">MCP Google Ads — Plataforma de Gestão & Automação</a></h3>
      <p>Servidor MCP customizado para Google Ads API: relatórios GAQL, criação de campanhas Search/PMax, Keyword Planner, dashboards, checagem de saldos automatizada. Base das skills `checar-saldos`, `pmax-search-terms`, `google-ads-creator`. 15+ contas ativas (Kaizen, Babytub, Flora, Pneulândia, Brenner, JAC, Kia, Vivipra, Espantalho, ANP VW, Audi, etc.).</p>
      <div class="card-tags">
        <span class="tag primary">Python</span><span class="tag">Google Ads API</span><span class="tag">MCP</span><span class="tag">GAQL</span><span class="tag">BigQuery</span><span class="tag">Playwright</span>
      </div>
    </article>
  </li>

  <li>
    <article class="card">
      <div class="card-meta">
        <span>Performance Analyst</span>
        <span>2024–Atual</span>
        <span>10+ Contas</span>
      </div>
      <h3><a href="{{ '/cases/mcp-meta-ads/' | relative_url }}" style="color: inherit; text-decoration: none;">MCP Meta Ads — Criação & Otimização em Escala</a></h3>
      <p>Pipeline completo: análise de performance, criação de campanhas/criativos (carrossel, vídeo, formulários, WhatsApp), gestão de públicos Advantage+, migração Formulário→WhatsApp, preview shareable links. 127+ scripts, clientes: ANP VW, Bi Mel, Audi Center, Flora Motors, IAAutos, Sergio Pneus, Nippokar, Tonicenter, Yamaha.</p>
      <div class="card-tags">
        <span class="tag primary">Python</span><span class="tag">Meta Ads API</span><span class="tag">n8n</span><span class="tag">Evolution API</span><span class="tag">WhatsApp CTWA</span>
      </div>
    </article>
  </li>

  <li>
    <article class="card">
      <div class="card-meta">
        <span>Growth & Automação</span>
        <span>2026</span>
        <span>13% Funil</span>
      </div>
      <h3><a href="{{ '/cases/leads-sem-site/' | relative_url }}" style="color: inherit; text-decoration: none;">Leads Sem Site — Geração Automatizada de Demanda</a></h3>
      <p>Sistema end-to-end: busca OSM (empresas sem site) → enriquecimento Google Maps/Redes Sociais → geração de sites demo via IA (Stable Diffusion XL) → pitch via WhatsApp. Teste real: 87 leads brutos → 63 sem site → 11 qualificados com contato (13% conversão funil). 3 sites demo publicados (Salão Navalha de Ouro, Planet Hair, Murilo Piassi Mega Hair).</p>
      <div class="card-tags">
        <span class="tag primary">Python</span><span class="tag">Stable Diffusion XL</span><span class="tag">Firecrawl</span><span class="tag">OpenStreetMap</span><span class="tag">Google Places API</span>
      </div>
    </article>
  </li>

  <li>
    <article class="card">
      <div class="card-meta">
        <span>Squad Leader / Tech Lead</span>
        <span>2024–Atual</span>
        <span>CRM + CAPI</span>
      </div>
      <h3><a href="{{ '/cases/crm-whatsapp/' | relative_url }}" style="color: inherit; text-decoration: none;">CRM WhatsApp — Orquestração, Atribuição & Meta CAPI</a></h3>
      <p>CRM via WhatsApp (Evolution API + n8n + Supabase): atribuição via metadados Meta (click-to-WhatsApp), lead scoring (Comprador/Quente/Frio), dashboard de vendas/produto, integração Conversions API (Lead Quente + Purchase) para otimização CTWA. Replicável via `crm-kit-replicacao.md`.</p>
      <div class="card-tags">
        <span class="tag primary">n8n</span><span class="tag">Supabase</span><span class="tag">Docker</span><span class="tag">Meta CAPI</span><span class="tag">Evolution API</span><span class="tag">TypeScript</span>
      </div>
    </article>
  </li>

  <li>
    <article class="card">
      <div class="card-meta">
        <span>Growth / Data Science</span>
        <span>2026</span>
        <span>Edge Statistical</span>
      </div>
      <h3><a href="{{ '/cases/prob-lab-trading/' | relative_url }}" style="color: inherit; text-decoration: none;">Lab de Probabilidade M1 — Validação Estatística de Estratégias</a></h3>
      <p>Framework rigoroso: coleta dados reais Pocket Option → critério Wilson 95% > break-even (53.5% @ payout 87%) → backtest offline → automação diária análise (Task Scheduler + PowerShell) → iteração autônoma (ARREMATE V1/V2 → FLUXO V1/V2 → JACARÉ). 300+ trades auditados, medição calibrada por `total=` (não `$` visível).</p>
      <div class="card-tags">
        <span class="tag primary">Python</span><span class="tag">Pandas</span><span class="tag">Estatística (Wilson CI)</span><span class="tag">PyInstaller</span><span class="tag">PowerShell</span>
      </div>
    </article>
  </li>
</ul>