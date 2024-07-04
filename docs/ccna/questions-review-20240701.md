# Questions Completed on 2024-07-01

### Tips

- 有SAE選SAE，沒有SAE選AES

​	![image-20240704100444082](https://han.blob.core.windows.net/typora/image-20240704100444082.png) 

### Questions

![image-20240701083312219](https://han.blob.core.windows.net/typora/image-20240701083312219.png) 

![image-20240701084303585](https://han.blob.core.windows.net/typora/image-20240701084303585.png) 

![image-20240701084426229](https://han.blob.core.windows.net/typora/image-20240701084426229.png) 

![image-20240701084812817](https://han.blob.core.windows.net/typora/image-20240701084812817.png) 

How to learn and choose path across the server:

- **OSPF**: 

  ![image-20240701085138681](https://han.blob.core.windows.net/typora/image-20240701085138681.png) 

- **EIGRP**: Uses K values to calculate a composite metric, involving bandwidth, delay, load, and reliability.

- **RIP**: Uses hop count as its metric

![image-20240701085341459](https://han.blob.core.windows.net/typora/image-20240701085341459.png) 

**D: disable**

![image-20240701085604237](https://han.blob.core.windows.net/typora/image-20240701085604237.png) 

**`ip arp inspection vlan 2`**: This command enables Dynamic ARP Inspection (DAI) on VLAN 2. DAI is a security feature that validates ARP packets in a network. It prevents ARP spoofing by ensuring that only valid ARP requests and responses are relayed. 

![image-20240701162227295](https://han.blob.core.windows.net/typora/image-20240701162227295.png) 

**Understanding Dynamic ARP Inspection (DAI)**

DAI intercepts, logs, and discards ARP packets with invalid IP-to-MAC address bindings. It ensures that only valid ARP requests and responses are relayed. For DAI to function correctly, it needs to differentiate between trusted and untrusted ports:

1. **Trusted Ports**: These are ports that are considered secure and are typically connected to other network devices that can be trusted to generate valid ARP packets. Common devices connected to trusted ports include:
   - Routers
   - Switches
   - DHCP servers
2. **Untrusted Ports**: These are ports that are considered potentially insecure, typically where end devices (clients) are connected. Common devices connected to untrusted ports include:
   - PCs
   - IP phones
   - Wireless access points

[Question](https://www.examtopics.com/discussions/cisco/view/98168-exam-200-301-topic-1-question-158-discussion/#): What is a function spine-and-leaf architecture?

- A. Offers predictable latency of the traffic path between end devices. **Most Voted**
- B. Exclusively sends multicast traffic between servers that are directly connected to the spine.
- C. Mitigates oversubscription by adding a layer of leaf switches.
- D. Limits payload size of traffic within the leaf layer.

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/98168-exam-200-301-topic-1-question-158-discussion/#)
With a spine-and-leaf architecture, no matter which leaf switch to which a server is connected, its traffic always has to cross the same number of devices to get to another server (unless the other server is located on the same leaf). This approach keeps latency at a predictable level because a payload only has to hop to a spine switch and another leaf switch to reach its destination. 

![image-20240701090212074](https://han.blob.core.windows.net/typora/image-20240701090212074.png)  

![](https://study-ccna.com/wp-content/uploads/spine-and-leaf-architecture.jpg)

![What is Spine-Leaf Architecture and How Does It Work? | HPE Aruba Networking](https://www.arubanetworks.com/wp-content/uploads/glossary-diagram-spine-leaf-architecture-full-span_1235x567.png)

In some implementations, aggregation can be done under the leaf switches. This means connecting several servers to an intermediate aggregation switch, which then connects to the leaf switch. This can simplify cabling and reduce the number of direct connections to the leaf switches. However, it can introduce another point of failure and potentially increase latency slightly.   

![image-20240701090456424](https://han.blob.core.windows.net/typora/image-20240701090456424.png) 

D is wrong because it's broadcast ip

![image-20240701090901364](https://han.blob.core.windows.net/typora/image-20240701090901364.png) 

It shows the neighbor from other switch. Itself should be active for this case.

![image-20240701091443713](https://han.blob.core.windows.net/typora/image-20240701091443713.png) 

OSPF's AD is bigger than eBGP

![image-20240701112301081](https://han.blob.core.windows.net/typora/image-20240701112301081.png) 

Correct Understanding

- **Local AP Mode**: Single CAPWAP tunnel for both management and client data to the WLC.
- **FlexConnect AP Mode**: Can locally switch traffic at the AP (local switching) or tunnel traffic to the WLC (central switching).

![image-20240701113022522](https://han.blob.core.windows.net/typora/image-20240701113022522.png) 

Layer2 - Checksum

![image-20240701113652688](https://han.blob.core.windows.net/typora/image-20240701113652688.png) 

![image-20240701114321418](https://han.blob.core.windows.net/typora/image-20240701114321418.png) 

The term "decouple" refers to the separation of the control plane and the data plane, a key characteristic of controller-based networks such as those using SDN. This separation allows for more centralized and dynamic network management, distinguishing them from traditional networks where these planes are combined within each device. 

![image-20240701114640229](https://han.blob.core.windows.net/typora/image-20240701114640229.png) 

**NIC**: A Network Interface Card (NIC) is a hardware component that connects a computer to a network. It provides the physical interface for network communications, typically via Ethernet or wireless connections.

**Explanation of B**: This statement is incorrect because **virtualization itself does not require any components to reside on the Internet**. Virtualization is a technique used to create virtual instances of physical hardware, allowing multiple operating systems and applications to run on a single physical server. These virtualized resources can reside on a local network, data center, or private cloud without any requirement to be on the Internet. 

**Explanation of E**: This statement is true. Virtualization enables the use of logical network devices, such as virtual switches and routers, to manage and route traffic between VMs and the physical network. These virtual devices operate within the hypervisor and provide network connectivity for VMs.

![image-20240701115331466](https://han.blob.core.windows.net/typora/image-20240701115331466.png)  

Default Path Costs for Different Ethernet Types

- **10 Mbps (Ethernet)**: Default path cost = 100
- **100 Mbps (Fast Ethernet)**: Default path cost = 19
- **1 Gbps (Gigabit Ethernet)**: Default path cost = 4
- **10 Gbps (10 Gigabit Ethernet)**: Default path cost = 2

![image-20240701115818064](https://han.blob.core.windows.net/typora/image-20240701115818064.png) 

The answer is not right~

![image-20240701120950089](https://han.blob.core.windows.net/typora/image-20240701120950089.png) 

**Explanation**: Setting a private key is not a standard step for configuring an NTP client. NTP authentication typically involves shared keys, not private keys specific to the server.

![image-20240701131954194](https://han.blob.core.windows.net/typora/image-20240701131954194.png)  

❗❗❗❗ **Locally Significant**

- The OSPF process ID is significant only to the router on which it is configured. It is used to distinguish between multiple OSPF processes that may be running on the same router.
- The process ID does not need to match between neighboring routers for them to form an OSPF neighbor relationship.

![image-20240701131508431](https://han.blob.core.windows.net/typora/image-20240701131508431.png) 

In networking, specifically with VLANs (Virtual Local Area Networks) and trunk links, there are cases where it is necessary to set one VLAN as untagged. This untagged VLAN is often referred to as the native VLAN. Here are some reasons why you might want to set a VLAN to be untagged (native) on a trunk link between switches:

1. **Backward Compatibility**:

   Some older devices and protocols do not support VLAN tagging. By setting a native VLAN, you ensure compatibility with these devices.

2. **Simplified Management**:

   When managing devices that should always be on a specific VLAN without requiring VLAN configuration on end devices, setting a native VLAN can simplify management.

3. **Specialized Traffic**:

   Specific traffic types, such as management traffic, VoIP, or other special purposes, may be designated to an untagged VLAN to segregate it from other tagged traffic without modifying the configuration on endpoints.

4. **Default Behavior**:

   By default, if no VLAN tagging information is present, the traffic is considered part of the native VLAN. This can be useful for handling untagged traffic properly.

![](https://www.examtopics.com/assets/media/exam-media/04300/0027100001.png)

如果要R1 ping R3，那還要再設定一條規則

![image-20240701134504832](https://han.blob.core.windows.net/typora/image-20240701134504832.png) 

看起來很合理

![image-20240701134919940](https://han.blob.core.windows.net/typora/image-20240701134919940.png) 

![image-20240701135024953](https://han.blob.core.windows.net/typora/image-20240701135024953.png) 

AES looks like the most recent tech for the options

![image-20240701135816296](https://han.blob.core.windows.net/typora/image-20240701135816296.png) 

![image-20240701135807610](https://han.blob.core.windows.net/typora/image-20240701135807610.png) 

![image-20240701140240432](https://han.blob.core.windows.net/typora/image-20240701140240432.png) 

The default MTU size for Ethernet is 1500 bytes. This is the standard for most Ethernet networks and devices unless otherwise configured.

![image-20240701144055963](https://han.blob.core.windows.net/typora/image-20240701144055963.png) 

````txt
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 203.0.113.1 255.255.255.0
Router(config-if)# ip nat outside
Router(config-if)# exit

# Configure Static NAT Mapping
Router(config)# ip nat inside source static 192.168.1.10 203.0.113.10

# Configure Dynamic NAT or PAT (Port Address Translation)
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# ip nat pool PUBLIC_POOL 203.0.113.20 203.0.113.30 netmask 255.255.255.0
Router(config)# ip nat inside source list 1 pool PUBLIC_POOL overload
````

![image-20240701143430052](https://han.blob.core.windows.net/typora/image-20240701143430052.png) 

![image-20240701144434469](https://han.blob.core.windows.net/typora/image-20240701144434469.png) 

````txt
! Enter global configuration mode
Router> enable
Router# configure terminal

! Exclude specific IP addresses from being assigned by the DHCP server
! This is to reserve these addresses for static assignments or other purposes
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10

! Define the DHCP pool with a name (MYPOOL)
Router(config)# ip dhcp pool MYPOOL

! Specify the network and subnet mask for the DHCP pool
Router(dhcp-config)# network 192.168.1.0 255.255.255.0

! Specify the default gateway (router) for the DHCP clients
Router(dhcp-config)# default-router 192.168.1.1

! Specify the DNS servers for the DHCP clients
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4

! Set the lease duration (in days) for the DHCP clients
Router(dhcp-config)# lease 7

! Exit DHCP configuration mode
Router(dhcp-config)# exit

! Exit global configuration mode
Router(config)# exit

! Verify the DHCP bindings (leased addresses)
Router# show ip dhcp binding

! Verify the DHCP pool configuration
Router# show ip dhcp pool

! Verify the DHCP server statistics
Router# show ip dhcp server statistics
````

![image-20240701145408975](https://han.blob.core.windows.net/typora/image-20240701145408975.png) 

**C is incorrect**: While EtherChannel typically involves aggregating two or more physical ports, it is possible to pass client traffic with a single functional port within the EtherChannel. If only one port is active in the EtherChannel, it can still pass traffic.

**D is correct**: This statement is true because, in an EtherChannel, even if only one physical port is functional, the WLC can still pass client traffic through that port. The other ports in the EtherChannel can provide redundancy and additional bandwidth, but they are not strictly required for basic traffic passing.

**Option D** correctly states that only one functional physical port is needed to pass client traffic, highlighting that EtherChannel provides additional benefits but is not dependent on having multiple active ports to function at a basic level.

![image-20240701150017368](https://han.blob.core.windows.net/typora/image-20240701150017368.png) 

![image-20240701152555639](https://han.blob.core.windows.net/typora/image-20240701152555639.png) 

AD values for the given protocols

- **RIP**: 120
- **OSPF**: 110
- **IS-IS**: 115
- **Internal EIGRP**: 90
- **External EIGRP route**: AD 170

![image-20240701150456837](https://han.blob.core.windows.net/typora/image-20240701150456837.png) 

![image-20240701151306525](https://han.blob.core.windows.net/typora/image-20240701151306525.png) 

SDN=Software-Defined Networking. Its in the name "software."
API's= Application Programming Interface. = software
REST API's = isn't a specific API but a set of rules for API's
SDKs= Software Development Kits

Enabling software to allow for external applications defiantly makes it more "extensible" (able to be extended). The traditional device management seemed to really want to keep things proprietary, or at least attempt a push in that direction. It appears now that Cisco knows it needs to adapt and allow for 3rd party devices/applications so that it can remain competitive.

![image-20240701151754625](https://han.blob.core.windows.net/typora/image-20240701151754625.png) 

答案就是D的感覺

![image-20240701153446571](https://han.blob.core.windows.net/typora/image-20240701153446571.png) 

![image-20240701153851452](https://han.blob.core.windows.net/typora/image-20240701153851452.png) 

**Functionality of C**: It requires manual intervention to execute commands and analyze outputs. It is not designed for continuous data collection or real-time streaming of data from network devices to a central controller.

![image-20240701154254968](https://han.blob.core.windows.net/typora/image-20240701154254968.png) 

The Broadcast network type is the default for an OSPF enabled ethernet interface (while Point-to-Point is the default OSPF network type for Serial interface with HDLC and PPP encapsulation so the An is C

![image-20240701155545033](https://han.blob.core.windows.net/typora/image-20240701155545033.png) 

Option B: It immediately puts the port into the forwarding state when the switch is reloaded **is incorrect**: While the `spanning-tree portfast` command does cause the port to enter the forwarding state more quickly, it does so immediately when a device is connected to the port, not specifically when the switch is reloaded. The command reduces the port's delay by bypassing the listening and learning states, but it does not guarantee immediate forwarding state on switch reload; rather, it is on the device connection that the benefit is observed.

![image-20240701161159806](https://han.blob.core.windows.net/typora/image-20240701161159806.png) 

![](https://www.examtopics.com/assets/media/exam-media/04300/0028300001.png)

For internet traffic... the destination IP's can vary. Hence in this topology, it is using the default gateway 0.0.0.0. Path selection does not meet any other criteria so it has to use gateway of last resort. Correct me if I'm wrong here folks.

![image-20240701162634610](https://han.blob.core.windows.net/typora/image-20240701162634610.png) 

DHCP concept of how to relay

![image-20240701163039521](https://han.blob.core.windows.net/typora/image-20240701163039521.png) 

**❗❗❗Password Auto-Fill ✨✨✨**: A password manager typically auto-fills passwords into login fields, which means the user doesn't need to type their passwords manually. This significantly reduces the risk of keystroke logging malware capturing the passwords, as there are no keystrokes to log.

![image-20240701164631564](https://han.blob.core.windows.net/typora/image-20240701164631564.png)

What i chose was right

![image-20240701164756778](https://han.blob.core.windows.net/typora/image-20240701164756778.png)

When the interface is shut down the status is ADMINISTRATIVELY DOWN/DOWN. D is really goes down, physically down.

![image-20240701165130555](https://han.blob.core.windows.net/typora/image-20240701165130555.png)

❗❗❗ access-group [in|out] is used to tie an access-list to an interface.
❗❗❗ access-class [in|out] is used to tie an access-list to vty lines.

![image-20240701165309858](https://han.blob.core.windows.net/typora/image-20240701165309858.png) 

It's really worded

![image-20240701165608949](https://han.blob.core.windows.net/typora/image-20240701165608949.png)

First hop redundancy protocol (FHRP) is a computer networking protocol which is designed to protect the default gateway used on a subnetwork by allowing two or more routers to provide backup for that address; in the event of failure of an active router, the backup router will take over.

