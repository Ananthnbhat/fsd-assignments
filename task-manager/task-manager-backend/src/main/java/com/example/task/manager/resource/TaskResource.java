package com.example.task.manager.resource;

import com.example.task.manager.model.TaskModel;
import com.example.task.manager.model.response.TaskResponse;
import com.example.task.manager.repository.model.Task;
import com.example.task.manager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class TaskResource {

    @Autowired
    TaskService taskService;

    @CrossOrigin
    @RequestMapping(value = "tasks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<TaskResponse>> getTask(){

        return taskService.getTasks();
    }

    @CrossOrigin
    @PostMapping(value = "add")
    public ResponseEntity<List<TaskResponse>> addTask(@RequestBody TaskModel task){

        return taskService.addTask(task);
    }

    @CrossOrigin
    @PostMapping(value = "update")
    public ResponseEntity<List<TaskResponse>> updateTask(@RequestBody TaskModel task){

        return taskService.updateTask(task);
    }

    @CrossOrigin
    @GetMapping(value = "completed/{id}")
    public ResponseEntity<List<TaskResponse>> markCompleted(@PathVariable("id") Long id){

        return taskService.markAsCompleted(id);
    }
}
