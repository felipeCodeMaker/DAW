mi_diccionario = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
    "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
    "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
    "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
    "y": "-.--", "z": "--..", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..",
    "9": "----.", "0": "-----", " ": "\n"
}

def traductor():
    cadena = input("Introduzca la frase a traducir: ")
    resultado = []

    for caracter in cadena:
        letra = caracter.lower()
        if letra in mi_diccionario:
            codigo_morse = mi_diccionario[letra]
            resultado.append(codigo_morse)

    # Unir todos los códigos con espacios
    traduccion = " ".join(resultado)
    print("Texto original:", cadena)
    print("Traducción Morse:","\n", traduccion)

traductor()