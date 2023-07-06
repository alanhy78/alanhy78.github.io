---
description: Docker part1
id: part1
---

# 基本使用

## 安装

- **Ubuntu**：
  - 一键安装：`bash <(curl -Ls https://get.docker.com)`
  - 手动安装：
    - `sudo apt update`
    - `sudo apt install apt-transport-https ca-certificates curl software-properties-common`
    - `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
    - `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"`
    - `apt-cache policy docker-ce`
    - `sudo apt install docker-ce`

- **CentOS**：
  - 一键安装：`bash <(curl -Ls https://get.docker.com)`
  - 手动安装：

- **Debian**：
  - 一键安装：`bash <(curl -Ls https://get.docker.com)`
  - 手动安装：
    - `sudo apt update`
    - `sudo apt install apt-transport-https ca-certificates curl gnupg2 software-properties-common`
    - `curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -`
    - `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"`
    - `sudo apt update`
    - `apt-cache policy docker-ce`
    - `sudo apt install docker-ce`

## 常用命令

- **停止所有容器**： `docker stop $(docker ps -aq)`

- **删除所有容器**：`docker rm $(docker ps -aq)`

- **删除所有镜像**：`docker rmi  $(docker images -q)`
