<template>
<div>

  <header>
    <h1><a href="#" class=""><img alt="HomePage logo" src="#"></a></h1>
    <div class="">
      <input type="text" value="">
      <button type="submit">검색</button>
      <ul class="">
        <li><a href="javascript:;">메뉴1</a></li>
        <li><a href="javascript:;">메뉴2</a></li>
        <li><a href="javascript:;">메뉴3</a></li>
        <li><a href="javascript:;">메뉴4</a></li>
      </ul>
    </div>
  </header>

  <section>
    <div>
      <button type="button">공고등록하기</button>
      <div>인재채용 잘하는 꿀팁</div>
    </div>
    <div>

      <div>
        <p>채용현황</p>
        <a href="#">진행중 공고 <p>0</p></a>
        <a href="#">서류/면접중 공고 <p>0</p></a>
        <a href="#">신규지원자 <p>0</p></a>
        <a href="#">미열람이력서 <p>0</p></a>
      </div>

      <div>
        <p>인재관리 현황</p>
      </div>

    </div>

    <!-- radio 클릭 시 슬라이더 형식으로 만들어보기 -->
    <div>
      <input type="radio" checked>
      <input type="radio">
      <input type="radio">
      <div>
        내가 등록한 공고
      </div>
      <div>
        <select>
          <option value="1">최신순</option>
          <option value="2">조회순</option>
        </select>
      </div>

    </div>

    <div>
      <p>지원자 목록</p>
      <img src="#" alt="#">
      <p>지원자 정보</p>
      <button type="button">pre</button>
      <button type="button">next</button>

    </div>

<!--  모달창 만들기  -->
    <div>
      <h4>아직 미가입 기업인가요? 회원가입 후 이용해보세요</h4>
      <button>취소하기</button>
      <button>가입하기</button>
    </div>
  </section>
  <footer>
    <p>@copyRight sungzzin</p>
  </footer>
</div>

</template>

<script>
export default {
  name: "cMainView"
}
</script>

<style scoped>

</style>
