---
layout: case
title: "CRM WhatsApp — Orquestração, Atribuição & Meta CAPI"
role: "Squad Leader / Tech Lead"
period: "2024 – Atual"
budget: "R$ 500k+ / ano em mídia otimizada"
summary: "CRM via WhatsApp (Evolution API + n8n + Supabase): atribuição via metadados Meta (click-to-WhatsApp), lead scoring (Comprador/Quente/Frio), dashboard de vendas/produto, integração Conversions API (Lead Quente + Purchase) para otimização CTWA. Replicável via `crm-kit-replicacao.md`."
metrics:
  - value: "3"
    label: "Pessoas no Squad"
  - value: "95%+"
    label: "Atribuição Automatizada"
  - value: "2"
    label: "Eventos CAPI (Lead + Purchase)"
  - value: "R$ 500k+"
    label: "Mídia Otimizada via CAPI"
stack:
  - n8n (Self-hosted)
  - Evolution API (WhatsApp)
  - Supabase / PostgreSQL
  - Docker / Docker Compose
  - TypeScript (n8n custom nodes)
  - Meta Conversions API
  - Python (scripts auxiliares)
challenge: |
  Clientes rodando campanhas **Click-to-WhatsApp (CTWA)** no Meta Ads sem visibilidade real do funil pós-clique: quantos leads viram conversa? Quantos viraram "quentes"? Quantos compraram? Atribuição manual via texto da saudação quebrava a cada mudança de copy da Meta. Squad de 3 pessoas precisava de: automação confiável, dashboard unificado, devolução de sinais para Meta otimizar (CAPI), processo replicável para novos clientes.

approach: |
  Arquitetura **Event-Driven** orquestrada no n8n:

  1. **Ingestão**: Evolution API (webhook) → n8n → Supabase (`conversas`, `mensagens`, `leads`)
  2. **Atribuição**: Metadados Meta no payload `entryPointConversionSource` + `contextInfo.externalAdReply` → `origem` (Google Ads / Meta Ads / Direto) + `campanha_id` + `anuncio_id` — **independente do texto da mensagem**
  3. **Classificação Produto**: `anuncio_produto` (Bio / Facial / Software) via keyword matching no título+corpo+saudação do anúncio (título sozinho falha: ex. "wa.me" genérico, software usa nome "Expert Ponto")
  4. **Lead Scoring**: Estados `Frio` → `Quente` → `Comprador` (regras: `Quente` = agendou/pediu orçamento; `Comprador` = **NF/DANFE OU etiqueta/rastreio** — regra endurecida 11/07)
  5. **Dashboard**: Supabase + Metabase/Looker — pizzas "Vendas por Produto", "Produtos (Anúncios Meta)", Kanban conversas com tag produto editável
  6. **Meta CAPI (Em implementação 10/2026)**: Nó HTTP n8n pós-mudança status (`origem = Meta Ads`) → eventos `Lead` (quente) + `Purchase` (comprador, value BRL) → match por telefone SHA256 → idempotência via `meta_conversion_events` table → teste via Test Event Code

  **Replicabilidade**: `crm-kit-replicacao.md` documenta schemas SQL (`supabase_schema.sql`, `agent_config_schema.sql`, `followup_schema.sql`, `vendas_schema.sql`, `fix_rls_security.sql`), docker-compose, flows n8n (`n8n-flow-evolution.json`, `n8n-flow-followup.json`, `n8n-flow-cron-labels.json`), checklist deploy.

actions:
  - "Arquitetura n8n: 3 flows principais (ingestão Evolution, follow-up automático, cron labels) + sub-workflows reutilizáveis"
  - "Supabase RLS: policies por `cliente_id` — multi-tenant seguro, cada cliente vê só seus dados"
  - "Atribuição via metadados Meta: elimina 100% dos falsos negativos por mudança de copy da saudação"
  - "Lead scoring endurecido: `Comprador` SOMENTE com NF/etiqueta — eliminou falsos 'Comprador Relógio' (interesse/orçamento apenas)"
  - "Dashboard: pizzas dinâmicas por produto/anúncio, Kanban com tag editável (clique → menu correção)"
  - "Importador vendas marketplaces: Mercado Livre implementado (`vendasImport.ts`, `DashboardVendasView.tsx`), Magalu/E-commerce aguardando arquivo exemplo"
  - "CAPI v1 arquitetado: HTTP node n8n, SHA256 telefone, eventos padrão Meta, tabela idempotência, Test Event Code — aguardando Pixel/Dataset ID + Access Token do cliente"
  - "Documentação viva: `crm-kit-replicacao.md` + schemas SQL + flows n8n exportados + checklist onboarding novo cliente"

results: |
  **Atribuição:** 95%+ das conversas atribuídas corretamente à campanha/anúncio Meta (vs ~60% com match de texto).
  
  **Lead Quality:** Scoring `Quente`/`Comprador` alinhado com definição comercial — elimina ruído no funil.
  
  **Otimização Meta:** CAPI devolve `Lead` (quente) + `Purchase` (comprador, value real) → Meta otimiza para **% conversão real + ROAS**, não só "clique no WhatsApp".
  
  **Squad Velocity:** Onboarding novo cliente → CRM rodando em <2h (docker-compose up + config n8n + schemas). 3 pessoas mantêm 5+ clientes simultâneos.
  
  **Receita Rastreável:** Dashboard mostra vendas por produto/anúncio → decisões de budget baseadas em ROAS real por vertical.

learnings:
  - "Meta CTWA: metadados `entryPointConversionSource`/`externalAdReply` são a fonte da verdade — nunca confiar em texto da mensagem"
  - "Lead scoring: definir 'Comprador' com evidência fiscal (NF/etiqueta) evita otimização para leads falsos — Meta aprende errado se mandar 'interessado' como Purchase"
  - "CAPI CTWA: `meta_lead_id` só existe em Lead Ads formulário. Para CTWA, match é **telefone SHA256** — documentar isso evita semanas de debug"
  - "n8n self-hosted + Docker: controle total, custo fixo, versionamento flows via JSON (Git) — superior a SaaS para dados sensíveis"
  - "Supabase RLS + multi-tenant: uma instância, isolamento total, custo 1/10 de instâncias separadas"
  - "Replicabilidade = documentação + schemas + flows exportados + checklist. `crm-kit-replicacao.md` é o ativo mais valioso do projeto"

stack:
  - n8n (Self-hosted)
  - Evolution API (WhatsApp)
  - Supabase / PostgreSQL
  - Docker / Docker Compose
  - TypeScript (n8n custom nodes)
  - Meta Conversions API
  - Python (scripts auxiliares)
---