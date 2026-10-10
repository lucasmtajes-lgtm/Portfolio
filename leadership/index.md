---
layout: default
title: "Liderança & Squad"
description: "Gestão de squad, OKRs, rituais, mentoria, hiring, stakeholder management."
---
<div class="hero" style="padding: var(--spacing-lg) 0;">
  <h1>Liderança & Squad</h1>
  <p class="lead">Lidero squads de 3-5 pessoas (Performance, Growth, Engenharia). Foco: clareza de direção, autonomia com accountability, entrega contínua.</p>
</div>

<section class="section">
  <h2 class="section-title">Estrutura do Squad</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Composição Típica</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li><strong>1 Performance Analyst Sênior</strong> (Google/Meta Ads, strategy)</li>
        <li><strong>1 Growth Engineer</strong> (Python, APIs, automação, data)</li>
        <li><strong>1 Analista Júnior / Estagiário</strong> (ops, relatórios, QA)</li>
        <li><strong>Tech Lead (eu)</strong> — arquitetura, code review, decisões técnicas, unblock</li>
      </ul>
    </div>
    <div class="card">
      <h3>Papéis & Responsabilidades</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li><strong>DRI (Directly Responsible Individual)</strong> por conta/projeto</li>
        <li><strong>Code Review obrigatório</strong> em scripts de produção (mutations, CAPI, CRM)</li>
        <li><strong>Documentação viva</strong> — cada learning vira doc no Obsidian/Notion</li>
        <li><strong>Onboarding checklist</strong> — novo membro produtivo em <2 semanas</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Rituais (Cadência)</h2>
  <table>
    <thead>
      <tr><th>Ritual</th><th>Frequência</th><th>Duração</th><th>Objetivo</th></tr>
    </thead>
    <tbody>
      <tr><td>Daily Standup</td><td>Diário</td><td>15 min</td><td>Sync: ontem/hoje/bloqueiros — foco em unblock</td></tr>
      <tr><td>Weekly Planning</td><td>Segunda</td><td>45 min</td><td>Priorização semanal, capacity, risks</td></tr>
      <tr><td>Metrics Review</td><td>Quarta</td><td>30 min</td><td>KPIs da semana: spend, CPL, ROAS, % Quente, bugs</td></tr>
      <tr><td>Retrospective</td><td>Quinzenal</td><td>60 min</td><td>Start/Stop/Continue — ação concreta por item</td></tr>
      <tr><td>1:1</td><td>Semanal</td><td>30 min</td><td>Carreira, feedback, bem-estar, alinhamento</td></tr>
      <tr><td>Stakeholder Sync</td><td>Quinzenal</td><td>30 min</td><td>Alinhamento expectativas, roadmap, budget</td></tr>
    </tbody>
  </table>
</section>

<section class="section">
  <h2 class="section-title">OKRs — Exemplo Trimestre</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>O1: Escalar Performance com Qualidade</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li>KR1: ROAS médio portfolio ≥ 3.5x (atual 3.1x)</li>
        <li>KR2: % contas com CAPI ativo = 100% (atual 60%)</li>
        <li>KR3: Tempo setup nova conta ≤ 2h (atual 4h)</li>
      </ul>
    </div>
    <div class="card">
      <h3>O2: Automação que Gera Receita</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li>KR1: 5+ skills Claude Code em produção (atual 3)</li>
        <li>KR2: 90% rotinas diárias automatizadas (atual 70%)</li>
        <li>KR3: Zero downtime por erro de script (meta 0)</li>
      </ul>
    </div>
    <div class="card">
      <h3>O3: Squad High-Performance</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li>KR1: eNPS squad ≥ 80</li>
        <li>KR2: 100% code review < 4h</li>
        <li>KR3: 0 knowledge silos (bus factor ≥ 2 em tudo crítico)</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Mentoria & Desenvolvimento</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Plano de Carreira Individual</h3>
      <p style="color: var(--color-text-muted);">Cada membro tem <strong>PDI (Plano de Desenvolvimento Individual)</strong> trimestral: skills técnicas (ex: Python, SQL, APIs), skills de produto (frameworks growth, atribuição), soft skills (comunicação, negociação). Revisado no 1:1.</p>
    </div>
    <div class="card">
      <h3>Knowledge Sharing</h3>
      <p style="color: var(--color-text-muted);"><strong>Tech Talks quinzenais</strong> (30 min): alguém apresenta learning, tool, ou "como depurei X". Gravado. <br><br><strong>Post-mortems blameless</strong> para incidentes: timeline, root cause (5 Whys), action items com owner + deadline.</p>
    </div>
    <div class="card">
      <h3>Hiring & Onboarding</h3>
      <p style="color: var(--color-text-muted);">Entrevista técnica: case real (ex: "aqui está um CSV de search terms PMax, o que você faz?"), code review ao vivo, pair programming 30 min. Onboarding: day 1 = ambiente + primeiro PR (mesmo que pequeno).</p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Stakeholder Management</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Relatórios Executivos</h3>
      <p style="color: var(--color-text-muted);">Semanal: spend, leads, CPL, ROAS, % Quente, top 3 insights. Mensal: LTV, CAC payback, budget pacing, recomendações estratégicas. Formato: 1-pager + dashboard link.</p>
    </div>
    <div class="card">
      <h3>Gestão de Expectativas</h3>
      <p style="color: var(--color-text-muted);">"Under promise, over deliver". Comunicação proativa de riscos (ex: "Meta API v21 deprecation em 30 dias — plano de migração pronto"). Não surpreendo com problemas — apresento problema + 2 opções de solução.</p>
    </div>
    <div class="card">
      <h3>Budget Advocacy</h3>
      <p style="color: var(--color-text-muted);">Dados para pedir aumento: "Conta X: ROAS 4.2x, impression share 45%, budget capped → +30% budget = +R$ 15k receita projetada". Linguagem de negócio, não de ads.</p>
    </div>
  </div>
</section>