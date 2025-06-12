package Student;

import java.util.List;

public class Controller {
    private StudentManager studentManager;
    private View view;

    public Controller(StudentManager studentManager) {
        this.studentManager = studentManager;
    }

    public void setView(View view) {
        this.view = view;
    }

    public void addStudent(Student student) {
        studentManager.setData(student);
    }

    public void handleShowAllStudents() {
        List<Student> all = studentManager.getAllStudents();
        view.showStudentList("All Students", all);
    }

    public void handleShowGoodStudents() {
        List<Student> good = studentManager.getGoodStudents();
        view.showStudentList("Good Students", good);
    }

    public void handleShowBadStudents() {
        List<Student> bad = studentManager.getBadStudents();
        view.showStudentList("Bad Students", bad);
    }
}


