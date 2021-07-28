INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Developer", 80000, 1001),
       ("Salesperson", 60000, 1002),
       ("Accountant", 75000, 1003),
       ("Customer Liason", 50000, 1004),
       ("Engineering Manager", 120000, 1001),
       ("Sales Manager", 100000, 1002),
       ("Finance Manager", 110000, 1003),
       ("Customer Services Manager", 90000, 1004);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Casey", "Rowlands", 8, NULL),
("Mike", "Miller", 7, NULL),
("Grace", "Reichard", 6, NULL),
("Felix", "Ramos", 5, NULL),
("Tom", "Hartman", 3, 2),
("Madeline", "Malek", 3, 2),
("Jessie", "Snodgrass", 1, 4),
("Meghan", "Artero", 1, 4),
("Amanda", "Angeline", 4, 1),
("Corey", "Belletiere", 4, 1),
("Brent", "Maron", 2, 3),
("Andrew", "Tyson", 2, 3);