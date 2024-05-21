<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}用户`">
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :rules="rules"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item label="用户头像" prop="avatar">
        <UploadImg v-model:image-url="drawerProps.row!.avatar" width="135px" height="135px" :file-size="3">
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
          <template #tip> 头像大小不能超过 3M </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="用户照片" prop="photo">
        <UploadImg v-model:image-url="drawerProps.row!.photo" height="140px" width="140px" border-radius="50%">
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
          <template #tip> 照片大小不能超过 5M </template>
        </UploadImg>
      </el-form-item>
      <el-form-item label="用户姓名" prop="username">
        <el-input v-model="drawerProps.row!.u_name" placeholder="请填写用户姓名" clearable></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="u_pwd" v-show="isShow">
        <el-input v-model="drawerProps.row!.u_pwd" placeholder="请填写用户密码" clearable></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="drawerProps.row!.u_email" placeholder="请填写邮箱" clearable></el-input>
      </el-form-item>
      <el-form-item label="部门" prop="userdpt">
        <el-input v-model="drawerProps.row!.userdpt" placeholder="请填写部门" clearable></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit">确定</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="UserDrawer">
import { ref, reactive, computed } from "vue";
//import { genderType } from "@/utils/dict";
import { ElMessage, FormInstance } from "element-plus";
import { User } from "@/api/interface";
import UploadImg from "@/components/Upload/Img.vue";
//import UploadImgs from "@/components/Upload/Imgs.vue";

// eslint-disable-next-line vue/return-in-computed-property

const rules = reactive({
  avatar: [{ required: true, message: "请上传用户头像" }],
  photo: [{ required: true, message: "请上传用户照片" }],
  u_name: [{ required: true, message: "请填写用户姓名" }],
  u_email: [{ required: true, message: "请填写邮箱" }]
});

interface DrawerProps {
  title: string;
  isView: boolean;
  row: Partial<User.ResUserList>;
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}

const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  row: {}
});

const isShow = computed(() => {
  return drawerProps.value.title == "新增";
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
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
      drawerProps.value.row.u_token = "";
      drawerProps.value.row.createTime = "";
      await drawerProps.value.api!(drawerProps.value.row);
      ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
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
