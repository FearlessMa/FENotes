# 登录

### 登录

接口： POST `/uac/wapi/account/user/login`

入参：

```json
{
    "account": "13800001111",
    "password": "52c6a16aca3236d40430261e004cafb261759bb6"
}
```

返回参数：

```json
{
    "code": 0,  # 如果不是0，则登录失败
    "msg": "OK",
    "data": {
        "id": 595,
        "uid": "",
        "email": "123@qq.com",
        "phone": "admin",
        "imei": null,
        "clientId": null,
        "onlineStatus": 1,
        "password": "{bcrypt}$2a$10$KEcbhLohqvT0jxis9mR.j.lHe9HuZwt548BIqZe/SiRMdYUN5U33y",
        "token": "",
        "admin": 0,
        "companyId": 0,
        "createDate": 0,
        "updateDate": 0,
        "onlineDate": 1607073085421,
        "status": "N",
        "positionId": null,
        "roleList": null,
        "enabled": true,
        "username": "admin",
        "authorities": null,
        "accountNonExpired": true,
        "credentialsNonExpired": true,
        "accountNonLocked": true
    }
}
```

### 登出

接口：POST `/uac/wapi/account/user/logout`

无参数



# 用户管理

### 添加用户

接口：POST `/uac/wapi/account/add`

入参：

```json
{
    "email": "123@qq.com",
    "phone": "17319956122",
    "admin" : 0 # 0 普通用户 1 管理员 2超级管理员
}
```

### 查询用户

接口：POST  `/uac/wapi/account/query`

入参：

```json
{
    "id" : 1, # 查询一条
    "phone": "" # 按照手机号查询
}
```

接口：POST  `/uac/wapi/account/all`

入参：

```json
{
    "offset" : 1 ,
    "limit" : 10
}
```

返回参数：

```json
{
    "code": 0,
    "msg": "OK",
    "data": {
        "total": 30,
        "objs": [
            {
                "id": 520,
                "uid": "uid17896060074",
                "email": "17319956122@qq.com",
                "phone": "17319956122",
                "imei": "",
                "clientId": "",
                "onlineStatus": 1,
                "password": "{bcrypt}$2a$10$IlUKEE7q0Q3rShyJT2Q.A.KWBzOUTSzruaMDb9di.eYRCJKa2B3p.",
                "token": "82ec7fd5-9062-42f6-bb4c-e550fac57a91",
                "admin": 2,
                "companyId": 0,
                "createDate": 1594622366658,
                "updateDate": 1602472608354,
                "onlineDate": 1607071989943,
                "status": "N"
            }
        ]
    }
}
```



### 更新用户

接口: POST  `/uac/wapi/account/update`

入参：

```
{
	"id" : 1,
    "email": "123@qq.com",
    "admin" : 0
}
```

### 删除用户

接口：POST `/uac/wapi/account/delete?id=xxx`

### 修改密码

接口: POST  `/uac/wapi/account/user/modify_password`

入参：

```json
{
    "phone" : "12345678910",
    "oldpassword" : "52c6a16aca3236d40430261e004cafb261759bb6",
    "newpassword" : "52c6a16aca3236d40430261e004cafb261759bb6"
}
```

## 1.添加设备
### 请求路径：/side-manager/api/manager/v1/device/add
### 请求方式: POST
### 请求参数
| 参数          | 是否必须 | 说明                                             |
| ------------- | -------- | ------------------------------------------------ |
| deviceId      | 是       | hub设备的Id                                      |
| deviceType    | 是       | 设备类型                                         |
| superDeviceId | 否       | 上级设备，如果有上级设备（边端机），带上边端机Id |


示例：
```json
{
    "deviceId":"10000000000",
    "deviceType":"IPC",
    "superDeviceId":"10000000011"
}
```

### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": null
}
```


## 2.删除设备
### 请求路径：/side-manager/api/manager/v1/device/delete
### 请求方式: POST
### 请求参数
| 参数     | 是否必须 | 说明   |
| -------- | -------- | ------ |
| deviceId | 是       | 设备Id |


示例：
```json
{
    "deviceId":"10000000000"
}
```

### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": null
}
```


## 3.查询设备
### 请求路径：/side-manager/api/manager/v1/device/find
### 请求方式: POST
### 请求参数
| 参数          | 是否必须 | 说明       |
| ------------- | -------- | ---------- |
| deviceId      | 否       | 设备Id     |
| deviceType    | 否       | 设备类型   |
| superDeviceId | 否       | 上级设备Id |


示例：
```json
{
    "deviceId":"10000000000",
    "deviceType": "IPC",
    "superDeviceId": "10000000011"
}
```

### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": [
        {
            "id": 8,
            "deviceId": "10000000000",
            "deviceType": "IPC",
            "superDeviceId": "10000000011",
            "time": 1606966681725,
            "online": false
        }
    ]
}
```


## 4.查询设备数量
### 请求路径：/side-manager/api/manager/v1/device/count
### 请求方式: POST
### 请求参数
| 参数       | 是否必须 | 说明     |
| ---------- | -------- | -------- |
| deviceType | 否       | 设备类型 |



示例：
```json
{
    "deviceType":"IPC"
}
```

### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": {
        "deviceType": "IPC",
        "onLineCount": 0,
        "count": 1
    }
}
```

## 5.添加视频流地址
### 请求路径：/side-manager/api/manager/v1/route/add
### 请求方式: POST
### 请求参数
| 参数  | 是否必须 | 说明       |
| ----- | -------- | ---------- |
| route | 是       | 视频流地址 |



示例：
```json
{
    "route":"www.baidu.com"
}
```

### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": null
}
```

## 6.删除视频流地址
### 请求路径：/side-manager/api/manager/v1/route/delete
### 请求方式: POST
### 请求参数
| 参数 | 是否必须 | 说明         |
| ---- | -------- | ------------ |
| id   | 是       | 视频流地址id |



示例：
```json
{
    "id":1
}
```

### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": null
}
```


## 7.查询所有视频流地址
### 请求路径：/side-manager/api/manager/v1/route/find
### 请求方式: POST
### 无请求参数


### 返回说明
| 参数 | 说明                |
| ---- | ------------------- |
| code | 0,成功,其他为错误码 |
| data | 返回数据            |

示例：
```json
{
    "code": 0,
    "msg": "OK",
    "data": [
        {
            "id": 2,
            "route": "www.baidu.com"
        },
        {
            "id": 3,
            "route": "www.baidu.com"
        }
    ]
}
```