# BusinessJungle - 用户注册系统

瑞典语的远程任务与报名页面（合规表述）

## 🌐 在线访问

访问网站：`https://你的用户名.github.io/jixu/`

## 📁 文件说明

- `index.html` - 用户注册页面
- `search.html` - 管理员搜索页面
- `styles.css` - 样式文件
- `script.js` - JavaScript功能

## 🚀 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库
1. 访问 https://github.com
2. 登录或注册账号
3. 点击右上角 "+" → "New repository"
4. 仓库名称：`jixu`
5. 选择 "Public"（公开）
6. 点击 "Create repository"

### 步骤 2: 推送代码
在当前文件夹运行以下命令：

```bash
git remote add origin https://github.com/你的用户名/jixu.git
git branch -M main
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages
1. 进入仓库页面
2. 点击 "Settings"（设置）
3. 左侧菜单找到 "Pages"
4. Source 选择 "main" 分支
5. 点击 "Save"
6. 等待几分钟，网站就上线了！

## 🔗 管理员访问

管理员搜索页面：`https://你的用户名.github.io/jixu/search.html`

## 📊 功能特性

- ✅ 用户报名表单（意向收集）
- ✅ 数据本地存储（localStorage）
- ✅ 管理员搜索和筛选
- ✅ CSV 导出功能
- ✅ 响应式设计
- ✅ 瑞典语界面

## 📝 注意事项

**重要**：localStorage 数据存储在用户浏览器本地，不同浏览器/设备的数据不共享。

如需真正的数据库支持，需要使用后端服务（如 Firebase、Supabase 等）。

---

Made with ❤️ by BusinessJungle
