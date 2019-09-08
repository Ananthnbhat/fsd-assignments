package com.example.task.manager.repository;

import com.example.task.manager.repository.model.ParentTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ParentTaskManagerRepo extends JpaRepository<ParentTask, Long> {

    @Query("SELECT t from parent_task t WHERE t.parentTask = ?1")
    ParentTask getByTask(String parentTask);
}
