<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>基础设备类型</span>
        </span>
      </template>
      <S_CLASS />
    </el-tab-pane>
    <el-tab-pane label="设备类型"><S_TYPE /></el-tab-pane>
    <el-tab-pane label="执行动作"><A_TYPE /></el-tab-pane>
    <el-tab-pane label="设备执行方法"><E_A_TYPE /></el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from "@element-plus/icons-vue";
import S_CLASS from "./sensorClass.vue";
import S_TYPE from "./sensorType.vue";
import A_TYPE from "./sensorAction.vue";
import E_A_TYPE from "./sensorActionExe.vue";
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  font-size: 32px;
  font-weight: 600;
  color: #6b778c;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  margin-left: 4px;
  vertical-align: middle;
}
</style>
