<template>
  <div class="new-house">
    <!-- <router-view /> -->
    <el-tabs v-model="activeName" @tab-click="tabClick">
      <el-tab-pane name="houses" :label="`${this.location.name}新盘`">
        <houses
          ref="filter"
          v-if="activeName === 'houses'"
          :regions="regions"
          :priceIntervals="priceIntervals"
          :labels="labels"
          @getSelected="getSelected"
          @getList="getProject"
        ></houses>
        <!-- 已选 -->
        <el-row :gutter="10" type="flex" class="list__selected" v-if="selected.length > 0">
          <el-col class="list__label"><span>已选</span></el-col>
          <el-col>
            <el-button
              plain
              v-for="select in selected"
              :key="select.name"
              @click="selectClick(select)"
            >
              <span>{{ select.value.name }}</span>
              <span v-if="select.value.child"> - {{select.value.child.name}}</span>
              <i class="el-icon-close"></i>
            </el-button>
            <el-button type="text" icon="el-icon-delete" @click="clear">清空</el-button>
          </el-col>
        </el-row>
        <!-- 排序 -->
        <el-row :gutter="10" type="flex" class="list__sort">
          <el-col class="list__label"><span>排序</span></el-col>
          <el-col>
            <el-button type="text" @click="defaultSort">默认排序</el-button>
            <el-button type="text" @click="priceSort">单价
              <i class="el-icon-sort-up" v-if="sort.price === 'asc'"></i>
              <i class="el-icon-sort-down" v-else-if="sort.price === 'desc'"></i>
              <i class="el-icon-sort" v-else></i>
            </el-button>
            <!-- <el-button type="text" @click="attentionSort">关注度
              <i class="el-icon-sort-up" v-if="sort.attention === 'desc'"></i>
              <i class="el-icon-sort-down" v-else-if="sort.attention === 'asc'"></i>
              <i class="el-icon-sort" v-else></i>
            </el-button> -->
            <div class="list__total">共<strong>{{ page.total }}</strong>个新盘</div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <!-- <el-tab-pane name="metro" label="地铁沿线">
        <metro ref="filter" v-if="activeName === 'metro'" @getSelected="getSelected"></metro>
      </el-tab-pane> -->
      <el-tab-pane name="hot" label="热销楼盘"></el-tab-pane>
      <el-tab-pane name="help" label="帮我找房"></el-tab-pane>
    </el-tabs>
    <!-- 列表 -->
    <el-row :gutter="20" type="flex" class="list__content">
      <el-col :span="18">
        <list :data="store" :page="page" @getList="getProject"></list>
      </el-col>
      <el-col :span="6">
        <explain></explain>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./list"></script>

<style lang="scss" scoped src="./list.scss"></style>
