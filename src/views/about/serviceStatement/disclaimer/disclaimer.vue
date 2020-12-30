<template>
  <div class="disclaimer">
    <el-card shadow="never" header="免责声明">
      <p v-for="(item, index) in data" :key="index">{{ item }}</p>
      <div class="footer">
        <p>北京聚米房地产营销策划有限公司</p>
        <p>2020年05月01日</p>
      </div>
    </el-card>
  </div>
</template>

<script src="./disclaimer"></script>

<style lang="scss" scoped src="./disclaimer.scss"></style>
