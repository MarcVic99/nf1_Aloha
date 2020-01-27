create database AlohaDB;
use AlohaDB;

create table users(
                      id integer not null primary key auto_increment,
                      name varchar(30) not null,
                      last_name varchar(30) not null,
                      password varchar(255) not null,
                      email varchar(255) not null,
                      updated_at timestamp default CURRENT_TIMESTAMP ,
                      created_at timestamp default CURRENT_TIMESTAMP,


);
alter table users add name varchar(30) not null;
alter table users add password varchar(255) not null;
alter table users add birth_date date null;
alter table users add   is_host    tinyint(1)                          null;
alter table users add  about      varchar(255)                        null;
alter table users add  job        varchar(255)                        null;
alter table users add languages  varchar(255)                        null;
alter table users add `where`    varchar(255)                        null;


alter table users add is_host boolean not null;
alter table users add about varchar(255);
alter table users add where varchar (255);
alter table users add job varchar (255);
alter table users add languages varchar (255);


create table properties(
                        id integer not null primary key auto_increment,
                        nameHeader varchar (255) not null,
                        rooms integer,
                        beds integer,
                        toilets integer,
                        country varchar (100) not null,
                        city varchar (100) not null,
                        address varchar (255),
                        description varchar (255),
                        price float,
                        additional_info varchar (255),
                        title varchar(255),
                        rating float,
                        updated_at timestamp default CURRENT_TIMESTAMP,
                        created_at timestamp default CURRENT_TIMESTAMP,
                        user_id integer not null,
                        category_id integer not null,
                        CONSTRAINT fk_property_user FOREIGN KEY (user_id) REFERENCES users(id)

      );

create table photos(
                       id integer not null primary key auto_increment,
                       property_id int not null,
                       photo varchar(2048),
                       constraint photo_id__property_id_fk foreign key (property_id) references properties(id)

);

create table comments(
                         id integer not null primary key auto_increment,
                         property_id int not null,
                         comment varchar(255),
                         constraint comment_id__property_id_fk foreign key (property_id) references properties(id)

);

create table reviews(
                        id integer not null primary key auto_increment,
                        user_id int not null,
                        review varchar(255),
                        constraint review_id__user_id_fk foreign key (user_id) references users(id)
);

