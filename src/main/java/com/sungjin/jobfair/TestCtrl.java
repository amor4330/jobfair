package com.sungjin.jobfair;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestCtrl {

    @GetMapping("/jobfair/hello")
    public String hello() {
        return "hello";
    }
}
