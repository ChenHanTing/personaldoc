# JMart 

The following is Jmart configuration

```txt
!
version 15.7
service timestamps debug datetime localtime
service timestamps log datetime localtime
service password-encryption
!
hostname 4G-829-xinzhuang
!
boot-start-marker
boot-end-marker
!
!
logging buffered 4096
enable secret 5 $1$cu7a$7nWdRXN/IeIQvao6vZlem.
!
no aaa new-model
clock timezone CST 8 0
service-module wlan-ap 0 bootimage autonomous
!
ignition off-timer 900
!
ignition undervoltage threshold 11
!
no ignition enable
!
!
!
!
!
!
!
!
!
!
!


!
!
!
!
ip domain name jmart
ip cef
no ipv6 cef
!
multilink bundle-name authenticated
!
!
!
chat-script lte "" "AT!CALL" TIMEOUT 20 "OK"
!
!
license udi pid IR829GW-LTE-LA-TK9 sn FTX2430Z0H0
!
!
username cht privilege 15 password 7 14141A1F1F247B7977
username admin privilege 15 password 7 141D1F0A1E100A79707F
!
redundancy

!
!
!
!
!
controller Cellular 0
 lte sim authenticate 7 040B5B565F slot 0
 lte failovertimer 5
 lte modem link-recovery disable
!
ip tcp synwait-time 5
!
!
!
!
!
!
!
!
!
!
interface Loopback1
 ip address 100.71.78.155 255.255.255.255
!
interface Tunnel1
 ip address 172.31.1.18 255.255.255.254
 ip mtu 1476
 ip virtual-reassembly in
 ip tcp adjust-mss 1360
 keepalive 5 2
 tunnel source Cellular0
 tunnel destination 10.255.210.75
 hold-queue 240000 in
 hold-queue 240000 out
!
interface GigabitEthernet0
 no ip address
 shutdown
!
interface GigabitEthernet1
 description to wan_hlink
 switchport access vlan 500
 switchport mode access
 no ip address
!
interface GigabitEthernet2
 description to lan
 switchport mode access
 no ip address
!
interface GigabitEthernet3
 description to lan
 switchport mode access
 no ip address
!
interface GigabitEthernet4
 description to lan
 switchport mode access
 no ip address
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
 description 4GLTE
 ip address 10.10.10.5 255.255.255.0
 ip virtual-reassembly in
 encapsulation slip
 ip tcp adjust-mss 1432
 dialer in-band
 dialer idle-timeout 0
 dialer string lte
 dialer watch-group 1
 dialer-group 1
 ipv6 address autoconfig
!
interface Cellular1
 no ip address
 encapsulation slip
!
interface wlan-ap0
 no ip address
!
interface Vlan1
 ip address 192.168.6.254 255.255.255.0
!
interface Vlan500
 ip address 10.252.1.49 255.255.255.248
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
router bgp 65006
 bgp router-id 10.252.1.49
 bgp log-neighbor-changes
 network 192.168.6.0
 neighbor 10.252.1.50 remote-as 65535
!
ip forward-protocol nd
!
no ip http server
no ip http secure-server
!
ip route 0.0.0.0 0.0.0.0 Tunnel1 220
ip route 10.255.210.75 255.255.255.255 Cellular0
!
dialer watch-list 1 ip 5.6.7.8 0.0.0.0
dialer watch-list 1 delay route-check initial 60
dialer watch-list 1 delay connect 1
dialer-list 1 protocol ip permit
dialer-list 1 protocol ipv6 permit
ipv6 ioam timestamp
!
!
access-list 1 permit any
access-list 7 permit any
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
 modem InOut
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
 access-class 7 in
 login local
 transport input all
 transport output all
!
no scheduler max-task-time
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
```

