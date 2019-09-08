package com.example.task.manager.repository;

import com.example.task.manager.model.response.TaskResponse;
import com.example.task.manager.repository.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TaskManagerRepo extends JpaRepository<Task, Long>{

    @Query("SELECT t from task t")
    List<TaskResponse> getAllTasks();
}
