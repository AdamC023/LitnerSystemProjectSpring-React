package com.crawford.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.crawford.model.Module;

import com.crawford.repository.ModuleRepository;

@RestController
@RequestMapping("modules")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from your React frontend
public class ModuleController{

    @Autowired
    private ModuleRepository moduleRepository;

    public ModuleController(ModuleRepository moduleRepository) {
        this.moduleRepository = moduleRepository;
    }

    @PostMapping
    ("/addModule")
    public Module addModule(@RequestBody Module module) {
        return moduleRepository.save(module);
    }
    
    @GetMapping
    ("/getModules")
    public Iterable<Module> getModules(){
        return moduleRepository.findAll();}
}


