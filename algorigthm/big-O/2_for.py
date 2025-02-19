#for i in range(4):
#  print(i)

""" test_arr = range(0, 31, 5)

for item in test_arr:
  print(item)

for caracter in 'Marcus':
  print(caracter)
 """

diccionario = {"aas": 12, "bss": 33}

# solo llave
for llave in diccionario:
  print(llave)

# llave y valor
for a, b in diccionario.items():
  print(a, b)

# solo el valor
for valor in diccionario.values():
  print(valor)