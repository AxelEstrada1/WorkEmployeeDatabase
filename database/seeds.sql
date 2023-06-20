INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Marketing'),
  ('Engineering'),
  ('Finance'),
  ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Manager', 120000.00, 1),
('Sales Representative', 60000.00, 1),
('Marketing Manager', 130000.00, 2),
('Marketing Coordinator', 50000.00, 2),
('Software Engineer', 140000.00, 3),
('QA Engineer', 100000.00, 3),
('Financial Analyst', 110000.00, 4),
('Accountant', 80000.00, 4),
('HR Manager', 150000.00, 5),
('HR Coordinator', 60000.00, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Roy', 'Steward', 1, NULL),
(2, 'Regina', 'Jones', 2, 1),
(3, 'Benjamin', 'Do', 3, NULL),
(4, 'Daniel', 'McGree', 4, 3),
(5, 'Alejandro', 'Lopez', 5, NULL),
(6, 'Margarita', 'Hernandez', 6, 5),
(7, 'Shauna', 'Dagulo', 7, NULL),
(8, 'Bryan', 'Gudino', 8, 7),
(9, 'Erasto', 'Reyes', 9, NULL),
(10, 'Kalicia', 'Evans', 10, 9);