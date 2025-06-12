package Student;

public class Main {
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        Controller controller = new Controller(manager);

        // Add test data
        controller.addStudent(new Student("Ali", 2.5));
        controller.addStudent(new Student("Sara", 3.6));
        controller.addStudent(new Student("Hassan", 1.9));
        controller.addStudent(new Student("Zara", 3.2));
        controller.addStudent(new Student("Ahmed", 2.8));

        View view = new View(controller);
        controller.setView(view);
    }
}



