from fastapi import FastAPI

iesazarquiel = FastAPI()

@iesazarquiel.get("/info-alumnos")

def info():
    return {"Estas en info"}

@iesazarquiel.get("/asistencia")

def asistencia():
    return {"Estas en asistencia"}

@iesazarquiel.get("/notas")

def notas():
    return {"Estass en notas"}



#uvicorn main:iesazarquiel --> ejecutar

#Cada api se ejecuta de forma diferente --> uvicorn nombre_archivo:nombre_api
