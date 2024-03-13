

'''
class Controlador:
    def __init__(self, vista, modelo):
        self.vista = vista
        self.modelo = modelo

        self.cargar_docentes()
        self.cargar_cursos()

        self.vista.boton_asignar.config(command=self.asignar_curso)

    def cargar_docentes(self):
        docentes = self.modelo.obtener_docentes()
        self.vista.dropdown_docentes['values'] = docentes

    def cargar_cursos(self):
        cursos = self.modelo.obtener_cursos()
        self.vista.dropdown_cursos['values'] = cursos

    def asignar_curso(self):
        # Implementa la lógica de asignación de cursos aquí
        pass
'''
import tkinter as tk

class Controlador:
    def __init__(self, vista, modelo):
        self.vista = vista
        self.modelo = modelo

        self.cargar_docentes()
        self.cargar_cursos()

        self.vista.boton_asignar.config(command=self.asignar_curso)

    def cargar_docentes(self):
        docentes = self.modelo.obtener_docentes()
        self.vista.dropdown_docentes['values'] = docentes

    def cargar_cursos(self):
        cursos = self.modelo.obtener_cursos()
        self.vista.dropdown_cursos['values'] = cursos

    def asignar_curso(self):
        docente_seleccionado = self.vista.dropdown_docentes.get()
        curso_seleccionado = self.vista.dropdown_cursos.get()
        
        # Aquí deberías implementar la lógica para asignar el curso al docente seleccionado
        # Por ahora, simplemente mostraremos la asignación en la lista de asignaciones
        
        asignacion = f"Docente: {docente_seleccionado}, Curso: {curso_seleccionado}"
        self.vista.lista_asignaciones.insert(tk.END, asignacion)
