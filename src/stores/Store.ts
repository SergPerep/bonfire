import { writable } from "svelte/store";

type sectionStatusesType = {
    elConsumption: Status,
    elNetbeheerkosten: Status,
    elTotVarKosten: Status,
    elVasteLeverKosten: Status,
    elVerminBelasting: Status
};

export const sectionStatuses = writable<sectionStatusesType>({
    elConsumption: null,
    elNetbeheerkosten: null,
    elTotVarKosten: null,
    elVasteLeverKosten: null,
    elVerminBelasting: "success"
});