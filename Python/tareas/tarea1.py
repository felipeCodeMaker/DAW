"""
     Ejercicio 1: Tipos de datos y entrada de usuario
Pide al usuario su nombre, edad y altura en metros.
Muestra un mensaje usando f-string con los datos ingresados.
Ejemplo:
Hola Ana, tienes 25 años y mides 1.70 metros.
Muestra el tipo de dato de cada variable.
Pista rápida: usa input(), int() o float() según necesites y type() para ver el tipo.


"""

nombre = input("Indique su nombre")
edad = int(input("Indique su edad"))
altura = float(input("Indique su altura en metros"))

print("Hola ", nombre, ", tienes ", edad, " años y mides ", altura, " metros")






