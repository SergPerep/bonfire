# Plan

## Electriciteit

(isMeterkastSlim)

- Enkeltarief
    - Totale variablele kosten (elEnkelTotVarKosten)
- Normaal tarief
    - Totale variablele kosten (elNormaalTotVarKosten)
- Dal tarief
    - Totale variablele kosten (elDalTotVarKosten)

- Teruglevertarief (elTerugTarief)
- Vaste leveringskosten (elVasteLevKosten)
- Vermindering energiebelasting (elVerminEnergBelasting)
- Netbeheerkosten (elNetBeheerKosten)

## Gas

- Totale variabele kosten (gasTotVarKosten)
- Vaste leveringskosten (gasVasteLevKosten)
- Netbeheerkosten (gasNetbeheerKosten)

```javascript

{
    electriciteit: {
        isMeterkastSlim: true,
        elConsumptieEnkel: 911 /* kWh/jaar */ ,
        elConsumptieNormaal: 507 /* kWh/jaar */ ,
        elConsumptieDal: 402 /* kWh/jaar */ ,
        elEnkelTotVarKosten: 0.470799 /* €/kWh */,
        elNormaalTotVarKosten: 0.490280 /* €/kWh */,
        elDalTotVarKosten: 0.445389 /* €/kWh */,
        elTerugTarief: 0.124630 /* €/kWh */,
        elVasteLevKosten: 6.489956 /* €/maand */,
        elVerminEnergBelasting: -2.259650 /* €/dag */,
        elNetBeheerKosten: 0.696597 /* €/dag */
    },
    gas: {
        gasConsumptie: 1200 /* m³/jaar */,
        gasTotVarKosten: 1.927312 /* €/m³ */,
        gasVasteLevKosten: 6.489956 /* €/maand */,
        gasNetbeheerKosten: 0.512435 /* €/dag */
    }
}

```