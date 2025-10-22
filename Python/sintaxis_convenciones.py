"""
En este script vamos a practicaar sintaxis
"""

from operaciones import resta as restar

#Imprimir
print("Hola Mundo")

print(type(10))
precio = 19.90
nombre= "Python"
activo= True
edad = None

print("edad ", type(edad), " prcio ", type(precio))

lista = [1, 2, 3, 4]
print(lista)


midiccionario = {

    "nombre":"Paquito",
    "apellido": "Chocolatero",
    "usuario": "paquirrin",
    "contraseña": "admin1"
    
}

print(midiccionario["nombre"])

conjunto = {1, 2, 3, 4, "hola", "adios"}

print(conjunto)
print(list(conjunto)[2])

num1 =  int(input("Introduce un numero"))
print(num1)
num2 =  int(input("Introduce un numero"))

if num1> num2:
    print(num1 , " es mayor que ", num1)
elif num1 < num2:
    print(num1, " es menor que ", num2)
else:
    print("Son iguales")

try:
    # Código que puede lanzar una excepción
    resultado = 10 / 0
except ZeroDivisionError:
    # Código a ejecutar si se produce una excepción del tipo ZeroDivisionError
    print("No se puede dividir por cero.")
except ValueError:
    # Código a ejecutar si se produce una excepción del tipo ValueError
    print("Valor incorrecto.")
except:
    # Código a ejecutar si se produce cualquier tipo de excepción
    print("Se produjo una excepción.")
    
def sumar(a, b):
  suma = a + b
  return suma   # Devuelve la suma de a y b

total = sumar(5, 3)  # total ahora será 8

print(total)


