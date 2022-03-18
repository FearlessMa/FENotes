(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{498:function(s,a,e){"use strict";e.r(a);var t=e(34),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"dockerfile-构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-构建镜像"}},[s._v("#")]),s._v(" Dockerfile 构建镜像")]),s._v(" "),e("h2",{attrs:{id:"dockerfile-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-命令"}},[s._v("#")]),s._v(" Dockerfile 命令")]),s._v(" "),e("h3",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[s._v("#")]),s._v(" FROM")]),s._v(" "),e("ul",[e("li",[s._v("在 Dockerfile 里，我们可以通过 FROM 指令指定一个基础镜像，接下来所有的指令都是基于这个镜像所展开的。在镜像构建的过程中，Docker 也会先获取到这个给出的基础镜像，再从这个镜像上进行构建操作。")])]),s._v(" "),e("p",[s._v("``")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" <image> [AS <name>]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" <image>[:<tag>] [AS <name>]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" <image>[@<digest>] [AS <name>]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[s._v("#")]),s._v(" RUN")]),s._v(" "),e("ul",[e("li",[s._v("镜像的构建虽然是按照指令执行的，但指令只是引导，最终大部分内容还是控制台中对程序发出的命令，而 RUN 指令就是用于向控制台发送命令的指令。在 RUN 指令之后，我们直接拼接上需要执行的命令，在构建时，Docker 就会执行这些命令，并将它们对文件系统的修改记录下来，形成镜像的变化。")])]),s._v(" "),e("p",[s._v("")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" <command>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"entrypoint-和-cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-和-cmd"}},[s._v("#")]),s._v(" ENTRYPOINT 和 CMD")]),s._v(" "),e("ul",[e("li",[s._v("基于镜像启动的容器，在容器启动时会根据镜像所定义的一条命令来启动容器中进程号为 1 的进程。而这个命令的定义，就是通过 Dockerfile 中的 ENTRYPOINT 和 CMD 实现的。")]),s._v(" "),e("li",[s._v("ENTRYPOINT 指令和 CMD 指令的用法近似，都是给出需要执行的命令，并且它们都可以为空，或者说是不在 Dockerfile 里指出。当 ENTRYPOINT 与 CMD 同时给出时，CMD 中的内容会作为 ENTRYPOINT 定义命令的参数，最终执行容器启动的还是 ENTRYPOINT 中给出的命令。")])]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" command param1 param2")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"executable"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param1"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param2"')]),s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" command param1 param2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"expose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" EXPOSE")]),s._v(" "),e("ul",[e("li",[s._v("由于我们构建镜像时更了解镜像中应用程序的逻辑，也更加清楚它需要接收和处理来自哪些端口的请求，所以在镜像中定义端口暴露显然是更合理的做法。通过 EXPOSE 指令就可以为镜像指定要暴露的端口。")]),s._v(" "),e("li",[s._v("当我们通过 EXPOSE 指令配置了镜像的端口暴露定义，那么基于这个镜像所创建的容器，在被其他容器通过 "),e("code",[s._v("--link")]),s._v(" 选项连接时，就能够直接允许来自其他容器对这些端口的访问了。")])]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" <port> [<port>/<protocol>...]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"volume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),e("ul",[e("li",[s._v("VOLUME 指令来定义基于此镜像的容器所自动建立的数据卷，在 VOLUME 指令中定义的目录，在基于新镜像创建容器时，会自动建立为数据卷，不需要我们再单独使用 "),e("code",[s._v("-v")]),s._v(" 选项来配置了。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('VOLUME ["/data"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"copy-和-add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copy-和-add"}},[s._v("#")]),s._v(" COPY 和 ADD")]),s._v(" "),e("ul",[e("li",[s._v("在制作新的镜像的时候，我们可能需要将一些软件配置、程序代码、执行脚本等直接导入到镜像内的文件系统里，使用 COPY 或 ADD 指令能够帮助我们直接从宿主机的文件系统里拷贝内容到镜像里的文件系统中。")]),s._v(" "),e("li",[s._v("对比 COPY 与 ADD，两者的区别主要在于 ADD 能够支持使用网络端的 URL 地址作为 src 源，并且在源文件被识别为压缩包时，自动进行解压，而 COPY 没有这两个能力。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('COPY [--chown=<user>:<group>] <src>... <dest>\nADD [--chown=<user>:<group>] <src>... <dest>\n\nCOPY [--chown=<user>:<group>] ["<src>",... "<dest>"]\nADD [--chown=<user>:<group>] ["<src>",... "<dest>"]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"构建镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[s._v("#")]),s._v(" 构建镜像")]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("docker build")]),s._v(" 可以接收一个参数，需要特别注意的是，这个参数为一个目录路径 ( 本地路径或 URL 路径 )，而并非 Dockerfile 文件的路径。在 "),e("code",[s._v("docker build")]),s._v(" 里，这个我们给出的目录会作为构建的环境目录，我们很多的操作都是基于这个目录进行的。")])]),s._v(" "),e("li",[e("p",[s._v("例如，在我们使用 COPY 或是 ADD 拷贝文件到构建的新镜像时，会以这个目录作为基础目录。")])]),s._v(" "),e("li",[e("p",[s._v("在默认情况下，"),e("code",[s._v("docker build")]),s._v(" 也会从这个目录下寻找名为 Dockerfile 的文件，将它作为 Dockerfile 内容的来源。如果我们的 Dockerfile 文件路径不在这个目录下，或者有另外的文件名，我们可以通过 "),e("code",[s._v("-f")]),s._v(" 选项单独给出 Dockerfile 文件的路径。")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker build -t webapp:latest -f ./webapp/a.Dockerfile ./webapp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("当然，在构建时我们最好总是携带上 "),e("code",[s._v("-t")]),s._v(" 选项，用它来指定新生成镜像的名称。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker build -t webapp:latest ./webapp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰docker"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);