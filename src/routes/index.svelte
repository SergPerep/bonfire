<script>
 let isMeterkastSlim = false;
 let elEnkelTotVarKosten = "";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Electriciteit</h2>
<input id="meterkast" type="checkbox" value="Is meterkast slim?">
<label for="meterkast">Is Meterkast slim?</label><br/>


<label for="elEnkelTotVarKosten">Enkele Totale Variabele Kosten</label> 
<input id="elEnkelTotVarKosten" bind:value={elEnkelTotVarKosten} />

