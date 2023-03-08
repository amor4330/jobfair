<template>
  <div class="adminBg" >
    <div class="companyWrap " >
      <!--###############참여 기업 상태-->
      <div class="companyWrap_1 container">
        <h3>참여 기업 상태</h3>

        <div class="aBox ">
          <a href="#">
            <div class="companyNumImg">
              <!--              <img src="img/icon_com.png">-->
            </div>
            <div class="companyNum_text">

              <span>참여 기업 수</span>
              <p>8</p>

            </div>
          </a>
          <a href="#" class="col-sm-4">
            <div class="companyNumImg">
              <!--              <img src="img/icon_x.png">-->
            </div>
            <div class="companyNum_text">
              <span>반려</span>
              <p>8</p>

            </div>
          </a>
          <a href="#" class="col-sm-4 col-1">
            <div class="companyNumImg">
              <!--              <img src="img/icon_chk.png">-->
            </div>
            <div class="companyNum_text">
              <span>승인완료</span>
              <p>8</p>
            </div>
          </a>
        </div>

      </div>

      <!--우측 회원정보 확인하는 곳-->
      <div class="userInfoBox">
        <div class="userInfoFirstLine">
          <div>
            <img src="#">
            <h3>OOO님의 <br/>입사 지원 현황</h3>
            <a href="#">쪽지(3)</a>
          </div>
        </div>
        <div class="userInfoSecondLine">
          <ul class="userInfoSecondLine1">
            <li>10</li>
            <li>지원완료</li>
          </ul>

          <ul class="userInfoSecondLine2">
            <li>10</li>
            <li>열람</li>
          </ul>

          <ul class="userInfoSecondLine3">
            <li>10</li>
            <li>미열람</li>
          </ul>

        </div>

        <div>
          <button>이력서 관리</button>
          <button>mypage</button>
        </div>

      </div>


      <div>
        <h3>채용공고 목록</h3>

        <div class="empBoxWrap">
          <div class="empBox">
            <div class="empBoxCon">
              <img src="2.jpg" class="companyLogo left">
              <div class="left empBoxText">
                <h3>UIUX 디자이너</h3>
                <p>(주) 카카오</p>
                <p>경력무관   초대졸   경기도 성남시   정규직   3,000~3,400만원</p>
              </div>
              <input type="button" value="지원자" class = "left aplBtn">
            </div>
          </div>
          <div class="empBox">
            <div class="empBoxCon">
              <img src="2.jpg" class="companyLogo left">
              <div class="left empBoxText">
                <h3>UIUX 디자이너</h3>
                <p>(주) 카카오</p>
                <p>경력무관   초대졸   경기도 성남시   정규직   3,000~3,400만원</p>
              </div>
              <input type="button" value="지원자" class = "left aplBtn">
            </div>
          </div>
          <div class="empBox">
            <div class="empBoxCon">
              <img src="2.jpg" class="companyLogo left">
              <div class="left empBoxText">
                <h3>UIUX 디자이너</h3>
                <p>(주) 카카오</p>
                <p>경력무관   초대졸   경기도 성남시   정규직   3,000~3,400만원</p>
              </div>
              <input type="button" value="지원자" class = "left aplBtn">
            </div>
          </div>
          <div class="empBox">
            <div class="empBoxCon">
              <img src="2.jpg" class="companyLogo left">
              <div class="left empBoxText">
                <h3>UIUX 디자이너</h3>
                <p>(주) 카카오</p>
                <p>경력무관   초대졸   경기도 성남시   정규직   3,000~3,400만원</p>
              </div>
              <input type="button" value="지원자" class = "left aplBtn">
            </div>
          </div>
          <div class="empBox">
            <div class="empBoxCon">
              <img src="2.jpg" class="companyLogo left">
              <div class="left empBoxText">
                <h3>UIUX 디자이너</h3>
                <p>(주) 카카오</p>
                <p>경력무관   초대졸   경기도 성남시   정규직   3,000~3,400만원</p>
              </div>
              <input type="button" value="지원자" class = "left aplBtn">
            </div>
          </div>
          <div class="empBox">
            <div class="empBoxCon">
              <img src="2.jpg" class="companyLogo left">
              <div class="left empBoxText">
                <h3>UIUX 디자이너</h3>
                <p>(주) 카카오</p>
                <p>경력무관   초대졸   경기도 성남시   정규직   3,000~3,400만원</p>
              </div>
              <input type="button" value="지원자" class = "left aplBtn">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'aMainView'
}
</script>

<style scoped>


*{
  padding: 0;
  margin: 0;
  list-style: none;
  font-size:15px;
}


a {text-decoration: none;}


html, body {width:100%;
  height:100%;}

.left{float: left;}

.adminBg{width:100%;
  height:100%;
  background-color: #efefef;
}


.companyWrap {width:1200px;
  margin:0 auto;
  /* display: flex; */
  /* justify-content: center; */
}

h3{font-size: 18px;}

.companyWrap_1 {overflow: hidden;}

.aBox {
  float: left;
}

.aBox a {display: inline-block;
  width: 200px;
  height:150px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 20px;
  position:relative;
  color:rgb(255, 255, 255);
  box-shadow: 2px 2px 8px #d6d6d6;
  /* border: 2px solid rgb(95, 75, 229); */

}
.aBox a:first-child { background-color: rgb(95, 75, 229);}
.aBox a:nth-child(2) {background-color: rgb(229, 75, 75);}
.aBox a:nth-child(3) {background-color: rgb(62, 162, 72);
}
.companyNum_text {
  position : absolute;
  top: 50%;margin-top: -50px;
  right:20%;
  width:200px;
  text-align: right;

}
.companyNum_text p{font-size: 50px;margin-top: 10px;}

.companyNumImg {border: 1px solid red; height:150px;
  /*background-image: url("img/icon_chk.png")  ;*/
}
.companyNumImg img{opacity: 30%;width:90px;position: absolute;top:50px;left:10px;}
/* .profile {width:350px;
          float: left;
}
.profileWrap {

            } */



.userInfoBox {
  border: 1px solid rgb(181, 181, 181);
}

.userInfoFirstLine {
  overflow: hidden;
}
.userInfoFirstLine img {
  float: left;
}
.userInfoFirstLine h3 {
  font-size: 12px;
  float: left;
}
.userInfoFirstLine a {
  float: left;
}
.userInfoSecondLine li {
  list-style: none;
}
.userInfoSecondLine {
  overflow: hidden;
}
.userInfoSecondLine .userInfoSecondLine1 {
  float: left;
}
.userInfoSecondLine .userInfoSecondLine2 {
  float: left;
}
.userInfoSecondLine .userInfoSecondLine3 {
  float: left;
}






.empBoxWrap{width:1200px;margin:0 auto;}
.empBox {background-color:rgb(255, 255, 255);
  margin: 10px;
  width:48%;
  height:100px;
  float: left;
  border-radius: 20px;

}

.empBox:hover{box-shadow: 2px 2px 8px #d6d6d6;}

.empBoxCon{margin-top:15px;
  margin-left:20px;
  height:70px;
  width:100%;vertical-align: middle;
}

.empBoxCon h3{
  font-size: 16px;
}

.empBoxText{margin-left:20px;}
.empBoxText p{font-size: 13px;margin-top:5px;}

.aplBtn{float: right;
  width:100px;
  height:44px;
  border:none;
  background-color: rgb(95, 75, 229);
  border-radius: 10px;
  color:#fff;
  margin-top:12px;
  margin-right:30px;
  cursor: pointer;

}

.empBox img{width:70px;
  height:70px;}



/* 헤더 스타일 */
header{
  background-color: rgb(95, 75, 229);
  width:100%;
  color:white;

}
.header_size {width:1200px;
  margin:0 auto;
  height:120px;
  line-height: 60px;
}
.header_wrap {padding:30px 20px 20px;
  margin-top:20px;

}
.logo {display: inline-block;
  width:10%;
}
.logo a{color:white;font-size: 30px;font-weight: bold;}
.header_wrap {width:1200px;}
.header_form {display: inline-block;}

.searchForm {position: relative;
}

.searchIcon {
  /*background-image: url("img/search.png")  ;*/
  background-size:contain;
  width:35px;
  height:28px;
  background-color: transparent;
  border: none;
  position: absolute;
  top:13px;
  right:120px;
  cursor: pointer;
}


.search {width:380px;
  height:40px;
  border-radius: 10px;
  border: 3px solid #90aee8;
}

.detailSearch {width:100px;
  height:40px;
  background-color:transparent;
  border:0px;
  color:white;
  background-color: #90aee8;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
}

.menu{display: inline-block;
  width:85%;
  text-align: center;

}
.menu li{display:inline-block;margin:0 auto;font-weight: bold;}
.menu li a {display:inline-block;
  width:100px;
  cursor: pointer;}
.menu li a:hover {border-bottom:3px solid white;}
/* 헤더 스타일 끝 */

</style>
