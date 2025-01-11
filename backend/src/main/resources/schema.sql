DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS module;

CREATE TABLE module (
                        code VARCHAR(30) PRIMARY KEY,
                        name VARCHAR(100)

);

CREATE TABLE card (
                      id INT PRIMARY KEY,
                      question VARCHAR(100),
                      answer VARCHAR(100),
                      correct BIT,
                      box INT,
                      last_answered DATE NOT NULL,
                      code VARCHAR(30), -- Add the 'code' column to reference the module table
                      CONSTRAINT fk_module FOREIGN KEY (code) REFERENCES module(code)
);

INSERT INTO module (code, name) VALUES
    ('MATH101', 'Basic Math'),
    ('ENG202', 'English Literature'),
    ('CS301', 'Computer Science');