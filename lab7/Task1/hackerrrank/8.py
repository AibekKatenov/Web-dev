def second_lowest_grade(students):

    sorted_students = sorted(students, key=lambda x: x[1])
    
    second_lowest_grade = sorted(set([x[1] for x in students]))[1]
    
    second_lowest_grade_students = [s[0] for s in sorted_students if s[1] == second_lowest_grade]
    
    for student in sorted(second_lowest_grade_students):
        print(student)
