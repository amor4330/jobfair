<template>
  <div>
    <div>
      <div><a href="#">개인회원</a></div>
      <div>
        <form>
          <p>*는 필수입력 정보란입니다.</p>
          <div>
            <input type="text" placeholder="이름(실명)"/>
          </div>
          <div>
            <input type="text" placeholder="아이디"/>
          </div>
          <div>
            <input type="text" placeholder="비밀번호(8~16자의 영문,숫자,특수기호)"/>
          </div>
          <div>
            <input type="text" placeholder="이메일"/>
          </div>
          <div>
            <input type="text" placeholder="휴대폰번호"/>
            <button>인증번호 전송</button>
          </div>
          <div>
            <input type="text" placeholder="인증번호 입력">
            <button>확인</button>
            <button>재전송</button>
          </div>
          <div>
            필수동의 항목 및 개인정보 수집 및 이용동의
            <input type="checkbox">
          </div>
          <div>
            개인정보 동의항목란
            <input type="checkbox">
          </div>

          <button>가입하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uJoinView'
}
</script>

<style scoped>

</style>
