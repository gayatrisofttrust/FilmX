create table if not exists devices (
    id serial primary key,
    name varchar(255) not null,
    type varchar(100) not null,
    status varchar(50) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);