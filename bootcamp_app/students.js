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
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`
  )
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error("query error", err.stack));

pool
  .query(
    `
SELECT students.id, students.name, cohorts.id
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${arg}'
LIMIT 2;
`
  )
  .then(res => {
    res.rows.forEach(user => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${arg} cohort`
      );
    });
  });
