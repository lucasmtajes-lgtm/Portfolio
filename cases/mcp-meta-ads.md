---
layout: case
title: "MCP Meta Ads — Criação & Otimização em Escala"
role: "Performance Analyst / Backend Engineer"
period: "2024 – Atual"
budget: "R$ 2M+ / ano gerido"
summary: "Pipeline completo Meta Ads: análise de performance, criação de campanhas/criativos (carrossel, vídeo, formulários, WhatsApp), gestão de públicos Advantage+, migração Formulário→WhatsApp, preview shareable links. 127+ scripts, 10+ clientes ativos."
metrics:
  - value: "10+"
    label: "Clientes Ativos"
  - value: "127+"
    label: "Scripts Python"
  - value: "90%+"
    label: "Criação via API"
  - value: "5 min"
    label: "Campanha Nova → Live"
stack:
  - Python 3.11
  - Meta Marketing API v20+
  - n8n
  - Evolution API (WhatsApp)
  - Playwright
  - pandas
  - python-dotenv
challenge: |
  Gerir 10+ contas Meta Ads com diversidade de objetivos (Leads Formulário, WhatsApp CTWA, Engajamento, Vendas Catálogo) e verticais (automotivo, saúde, varejo, serviços). Necessidade de: criar campanhas/criativos em minutos (não horas), lidar com mudanças constantes da API (Advantage+ audience, WhatsApp phone number linking, piso de orçamento), debug rápido de erros de subcode (1870227, 1487246, 1359202, 4834011).

approach: |
  Projeto **MCP - Meta ads - face** (~127 arquivos) com padrão de scripts reutilizáveis:

  - **Análise**: `analise_*.py` — relatórios HTML/PDF/Markdown por cliente/período (CTR, CPL, CPA, ROAS, frequency, creative fatigue)
  - **Criação**: `criar_*.py` / `create_*.py` — templates parametrizados para: campanhas Leads (formulário), CTWA (WhatsApp), Engajamento, Carrossel, Vídeo (upload em chunks), Advantage+ Shopping
  - **Gestão de Públicos**: clonagem de adsets, `flexible_spec` para interesses, `family_statuses` (demografia pais), geo raio customizado
  - **Migração Formulário → WhatsApp**: recriação de campanhas mantendo learnings, fix de geo reset, reupload de criativos
  - **Preview Shareable Link**: `GET /{ad_id}?fields=preview_shareable_link` → link curto `fb.me/...` para cliente aprovar sem login

  Descobertas técnicas documentadas no projeto (evitam retrabalho):
  - `targeting_automation.advantage_audience` obrigatório ao criar adset novo (subcode 1870227)
  - `is_adset_budget_sharing_enabled` obrigatório em campanha sem CBO (subcode 4834011)
  - WhatsApp phone number precisa ser WABA compartilhada no BM (subcode 1487246) — UI aceita, API rejeita
  - Update parcial de `targeting` com Advantage+ ativo: enviar só a chave que muda (ex: `geo_locations`) senão erro 1359202
  - `end_time` vencido bloqueia edição de anúncios — precisa estender antes
  - `family_statuses` não filtra por `q` no `/search` — buscar amplo e filtrar client-side

actions:
  - "127+ scripts organizados: análise, criação, gestão, templates, relatórios"
  - "Padrão `criar_carrossel_*.py` reutilizável: `asset_feed_spec` + `asset_customization_rules` para feed 1080x1080 + story 1080x1920 no mesmo anúncio"
  - "Padrão `criar_*_whatsapp.py`: upload vídeo em chunks, `destination_type: WHATSAPP`, `promoted_object.whatsapp_phone_number`, CTA `WHATSAPP_MESSAGE`"
  - "Script `fix_flora_whatsapp_campanha.py`: recriou 9 anúncios ativos + restaurou geo 15km após duplicação UI quebrar"
  - "Script `criar_5anuncios_michelin_sergiopneus.py`: novo adset clonado de AON + `flexible_spec` interesse 'Michelin' + 5 anúncios PAUSED → ATIVE"
  - "Automação relatórios: HTML/PDF/Markdown com gráficos (CTR, CPL, frequency, creative breakdown)"
  - "Integração n8n para orquestração de fluxos multi-step (ex: lead → CRM → CAPI)"
  - "Documentação técnica viva: cada subcode erro → learning registrado na nota do projeto/cliente"

results: |
  **Velocidade:** Campanha nova do zero → live em <5 min (vs 30-60 min manual). Criativo carrossel 5 cards → 2 min.
  
  **Qualidade:** Zero erros de subcode em produção após documentação. Migração Flora Formulário→WhatsApp: 9 anúncios recriados em 15 min, geo restaurado, zero downtime.
  
  **Escala:** 10 clientes geridos simultaneamente com padrões consistentes. ANP VW (VolksVale+): carrossel 5 modelos, R$80/dia CBO, live em revisão. Audi Center: 5 carrosséis (SUV, Sportback, Sedan, A3, Institucional) do plano PDF → API.
  
  **Inovação:** Preview shareable link (`fb.me/...`) entregue ao cliente — diferencial vs agências que só mandam iframe embed.

learnings:
  - "Meta API muda todo mês: versionamento v20+ obrigatório, testar em sandbox antes de prod"
  - "Advantage+ audience = black box. Testar com/sem, medir CPL/CPA real, não assumir que melhora"
  - "WhatsApp CTWA: atribuição via metadados `entryPointConversionSource` > match de texto da saudação (quebra quando Meta muda copy)"
  - "Piso de orçamento: R$6/dia adset (BR) — abaixo disso erro. Raio mínimo geo: 17km (Pelotas case)"
  - "Creative fatigue: monitorar `impression_share` + `frequency` por creative ID, rotacionar antes de CTR cair 20%"
  - "Documentar subcodes economiza horas: 1870227, 1487246, 1359202, 4834011, 1487007 — todos mapeados no projeto"
  - "Preview link: `preview_shareable_link` (curto, sem login) ≠ `/previews` (iframe, precisa auth) — diferença crítica para cliente"

stack:
  - Python 3.11
  - Meta Marketing API v20+
  - n8n
  - Evolution API (WhatsApp)
  - Playwright
  - pandas
  - python-dotenv
  - requests
---