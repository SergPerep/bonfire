import { writable } from "svelte/store";

export const elKostenPerJaar = writable<number | null>(null);
export const gasKostenPerJaar = writable<number | null>(null);