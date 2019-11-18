create database AlohaDB;
use AlohaDB;

create table users(
                      id integer not null primary key auto_increment,
                      name varchar(30) not null,
                      last_name varchar(30) not null,
                      password varchar(50) not null,
                      email varchar(255) not null,
                       phone_number varchar(255) not null ,
                       birthdate date,
                        user_photo varchar(2048),
                       is_host boolean not null,
                      updated_at timestamp default CURRENT_TIMESTAMP ,
                      created_at timestamp default CURRENT_TIMESTAMP

);

create table properties(
                           id integer not null primary key auto_increment,
                           name_header varchar(255) not null,
                           country varchar(100) not null,
                           city varchar(100) not null,
                           address varchar(255),
                           description varchar(255),
                           additional_info varchar(255),
                           rating float,
                           user_id integer not null,
                           constraint property_id__user_id_fk foreign key (user_id) references users(id)
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

