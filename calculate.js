const calculate = ({
    isMeterkastSlim = false,
    elConsumptieEnkel /* 911 kWh/jaar */,
    elConsumptieNormaal /* 507  kWh/jaar */,
    elConsumptieDal /* 402  kWh/jaar */,
    elEnkelTotVarKosten /* 0.470799  €/kWh */,
    elNormaalTotVarKosten /* 0.490280 €/kWh */,
    elDalTotVarKosten /* 0.445389 €/kWh */,
    elTerugTarief /* 0.124630 €/kWh */,
    elVasteLevKosten /* 6.489956 €/maand */,
    elVerminEnergBelasting /* -2.259650 €/dag */,
    elNetbeheerKosten /* 0.696597  €/dag */,
    gasConsumptie /* 1200 m³/jaar */,
    gasTotVarKosten /* 1.927312 €/m³ */,
    gasVasteLevKosten /* 6.489956 €/maand */,
    gasNetbeheerKosten /* 0.512435 €/dag */
}) => {
    /*===== ELECTRICITEIT =====*/
    let elTotVarKostenPerJaar;
    if (isMeterkastSlim) {
        elTotVarKostenPerJaar =
            elConsumptieNormaal * elNormaalTotVarKosten +
            elConsumptieDal * elDalTotVarKosten;
    } else {
        elTotVarKostenPerJaar =
            elConsumptieEnkel * elEnkelTotVarKosten;
    }
    const elVasteLevKostenPerJaar = elVasteLevKosten * 12;
    const elVerminEnergBelastingPerJaar = elVerminEnergBelasting * 365;
    const elNetbeheerKostenPerJaar = elNetbeheerKosten * 365;
    const elKostenPerJaar =
        elTotVarKostenPerJaar +
        elVasteLevKostenPerJaar +
        elVerminEnergBelastingPerJaar +
        elNetbeheerKostenPerJaar;
    const elKostenPerMaand = elKostenPerJaar / 12;

    /*===== GAS ===== */
    const gasTotVarKostenPerJaar = gasTotVarKosten * gasConsumptie;
    const gasVasteLevKostenPerJaar = gasVasteLevKosten * 12;
    const gasNetbeheerKostenPerJaar = gasNetbeheerKosten * 365;
    const gasKostenPerJaar = 
        gasTotVarKostenPerJaar + 
        gasVasteLevKostenPerJaar + 
        gasNetbeheerKostenPerJaar;
    const gasKostenPerMaand = gasKostenPerJaar / 12;
    
    /*===== TOTAAL =====*/
    const totaleKostenPerJaar = elKostenPerJaar + gasKostenPerJaar;
    const totaleKostenPerMaand = totaleKostenPerJaar / 12;
    return {
        elKostenPerJaar,
        elKostenPerMaand,
        gasKostenPerJaar,
        gasKostenPerMaand,
        totaleKostenPerJaar,
        totaleKostenPerMaand
    }
}

export default calculate;