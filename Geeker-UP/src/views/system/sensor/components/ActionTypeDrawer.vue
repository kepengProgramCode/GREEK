<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}设备`">
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="类型" prop="action_type_id">
        <el-input v-model="drawerProps.row!.action_type_id" placeholder="请填写Action类型" clearable></el-input>
      </el-form-item>
      <el-form-item label="名称" prop="action_name">
        <el-input v-model="drawerProps.row!.action_name" placeholder="请填写Action名称" clearable></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit">确定</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="ActionTypeDrawer">
import { ref, reactive } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import { Sensor } from "@/api/interface";

const rules = reactive({
  action_type_id: [{ required: true, max: 3, message: "请填写Action类型,不超过3个字符" }],
  action_name: [{ required: true, max: 50, message: "请填写Action名称,不超过50个字符" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  row: Partial<Sensor.ActionType>;
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}

const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  row: {}
});

// const isShow = computed(() => {
//   return drawerProps.value.title == "新增";
// });

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  debugger;
  drawerProps.value = params;
  drawerVisible.value = true;
};

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    try {
      debugger;
      await drawerProps.value.api!(drawerProps.value.row);
      ElMessage.success({ message: `${drawerProps.value.title}Action成功！` });
      drawerProps.value.getTableList!();
      drawerVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({
  acceptParams
});
</script>
