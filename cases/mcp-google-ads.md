---
layout: case
permalink: /cases/mcp-google-ads/
title: "MCP Google Ads — Plataforma de Gestão & Automação"
role: "Performance Analyst / Backend Engineer"
period: "2024 – Atual"
budget: "R$ 3M+ / ano gerido"
summary: "Servidor MCP customizado para Google Ads API: relatórios GAQL, criação de campanhas Search/PMax, Keyword Planner, dashboards, checagem de saldos automatizada. Base de 3 skills Claude Code em produção."
metrics:
  - value: "15+"
    label: "Contas Ativas"
  - value: "R$ 3M+"
    label: "Budget Anual"
  - value: "3"
    label: "Skills em Produção"
  - value: "95%+"
    label: "Automação Rotinas"
stack:
  - Python 3.11
  - Google Ads API v16+
  - MCP (Model Context Protocol)
  - GAQL
  - BigQuery
  - Playwright
  - FastAPI
  - Docker
challenge: |
  Gerir 15+ contas Google Ads de clientes diversos (varejo, automotivo, serviços, saúde) com rotinas manuais repetitivas: checagem diária de saldos, relatórios de performance, criação de campanhas PMax/Search, pesquisa de palavras-chave, auditoria de search terms em PMax. Tempo gasto em ops > tempo em estratégia.

approach: |
  Construí um **MCP Server (Model Context Protocol)** próprio que expõe a Google Ads API como ferramentas chamáveis por LLMs (Claude Code), transformando ops em conversa natural. O servidor roda localmente com credenciais seguras (`.venv`), expõe 30+ ferramentas via `stdio`, e serve de base para **3 skills Claude Code** que uso diariamente:

  1. **`checar-saldos`** — Lê "Fundos disponíveis" de todas as contas MCC e retorna 2 listas: (a) sem saldo ou ≤ R$100, (b) com saldo > R$100 mas que não rodou (outro problema).
  2. **`pmax-search-terms`** — Extrai search term insights de campanhas PMax, identifica termos irrelevantes, sugere negativos.
  3.  **`google-ads-creator`** — Do URL + brief → copy (headlines/descriptions) → cria campanha Search ou PMax direto no Ads Manager via browser automation (Playwright).

  Além das skills, o MCP tem módulos: `reporting.py` (GAQL), `mutations/` (create keywords, RSAs, campaigns, PMax, asset groups), `keyword_planner.py` (ideias, métricas históricas, localizações BR), `accounts.py`.

actions:
  - "Arquitetura MCP server com autenticação OAuth2 + developer token + MCC"
  - "Módulo `reporting.execute_gaql` para queries flexíveis (performance, search terms, budget pacing)"
  - "Módulo `mutations/` com 15+ funções de escrita (campanhas, ad groups, ads, keywords, negativos, assets)"
  - "Keyword Planner integrado: `generate_keyword_ideas`, `get_keyword_historical_metrics`, localizações BR pré-configuradas"
  - "Dashboard web (`dashboard/app.py` + `index.html`) para visualização rápida de métricas por conta"
  - "Script `saldo_contas/checar_saldos.py` base da skill `checar-saldos` — roda diário via Task Scheduler"
  - "Scripts por cliente: `analise_*`, `criar_*`, `migrar_*`, `kaizen_*`, `babytub_*`, `jac_signals.py`, `kia_aeropuerto_signals.py`"
  - "Integração com BigQuery para armazenamento histórico e dashboards Looker Studio"
  - "Documentação GAQL e views expostas via `docs.py` para descoberta de schema"

results: |
  **Operacional:** 95%+ das rotinas diárias automatizadas (saldos, relatórios, alertas). Checagem de 15 contas em <30s vs 20min manual.
  
  **Estratégico:** Tempo realocado de ops → estratégia: reestruturação de contas (Kaizen: PMax + Search híbrido), expansão de palavras-chave (Babytub: +40% cobertura), auditoria PMax (Flora: -30% spend em termos irrelevantes).
  
  **Técnico:** MCP server estável, versionado, documentado. 3 skills publicadas no Claude Code do usuário, usadas diariamente pela equipe. Base replicável para novos clientes (basta adicionar `customer_id` no MCC).

learnings:
  - "MCP > REST wrappers: LLMs chamam ferramentas tipadas com schema, reduz hallucination vs chamar HTTP bruto"
  - "GAQL > REST reports: uma query substitui 5+ calls REST, suporta segmentação nativa (device, network, quarter)"
  - "Keyword Planner API ≠ UI: volume de busca retorna ranges, não absolutos — usar `historical_metrics` para priorizar"
  - "PMax search terms: API não expõe nativamente — workaround via `search_term_view` + segmentação por asset group"
  - "Playwright para criação de campanhas: necessário quando API não expõe recurso (ex: PMax asset group signals) ou para fluxos complexos multi-step"
  - "Segurança: credenciais só no `.venv` local, nunca no repo. `generate_token.py` roda uma vez, token refresh automático"

stack:
  - Python 3.11
  - Google Ads API v16+
  - MCP (Model Context Protocol)
  - GAQL
  - BigQuery
  - Playwright
  - FastAPI
  - Docker
  - pandas
  - python-dotenv
---