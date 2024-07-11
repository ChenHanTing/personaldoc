---
sidebar_position: 52
---

# Questions Completed on 2024-06-07

[Question](https://www.examtopics.com/discussions/cisco/view/69022-exam-200-301-topic-1-question-628-discussion/): Refer to the exhibit. If the network environment is operating normally, which type of device must be connected to interface fastethernet 0/1?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0051200001.png)

- A. DHCP client
- B. access point
- C. router **Most Voted**
- D. PC

In a typical network configuration, you configure all switch ports connected to host ports as untrusted and configure all switch ports connected to switches as trusted. With this configuration, all ARP packets entering the network from a given switch bypass the security check. No other validation is needed at any other place in the VLAN or in the network. You configure the trust setting by using the ip arp inspection trust interface configuration command.

**Dynamic ARP Inspection** is a security feature that helps prevent ARP spoofing attacks. ARP spoofing attacks can allow an attacker to intercept, modify, or block traffic on a network.

When a port is configured as trusted in DAI, it means that the device connected to that port is considered secure and **its ARP packets are not subjected to inspection** (不接受檢查)

**DHCP Snooping** is a security feature that filters untrusted DHCP messages and **builds a DHCP binding table**. This helps prevent rogue DHCP servers from distributing incorrect IP addresses or other DHCP options.

When a port is configured as trusted in DHCP Snooping, it means that the DHCP messages from this port are trusted and allowed, typically because it is connected to a legitimate DHCP server or a trusted device.

By marking ports as trusted, network devices can bypass certain security checks, reducing overhead and improving performance on secure parts of the network.

It is generally best practice to configure only network devices (such as routers, switches, and legitimate DHCP servers) as trusted devices.

**Network devices like routers and switches** play a central role in directing and managing network traffic. They are typically **under administrative control** and are considered secure and reliable. **End devices** (like PCs, printers, and other user devices) are more vulnerable to being compromised. Configuring these devices as trusted could allow malicious activities like ARP spoofing or rogue DHCP server attacks to go undetected.

Configuring DAI and DHCP Snooping on a Trusted Port:

```
interface GigabitEthernet0/1
  ip arp inspection trust
  ip dhcp snooping trust
```

Configuring DAI and DHCP Snooping on an Untrusted Port:

```
interface GigabitEthernet0/2
  no ip arp inspection trust
  no ip dhcp snooping trust
```

Which MAC address is recognized as a VRRP virtual address?

- A. 0000.5E00.010a **Most Voted**
- B. 0005.3709.8968
- C. 0000.0C07.AC99
- D. 0007.C070.AB01

  0000.5E00.01xx is VRRP virtual MAC (Ans. A with xx=0A group)
  0000.0c07.acxx is HSRP virtual MAC address (Ans. C with xx=99)
  0007.b400.xxyy is GLBP virtual MAC (Not in the answers), xx is group and yy is AVF
  I don't know what B and D are.

Here is a Tip to get rid of the confusion between HSRP and VRRP.
The second letters of both are HSRP:S and VRRP:R
in the alphabet the first letter that we find is R followed by S, so R comes before S, so does number 5 come before number 7.
VRRP is always associated to number 5 (R).
HSRP is always associated to number 7(S).

Refer to the exhibit. Which action is expected from SW1 when the untagged frame is received on the GigabitEthernet0/1 interface?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0015600001.png)

- A. The frame is processed in VLAN 1
- B. The frame is processed in VLAN 11
- C. The frame is processed in VLAN 5 ✅
- D. The frame is dropped

Detailed Analysis of the Exhibit:

- **switchport access vlan 11**: This command sets VLAN 11 as the access VLAN, but this is irrelevant for a trunk port operation as shown.
- **switchport trunk allowed vlan 1-10**: This command allows VLANs 1 through 10 on the trunk.
- **switchport trunk encapsulation dot1q**: This command sets the encapsulation method to 802.1Q.
- **switchport trunk native vlan 5**: This command sets VLAN 5 as the native VLAN.
- **switchport mode trunk**: This command configures the port as a trunk port.
- **speed 1000** and **duplex full**: These commands set the speed to 1000 Mbps and the duplex mode to full, respectively.

> I have seen many of my old co-workers do this. SMH. Needless to say, i quit when they started arguing with my boss that this was best practice he believed them.

> I have seen in my days this type of horrible configuration. The answer is correct.

When configuring a WLAN with WPA2 PSK in the Cisco Wireless LAN Controller GUI, which two formats are available to select? (Choose two.)

- A. decimal
- B. ASCII **Most Voted**
- C. hexadecimal **Most Voted**
- D. binary
- E. base64

> Both ASCII and hexadecimal formats are commonly used for entering the pre-shared key when configuring a WLAN with WPA2 PSK. These formats allow for easy input and representation of the key in a human-readable form. The other options (decimal, binary, base64) are not typically used for entering pre-shared keys in this context.

Focusing on the relevant settings for PSK, FT PSK, and TKIP in the context of WPA/WPA2 parameters for a wireless network configuration to explain:

![img](https://www.examtopics.com/assets/media/exam-media/04300/0019800001.png)

**PSK (Pre-Shared Key)**: This is a common method for securing wireless networks, particularly in personal or small business environments. It involves using a shared secret key or passphrase that must be entered on both the wireless access point (AP) and client devices to establish a secure connection.

**FT PSK (Fast Transition Pre-Shared Key)**: Also known as 802.11r, this feature enables seamless and secure fast roaming between APs. When enabled, FT PSK allows devices to quickly and securely transition from one AP to another within the same network without re-authentication, which reduces latency and improves the user experience, particularly in environments with multiple APs.

**TKIP (Temporal Key Integrity Protocol)**: TKIP was introduced as a part of WPA (Wi-Fi Protected Access) to provide more robust encryption than WEP (Wired Equivalent Privacy). However, TKIP has been superseded(replaced) by more secure encryption methods like AES (Advanced Encryption Standard). TKIP is generally considered obsolete due to known security vulnerabilities, and its use is discouraged in modern networks.

Refer to the exhibit. Users need to connect to the wireless network with IEEE 802.11r-compatible devices. The connection must be maintained as users travel between floors or to other areas in the building. What must be the configuration of the connection?

- A. Disable AES encryption.
- B. Enable Fast Transition and select the FT 802.1x option.
- C. Enable Fast Transition and select the FT PSK option. **Most Voted**
- D. Select the WPA Policy option with the CCKM option.

> Answer is C. I believe that in the WLC GUI, generally, you cannot simultaneously enable both 802.1x and PSK authentication methods for the same WLAN, it would have to be on separate WLANs. Therefore, as the PSK method is already used, we should not change it to 802.1x/EAP, and legacy devices that do not have the 802.11r feature would just not take advantage of FT fast roaming with the initial handshake already pre-established with another AP via the 802.11r protocol, having to go through the entire reauthentication and reassociation process when roaming, creating a delay, but the devices it supports would take advantage of this feature (FT) while they roam the company's floors getting almost instantaneous associations when needs roaming.

An organization secures its network with multi-factor authentication using an authenticator app on employee smartphones. How is the application secured in the case of a user's smartphone being lost or stolen?

- A. The application requires the user to enter a PIN before it provides the second factor
- B. The application requires an administrator password to reactivate after a configured interval
- C. The application verifies that the user is in a specific location before it provides the second factor
- D. The application challenges a user by requiring an administrator password to reactivate when the smartphone is rebooted

> something i know- PIN
> something i have - the mobile

[Video support](https://www.youtube.com/watch?v=PCpnRqKCWCQ): Which 802.11 frame type is Association Response?

- A. management
- B. protected frame
- C. action
- D. control

> **Correct Answer:** _A_ [🗳️](https://www.examtopics.com/exams/cisco/200-301/view/#)
> There are three main types of 802.11 frames: the Data Frame, the Management Frame and the Control Frame. Association Response belongs to Management
> Frame. Association response is sent in response to an association request.

![image-20240607113352866](https://han.blob.core.windows.net/typora/image-20240607113352866.png)

After been authenticated, finally get associated and tied to the network

![image-20240607113823722](https://han.blob.core.windows.net/typora/image-20240607113823722.png)

![image-20240607113931482](https://han.blob.core.windows.net/typora/image-20240607113931482.png)

`有爭議` What is the purpose of using First Hop Redundancy Protocol on a specific subnet?

- A. forwards multicast hello messages between routers **Most Voted**
- B. sends the default route to the hosts on a network **Most Voted**
- C. ensures a loop-free physical topology
- D. filters traffic based on destination IP addressing

> **Suggested Answer:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/69676-exam-200-301-topic-1-question-437-discussion/#)
> The routers in the FHRP group share a virtual MAC and Virtual IP and that acts as the Default Gateway for the HOSTS. It provides redundancy is case a router fails, no need to change the default gateway information.

> Well, among the answers, A is the least incorrect, as I don't think that forwarding multicast hello messages between routers is the PURPOSE of using a First Hop Redundancy Protocol.
> The other answers refer to other protocols:
> Answer B refers to a DHCP server
> Answer C refers to STP
> Answer D refers to ACL

The service password-encryption command is entered on a router. What is the effect of this configuration?

- A. restricts unauthorized users from viewing clear-text passwords in the running configuration
- B. prevents network administrators from configuring clear-text passwords
- C. protects the VLAN database from unauthorized PC connections on the switch
- D. encrypts the password exchange when a VPN tunnel is established

[Question](https://www.examtopics.com/discussions/cisco/view/70510-exam-200-301-topic-1-question-626-discussion/#)

```txt
🧡💛💚💙Answer A is correct.

From what I understand, the letter "B" seems right, but it is "wrong", because even using the "service password-encryption" command, the "enable password" or "username password" settings are configured in "clear text", but only in shown in the running-config with an encryption weak (type 7).

The main purpose of the "service password-encryption" command is to prevent passwords from being displayed in plain text in the device configuration, protecting them from casual viewing (by an unauthorized user).
```

[爭議題](https://www.examtopics.com/discussions/cisco/view/19851-exam-200-301-topic-1-question-533-discussion/): If a notice-level message is sent to a syslog server, which event has occurred?

- A. A network device has restarted. **Most Voted**
- B. A debug operation is running.
- ✅C. A routing instance has flapped. **Most Voted**
- D. An ARP inspection has failed.

### Other questions

![image-20240607092534932](https://han.blob.core.windows.net/typora/image-20240607092534932.png)

Enhanced Interior Gateway Routing Protocol ([EIGRP](https://www.examtopics.com/discussions/cisco/view/26653-exam-200-301-topic-1-question-344-discussion/)) uses a composite metric to calculate the best path to a destination. The metric calculation is based on the bandwidth and delay of the links. The formula considers the minimum bandwidth (the slowest link) and the cumulative delay along the path to determine the best route. This is why option A is the correct answer, as it accurately describes how EIGRP determines the route metric by default.

In shorts, EIGRP uses the minimum bandwidth on the path to a destination network and the total delay to compute routing metrics

```txt
A- EIGRP
B- IS-IS
C- RIP
D- OSPF
```

![image-20240607101421352](https://han.blob.core.windows.net/typora/image-20240607101421352.png)

In the provided image of network configuration, different VLANs are used to segment traffic for management, internal, and guest networks. The CAPWAP protocol operates over IP, allowing APs to discover and communicate with the WLC even if they are in different VLANs or subnets, as long as they have IP connectivity.

![image-20240607101409901](https://han.blob.core.windows.net/typora/image-20240607101409901.png)

This flexibility in network design ensures that wireless infrastructure can be expanded and managed effectively, without the need for direct or same-switch connections between APs and the WLC. The key is ensuring that APs can reach the WLC through the IP network, which can include routing between different subnets and VLANs.

> For option "D" on the other hand, access point does not have the ability to link to any switch in the network assuming connectivity to the WLC. CAPWAP communication between an access point in local mode and a WLC typically occurs over the wired network infrastructure using the CAPWAP protocol. The access point must be able to reach the WLC's IP address, which can be configured statically or obtained dynamically through DHCP. The access point and WLC must be on the same IP subnet or have Layer 3 connectivity between their subnets.

![image-20240607103912861](https://han.blob.core.windows.net/typora/image-20240607103912861.png)

![image-20240607104052764](https://han.blob.core.windows.net/typora/image-20240607104052764.png)

![image-20240607104458280](https://han.blob.core.windows.net/typora/image-20240607104458280.png)

**Suggested Answer:** _D_ [🗳️](https://www.examtopics.com/discussions/cisco/view/41785-exam-200-301-topic-1-question-426-discussion/#)
Our new static default route has the Administrative Distance (AD) of 120, which is bigger than the AD of OSPF External route (O\*E2) so it will not be pushed into the routing table until the current OSPF External route is removed.

> You really got to see the "120" here to not miss the right answer...
> Floating static route with AD 120 is a backup to OSPF route. Won't be used until OSPF route goes down.

![image-20240607104907112](https://han.blob.core.windows.net/typora/image-20240607104907112.png)

![image-20240607111808829](https://han.blob.core.windows.net/typora/image-20240607111808829.png)

Already know FF and 20 is for multicast and unicast's prefix respectively, what's for FC and FE

```txt
🧡💛💚💙
Multicast - FF
Global Unicast - 2/3
Unique Local - FC/FD
Link Local - FE80
```

Question: Refer to the exhibit. What commands are needed to add a sub-interface to Ethernet0/0 on R1 to allow for VLAN 20, with IP address 10.20.20.1/24?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0027800001.png)

- A. R1(config)#interface ethernet0/0
  R1(config-if)#encapsulation dot1q 20
  R1(config-if)#ip address 10.20.20.1 255.255.255.0
- B. R1(config)#interface ethernet0/0.20
  R1(config-if)#encapsulation dot1q 20
  R1(config-if)#ip address 10.20.20.1 255.255.255.0
- C. R1(config)#interface ethernet0/0.20
  R1(config-if)#ip address 10.20.20.1 255.255.255.0
- D. R1(config)#interface ethernet0/0
  R1(config-if)#ip address 10.20.20.1 255.255.255.0

Refer to the exhibit. A network administrator assumes a task to complete the connectivity between PC A and the File Server. Switch A and Switch B have been partially configured with VLANs 10, 11, 12, and 13. What is the next step in the configuration?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0033000001.jpg)

- A. Add PC A to VLAN 10 and the File Server to VLAN 11 for VLAN segmentation
- B. Add VLAN 13 to the trunk links on Switch A and Switch B for VLAN propagation
- C. Add a router on a stick between Switch A and Switch B allowing for Inter-VLAN routing
- D. Add PC A to the same subnet as the File Server allowing for intra-VLAN communication

```txt
subnet mask is /23 so focus on the third octet
x.x.0.x/23
x.x.1.x/23
Convert to binary
192.168.0000000||0.x
192.168.0000000||1.x
The part before ||(/23) is all zero so the network ID for both subnets is 192.168.0.0/23 (same), hence they belong in same subnet
```

```txt
switch A interface g0/4 - connected to PC is access mode with vlan13
switch B interlace g0/3 - connected to server is access mode with vlan13

The interfaces between switch A and B are set to trunk mode.
So, only thing is missing is adding vlan 13 to the trunk link
in order for PC and server to communicate.

A. wrong as switches can't do intervlan routing (vlan10 - vlan11)
B. wrong it's not required as both PC and server are in same vlan (router on a stick is for intervlan routing)
D. switches don't do intervlan routing
```

Refer to the exhibit. Which path is used by the router for Internet traffic?

![](https://www.examtopics.com/assets/media/exam-media/04300/0028300001.png)

- A. 209.165.200.0/27
- B. 0.0.0.0/0
- C. 10.10.13.0/24
- D. 10.10.10.0/28

> Why isn't 10.10.11.0/30 an option? Weird question obviously the others are wrong and the 0.0.0.0 is the only option
> Indeed this is misleading... typical cisco.

![image-20240607141405938](https://han.blob.core.windows.net/typora/image-20240607141405938.png)

Breakdown of Answer Choices:

- **A. It processes VTP updates from any VTP clients on the network on its access ports.**: Incorrect. VTP transparent mode does not process VTP updates from clients or servers.
- **B. It receives updates from all VTP servers and forwards all locally configured VLANs out all trunk ports.**: Incorrect. It does not receive and process updates from VTP servers; it only forwards received advertisements.
- ✅**C. It forwards only the VTP advertisements that it receives on its trunk ports.**: Correct. This is the correct behavior of a switch in VTP transparent mode.
- **D. It transmits and processes VTP updates from any VTP clients on the network on its trunk ports.**: Incorrect. It does not process updates, only forwards them.

  ![image-20240607141752766](https://han.blob.core.windows.net/typora/image-20240607141752766.png)

In OSPF (Open Shortest Path First), the designated router (DR) is responsible for generating and distributing link-state advertisements (LSAs) to OSPF neighbors. The state of an OSPF neighbor relationship progresses through several stages, and the "Full" state is the final stage indicating that the OSPF routers have successfully exchanged all relevant OSPF routing information and have synchronized their link-state databases.

OSPF Neighbor States:

1. **Down**: No information has been received from the neighbor.
2. **Init**: A hello packet has been received from the neighbor, but two-way communication has not been established yet.
3. **2-way**: Bidirectional communication has been established. The router has received a hello packet with its own Router ID in the neighbor field.
4. **ExStart**: The routers are negotiating the master-slave relationship and the initial DBD (Database Description) sequence number.
5. **Exchange**: The routers are exchanging DBD packets.
6. **Loading**: The routers are sending LSRs (Link State Requests) and LSUs (Link State Updates) to exchange full link-state information.
7. **Full**: The routers have synchronized their link-state databases, and the neighbor relationship is fully established.

```txt
Must be unique:
– OSPF process ID (OSPF process ID doesn't need to be nuique. It is a local stuff)
– router ID
– IP address
Must match:
– netmask
– area ID
– timers
```

> D is the correct answer. A DR or a BDR router will always need to reach a full state relationship with all neighbours (DROther included!) for correct operation. A 2-way state will only be considered correct and stable between two DROther routers.

[Controvertial Question](https://www.examtopics.com/discussions/cisco/view/44890-exam-200-301-topic-1-question-372-discussion/): Refer to the exhibit. Which action establishes the OSPF neighbor relationship without forming an adjacency?

![img](https://www.examtopics.com/assets/media/exam-media/04300/0029400001.png)

- A. modify hello interval
- B. modify process ID
- C. modify priority
- D. modify network type

> Question is not "how do not become neighbor" but "how to not become adjacent". The answer is C modify the priority. If you change priority to 0 there will be no election for dr/bdr. So the router never send or receive bpdu eachother but just hello messages. In this case question dont'ask to choose 2 answer so we can assume that we cannot change the network type so the only possible answer is C!

![image-20240607145033388](https://han.blob.core.windows.net/typora/image-20240607145033388.png)

![image-20240607150835443](https://han.blob.core.windows.net/typora/image-20240607150835443.png)

![image-20240607151103022](https://han.blob.core.windows.net/typora/image-20240607151103022.png)

**BPDU Guard**: Protects against unwanted BPDUs on access ports, preventing loops.
**Root Guard**: Ensures that specific ports do not accept superior BPDUs, maintaining the desired root bridge in the network topology.

![image-20240607152143895](https://han.blob.core.windows.net/typora/image-20240607152143895.png)

```txt
We can prevent the MAC Flooding attack with various methods. The following are some of these methods.

1) Port Security
2) Authentication with AAA server
3) Security measures to prevent ARP Spoofing or IP Spoofing
4) Implement IEEE 802.1X suites
```

double tagging VLAN-hopping attack 先記起來好了

![image-20240607153055396](https://han.blob.core.windows.net/typora/image-20240607153055396.png)

**Service Port is used for out-of-band management**: The service port on a WLC is typically used for management purposes, providing a separate, dedicated interface for network administrators to manage the controller without using the same network that carries user data. This is critical for maintaining management access even if the data network is experiencing issues.

**Virtual Interface is used for guest authentication**: The virtual interface is used by the WLC for various services, one of which is guest authentication. It handles the redirection of guest users to the web portal for authentication when they connect to the guest WLAN.

**Dynamic Interface is applied to the WLAN for wireless client communication**: A dynamic interface in a WLC is essentially a VLAN that is mapped to a specific WLAN. It is used for segregating and managing traffic for different WLANs. Each WLAN can be associated with a different dynamic interface, which helps in organizing and routing client traffic appropriately.

🧡💛💚💙 **Virtual interface**: The WLC has a virtual interface that it uses for mobility management. This includes DHCP relay, guest web authentication, VPN termination, and some other features.

![image-20240607155011333](https://han.blob.core.windows.net/typora/image-20240607155011333.png)

Correct Function Assignment

- **DHCP Server**:

  - Assigns IP addresses to enabled clients.

  - Assigns a default gateway to a client.

  - Holds the TCP/IP settings to be distributed to the clients.

    - This function belongs to the **DHCP Server**.

    - The DHCP server maintains a pool of IP addresses and the associated network configuration parameters (TCP/IP settings) and assigns them to clients as needed.

    - commands

      ```txt
      ! Enter global configuration mode
      configure terminal

      ! Define the DHCP pool
      ip dhcp pool LAN_POOL

      ! Specify the network and subnet mask
      network 192.168.1.0 255.255.255.0

      ! Specify the default gateway
      default-router 192.168.1.1

      ! Specify the DNS server
      dns-server 8.8.8.8

      ! Optionally, specify other parameters
      lease 7

      ! Exclude addresses from the pool (for static IP assignments)
      ip dhcp excluded-address 192.168.1.1 192.168.1.10

      ! Exit configuration mode
      end

      ! Save the configuration
      write memory
      ```

- **DNS Server**:

  - Resolves web URLs to IP addresses.
  - Stores a list of IP addresses mapped to names (DNS records).

![image-20240607160806068](https://han.blob.core.windows.net/typora/image-20240607160806068.png)

Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (Choose two.)

- A. 5GHz provides increased network capacity with up to 23 nonoverlapping channels. **Most Voted**
- B. 5GHz channel selection requires an autonomous access point.
- ✅C. Cells that overlap one another are configured to use nonoverlapping channels. **Most Voted**
- D. Adjacent cells with overlapping channels use a repeater access point.
- ✅E. For maximum throughput, the WLC is configured to dynamically set adjacent access points to the channel.

我回答的答案是[網友](https://www.examtopics.com/exams/cisco/200-301/view/3/)最多投票的

> I though it is A and C but than i understood A is wrong. Because 5Ghz has 24 non-ovelapping channel. Some countries dont use all of them. Please be careful about it is differen channels and NON-overlapping channels. And i learned that Cisco WLCs (Wireless LAN Controllers) can be configured to dynamically set adjacent access points to the channel. This feature is called Dynamic Channel Assignment (DCA), and it helps to improve the overall performance of the wireless network by reducing co-channel interference.

![image-20240607161425245](https://han.blob.core.windows.net/typora/image-20240607161425245.png)

![image-20240607161502561](https://han.blob.core.windows.net/typora/image-20240607161502561.png)

| Mode             | Description                                                                                                | Use Case                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Autonomous Mode  | Access points operate independently without requiring a WLC. Each AP is configured and managed separately. | Suitable for small networks or standalone deployments.                    |
| Lightweight Mode | Access points are managed centrally by a Cisco Wireless LAN Controller (WLC) using CAPWAP.                 | Ideal for medium to large networks with centralized management.           |
| Bridge Mode      | Used for point-to-point or point-to-multipoint bridging to connect different networks wirelessly.          | Suitable for extending networks between buildings or remote sites.        |
| Mobility Express | Allows certain Cisco APs to function as a virtual controller, managing other APs in the network.           | Good for small to medium-sized deployments needing simplified management. |

![image-20240607161818627](https://han.blob.core.windows.net/typora/image-20240607161818627.png)

![image-20240607162408195](https://han.blob.core.windows.net/typora/image-20240607162408195.png)

The relevant part of the routing table for internet access is:

```
Gateway of last resort is 10.10.10.18 to network 0.0.0.0
B*   0.0.0.0/0 [20/0] via 10.10.10.18, 01:17:58
```

- The `0.0.0.0/0` entry is the default route, indicating that any traffic destined for an address not found in the routing table should be forwarded to `10.10.10.18`.
- This route is marked with `B*`, indicating it is a default route learned via BGP.

![image-20240607163355200](https://han.blob.core.windows.net/typora/image-20240607163355200.png)

Drag and drop the Cisco Wireless LAN Controller security settings from the left onto the correct security mechanism categories on the right. Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04300/0050300001.png)

Layer 2 Security Mechanism includes WPA+WPA2, 802.1X, Static WEP, CKIP while Layer 3 Security Mechanisms (for WLAN) includes IPSec, VPN Pass-Through, Web Passthrough

![image-20240607164433588](https://han.blob.core.windows.net/typora/image-20240607164433588.png)

> I was vex a bit, pay close attention to the New York router ipv6 address as next hop. B & D is correct

Required Static Routes

1. **On Atlanta Router**:
   - To reach the `2023::/126` network (Washington via New York), the next hop should be `2012::2` (New York's interface towards Atlanta).
   - Command: `ipv6 route 2023::/126 2012::2`
2. **On Washington Router**:
   - To reach the `2012::/126` network (Atlanta via New York), the next hop should be `2023::2` (New York's interface towards Washington).
   - Command: `ipv6 route 2012::/126 2023::2`

Compare to this:

Refer to the exhibit. An engineer configured the New York router with static routes that point to the Atlanta and Washington sites. Which command must be configured on the Atlanta and Washington routers so that both sites are able to reach the loopback2 interface on the New York router?

![](https://www.examtopics.com/assets/media/exam-media/04300/0034200001.png)

- A. ipv6 route::/0 Serial 0/0/0
- B. ipv6 route::/0 Serial 0/0/1
- C. ipv6 route:0/0 Serial 0/0/0
- D. ip route 0.0.0.0 0.0.0.0 Serial 0/0/0
- E. ipv6 route::/0 2000::2

```txt
The static routes are:
Network + Interface (Source interface) or Next Hop (IP Address Neighbor).
So, you have 4 possibilities:
Atlanta = ipv6 route::/0 2012::2/126
or
Atlanta = ipv6 route::/0 Serial 0/0/0
_______________________________________
Washington= ipv6 route::/0 2023::2/126
or
Washington= ipv6 route::/0 Serial 0/0/0
```

The question is asking about the command that must be configured on the Atlanta and Washington routers so that both sites are able to reach the Loopback2 interface on the New York router.

A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, to which type of OSPF network does this interface belong?

- A. point-to-multipoint
- B. point-to-point
- C. broadcast **Most Voted**
- D. nonbroadcast

> OSPF behaves differently on some types of interfaces based on a per-interface setting called the OSPF network type. On Ethernet links, OSPF defaults to use a network type of broadcast, which causes OSPF to elect one of the routers on the same subnet to act as the designated router (DR). The DR plays a key role in how the database exchange process works, with different rules than with point-to-point links. official Cert guide volume 2, page 456

![image-20240607170048227](https://han.blob.core.windows.net/typora/image-20240607170048227.png)

Enabling software to allow for external applications defiantly makes it more "extensible" (able to be extended). The traditional device management seemed to really want to keep things proprietary, or at least attempt a push in that direction. It appears now that Cisco knows it needs to adapt and allow for 3rd party devices/applications so that it can remain competitive.

Makes sense coz sdks supply apis for software development projects

Explain for each option:

- SDN=Software-Defined Networking. Its in the name "software."
- API's= Application Programming Interface. = software
- REST API's = isn't a specific API but a set of rules for API's
- SDKs= Software Development Kits

![image-20240607170335067](https://han.blob.core.windows.net/typora/image-20240607170335067.png)

You have a TCP/IP network. This means that PC A and PC B have an IP address each. PC A knows PC B's address and creates an IP packet for PC B. Then, the packet (Layer 3) becomes an Ethernet frame (Layer 2): PC A gets PC B's MAC address and uses it as the destination L2 address.

When the frame arrives at SW1, the switch looks at the destination MAC address and controls (in its MAC table) to which port that address is associated. Then, the switch sends the frame to PC B through that port (forwarding phase).

The switch leaves unchanged BOTH the source and the destination MAC addresses inside the frame.

![image-20240607170420245](https://han.blob.core.windows.net/typora/image-20240607170420245.png)

Q140 is apt to make mistakes. rather than a unicast address

![image-20240607170434984](https://han.blob.core.windows.net/typora/image-20240607170434984.png)

![image-20240607170601763](https://han.blob.core.windows.net/typora/image-20240607170601763.png)

**Control-Based Networking uses white list security model**: Control-Based Networking often uses a white list approach, where only explicitly allowed traffic is permitted. This model is more proactive and restrictive, ensuring that only known, trusted traffic can enter the network.

**Traditional Networking uses black list security model**: Traditional Networking often uses a black list approach, where known malicious traffic is blocked. This model is more reactive, as it requires the identification of threats before they can be blocked.
