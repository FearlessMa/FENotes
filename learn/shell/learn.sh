#! /bin/sh
#  /bin/sh 是指此脚本使用/bin/sh来解释执行，#!是特殊的表示符，其后面跟的是解释此脚本的shell的路径

set -e
# 你写的每个脚本都应该在文件开头加上set -e,这句语句告诉bash如果任何语句的执行结果不是true则应该退出。

username='abc'

age=20


echo username
echo $username
echo ${username}

# 单引号
echo 'name='$username',age='$age''
echo 'name=${username},age=${age}'
# 双引号
echo "name="$username",age="$age""
echo "name=${username},age=${age}"

# 获取字符串长度

echo "username length ${#username}"
echo "age length ${#age}"

# 提取子字符串
echo -e "username=${username} \n length=${#username} \n slice(1,2):${username:1:2}"

#  -e 开启转义 -c 不换行
echo -e "\n 1 \n"

# 定义数组
arr=(1 2 3 4 5)
echo "数组 arr=${arr[@]},length=${#arr[@]}, arr[0]=${arr[0]}"

# 参数传递
echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
echo "传递参数的个数 $#"
echo "以一个单字符串显示所有向脚本传递的参数: $*"
echo "显示最后命令的退出状态: $?"

# 运算符
# 表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2，这与我们熟悉的大多数编程语言不一样。
# a=$b 将把变量 b 的值赋给 a。

val=`expr 1 + 1 `
echo "val=$val"
a=1
b=2
echo "a+b = `expr $a + $b`"
if [ $a != $b ]
then
  echo "a 不等于 b"
fi

# 关系运算符
# -eq	检测两个数是否相等，相等返回 true。	[ $a -eq $b ] 返回 false。
# -ne	检测两个数是否不相等，不相等返回 true。	[ $a -ne $b ] 返回 true。
# -gt	检测左边的数是否大于右边的，如果是，则返回 true。	[ $a -gt $b ] 返回 false。
# -lt	检测左边的数是否小于右边的，如果是，则返回 true。	[ $a -lt $b ] 返回 true。
# -ge	检测左边的数是否大于等于右边的，如果是，则返回 true。	[ $a -ge $b ] 返回 false。
# -le	检测左边的数是否小于等于右边的，如果是，则返回 true。	[ $a -le $b ] 返回 true。


# 运算符	说明	举例
# !	非运算，表达式为 true 则返回 false，否则返回 true。	[ ! false ] 返回 true。
# -o	或运算，有一个表达式为 true 则返回 true。	[ $a -lt 20 -o $b -gt 100 ] 返回 true。
# -a	与运算，两个表达式都为 true 才返回 true。

# 运算符	说明	举例
# &&	逻辑的 AND	[[ $a -lt 100 && $b -gt 100 ]] 返回 false
# ||	逻辑的 OR	[[ $a -lt 100 || $b -gt 100 ]] 返回 true

# 字符串
# 运算符	说明	举例
# =	检测两个字符串是否相等，相等返回 true。	[ $a = $b ] 返回 false。
# !=	检测两个字符串是否相等，不相等返回 true。	[ $a != $b ] 返回 true。
# -z	检测字符串长度是否为0，为0返回 true。	[ -z $a ] 返回 false。
# -n	检测字符串长度是否不为 0，不为 0 返回 true。	[ -n "$a" ] 返回 true。
# $	检测字符串是否为空，不为空返回 true。	[ $a ] 返回 true。



# 操作符	说明	举例
# -b file	检测文件是否是块设备文件，如果是，则返回 true。	[ -b $file ] 返回 false。
# -c file	检测文件是否是字符设备文件，如果是，则返回 true。	[ -c $file ] 返回 false。
# -d file	检测文件是否是目录，如果是，则返回 true。	[ -d $file ] 返回 false。
# -f file	检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。	[ -f $file ] 返回 true。
# -g file	检测文件是否设置了 SGID 位，如果是，则返回 true。	[ -g $file ] 返回 false。
# -k file	检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。	[ -k $file ] 返回 false。
# -p file	检测文件是否是有名管道，如果是，则返回 true。	[ -p $file ] 返回 false。
# -u file	检测文件是否设置了 SUID 位，如果是，则返回 true。	[ -u $file ] 返回 false。
# -r file	检测文件是否可读，如果是，则返回 true。	[ -r $file ] 返回 true。
# -w file	检测文件是否可写，如果是，则返回 true。	[ -w $file ] 返回 true。
# -x file	检测文件是否可执行，如果是，则返回 true。	[ -x $file ] 返回 true。
# -s file	检测文件是否为空（文件大小是否大于0），不为空返回 true。	[ -s $file ] 返回 true。
# -e file	检测文件（包括目录）是否存在，如果是，则返回 true。	[ -e $file ] 返回 true。


filePath="./learn.sh"

if [ -f $filePath ]
then
echo "$filePath 是普通文件"
fi

# read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量
# read name
# echo $name

# 显示结果定向至文件 >
fileName="./echo.txt"
# 检测 echo.txt 是否存在
if [[ -w $fileName  && -f $fileName ]]
then
echo "$fileName 可写"
# 输入到指定文件
echo $name > $fileName
else
echo "$fileName 不可写"
fi

# 显示命令执行结果
echo `date`

# printf 
# %s %c %d %f都是格式替代符
# %-10s 指一个宽度为10个字符（-表示左对齐，没有则表示右对齐），任何字符都会被显示在10个字符宽的字符内，
# 如果不足则自动以空格填充，超过也会将内容全部显示出来。
# %-4.2f 指格式化为小数，其中.2指保留2位小数

printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234 
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543 
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876 

# Shell中的 test 命令用于检查某个条件是否成立，它可以进行数值、字符和文件三个方面的测试。

num1="ru1noob"
num2="runoob"
if test $num1 = $num2
then
  echo '两个字符串相等!'
else
  echo '两个字符串不相等!'
fi

# if else-if else
# if else-if else 语法格式：
# if condition1
# then
#     command1
# elif condition2 
# then 
#     command2
# else
#     commandN
# fi


# for 循环

for loop in 1 2 3 4 5
do
echo $loop
done

# while 
# 以上实例使用了 Bash let 命令，它用于执行一个或多个表达式，变量计算中不需要加上 $ 来表示变量，具体可查阅：Bash let 命令

int=1

while ((int<5))
do
echo "int=$int"
# let "int++"
int=`expr $int + 1`
done

# case
# case ... esac 与其他语言中的 switch ... case 语句类似，是一种多分枝选择结构，
# 每个 case 分支用右圆括号开始，用两个分号 ;; 表示 break，即执行结束，跳出整个 case ... esac 语句，
# esac（就是 case 反过来）作为结束标记。



# echo '输入 1 到 4 之间的数字:'
# echo '你输入的数字为:'
# read aNum
# case $aNum in
#     1)  echo '你选择了 1'
#     ;;
#     2)  echo '你选择了 2'
#     ;;
#     3)  echo '你选择了 3'
#     ;;
#     4)  echo '你选择了 4'
#     ;;
#     *)  echo '你没有输入 1 到 4 之间的数字'
#     ;;
# esac


# linux shell 可以用户定义函数，然后在shell脚本中可以随便调用。
# shell中函数的定义格式如下：
# [ function ] funname [()]
# {
#     action;
#     [return int;]
# }
# 说明：
# 1、可以带function fun() 定义，也可以直接fun() 定义,不带任何参数。
# 2、参数返回，可以显示加：return 返回，如果不加，将以最后一条命令运行结果，作为返回值。 return后跟数值n(0-255

demoFun(){
    echo "这是我的第一个 shell 函数!"
}
echo "-----函数开始执行-----"
demoFun
echo "-----函数执行完毕-----"

# 函数参数

funWithParam(){
    echo "第一个参数为 $1 !"
    echo "第二个参数为 $2 !"
    echo "第十个参数为 $10 !"
    echo "第十个参数为 ${10} !"
    echo "第十一个参数为 ${11} !"
    echo "参数总数有 $# 个!"
    echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73

# 大多数 UNIX 系统命令从你的终端接受输入并将所产生的输出发送回​​到您的终端。
# 一个命令通常从一个叫标准输入的地方读取输入，默认情况下，这恰好是你的终端。
# 同样，一个命令通常将其输出写入到标准输出，默认情况下，这也是你的终端。

# 重定向命令列表如下：

# 命令	说明
# command > file	将输出重定向到 file。
# command < file	将输入重定向到 file。
# command >> file	将输出以追加的方式重定向到 file。
# n > file	将文件描述符为 n 的文件重定向到 file。
# n >> file	将文件描述符为 n 的文件以追加的方式重定向到 file。
# n >& m	将输出文件 m 和 n 合并。
# n <& m	将输入文件 m 和 n 合并。
# << tag	将开始标记 tag 和结束标记 tag 之间的内容作为输入。
# 需要注意的是文件描述符 0 通常是标准输入（STDIN），1 是标准输出（STDOUT），2 是标准错误输出（STDERR）。

name='123'
# 重定向输出
echo $name > "echo.txt"
echo $name >> "echo.txt"
# 重定向输入

# 文件执行命令
wc -l < "a.txt"
#  将文件执行命令结果输出到文件
# command < file1 >file2
# command 命令将 stdin 重定向到 file1，将 stdout 重定向到 file2。

wc -l < "a.txt" > echo.txt

# a < "a.txt"

# b << "a.txt"
# b << delimiter
#     "a.txt"
# delimiter

cat "echo.txt"

cat < "a.txt" > "echo.txt"

echo "cat a.txt 到 echo.txt"
cat "echo.txt"

# /dev/null 文件
# 如果希望执行某个命令，但又不希望在屏幕上显示输出结果，那么可以将输出重定向到 /dev/null：

echo "cat 命令执行结果不显示在命令行"
cat "echo.txt" > /dev/null
echo "cat 执行结束"

# 重定向深入讲解
# 一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：
# 标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。
# 标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。
# 标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。
# 默认情况下，command > file 将 stdout 重定向到 file，command < file 将stdin 重定向到 file。
# 如果希望 stderr 重定向到 file，可以这样写：
#  command 2 > file
# 如果希望 stderr 追加到 file 文件末尾，可以这样写：
#  command 2 >> file
# 2 表示标准错误文件(stderr)。
# 如果希望将 stdout 和 stderr 合并后重定向到 file，可以这样写：
# $ command > file 2>&1
# 或者
# $ command >> file 2>&1
# 如果希望对 stdin 和 stdout 都重定向，可以这样写：
# $ command < file1 >file2
# command 命令将 stdin 重定向到 file1，将 stdout 重定向到 file2。


# 读取文件

echo "读取文件"
while read line
do
echo $line
done < test.txt
echo "读取文件结束"
