<template>

  <div class="wrapBox">
    <div class="wrapBox2">
      <div class="qnaBox">
        <h3>Q&A</h3>
      </div>

      <div class="wrapBox3">
        <div class="writer">
          작성자  <input type="text" placeholder="내용을 입력해주세요"> <br />
        </div>

        <div class="title">
          문의 제목  <input type="text" placeholder="내용을 입력해주세요"> <br />
        </div>

        <div class="content">
          문의 내용 <br/>
          <textarea class="contentInput" placeholder="내용을 입력해주세요"></textarea>  <br />
        </div>

      </div>
      <button class="askBtn">문의하기</button>
      <button class="xBtn">목록으로</button>

    </div>


  </div>
</template>

<script>
export default {
  name: "uQnAWriteView"
}
</script>

<style scoped>
/*폰트설정*/
@font-face {
  font-family: 'Happiness-Sans-Title';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/Happiness-Sans-Title.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.wrapBox {
  border: 1px solid grey;
  width: 900px;
  height: 800px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 100px;
  display: flex;
}

.wrapBox2 {
  width: 670px;
  height: 670px;
  margin: auto;
}

.wrapBox2 .qnaBox {
  text-align: left;
  font-size: 30px;
  height: 80px;
}


.wrapBox3 .writer {
  height: 50px;
  line-height: 50px;
  position: relative;
  right: 50px;
  font-size: 20px;
}

.wrapBox3 .writer input {
  position: relative;
  left: 100px;
  width: 300px;
  height: 30px;
}

.wrapBox3 .title {
  height: 50px;
  line-height: 50px;
  position: relative;
  right: 40px;
  margin-bottom: 20px;
  font-size: 20px;
}

.wrapBox3 .title input {
  position: relative;
  left: 80px;
  width: 300px;
  height: 30px;
}

.wrapBox3 .content {
  height: 50px;
  position: relative;
  right: 200px;
  font-size: 20px;

}

.wrapBox3 .content .contentInput {
  height: 350px;
  width: 550px;
  margin-top: 15px;
  resize: none;
  position: relative;
  left: 250px;
}


.askBtn {
  position: relative;
  top: 370px;
  width: 150px;
  height: 40px;
  font-family: 'Happiness-Sans-Title';
  background-color: rgb(95, 75, 229);
  border: none;
  border-radius: 5px;
  color: white;
}
.xBtn {
  position: relative;
  top: 370px;
  left: 10px;
  width: 150px;
  height: 40px;
  font-family: 'Happiness-Sans-Title';
  background-color: rgb(95, 75, 229);
  border: none;
  border-radius: 5px;
  color: white;
}

body {
  font-family: 'Happiness-Sans-Title';
}
</style>
