<template>
<div>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <header>
    헤더
  </header>
  <section>
    <div>
      <p>나의 전체 채용공고</p>
      <input type="text">
      <div>
        <button type="submit">검색하기</button>
        <select>
          <option value="1">최신등록순</option>
        </select>
      </div>
    </div>
    <div>
      <span>진행중</span>1
      <span>접수마감</span>0
      <span>채용종료</span>0
      <span>임시저장</span>0
    </div>
    <div>
      <table>
        <tr>
          <input type="checkbox">
          <td>등록일</td>
          <td>제목</td>
          <td>내용</td>
          <td>채용시작일</td>
          <td>채용마감일</td>
          <td>지원자수</td>
        </tr>
        <tr>
          <input type="checkbox">
        </tr>
      </table>
    </div>
    <div>
      <button type="button">삭제하기</button>
      <button type="button">수정하기</button>
      <button type="button">채용공고 등록하기</button>
    </div>
  </section>
  <footer>
    푸터
  </footer>
  </body>
  </html>
</div>
</template>

<script>
export default {
  name: "cJobPostListView"
}
</script>

<style scoped>

</style>
