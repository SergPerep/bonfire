/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare type Status = "success" | "error" | null;
declare type Report = {
	status: Status;
	hintStr: string | null;
};
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
