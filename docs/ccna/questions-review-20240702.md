

# Questions Completed on 2024-07-02

![image-20240702113609026](https://han.blob.core.windows.net/typora/image-20240702113609026.png) 

![image-20240702134203328](https://han.blob.core.windows.net/typora/image-20240702134203328.png)  

**Disable DTP (Dynamic Trunking Protocol)**:**Mitigates switch-spoofing VLAN-hopping attack**.

DTP is a Cisco proprietary protocol that automates the creation of trunk links between switches. By disabling DTP on ports, you prevent unauthorized devices from negotiating trunk links, which is a common method for VLAN-hopping attacks.

**Configure the native VLAN with a nondefault VLAN ID**:**Mitigates 802.1q double-tagging VLAN-hopping attack**.

In 802.1q double-tagging attacks, an attacker sends a packet with two VLAN tags. The first tag is stripped off by the first switch, and the second tag directs the packet to a different VLAN. By changing the native VLAN to a nondefault VLAN, you reduce the risk of double-tagging because the attack relies on the native VLAN being VLAN 1.



### Drag and Drop Answer for Wireless LAN

- **Manages access points**: **Wireless LAN Controller**

- **Provides Wi-Fi devices with a connection to a wired network**: **Access Point**

- **Used for out-of-band management**: **Service Port**

  The service port on devices like a Wireless LAN Controller (WLC) is typically used for out-of-band management. This port is separate from the main data network and provides a way to manage the device even if the main network is down.

  <img src="https://i.ytimg.com/vi/jhsjfOSBeiA/maxresdefault.jpg" alt="image-20240629063004156" /> 

  out-of-band management always plays as a service port 

  ![](https://ftp.wti.com/userimages/techsupport/whitepaper-oob-3-datctr-630.png) 

- **Used for guest authentication**: **Virtual Interface**

  In the context of wireless networks, a virtual interface is often used for **guest access and authentication**. It allows the creation of a separate network interface that can handle specific functions like guest login pages, authentication processes, and segregating guest traffic from the main network.

- **Applied to the WLAN for wireless client communication**: **Dynamic Interface**

  A dynamic interface in wireless networking is used for client communication on a WLAN. It’s an interface that is created dynamically to handle traffic for a particular VLAN, providing a logical separation of traffic within the same physical infrastructure.

![image-20240702141145396](https://han.blob.core.windows.net/typora/image-20240702141145396.png) 

![image-20240702141635221](https://han.blob.core.windows.net/typora/image-20240702141635221.png) 

**TFTP** is typically used for loading IOS images in network devices because it is simpler and does not require authentication, making it faster and easier for this purpose. However, because it uses UDP, it does not have the reliability of FTP, which uses TCP.

![image-20240702143441292](https://han.blob.core.windows.net/typora/image-20240702143441292.png) 

![image-20240702144810637](https://han.blob.core.windows.net/typora/image-20240702144810637.png) 

![image-20240702145042234](https://han.blob.core.windows.net/typora/image-20240702145042234.png) 

背起來就對了

![image-20240702145439308](https://han.blob.core.windows.net/typora/image-20240702145439308.png) 

The source and destination MAC addresses remain the same throughout the communication within the same VLAN. The switch uses these MAC addresses to forward the frames to the correct ports.

**When Might MAC Addresses Change?**

In more complex network scenarios, the MAC addresses can change under certain circumstances, such as when traffic traverses different network segments or types of network devices. 

![image-20240702145548635](https://han.blob.core.windows.net/typora/image-20240702145548635.png) 

先比Bridge Priority 再比MAC 都比小的

![image-20240702150530516](https://han.blob.core.windows.net/typora/image-20240702150530516.png) 

**Effect for A**: Modifying the hello interval so that it matches on both routers (R1 and R2) is essential for OSPF to establish a neighbor relationship. If the hello intervals don't match, OSPF will not form a neighbor relationship.

**Effect for B**: The OSPF process ID is local to the router and is not communicated between OSPF routers. It is simply used to differentiate between multiple OSPF processes on the same router.

**Effect for C**: The OSPF priority determines the designated router (DR) and backup designated router (BDR) election. A higher priority increases the likelihood of becoming a DR or BDR.

**Modifying the Network Type** (Option D) is a valid action to establish an OSPF neighbor relationship without forming an adjacency. By setting mismatched network types, the routers can detect each other as neighbors but will not proceed to full adjacency formation due to the network type mismatch.

The correct answer is A and D, and the given answer is A

![image-20240702153109097](https://han.blob.core.windows.net/typora/image-20240702153109097.png) 

````txt
enable
configure terminal
ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30
access-list 1 permit 10.10.0.0 0.0.0.255
ip nat inside source list 1 pool mypool
interface g1/1
ip nat inside
interface g1/2
ip nat outside
````

````txt
enable
configure terminal
ip nat pool mypool 192.168.30.1 192.168.3.3 netmask 255.255.255.252
access-list 1 permit 10.10.0.0 0.0.0.255
ip nat inside source list 1 pool mypool
interface g1/1
ip nat inside
interface g1/2
ip nat outside
````

````txt
enable
configure terminal
access-list 1 permit 10.10.0.0 0.0.0.255
ip nat inside source list 1 interface g1/2 overload
interface g1/1
ip nat inside
interface g1/2
ip nat outside
````

![image-20240702153426952](https://han.blob.core.windows.net/typora/image-20240702153426952.png) 

Setting the STP priority to `0` for a VLAN will ensure that the switch becomes the root bridge for that VLAN. Lower STP priority values increase the likelihood of becoming the root bridge.

Setting the OSPF interface priority to `0` makes that router ineligible to become the Designated Router (DR) or Backup Designated Router (BDR) on that OSPF network segment.

![image-20240702153707297](https://han.blob.core.windows.net/typora/image-20240702153707297.png) 

**Not Necessary**: The OSPF process ID is local to the router and does not need to match between routers. It is only used to identify the OSPF process within a router. Routers with different OSPF process IDs can still form a neighbor relationship as long as other parameters match.  

**Connect R1 to R3**

- R1 uses ospf 1
- R2 uses ospf 2

shows that it's locally significant

````txt
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip address 192.168.1.1 255.255.255.252
R1(config-if)# ip ospf 1 area 0
R1(config-if)# no shutdown
R1(config-if)# exit

R1(config)# router ospf 1
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 192.168.1.0 0.0.0.3 area 0
R1(config-router)# exit
````

````txt
R3(config)# interface GigabitEthernet0/0
R3(config-if)# ip address 192.168.1.2 255.255.255.252
R3(config-if)# ip ospf 2 area 0
R3(config-if)# no shutdown
R3(config-if)# exit

R3(config)# router ospf 2
R3(config-router)# router-id 3.3.3.3
R3(config-router)# network 192.168.1.0 0.0.0.3 area 0
R3(config-router)# exit
````

![image-20240702154700160](https://han.blob.core.windows.net/typora/image-20240702154700160.png) 

CRC is from Layer2

![image-20240702155308432](https://han.blob.core.windows.net/typora/image-20240702155308432.png) 

![image-20240702161748659](https://han.blob.core.windows.net/typora/image-20240702161748659.png) 

**Router ID**: Each OSPF router must have a unique Router ID. The Router ID is a 32-bit value that uniquely identifies the router within the OSPF domain. It is typically an IPv4 address assigned to one of the router's interfaces or manually configured. 

![image-20240702162219867](https://han.blob.core.windows.net/typora/image-20240702162219867.png) 

![image-20240702163055815](https://han.blob.core.windows.net/typora/image-20240702163055815.png) 

````txt
clock set 00:00:00 January 1 2020
````

![image-20240702165258311](https://han.blob.core.windows.net/typora/image-20240702165258311.png) 



