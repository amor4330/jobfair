package com.sungjin.jobfair.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class HomeController {

    @PostMapping(value = "/login")
    public String login(@RequestBody Map<String,String> param){

        String id = param.get("id");
        String pw = param.get("pw");
        String auth = param.get("auth");

        System.out.println("springboot실행");
        System.out.println("id : " + id);
        System.out.println("pw : " + pw);
        System.out.println("auth : " + auth);

        if(id.equals("aaa123")&& pw.equals("aaa123")&&auth.equals("1")){
            return "사용자";
        }
        if(id.equals("bbb123")&& pw.equals("bbb123")&&auth.equals("2")){
            return "기업";
        }
            if(id.equals("admin")&&pw.equals("admin")){
                return "관리자";
            }else{
            return "비밀번호를 확인하세요";
        }
    }


}
