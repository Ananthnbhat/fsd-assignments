package com.example.task.manager.repository.model;

import org.hibernate.annotations.ValueGenerationType;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity(name = "parent_task")
public class ParentTask implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "task")
    private String parentTask;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getParentTask() {
        return parentTask;
    }

    public void setParentTask(String parentTask) {
        this.parentTask = parentTask;
    }

}
