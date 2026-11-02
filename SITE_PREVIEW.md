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
- `_config.yml` — GitHub Pages 使用的 Jekyll 配置。
- `.github/workflows/pages.yml` — 只做资源与链接检查，不负责部署。

## 构建与发布

仓库的 GitHub Pages 发布来源是 `main` 分支根目录，使用 GitHub Pages 自动生成的 Jekyll 工作流：

1. 向 `main` 推送页面、资源或配置改动。
2. GitHub Pages 自动运行 `pages build and deployment`。
3. Jekyll 读取根目录的 `index.html`、`assets/` 和本文件中的配置并发布。
4. 独立的 `Validate Persona Distill` 工作流检查七个分享链接与关键资源，不执行第二次部署。

早期 Hexo 文件作为历史脚手架保留，但已从公开构建中排除。Hexo Git 部署配置已经移除；**不要运行 `hexo deploy` 或 `npm run deploy`**。

## 本地预览

无需安装依赖，可在仓库根目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 回滚

若新版本异常，可在 GitHub 上 revert 对应的 `main` 提交。Pages 自动构建会重新发布回滚后的版本。
