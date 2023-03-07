package com.sungjin.jobfair;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JoinController {

    @PostMapping("/uJoin")
    public String uJoin(){

        return "성공";
    }
}
