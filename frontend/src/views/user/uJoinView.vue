<template>
  <div class="mainBox">
    <div class="UserBox">
      <div class="leftBox">
        <a href="#">개인회원</a>
      </div>
      <div class="rightBox" @click="OpenForm($event)">
        <a href="#">기업회원</a>
      </div>
      <p>
        <strong v-bind:style="{color:'red'}">*</strong>는 필수입력 정보란입니다.
      </p>
      <div>
        <form @submit="joinHandler" method="post">
          <p>*는 필수입력 정보란입니다.</p>
          <div>
            <input type="text" placeholder="이름(실명)" v-model = "username"/>
          </div>
          <div>
            <input type="text" placeholder="아이디" v-model = "id"/>
            <button @click="SameIdCheck">중복확인</button>
            <span>{{msg}}</span>
          </div>
          <div>
            <input type="password" autoComplete="off" placeholder="비밀번호(8~16자의 영문,숫자,특수기호)" v-model = "password"/>
          </div>
          <div>
            <input type="text" placeholder="이메일" v-model = "email"/>
          </div>
          <div>
            <input type="text" placeholder="휴대폰번호" v-model ="phone"/>
            <button>인증번호 전송</button>
          </div>
          <div>
            <input type="text" placeholder="인증번호 입력" v-model ="certification_num">
            <button>확인</button>
            <button>재전송</button>
          </div>
        </form>
        <div>
          <div>
            필수동의 항목 및 개인정보 수집 및 이용동의
            <input type="checkbox" id="agree1">
          </div>
          <div>
            개인정보 동의항목란
            <input type="checkbox" id="agree2">
          </div>

          <button>가입하기</button>
        </div>
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
        </form>
        <div>
          <div>
            필수동의 항목 및 개인정보 수집 및 이용동의
            <input type="checkbox">
          </div>
          <div>
            개인정보 동의항목란
            <input type="checkbox">
          </div>

          <button>가입하기</button>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'uJoinView',
  data: function () {
    return {
      username: this.username,
      id: this.id,
      password: this.password,
      email: this.email,
      phone: this.phone,
      certification_num: this.certification_num,
      msg: ''
    }
  },
  methods: {
    // 아이디 중복확인 메서드
    SameIdCheck (e) {
      var self = this // axios 안에서 this 키워드 동작 제대로 안되서 여기서 변수로 선언해줌
      e.preventDefault()
      this.$axios.post('/jobfair/checkSameId', { user_id: this.id })
        .then(function (response) {
          console.log(response)
          self.msg = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 회원가입 처리 메서드
    joinHandler (e) {
      var self = this // axios 안에서 회원가입 요청 성공 반환시 페이지를 이동시켜주기 위해서 this.$router를 그냥하면 에러나서 여기서 변수 선언해줌.
      e.preventDefault()
      if (document.getElementById('agree1').checked === false) {
        alert('필수동의 항목을 체크해 주셔야합니다.')
        this.$router.push('uJoinView')
      } else { //
        var url = '/jobfair/uJoin'
        var data = {
          user_name: this.username,
          user_id: this.id,
          user_pw: this.password,
          user_email: this.email,
          user_phone: this.phone
        }
        axios.post(url, data)
          .then(function (response) {
            if (response.status === 200) {
              self.$router.push('/')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
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
