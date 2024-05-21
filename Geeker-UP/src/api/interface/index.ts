// 请求响应参数（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
  export interface User_Info {
    u_id: string;
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    u_name: string;
    u_email: string;
    createTime: string[];
    status: number;
  }
  export interface ResUserList {
    u_id: number;
    u_name: string;
    u_pwd: String;
    u_email: string;
    userdpt: string;
    u_token: string;
    createTime: string;
    status: number;
    avatar: string;
    photo: string; //暂时将类型改为string，原来定义的类型是any[]类型
    children?: ResUserList[];
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}
