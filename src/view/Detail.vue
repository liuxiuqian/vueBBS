<template lang="html">
  <div class="detail">
    <detail-header></detail-header>
    <div id="main">
      <div id="sidebar">
        <detail-personal></detail-personal>
      </div>
      <div id="content">

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
