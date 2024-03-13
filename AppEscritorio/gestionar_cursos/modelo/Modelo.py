import requests

class Modelo:
    def obtener_docentes(self):
        response = requests.get("http://localhost:8000/api/users/all")
        usuarios = response.json()
        docentes = [usuario["name"] for usuario in usuarios if usuario["role"] == "PROFESOR"]
        return docentes

    def obtener_registros_sin_docente(self):
        response = requests.get("http://localhost:8030/api/records/all")
        registros = response.json()
        registros_sin_docente = [
            {"nameCourse": registro["nameCourse"], "id": registro["id"]}
            for registro in registros
            if registro["nameTeacher"] == ""
        ]
        return registros_sin_docente