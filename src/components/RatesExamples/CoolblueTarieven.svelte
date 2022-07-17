<script lang="ts">
	import Table from './Table.svelte';
	export let isElTotVarKostEnkTarActive = false;

	const elVarKostenEnkelTarief = {
		title: 'Variabele kosten enkeltarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Variabele leveringskosten',
				inclBTW: '0.084085',
				isActive: false
			},
			{
				name: 'Energiebelasting',
				inclBTW: '0.114079',
				isActive: false
			},
			{
				name: 'Opslag duurzame energie',
				inclBTW: '0.036300',
				isActive: false
			}
		],
		total: {
			name: 'Totale variabele kosten enkeltarief',
			inclBTW: '0.234474',
			isActive: isElTotVarKostEnkTarActive
		}
	};

	export let isElTotVarKostNormTarActive = false;

	const elVarKsotenNormaalTarief = {
		title: 'Variabele kosten normaaltarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Variabele leveringskosten',
				inclBTW: '0.089298',
				isActive: false
			},
			{
				name: 'Energiebelasting',
				inclBTW: '0.114079',
				isActive: false
			},
			{
				name: 'Opslag duurzame energie',
				inclBTW: '0.036300',
				isActive: false
			}
		],
		total: {
			name: 'Totale variabele kosten normaaltarief',
			inclBTW: '0.239677',
			isActive: isElTotVarKostNormTarActive
		}
	};

	export let isElTotVarKostDalTarActive = false;

	const elVarKsotenDalTarief = {
		title: 'Variabele kosten daltarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Variabele leveringskosten',
				inclBTW: '0.078529',
				isActive: false
			},
			{
				name: 'Energiebelasting',
				inclBTW: '0.114079',
				isActive: false
			},
			{
				name: 'Opslag duurzame energie',
				inclBTW: '0.036300',
				isActive: false
			}
		],
		total: {
			name: 'Totale variabele kosten daltarief',
			inclBTW: '0.239677',
			isActive: isElTotVarKostDalTarActive
		}
	};



	const elTerugLeverTarief = {
		title: 'Teruglevertarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Teruglevertarief na salderen',
				inclBTW: '0.054934',
				isActive: false
			}
		]
	};

	export let isElVasLevKostActive = false;
	export let isElVermEnrgBelastActive = false;
	export let isElNetBehKostActive = false;

    const elVasteKosten = {
        title: "Vaste kosten elektriciteit",
        eenheden: "€/dag",
        rows: [
            {
                name: "Vaste leveringskosten",
                eenheden: "€/maand",
                inclBTW: "6.489956",
				isActive: isElVasLevKostActive
            },
            {
                name: "Vermindering energiebelasting",
                inclBTW: "-1,530302",
				isActive: isElVermEnrgBelastActive
            },
            {
                name: "Netbeheerkosten",
                inclBTW: "0.651585",
				isActive: isElNetBehKostActive
            }
        ]
    }

	export let isGasTotVarKostTarActive = false;

    const gasVarKosten = {
        title: "Variabele kosten gas",
        eenheden: "€/m3",
        rows: [
            {
                name: "Variabele leveringskosten",
                inclBTW: "0.300080",
				isActive: false
            },
            {
                name: "Energiebelasting",
                inclBTW: "0.421758",
				isActive: false
            },
            {
                name: "Opslag duurzame energie",
                inclBTW: "0.102971",
				isActive: false
            }
        ],
        total: {
            name: 'Totale variabele kosten normaaltarief',
            inclBTW: "0.824809",
			isActive: isGasTotVarKostTarActive
        }
    }

	export let isGasVasLevKostActive = false;
	export let isGasNetBehKostActive = false;

    const gasVasteKosten = {
        title: "Vaste kosten gas",
        eenheden: "€/dag",
        rows: [
            {
                name: "Vaste leveringskosten",
                eenheden: "€/maand",
                inclBTW: "6.489956",
				isActive: isGasVasLevKostActive
            },
            {
                name: "Netbeheerkosten",
                inclBTW: "0.484242",
				isActive: isGasNetBehKostActive
            }
        ]
    }
</script>

<h2>Tarieven elektriciteit</h2>
<Table tableData={elVarKostenEnkelTarief} />
<Table tableData={elVarKsotenNormaalTarief} />
<Table tableData={elVarKsotenDalTarief} />
<Table tableData={elTerugLeverTarief} />
<Table tableData={elVasteKosten} />
<h2>Tarieven gas</h2>
<Table tableData={gasVarKosten} />
<Table tableData={gasVasteKosten} />

