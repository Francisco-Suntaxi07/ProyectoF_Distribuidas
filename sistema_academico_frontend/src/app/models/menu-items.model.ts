export type MenuItem = {
    label: string;
    route?: string
}

export const teacherMenuItems: MenuItem[] = [
    {
        label: "Inicio",
        route: "inicio"
    },
    {
        label: "Calificaciones",
        route: "profesor/calificaciones"
    },
]

export const studentMenuItems: MenuItem[] = [
    {
        label: "Inicio",
        route: "inicio"
    },
    {
        label: "Matriculas",
        route: "estudiante/matriculas"
    },
]

