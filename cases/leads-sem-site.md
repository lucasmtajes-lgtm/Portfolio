---
layout: case
title: "Leads Sem Site — Geração Automatizada de Demanda"
role: "Growth Engineer / Full-Stack"
period: "2026 (Prototipagem Ativa)"
budget: "R$ 0 (Próprio / R&D)"
summary: "Sistema end-to-end: busca OSM (empresas sem site) → enriquecimento Google Maps/Redes Sociais → geração de sites demo via IA (Stable Diffusion XL) → pitch via WhatsApp. Teste real: 87 leads brutos → 63 sem site → 11 qualificados com contato (13% conversão funil). 3 sites demo publicados."
metrics:
  - value: "87"
    label: "Leads Brutos (OSM)"
  - value: "63"
    label: "Sem Site Confirmado"
  - value: "11"
    label: "Qualificados c/ Contato"
  - value: "13%"
    label: "Conversão Funil"
stack:
  - Python 3.11
  - Stable Diffusion XL (Stability AI / Replicate)
  - Firecrawl
  - OpenStreetMap (Overpass API)
  - Google Places API
  - BeautifulSoup4 / lxml
  - requests
  - python-dotenv
challenge: |
  Pequenas empresas (salões, barbearias, clínicas) sem presença digital são leads ideais para agências de tráfego/websites, mas **encontrá-las e qualificá-las em escala é manual e caro**. Objetivo: automatizar 100% do funil — da descoberta ao site demo pronto para pitch — validando viabilidade comercial antes de escalar.

approach: |
  Pipeline modular em 6 etapas, orquestrado por `gerar_site_completo.py`:

  1. **`buscar_leads_osm.py`** — Overpass API (OpenStreetMap): busca POIs por categoria + cidade, filtra `website`/`contact:website` ausentes, exporta CSV.
  2. **`coletar_dados_empresa.py`** — Google Places API (details: nome, telefone, endereço, website, rating, horários) + scraping Instagram/Facebook (bio, seguidores, posts recentes, fotos).
  3. **`baixar_imagens.py`** — Download logo, foto de perfil, fotos de posts/ambiente (quando público).
  4. **`gerar_imagens_sd.py`** — Stable Diffusion XL (via Stability AI ou Replicate): hero banner, fotos de serviço/produto, estilo visual baseado na categoria + bio. Prompts templateados por vertical.
  5. **`gerar_site.py`** — Gera HTML/CSS/JS responsivo, mobile-first, SEO-ready: hero, sobre, serviços (com preços placeholder), galeria, depoimentos (placeholder), CTA WhatsApp/telefone, JSON-LD LocalBusiness.
  6. **`gerar_site_completo.py`** — Orquestrador: executa 1→5 com flags (`--pular-ia`, `--categoria`, `--instagram`, `--endereco`).

  **Enriquecimento Firecrawl** (adic. 12/07): busca web por nome+endereço para achar telefone/site que OSM/Places perdem. Rodado nos 48 leads sem telefone: 11 confirmados com contato real.

actions:
  - "Overpass query otimizada: `[shop=hairdresser][!website][!contact:website]` + bounding box cidade"
  - "Google Places API: `fields=formatted_phone_number,website,opening_hours,photos,rating,reviews` — custo controlado via cache local"
  - "Firecrawl enrichment: `scrape_url` com `only_main_content=true` + extração regex telefone/email/website"
  - "Stable Diffusion prompts por categoria: `barbearia` → 'vintage barbershop interior, warm lighting, leather chairs, golden razor logo' ; `salão` → 'modern beauty salon, soft pastel colors, professional lighting'"
  - "Site template: CSS Grid/Flex, variáveis CSS para tema (cores, fontes), SVG icons inline, `tel:`/`wa.me` links dinâmicos, `loading=lazy` imagens"
  - "3 demos publicadas em `demos/`: `salao-navalha-de-ouro`, `planet-hair`, `murilo-piassi-mega-hair` (este com fotos reais Facebook + ajustado para 'compra/venda cabelo')"
  - "CTA inteligente: detecta formato telefone (fixo 8 dígitos → `tel:` / celular 9 dígitos → `wa.me:`)"
  - "Horário real: extraído de Places `opening_hours` ou bio Instagram — nunca inventado"

results: |
  **Funil Validado (Curitiba, Salão/Barbearia):**
  - 87 POIs OSM → 63 sem site (72%) → 11 com telefone confirmado + sem site real (13% do topo, 17% dos sem-site)
  - 22 leads "fortes sem contato" (sem telefone, mas negócio real) — canal alternativo: visita física / DM Instagram
  - 14 descartados (ambiguidade) — 3 falsos positivos OSM (tinham site próprio)
  - **3 sites demo funcionais** hospedados localmente, prontos para deploy (Netlify/Vercel/GitHub Pages)

  **Insights de Produto:**
  - Gargalo não é geração de site (segundos com IA) — é **dados de contato confiáveis**
  - Instagram/Facebook bloqueiam scraping >1 item público → Firecrawl resolve parcial
  - Categoria "salão" no OSM ≠ realidade (ex: Murilo Piassi = compra/venda cabelo) — validação humana necessária
  - Telefone fixo (8 dígitos) ≠ WhatsApp Business — CTA `tel:` evita erro UX

learnings:
  - "OSM é fonte bruta ruidosa: 72% sem site, mas só 13% acionáveis. Enriquecimento (Firecrawl/Places) é obrigatório"
  - "Stable Diffusion XL gera hero banners profissionais em <10s/categoria — custo ~$0.008/imagem (Replicate) vs $50+ designer"
  - "Sites demo como 'produto de venda' funcionam: cliente vê o resultado ANTES de pagar — reduz CAC de aquisição agência"
  - "Não inventar dados: horário 'consulte', preços 'sob consulta', fotos 'placeholder' — credibilidade > completude falsa"
  - "Pipeline modular permite pivot: mesmo core serve para 'leads sem Instagram', 'leads sem Google Meu Negócio', etc."
  - "Próximo passo: integrar CRM (n8n + Evolution API) para disparo automático WhatsApp com link do site demo"

stack:
  - Python 3.11
  - Stable Diffusion XL (Stability AI / Replicate)
  - Firecrawl
  - OpenStreetMap (Overpass API)
  - Google Places API
  - BeautifulSoup4 / lxml
  - requests
  - python-dotenv
---