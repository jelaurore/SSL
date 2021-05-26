class Grader
    attr_accessor :student_name, :assignment_name, :score
    def initialize
        @student_name = "";
        @score = 0;
        @assignment_name = "";
    end

    def get_grade
        get_name
        get_assignment
        get_score
    end

    def get_name
        p "what is the student's name: ?"
        name = gets.chomp
        student_name = name
    end

    def get_assignment
        p "what is the assignment's name: ?"
        assignment = gets.chomp
        assignment_name = assignment
    end

    def get_score
        begin
            p "Enter student's score: ?"
            sc = gets.chomp.to_i
            score = sc
            grd = calculate_grade(sc)
            puts "Student Name: #{student_name}, Assignment: #{assignment_name}, score: #{sc}, Grade: #{grd} "
        rescue Exception => e   # storing the exception object in e
            puts e.message            # output error message
        end
    end


    private 


    def calculate_grade(s)
        begin
            # code at risk of failing here
            if(s >= 90 && s <= 100)
            
                return 'A';
            
            elsif(s >= 80 && s <= 89)
                return 'B';
            
            elsif(s >= 70 && s <= 79)
                return 'C';
            
            elsif(s >= 60 && s <= 69)
                return 'D';
            
            elsif(s < 60)
                return 'F';
            
            else
                raise Exception.new("Invalid score");
            end
        rescue Exception => e   # storing the exception object in e
            puts e.message            # output error message
        end
    end
end

g = Grader.new()
g.get_grade