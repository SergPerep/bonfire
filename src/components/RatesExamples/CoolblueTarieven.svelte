<script lang="ts">
	import Table from './Table.svelte';

	const elVarKostenEnkelTarief = {
		title: 'Variabele kosten enkeltarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Variabele leveringskosten',
				inclBTW: '0.084085'
			},
			{
				name: 'Energiebelasting',
				inclBTW: '0.114079'
			},
			{
				name: 'Opslag duurzame energie',
				inclBTW: '0.036300'
			}
		],
		total: {
			name: 'Totale variabele kosten enkeltarief',
			inclBTW: '0.234474'
		}
	};

	const elVarKsotenNormaalTarief = {
		title: 'Variabele kosten normaaltarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Variabele leveringskosten',
				inclBTW: '0.089298'
			},
			{
				name: 'Energiebelasting',
				inclBTW: '0.114079'
			},
			{
				name: 'Opslag duurzame energie',
				inclBTW: '0.036300'
			}
		],
		total: {
			name: 'Totale variabele kosten normaaltarief',
			inclBTW: '0.239677'
		}
	};

	const elVarKsotenDalTarief = {
		title: 'Variabele kosten daltarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Variabele leveringskosten',
				inclBTW: '0.078529'
			},
			{
				name: 'Energiebelasting',
				inclBTW: '0.114079'
			},
			{
				name: 'Opslag duurzame energie',
				inclBTW: '0.036300'
			}
		],
		total: {
			name: 'Totale variabele kosten daltarief',
			inclBTW: '0.239677'
		}
	};

	const elTerugLeverTarief = {
		title: 'Teruglevertarief',
		eenheden: '€/kWh',
		rows: [
			{
				name: 'Teruglevertarief na salderen',
				inclBTW: '0.054934'
			}
		]
	};

    const elVasteKosten = {
        title: "Vaste kosten elektriciteit",
        eenheden: "€/dag",
        rows: [
            {
                name: "Vaste leveringskosten",
                eenheden: "€/maand",
                inclBTW: "6.489956"
            },
            {
                name: "Vermindering energiebelasting",
                inclBTW: "-1,530302"
            },
            {
                name: "Netbeheerkosten",
                inclBTW: "0.651585"
            }
        ]
    }

    const gasVarKosten = {
        title: "Variabele kosten gas",
        eenheden: "€/m3",
        rows: [
            {
                name: "Variabele leveringskosten",
                inclBTW: "0.300080"
            },
            {
                name: "Energiebelasting",
                inclBTW: "0.421758"
            },
            {
                name: "Opslag duurzame energie",
                inclBTW: "0.102971"
            }
        ],
        total: {
            name: 'Totale variabele kosten normaaltarief',
            inclBTW: "0.824809"
        }
    }

    const gasVasteKosten = {
        title: "Vaste kosten gas",
        eenheden: "€/dag",
        rows: [
            {
                name: "Vaste leveringskosten",
                eenheden: "€/maand",
                inclBTW: "6.489956"
            },
            {
                name: "Netbeheerkosten",
                inclBTW: "0.484242"
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

