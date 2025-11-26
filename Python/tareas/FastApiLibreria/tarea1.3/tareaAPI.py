
#Para ejecutarlo

#.\Scripts\activate

#uvicorn tareaAPI:iesazarquiel

import pandas as pd
import numpy as np
from fastapi import FastAPI
df = pd.read_csv("datos_alumnos.csv",low_memory=False)

iesazarquiel = FastAPI()

@iesazarquiel.get("/info-alumnos")

def info():
    return {"Estas en info"}
    print(df[ID])

@iesazarquiel.get("/asistencia")

def asistencia():
    return {"Estas en asistencia"}

@iesazarquiel.get("/notas")

def notas():
    return {"Estass en notas"}