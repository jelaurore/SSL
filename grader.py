import sys

# Python Grader #

class Grader:
    name = ""
    assignment = ""
    def display_grade(self):
      self.get_name()
      self.get_assignment()
      self.get_score()
    def get_name(self):
      n = raw_input("what is the student's name: ? ")
      self.name = n
      
    def get_assignment(self):
      a = raw_input("what is the assignment's name: ? ")
      self.assignment = a

    def get_score(self):
      sc = int(raw_input("Enter student's score: ? "))
      grd = self.calculate_grade(sc)
      stuff_in_string = "Student Name: {}, Assignment: {}, score: {}, Grade: {}".format(self.name, self.assignment, sc, grd)
      print(stuff_in_string)
    
    def calculate_grade(self, s):
      try:
          if(s >= 90 and s <= 100):
              return 'A'
          elif(s >= 80 and s <= 89):
              return 'B'
          elif(s >= 70 and s <= 79):
              return 'C'
          elif(s >= 60 and s <= 69):
              return 'D'
          elif(s < 60):
              return 'F'
          else:
              raise ValueError("Invalid score")
      except ValueError:
          print("Invalid score")

p1 = Grader()
p1.display_grade()