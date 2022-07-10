type Args = {
    isMeterkastSlim: boolean,
    elConsumptieEnkel: number | null,
    elConsumptieNormaal: number | null,
    elConsumptieDal: number | null,
    elEnkelTotVarKosten: number | null,
    elNormaalTotVarKosten: number | null,
    elDalTotVarKosten: number | null,
    elVasteLevKosten: number | null,
    elVerminEnergBelasting: number | null,
    elNetbeheerKosten: number | null
}

const calculateElKostenPerJaar = ({
    isMeterkastSlim,
    elConsumptieEnkel,
    elConsumptieNormaal,
    elConsumptieDal,
    elEnkelTotVarKosten,
    elNormaalTotVarKosten,
    elDalTotVarKosten,
    elVasteLevKosten,
    elVerminEnergBelasting,
    elNetbeheerKosten
}: Args) => {
    /*===== ELECTRICITEIT =====*/
    let elTotVarKostenPerJaar;
    if (isMeterkastSlim) {
        const isDataFilled = elConsumptieNormaal && elNormaalTotVarKosten && elConsumptieDal && elDalTotVarKosten;
        if (!isDataFilled) return elTotVarKostenPerJaar = null;
        elTotVarKostenPerJaar =
            elConsumptieNormaal * elNormaalTotVarKosten +
            elConsumptieDal * elDalTotVarKosten;
    } else {
        const isDataFilled = elConsumptieEnkel && elEnkelTotVarKosten;
        if (!isDataFilled) return elTotVarKostenPerJaar = null;
        elTotVarKostenPerJaar =
            elConsumptieEnkel * elEnkelTotVarKosten;
    }
    const elVasteLevKostenPerJaar = elVasteLevKosten ? elVasteLevKosten * 12 : null;
    const elVerminEnergBelastingPerJaar = elVerminEnergBelasting ? elVerminEnergBelasting * 365 : null;
    const elNetbeheerKostenPerJaar = elNetbeheerKosten ? elNetbeheerKosten * 365 : null;

    const isDataFilled = elTotVarKostenPerJaar &&
        elVasteLevKostenPerJaar &&
        elVerminEnergBelastingPerJaar &&
        elNetbeheerKostenPerJaar;

    const elKostenPerJaar = isDataFilled ?
        elTotVarKostenPerJaar +
        elVasteLevKostenPerJaar +
        elVerminEnergBelastingPerJaar +
        elNetbeheerKostenPerJaar :
        null;
    return elKostenPerJaar;
}

export default calculateElKostenPerJaar;