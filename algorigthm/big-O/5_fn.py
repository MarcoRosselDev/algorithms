def whats_on_the_telly(penguin=None):
    if penguin is None:
        penguin = []
    penguin.append("property of the zoo")
    return penguin

def test(a=0, b=0):
  return a * b

print(test(5, 5))
print(test(4, 3))