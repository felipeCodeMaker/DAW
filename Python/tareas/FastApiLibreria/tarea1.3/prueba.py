from fastapi import FastAPI, HTTPException
import csv
from typing import Optional, List, Dict


"""
Ejemplos de uso:
Info alumnos: GET http://127.0.0.1:8000/info-alumnos

Asistencia sin parámetros: GET http://127.0.0.1:8000/asistencia

Asistencia con ID: GET http://127.0.0.1:8000/asistencia?id_alumno=1001

Notas sin parámetros: GET http://127.0.0.1:8000/notas

Notas con parámetros: GET http://127.0.0.1:8000/notas?id_alumno=1001&nota_consultada=parcial1

La API estará disponible en http://127.0.0.1:8000 y podrás ver la documentación automática en http://127.0.0.1:8000/docs.
    """



iesazarquiel = FastAPI(title="iesazarquiel", description="API para gestión de alumnos")

# Cargar datos del CSV
def cargar_datos():
    alumnos = []
    with open('uno.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            alumnos.append({
                'apellidos': row['Apellidos'],
                'nombre': row['Nombre'],
                'id': int(row['ID']),
                'asistencia': float(row['Asistencia']),
                'parcial1': float(row['Parcial1']),
                'parcial2': float(row['Parcial2']),
                'ordinario1': float(row['Ordinario1']),
                'practicas': float(row['Practicas']),
                'ordinarioPracticas': float(row['OrdinarioPracticas'])
            })
    return alumnos

# Cargar datos al iniciar
alumnos_data = cargar_datos()

@iesazarquiel.get("/")
def read_root():
    return {"message": "Bienvenido a la API iesazarquiel"}

@iesazarquiel.get("/info-alumnos")
def info_alumnos():
    """
    Devuelve el listado de IDs de todos los alumnos
    """
    ids = [alumno['id'] for alumno in alumnos_data]
    return {"alumnos_ids": ids}

@iesazarquiel.get("/asistencia")
def asistencia(id_alumno: Optional[int] = None):
    """
    Devuelve nombre, apellidos y % de asistencia de un alumno
    """
    if id_alumno is None:
        return {
            "mensaje": "Este endpoint requiere el parámetro 'id_alumno'",
            "parametros_requeridos": 1,
            "ejemplo_uso": "/asistencia?id_alumno=1001",
            "alumnos_disponibles": [alumno['id'] for alumno in alumnos_data]
        }
    
    # Buscar alumno por ID
    alumno_encontrado = None
    for alumno in alumnos_data:
        if alumno['id'] == id_alumno:
            alumno_encontrado = alumno
            break
    
    if alumno_encontrado is None:
        raise HTTPException(status_code=404, detail=f"Alumno con ID {id_alumno} no encontrado")
    
    return {
        "id": alumno_encontrado['id'],
        "nombre_completo": f"{alumno_encontrado['nombre']} {alumno_encontrado['apellidos']}",
        "asistencia": alumno_encontrado['asistencia'] * 100  # Convertir a porcentaje
    }

@iesazarquiel.get("/notas")
def notas(id_alumno: Optional[int] = None, nota_consultada: Optional[str] = None):
    """
    Devuelve nombre, apellidos y calificación en una categoría específica
    """
    if id_alumno is None or nota_consultada is None:
        return {
            "mensaje": "Este endpoint requiere dos parámetros: 'id_alumno' y 'nota_consultada'",
            "parametros_requeridos": 2,
            "ejemplo_uso": "/notas?id_alumno=1001&nota_consultada=parcial1",
            "alumnos_disponibles": [alumno['id'] for alumno in alumnos_data],
            "notas_disponibles": [
                "parcial1", "parcial2", "ordinario1", 
                "practicas", "ordinarioPracticas"
            ]
        }
    
    # Validar que la nota consultada existe
    notas_validas = ["parcial1", "parcial2", "ordinario1", "practicas", "ordinarioPracticas"]
    if nota_consultada not in notas_validas:
        raise HTTPException(
            status_code=400, 
            detail=f"Nota consultada '{nota_consultada}' no válida. Opciones: {notas_validas}"
        )
    
    # Buscar alumno por ID
    alumno_encontrado = None
    for alumno in alumnos_data:
        if alumno['id'] == id_alumno:
            alumno_encontrado = alumno
            break
    
    if alumno_encontrado is None:
        raise HTTPException(status_code=404, detail=f"Alumno con ID {id_alumno} no encontrado")
    
    return {
        "id": alumno_encontrado['id'],
        "nombre_completo": f"{alumno_encontrado['nombre']} {alumno_encontrado['apellidos']}",
        "nota_consultada": nota_consultada,
        "calificacion": alumno_encontrado[nota_consultada]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(iesazarquiel, host="0.0.0.0", port=8000)