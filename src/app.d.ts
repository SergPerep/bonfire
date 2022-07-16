/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare type Status = "success" | "error" | null;
declare type kosten = number | null;
declare type consumption = kosten;

type Section = {
    id: string,
    title: string,
    status: Status,
    group: "el" | "gas"
};
type Sections = Section[];

type TableData = {
    title: string;
    eenheden: string;
    rows: {
        name: string,
        eenheden?: string,
        inclBTW: string,
        isActive: boolean
    }[],
    total?: {
        name: string,
        eenheden?: string,
        inclBTW: string,
        isActive: boolean
    }
}

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
