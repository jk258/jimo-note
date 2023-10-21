# 创建虚拟环境

## virtual environment

python 的一个内置特性，它可以让你在一个目录中保持独立的软件包环境而不影响其他的项目  
将虚拟环境都放在一个位置是明智的做法，例如将它们放置在你主目录下的 `.virtualenvs/ ` 中

## 创建虚拟环境
```bash
python -m venv .virtualenvs
```

## 激活虚拟环境
```bash
source .virtualenvs/bin/activate
```
如果 source 命令不可用，可以试试
```bash
. .virtualenvs/bin/activate
```
每当打开一个新的终端窗口，都必须先激活虚拟环境  
在 Windows 下采用如下命令进行激活虚拟环境：
```bash
.virtualenvs/Scripts/activate
```
## 退出虚拟环境
```bash
deactivate
```
