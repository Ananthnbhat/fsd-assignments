INSERT INTO `task_manager`.`parent_task` (`task`) VALUES ('parent task1');
INSERT INTO `task_manager`.`parent_task` (`task`) VALUES ('parent task2');
INSERT INTO `task_manager`.`task` (`completed`, `end_date`, `parent_id`, `priority`, `start_date`, `task`) VALUES (false, '2018-10-20', '1', '20', '2018-10-20', 'task1');
INSERT INTO `task_manager`.`task` (`completed`, `end_date`, `parent_id`, `priority`, `start_date`, `task`) VALUES (false, '2018-10-20', '2', '10', '2018-10-20', 'task2');
INSERT INTO `task_manager`.`task` (`completed`, `end_date`, `parent_id`, `priority`, `start_date`, `task`) VALUES (false, '2018-10-20', null, '30', '2018-10-20', 'task3');
