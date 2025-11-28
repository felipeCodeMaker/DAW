
#Para ejecutarlo

#.\Scripts\activate

#uvicorn tareaAPI:iesazarquiel

import pandas as pd
import numpy as np
from fastapi import FastAPI








iesazarquiel = FastAPI()

@iesazarquiel.get("/info-alumnos")
#http://127.0.0.1:8000/info-alumnos
#uvicorn tareaAPI:iesazarquiel --reload
def info():
    url ='https://github.com/felipeCodeMaker/DAW/blob/8fe67f1d607c621255f498b5b1650e95b6e24b50/Python/tareas/FastApiLibreria/tarea1.3/uno.csv'
    df = pd.read_csv(url)
    return {df['ID']}

@iesazarquiel.get("/asistencia")

def asistencia():
    url ='uno.csv'
    df = pd.read_csv(url)
    return {"Estas en asistencia"}

@iesazarquiel.get("/notas")

def notas():
    
    url ='uno.csv'
    df = pd.read_csv(url)
    return 













