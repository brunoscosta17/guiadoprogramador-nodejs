CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(50),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Teste 1",
    "teste1@outlook.com",
    40
);

SELECT * FROM usuarios;

DELETE FROM usuarios WHERE nome = "Teste 1";

UPDATE usuarios SET nome = "Julia Pontes", email = "juliapontes@gmail.com",  idade = 5 WHERE nome = "Teste 1";

