package Student;

public class Student {
    private String name;
    private double cgpa;

    public Student(String name, double cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }

    public double getCgpa() {
        return cgpa;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return name + " (CGPA: " + cgpa + ")";
    }
}

