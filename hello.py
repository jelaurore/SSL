import sys

name = raw_input("what is your name: ? ")

print(name)
age = input("Enter your age please?")

if int (age) > 60:
  print("You are old")
else: 
  print("You still young")