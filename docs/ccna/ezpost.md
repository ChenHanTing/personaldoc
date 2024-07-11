我可以幫您將這個文件整理成一個更易讀、更易理解的格式。以下是一個整理後的版本：

---

### Cisco 設備設置指南 - 三重世紀登峰EZPost

#### 初始設置
**重置設備：**

```shell
wr erase
reload
yes yes confirm
```

先`wr erase`

![image-20240711084936396](https://ntpe.cht.com.tw/uploads/images/image-20240711084936396.png) 

再執行 `yes yes confirm` 的動作

![image-20240711085436363](https://ntpe.cht.com.tw/uploads/images/image-20240711085436363.png) 

confirm 那邊直接按enter就可以了，不要試著想打`confirm`   

**重新開機並建立帳號密碼：**

```shell
username: cisco
password: cisco
```
初次配置時選擇 `no`：
```
Would you like to enter the initial configuration dialog? [yes/no]: no
```

**連接網路線：**使用設備的 GE1 port 代替 WAN GE0，連接到數據機的 LAN port。

**使用 Cisco Configuration Professional 重設密碼：**

```shell
en
conf t
username cisco privilege 15 password 0 cisco
enable password 0 cisco
service password-encryption
clock timezone TPE 8
exit
```

#### 時間設置
**設置時鐘：**

```shell
clock set 17:35:00 17 Jan 2020
clock update-calendar
```

#### 基本配置
**禁用 IP 域名查找：**

```shell
conf t
no ip domain lookup
ntp server 10.203.249.254
ntp server 10.203.252.254 prefer
hostname r244103CA0007
```

**設置遠程登錄：**

```shell
line vty 0 4
login local
transport input all
exit
```

#### VLAN 配置
**VLAN 990 配置：**

```shell
vlan 990
int G 1
switchport access vlan 990
no shut
```

**VLAN 998 配置：**

```shell
vlan 998
int range G 2 - 4
switchport access vlan 998
no shut
exit
```

**關閉端口的電源：**

```shell
int range G 1 - 4
power inline never
exit
```

**配置接口 Vlan990：**

```shell
interface Vlan990
description Connect To Wan
ip address 10.213.194.190 255.255.255.248
no shut
exit
```

**配置接口 Vlan998：**

```shell
interface Vlan998
description Connect To iBox
ip address 10.215.194.190 255.255.255.248
no shut
exit
```

#### 路由設置
**設置默認路由：**

```shell
ip route 0.0.0.0 0.0.0.0 10.213.194.185
```

**關閉 Celluar 接口：**

```shell
int cellular 0
shutdown
exit

int cellular 1
shutdown
exit

controller Cellular 0
lte modem link-recovery disable
exit
```

#### 保存配置
**保存運行配置：**

```shell
exit
sh
wr
wr memory
show running-config
```

#### 測試指令
**顯示接口簡況：**

```shell
show ip int brief
show ip int vlan 990
show ip int vlan 998
show running-config
```

![image-20240711091042752](https://ntpe.cht.com.tw/uploads/images/image-20240711091042752.png) 

**Ping 測試：**

Ping 以下 IP 地址 (Ping 到為正常):
```shell
10.10.26.37
10.10.26.111
10.10.26.184
10.10.26.165
10.10.26.191
10.1.249.254
10.1.252.254
```

Ping 以下 IP 地址 (Ping 到為正常):
```shell
10.10.29.1
10.10.29.199
10.10.29.200
```

### Configuration

````txt
!
! Last configuration change at 17:41:07 TPE Fri Jan 17 2020
! NVRAM config last updated at 17:37:03 TPE Fri Jan 17 2020
!
version 15.7
service timestamps debug datetime msec
service timestamps log datetime msec
service password-encryption
!
hostname r244103CA0007
!
boot-start-marker
boot-end-marker
!
!
enable password 7 02050D480809
!
no aaa new-model
clock timezone TPE 8 0
service-module wlan-ap 0 bootimage autonomous
!
ignition off-timer 900
!
ignition undervoltage threshold 11
!
no ignition enable
!
!
no ip domain lookup
ip cef
no ipv6 cef
!
multilink bundle-name authenticated
!

chat-script lte "" "AT!CALL" TIMEOUT 20 "OK"
!
!
license udi pid IR829GW-LTE-LA-TK9 sn FTX2430Z0H0
!
username cisco privilege 15 password 7 070C285F4D06
!
redundancy

!
controller Cellular 0
 lte failovertimer 5
 lte modem link-recovery disable
!
interface GigabitEthernet0
 no ip address
 shutdown
!
interface GigabitEthernet1
 switchport access vlan 990
 no ip address
 power inline never
!
interface GigabitEthernet2
 switchport access vlan 998
 no ip address
 power inline never
!
interface GigabitEthernet3
 switchport access vlan 998
 no ip address
 power inline never
!
interface GigabitEthernet4
 switchport access vlan 998
 no ip address
 power inline never
!
interface Wlan-GigabitEthernet0
 no ip address
!
interface GigabitEthernet5
 no ip address
 shutdown
 duplex auto
 speed auto
!
interface Cellular0
 ip address negotiated
 encapsulation slip
 shutdown
 dialer in-band
 dialer idle-timeout 0
 dialer string lte
 dialer-group 1
 ipv6 address autoconfig
!
interface Cellular1
 no ip address
 encapsulation slip
 shutdown
!
interface wlan-ap0
 no ip address
 shutdown
!
interface Vlan1
 no ip address
!
interface Vlan990
 description Connect To Wan
 ip address 10.213.194.190 255.255.255.248
!
interface Vlan998
 description Connect To iBox
 ip address 10.215.194.190 255.255.255.248
!
interface Async0
 no ip address
 encapsulation scada
!
interface Async1
 no ip address
 encapsulation scada
!
!
ip forward-protocol nd
!
no ip http server
no ip http secure-server
!
ip route 0.0.0.0 0.0.0.0 10.213.194.185
!
dialer-list 1 protocol ip permit
dialer-list 1 protocol ipv6 permit
ipv6 ioam timestamp
!
!
!
control-plane
!
!
!
line con 0
 stopbits 1
line 1 2
 stopbits 1
line 3
 script dialer lte
 no exec
 transport preferred lat pad telnet rlogin lapb-ta mop udptn v120 ssh
 transport output lat pad telnet rlogin lapb-ta mop udptn v120 ssh
line 4
 no activation-character
 no exec
 transport preferred none
 transport input all
 transport output lat pad telnet rlogin lapb-ta mop udptn v120 ssh
line 8
 no exec
 transport preferred lat pad telnet rlogin lapb-ta mop udptn v120 ssh
 transport output lat pad telnet rlogin lapb-ta mop udptn v120 ssh
line 1/3 1/6
 transport preferred none
 transport output none
 stopbits 1
line vty 0 4
 login local
 transport input all
!
no scheduler max-task-time
ntp server 10.203.249.254
ntp server 10.203.252.254 prefer
no iox hdm-enable
iox client enable interface GigabitEthernet5
no iox recovery-enable
!
!
!
!
!
!
!
end
````

