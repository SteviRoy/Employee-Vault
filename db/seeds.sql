USE vault_db;

INSERT INTO department (name) VALUES
  ('Sales'),
  ('Engineering'),
  ('Marketing'),
  ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
  ('Sales Lead', 100000.00, 1),
  ('Salesperson', 50000.00, 1),
  ('Lead Engineer', 150000.00, 2),
  ('Software Engineer', 120000.00, 2),
  ('Marketing Manager', 100000.00, 3),
  ('Marketing Coordinator', 50000.00, 3),
  ('HR Manager', 90000.00, 4),
  ('HR Coordinator', 50000.00, 4);

  