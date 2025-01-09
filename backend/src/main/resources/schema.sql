DROP TABLE IF EXISTS card;

CREATE TABLE card(
                     id INT PRIMARY KEY,
                     question VARCHAR(30),
                     answer VARCHAR(30)
);

INSERT INTO card(id,question,answer)
VALUES(0,'1','2');