def encontrar_el_mas_chiquito(arr):
  mas_chiquito = arr[0]
  smalles_index = 0
  for i in range(1, len(arr)):
    if arr[i] < mas_chiquito:
      mas_chiquito = arr[i]
      smalles_index = i
  return smalles_index

print(encontrar_el_mas_chiquito([5, 3, 6, 2, 10]))

def selectio_sort(arr):
  nuevo_array = []
  for i in range(len(arr)):
    mas_chico = encontrar_el_mas_chiquito(arr)
    nuevo_array.append(arr.pop(mas_chico))
  return nuevo_array


print(selectio_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

""" no es el mas rapido ni eficiente, pero es limpio y ordenado,
no recomendable para inputs grandes, notacion BIG-O = O(n^2).

Estamos iterando por cada iteracion del array, por lo que es iteracion al cuadrado.

 """