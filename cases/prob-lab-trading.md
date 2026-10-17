---
layout: case
permalink: /cases/prob-lab-trading/
title: "Lab de Probabilidade M1 — Validação Estatística de Estratégias"
role: "Growth Engineer / Data Science"
period: "2026 (R&D Autônomo)"
budget: "Próprio (DEMO + Automação)"
summary: "Framework rigoroso de validação de estratégias de trading (Pocket Option M1): coleta dados reais → critério Wilson 95% > break-even (53.5% @ payout 87%) → backtest offline → automação diária de análise (Task Scheduler + PowerShell) → iteração autônoma (ARREMATE V1/V2 → FLUXO V1/V2 → JACARÉ). 300+ trades auditados, medição calibrada por `total=` (não `$` visível)."
metrics:
  - value: "300+"
    label: "Trades Auditados"
  - value: "9"
    label: "Estratégias Testadas"
  - value: "4"
    label: "Ciclos Iteração (V1→V2→FLUXO→JACARÉ)"
  - value: "100%"
    label: "Autonomia Decisão (Bot 3)"
stack:
  - Python 3.11
  - Pandas / NumPy
  - Estatística (Wilson Score Interval)
  - PyInstaller
  - PowerShell / Task Scheduler
  - Pocket Option API (WebSocket)
  - JSON Logging
challenge: |
  Trading de opções binárias M1 (1 minuto) tem **ruído extremo**. A maioria das "estratégias" falha porque: (a) medem win rate errado (ignoram martingale losses sem `$` no log), (b) não validam estatisticamente (Wilson CI 95% > break-even), (c) não testam payout real dinâmico (filtro só no boot), (d) não têm stop diário / gestão de risco. Objetivo: criar **laboratório de probabilidade** que só aprova estratégias com edge real comprovado, e iterar autônomo até achar.

approach: |
  **Metodologia Científica Aplicada a Trading:**

  1. **Coleta (`coletar.py`)**: WebSocket Pocket Option → velas M1 brutas (open, high, low, close, volume) + payout % por ativo/horário → CSV particionado por data/ativo.
  2. **Análise (`analisar.py`)**: Para cada padrão (ex: SuperTrend+ADX, Rejeição, Fractal, MA10, Vela Seguida, Alternância, Pressão, EMA+ADX, Alligator/JACARÉ):
     - Conta sinais (entradas base + martingale steps)
     - Calcula **Wilson Lower Bound 95%** para win rate
     - Compara com **break-even real** = `1 / (1 + payout_medio_wins)` — **não** payout assumido
     - Só vira "estratégia no bot" se `Wilson_LB > BE_real`
  3. **Backtest Offline**: Roda estratégia nos CSVs históricos → simula martingale (step1 2.05x, step2 4.20x) → loga `total=` calibrado (não soma de `$` visível)
  4. **Automação Diária (`analise_fluxo_diaria.py` + `agenda_analise_fluxo.ps1` + Task Scheduler 07:30)**: Analisa dia anterior (WR, PnL, BE, por ativo/hora, meta ≥55% + PnL+) → salva `relatorios_fluxo/YYYY-MM-DD.md`
  5. **Iteração Autônoma (Bot 3 — autonomia total 10/2026)**: V1 (ARREMATE 2+ velas) → V2 (3+ velas + pavio + rompimento) → FLUXO (votos + vetos, alta freq) → FLUXO V2 (seletividade) → FLUXO V2.1 (bloqueio ativos/horários ruins, pausa pós-2 loss, payout dinâmico >=88%) → JACARÉ (Alligator Bill Williams: SMA 6/7 vs 21, gap ATR, FADE na reversão)

  **Descoberta Crítica de Medição:** `pnl_hoje` no status JSON = **por sessão** (zera a cada janela do agendador que mata/religa processo). Logs têm linhas `LOSS MARTINGALE` **sem `$`** (V1) — quem soma só `$` visível subestima prejuízo. **Sempre calibrar com campo `total=`**.

actions:
  - "Lab Probabilidade M1: `coletar.py` + `analisar.py` + README com roadmap — validador sintético confirmado"
  - "9 estratégias em `trader/modules/pocket/`: Quadrante, Tendência Supertrend+ADX, Rejeição, Fractal, MA10, Vela Seguida, Alternância, Pressão, EMA+ADX"
  - "ARREMATE V1: 304 trades, WR 50.0% (BE), PnL -27.81 — pico calibrado +14.46 (09/09), colapso 02/10 (-32.98)"
  - "ARREMATE V2: 45 trades, WR 53.3% (BE), PnL -2.21 — payout médio wins 84.9% (BE real 54.1%), CALL 42% vs PUT 67% (assimetria)"
  - "FLUXO V1: alta frequência, WR 47.8% (abaixo BE 53.5%), -23.30 — perdas concentradas 16:39-18:01"
  - "FLUXO V2: seletividade (ADX≥25, 2 votos, payout≥90%, cooldown 5v, 08-17 GMT, 5 ativos) — WR 51.3%, -3.10"
  - "FLUXO V2.1 (autônomo): bloqueia AUDUSD/AUDCHF/EURCHF/GBPAUD, pula hora 12, payout≥88% na entrada, pausa 10min pós-2 loss — estimativa retroativa 27t, 66.7% WR, +6.44 (overfit risk)"
  - "JACARÉ (Alligator): SMA 6/7 (par rápido) vs SMA 21 (queixo), boca abre gap ≥1.5×ATR14(M1), entrada FADE na vela que reverte e fecha pelo CORPO dentro da boca — run 11t: 63.6% WR base, martingale come lucro"
  - "Automação análise diária: PowerShell task 07:30 → Python analisa ontem → relatório MD → valida meta ≥55% + PnL+"

results: |
  **Rigor Metodológico:** Zero estratégias aprovadas sem edge estatístico. Wilson 95% LB > BE real (payout médio wins) = filtro que elimina ruído.
  
  **Auditoria Calibrada:** Descoberta e correção do viés de medição (`pnl_hoje` = sessão, `LOSS MARTINGALE` sem `$`, empate conta como loss). HANDOFF anterior (+48.26) **descartado** — medição errada (soma só `$` visível, ignora martingales perdidos).
  
  **Insights de Mercado:** CALL 42% WR vs PUT 67% (leitura reversão de baixa falha 2x mais). Horários: 20-22h melhores, 09-10h/18h piores. Ativos: EURGBP 0/3 bloqueado, EURNZD preferido mas -2.55, AUDNZD +4.62.
  
  **Autonomia Real:** Bot 3 (FLUXO V2.1 → JACARÉ) rodando sem aprovação humana — decisões de bloqueio ativos, horários, payout, pausa, troca de estratégia tomadas pelo agente. Relatório diário automático.

learnings:
  - "Win rate aparente ≠ edge. Wilson CI 95% lower bound > break-even real (payout médio dos wins) = único filtro honesto"
  - "Payout dinâmico: filtrar só no boot = erro. Wins com payout 43-55% distorcem BE. Re-checar payout **na entrada** (especialmente step2 martingale)"
  - "Medição: `pnl_hoje` = sessão (zera a cada janela). `total=` no log = verdade. `LOSS MARTINGALE` sem `$` = perdas invisíveis. Empate = loss no código."
  - "Martingale 'por sinal' (esperar novo sinal) dobra em setup DIFERENTE — não recupera, aumenta variância. Testar base sem martingale primeiro."
  - "Assimetria CALL/PUT (42% vs 67%) = feature, não bug. Investigar: reversão de baixa em M1 tem estrutura diferente? Filtrar CALLs?"
  - "Autonomia + medição honesta > otimismo. Bot 3 só reporta resultado, não pede permissão para ajustes. Ciclo: implementar → validar DEMO → medir calibrado → decidir."

stack:
  - Python 3.11
  - Pandas / NumPy
  - Estatística (Wilson Score Interval)
  - PyInstaller
  - PowerShell / Task Scheduler
  - Pocket Option API (WebSocket)
  - JSON Logging
---