package com.sungjin.jobfair.command;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserVO {
    public String user_id;
    public String user_pw;
    public String mg_auth;
    public String user_name;
    public String user_rrn;
    public String user_email;
    public String user_phone;
    public Timestamp user_regDate;
    public String user_gender;
    public String user_address;
    public String com_id;
}
