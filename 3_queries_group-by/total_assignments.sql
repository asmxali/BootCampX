SELECT cohorts.name as cohort_name, count(assignment_submissions) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER by total_submissions DESC;