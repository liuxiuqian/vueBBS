<template lang="html">
  <div class="content">
    <div class="panel">
      <div class="header">
        <a href="" class="topic-tab current-tab">全部</a>
        <a href="" class="topic-tab ">精华</a>
        <a href="" class="topic-tab ">weex</a>
        <a href="" class="topic-tab ">分享</a>
        <a href="" class="topic-tab ">问答</a>
        <a href="" class="topic-tab ">招聘</a>
      </div>
      <div class="inner no-padding">
          <div id="topic_list">
            <home-list v-for="item in items" :visits="item.visits" :replies="item.replies" :text="item.text" :styles="item.styles" :time="item.time" :title="item.title" :imglo="item.imglo" :smallImg="item.smallImg"></home-list>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import HomeList from '../components/list.vue'
  export default {
    name: 'content',
    data () {
      return {
        items: []
      }
    },
    components: {
      HomeList
    },
    created () {
      this.$http.get('../api/goods').then((data) => {
//        console.log(data);
        this.items = data.body.data;
      })
    }
  }
</script>

<style scoped>
  /*@import "../assets/css/scc.css";*/
</style>
