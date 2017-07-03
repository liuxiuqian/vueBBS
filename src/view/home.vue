<template lang="html">
  <div class="container">
    <home-header></home-header>
    <div id="main">
      <div id="sidebar">
        <home-personal></home-personal>
      </div>
      <div id="content">

        <home-content></home-content>



      </div>

    </div>
  </div>
</template>

<script>

  import HomeHeader from '../components/header'
  import HomeContent from '../components/content'
  import HomePersonal from '../components/personal'

export default {
  data () {
      return {
          items: []
      }
  },
  components: {
    HomeHeader,
    HomeContent,
    HomePersonal
  }

}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .panel .inner {
    line-height: 2em;
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 3px 3px;
  }
  .panel .inner.no-padding {
    padding: 0;
  }

</style>

