# Geeker-Admin

### ���� ??

Geeker-Admin һ����� Vue3.4��TypeScript��Vite5��Pinia��Element-Plus ��Դ�ĺ�̨�����ܣ�ʹ��Ŀǰ���¼���ջ��������Ŀ�ṩǿ��� [ProTable](https://juejin.cn/post/7166068828202336263) �������һ���̶���������Ŀ���Ч�ʡ����Ȿ��Ŀ����װ��һЩ���������Hooks��ָ���̬·�ɡ���ť����Ȩ�޿��Ƶȹ��ܡ�

### React �汾 ??

- ����Ҫ��ӵײ�΢���˽⡢����

- Link��https://pro.spicyboy.cn

### ����Ԥ�� ??

- Link��https://admin.spicyboy.cn

### ����ֿ� ?

- Gitee��https://gitee.com/HalseySpicy/Geeker-Admin
- GitHub��https://github.com/HalseySpicy/Geeker-Admin

### ��Ŀ�ĵ� ??

- ��Ŀ������־��[CHANGELOG.md](./CHANGELOG.md)

- ��Ŀ�ĵ���ַ��https://docs.spicyboy.cn

### ��Ŀ���� ??

- ʹ�� Vue3.4 + TypeScript ���������ļ����**��script setup��**
- ���� Vite5 ��Ϊ��Ŀ������������ߣ����� gzip/brotli �����tsx �﷨�����������
- ʹ�� Pinia ��� Vuex���������򵥡����ã����� Pinia �־û����
- ʹ�� TypeScript �� Axios �������η�װ���������ء�ȡ�������������װ����
- ���� Element ���η�װ [ProTable](https://juejin.cn/post/7166068828202336263) ��������ҳ��ȫ��Ϊ������ Columns
- ֧�� Element �����С�л��������Ⲽ�֡�����ģʽ��i18n ���ʻ�
- ʹ�� VueRouter ���ö�̬·��Ȩ�����ء�·�������أ�֧��ҳ�水ťȨ�޿���
- ʹ�� KeepAlive ��ҳ����л��棬֧�ֶ༶Ƕ��·�ɻ���
- �����Զ���ָ�����Ȩ�ޡ����ơ�ˮӡ����ק����������������������
- ʹ�� Prettier ͳһ��ʽ�����룬���� ESLint��Stylelint ����У��淶
- ʹ�� husky��lint-staged��commitlint��czg��cz-git �淶�ύ��Ϣ

### ��װʹ�ò��� ??

- **Clone��**

```text
# Gitee
git clone https://gitee.com/HalseySpicy/Geeker-Admin.git
# GitHub
git clone https://github.com/HalseySpicy/Geeker-Admin.git
```

- **Install��**

```text
pnpm install
```

- **Run��**

```text
pnpm dev
pnpm serve
```

- **Build��**

```text
# ��������
pnpm build:dev

# ���Ի���
pnpm build:test

# ��������
pnpm build:pro
```

- **Lint��**

```text
# eslint ������
pnpm lint:eslint

# prettier ��ʽ������
pnpm lint:prettier

# stylelint ��ʽ����ʽ
pnpm lint:stylelint
```

- **commit��**

```text
# �ύ���루�ύǰ���Զ�ִ�� lint:lint-staged ���
pnpm commit
```

### ��Ŀ��ͼ ??

- ��¼ҳ��

![login_light](https://i.imgtg.com/2023/04/13/8tknp.png)

![login_dark](https://i.imgtg.com/2023/04/13/8tmpP.png)

- ��ҳ��

![home_light](https://i.imgtg.com/2023/04/13/8tl1j.png)

![home_dark](https://i.imgtg.com/2023/04/13/8tpfb.png)

- ���ҳ��

![table_light](https://i.imgtg.com/2023/04/13/8tfMx.png)

![table_dark](https://i.imgtg.com/2023/04/13/8tv8F.png)

- ���ݿ��ӻ�

![dashboard](https://i.imgtg.com/2023/04/14/82Grx.png)

- ���ݴ�����

![dataScreen](https://i.imgtg.com/2023/01/16/QP8HF.png)

### �ļ���ԴĿ¼ ??

```text
Geeker-Admin
���� .husky                  # husky �����ļ�
���� .vscode                 # VSCode �Ƽ�����
���� build                   # Vite ������
���� public                  # ��̬��Դ�ļ������ļ��в��ᱻ�����
���� src
��  ���� api                  # API �ӿڹ���
��  ���� assets               # ��̬��Դ�ļ�
��  ���� components           # ȫ�����
��  ���� config               # ȫ��������
��  ���� directives           # ȫ��ָ���ļ�
��  ���� enums                # ��Ŀ����ö��
��  ���� hooks                # ���� Hooks ��װ
��  ���� languages            # ���Թ��ʻ� i18n
��  ���� layouts              # ��ܲ���ģ��
��  ���� routers              # ·�ɹ���
��  ���� stores               # pinia store
��  ���� styles               # ȫ����ʽ�ļ�
��  ���� typings              # ȫ�� ts ����
��  ���� utils                # ���ù��߿�
��  ���� views                # ��Ŀ����ҳ��
��  ���� App.vue              # ��Ŀ�����
��  ���� main.ts              # ��Ŀ����ļ�
��  ���� vite-env.d.ts        # ָ�� ts ʶ�� vue
���� .editorconfig           # ͳһ��ͬ�༭���ı�����
���� .env                    # vite ��������
���� .env.development        # ������������
���� .env.production         # ������������
���� .env.test               # ���Ի�������
���� .eslintignore           # ���� Eslint У��
���� .eslintrc.cjs           # Eslint У�������ļ�
���� .gitignore              # ���� git �ύ
���� .prettierignore         # ���� Prettier ��ʽ��
���� .prettierrc.cjs         # Prettier ��ʽ������
���� .stylelintignore        # ���� stylelint ��ʽ��
���� .stylelintrc.cjs        # stylelint ��ʽ��ʽ������
���� CHANGELOG.md            # ��Ŀ������־
���� commitlint.config.cjs   # git �ύ�淶����
���� index.html              # ��� html
���� LICENSE                 # ��ԴЭ���ļ�
���� lint-staged.config.cjs  # lint-staged �����ļ�
���� package-lock.json       # ���������汾��
���� package.json            # ����������
���� postcss.config.cjs      # postcss ����
���� README.md               # README ����
���� tsconfig.json           # typescript ȫ������
���� vite.config.ts          # vite ȫ�������ļ�
```

### �����֧�� ??

- ���ؿ����Ƽ�ʹ�� Chrome ���°������ [Download](https://www.google.com/intl/zh-CN/chrome/)��
- ��������֧���ִ������������֧�� IE �������������������Բ鿴 [Can I Use Es Module](https://caniuse.com/?search=ESModule)��

| ![IE](https://i.imgtg.com/2023/04/11/8z7ot.png) | ![Edge](https://i.imgtg.com/2023/04/11/8zr3p.png) | ![Firefox](https://i.imgtg.com/2023/04/11/8zKiU.png) | ![Chrome](https://i.imgtg.com/2023/04/11/8zNrx.png) | ![Safari](https://i.imgtg.com/2023/04/11/8zeGj.png) |
| :---------------------------------------------: | :-----------------------------------------------: | :--------------------------------------------------: | :-------------------------------------------------: | :-------------------------------------------------: |
|                   not support                   |                  last 2 versions                  |                   last 2 versions                    |                   last 2 versions                   |                   last 2 versions                   |

### ��Ŀ��̨�ӿ� ??

��Ŀ��̨�ӿ���ȫ���� Mock ���ݣ���л���� Mock ƽ̨֧�֣�

- FastMock�� https://www.fastmock.site
- EasyMock��https://mock.mengxuegu.com

### ΢�Ž���Ⱥ ???????????

΢��һȺ����Ⱥ����Ⱥ����Ⱥ������ɨ���ά�������Ⱥ��֧��֪ʶ���ѣ�??

|                                      ΢�Ŷ�ά��                                       |
| :-----------------------------------------------------------------------------------: |
| <img src="https://pic.ziyuan.wang/user/guest/2024/01/66_128f4a1d5a4bc.png" width=170> |

### ���� ??

���������ʹ�������Ŀ����ϲ�������Ŀ�ģ�����ͨ�����·�ʽ֧���ң�

- Star��Fork��Watch һ������ ??
- ͨ��΢�š�֧����һ���Ծ�� ?

|                                        ΢��                                        |                                       ֧����                                       |
| :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |
| <img src="https://i.imgtg.com/2023/01/16/QRzBX.png" alt="Alipay QRcode" width=170> | <img src="https://i.imgtg.com/2023/01/16/QRFZt.png" alt="Wechat QRcode" width=170> |
