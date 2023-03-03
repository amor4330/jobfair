<template>
<div>
  <div>
    <span>HomeLogo</span> <span><input type="text"></span><button>상세검색</button>
    <div><img src="#"></div>
  </div>
  <div>
    <h1>Menu</h1>
  </div>
  <div>
    <span><input type="text"></span>
    <span>
            <select>
                <option>최신 순 조회</option>
            </select>
       </span>
  </div>
  <table>
    <tr>
      <th>채용제목</th>
      <th>지원자 수</th>
    </tr>
    <tr>
      <td><a href="#">채용제목 클릭 시 지원자 상세내역 리스트 보이게하기</a></td>
      <td>3</td>
    </tr>
  </table>
  <table>
    <tr>
      <th>지원일자</th>
      <th>이력서제목</th>
      <th>작성자</th>
      <th>상태</th>
    </tr>
    <tr>
      <td>1</td>
      <td><a href="#">이력서 확인 후 상태수정가능</a></td>
      <td>1</td>
      <td>
        <select>
          <option>이력서 검토중</option>
          <option>서류 합격</option>
          <option>불합격</option>
          <option>최종 합격</option>
        </select>
        <input type="text" placeholder="서류합격시 면접일자등록기능">
      </td>
    </tr>
    <tr>
      <td>1</td>
      <td><a href="#">이력서 확인 후 상태수정가능</a></td>
      <td>1</td>
      <td>
        <select>
          <option>이력서 검토중</option>
          <option>서류 합격</option>
          <option>불합격</option>
          <option>최종 합격</option>
        </select>
        <input type="text" placeholder="서류합격시 면접일자등록기능">
      </td>
    </tr>
    <tr>
      <td><a href="#">채용제목 클릭 시 지원자 상세내역 리스트 보이게하기</a></td>
      <td>4</td>
    </tr>
    <tr>
      <td><a href="#">채용제목 클릭 시 지원자 상세내역 리스트 보이게하기</a></td>
      <td>4</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "cApplyMngView"
}
</script>

<style scoped>

</style>
