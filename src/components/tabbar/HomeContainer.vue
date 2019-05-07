<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in Lunbolist" :key="i">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Lunbolist: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    async getLunbotu() {
      const { data: dt } = await this.http.get("/api/getlunbo");
      console.log(dt);
      this.Lunbolist = dt.message;
    }
  }
};
</script>


<style lang='scss' scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>

