function validateLogin() {
    // Get form values
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;

    // Simple validation
    if (studentId && studentName && branch && semester) {
        // Save the student information in localStorage (optional)
        localStorage.setItem('studentId', studentId);
        localStorage.setItem('studentName', studentName);
        localStorage.setItem('branch', branch);
        localStorage.setItem('semester', semester);

        // Redirect to index.html after successful login
        window.location.href = 'ind.html';
        return false; // Prevent the form from submitting normally
    }

    // Alert in case of missing data (additional validation)
    alert("Please fill all fields correctly.");
    return false;
}
