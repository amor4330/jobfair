<template>
<div>
<div class="comBoxWrap">
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

  <section class="comMiddle">
    <div class="comLeftBox">
      <button type="button" class="comBtn1">공고등록하기</button>
      <div class="comTip">인재채용 잘하는 꿀팁</div>
    </div>

    <div class="comTop">
      <div class="comRightBox comRecStatus">
        <p>채용현황</p>
        <a href="#">진행중 공고 <p>0</p></a>
        <a href="#">서류/면접중 공고 <p>0</p></a>
        <a href="#">신규지원자 <p>0</p></a>
        <a href="#">미열람이력서 <p>0</p></a>
      </div>

      <div class="comRightBox comRecStatusList">
        <p>인재관리 현황</p>
      </div>

    </div>

    <div class="comBottomBox">
    <div class="comRecList">
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

    <div class="comNewComer">
      <p>지원자 목록</p>
      <img src="#" alt="#">
      <p>지원자 정보</p>
      <button type="button">pre</button>
      <button type="button">next</button>

    </div>
    </div>

  </section>
    <!-- radio 클릭 시 슬라이더 형식으로 만들어보기 -->

  <footer>
    <p>@copyRight sungzzin</p>
  </footer>
</div>
</div>

</template>

<script>
export default {
  name: 'cMainView'
}
</script>

<style scoped>
.comBoxWrap{width:1200px; margin: 0 auto}
a {text-decoration: none; color: black}
.comMiddle {
  display: flex;
  height: 500px;
}
.comLeftBox{
  width: 300px;
  border: 3px solid blue;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  float: left;
}
.comBtn1{
  text-align: center;
  margin: 30px;
  font-size: medium;
  color: white;
  background-color: rgb(95,75,229);
}
.comTip{
  height: 70%;
  border: 3px solid;
  text-align: center;
}

.comRightBox {
  border: 3px solid red;
  display: flex;
  justify-content: space-between;
  float: left;
}
.comRightBox a {
  text-align: center;
}

.comTop {
  display: inline-flex;
}
.comBottomBox {
  display: inline-flex;
}

.comRecStatus {
  border: 3px solid yellow;
  width: 670px;
  height: 110px;
  text-align: center;
}
.comRecStatus a {
  margin: 30px 20px 10px 10px;
  text-align: center;
}
.comRecStatus a p {
  color: rgb(95,75,229);
  font-size: large;
  font-weight: bold;
}
.comRecStatusList {
  width: 300px;
  height: 110px;
  text-align: center;
}
.comRecList {
  text-align: center;
}
.comNewComer {
  text-align: center;
}
</style>
