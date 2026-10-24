# 角色图片与赞助码上传说明

网站页面和样式已经更新在当前分支。图片请严格使用提供的原图优化版本，不要使用生成的概念图替代。

上传以下三个文件到当前分支（解压 `persona-distill-assets.zip`，保留其中的目录结构）：

- `assets/characters/suoming.webp` — 锁暝，原始第一张立绘
- `assets/characters/xilian.webp` — 昔涟，作者最新上传的手捧书本图，替换此前 Q 版图
- `assets/characters/alipay-qr.jpg` — 作者支付宝赞助码

本站源代码已经指向上述三个相对路径。由于当前 GitHub 写入接口只支持 UTF-8 文本，无法直接提交二进制图片，因此**在三张图片上传完成前不得合并此 PR**，否则线上会出现三张加载失败的图片。

三张图片无需添加特殊构建流程；当前 GitHub Pages workflow 的 `cp -R assets _site/assets` 会自动将它们发布。

上传方式：打开 GitHub 仓库并切换到 `feat/character-art-and-support` 分支，选择 Add file → Upload files，拖入解压出的目录/三个文件并确认最终路径。上传后再合并 PR。

特别提醒：支付宝收款二维码是公开收款凭据，上传到公开仓库后任何人都能看到和保存。请只在你愿意公开的前提下发布。