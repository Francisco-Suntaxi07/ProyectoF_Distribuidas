import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
from ttkthemes import ThemedStyle
from vista.VentanaAdministrador import VentanaAdministrador

class VentanaPrincipal:
    def __init__(self, root):
        self.root = root
        self.root.title("Ventana Principal")

        self.estilo = ThemedStyle(self.root)
        self.estilo.set_theme("arc")

        self.root.geometry("400x450")  # Establecer el tamaño de la ventana principal

        self.frame_principal = ttk.Frame(self.root)
        self.frame_principal.pack(expand=True, fill=tk.BOTH, padx=20, pady=20)

        self.imagen = tk.PhotoImage(file="assets/user.png")
        self.label_imagen = tk.Label(self.frame_principal, image=self.imagen)
        self.label_imagen.pack(pady=(0, 10))

        self.label_usuario = ttk.Label(self.frame_principal, text="Usuario:")
        self.label_usuario.pack()

        self.entry_usuario = ttk.Entry(self.frame_principal)
        self.entry_usuario.pack(pady=5)

        self.label_contraseña = ttk.Label(self.frame_principal, text="Contraseña:")
        self.label_contraseña.pack()

        self.entry_contraseña = ttk.Entry(self.frame_principal, show="*")
        self.entry_contraseña.pack(pady=5)

        self.boton_ingresar = ttk.Button(self.frame_principal, text="Ingresar", command=self.iniciar_sesion)
        self.boton_ingresar.pack(pady=10)

    def iniciar_sesion(self):
        usuario = self.entry_usuario.get()
        contraseña = self.entry_contraseña.get()
        if usuario == "admin" and contraseña == "admin":
            self.abrir_ventana_administrador()  # Llama a la función para abrir la ventana del administrador
        else:
            messagebox.showerror("Error", "Credenciales incorrectas")

    def abrir_ventana_administrador(self):
        # Crea una nueva instancia de VentanaAdministrador y oculta la ventana principal
        self.root.withdraw()
        self.ventana_administrador = VentanaAdministrador(tk.Toplevel(), self)

def main():
    root = tk.Tk()
    ventana_principal = VentanaPrincipal(root)
    root.mainloop()

if __name__ == "__main__":
    main()
