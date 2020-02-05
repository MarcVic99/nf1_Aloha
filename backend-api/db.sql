create database AlohaDB;
create table categories
(
    id         int(255) auto_increment
        primary key,
    name       varchar(100) not null,
    created_at datetime     null,
    updated_at datetime     null,
    constraint categories_name_uindex
        unique (name)
);

create table photos
(
    id    int auto_increment
        primary key,
    photo varchar(2048) null
);

create table users
(
    id           int auto_increment
        primary key,
    name         varchar(30)                         not null,
    last_name    varchar(30)                         not null,
    password     varchar(255)                        not null,
    email        varchar(255)                        not null,
    updated_at   timestamp default CURRENT_TIMESTAMP not null,
    created_at   timestamp default CURRENT_TIMESTAMP not null,
    confirm_pass varchar(255)                        null,
    about        text                                null,
    `where`      varchar(100)                        null,
    languages    varchar(100)                        null,
    job          varchar(100)                        null
);

create table properties
(
    id              int auto_increment
        primary key,
    nameHeader      varchar(255) not null,
    country         varchar(100) not null,
    city            varchar(100) not null,
    address         varchar(255) null,
    description     varchar(255) null,
    additional_info varchar(255) null,
    rating          float        null,
    user_id         int          null,
    category_id     int          null,
    created_at      datetime     null,
    updated_at      datetime     null,
    image           varchar(300) null,
    price           float        null,
    rooms           int          null,
    toilets         int          null,
    beds            int          null,
    title           varchar(255) null,
    constraint fk_property_category
        foreign key (category_id) references categories (id),
    constraint fk_property_user
        foreign key (user_id) references users (id)
);

create table bookings
(
    id          int(255) auto_increment
        primary key,
    user_id     int(255)     not null,
    property_id int(255)     not null,
    status      varchar(255) null,
    total       int(255)     null,
    checkin     datetime     null,
    checkout    datetime     null,
    created_at  datetime     null,
    updated_at  datetime     null,
    beds        int          null,
    constraint fk_pk_bookings_property
        foreign key (property_id) references properties (id),
    constraint fk_pk_bookings_user
        foreign key (user_id) references users (id)
);

create table comments
(
    id          int(255) auto_increment
        primary key,
    user_id     int(255) not null,
    property_id int(255) not null,
    content     text     not null,
    created_at  datetime null,
    updated_at  datetime null,
    constraint fk_pk_comments_property
        foreign key (property_id) references properties (id),
    constraint fk_pk_comments_user
        foreign key (user_id) references users (id)
);

create table maps
(
    id          int(255) auto_increment
        primary key,
    user_id     int(255)     not null,
    property_id int(255)     not null,
    description text         not null,
    title       varchar(255) not null,
    address     varchar(255) not null,
    radius      int(255)     not null,
    latitude    varchar(255) not null,
    longitude   varchar(255) not null,
    created_at  datetime     null,
    updated_at  datetime     null,
    constraint fk_pk_maps_property
        foreign key (property_id) references properties (id),
    constraint fk_pk_maps_user
        foreign key (user_id) references users (id)
);

create table messages
(
    id          int(255) auto_increment
        primary key,
    user_id     int(255) not null,
    bookings_id int(255) not null,
    content     text     not null,
    created_at  datetime null,
    updated_at  datetime null,
    constraint fk_pk_messages_bookings
        foreign key (bookings_id) references bookings (id),
    constraint fk_pk_messages_user
        foreign key (user_id) references users (id)
);

create table reviews
(
    id      int auto_increment
        primary key,
    user_id int          not null,
    review  varchar(255) null,
    constraint review_id__user_id_fk
        foreign key (user_id) references users (id)
);

