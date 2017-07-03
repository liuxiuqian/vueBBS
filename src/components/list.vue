<template lang="html">
  <div class="list">
    <div class="cell">
      <a class="user_avatar pull-left">
        <img :src="imglo" title="ab8512">
      </a>
      <span class="reply_count pull-left">
      <span class="count_of_replies" title="回复数">
        {{ replies }}
      </span>
      <span class="count_seperator">/</span>
        <span class="count_of_visits" title="点击数">
          {{ visits }}
        </span>
      </span>
      <a class="last_time pull-right">
        <img class="user_small_avatar" :src="smallImg">
        <span class="last_active_time">{{ time }}</span>
      </a>
      <router-link to="/detail">
        <div class="topic_title_wrapper">
          <span :class="styles">{{ text }}</span>
          <a class="topic_title" :title="title">
            {{ title }}
          </a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: ['replies', 'visits', 'styles', 'text', 'time', 'title', 'imglo', 'smallImg']
  }
</script>

<style scoped>

</style>
