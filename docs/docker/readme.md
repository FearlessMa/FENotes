
# Docker

1. 构建镜像

   ```bash
   docker build -t 镜像名称 .
   ```

   注意 最后有一个`.`

2. 删除镜像

   ```bash
   docker rmi  IMAGES_ID
   ```

3. 查看、停用、删除容器

   ```bash
   docker ps -a | grep 容器name
   docker stop CONTAINER_ID
   docker rm  CONTAINER_ID
   ```

4. 启动镜像中的命令行

   ```bash
    docker exec -it + 容器名（或id） bash
   ```

5. run

   ```bash
   docker run -d -p 8080:80 --name webserver nginx
   ```

   `-p`参数中，第一个端口是暴露在外面的端口，外面可以访问的端口。

   至于`-d`嘛，就是以守护态运行。

   ```shell
   COMMAND                  CREATED             STATUS              PORTS                    NAMES
   feab724df3b6        mysql               "docker-entrypoint..."   3 seconds ago       Up 2 seconds        0.0.0.0:3306->3306/tcp   some-mysql
   ```

   端口那个部分由`3306/tcp`变成了`0.0.0.0:3306->3306/tcp`。

   `0.0.0.0`表示外部的主机能访问到

6. rm

   ```bash
   docker rm -f $(docker ps -a | grep Exit | awk '{ print $1 }')
   ```

   清除所有已退出的容器
