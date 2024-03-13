import tkinter as tk
from tkinter import ttk
from modelo.Modelo import Modelo

class Vista:
    def __init__(self, root):
        self.root = root
        self.root.title("Asignar Cursos")

        self.frame_principal = ttk.Frame(root, padding="10")
        self.frame_principal.grid(row=0, column=0, sticky="nsew")

        self.label_titulo = ttk.Label(self.frame_principal, text="ASIGNAR CURSOS")
        self.label_titulo.grid(row=0, column=0, columnspan=2, pady=(0, 10))

        # Crear una instancia de la clase Modelo
        self.modelo = Modelo()

        # Obtener nombres de los profesores y configurar el Combobox
        nombres_docentes = self.modelo.obtener_docentes()
        self.dropdown_docentes = ttk.Combobox(self.frame_principal, values=nombres_docentes)
        self.dropdown_docentes.grid(row=1, column=0, padx=5, pady=5, sticky="ew")

        self.dropdown_cursos = ttk.Combobox(self.frame_principal)
        self.dropdown_cursos.grid(row=1, column=1, padx=5, pady=5, sticky="ew")

        self.boton_asignar = ttk.Button(self.frame_principal, text="Asignar")
        self.boton_asignar.grid(row=2, column=0, columnspan=2, pady=10, sticky="ew")

        self.label_asignaciones = ttk.Label(self.frame_principal, text="Lista de Asignaciones")
        self.label_asignaciones.grid(row=3, column=0, columnspan=2, pady=(10, 0))

        self.scroll_asignaciones_y = ttk.Scrollbar(self.frame_principal, orient=tk.VERTICAL)
        self.scroll_asignaciones_x = ttk.Scrollbar(self.frame_principal, orient=tk.HORIZONTAL)

        self.lista_asignaciones = tk.Listbox(self.frame_principal, width=40, height=10, borderwidth=0, highlightthickness=0, yscrollcommand=self.scroll_asignaciones_y.set, xscrollcommand=self.scroll_asignaciones_x.set)
        self.lista_asignaciones.grid(row=4, column=0, columnspan=2, padx=5, pady=5, sticky="nsew")
        self.scroll_asignaciones_y.config(command=self.lista_asignaciones.yview)
        self.scroll_asignaciones_y.grid(row=4, column=2, sticky="ns")
        self.scroll_asignaciones_x.config(command=self.lista_asignaciones.xview)
        self.scroll_asignaciones_x.grid(row=5, column=0, columnspan=2, sticky="ew")

        for i in range(2):
            self.frame_principal.grid_columnconfigure(i, weight=1)
        self.frame_principal.grid_rowconfigure(4, weight=1)
        self.frame_principal.grid_rowconfigure(5, weight=0)

        self.root.grid_columnconfigure(0, weight=1)
        self.root.grid_rowconfigure(0, weight=1)

def main():
    root = tk.Tk()
    vista = Vista(root)
    root.mainloop()

if __name__ == "__main__":
    main()
