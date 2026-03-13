while True:
  line = input(">>> ")
  if line[0] == "#":
    continue
  elif line == "done":
    break
  print(line)

print("you're done with the program!")

""" la palabra continue nos retorna al principio del blocke de codigo.
En este caso si el primer caracter de el input es #, 
este se saltara el bloque de codigo y volvera al principio en la linea 2,
finalmente si el input es igual a done se sale del loop infinito.
 """