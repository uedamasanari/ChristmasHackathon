create table if not exists santa (
  `id` bigint(11) not null auto_increment,
  `email_address` varchar(191) not null,
  `password` varchar(191) not null,
  `created_at` timestamp not null default current_timestamp,
  `updated_at` timestamp not null default current_timestamp on update current_timestamp,
  primary key(id)
);
insert into santa values (1, "santa@email.com", "password", current_timestamp, current_timestamp);

create table if not exists children (
  `id` bigint(11) not null auto_increment,
  `name` varchar(191) not null,
  `santa_id` bigint(11) not null,
  `created_at` timestamp not null default current_timestamp,
  `updated_at` timestamp not null default current_timestamp on update current_timestamp,
  primary key(id),
  foreign key (santa_id) references santa(id) on delete cascade
);
insert into children values (1, "child", 1, current_timestamp, current_timestamp);

create table if not exists messages (
  `id` bigint(11) not null auto_increment,
  `present` varchar(191) not null,
  `message` varchar(191) not null,
  `child_id` bigint(11) not null,
  `created_at` timestamp not null default current_timestamp,
  `updated_at` timestamp not null default current_timestamp on update current_timestamp,
  primary key(id),
  foreign key (child_id) references children(id) on delete cascade
);
insert into messages values (1, "ニンテンドースイッチ", "スプラトゥーンがしたいです", 1, current_timestamp, current_timestamp);
