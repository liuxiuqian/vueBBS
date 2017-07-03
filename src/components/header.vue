<template lang="html">
  <div class="head">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="container">
          <!--图标-->
          <a class="brand" href="/" style="color : #fff;">
            <img src="../assets/img/vue.png"> Vue.js
          </a>
          <form id="search_form" class="navbar-search" action="/search">
            <input type="text" id="q" name="q" class="search-query span3" value="">
          </form>
          <ul class="nav pull-right">
            <li><a href="/">首页</a></li>
            <li><a href="http://doc.vue-js.com/">VUE 2.0</a></li>
            <li><a href="/getstart">参考资料</a></li>
            <li><a href="/api">API</a></li>
            <li><a href="/about" target="">关于</a></li>
            <li><a href="/signup">注册</a></li>
            <li><a href="/signin">登录</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  .navbar {
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    height: 55px;
    position: relative;
    background: #1c6132;
    font-size: 13px;
  }
  .navbar-inner {
    background: 0 0;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    width: 90%;
    margin: auto;
    padding: 5px;
  }
  .navbar .container {
    width: 100%;
    min-width: 960px;
    margin: 0 auto;
    max-width: 1400px;
  }
  .navbar .brand {
    display: block;
    float: left;
    padding: 10px 20px;
    margin-left: -20px;
    font-size: 20px;
    font-weight: 200;
    color: #777;
    text-shadow: 0 1px 0 #fff;
  }
  .navbar .brand {
    width: 120px;
    padding: 0 20px;
    height: 45px;
  }
  img {
    width: auto\9;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
  }
  .navbar .brand img {
    height: 45px;
  }

  form {
    margin: 0 0 20px;
  }
  form, textarea {
    margin-bottom: 0;
  }
  .navbar-search {
    position: relative;
    float: left;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .navbar .navbar-search {
    margin-top: 8px;
  }
  .navbar .search-query {
    background: #4f9639 url(../assets/img/search.png) no-repeat 4px 4px;
  }

</style>
