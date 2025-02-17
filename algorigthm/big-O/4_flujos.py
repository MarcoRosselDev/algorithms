# emeplo while -------------------------------
contador = 0
while contador < 10 :
  # ejecutar el bloque de codigo aqui
  print(contador)
  contador += 1

# ejemplo for in -----------------------------
arr = ['marco', 'eva', 'lushito']

for str in arr:
  print(str, len(str))

# break and continue
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(f"{n} equals {x} * {n//x}")
            break

# 4 equals 2 * 2
# 6 equals 2 * 3
# 8 equals 2 * 4
# 9 equals 3 * 3