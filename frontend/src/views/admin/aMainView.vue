<template>
<div>

  <!--###############참여 기업 상태-->
  <div>
    <h3>참여 기업 상태</h3>
    <table class="table">
      <tr>
        <td>
          <div>8</div>
          참여 기업 수
        </td>
        <td>
          <div>10</div>
          반려
        </td>
        <td>
          <div>24</div>
          승인
        </td>
      </tr>
    </table>
  </div>

  <!--###############채용공고 목록-->
  <div>
    <h3>채용공고 목록</h3>

    <table class = "table">
      <tr>
        <td>
          <div class="td_wrap">
            <img src="2.jpg" class="companyLogo left">
            <div class="left">
              <p>UIUX 디자이너</p>
              <p>(주) 카카오</p>
              <p>경력무관 : 경기도 성남시</p>
            </div>
            <input type="button" value="지원자" class = "left">
          </div>
        </td>
        <td>
          <div class="td_wrap">
            <img src="2.jpg" class="companyLogo left">
            <div class="left">
              <p>UIUX 디자이너</p>
              <p>(주) 카카오</p>
              <p>경력무관 : 경기도 성남시</p>
            </div>
            <input type="button" value="지원자" class = "left">
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="td_wrap">
            <img src="2.jpg" class="companyLogo left">
            <div class="left">
              <p>UIUX 디자이너</p>
              <p>(주) 카카오</p>
              <p>경력무관 : 경기도 성남시</p>
            </div>
            <input type="button" value="지원자" class = "left">
          </div>
        </td>
        <td>
          <div class="td_wrap">
            <img src="2.jpg" class="companyLogo left">
            <div class="left">
              <p>UIUX 디자이너</p>
              <p>(주) 카카오</p>
              <p>경력무관 : 경기도 성남시</p>
            </div>
            <input type="button" value="지원자" class = "left">
          </div>
        </td>
      </tr>

      <tr>
        <td>
          <div class="td_wrap">
            <img src="2.jpg" class="companyLogo left">
            <div class="left">
              <p>UIUX 디자이너</p>
              <p>(주) 카카오</p>
              <p>경력무관 : 경기도 성남시</p>
            </div>
            <input type="button" value="지원자" class = "left">
          </div>
        </td>
        <td>
          <div class="td_wrap">
            <img src="2.jpg" class="companyLogo left">
            <div class="left">
              <p>UIUX 디자이너</p>
              <p>(주) 카카오</p>
              <p>경력무관 : 경기도 성남시</p>
            </div>
            <input type="button" value="지원자" class = "left">
          </div>
        </td>
      </tr>

    </table>
  </div>

  <hr/>
  <img src="" alt="이미지">
  <div>OOO님</div>
  <div>쪽지(12)</div>
  <ul>
    <li>
      <div>11</div>
      <div>담당자 신청 목록</div>
    </li>
    <li>
      <div>6</div>
      <div>참여업체 신청 목록</div>
    </li>
  </ul>
  <div>채용 담당자 신청 목록 조회</div>
  <div>참여업체 신청 목록 조회</div>

</div>
</template>

<script>
export default {
  name: "aMainView"
}
</script>

<style scoped>

  .table{
    width: 700px;
    border : 1px solid black;
  }
  .table tr, .table td {
    border : 1px solid black;
  }
  .companyLogo{
    width: 80px;
    height: 80px;
  }
  .td_wrap {
    overflow: hidden;
  }
  .left {
    float: left;
  }

</style>
