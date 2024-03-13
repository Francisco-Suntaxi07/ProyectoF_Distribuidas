import tkinter as tk
from tkinter import ttk, messagebox
import requests
from modelo.Modelo import Modelo
import json

class Vista:
    def __init__(self, root):
        self.root = root
        self.root.title("Asignar Registros")
        self.root.geometry("600x500")

        self.frame_principal = ttk.Frame(root, padding="10")
        self.frame_principal.grid(row=0, column=0, sticky="nsew")

        self.label_titulo = ttk.Label(self.frame_principal, text="ASIGNAR REGISTROS")
        self.label_titulo.grid(row=0, column=0, columnspan=2, pady=(0, 10))

        self.modelo = Modelo()

        # Obtener nombres de los profesores y configurar el Combobox
        nombres_docentes = self.modelo.obtener_docentes()
        self.dropdown_docentes = ttk.Combobox(self.frame_principal, values=nombres_docentes)
        self.dropdown_docentes.grid(row=1, column=0, padx=5, pady=5, sticky="ew")

        # Obtener cursos sin docente y configurar el Combobox
        registros_sin_docente = self.modelo.obtener_registros_sin_docente()
        cursos_sin_docente = [registro["nameCourse"] for registro in registros_sin_docente]
        self.dropdown_cursos = ttk.Combobox(self.frame_principal, values=cursos_sin_docente)
        self.dropdown_cursos.grid(row=1, column=1, padx=5, pady=5, sticky="ew")

        # Crear un diccionario para mapear el nombre del curso al ID del registro
        self.mapeo_cursos_ids = {registro["nameCourse"]: registro["id"] for registro in registros_sin_docente}

        self.boton_asignar = ttk.Button(self.frame_principal, text="Asignar", command=self.agregar_asignacion)
        self.boton_asignar.grid(row=2, column=0, columnspan=2, pady=10, sticky="ew")

        self.label_asignaciones = ttk.Label(self.frame_principal, text="Lista de Asignaciones")
        self.label_asignaciones.grid(row=3, column=0, columnspan=2, pady=(10, 0))

        self.lista_asignaciones = tk.Listbox(self.frame_principal, width=40, height=10)
        self.lista_asignaciones.grid(row=4, column=0, columnspan=2, padx=5, pady=5, sticky="nsew")

        for i in range(2):
            self.frame_principal.grid_columnconfigure(i, weight=1)
        self.frame_principal.grid_rowconfigure(4, weight=1)
        self.root.grid_columnconfigure(0, weight=1)
        self.root.grid_rowconfigure(0, weight=1)

    def agregar_asignacion(self):
        docente_seleccionado = self.dropdown_docentes.get()
        curso_seleccionado = self.dropdown_cursos.get()
        asignacion = f"{docente_seleccionado} - {curso_seleccionado}"
        self.lista_asignaciones.insert(tk.END, asignacion)

        id_registro = self.mapeo_cursos_ids.get(curso_seleccionado)
        if id_registro:
            if self.actualizar_registro(id_registro, docente_seleccionado):
                messagebox.showinfo("Éxito", "Registro actualizado correctamente.")
            else:
                messagebox.showerror("Error", "No se pudo actualizar el registro.")
        else:
            messagebox.showerror("Error", "No se encontró el registro.")
    
    def actualizar_registro(self, id_registro, nuevo_docente):
        try:
            url = f"http://localhost:8030/api/records/update/{id_registro}"
            registro = self.obtener_registro_por_id(id_registro)
            if registro:
                registro["nameTeacher"] = nuevo_docente
                datos = registro
                headers = {"Content-Type": "application/json"}
                response = requests.put(url, data=json.dumps(datos), headers=headers)
                print(f"Respuesta de la API: {response.text}")
                return response.status_code == 200
            else:
                messagebox.showerror("Error", "No se encontró el registro.")
                return False
        except requests.RequestException as e:
            messagebox.showerror("Error de conexión", f"No se pudo conectar con la API: {e}")
            return False
        
    def obtener_registro_por_id(self, id_registro):
        try:
            response = requests.get("http://localhost:8030/api/records/all")
            if response.status_code == 200:
                registros = response.json()
                for registro in registros:
                    if registro["id"] == id_registro:
                        return registro
            else:
                messagebox.showerror("Error", "No se pudo obtener la lista de registros.")
                return None
        except requests.RequestException as e:
            messagebox.showerror("Error de conexión", f"No se pudo conectar con la API: {e}")
            return None

def main():
    root = tk.Tk()
    vista = Vista(root)
    root.mainloop()

if __name__ == "__main__":
    main()