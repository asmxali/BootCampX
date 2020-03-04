SELECT teachers.name as teacher, students.name as student, assignments.name as assignment, (completed_at-started_at) as duration
FROM assistance_requests
-- in order to get teachers NAME, we have to pull it from the assignments table
JOIN teachers ON teachers.id = teacher_id
-- in order to get student NAME, we have to pull it from the assignments table
JOIN students ON students.id = student_id
-- in order to get assignment NAME, we have to pull it from the assignments table
JOIN assignments ON assignments.id = assignment_id 
ORDER BY duration;
