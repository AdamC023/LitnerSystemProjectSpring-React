DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS module;

CREATE TABLE module (
                        code VARCHAR(30) PRIMARY KEY,
                        name VARCHAR(30)

);

CREATE TABLE card (
                      id INT PRIMARY KEY,
                      question VARCHAR(30),
                      answer VARCHAR(30),
                      correct BIT,
                      code VARCHAR(30), -- Add the 'code' column to reference the module table
                      CONSTRAINT fk_module FOREIGN KEY (code) REFERENCES module(code)
);