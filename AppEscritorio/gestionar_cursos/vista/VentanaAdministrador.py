import tkinter as tk
from tkinter import ttk
from PIL import Image, ImageTk
from ttkthemes import ThemedStyle
from .Vista import Vista
import webbrowser

class VentanaAdministrador:
    def __init__(self, root, ventana_principal):
        self.root = root
        self.root.title("Ventana de Administrador")
        self.ventana_principal = ventana_principal

        self.estilo = ThemedStyle(self.root)
        self.estilo.set_theme("arc")

        self.root.geometry("900x400")

        self.frame_contenedor = ttk.Frame(self.root)
        self.frame_contenedor.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

        # Primer columna para la primera imagen y el primer botón
        self.frame_columna1 = ttk.Frame(self.frame_contenedor)
        self.frame_columna1.pack(side="left", expand=True, fill=tk.BOTH, padx=10, pady=10)

        self.imagen1 = Image.open("assets/docente.png")
        self.imagen1 = self.imagen1.resize((200, 200))
        self.imagen1 = ImageTk.PhotoImage(self.imagen1)
        self.label_imagen1 = tk.Label(self.frame_columna1, image=self.imagen1)
        self.label_imagen1.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

        self.boton_registrar_docentes = ttk.Button(self.frame_columna1, text="Registrar Docentes", command=self.abrir_pagina)
        self.boton_registrar_docentes.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

        # Segunda columna para la segunda imagen y el segundo botón
        self.frame_columna2 = ttk.Frame(self.frame_contenedor)
        self.frame_columna2.pack(side="left", expand=True, fill=tk.BOTH, padx=10, pady=10)

        self.imagen2 = Image.open("assets/estudiante.png")
        self.imagen2 = self.imagen2.resize((200, 200))
        self.imagen2 = ImageTk.PhotoImage(self.imagen2)
        self.label_imagen2 = tk.Label(self.frame_columna2, image=self.imagen2)
        self.label_imagen2.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

        self.boton_registrar_usuarios = ttk.Button(self.frame_columna2, text="Registrar Usuarios", command=self.abrir_pagina)
        self.boton_registrar_usuarios.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

        # Tercera columna para la tercera imagen y el tercer botón
        self.frame_columna3 = ttk.Frame(self.frame_contenedor)
        self.frame_columna3.pack(side="left", expand=True, fill=tk.BOTH, padx=10, pady=10)

        self.imagen3 = Image.open("assets/asignar.png")
        self.imagen3 = self.imagen3.resize((200, 200))
        self.imagen3 = ImageTk.PhotoImage(self.imagen3)
        self.label_imagen3 = tk.Label(self.frame_columna3, image=self.imagen3)
        self.label_imagen3.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

        self.boton_asignar_cursos = ttk.Button(self.frame_columna3, text="Asignar Cursos", command=self.abrir_vista)
        self.boton_asignar_cursos.pack(expand=True, fill=tk.BOTH, padx=10, pady=10)

    def abrir_pagina(self):
        webbrowser.open("http://localhost:4200/login")

    def abrir_vista(self):
        self.root.withdraw()  # Oculta la ventana actual
        ventana_vista = tk.Toplevel(self.root)
        ventana_vista.title("Vista")
        Vista(ventana_vista)

    def cerrar_ventana(self):
        self.root.destroy()

def main():
    root = tk.Tk()
    ventana_administrador = VentanaAdministrador(root)
    root.mainloop()

if __name__ == "__main__":
    main()
