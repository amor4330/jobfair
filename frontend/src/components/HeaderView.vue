<template>

  <header>
    <div class="header_size">
      <div class="header_wrap">
        <div class="logo">
          <a href="#">logo</a>
        </div>

        <ul class="headerMenu dropdown">
          <li>
            <form class="searchForm">
              <!-- <img src="img/search.png"> -->
              <input type="text" class="searchInput"/>
              <input type="button" class="searchIcon" />

            </form>
            <button class="detailSearch">상세검색</button>

          </li>
          <li><a class="dropbtn">채용공고</a>
            <!-- <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div> -->
          </li>
          <li><a>Q&A</a></li>
        </ul>
      </div>
    </div>

  </header>


</template>

<script>
export default {
  name: "HeaderView.vue"
}
</script>

<style scoped>
/* 공통 부분 */
*{
  padding: 0;
  margin: 0;
  border:0;
}
a {text-decoration: none;}
li {list-style: none;}
input:focus {outline: none;}
/* 공통 부분--end */

header{
  background-color: rgb(95, 75, 229);
  height:120px;
  color:white;

}
.header_size {
  width:1200px;
  margin:0 auto;
  height:120px;
  line-height: 60px;
}
.logo {
  float: left;
  width:10%;
}

.logo a{color:white;font-size: 30px;font-weight: bold;}





/* 메뉴 */

.headerMenu {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.headerMenu  li{
  float: left;
  display: inline-block;
  text-align: center;
}
.headerMenu li a {
  display:inline-block;
  height:20px;
  width:100px;
  font-weight: bold;
  cursor: pointer;}
.headerMenu  li a:hover {border-bottom:3px solid white;}

/* 헤더 검색 */
.searchForm {
  width:330px;
  height:40px;
  border-radius: 10px;
  border: 3px solid #90aee8;
  background-color: white;
  float: left;
  margin-top:10px;
}

.searchInput {width:290px;
  height:40px;
  background-color: transparent;
  float: left;
  border: none;

}

.searchIcon {background-image: url("img/search.png")  ;
  background-size:contain;
  width:40px;
  height:28px;
  padding: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  float: left;
}

.detailSearch {width:90px;
  height:40px;
  border:0px;
  color:white;
  background-color: #90aee8;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  float:right;
  margin-top:12px;
  margin-left:10px;
}

/* 헤더 검색 --end */



@media (max-width: 1200px) {
  .header_size {width:100%;}
  .headerMenu {

    /* width:1200px; */
    display: flex;
    justify-content: space-around;
    overflow: hidden;
  }
  .headerMenu li{
    float: left;
  }
  .logo {
    float: left;
    width:10%;
  }

  .detailSearch {display: none;}
}


</style>
