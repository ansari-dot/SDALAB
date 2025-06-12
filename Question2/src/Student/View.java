package Student;

import javax.swing.*;
import java.awt.*;

 class View {
    private JFrame frame;
    private JButton showAllButton;
    private JButton goodButton;
    private JButton badButton;

    private Controller controller;

    public View(Controller controller) {
        this.controller = controller;

        frame = new JFrame("Admin Panel - Student List");
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new GridLayout(3, 1, 10, 10));

        showAllButton = new JButton("Show All Students");
        goodButton = new JButton("Show Good Students");
        badButton = new JButton("Show Bad Students");

        frame.add(showAllButton);
        frame.add(goodButton);
        frame.add(badButton);

        // 👉 Notify controller only (no data handling here)
        showAllButton.addActionListener(e -> controller.handleShowAllStudents());
        goodButton.addActionListener(e -> controller.handleShowGoodStudents());
        badButton.addActionListener(e -> controller.handleShowBadStudents());

        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    // 👉 Only displays what controller gives
    public void showStudentList(String title, java.util.List<Student> students) {
        if (students.isEmpty()) {
            JOptionPane.showMessageDialog(frame, "No students found!", title, JOptionPane.INFORMATION_MESSAGE);
            return;
        }

        StringBuilder sb = new StringBuilder();
        for (Student s : students) {
            sb.append(s.toString()).append("\n");
        }

        JTextArea textArea = new JTextArea(sb.toString());
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea);
        scrollPane.setPreferredSize(new Dimension(300, 200));

        JOptionPane.showMessageDialog(frame, scrollPane, title, JOptionPane.INFORMATION_MESSAGE);
    }
}

