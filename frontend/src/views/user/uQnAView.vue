<template>

  <div class="wrapBox">

    <div class="qnaBox">
      <div>
        <h3>Q&A</h3>
        <button class="qnaBtn">+ 질의 등록</button>
      </div>

      <table>
        <thead>
        <tr class="firstLine">
          <td class="writer">작성자</td>
          <td class="bigTitle">질문제목</td>
          <td class="bigRegdate">등록시간</td>
        </tr>
        </thead>

        <tbody>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        <tr>
          <td class="id">Id</td>
          <td class="title">Title</td>
          <td class="regdate">Regdate</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "uQnAView"
}
</script>

<style scoped>
/*글씨체*/
@font-face {
  font-family: 'MICEGothic Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}


.wrapBox {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.qnaBox {
  width: 1200px;
  height: 670px;
  margin: auto;
  overflow: hidden;
  font-family: 'MICEGothic Bold';
}


.qnaBox table {
  border-collapse: collapse;

}

.qnaBox tr {
  text-align: center;
}

.qnaBox td {
  border: 1px solid grey;
}

.qnaBox .firstLine {
  background-color: rgb(227, 227, 227);
}

.qnaBox .writer {
  width: 300px;
  padding: 5px;
  text-align: center;
}



.qnaBox .title {
  width: 600px;
  height: 40px;
  padding: 5px;
  text-align: left;

}

.qnaBox .regdate {
  width: 300px;
  text-align: center;

}

.qnaBox h3 {
  font-size: 30px;
  font-family: 'MICEGothic Bold';
  margin-bottom: 20px;
  position: relative;
  right: 560px;
}



.qnaBox .qnaBtn {
  font-size: 20px;
  border: none;
  position: relative;
  left: 500px;
  bottom: 40px;
}
</style>
