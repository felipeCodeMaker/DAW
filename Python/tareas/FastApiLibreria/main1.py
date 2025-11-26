from fastapi import FastAPI

app = FastAPI()

@app.get("/myprimerapi")

def saludo(name:str):
    return {"Hello world " +name + "!"}

#saludo("Felipe")


#pip install fastapi

#pip install uvicorn

#uvicorn main:app --> ejecutar


#Poner en la parte de arriba del buscador -->  http://127.0.0.1:8000/myprimerapi?name=Felipe

#resultado --> ["Hello world Felipe!"]