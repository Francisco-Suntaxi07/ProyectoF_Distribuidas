export type MenuItem = {
    label: string;
    route?: string;
    icon: string
}

export const teacherMenuItems: MenuItem[] = [
    {
        label: "Inicio",
        route: "inicio",
        icon: "home"
    },
    {
        label: "Calificaciones",
        route: "profesor/calificaciones",
        icon: "note_alt"
    },
]

export const studentMenuItems: MenuItem[] = [
    {
        label: "Inicio",
        route: "inicio",
        icon: "home"
    },
    {
        label: "Matriculas",
        route: "estudiante/matriculas",
        icon: "how_to_reg"
    },
    {
        label: "Notas",
        route: "estudiante/notas",
        icon: "monitor_weight"
    },
]

