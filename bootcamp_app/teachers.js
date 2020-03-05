const { Pool } = require("pg");
const arg= process.argv[2];
const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx"
});

pool
  .query(
    `
    SELECT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances
    FROM assistance_requests
    JOIN teachers ON teachers.id = teacher_id
    JOIN students ON students.id = student_id
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name = '${arg}'
    GROUP BY teacher, cohort
    ORDER BY teacher
`
  )
  .then(res => {
    res.rows.forEach(user => {
      console.log(
        `${arg}: ${user.teacher}`
      );
    });
  });
