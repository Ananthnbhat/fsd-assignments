package com.example.task.manager.service;

import com.example.task.manager.model.TaskModel;
import com.example.task.manager.model.response.TaskResponse;
import com.example.task.manager.repository.ParentTaskManagerRepo;
import com.example.task.manager.repository.TaskManagerRepo;
import com.example.task.manager.repository.model.ParentTask;
import com.example.task.manager.repository.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    TaskManagerRepo taskManagerRepo;
    @Autowired
    ParentTaskManagerRepo parentTaskManagerRepo;

    public ResponseEntity<List<TaskResponse>> getTasks(){
        List<Task> tasks = new ArrayList<>();
        List<TaskResponse> allTasks = new ArrayList<>();
//        taskManagerRepo.findAll().forEach(tasks::add);
        tasks = taskManagerRepo.findAll();
        for(Task task : tasks) {
            TaskResponse taskResponse = getTaskResponseFromTask(task);
            if(task.getParentId() != null)
                taskResponse.setParentTask(parentTaskManagerRepo.findById(task.getParentId()).get().getParentTask());
            allTasks.add(taskResponse);
        };
        return new ResponseEntity<>(allTasks, HttpStatus.OK);
    }

    public ResponseEntity<List<TaskResponse>> addTask(TaskModel taskModel) {

        Task task = getTaskFromTaskModel(taskModel);
        String parentTask = taskModel.getParentTask();
        Long parentId = parentTask.isEmpty() ? null : setParentTask(parentTask);
        task.setParentId(parentId);
        taskManagerRepo.save(task);
        return getTasks();
    }


    public ResponseEntity<List<TaskResponse>> updateTask(TaskModel taskModel) {

        Task task = getTaskFromTaskModel(taskModel);
        String parentTask = taskModel.getParentTask();
        Long parentId = parentTask.isEmpty() ? null : setParentTask(parentTask);
        task.setParentId(parentId);
        task.setTaskId(taskModel.getTaskId());
        taskManagerRepo.save(task);
        return getTasks();
    }

    public ResponseEntity<List<TaskResponse>> markAsCompleted(Long id) {

        Task task = taskManagerRepo.getOne(id);
        task.setCompleted(true);
        taskManagerRepo.save(task);
        return getTasks();
    }

    private Task getTaskFromTaskModel(TaskModel taskModel) {

        Task task = new Task();
        task.setTask(taskModel.getTask());
        task.setPriority(taskModel.getPriority());
        task.setStartDate(taskModel.getStartDate());
        task.setEndDate(taskModel.getEndDate());
        return task;
    }

    private TaskResponse getTaskResponseFromTask(Task task) {

        TaskResponse taskResponse = new TaskResponse();
        taskResponse.setTask(task.getTask());
        taskResponse.setTaskId(task.getTaskId());
        taskResponse.setPriority(task.getPriority());
        taskResponse.setParentTaskId(task.getParentId());
        taskResponse.setStartDate(task.getStartDate());
        taskResponse.setEndDate(task.getEndDate());
        taskResponse.setCompleted(task.isCompleted());
        return taskResponse;
    }

    private Long setParentTask(String parentTask) {
        ParentTask parent = parentTaskManagerRepo.getByTask(parentTask);
        if(parent == null) {
            parent = new ParentTask();
            parent.setParentTask(parentTask);
            parent = parentTaskManagerRepo.save(parent);
        }
        return parent.getParentId();
    }
}
