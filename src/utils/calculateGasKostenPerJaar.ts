const calculateGasKostenPerJaar = (
    hasGas: boolean,
    gasConsumptie: number | null,
	gasTotVarKosten: number | null,
	gasVasteLevKosten: number | null,
	gasNetbeheerKosten: number | null
) => {
    if(!hasGas) return null;
    /*===== GAS ===== */
    const isAllDataFilled = gasConsumptie && gasTotVarKosten && gasVasteLevKosten && gasNetbeheerKosten;
    if (!isAllDataFilled) return null;
    const gasTotVarKostenPerJaar = gasTotVarKosten * gasConsumptie;
    const gasVasteLevKostenPerJaar = gasVasteLevKosten * 12;
    const gasNetbeheerKostenPerJaar = gasNetbeheerKosten * 365;
    const gasKostenPerJaar = 
        gasTotVarKostenPerJaar + 
        gasVasteLevKostenPerJaar + 
        gasNetbeheerKostenPerJaar;
    return gasKostenPerJaar;
}

export default calculateGasKostenPerJaar;