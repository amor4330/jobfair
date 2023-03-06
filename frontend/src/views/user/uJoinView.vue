<template>
  <div>
    <div>
      <div><a href="#">개인회원</a></div>
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
          <div>
            필수동의 항목 및 개인정보 수집 및 이용동의
            <input type="checkbox" id="agree1">
          </div>
          <div>
            개인정보 동의항목란
            <input type="checkbox" id="agree2">
          </div>

          <button>가입하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // name: 'uJoinView'
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

</style>
