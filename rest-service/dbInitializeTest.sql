INSERT INTO `tbl_user` (`id`, `created_at`, `modified_at`, `email`, `first_name`, `last_name`, `password`, `role`) VALUES
(1, '2021-09-11 20:22:51', '2021-09-11 20:22:51', 'connor.daley@test.com', 'Connor', 'Daley', 'connor123', 'Employee'),
(2, '2021-09-11 20:24:41', '2021-09-11 20:24:41', 'sage.geoff@test.com', 'Sage', 'Geoff', 'sage123', 'Employee'),
(3, '2021-09-11 20:25:38', '2021-09-11 20:25:38', 'sharyl.monica@test.com', 'Sharyl', 'Monica', 'sharyl123', 'Admin');

INSERT INTO `tbl_office` (`id`, `created_at`, `modified_at`, `number`) VALUES
(1, '2021-09-11 20:38:43', '2021-09-11 20:38:43', 10),
(2, '2021-09-11 20:38:59', '2021-09-11 20:38:59', 20),
(3, '2021-09-11 20:39:04', '2021-09-11 20:39:04', 30),
(4, '2021-09-11 20:39:12', '2021-09-11 20:39:12', 40);

INSERT INTO `tbl_desk` (`id`, `created_at`, `modified_at`, `number`, `officeid`) VALUES
(1, '2021-09-11 15:51:10', '2021-09-11 15:51:10', 11, 1),
(2, '2021-09-11 15:51:10', '2021-09-11 15:51:10', 12, 1),
(3, '2021-09-11 22:03:30', '2021-09-11 22:03:30', 21, 2);