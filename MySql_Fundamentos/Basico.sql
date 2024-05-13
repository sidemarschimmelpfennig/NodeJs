
# Tipos de Dados 

Blob  : Armazenamento de conteudo
Varchar : Texto com valor variado
Char : Caractere
Int : Numeros inteiros
Float : Numeros com ponto flutuante
Date  : Dados de data

# Criar banco de dados

CREATE DATABASE teste
USE teste
SHOW TABLES

# Criar Tabela
CREATE TABLE user(
    id INT PRIMARY KEY ,
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

# inserir linha no banco de dados

INSERT INTO user( nome, email, idade)VALUES(
    "Sidemar Junior",
    "sidemar@outlook.com",
    22
);

# selecione tudo

SELECT * FROM user;

# alterar campo da tabela 

ALTER TABLE user MODIFY id INT AUTO_INCREMENT;

# clausula quando

SELECT * FROM user WHERE idade=22;

# clausula Delete para registro

DELETE FROM user where id=2; 

#  DELETAR TABELA

DROP TABLE user;

