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
          <li v-on:mouseover="dropDown.menu1 = true" v-on:mouseleave="dropDown.menu1=false">
            <a class="dropbtn" v-on:mouseover.prevent="menuOn" ref="refDrop" style="border:1px solid red">채용공고</a>
            <div class="dropdown-content" v-if="dropDown.menu1" v-on:click="dropDown.menu1=false" >
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li v-on:mouseover="dropDown.menu2 = true" v-on:mouseleave="dropDown.menu2=false">
            <a class="dropbtn" @mouseover="doMouseOver" ref="refDrop" style="border:1px solid red">Q&A</a>
            <div class="dropdown-content" v-if="dropDown.menu2" v-on:click="dropDown.menu2=false">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>

          </li>
        </ul>
      </div>
    </div>

  </header>


</template>

<script>
export default {
  // name: "HeaderView.vue",
  data : function(){
    return {
      menuHide: false,
      dropDown: {
        menu1: false,
        menu2: false
      }
    }

  },
  methods : {
    doMouseOver : function(e){

    }
  }

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
  padding-top:30px;
}

.logo a{color:white;font-size: 30px;font-weight: bold;}





/* 메뉴 */

.headerMenu {
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  padding-top:30px;
}
.headerMenu  li{
  float: left;
  display: inline-block;
  text-align: center;

}
.headerMenu li a {
  display:inline-block;
  height:60px;
  width:160px;
  font-weight: bold;
  cursor: pointer;

}
/* 헤더 검색 */
.searchForm {
  width:370px;
  height:40px;
  border-radius: 10px;
  border: 3px solid #90aee8;
  background-color: white;
  float: left;
  margin-top:10px;
}

.searchInput {width:325px;
  height:40px;
  background-color: transparent;
  float: left;
  border: none;

}

.searchIcon {
  /*background-image: url("img/search.png")  ;*/
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
.dropdown-content {
  background-color: #f9f9f9;
  width: 160px;}


.dropdown-content a:hover {background-color: #f1f1f1;
  width:160px;
}

.toggle-menu {display: none;}
.active {
  display: block;
}



/* .dropdown:hover .dropdown-content {
        display: block;
    } */

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
