# Questions Completed on TEAMS

CCNA Information

| Candidate:                                     | HAN TING CHEN                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| Cisco ID:                                      | ‎CSCO14687698‎                                                                        |
| Registration ID:                               | ‎482985477‎                                                                           |
|                                                |                                                                                       |
| Date:                                          | ‎Monday, July 15, 2024‎                                                               |
| Time:                                          | ‎01:30 PM China Standard Time‎ (Time shown is test center local time.) ‎               |
| Appointment Length (Includes NDA and Tutorial)  | ‎170‎ Minutes‎                                                                        |
|                                                |                                                                                       |
| Test Center Location (Directions shown below)   | SYSTEX CORPORATION 10595 TAIPEI 14F, NO.99 FUXING N. RD., NO.99 FUXING N. RD., TAIWAN |

<img src="https://han.blob.core.windows.net/typora/image-20240714150647915.png" alt="image-20240714150647915" style="zoom:50%;" />  

![capwap-protocol-overview](https://ipcisco.com/wp-content/uploads/2023/03/capwap-protocol-overview.png)  

![CAPWAP PROTOCOL](https://ipwithease.com/wp-content/uploads/2020/08/CAPWAP-PROTOCOL.jpg.webp)   

![Layer 3 Roaming](https://images.surferseo.art/5924b00e-4009-4f16-9f33-e22dabd0180a.png)  

<img src="https://han.blob.core.windows.net/typora/image-20240714150515957.png" alt="image-20240714150515957" style="zoom:50%;" />  

![image-20240714150557280](https://han.blob.core.windows.net/typora/image-20240714150557280.png) 

When you configure SSH with public key authentication, users authenticate using a cryptographic key instead of a password. This method enhances security and convenience as users do not need to type a password.

```plaintext
R1(config) # hostname R1
R1(config) # ip domain-name example.com
R1(config) # crypto key generate rsa modulus 2048
R1(config) # username admin privilege 15
R1(config) # ip ssh public-key-chain
R1(conf-ssh-pubkey) # username admin
R1(conf-ssh-pubkey-user) # key-string
R1(conf-ssh-pubkey-data) # ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArVz... user@host
R1(conf-ssh-pubkey-data) # exit
R1(conf-ssh-pubkey-user) # exit
R1(conf-ssh-pubkey) # exit
R1(config) # line vty 0 4
R1(config-line) # login local
R1(config-line) # transport input ssh
R1(config) # ip ssh version 2
R1(config) # end
R1# write memory
```

<img src="https://han.blob.core.windows.net/typora/image-20240714144340964.png" alt="image-20240714144340964" style="zoom:50%;" />  

<img src="https://han.blob.core.windows.net/typora/image-20240714144242708.png" alt="image-20240714144242708" style="zoom:50%;" />  

<img src="https://han.blob.core.windows.net/typora/image-20240714144128667.png" alt="image-20240714144128667" style="zoom:50%;" /> 

<img src="https://han.blob.core.windows.net/typora/image-20240714143852862.png" alt="image-20240714143852862" style="zoom:50%;" /> 

The correct answer is **not SNMP**. SNMP (Simple Network Management Protocol)  is used for network management and monitoring, not for backing up configurations. The correct answer is B. FTP (File Transfer Protocol) . FTP is commonly used to transfer files, including backing up router configurations to a server.

![image-20240714143740230](https://han.blob.core.windows.net/typora/image-20240714143740230.png) 

This is the complete set of commands put together for configuring DHCP snooping rate limiting on a Cisco switch interface:

```plaintext
Switch# configure terminal
Switch(config) # ip dhcp snooping
Switch(config) # ip dhcp snooping vlan 10
Switch(config) # interface GigabitEthernet0/1
Switch(config-if) # ip dhcp snooping limit rate 10
Switch(config-if) # end
Switch# write memory
```

This configuration does the following:

1. Enables DHCP snooping globally.
2. Enables DHCP snooping for VLAN 10.
3. Enters interface configuration mode for the interface `GigabitEthernet0/1`.
4. Sets the rate limit for DHCP packets to 10 packets per second on the interface.
5. Exits configuration mode.
6. Saves the configuration to the switch's memory.

Using a Cisco Wireless LAN Controller (WLC)  simplifies the management of wireless networks by providing centralized configuration and management for all access points. This means you don't have to configure each access point separately, which significantly reduces the administrative burden and ensures consistency across the network. This centralized management is a key benefit of using a Cisco WLC.

**Virtual Interface**: Used to support mobility management of the WLC. This interface is used for communication between WLCs when clients roam across different WLCs in the same mobility group. It is also used for client web authentication and for communication with DHCP servers during client association.

**Dynamic Interface**: Applied to the WLAN for wireless client communication. Dynamic interfaces are used for client data traffic. Each dynamic interface is typically mapped to a VLAN in the wired network and handles the data traffic for clients associated with specific SSIDs.

#### Puppet

**Manifest Files**: Puppet uses manifest files, which are written in Puppet’s declarative language. Manifests are files with a `.pp` extension and contain the desired state configuration for managed nodes. These files describe the resources and their configurations.

#### Ansible

**Playbooks**: Ansible uses playbooks, which are written in YAML. Playbooks contain a series of "plays" or tasks that define the desired state of a system. Playbooks are highly readable and can define a series of steps for configuration management, application deployment, and other automation tasks.

**Marking Definition**: The process of setting the ToS/DSCP field in a packet to indicate its priority and quality of service requirements.

ToS (Type of Service)  is a field in the IPv4 header that specifies the priority and service quality of a packet. It is used to classify and manage network traffic to provide different levels of service quality. The ToS field has evolved into the Differentiated Services Code Point (DSCP)  field in modern networking.

The other options, shaping, policing, and classification, do not directly change the ToS field in the IPv4 packet header.

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/86534-exam-200-301-topic-1-question-595-discussion/#) : Which QoS per-hop behavior changes the value of the ToS field in the IPv4 packet header?

- A. Shaping
- B. Policing
- C. Classification
- D. Marking

**Suggested Answer:** _D_ [🗳️](https://www.examtopics.com/discussions/cisco/view/86534-exam-200-301-topic-1-question-595-discussion/#) 

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/60295-exam-200-301-topic-1-question-80-discussion/#) : How does a Cisco Unified Wireless Network respond to Wi-Fi channel overlap?

- A. It allows the administrator to assign the channels on a per-device or per-interface basis.
- B. It segregates devices from different manufactures onto different channels.
- C. It analyzes client load and background noise and dynamically assigns a channel. **Most Voted**
- D. It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/60295-exam-200-301-topic-1-question-80-discussion/#) 

Exam 200-301 topic 1 question 80 discussion - ExamTopics

Cisco Discussion, Exam 200-301 topic 1 question 80 discussion.![image-20240714143108060](https://han.blob.core.windows.net/typora/image-20240714143108060.png) 

每次都會選錯

Here is the relevant command in the context of the full DHCP configuration:

```plaintext
Router(config) # ip dhcp pool POOL_NAME
Router(dhcp-config) # network 192.168.1.0 255.255.255.0
Router(dhcp-config) # default-router 192.168.1.1
Router(dhcp-config) # dns-server 8.8.8.8
Router(dhcp-config) # exit
Router(config) # ip dhcp excluded-address 192.168.1.1 192.168.1.10
```

**Link-local addresses** are IP addresses that are used for communication within a single network segment or subnet. They are not routable beyond that local network segment. Link-local addresses are typically used for automatic address configuration, neighbor discovery, and in scenarios where no other IP address is configured.

<img src="https://han.blob.core.windows.net/typora/image-20240714142754921.png" alt="image-20240714142754921" style="zoom:50%;" />  

If the native VLANs are different, frames sent on the native VLAN from one switch will be received as untagged frames on the other switch's native VLAN. This can merge broadcast domains unintentionally.

<img src="https://han.blob.core.windows.net/typora/image-20240714142510099.png" alt="image-20240714142510099" style="zoom:50%;" />  

In terms of core sizes, OM1 and OM2 have a core of 62.5 microns while OM3, OM4, and OM5 have a core of 50 microns

Configure the `FastEthernet0/1` interface to support both VLANs:

```plaintext
Switch(config) # interface FastEthernet0/1
Switch(config-if) # switchport mode access
Switch(config-if) # switchport access vlan 10
Switch(config-if) # switchport voice vlan 20
Switch(config-if) # spanning-tree portfast
Switch(config-if) # spanning-tree bpduguard enable
Switch(config-if) # exit
```

**Purpose**: STP(Spanning Tree Protocol)  is used to prevent loops in Ethernet networks by creating a loop-free logical topology. It can cause temporary delays in port activation while it converges.

**Impact on DHCP**: **Yes, STP can prevent a workstation from receiving a DHCP address.** If the port the workstation is connected to is in a blocking or listening state due to STP convergence, the DHCP request may be delayed or dropped, preventing the workstation from obtaining an IP address in a timely manner.

VTP (VLAN Trunking Protocol)  is specified and configured on Cisco switches to manage VLANs across a network. It allows switches to share VLAN configuration information, ensuring consistency and reducing administrative overhead.

On VTP Server Switch

```plaintext
Switch# configure terminal
Switch(config) # vtp domain MY_DOMAIN
Switch(config) # vtp mode server
Switch(config) # vtp version 2
Switch(config) # vtp password MY_PASSWORD
Switch(config) # end
Switch# write memory
```

On VTP Client Switch

```plaintext
Switch# configure terminal
Switch(config) # vtp domain MY_DOMAIN
Switch(config) # vtp mode client
Switch(config) # vtp version 2
Switch(config) # vtp password MY_PASSWORD
Switch(config) # end
Switch# write memory
```

On VTP Transparent Switch

```plaintext
Switch# configure terminal
Switch(config) # vtp domain MY_DOMAIN
Switch(config) # vtp mode transparent
Switch(config) # vtp version 2
Switch(config) # vtp password MY_PASSWORD
Switch(config) # end
Switch# write memory
```

Allowing multiple VLANs to be carried on a single physical trunk link is not specifically a function of VTP (VLAN Trunking Protocol) , but rather a function of the trunking protocols and encapsulation methods used on switches.

Here’s how you can configure a trunk port on a Cisco switch to carry multiple VLANs using 802.1Q encapsulation:

```plaintext
Switch# configure terminal
Switch(config) # interface GigabitEthernet0/1
Switch(config-if) # switchport mode trunk
Switch(config-if) # switchport trunk encapsulation dot1q
Switch(config-if) # switchport trunk allowed vlan 10,20,30
Switch(config-if) # end
Switch# write memory
```

Specify the interface that should act as a DHCP client

```plaintext
Router# configure terminal
Router(config) # interface GigabitEthernet0/1
Router(config-if) # ip address dhcp
Router(config-if) # no shutdown
Router(config-if) # exit
Router(config) # end
Router# write memory
```

Control and Provisioning of Wireless Access Points (CAPWAP) . It is a protocol that enables a central wireless LAN (Local Area Network)  controller to manage a group of wireless access points. This protocol is commonly used in large-scale wireless networks, such as those found in enterprises, universities, and public spaces, where numerous access points need to be coordinated and managed efficiently.

CAPWAP is a protocol that encapsulates control and data packets between the APs and the WLC. This allows centralized management of APs, regardless of their physical location in the network.

<img src="https://han.blob.core.windows.net/typora/image-20240714142021844.png" alt="image-20240714142021844" style="zoom:50%;" /> 

Port Security Full Configuration Example

```plaintext
Switch# configure terminal
Switch(config) # interface GigabitEthernet0/1
Switch(config-if) # switchport mode access
Switch(config-if) # switchport port-security
Switch(config-if) # switchport port-security maximum 2
Switch(config-if) # switchport port-security violation restrict
Switch(config-if) # switchport port-security mac-address 0000.1111.2222
Switch(config-if) # switchport port-security mac-address 0000.3333.4444
Switch(config-if) # end
Switch# write memory
Switch# show port-security interface GigabitEthernet0/1
```

<img src="https://han.blob.core.windows.net/typora/image-20240714141439117.png" alt="image-20240714141439117" style="zoom:38%;" />  

<img src="https://han.blob.core.windows.net/typora/image-20240714141543015.png" alt="image-20240714141543015" style="zoom:50%;" />  

![image-20240714141402100](https://han.blob.core.windows.net/typora/image-20240714141402100.png) 

Detailed Analysis of the Exhibit:

```plaintext
SW1# show spanning-tree vlan 30

VLAN0030
  Spanning tree enabled protocol rstp
  Root ID    Priority    32768
             Address     0025.63e9.c800
             Cost        19
             Port        1 (FastEthernet2/1) 
             Hello Time  2 sec  Max Age 20 sec  Forward Delay 15 sec
```

This directly indicates that Rapid Spanning Tree Protocol (RSTP)  is being used. On a Cisco switch, RSTP implemented per VLAN is known as Rapid PVST+.

<img src="https://han.blob.core.windows.net/typora/image-20240714141129664.png" alt="image-20240714141129664" style="zoom:67%;" /> 

<img src="https://han.blob.core.windows.net/typora/image-20240714141055382.png" alt="image-20240714141055382" style="zoom:50%;" />  

<img src="https://han.blob.core.windows.net/typora/image-20240714140939133.png" alt="image-20240714140939133" style="zoom:50%;" />  

FHRP protocols like HSRP (Hot Standby Router Protocol) , VRRP (Virtual Router Redundancy Protocol) , and GLBP (Gateway Load Balancing Protocol)  work by creating a virtual IP address that is shared among a group of routers. One router is active, and the others are in standby mode, ready to take over if the active router fails.

The primary purpose of FHRP is to ensure continuous network availability by providing redundancy for the default gateway. This is achieved by allowing multiple routers to share a single virtual IP address and take over the role of the default gateway if the active router fails, thereby reducing routing failures. This matches the description provided in option

**NAT prefix-length**

```plaintext
Router(config) # ip nat pool POOLNAME 203.0.113.10 203.0.113.20 prefix-length 28
Router(config) # access-list 1 permit 192.168.1.0 0.0.0.255
Router(config) # interface GigabitEthernet0/1
Router(config-if) # ip address 192.168.1.1 255.255.255.0
Router(config-if) # ip nat inside
Router(config-if) # exit
Router(config) # interface GigabitEthernet0/2
Router(config-if) # ip address 203.0.113.1 255.255.255.240
Router(config-if) # ip nat outside
Router(config-if) # exit
Router(config) # ip nat inside source list 1 pool POOLNAME
```

**NAT netmask**

```plaintext
Router(config) # ip nat pool POOLNAME 203.0.113.10 203.0.113.20 netmask 255.255.255.240
Router(config) # access-list 1 permit 192.168.1.0 0.0.0.255
Router(config) # interface GigabitEthernet0/1
Router(config-if) # ip address 192.168.1.1 255.255.255.0
Router(config-if) # ip nat inside
Router(config-if) # exit
Router(config) # interface GigabitEthernet0/2
Router(config-if) # ip address 203.0.113.1 255.255.255.240
Router(config-if) # ip nat outside
Router(config-if) # exit
Router(config) # ip nat inside source list 1 pool POOLNAME
```

[Question](https://www.examtopics.com/discussions/cisco/view/43355-exam-200-301-topic-1-question-624-discussion/) : Refer to the exhibit. Which configuration for RTR-1 denies SSH access from PC-1 to any RTR-1 interface and allows all other traffic?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0050900001.png)  

**A**: This configuration applies the ACL to the `GigabitEthernet0/0` interface, denying SSH traffic from `172.16.1.33` and permitting all other traffic.

```
access-list 100 deny tcp host 172.16.1.33 any eq 22
access-list 100 permit ip any any

interface GigabitEthernet0/0
ip access-group 100 in
```

**B**: This configuration applies the ACL to the VTY (virtual terminal)  lines, denying SSH traffic from `172.16.1.33` and permitting all other traffic.

```
access-list 100 deny tcp host 172.16.1.33 any eq 22
access-list 100 permit ip any any

line vty 0 15
access-class 100 in
```

**C**: This configuration also applies the ACL to the `GigabitEthernet0/0` interface, but incorrectly blocks port 23 instead of port 22.

```
access-list 100 deny tcp host 172.16.1.33 any eq 23
access-list 100 permit ip any any

interface GigabitEthernet0/0
ip access-group 100 in
```

**D**: This configuration applies the ACL to the VTY lines, but incorrectly blocks port 23 instead of port 22.

```
access-list 100 deny tcp host 172.16.1.33 any eq 23
access-list 100 permit ip any any

line vty 0 15
access-class 100 in
```

<img src="https://han.blob.core.windows.net/typora/image-20240705230950552.png" alt="image-20240705230950552" style="zoom:50%;" />  

Learning how to forward.

<img src="https://han.blob.core.windows.net/typora/image-20240705231823009.png" alt="image-20240705231823009" style="zoom:35%;" />  

<img src="https://han.blob.core.windows.net/typora/image-20240705231705961.png" alt="image-20240705231705961" style="zoom:50%;" />  

<img src="https://han.blob.core.windows.net/typora/image-20240705231724708.png" alt="image-20240705231724708" style="zoom:50%;" />  

[Question](https://www.examtopics.com/discussions/cisco/view/41531-exam-200-301-topic-1-question-530-discussion/#) : Refer to the exhibit. An engineer deploys a topology in which R1 obtains its IP configuration from DHCP. If the switch and DHCP server configurations are complete and correct, which two sets of commands must be configured on R1 and R2 to complete the task? (Choose two.) 

![image-20240705232323940](https://han.blob.core.windows.net/typora/image-20240705232323940.png) 

```txt
R2(config) # interface gi0/0
R2(config-if) # ip helper-address 198.51.100.100
```

```txt
R1(config) # interface fa0/0
R1(config-if) # ip address dhcp
R1(config-if) # no shutdown
```

### Other Questions

[Question](https://www.examtopics.com/discussions/cisco/view/81202-exam-200-301-topic-1-question-311-discussion/#) : Which WLC interface provides out-of-band management in the Cisco Unified Wireless Network Architecture?

- A. AP-Manager
- B. service port **Most Voted**
- C. dynamic
- D. virtual

**Suggested Answer:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/81202-exam-200-301-topic-1-question-311-discussion/#) 

Out of band is service-port interface
In band is management interface

The service port is used for out-of-band management of the controller and system recovery and maintenance in the event of a network failure. It is important to note that the service port does not support VLAN trunking or VLAN tagging and is therefore required to connect to an access port on the switch.

These ports are used for different types of management and maintenance tasks on the WLC:

- **Console port**: Used for initial configuration and troubleshooting, providing direct access to the command-line interface (CLI)  of the WLC.
- **Service port**: Used for out-of-band management, allowing management traffic to be separated from the operational network traffic. This port is often used for tasks such as software upgrades and other administrative tasks.

<img src="https://han.blob.core.windows.net/typora/image-20240705215708970.png" alt="image-20240705215708970" style="zoom:50%;" /> 

The bandwidth of T-carrier systems (T1, T2, T3, etc.)  varies as follows:

- **T1**: 1.544 Mbps (24 DS0 channels at 64 kbps each plus overhead) 
- **T2**: 6.312 Mbps (96 DS0 channels) 
- **T3**: 44.736 Mbps (672 DS0 channels) 
- **T4**: 274.176 Mbps (4032 DS0 channels) 

<img src="https://han.blob.core.windows.net/typora/image-20240705215322949.png" alt="image-20240705215322949" style="zoom:25%;" /> 

In a hub-and-spoke WAN topology, there is a central "hub" site connected to multiple remote "spoke" sites. All communication between spoke sites typically passes through the hub.

**D**: This is correct. In a hub-and-spoke topology, since all traffic between spokes passes through the hub, it allows the central hub to implement and manage access restrictions between different spoke sites effectively. This central control can enforce security policies and restrict access between specific sites.

Hub-and-Spoke WAN Topology

1. **Centralized Control**: The hub acts as a central point of control and management for the network.
2. **Simplified Management**: Easier to manage and configure since all communication passes through the hub.
3. **Cost-Effective**: Reduces the number of direct connections needed between remote sites, lowering overall network costs.

<img src="https://han.blob.core.windows.net/typora/image-20240705213817440.png" alt="image-20240705213817440" style="zoom:50%;" /> 

First Hop, not Hot Standby Router Protocol (HSRP) 

<img src="https://han.blob.core.windows.net/typora/image-20240705213958191.png" alt="image-20240705213958191" style="zoom:50%;" /> 

TFTP (D)  is primarily used for file transfers and not typically used for direct management connections. While it is not a secure protocol, it is not as directly relevant to management connection security as HTTP and Telnet are. The focus of the question is on management connections, so protocols used primarily for management (HTTP and Telnet)  are more related.

TFTP is an unsecure protocol used for transferring files, typically in network booting or firmware updates. It is not commonly used for management connections and should be secured or disabled, but it's not directly relevant to the question of management connections.

Why TFTP (D)  is not included: TFTP is used for file transfers, such as firmware upgrades, and is not typically used for interactive management sessions. While TFTP lacks security features and should be used cautiously, it is not as relevant to management connection security as HTTP and Telnet.

<img src="https://han.blob.core.windows.net/typora/image-20240705212031564.png" alt="image-20240705212031564" style="zoom:50%;" /> 

The correct answer is **D. It discards the packets.** Let's analyze why this is the case by examining the routing table and the destination IP address:

Routing Table Analysis:

- **10.10.10.0/28**: Directly connected, GigabitEthernet0/0
- **10.10.11.0/30**: Directly connected, FastEthernet2/0
- **10.10.13.0/24**: Directly connected, GigabitEthernet0/0
- **10.10.12.0/30**: Directly connected, GigabitEthernet0/1
- **209.165.200.224/27**: [20/0] via 10.10.12.2

Subnet Breakdown:

- **10.10.10.0/28**: This subnet covers the IP range from 10.10.10.0 to 10.10.10.15.
- **10.10.10.16**: This IP address does not fall within the range of 10.10.10.0/28. It falls into the next subnet if we extend the subnet mask (10.10.10.16/28 would be part of 10.10.10.16 to 10.10.10.31) .

<img src="https://han.blob.core.windows.net/typora/image-20240705210607208.png" alt="image-20240705210607208" style="zoom:50%;" /> 

B is correct higher level includes the lower levels.

Setting the syslog severity to **debug** (level 7)  ensures that all messages, including informational messages (level 6) , are captured. Hence, to get informational syslogs, you must set the severity level to debug or lower (numerically higher) .

[Question](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#) : Which feature would prevent a workstation from receiving a DHCP address?

- A. STP
- B. 802.1Q
- C. VTP
- D. DTP

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#) 

STP can prevent DHCP clients from getting an address because the port doesn't start forwarding traffic until STP goes into the forwarding state. That can be up to 30 seconds.

[Question](https://www.examtopics.com/discussions/cisco/view/62575-exam-200-301-topic-1-question-434-discussion/#) : Which action does the router take as it forwards a packet through the network?

- A. The router encapsulates the original packet and then includes a tag that identifies the source router MAC address and transmits it transparently to the destination.
- B. The router encapsulates the source and destination IP addresses with the sending router IP address as the source and the neighbor IP address as the destination.
- C. The router replaces the original source and destination MAC addresses with the sending router MAC address as the source and neighbor MAC address as the destination.
- D. The router replaces the source and destination labels with the sending router interface label as a source and the next hop router label as a destination.

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/62575-exam-200-301-topic-1-question-434-discussion/#) 

[Question](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#) : Which feature would prevent a workstation from receiving a DHCP address?

- A. STP
- B. 802.1Q
- C. VTP
- D. DTP

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#) 

DHCP discovery packets is a broadcast, it possibly has broadcast strom

<img src="https://han.blob.core.windows.net/typora/image-20240705205947259.png" alt="image-20240705205947259" style="zoom:50%;" /> 

這一題已經不只寫一次了

<img src="https://han.blob.core.windows.net/typora/image-20240705205612509.png" alt="image-20240705205612509" style="zoom:50%;" /> 

**Why B is Correct and D is Not:**

- **Requirement**: The question specifically states that the interface must transmit packets using the same priority for data received from the access port of the IP phone. This implies that the priority for data packets should be maintained and extended, not just for voice traffic.
- `switchport priority extend cos`: This command extends the specified CoS value to all packets, including data packets from the IP phone, ensuring that both data and voice packets maintain the appropriate priority.
- `switchport voice vlan dot1p`: This command focuses on tagging voice traffic with a specific priority but does not address the priority handling for data traffic from the IP phone.

<img src="https://han.blob.core.windows.net/typora/image-20240705194159339.png" alt="image-20240705194159339" style="zoom:50%;" /> 

<img src="https://han.blob.core.windows.net/typora/image-20240705193941259.png" alt="image-20240705193941259" style="zoom:50%;" /> 

The full name of FHRP is **First Hop Redundancy Protocol**. It is used to ensure high availability and redundancy of the default gateway in a network. Examples of FHRPs include HSRP (Hot Standby Router Protocol) , VRRP (Virtual Router Redundancy Protocol) , and GLBP (Gateway Load Balancing Protocol) .

**FHRPs**, such as HSRP, VRRP, and GLBP, provide a mechanism for ensuring that if one gateway goes down, another can take over, thus enabling automatic failover. FHRPs create a virtual gateway address that is shared among multiple devices (routers or switches) , providing redundancy and load balancing.

The correct answers are:

**A. They enable automatic failover of the default gateway.**
**B. They allow multiple devices to serve as a single virtual gateway for clients in the network.**

<img src="https://han.blob.core.windows.net/typora/image-20240705193731336.png" alt="image-20240705193731336" style="zoom:50%;" /> 

**B. It can be hidden or broadcast in a WLAN**:
SSIDs can be configured to be either broadcast (visible)  or hidden (not visible)  in a WLAN. When broadcast, devices can easily find and connect to the network. When hidden, the SSID is not visible in the list of available networks, but devices can still connect to it if they know the SSID.

**C. It is at most 32 characters long**:
An SSID can be up to 32 characters in length, which can include letters, numbers, and special characters. This limitation ensures compatibility across various devices and network equipment.

<img src="https://han.blob.core.windows.net/typora/image-20240705193351695.png" alt="image-20240705193351695" style="zoom:50%;" /> 

Before enabling `service password-encryption`:

```plaintext
Router# show running-config
!
line vty 0 4
 password cisco
 login
!
```

After enabling `service password-encryption`:

```plaintext
Router(config) # service password-encryption
Router(config) # exit
Router# show running-config
!
line vty 0 4
 password 7 0822455D0A16
 login
!
```

**Weak Encryption**: The `service password-encryption` command uses type 7 encryption, which is a simple XOR-based encryption. It is not very secure and can be easily reversed with tools available online.

**Best Practices**: For stronger security, use `enable secret` instead of `enable password`. The `enable secret` command uses MD5 hashing, which is much more secure.

**Configuration Management**: It is recommended to enable `service password-encryption` to prevent casual viewing of passwords in the configuration, but always consider additional security measures for critical passwords.

[Question](https://www.examtopics.com/discussions/cisco/view/129971-exam-200-301-topic-1-question-1133-discussion/#) : Refer to the exhibit. An engineer is configuring a new router on the network and applied this configuration. Which additional configuration allows the PC to obtain its IP address from a DHCP server?

![image-20240705193255279](https://han.blob.core.windows.net/typora/image-20240705193255279.png) 

- A. Configure the ip helper-address 172.16.2.2 command under interface Gi0/0.
- B. Configure the ip dhcp relay information command under interface Gi0/1
- C. Configure the ip address dhcp command under interface Gi0/0
- D. Configure the ip dhcp smart-relay command globally on the router.

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/129971-exam-200-301-topic-1-question-1133-discussion/#) 

```plaintext
Router(config) # interface GigabitEthernet0/0
Router(config-if) # ip helper-address 172.16.2.2
```

[Question](https://www.examtopics.com/discussions/cisco/view/109086-exam-200-301-topic-1-question-598-discussion/#) : Refer to the exhibit. Which plan must be implemented to ensure optimal QoS marking practices on this network?

![image-20240705192128312](https://han.blob.core.windows.net/typora/image-20240705192128312.png) 

- ✔A. Trust the IP phone markings on SW1 and mark traffic entering SW2 at SW2
- B. As traffic traverses MLS1 remark the traffic, but trust all markings at the access layer
- C. Remark traffic as it traverses R1 and trust all markings at the access layer.
- D. As traffic enters from the access layer on SW1 and SW2, trust all traffic markings.

This diagram depicts a network topology that includes an MPLS cloud, a router (R1) , a multilayer switch (MLS1) , and two switches (SW1 and SW2) . The devices connected to the switches include an IP phone and a computer.

The suggested answer (Option A)  is correct because it ensures that the IP phone markings are trusted on SW1, which is crucial for prioritizing voice traffic. Additionally, marking traffic entering SW2 ensures proper QoS handling for devices connected to SW2. Trusting and marking traffic at the appropriate points ensures that high-priority traffic, such as voice, receives the necessary QoS treatment throughout the network.

[Question](https://www.examtopics.com/discussions/cisco/view/89315-exam-200-301-topic-1-question-135-discussion/#) : Refer to the exhibit. What is a reason for poor performance on the network interface?

- A. The interface is receiving excessive broadcast traffic.
- B. The bandwidth setting of the interface is misconfigured.
- ✔ (CRC Error)  C. The cable connection between the two devices is faulty.
- D. The interface is operating at a different speed than the connected device.

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/89315-exam-200-301-topic-1-question-135-discussion/#) 

<img src="https://han.blob.core.windows.net/typora/image-20240705193157617.png" alt="image-20240705193157617" style="zoom:50%;" /> 

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/109086-exam-200-301-topic-1-question-598-discussion/#) 
Tell the switch to trust CoS markings from a Cisco IP phone on the access port. Cisco IP phones use 802.1q tags, these .1q tags contain the CoS value, to mark voice traffic at layer 2. When it's forwarded upstream, the DSCP value is trusted (on the uplink port)  and unchanged, but the .1q tag (and with it the CoS value)  is stripped off by the upstream switch when received over the trunk.

![image-20240705191947878](https://han.blob.core.windows.net/typora/image-20240705191947878.png) 

Site A: `TenGigabitEthernet0/1/0` uses `SFP-SR` (Short Range)  transceivers.
Site B: `TenGigabitEthernet0/1/0` uses `SFP-LR` (Long Range)  transceivers.

The distance between the sites is 7 KM. SFP-SR transceivers are designed for short-range connections (up to 300 meters over multi-mode fiber) , while SFP-LR transceivers are designed for long-range connections (up to 10 KM over single-mode fiber) . Using an SFP-SR transceiver for a 7 KM connection is not appropriate and could lead to connectivity issues. Both ends should use SFP-LR transceivers for a 7 KM link.

[Question](https://www.examtopics.com/discussions/cisco/view/74668-exam-200-301-topic-1-question-267-discussion/#) : A network engineer must configure two new subnets using the address block 10.70.128.0/19 to meet these requirements:
\- The first subnet must support 24 hosts.
\- The second subnet must support 472 hosts.
\- Both subnets must use the longest subnet mask possible from the address block.

Which two configurations must be used to configure the new subnets and meet a requirement to use the first available address in each subnet for the router interfaces? (Choose two.) 

- A. interface vlan 1148 ip address 10.70.148.1 255.255.254.0 **Most Voted**
- B. interface vlan 3002 ip address 10.70.147.17 255.255.255.224
- C. interface vlan 4722 ip address 10.70.133.17 255.255.255.192
- D. interface vlan 1234 ip address 10.70.159.1 255.255.254.0
- E. interface vlan 155 ip address 10.70.155.65 255.255.255.224 **Most Voted**

**Suggested Answer:** _DE_ [🗳️](https://www.examtopics.com/discussions/cisco/view/74668-exam-200-301-topic-1-question-267-discussion/#) 

**Option D**: `interface vlan 1234 ip address 10.70.159.1 255.255.254.0`

- Subnet: 10.70.158.0/23
- Range: 10.70.158.0 - 10.70.159.255
- First usable: 10.70.158.1
- This could be used for the 472 hosts requirement but is not the first available subnet.

**Option A**: `interface vlan 1148 ip address 10.70.148.1 255.255.254.0`

- Subnet: 10.70.148.0/23
- Range: 10.70.148.0 - 10.70.149.255
- First usable: 10.70.148.1
- This could be used for the 472 hosts requirement but is not the first available subnet after 10.70.128.0/19.

**Option E**: `interface vlan 155 ip address 10.70.155.65 255.255.255.224`

- Subnet: 10.70.155.64/27
- Range: 10.70.155.64 - 10.70.155.95
- First usable: 10.70.155.65
- This could be used for the 24 hosts requirement but is not the first available subnet.

<img src="https://han.blob.core.windows.net/typora/image-20240705191841573.png" alt="image-20240705191841573" style="zoom:50%;" /> 

**B. to provide link redundancy and load balancing**
This is correct. LAG's primary purpose is to improve network reliability by providing redundancy and to enhance performance by balancing the traffic load across multiple links.

**C. to allow for stateful and link-state failover**
This is incorrect in the context of LAG on a WLC. Stateful failover refers to maintaining active session information during a failover event, which is more related to high-availability configurations rather than LAG. Link-state failover typically refers to protocols like HSRP or VRRP, which are used for router redundancy.

Question: What is the purpose of an ESSID?

- A. It allows multiple access points to provide a common network for client connections.
- B. It supports fast roaming features such as 802.11 r, 802.11k, and 802.11v.
- C. It serves as the wireless MAC address of the access point.
- D. It provides greater security than a standard SSID.

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/129517-exam-200-301-topic-1-question-1291-discussion/#) 

The ESSID is used to identify a network name that is shared among multiple access points (APs)  within the same Extended Service Set (ESS) . This allows for seamless connectivity as clients can roam between different APs within the same network without needing to reconnect or change settings. All APs broadcasting the same ESSID are part of the same logical wireless network, providing consistent connectivity across a larger area.

![image-20240705191531337](https://han.blob.core.windows.net/typora/image-20240705191531337.png) 

B is correct
G0/0 is 100000000Kb/10000000Kb = 10
G0/1 is 100000000Kb/100000000kB = 1

[Question](https://www.examtopics.com/discussions/cisco/view/77317-exam-200-301-topic-1-question-570-discussion/#) : A network engineer is configuring a switch so that it is remotely reachable via SSH. The engineer has already configured the host name on the router. Which additional command must the engineer configure before entering the command to generate the RSA key?

- A. password password
- B. ip ssh authentication-retries 2
- C. ip domain-name domain **Most Voted**
- D. crypto key generate rsa modulus 1024

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/77317-exam-200-301-topic-1-question-570-discussion/#) 

The command **crypto key generate rsa modulus 1024** (option **D**)  is the command to generate the RSA key but it cannot be executed successfully unless the domain name is already configured. Thus, **C: ip domain-name domain** must be configured before **D** can be used.
