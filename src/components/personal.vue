<template>
  <div class="personal">
    <div class="panel">

      <div class="header">
        <span class="col_fade">个人信息</span>
      </div>

      <div class="inner">
        <div class="user_card">
          <div>
            <a class="user_avatar">
              <img :src="pers.headImg" :title="pers.user1">
            </a>
            <span class="user_name"><a class="dark">{{ pers.user1 }}</a></span>

            <div class="board clearfix">
              <div class="floor">
                <span class="big">积分: {{ pers.integral }} </span>
              </div>
            </div>
            <div class="space clearfix"></div>
            <span class="signature">“{{ pers.signature }}”</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'personal',
    data () {
        return {
          pers:{
            headImg:"",
            user1: "",
            integral:"",
            signature:""
          }
        }
    },
    created () {
      this.$http.get('../api/personal').then((data) => {
        this.pers.user1 = data.body.data2.user;
        this.pers.headImg = data.body.data2.headImg;
        this.pers.integral = data.body.data2.integral;
        this.pers.signature = data.body.data2.signature;
      })
    }
  }
</script>

<style scoped>

</style>
