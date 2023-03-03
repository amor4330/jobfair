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
      <h3>(주)회사명님, 등록하신 채용담당자 리스트입니다.</h3>
      <input type="text">
      <button type="button">검색하기</button>
      <select>
        <option value="1">ㄱㄴㄷ순</option>
        <option value="2">최신순</option>
      </select>
    </div>
    <div>
      <span>No.</span>
      <span>담당자명</span>
      <span>등록일자</span>
      <div>
        <span>승인여부</span>
        <div>
          <p>승인완료</p>
          <button type="button">수정하기</button>
          <button type="button">삭제하기</button>
        </div>
      </div>

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
  name: "cMngApplyView"
}
</script>

<style scoped>

</style>
