# Questions Completed on TEAMS

### LAB

Refer to the exhibit. Which configuration for RTR-1 denies SSH access from PC-1 to any RTR-1 interface and allows all other traffic?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0050900001.png) 

**A**: This configuration applies the ACL to the `GigabitEthernet0/0` interface, denying SSH traffic from `172.16.1.33` and permitting all other traffic.

```
access-list 100 deny tcp host 172.16.1.33 any eq 22
access-list 100 permit ip any any

interface GigabitEthernet0/0
ip access-group 100 in
```

**B**: This configuration applies the ACL to the VTY (virtual terminal) lines, denying SSH traffic from `172.16.1.33` and permitting all other traffic.

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

[Question](https://www.examtopics.com/discussions/cisco/view/41531-exam-200-301-topic-1-question-530-discussion/#): Refer to the exhibit. An engineer deploys a topology in which R1 obtains its IP configuration from DHCP. If the switch and DHCP server configurations are complete and correct, which two sets of commands must be configured on R1 and R2 to complete the task? (Choose two.)

![image-20240705232323940](https://han.blob.core.windows.net/typora/image-20240705232323940.png)

```txt
R2(config)# interface gi0/0
R2(config-if)# ip helper-address 198.51.100.100
```

```txt
R1(config)# interface fa0/0
R1(config-if)# ip address dhcp
R1(config-if)# no shutdown
```

### Other Questions

[Question](https://www.examtopics.com/discussions/cisco/view/81202-exam-200-301-topic-1-question-311-discussion/#): Which WLC interface provides out-of-band management in the Cisco Unified Wireless Network Architecture?

- A. AP-Manager
- B. service port **Most Voted**
- C. dynamic
- D. virtual

**Suggested Answer:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/81202-exam-200-301-topic-1-question-311-discussion/#)

Out of band is service-port interface
In band is management interface

The service port is used for out-of-band management of the controller and system recovery and maintenance in the event of a network failure. It is important to note that the service port does not support VLAN trunking or VLAN tagging and is therefore required to connect to an access port on the switch.

These ports are used for different types of management and maintenance tasks on the WLC:

- **Console port**: Used for initial configuration and troubleshooting, providing direct access to the command-line interface (CLI) of the WLC.
- **Service port**: Used for out-of-band management, allowing management traffic to be separated from the operational network traffic. This port is often used for tasks such as software upgrades and other administrative tasks.

<img src="https://han.blob.core.windows.net/typora/image-20240705215708970.png" alt="image-20240705215708970" style="zoom:50%;" /> 

The bandwidth of T-carrier systems (T1, T2, T3, etc.) varies as follows:

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

TFTP (D) is primarily used for file transfers and not typically used for direct management connections. While it is not a secure protocol, it is not as directly relevant to management connection security as HTTP and Telnet are. The focus of the question is on management connections, so protocols used primarily for management (HTTP and Telnet) are more related.

TFTP is an unsecure protocol used for transferring files, typically in network booting or firmware updates. It is not commonly used for management connections and should be secured or disabled, but it's not directly relevant to the question of management connections.

Why TFTP (D) is not included: TFTP is used for file transfers, such as firmware upgrades, and is not typically used for interactive management sessions. While TFTP lacks security features and should be used cautiously, it is not as relevant to management connection security as HTTP and Telnet.

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
- **10.10.10.16**: This IP address does not fall within the range of 10.10.10.0/28. It falls into the next subnet if we extend the subnet mask (10.10.10.16/28 would be part of 10.10.10.16 to 10.10.10.31).

<img src="https://han.blob.core.windows.net/typora/image-20240705210607208.png" alt="image-20240705210607208" style="zoom:50%;" /> 

B is correct higher level includes the lower levels.

Setting the syslog severity to **debug** (level 7) ensures that all messages, including informational messages (level 6), are captured. Hence, to get informational syslogs, you must set the severity level to debug or lower (numerically higher).

[Question](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#): Which feature would prevent a workstation from receiving a DHCP address?

- A. STP
- B. 802.1Q
- C. VTP
- D. DTP

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#)

STP can prevent DHCP clients from getting an address because the port doesn't start forwarding traffic until STP goes into the forwarding state. That can be up to 30 seconds.

[Question](https://www.examtopics.com/discussions/cisco/view/62575-exam-200-301-topic-1-question-434-discussion/#): Which action does the router take as it forwards a packet through the network?

- A. The router encapsulates the original packet and then includes a tag that identifies the source router MAC address and transmits it transparently to the destination.
- B. The router encapsulates the source and destination IP addresses with the sending router IP address as the source and the neighbor IP address as the destination.
- C. The router replaces the original source and destination MAC addresses with the sending router MAC address as the source and neighbor MAC address as the destination.
- D. The router replaces the source and destination labels with the sending router interface label as a source and the next hop router label as a destination.

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/62575-exam-200-301-topic-1-question-434-discussion/#)

[Question](https://www.examtopics.com/discussions/cisco/view/14022-exam-200-105-topic-2-question-108-discussion/#): Which feature would prevent a workstation from receiving a DHCP address?

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

The full name of FHRP is **First Hop Redundancy Protocol**. It is used to ensure high availability and redundancy of the default gateway in a network. Examples of FHRPs include HSRP (Hot Standby Router Protocol), VRRP (Virtual Router Redundancy Protocol), and GLBP (Gateway Load Balancing Protocol).

**FHRPs**, such as HSRP, VRRP, and GLBP, provide a mechanism for ensuring that if one gateway goes down, another can take over, thus enabling automatic failover. FHRPs create a virtual gateway address that is shared among multiple devices (routers or switches), providing redundancy and load balancing.

The correct answers are:

**A. They enable automatic failover of the default gateway.**
**B. They allow multiple devices to serve as a single virtual gateway for clients in the network.**

<img src="https://han.blob.core.windows.net/typora/image-20240705193731336.png" alt="image-20240705193731336" style="zoom:50%;" /> 

**B. It can be hidden or broadcast in a WLAN**:
SSIDs can be configured to be either broadcast (visible) or hidden (not visible) in a WLAN. When broadcast, devices can easily find and connect to the network. When hidden, the SSID is not visible in the list of available networks, but devices can still connect to it if they know the SSID.

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
Router(config)# service password-encryption
Router(config)# exit
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

[Question](https://www.examtopics.com/discussions/cisco/view/129971-exam-200-301-topic-1-question-1133-discussion/#): Refer to the exhibit. An engineer is configuring a new router on the network and applied this configuration. Which additional configuration allows the PC to obtain its IP address from a DHCP server?

![image-20240705193255279](https://han.blob.core.windows.net/typora/image-20240705193255279.png)

- A. Configure the ip helper-address 172.16.2.2 command under interface Gi0/0.
- B. Configure the ip dhcp relay information command under interface Gi0/1
- C. Configure the ip address dhcp command under interface Gi0/0
- D. Configure the ip dhcp smart-relay command globally on the router.

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/129971-exam-200-301-topic-1-question-1133-discussion/#)

```plaintext
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip helper-address 172.16.2.2
```

[Question](https://www.examtopics.com/discussions/cisco/view/109086-exam-200-301-topic-1-question-598-discussion/#): Refer to the exhibit. Which plan must be implemented to ensure optimal QoS marking practices on this network?

![image-20240705192128312](https://han.blob.core.windows.net/typora/image-20240705192128312.png)

- ✔A. Trust the IP phone markings on SW1 and mark traffic entering SW2 at SW2
- B. As traffic traverses MLS1 remark the traffic, but trust all markings at the access layer
- C. Remark traffic as it traverses R1 and trust all markings at the access layer.
- D. As traffic enters from the access layer on SW1 and SW2, trust all traffic markings.

This diagram depicts a network topology that includes an MPLS cloud, a router (R1), a multilayer switch (MLS1), and two switches (SW1 and SW2). The devices connected to the switches include an IP phone and a computer.

The suggested answer (Option A) is correct because it ensures that the IP phone markings are trusted on SW1, which is crucial for prioritizing voice traffic. Additionally, marking traffic entering SW2 ensures proper QoS handling for devices connected to SW2. Trusting and marking traffic at the appropriate points ensures that high-priority traffic, such as voice, receives the necessary QoS treatment throughout the network.

[Question](https://www.examtopics.com/discussions/cisco/view/89315-exam-200-301-topic-1-question-135-discussion/#): Refer to the exhibit. What is a reason for poor performance on the network interface?

- A. The interface is receiving excessive broadcast traffic.
- B. The bandwidth setting of the interface is misconfigured.
- ✔ (CRC Error) C. The cable connection between the two devices is faulty.
- D. The interface is operating at a different speed than the connected device.

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/89315-exam-200-301-topic-1-question-135-discussion/#)

<img src="https://han.blob.core.windows.net/typora/image-20240705193157617.png" alt="image-20240705193157617" style="zoom:50%;" /> 

**Suggested Answer:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/109086-exam-200-301-topic-1-question-598-discussion/#)
Tell the switch to trust CoS markings from a Cisco IP phone on the access port. Cisco IP phones use 802.1q tags, these .1q tags contain the CoS value, to mark voice traffic at layer 2. When it's forwarded upstream, the DSCP value is trusted (on the uplink port) and unchanged, but the .1q tag (and with it the CoS value) is stripped off by the upstream switch when received over the trunk.

![image-20240705191947878](https://han.blob.core.windows.net/typora/image-20240705191947878.png)

Site A: `TenGigabitEthernet0/1/0` uses `SFP-SR` (Short Range) transceivers.
Site B: `TenGigabitEthernet0/1/0` uses `SFP-LR` (Long Range) transceivers.

The distance between the sites is 7 KM. SFP-SR transceivers are designed for short-range connections (up to 300 meters over multi-mode fiber), while SFP-LR transceivers are designed for long-range connections (up to 10 KM over single-mode fiber). Using an SFP-SR transceiver for a 7 KM connection is not appropriate and could lead to connectivity issues. Both ends should use SFP-LR transceivers for a 7 KM link.

[Question](https://www.examtopics.com/discussions/cisco/view/74668-exam-200-301-topic-1-question-267-discussion/#): A network engineer must configure two new subnets using the address block 10.70.128.0/19 to meet these requirements:
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

The ESSID is used to identify a network name that is shared among multiple access points (APs) within the same Extended Service Set (ESS). This allows for seamless connectivity as clients can roam between different APs within the same network without needing to reconnect or change settings. All APs broadcasting the same ESSID are part of the same logical wireless network, providing consistent connectivity across a larger area.

![image-20240705191531337](https://han.blob.core.windows.net/typora/image-20240705191531337.png)

B is correct
G0/0 is 100000000Kb/10000000Kb = 10
G0/1 is 100000000Kb/100000000kB = 1

[Question](https://www.examtopics.com/discussions/cisco/view/77317-exam-200-301-topic-1-question-570-discussion/#): A network engineer is configuring a switch so that it is remotely reachable via SSH. The engineer has already configured the host name on the router. Which additional command must the engineer configure before entering the command to generate the RSA key?

- A. password password
- B. ip ssh authentication-retries 2
- C. ip domain-name domain **Most Voted**
- D. crypto key generate rsa modulus 1024

**Suggested Answer:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/77317-exam-200-301-topic-1-question-570-discussion/#)

The command **crypto key generate rsa modulus 1024** (option **D**) is the command to generate the RSA key but it cannot be executed successfully unless the domain name is already configured. Thus, **C: ip domain-name domain** must be configured before **D** can be used.
