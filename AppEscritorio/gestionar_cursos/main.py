import tkinter as tk
from modelo.Modelo import Modelo
from vista.Vista import Vista
from controlador.Controlador import Controlador
from vista.VentanaPrincipal import VentanaPrincipal  


def main():
    root = tk.Tk()
    ventana_principal = VentanaPrincipal(root) 
    root.mainloop()

if __name__ == "__main__":
    main()

