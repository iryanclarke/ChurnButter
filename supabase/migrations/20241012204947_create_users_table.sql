
create table
users (
id bigint primary key generated always as identity,
firstName text,
lastName text,
email text,
created_at timestamptz default now()
);
