
create table user(
    id varchar(50) primary key,
    username varchar(30) UNIQUE,
    email varchar(60) Unique not null,
    password varchar(30) not null
    );
