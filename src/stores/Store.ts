import { writable } from "svelte/store";

function createSections() {
    const sections = writable<Sections>([{
        id: 'el-consumption',
        title: 'Consumption',
        status: null,
        group: "el"
    },
    {
        id: 'el-totale-variabele-kosten',
        title: 'Totale variabele kosten',
        status: null,
        group: "el"
    },
    {
        id: 'el-vaste-leveringskosten',
        title: 'Vaste leveringskosten',
        status: null,
        group: "el"
    },
    {
        id: 'el-vermindering-energiebelasting',
        title: "Vermindering energiebelasting",
        status: "success",
        group: "el"
    },
    {
        id: 'el-netbeheerkosten',
        title: 'Netbeheerkosten',
        status: null,
        group: "el"
    },
    {
        id: 'gas-consumption',
        title: 'Consumption',
        status: null,
        group: "gas"
    },
    {
        id: 'gas-totale-variabele-kosten',
        title: 'Totale variabele kosten',
        status: null,
        group: "gas"
    },
    {
        id: 'gas-vaste-leveringskosten',
        title: 'Vaste leveringskosten',
        status: null,
        group: "gas"
    },
    {
        id: 'gas-netbeheerkosten',
        title: 'Netbeheerkosten',
        status: null,
        group: "gas"
    }
]);
    const { subscribe, set, update } = sections;

    return {
        subscribe,
        setStatus: (id: string, status: Status) => {
            update(sections => {
                const newSect = sections.map(section => {
                    if (section.id === id) section.status = status;
                    return section;
                });
                console.log(`Status for ${id} has been set as ${status}`)
                return newSect;
            })
        }
    }
};

const getSection = (id: string, sections: Sections) => {
    return sections.find(section => section.id === id);
}

export const getSectionTitle = (id: string, sections: Sections) => {
    const section = getSection(id, sections);
    const title = section?.title || undefined;
    return title;
}

export const  getSectionStatus = (id: string, sections: Sections) => {
    const section = getSection(id, sections);
    const status = section?.status || null;
    return status;
}

export const sections = createSections();