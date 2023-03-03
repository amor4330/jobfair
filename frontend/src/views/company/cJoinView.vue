<template>
  <div>
    <div>
      <div><a href="#">기업회원</a></div>
      <div>
        <form>
          <p>*는 필수입력 정보란입니다.</p>
          <div>
            <input type="text" placeholder="기업명"/>
          </div>
          <div>
            <input type="number" placeholder="기업 전화번호"/>
          </div>
          <div>
            <input type="text" placeholder="기업 이메일"/>
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
            <input type="number" placeholder="사업자등록번호"/>
          </div>
          <div>
            <input type="text" placeholder="설립일">
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
  name: "cJoinView"
}
</script>

<style scoped>

</style>
