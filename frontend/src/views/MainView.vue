<template>
<div>

  <div>
    <div>
      <img src="#" alt="HomePage Logo">
    </div>
    <div>
      <input type="checkbox">
      <span>개인회원</span>
      <input type="checkbox">
      <span>기업회원</span>
      <button>관리자</button>
    </div>
    <div>
      <input type="text" name="" id="">
      <input type="password">
      <button type="submit">로그인</button>
      <div>
        <input type="checkbox">
        <span>로그인상태 유지하기</span>
        <a href="#">아이디찾기</a>
        <a href="#">비밀번호찾기</a>
        <p>좋은 직업을 찾고싶으신가요? 가입하시고 다양한 정보를 얻어가세요!<a href="#">회원가입</a></p>
      </div>
    </div>
  </div>

  <!-- 기업은 회원가입 후 관리자가 승인해주지않으면 로그인페이지로 넘어가지 못하는 모달창 띄우기 -->
  <div>
    승인되지 않은 기업입니다
    <button>확인</button>
  </div>

</div>
</template>

<script>
export default {
  name: 'MainView'
}
</script>

<style scoped>

</style>
