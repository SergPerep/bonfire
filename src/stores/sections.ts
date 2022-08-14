import { writable } from "svelte/store";

function createSections() {
    const sections = writable<Sections>([{
        id: 'el-consumption',
        title: 'Consumption',
        status: null,
        energyType: "el",
        isHelpScreenOpen: false
    },
    {
        id: 'el-totale-variabele-kosten',
        title: 'Totale variabele kosten',
        status: null,
        energyType: "el",
        isHelpScreenOpen: false
    },
    {
        id: 'el-vaste-leveringskosten',
        title: 'Vaste leveringskosten',
        status: null,
        energyType: "el",
        isHelpScreenOpen: false
    },
    {
        id: 'el-vermindering-energiebelasting',
        title: "Vermindering energiebelasting",
        status: "success",
        energyType: "el",
        isHelpScreenOpen: false
    },
    {
        id: 'el-netbeheerkosten',
        title: 'Netbeheerkosten',
        status: null,
        energyType: "el",
        isHelpScreenOpen: false
    },
    {
        id: 'gas-consumption',
        title: 'Consumption',
        status: null,
        energyType: "gas",
        isHelpScreenOpen: false
    },
    {
        id: 'gas-totale-variabele-kosten',
        title: 'Totale variabele kosten',
        status: null,
        energyType: "gas",
        isHelpScreenOpen: false
    },
    {
        id: 'gas-vaste-leveringskosten',
        title: 'Vaste leveringskosten',
        status: null,
        energyType: "gas",
        isHelpScreenOpen: false
    },
    {
        id: 'gas-netbeheerkosten',
        title: 'Netbeheerkosten',
        status: null,
        energyType: "gas",
        isHelpScreenOpen: false
    }
    ]);
    const { subscribe, set, update } = sections;

    return {
        subscribe,
        setStatus: (id: string, status: Status) => {
            update(sections => {
                const updatedSections = sections.map(section => {
                    if (section.id === id) section.status = status;
                    return section;
                });
                return updatedSections;
            })
        },
        openHelpScreen: (id: string) => {
            update(sections => {
                const updatedSections = sections.map(section => {
                    if (section.id === id) {
                        section.isHelpScreenOpen = true;
                    } else if (section.isHelpScreenOpen === true) {
                        section.isHelpScreenOpen = false;
                    }
                    return section;
                });
                setClassToBody("add", "is-help-screen-open");
                return updatedSections;
            })
        },
        closeHelpScreens: () => {
            update(sections => {
                const updatedSections = sections.map(section => {
                    if (section.isHelpScreenOpen === true) section.isHelpScreenOpen = false;
                    return section;
                });
                setClassToBody("remove", "is-help-screen-open");
                return updatedSections;
            })
        }
    }
};

const setClassToBody = (action: "add" | "remove", className: string) => {
    action = action || "add";
    className = className || "";

    const bodyEl = document.querySelector("body");
    switch (action){
        case "add":
            if (!bodyEl?.classList.contains("is-help-screen-open")) {
                bodyEl?.classList.add("is-help-screen-open");
            };
            break;
        case "remove":
            if (bodyEl?.classList.contains(className)) {
                bodyEl.classList.remove(className);
            };
    }
}

const getSection = (id: string, sections: Sections) => {
    return sections.find(section => section.id === id);
}

export const getSectionTitle = (id: string, sections: Sections) => {
    const section = getSection(id, sections);
    const title = section?.title || undefined;
    return title;
}

export const getSectionStatus = (id: string, sections: Sections) => {
    const section = getSection(id, sections);
    const status = section?.status || null;
    return status;
}

export const getIsHelpScreenOpen = (id: string, sections: Sections) => {
    const section = getSection(id, sections);
    return section?.isHelpScreenOpen;
}

// Returns a ratio of successfully filled sections for specified energyType (electricity or gas)
export const getSectionsFillingProgress = (sections: Sections, energyType: "el" | "gas") => {
    const filledSectionsNum = sections
        .filter((section) => section.energyType === energyType)
        .reduce((prevVal, curVal) => {
            if (curVal.status === 'success') return prevVal + 1;
            return prevVal;
        }, 0);
    const totalSectionsNum = sections.filter((section) => section.energyType === energyType).length;
    return filledSectionsNum / totalSectionsNum;
}

export const sections = createSections();