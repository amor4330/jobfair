<template>
  <div class="mainBox">
    <div class="UserBox">
      <div class="leftBox">
        <a href="#">개인회원</a>
      </div>
      <div class="rightBox" @click="OpenForm($event)">
        <a href="###">기업회원</a>
      </div>
      <p>
        <strong :style="{color:'red'}">*</strong>는 필수입력 정보란입니다.
      </p>
      <div>
        <form @submit="checkSubmit($event)" action="/jobfair/uJoin" method="post">
          <p>*는 필수입력 정보란입니다.</p>
          <div>
            <input type="text" ref="nameBox" name="user_name" placeholder="이름(실명)" v-model = "username"/>
          </div>
          <div>
            <input type="text" ref="idBox" name="user_id" placeholder="아이디" @keyup="idBoxNullCheck" @keydown.enter="sameIdCheck" v-model = "id"/>
            <button type="button" @click="sameIdCheck" :disabled="idBoxCheck">중복확인</button>
            <span :hidden="msg === 'id 중복확인을 먼저 해주세요'">{{msg}}</span>
          </div>
          <div>
            <input type="password" ref="pwBox" name="user_pw" autoComplete="off" placeholder="비밀번호(8~20자의 영문,숫자,특수기호)" v-model = "password"/>
          </div>
          <div>
            <input type="email" ref="emailBox" name="user_email" placeholder="이메일" v-model = "email"/>
          </div>
          <div>
            <input type="text" ref="phNumBox" name="user_phone" placeholder="휴대폰번호 -없이" v-model ="phoneNum"/>
            <button>인증번호 전송</button>
          </div>
          <div>
            <input type="text" ref="certifNumBox" name="" placeholder="인증번호 입력" v-model ="certification_num">
            <button>확인</button>
            <button>재전송</button>
          </div>
          <div>
            <div>
              필수동의 항목 및 개인정보 수집 및 이용동의
              <input type="checkbox" id="agree1">
            </div>
            <div>
              개인정보 동의항목란
              <input type="checkbox" id="agree2">
            </div>

            <input type="submit" value="가입하기">
          </div>
        </form>
      </div>
    </div>

    <div class="CompanyBox display_hidden">
      <div>
        <div class="leftBox" @click="OpenForm($event)">
          <a href="#">개인회원</a>
        </div>
        <div class="rightBox">
          <a href="#">기업회원</a>
        </div>
        <p>
          <strong v-bind:style="{color:'red'}">*</strong>는 필수입력 정보란입니다.
        </p>
        <form class="MemberInfo">
          <div>
            <input type="text" placeholder="기업명"/>
          </div>
          <div>
            <input type="tel" placeholder="기업 전화번호"/>
          </div>
          <div>
            <input type="email" placeholder="기업 이메일"/>
          </div>
          <div>
            <input type="text" placeholder="기업 주소"/>
          </div>
          <div>
            <input type="text" placeholder="업종"/>
          </div>
          <div>
            <input type="text" placeholder="대표자"/>
          </div>
          <div>
            <input type="text" placeholder="사업자등록번호"/>
          </div>
          <div>
            <input type="date" placeholder="설립일">
          </div>
          <div>
            <div>
              필수동의 항목 및 개인정보 수집 및 이용동의
              <input type="checkbox" value="checkedBox" v-model="checkbox">
            </div>
            <div>
              개인정보 동의항목란
              <input type="checkbox" value="checkedBox" v-model="checkbox">
            </div>

            <input type="submit" value="가입하기" @click="joinHandler(e)">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '@/router'

export default {
  name: 'uJoinView',
  data: function () {
    return {
      username: '',
      id: '',
      password: '',
      email: '',
      phoneNum: '',
      certification_num: '',
      msg: 'id 중복확인을 먼저 해주세요', // id 중복확인 하고나서 화면에 뿌려줄 것.
      checkedBox : [],
      errorMsg : [],
      idBoxCheck : true, //id 값이 있는지 여부에 따라 id 중복확인 버튼 활성화 조절하기 위한 변수
      idPassCheck: false, //id 중복확인 통과했는지 여부 체크 , 통과하면 true 로 바꿔줌.
      phCertifPassCheck: false, //핸드폰인증 확인했는지 여부 체크, 통과했으면 true
      passwordRule: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/  //비밀번호 유효성 검사 정규표현식
    }
  },
  methods: {
    // id값이 공백이 아닐때 중복확인 버튼 활성화 , 공백이면 다시 비활성화
    idBoxNullCheck () {
      if(this.id !== ''){this.idBoxCheck = false}
      else if(this.id === ''){ this.idBoxCheck = true}
    },
    // 아이디 중복확인 메서드
    sameIdCheck () {
      var self = this // axios 안에서 this 키워드 동작 제대로 안되서 여기서 변수로 선언해줌
      this.$axios.post('/jobfair/checkSameId', { user_id: this.id })
        .then(function (response) {
          console.log(response)
          self.idPassCheck = response.data
          if(self.idPassCheck === true){
            self.msg = '사용가능한 id 입니다'
          } else {
            self.msg = '이미 사용하고 있는 id 입니다'
          }
          alert(self.msg)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 회원가입 처리 메서드 (필수 체크 항목 체크했는지 확인)
    checkSubmit(e) {
      //이름 입력했는지 체크
      if(this.username === ''){
        this.$refs.nameBox.focus()
        e.preventDefault()
        return
      }
      //아이디 중복확인 통과했는지 체크
      if(this.idPassCheck === false){
        alert(this.msg)
        this.$refs.idBox.focus()
        e.preventDefault()
        return
      }
      //password 입력여부 체크
      if(this.password === ''){
        this.$refs.pwBox.focus()
        e.preventDefault()
        return
      }
      // password 유효성 검사 -> 8~20자의 영문,숫자,특수기호 포함 체크
      if( !this.passwordRule.test(this.password.trim()) ){
        this.$refs.pwBox.focus()
        alert('비밀번호는 영문,숫자,특수기호 포함 8~20자 이내어야 합니다.')
        e.preventDefault()
        return
      }
      //email 입력여부 체크
      if(this.email === ''){
        this.$refs.emailBox.focus()
        e.preventDefault()
        return
      }
      //휴대폰 번호 입력 체크
      if(this.phoneNum === ''){
        this.$refs.phNumBox.focus()
        e.preventDefault()
        return
      }
      //휴대폰 인증 통과여부 확인
      // if(this.phCertifPassCheck === false){
      //   this.$refs.certifNumBox.focus()
      //   alert('휴대폰 인증을 해주세요')
      //   e.preventDefault()
      //   return
      // }
      //필수동의 체크여부 확인
      if (document.getElementById('agree1').checked === false) {
        alert("필수 항목을 확인해 주세요.")
        this.errorMsg.push({ msg : '필수 항목입니다.' }) //에러메시지 담기
        console.log(this.errorMsg)
        e.preventDefault()
      }
    }
  }
}

</script>

<style scoped>
* {margin: 0; padding: 0}
a {text-decoration: none}
button {cursor: pointer}

.mainBox {
  width: 100%;
  border: 3px solid;
}
.leftBox a {
  font-size: large;
  color: black;
  text-align: center;
}
.leftBox {
  width: 50%;
  height: 50px;
  float: left;
  box-sizing: border-box;
  background-color: rgb(95,75,229);
  padding: 10px 10px;
}
.leftBox:hover{
  background-color: rgb(95,75,229,0.5);
}

.rightBox {
  width: 50%;
  height: 50px;
  float: right;
  box-sizing: border-box;
  background-color: rgb(95,75,229);
  padding: 10px 10px;
}
.rightBox:hover{
  background-color: rgb(95,75,229,0.5);
}
.rightBox a {
  font-size: large;
  color: black;
  text-align: center;
}

.UserBox {
  position: relative;
}
.CompanyBox {
  width: 100%;
  position: absolute;
  top: 120px;
  border: 3px solid skyblue;
  margin: 0 auto;
}

.MemberInfo {
  display: flex;
  flex-direction: column;
}
.MemberInfo div {
  margin-top: 8px;
  margin-bottom: 8px;
}
.MemberInfo input {
  display: block;
  width: 90%;
  height: 60px;
}
.PhoneRegist {
  position: relative;
}
.PhoneYN {
  position: relative;
}
#leftBtn {
  position: absolute;
  float: left;
  top: 0;
  right: 130px;
  width: 150px;
  height: 64px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  text-align: center;
}
#rightBtn {
  position: absolute;
  float: right;
  top: 0;
  right: 290px;
  width: 150px;
  height: 64px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  text-align: center;
}
#PhoneBtn {
  display: block;
  position: absolute;
  top: 0;
  right: 130px;
  width: 150px;
  height: 64px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  text-align: center;
}

.display_hidden{
  display: none;
}
</style>
