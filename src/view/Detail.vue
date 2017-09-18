<template lang="html">
  <div class="detail">
    <detail-header></detail-header>
    <div id="main">
      <div id="sidebar">
        <detail-personal></detail-personal>
      </div>
      <div id="content">
        <div class="panel">
          <div class="header topic_header">
            <span class="topic_full_title">
              <span class="put_top">置顶</span>
              基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用
            </span>
            <div class="action">
              <span class="span-common span-success" id="collect_btn" action="collect">加入收藏</span>
            </div>
            <div class="changes">
              <span>
                发布于 4个月前
              </span>
              <span>
                作者 <a href="/user/bailicangdu">bailicangdu</a>
              </span>
              <span>
                39673 次浏览
              </span>
              <span> 来自 分享</span>
            </div>
            <div id="manage_topic"></div>
          </div>

          <div class="inner topic">
            <div class="topic_content">
              <div class="markdown-text">

              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

import detailHeader from '../components/header.vue'
import detailPersonal from '../components/personal.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    detailHeader,
    detailPersonal
  }
}
</script>

<style lang="css">

</style>
