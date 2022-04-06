## 项目介绍

koa2+TypeScript实现的api和html服务模板。

## 技术架构

### 技术栈

- koa2
- TypeScript
- ESLint
- ejs

### 内置中间件

- koa-body
- koa-router
- koa-static
- koa-views
- koa-logger

## 快速上手

### 运行服务

```shell
npm run start
```

### 代码规范检查

```shell
npm run lint
npm run lint:fix
```

## 项目结构

```bash
koa-ts-template
├─views                   // 模板文件
|   ├─index.ejs
|   ├─signin-failed.ejs
|   ├─signin-ok.ejs
|   └signin.ejs
├─route                   // 路由配置
|   ├─api.ts              // api路由
|   ├─html.ts             // html路由
|   └index.ts
├─public                  // 静态资源
|   └root.txt
├─controller              // 逻辑控制
|     ├─html              // html逻辑
|     |  ├─index.ts
|     |  └signin.ts
|     ├─api                // api逻辑
|     |  ├─signin.ts
|     |  └user.ts
├─.vscode
|    └settings.json
├─app.ts                   // 入口文件
├─.eslintignore
├─.eslintrc.js
├─README.md
├─package-lock.json
├─package.json
├─result.txt
├─tsconfig.json
```

