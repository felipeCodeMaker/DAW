from fastapi import FastAPI
import csv

iesazarquiel = FastAPI()

# Leer el archivo CSV
def leer_csv():
    datos = []
    #ESTUDIAR MAS A FONDO
    with open('uno.csv', 'r', encoding='utf-8') as archivo: #Usado para abrir el documento
        lector = csv.DictReader(archivo)
        for fila in lector:
            datos.append(fila)
    return datos

datos_alumnos = leer_csv()

@iesazarquiel.get("/")#Si no ponemos nada, se queda como direccion raiz y podemos poner algo desde el principio
def inicio():
    return {"mensaje": "api del azarquiel"}

@iesazarquiel.get("/info-alumnos")
def lista_alumnos():
    #Devuelve todos los IDs de alumnos
    ids = []
    for alumno in datos_alumnos:
        ids.append(int(alumno['ID']))
    return {"ids_alumnos": ids}

@iesazarquiel.get("/asistencia")
def ver_asistencia(id: int = None):
    #Muestra la asistencia de un alumno
    
    
    if id is None:  #SI se hace una consulta que en realidad no existe, le envio uan ayudita
        return {
            "error": "Falta el ID del alumno",
            "ejemplo": "Usa /asistencia?id=1001"
        }
    
    # Buscar al alumno
    for alumno in datos_alumnos:
        if int(alumno['ID']) == id:
            nombre_completo = f"{alumno['Nombre']} {alumno['Apellidos']}"
            asistencia_porcentaje = float(alumno['Asistencia']) * 100
            return {
                "alumno": nombre_completo,
                "asistencia": f"{asistencia_porcentaje}%"
            }
    
    return {"error": "Alumno no encontrado"}

@iesazarquiel.get("/notas")
def ver_notas(id: int = None, tipo_nota: str = None):
    """Muestra una nota específica de un alumno"""
    
    if id is None or tipo_nota is None:
        return {
            "error": "Faltan parámetros",
            "necesarios": "id y tipo_nota",
            "ejemplo": "/notas?id=1001&tipo_nota=Parcial1",
            "tipos_nota": ["Parcial1", "Parcial2", "Ordinario1", "Practicas", "OrdinarioPracticas"]
        }
    
    # Buscar al alumno por su cloumna
    for alumno in datos_alumnos:
        if int(alumno['ID']) == id:
            if tipo_nota in alumno:
                nombre_completo = f"{alumno['Nombre']} {alumno['Apellidos']}"
                #Devolvemos
                return {
                    "alumno": nombre_completo,
                    "nota": tipo_nota,
                    "calificacion": alumno[tipo_nota]
                }
            else:
                return {"error": "Tipo de nota no valido"}
    
    return {"error": "Alumno no encontrado"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(iesazarquiel, host="0.0.0.0", port=8000)