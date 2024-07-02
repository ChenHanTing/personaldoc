---
sidebar_position: 51
---



# Questions Completed on 2024-06-06

[Question](https://www.examtopics.com/discussions/cisco/view/52672-exam-200-301-topic-1-question-357-discussion/#): Refer to the exhibit. After the configuration is applied, the two routers fail to establish an OSPF neighbor relationship. What is the reason for the problem?

![](https://www.examtopics.com/assets/media/exam-media/04300/0028100001.png) 

- A. The OSPF process IDs are mismatched

  **Incorrect**: ❗❗❗❗ The OSPF process ID (1000 on Router 1 and 1001 on Router 2) does not need to match between routers. The process ID is local to each router and does not affect OSPF neighbor relationships.

- B. The network statement on Router1 is misconfigured

- C. Router2 is using the default hello timer ✅

- D. The OSPF router IDs are mismatched

  **Incorrect**: 

  ❗❗❗❗ OSPF router IDs must be unique within an OSPF domain, and having different router IDs is expected and required for OSPF to function properly. Therefore, a mismatch in router IDs is not the problem here.

  ❗❗❗❗ If the Router ID is not manually configured using the `router-id` command, OSPF will automatically choose the Router ID using the following order of preference:

  - Highest IP Address of a Loopback Interface
  - Highest IP Address of a Non-loopback Interface

  ![image-20240606153931348](https://han.blob.core.windows.net/typora/image-20240606153931348.png) 

Answer: 

- OSPF Default hello timer is 10 and dead timer is 40 
  In This case R1 hello timer was modified to 5 seconds 
  Timers was not changed on R2 hence using the default timers
- router-id has to be unique on each router instead 
- Keith Barker's acronym for OSPF neighborship: TAN - MAT. These must match in OSPF. 
  - Timers 
  - Area number 
  - Network address 
  - MTU size
  - Authentication 
  - Type (Network type: broadcast (with ethernet or p2p)
- It is not necessarily that Process IDs be Different. They can be the same or they can be different. but neither is a requirement

Question: Refer to the exhibit. What is the effect of this configuration?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0051400001.png) 

- A. The switch discards all ingress ARP traffic with invalid MAC-to-IP address bindings. **Most Voted**
- B. All ARP packets are dropped by the switch.
- C. Egress traffic is passed only if the destination is a DHCP server.
- D. All ingress and egress traffic is dropped because the interface is untrusted.

The exhibit shows a configuration snippet for Dynamic ARP Inspection (DAI) on a Cisco switch. DAI is a security feature that protects against ARP spoofing attacks by intercepting and validating ARP packets in the network.

Question: Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?

- A. Platinum
- B. Bronze
- C. Gold
- D. Silver

````txt
WLAN Quality of Service (QoS) list:
• Platinum (voice)
• Gold (video)
• Silver (best effort) is the default value.
• Bronze (background)
````



Question: Refer to the exhibit. An OSPF neighbor relationship must be configured using these guidelines:
✑ R1 is only permitted to establish a neighbor with R2.
✑ R1 will never participate in DR elections.
✑ R1 will use a router-id of 10.1.1.1.
Which configuration must be used?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0041100004.png) 

OSPF uses port 89 and does not use a transport protocol. A is the answer. EIGRP port 88.

Question: Which command enables a router to become a DHCP client?

- A. ip address dhcp 💚
- B. ip dhcp client
- C. ip helper-address
- D. ip dhcp pool
  This command is used to configure a DHCP address pool on a router to act as a DHCP server, not a client.

If you want to configure GigabitEthernet 0/1 to obtain an IP address from a DHCP server, you would use:

```
Router> enable
Router# configure terminal
Router(config)# interface gigabitEthernet 0/1
Router(config-if)# ip address dhcp
Router(config-if)# no shutdown
```

Refer to the exhibit. Router R1 Fa0/0 cannot ping router R3 Fa0/1. Which action must be taken in router R1 to help resolve the configuration issue?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0027100001.png) 

- A. set the default gateway as 20.20.20.2

- B. configure a static route with Fa0/1 as the egress interface to reach the 20.20.2.0/24 network

- C. configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0/24 network 

  ✅Correct. This static route correctly tells R1 to send packets destined for 20.20.20.0/24 to R2's Fa0/0 interface at 10.10.10.2.

- D. set the default network as 20.20.20.0/24  

An email user has been lured into clicking a link in an email sent by their company's security organization. The webpage that opens reports that it was safe, but the link may have contained malicious code.
Which type of security program is in place?

- A. user awareness **Most Voted**
- B. brute force attack
- C. physical access control
- D. social engineering attack

>**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/19868-exam-200-301-topic-1-question-616-discussion/#)
>This is a training program which simulates an attack, not a real attack (as it says "The webpage that opens reports that it was safe") so we believed it should be called a "user awareness" program. Therefore the best answer here should be "user awareness". This is the definition of "User awareness" from CCNA 200-301
>Offical Cert Guide Book:
>"User awareness: All users should be made aware of the need for data confidentiality to protect corporate information, as well as their own credentials and personal information. They should also be made aware of potential threats, schemes to mislead, and proper procedures to report security incidents. "
>Note: Physical access control means infrastructure locations, such as network closets and data centers, should remain securely locked.

The question asked for the type of security program, not type of attack. Correct Answer is A.

### Other questions

![image-20240606115345818](https://han.blob.core.windows.net/typora/image-20240606115345818.png) 

B and D: The mode is specified as `rstp`, which is Rapid PVST+, not PVST+.

Key Information:

- **Root Port**: 
  The root port is the port on the switch that is the best path to the root bridge. Here, it is FastEthernet 2/1.
  The root port is a single port on a non-root bridge switch that has the best path cost to the root bridge. This port is the primary interface used to reach the root bridge.

- **Root Bridge**: The root bridge is the central point of a spanning tree in a network topology. It is the logical center of the network from the perspective of the spanning tree protocol (STP)

- **Spanning-tree Mode**: The protocol is RSTP, indicating Rapid PVST+.

- A. the number 1 indicates that FastEthernet 2/1 is the port through which the switch (SW1) reaches the root bridge.

  

![image-20240606120632151](https://han.blob.core.windows.net/typora/image-20240606120632151.png) 

The minimum required parameters to enable OSPFv2 on an interface are:

- **B. OSPF process ID**
- **E. OSPF area**

![image-20240606120816452](https://han.blob.core.windows.net/typora/image-20240606120816452.png) 

![image-20240606130921997](https://han.blob.core.windows.net/typora/image-20240606130921997.png) 

In Cisco IOS, the `enable secret` password takes precedence over the `enable password` if both are configured.

![image-20240606131226643](https://han.blob.core.windows.net/typora/image-20240606131226643.png)  

Correct Configuration Steps

1. **Enable NTP Authentication (if required):**

   ```
   ntp authenticate
   ntp authentication-key 1 md5 <password>
   ntp trusted-key 1
   ```

2. **Specify the IP Address of the NTP Server:**

   ```
   ntp server <IP address of NTP server>
   ```

![image-20240606133330712](https://han.blob.core.windows.net/typora/image-20240606133330712.png) 

The correct image is 
![](https://www.examtopics.com/assets/media/exam-media/04300/0050600001.png) 

The ACL is designed to block:

- **SMTP traffic (TCP port 25)** from 10.0.20.0/26 to 10.0.10.0/26.
- **WWW traffic (TCP port 80)** from 10.0.20.0/26 to 10.0.10.0/26.

However, the requirement is to allow all other traffic while only blocking the specific ports mentioned. To achieve this, we need to:

1. Add a rule to explicitly permit other traffic.
2. Ensure the ACL is correctly placed and defined to match the requirement.

To create a full ACL with both deny and permit rules, you could configure:

```
R2(config)# access-list 101 deny tcp 10.0.10.0 0.0.0.63 10.0.20.0 0.0.0.63 eq smtp
R2(config)# access-list 101 deny tcp 10.0.10.0 0.0.0.63 10.0.20.0 0.0.0.63 eq www
R2(config)# access-list 101 permit ip any any
```

After defining the ACL, you apply it to an interface in either the inbound or outbound direction:

```
R2(config)# interface gi0/2
R2(config-if)# ip access-group 101 in
```

- **interface gi0/2**: Enters interface configuration mode for gigabit interface 0/2.
- **ip access-group 101 in**: Applies access list 101 to inbound traffic on the interface.

This ACL configuration will:

1. Deny TCP traffic from 10.0.10.0/26 to 10.0.20.0/26 on port 25 (SMTP).
2. Deny TCP traffic from 10.0.10.0/26 to 10.0.20.0/26 on port 80 (HTTP).
3. Permit all other traffic.

![image-20240606134203486](https://han.blob.core.windows.net/typora/image-20240606134203486.png) 

What are two differences between optical-fiber cabling and copper cabling? (Choose two.)

- A. A BNC connector is used for fiber connections

- B. The glass core component is encased in a cladding
  **Translation:** 光纤的玻璃芯被包裹在包层中
  **Explanation:** This statement is true for optical fiber cables. The glass core, where the light signals travel, is surrounded by a cladding layer. The cladding is made of a different type of glass or plastic that reflects light back into the core, helping to maintain the integrity of the signal.

- C. The data can pass through the cladding

  **Translation:** 数据可以通过包层传输

  **Explanation:** This statement is incorrect. In optical fiber cables, data is transmitted through the core of the fiber, not the cladding. The cladding serves to contain the light signals within the core and prevent them from escaping, ensuring efficient transmission of data.

- D. Light is transmitted through the core of the fiber

- E. Fiber connects to physical interfaces using RJ-45 connections

![image-20240606134640676](https://han.blob.core.windows.net/typora/image-20240606134640676.png) 

Option A: The administrator can make configuration updates from the CLI
**Explanation:** While it is possible to make configuration updates from the CLI in some controller-based network setups, this is not a defining characteristic. Controller-based networks focus on centralized management and automation, often using graphical interfaces and APIs rather than traditional CLI-based configuration. CLI configuration is more characteristic of traditional, non-SDN networks.

Option C: It moves the control plane to a central point
**Explanation:** Another defining characteristic of SDN is the centralization of the control plane. In traditional networks, each device has its own control plane. In SDN, the control plane is centralized in the SDN controller, which oversees the entire network, making decisions and pushing configurations to the network devices.

![image-20240606140950259](https://han.blob.core.windows.net/typora/image-20240606140950259.png) 

**Option B Explanation:** In a virtualized environment, virtual machines (VMs) typically connect to the network through virtual network interfaces provided by the hypervisor. These virtual NICs (Network Interface Cards) are mapped to physical NICs on the host server by the hypervisor. However, a physical router does not directly connect to these virtual NICs. Instead, the hypervisor manages network traffic between the virtual machines and the physical network infrastructure. The direct connection of NICs from VMs to a physical router is not a fundamental aspect of virtualization; rather, it is managed indirectly through the hypervisor.

Option C's statement is incorrect because:

- A virtualization environment does not require a hypervisor to serve solely as a network manager for SNMP (Simple Network Management Protocol) traffic.
- Hypervisors are primarily responsible for creating, managing, and running virtual machines on a host system. While hypervisors can provide network management functions and monitoring capabilities, they are not dedicated exclusively to SNMP traffic monitoring.
- Virtualization environments can have multiple hypervisors, and their roles are not restricted to network management or SNMP traffic monitoring. The primary function of a hypervisor is to abstract and manage the physical hardware resources for virtual machines.

![image-20240606140959208](https://han.blob.core.windows.net/typora/image-20240606140959208.png) 

> You have 5 routes from 4 different routing protocols. Two of these routes are from OSPF: the router must choose (between them) which one to install in the routing table, and here the longest prefix match criteria wins (router chooses OSPF route 10.0.0.0/30). Now, you have 4 routes. 3 routes are all /30 routes (same prefix length): the router chooses on the basis of lowest administrative distance, and OSPF wins (administrative distance for these protocols is OSPF 110, which is lower than RIP 120, which is lower than BGP 200).

Other answers can refer to [this](https://www.examtopics.com/discussions/cisco/view/68978-exam-200-301-topic-1-question-350-discussion/) link

![image-20240606141616256](https://han.blob.core.windows.net/typora/image-20240606141616256.png) 

While "cost" is a term used in other routing protocols like OSPF, in EIGRP, the term "metric" is more accurate. EIGRP's metric is a composite value derived from multiple factors, not just a single "cost" value.

To determine the best path for a router running EIGRP (Enhanced Interior Gateway Routing Protocol) when it learns the same route from two different paths, the router uses the **metric** parameter. Let’s break down why this is the correct answer by examining the key concepts involved.

AS-Path is used by BGP (Border Gateway Protocol), not EIGRP. AS-Path is a list of Autonomous Systems that a route has traversed, and it is not relevant to EIGRP path selection.

[Question](https://www.examtopics.com/discussions/cisco/view/41784-exam-200-301-topic-1-question-419-discussion/): Refer to the exhibit. With which metric was the route to host 172.16.0.202 learned?

![](https://www.examtopics.com/assets/media/exam-media/04300/0033500001.png) 

- A. 0
- B. 110
- C. 38443 **Most Voted**
- D. 3184439

For the route entry: `O 172.16.0.128/25 [110/38443] via 207.165.200.254, 00:00:23, Serial0/0/1`

- **O** stands for OSPF.
- **110** is the administrative distance (AD) for OSPF.
- **38443** is the OSPF metric (cost).

Therefore, the route to 172.16.0.202 is learned via OSPF with a metric of **38443**.

![image-20240606144052358](https://han.blob.core.windows.net/typora/image-20240606144052358.png) 

To achieve the goal of having VLAN 67 traffic be untagged between Switch 1 and Switch 2, while all other VLANs remain tagged, you need to configure the native VLAN on the trunk link. In Cisco terminology, traffic on the native VLAN is sent untagged on a trunk link.

Assuming the trunk link is on interface GigabitEthernet0/1 on both switches, the configuration would look like this:

```plaintext
Switch1(config)# interface GigabitEthernet0/1
Switch1(config-if)# switchport mode trunk
Switch1(config-if)# switchport trunk native vlan 67
```

```plaintext
Switch2(config)# interface GigabitEthernet0/1
Switch2(config-if)# switchport mode trunk
Switch2(config-if)# switchport trunk native vlan 67
```

By applying the above configuration, VLAN 67 traffic will be sent untagged between Switch 1 and Switch 2, while traffic for all other VLANs will remain tagged.

![image-20240606165125646](https://han.blob.core.windows.net/typora/image-20240606165125646.png) 

```txt
Router# show cdp neighbor
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
                  S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone
                  D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID        Local Intrfce     Holdtme    Capability  Platform  Port ID
10.1.1.2         Gig 0/1           172        R S I       2960      Gig 0/12
10.1.1.3         Gig 0/2           153        R S I       2960      Gig 0/13
10.1.1.4         Gig 0/3           140        R S         2960      Gig 0/14

Total entries displayed: 3
```

```txt
Router# show interface GigabitEthernet0/0
GigabitEthernet0/0 is up, line protocol is up 
  Hardware is CSR vNIC, address is 0050.56a8.0034 (bia 0050.56a8.0034)
  Internet address is 192.168.1.1/24
  MTU 1500 bytes, BW 1000000 Kbit/sec, DLY 10 usec, 
     reliability 255/255, txload 1/255, rxload 1/255
  Encapsulation ARPA, loopback not set
  Keepalive set (10 sec)
  Full Duplex, 1000Mbps, media type is RJ45
  output flow-control is unsupported, input flow-control is unsupported
  ARP type: ARPA, ARP Timeout 04:00:00
  Last input 00:00:11, output 00:00:01, output hang never
  Last clearing of "show interface" counters never
  Input queue: 0/2000/0/0 (size/max/drops/flushes); Total output drops: 0
  Queueing strategy: fifo
  Output queue: 0/40 (size/max)
  5 minute input rate 1000 bits/sec, 1 packets/sec
  5 minute output rate 2000 bits/sec, 2 packets/sec
     1000 packets input, 1000000 bytes, 0 no buffer
     Received 1000 broadcasts (0 multicasts)
     0 runts, 0 giants, 0 throttles 
     0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored
     0 watchdog, 0 multicast, 0 pause input
     1000 packets output, 1000000 bytes, 0 underruns
     0 output errors, 0 collisions, 0 interface resets
     0 unknown protocol drops
     0 babbles, 0 late collision, 0 deferred
     0 lost carrier, 0 no carrier, 0 pause output
     0 output buffer failures, 0 output buffers swapped out
```

```txt
Router# show ip interface
GigabitEthernet0/0 is up, line protocol is up
  Internet address is 192.168.1.1/24
  Broadcast address is 255.255.255.255
  Address determined by configuration file
  MTU is 1500 bytes
  ...
```

```txt
Router# show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2, m - OMP
       n - NAT, Ni - NAT inside, No - NAT outside, Nd - NAT DIA
       i - IS-IS, L1 - IS-IS level-1, L2 - IS-IS level-2, ia - IS-IS inter area
       su - IS-IS summary null, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route, H - NHRP, l - LISP
       a - application route
       + - replicated route, % - next hop override

Gateway of last resort is not set

      10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks
C        10.1.1.0/24 is directly connected, GigabitEthernet0/1
O        10.2.2.0/24 [110/20] via 10.1.1.2, 00:00:22, GigabitEthernet0/1
O        10.3.3.0/24 [110/20] via 10.1.1.2, 00:00:22, GigabitEthernet0/1
B        172.16.0.0/16 [20/0] via 192.168.1.1, 00:00:22
```

![image-20240606165803636](https://han.blob.core.windows.net/typora/image-20240606165803636.png) 

**Merging into a Single Broadcast Domain**:

- When native VLANs are mismatched, untagged traffic sent on the native VLAN from one switch will be received by the other switch and interpreted as belonging to its native VLAN.
- This can cause the untagged traffic to be effectively merged into a single broadcast domain, meaning broadcasts sent on the native VLAN from one switch are received by all devices in the native VLAN of the other switch.
- This can create a loop or broadcast storm if not managed properly, as traffic might loop between the two VLANs.

> Earlier question on this site where the answer also states that even though switches will report a Native Vlan mismatch, they will still pass traffic and essentially merge these 2 Vlan's together (unwanted scenario and switch will continue to throw warnings).

Similarily, Refer to the [exhibit](https://www.examtopics.com/discussions/cisco/view/41773-exam-200-301-topic-1-question-213-discussion/). How will switch SW2 handle traffic from VLAN 10 on SW1?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0016200001.png) 

- A. It sends the traffic to VLAN 10.
- B. It sends the traffic to VLAN 100. **Most Voted**
- C. It drops the traffic. **Most Voted**
- D. It sends the traffic to VLAN 1.

```txt
Answer given correct - SW1 trunk native vlan 10 command will drop the tag from any Vlan 10 traffic and send it out to SW2 without a tag
SW2 see's untagged traffic from SW1 and applies it to Native Vlan 100.
Earlier question on this site where the answer also states that even though switches will report a Native Vlan mismatch, they will still pass traffic and essentially merge these 2 Vlan's together (unwanted scenario and switch will continue to throw warnings).
```

````txt
The fact that the community is split on this means I am going to have trouble trusting the answers from you all as a whole. The answer is B. Do not believe anything else.
If traffic is in a native VLAN it is UNTAGGED, meaning it does not have an assignment. One switch interprets untagged as VLAN 10, the other as VLAN 100, so if untagged so the identification of VLAN is based on location. It will remain untagged where ever it goes but switches will identify it as they have been told.
````

![image-20240606170940932](https://han.blob.core.windows.net/typora/image-20240606170940932.png) 

Given the options in the question and understanding the context of WPA2:

- **A. TKIP with RC4**: Incorrect, as it is used with WPA, not WPA2.
- **B. RC4**: Incorrect, as RC4 is associated with WEP and WPA, not WPA2.
- **C. AES-128**: Correct, as WPA2 typically uses AES with a 128-bit key.
- **D. AES-256**: Incorrect in the context of the standard WPA2-PSK, which uses AES-128.

![image-20240606171445824](https://han.blob.core.windows.net/typora/image-20240606171445824.png) 

D is [correct](https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_010100001.html#:~:text=When%20you%20enable%20LAG%2C%20only,controller%20to%20pass%20client%20traffic.&text=When%20you%20enable%20LAG%2C%20you,on%20which%20it%20received%20them.) "When you enable LAG, only one functional physical port is needed for the controller to pass client traffic." 

Which standard is required when more than one distribution system port and only one IP address are configured for a Cisco WLC? ([Similar question](https://www.examtopics.com/discussions/cisco/view/129414-exam-200-301-topic-1-question-1246-discussion/))

- A. 802.3ad **Most Voted**
- B. 802.1q
- C. 802.1d
- D. 802.1af

> A is correct 
> All WLCs support the aggregation of multiple distribution ports into a single port using the 802.3ad port standard. This allows an administrator to create one large link between the WLC and the local switch. https://www.firewall.cx/cisco/cisco-wireless/cisco-wireless-controllers-interfaces-ports-functionality.html (last page)
>
> 802.3ad is LAG(link aggregation protocol) which is used between the WLC(using the distribution system port) and the switch. 
> 802.1q isn't necessary since LAG can be configured in both access and trunk port modes

### Others

- It'll help me achieve my goals, and you can earn some quick cash out of it.