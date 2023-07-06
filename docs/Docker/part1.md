---
description: Docker part1
id: part1
---

# 基本使用

## 安装

- **Ubuntu**：
  - 一键安装：`bash <(curl -Ls https://get.docker.com)`
  - 手动安装：`apt-get update && apt-get install docker-ce docker-ce-cli containerd.io`

## 常用命令

- **停止所有容器**： `docker stop $(docker ps -aq)`

- **删除所有容器**：`docker rm $(docker ps -aq)`

- **删除所有镜像**：`docker rmi  $(docker images -q)`
