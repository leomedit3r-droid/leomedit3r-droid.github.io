# 角色炼化 / Persona Distill — 网站说明

这是一个以静态页面呈现的角色炼化理念与公开作品索引。它不依赖后端，不提供在线炼化服务，也不把外部对话误称为本站内嵌功能。

## 页面内容

- **首页**：角色炼化理念与人格指纹结构示意；VOICE / BEHAVIOR / CORE 是概念结构，不是实际角色数据。
- **理念**：语言指纹、关系边界、价值与行为决策。
- **方法**：原作锚点 → 分层提炼 → 极简封装与校验。
- **作品预览**：七份公开对话入口，分别托管于 DeepSeek 与智谱清言。
- **赞助**：作者自愿公开的支付宝赞助二维码。

## 七份公开作品

1. 锁暝 — DeepSeek：https://chat.deepseek.com/share/wrhd0bd8jqmj3z5mjm
2. 昔涟 — DeepSeek：https://chat.deepseek.com/share/c2l21x4nznauhoktkh
3. 锁暝 — 智谱清言：https://chatglm.cn/share/IFpaIqlL
4. 昔涟 — 智谱清言：https://chatglm.cn/share/NFpnIqT4
5. 三月七 — 智谱清言：https://chatglm.cn/share/3FpWIqnX
6. 长夜月 — 智谱清言：https://chatglm.cn/share/0FpNIrvZ
7. 爱弥斯 — 智谱清言：https://chatglm.cn/share/6FpDIrgS

链接与角色对应关系按作者提供的信息记录；本站不复制对话正文。外部分享页的可访问性、内容与登录要求由原平台决定。

## 资源说明

- `assets/characters/suoming.webp` — 锁暝立绘。
- `assets/characters/xilian.webp` — 昔涟立绘。
- `assets/characters/sanyueqi.png` — 三月七图片素材。
- `assets/characters/changyeyue.svg` — 长夜月原创抽象占位图，角色立绘待补充。
- `assets/characters/aimisi.svg` — 爱弥斯原创抽象占位图，角色立绘待补充。
- `assets/characters/alipay-qr.jpg` — 支付宝赞助二维码。公开仓库中的二维码可被任何人查看和保存。

长夜月与爱弥斯的 SVG 是明确标注的概念占位图，不是官方立绘，也不应被误认为角色原图。收到作者提供的正式素材后可直接替换对应文件。

## 文件结构

- `index.html` — 页面内容与语义化结构。
- `assets/site.css` — 响应式布局、主题与视觉样式。
- `assets/site.js` — 主题切换、移动导航交互。
- `.github/workflows/pages.yml` — 唯一的 GitHub Pages 发布工作流。

## 构建与发布

本站由 GitHub Actions 发布，而不是 Hexo 生成：

1. 向 `main` 推送页面、资源或 Pages 工作流改动。
2. 工作流检查页面与关键资源是否存在，并校验七个公开分享链接。
3. 工作流把根目录的 `index.html` 和 `assets/` 复制到发布目录。
4. 通过 `actions/deploy-pages` 发布到 GitHub Pages。

也可在 GitHub Actions 页面手动运行 `Deploy Persona Distill to GitHub Pages`。

仓库保留了早期 Hexo 文件作为历史脚手架，但 `_config.yml` 中的 Hexo Git 部署器已禁用。**不要运行 `hexo deploy` 或 `npm run deploy`**；发布统一由上述 Actions 工作流完成。

## 本地预览

无需安装依赖，可在仓库根目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 回滚

网站发布由 GitHub Actions 记录。若新版本异常，可在 GitHub 上 revert 对应的 `main` 合并提交，工作流会自动重新发布回滚后的版本。
