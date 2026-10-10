---
layout: default
title: "Growth & Experimentação"
description: "Frameworks de growth, testes A/B, growth loops, atribuição, CAPI, funis de aquisição."
---
<div class="hero" style="padding: var(--spacing-lg) 0;">
  <h1>Growth & Experimentação</h1>
  <p class="lead">Metodologia baseada em dados: hipótese → experimento → medição → decisão. Não faço "growth hacks" — construo sistemas que aprendem.</p>
</div>

<section class="section">
  <h2 class="section-title">Framework de Testes A/B</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Estrutura do Experimento</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li><strong>Hipótese:</strong> "Se [mudança], então [métrica] muda [direção] porque [razão]"</li>
        <li><strong>Métrica Primária:</strong> Uma só (ex: CPL, CTR, % Quente, ROAS)</li>
        <li><strong>Métricas Guarda:</strong> CAC, LTV, Quality Score, Frequency</li>
        <li><strong>Tamanho Amostra:</strong> Calculadora bayesiana (mínimo 95% confiança, 80% power)</li>
        <li><strong>Duração:</strong> Mínimo 2 ciclos semanais (evita viés dia da semana)</li>
        <li><strong>Decisão:</strong> Significância + tamanho do efeito + impacto business</li>
      </ul>
    </div>
    <div class="card">
      <h3>Testes Rodados (Exemplos)</h3>
      <ul style="color: var(--color-text-muted); line-height: 2;">
        <li><strong>PMax Asset Group Signals:</strong> Adicionar/remover audience signals → medir CPL + ROAS 14d</li>
        <li><strong>CTWA Creative:</strong> Vídeo vs Carrossel vs Imagem Única → % Início Conversa + % Quente</li>
        <li><strong>Advantage+ Audience:</strong> On vs Off (mesmo creative, mesmo budget) → CPA real 30d</li>
        <li><strong>Lead Form Fields:</strong> 3 vs 5 campos → CPL vs Quality (% Quente)</li>
        <li><strong>WhatsApp CTA:</strong> "Falar no WhatsApp" vs "Quero Orçamento" → CTR + % Quente</li>
        <li><strong>Landing Page Headline:</strong> Benefício vs Dor vs Prova Social → CVR + Time on Page</li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Growth Loops Implementados</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Loop 1: CTWA → CRM → CAPI → Meta Otimiza</h3>
      <p style="color: var(--color-text-muted);">Clique WhatsApp → Conversa → Lead Quente (CAPI Lead) → Compra (CAPI Purchase) → Meta otimiza para % Quente + ROAS → Mais cliques qualificados → Loop.</p>
      <span class="tag primary">Meta Ads</span><span class="tag">CAPI</span><span class="tag">CRM WhatsApp</span>
    </div>
    <div class="card">
      <h3>Loop 2: Leads Sem Site → Site Demo → Pitch → Cliente → Case</h3>
      <p style="color: var(--color-text-muted);">OSM → Site demo IA → WhatsApp pitch → Fechamento → Case study → Atrai mais leads similares → Loop.</p>
      <span class="tag primary">Automação</span><span class="tag">IA</span><span class="tag">Outbound</span>
    </div>
    <div class="card">
      <h3>Loop 3: Search Terms PMax → Negativos → ROAS ↑ → Budget ↑</h3>
      <p style="color: var(--color-text-muted);">Skill `pmax-search-terms` extrai termos → Identifica irrelevantes → Negativos em lote → ROAS melhora → Escala budget → Mais dados → Loop.</p>
      <span class="tag primary">Google Ads</span><span class="tag">PMax</span><span class="tag">Automação</span>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Atribuição & Server-Side Tracking</h2>
  <div class="cards-grid">
    <div class="card">
      <h3>Meta CAPI (Conversions API)</h3>
      <p style="color: var(--color-text-muted);">Eventos: <code>Lead</code> (quente), <code>Purchase</code> (comprador, value BRL). Match key: <strong>telefone SHA256</strong> (CTWA não tem meta_lead_id). Idempotência via <code>meta_conversion_events</code> (event_id + timestamp). Test Event Code para validação.</p>
    </div>
    <div class="card">
      <h3>Google Ads Enhanced Conversions</h3>
      <p style="color: var(--color-text-muted);">Envio de dados de 1ª parte (email/telefone hash) via GTM Server-side ou API direta. Melhora atribuição cross-device e modelagem de conversões não observadas.</p>
    </div>
    <div class="card">
      <h3>UTM + Click ID Propagation</h3>
      <p style="color: var(--color-text-muted);"><code>gclid</code>, <code>fbclid</code>, <code>msclkid</code> capturados no landing → passados para CRM via hidden fields / URL params → unificados no Supabase para atribuição multi-touch.</p>
    </div>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Ferramentas de Growth</h2>
  <table>
    <thead>
      <tr><th>Ferramenta</th><th>Uso</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr><td>n8n</td><td>Orquestração flows (lead → CRM → CAPI → Slack)</td><td>Produção</td></tr>
      <tr><td>Evolution API</td><td>WhatsApp Business (webhook, envio, mídia)</td><td>Produção</td></tr>
      <tr><td>Supabase</td><td>DB + Auth + Realtime + RLS multi-tenant</td><td>Produção</td></tr>
      <tr><td>Firecrawl</td><td>Scraping web para enriquecimento leads</td><td>R&D</td></tr>
      <tr><td>Stable Diffusion XL</td><td>Geração assets visuais (hero, serviços)</td><td>R&D</td></tr>
      <tr><td>BigQuery</td><td>Data warehouse histórico ads + CRM</td><td>Produção</td></tr>
      <tr><td>Looker Studio</td><td>Dashboards executivos (ROAS, CAC, LTV)</td><td>Produção</td></tr>
      <tr><td>Mixpanel</td><td>Event tracking produto (quando aplicável)</td><td>Sob demanda</td></tr>
    </tbody>
  </table>
</section>