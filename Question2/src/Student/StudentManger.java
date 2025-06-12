package Student;

import java.util.ArrayList;
import java.util.List;

 class StudentManager {
    private List<Student> students = new ArrayList<>();

    public void setData(Student student) {
        students.add(student);
    }

    public List<Student> getAllStudents() {
        return students;
    }

    public List<Student> getGoodStudents() {
        List<Student> good = new ArrayList<>();
        for (Student s : students) {
            if (s.getCgpa() >= 3.0) {
                good.add(s);
            }
        }
        return good;
    }

    public List<Student> getBadStudents() {
        List<Student> bad = new ArrayList<>();
        for (Student s : students) {
            if (s.getCgpa() < 3.0) {
                bad.add(s);
            }
        }
        return bad;
    }
}



