<template>
  <el-row>
    <el-col :span="24" class="edit-panel">
      <el-row class="content-header">
        <el-col :span="24">{{title}}</el-col>
      </el-row>
      <el-row class="content-body">
       <el-col :span="24">
          <slot></slot>
       </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'EditPanel',
  props: ['title'],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.edit-panel{
  color: #3d444f;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(204,209,217,.3);
  background-color: #fff;
  line-height: 1;
  padding: 0 !important;
  .content-header{
    &>div {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 25px;
    }
    position: relative;
    padding: 25px 20px 0;
    background-color: #f5f7fa;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #e4e7ed;
    box-shadow: inset 0 1px 0 0 hsla(0,0%,100%,.6);
  }
  .content-body{
    position: relative;
    padding: 30px 20px;
  }
}
</style>

