# Questions Completed on 2024-06-17

[Question](https://www.examtopics.com/discussions/cisco/view/81177-exam-200-301-topic-1-question-467-discussion/): Refer to the exhibit. Router R1 resides in OSPF Area 0. After updating the R1 configuration to influence the paths that it will use to direct traffic, an engineer verified that each of the four Gigabit interfaces has the same route to 10 10.0.0/16.
Which interface will R1 choose to send traffic to reach the route?

- A. GigabitEthernet0/0
- B. GigabitEthernet0/1 **Most Voted**
- C. GigabitEthernet0/2
- D. GigabitEthernet0/3

![](https://www.examtopics.com/assets/media/exam-media/04300/0037900001.png) 

> G0/0
> 100000MB divided by 10000MB (or 10000000KB) = 10 cost
>
> G0/1
> 100000MB divided by 100000MB (or 100000000KB) = 1 cost

more detailed explanation

> Three things are true:
>
> 1. The "auto-cost reference-bandwidth" takes its argument in Mb.
>
> 2. The "bandwidth" command takes its argument in Kb.
>
> 3. The formula for calculating OSPF cost is reference_bandwidth/interface_bandwidth.
>
> Converting to Kb, the reference-bandwidth is 100000000Kb.
>
> The cost calculations are then as follows:
> G0/0 = 100000000Kb/10000000Kb = 10
> G0/1 = 100000000Kb/100000000kB = 1
>
> G0/1 has the lowest cost. The answer is B.

[Question](https://www.examtopics.com/discussions/cisco/view/71337-exam-200-301-topic-1-question-262-discussion/): Which access point mode relies on a centralized controller for management, roaming, and SSID configuration?

- A. lightweight mode
- B. autonomous mode
- C. bridge mode
- D. repeater mode

Autonomous Access Points (APs) are self-contained that do not rely on a Wireless LAN Controller (WLC), they are configured individually. There is no central monitoring or management of APs,.

For Lightweight APs, the functions of an AP can be split between the AP and the WLC. Other functions are carried out by a WLC. The WLC is also sued to centrally configure the lightweight APs. Can be configured in modes such as Local or FlexConnect.

[Question](https://www.examtopics.com/discussions/comptia/view/6097-exam-220-1002-topic-1-question-85-discussion/): Which of the following is the MOST secure wireless security protocol?

- A. AES
- B. WPA
- C. WPA2 **Most Voted**
- D. WEP

Shouldn't the answer here be WPA2??? The question is asking about Wireless Security Protocols, and AES is NOT one: it's an ENCRYPTION protocol used by WPA2. WEP, WPA and WPA2 are Wireless Security Protocols, and out of those, WP2 is the most secure, because of the use of the AES encryption. It may seem that means that AES is the right answer, but consider the terms being used here.

I think it is because WPA2 can use TKIP in some cases. AES always implies WPA2 but WPA2 doesn't always imply AES. The question is poorly written. Should have been WPA-AES or WPA-TKIP. Trying to confuse people.

[Question](https://www.examtopics.com/discussions/cisco/view/79683-exam-200-301-topic-1-question-294-discussion/): Which protocol must be implemented to support separate authorization and authentication solutions for wireless APs?

- A. RADIUS
- B. TACACS+ **Most Voted**
- C. 802.1X
- D. Kerberos

[Question](https://www.examtopics.com/discussions/cisco/view/74589-exam-200-301-topic-1-question-669-discussion/): Refer to the exhibit (it's not needed). What must be configured to enable 802.11w on the WLAN?

- A. Set Fast Transition to Enabled.
- B. Enable WPA Policy.
- C. Set PMF to Required. **Most Voted**
- D. Enable MAC Filtering.

[Question](https://www.examtopics.com/discussions/cisco/view/77316-exam-200-301-topic-1-question-567-discussion/): Which command implies the use of SNMPv3?

- A. snmp-server user **Most Voted**
- B. snmp-server host
- C. snmp-server enable traps
- D. snmp-server community

Answer: In SNMPv1 and SNMPv2, passwords were sent as a community string in clear text between managers and agents, leaving huge gaps in security. First, the SNMP community string is a single identifier, unlike modern systems, which are based on a username and password. SMNPv3 uses a username and a password for security,

[Question](https://www.examtopics.com/discussions/cisco/view/76678-exam-200-301-topic-1-question-274-discussion/): Refer to the exhibit. The following must be considered:
✑ SW1 is fully configured for all traffic.
✑ The SW4 and SW9 links to SW1 have been configured.
✑ The SW4 interface Gi0/1 and Gi0/0 on SW9 have been configured.
✑ The remaining switches have had all VLANs added to their VLAN database.
Which configuration establishes a successful ping from PC2 to PC7 without interruption to traffic flow between other PCs?

![image-20240617092112662](https://han.blob.core.windows.net/typora/image-20240617092112662.png) 

答案可能是錯的，以下是對的

````txt
- measure of the minimum power required to decode a radio signal without excessive errors == receiver sensitivity
- measure of the total unwanted signals at the receiver == noise floor
- deviation from the propagation path that occurs when a signal encounters an obstacle == reflection
- reduction of energy in a signal as it travels away from the access point and encounters free space or obstacles == absorption
- relative power of the desired radio signal to unwanted signals at the receiver == signal-to-noise ratio
````



![](https://img.examtopics.com/200-301/image218.png) 

To assess whether I agree with the proposed QoS (Quality of Service) delivery mechanisms for different types of traffic, let's break it down:

1. **Database Synchronization Traffic**: Policing
   - Policing can be suitable to limit excessive traffic from databases, ensuring it doesn't overwhelm the network.
2. **Standard Web Browsing Traffic**: Best effort
   - This is typically correct, as web browsing doesn't require strict QoS and can tolerate variable delays.
3. **VoIP Traffic**: Priority queue
   - VoIP requires low latency, so priority queuing is appropriate.
4. **Video Traffic**: Shaping
   - Traffic shaping can smooth out bursts, which is beneficial for video streaming.

![image-20240617093536259](https://han.blob.core.windows.net/typora/image-20240617093536259.png)  

**`fe80::/10` (Link-Local Addresses)**:

These addresses are used for communication within a single network segment (link) and are not routable beyond that link. They are typically used for network discovery and initial configuration.

**`ff00::/8` (Multicast Addresses)**:

These addresses are used to send a single packet to multiple destinations. They start with `ff` and are followed by various flags and scope definitions to specify the multicast group and its range.

Summary:

- **Global Unicast**:
  - `2001:db8:600d:cafe::123`
  - `3ffe:e54d:620:a87a::f00d`
- **Unique Local**:
  - `fcba:926a:e8e7:a25b:1:6d2:1a76:8fdc`
  - `fdd6:c83b:5cef:b6b2::1`
- **Link-Local**:
  - `fe80::/10`
- **Multicast**:
  - `ff00::/8`

![image-20240617153212019](https://han.blob.core.windows.net/typora/image-20240617153212019.png)

![image-20240617155226211](https://han.blob.core.windows.net/typora/image-20240617155226211.png) 

In OSPF (Open Shortest Path First), the Designated Router (DR) is elected based on the priority value of each router. The router with the highest priority is elected as the DR. If there is a tie in priority, the router with the highest Router ID is chosen.

![](https://www.examtopics.com/assets/media/exam-media/04300/0026200001.png)

The description "accessible for management via Telnet, SSH, or a Web GUI" does not typically apply to Cloud-Based Access Points or Lightweight Access Points in the specific context given:

- **Cloud-Based Access Points** are managed from a Web-based dashboard and support automatic deployment, relying on cloud management platforms rather than direct access via Telnet, SSH, or a Web GUI.
- **Lightweight Access Points** are configured and managed by a Wireless LAN Controller (WLC) and support different operational modes. They are usually not directly managed through Telnet, SSH, or Web GUI but rather through the WLC interface.

Hence, the phrase "accessible for management via Telnet, SSH, or a Web GUI" is not included in either category.

![](https://www.examtopics.com/assets/media/exam-media/04300/0013300001.png) 

![image-20240617161150694](https://han.blob.core.windows.net/typora/image-20240617161150694.png) 

**"May be used by multiple organizations at the same time"**: This applies to Unique Local Addresses (ULA) with the prefix `fd`. ULAs are intended for local communications within a site or organization and are not routable on the global internet. Multiple organizations can use the same ULA range without conflicts as these addresses are not meant to be globally unique.

**"Unable to serve as destination addresses"**: This statement refers to Link-local addresses with the prefix `fe80::/10`. These addresses are used for communication within a single network segment and cannot be used as destination addresses for traffic outside the local link.

![img](https://img.examtopics.com/200-301/image220.png)

[Question](https://www.examtopics.com/discussions/cisco/view/119847-exam-200-301-topic-1-question-1149-discussion/): Refer to the exhibit. The engineer configured the VLANs on the new AccSw2 switch. A router-on-a-stick is connected to both switches. How must the ports be configured on AccSw2 to establish full connectivity between the two switches and for Server1?

- 1️⃣❎ A. interface GigabitEthernet1/1
  switchport access vlan 11
  !
  interface GigabitEthernet1/24
  switchport mode trunk
  switchport trunk allowed vlan 10,11
- 1️⃣❎ B. interface GigabitEthernet1/3
  switchport mode access
  switchport access vlan 10
  !
  interface GigabitEthernet1/24
  switchport mode trunk
  switchport trunk allowed vlan 2,10
- C. interface GigabitEthernet1/3
  switchport mode access
  switchport access vlan 10
  !
  interface GigabitEthernet1/24
  switchport mode trunk
  **Most Voted**
- D. interface GigabitEthernet1/1
  switchport mode access
  switchport access vlan 11
  !
  interface GigabitEthernet1/24
  switchport mode trunk

> C is correct.
>
> - by default, all vlans are allowed on a trunk link unless we use the 'allow vlan [vlan id]' command to state which vlans can access pass through it
> - The answer is correct. Without switchport trunk allowed vlan 10,11, traffic from all VLANS will be transmitted.
>
> 所以如果A/B沒有 switchport trunk allowed vlan 反而還可以允許更多 vlan

![image-20240617163314522](https://han.blob.core.windows.net/typora/image-20240617163314522.png) 

![image-20240617163805119](https://han.blob.core.windows.net/typora/image-20240617163805119.png) 

[Answer](https://www.examtopics.com/discussions/cisco/view/75511-exam-200-301-topic-1-question-443-discussion/): 

> 💙 The answer is correct with the assumption that the interconnects are 192.168.0.2 & 172.16.0.2.
> 💙 Am I the only one notice that the netmask of R1(config)#ip route 10.0.0.5 255.255.255.255 172.16.0.2 should be changed to 255.255.255.0? no, it shouldn't, it is a host root, only reach the host(pc), not a network, so it's /32

![](https://www.examtopics.com/assets/media/exam-media/04300/0056400001.png) 

![](https://www.examtopics.com/assets/media/exam-media/04300/0056400002.png) 

Dynamic ARP Inspection (DAI) helps prevent ARP cache poisoning by validating ARP packets in a network. It ensures that only legitimate ARP requests and responses are processed, blocking potentially malicious ARP traffic that could redirect communication to unauthorized devices. This is crucial in preventing Man-in-the-Middle (MitM) attacks where an attacker could intercept or alter communication between two devices on a network.

Dynamic ARP Inspection (DAI) helps prevent ARP cache poisoning by intercepting and validating ARP packets on a network. ARP cache poisoning occurs when an attacker sends falsified ARP messages to a network, causing incorrect IP-to-MAC address mappings in devices' ARP caches. This can lead to traffic being misdirected to the attacker. DAI ensures that only legitimate ARP messages update the ARP cache, thus maintaining accurate mappings and preventing malicious redirections. This is why DAI is associated with preventing ARP cache poisoning.

![](https://www.examtopics.com/assets/media/exam-media/04300/0054300001.png)

Refer to the exhibit. What must be configured to enable 802.11w on the WLAN?

- A. Set Fast Transition to Enabled.
- B. Enable WPA Policy.
- C. Set PMF to Required.
- D. Enable MAC Filtering.

> **Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/74589-exam-200-301-topic-1-question-669-discussion/#)

802.11w, also known as Protected Management Frames (PMF), is a standard within the IEEE 802.11 family of wireless networking standards. It enhances the security of Wi-Fi networks by protecting management frames exchanged between wireless devices and access points. Management frames are used for tasks such as association, authentication, and disassociation in a Wi-Fi network.

![](https://www.examtopics.com/assets/media/exam-media/04300/0055600001.png)

![](https://www.examtopics.com/assets/media/exam-media/04300/0055700001.png) 

> 💙 It fits better takes it or leave it. The nuances is too blurry I wish cisco went out of business.
>
> 💙 This is probably the most stupidest question you can ask for a certification exam. Great job cisco, never fails to disappoint us.
>
> 💙 Such a stupid question. Looks more like a Cambridge English test
>
> 💙 ✅Awareness and education is definitely swapped making answer incorrect. This I remember well from JeremyIT material and Boson exsim.

![image-20240617170455193](https://han.blob.core.windows.net/typora/image-20240617170455193.png) 

![image-20240617171014256](https://han.blob.core.windows.net/typora/image-20240617171014256.png) 

"SDA" stands for Software-Defined Access. It is a component of Cisco's Software-Defined Networking (SDN) approach that provides automation and assurance across the entire network fabric. SDA enables policy-based automation from the edge to the cloud with secure segmentation, simplifying the deployment and management of network resources, enhancing security, and providing a better user experience.

![](https://www.examtopics.com/assets/media/exam-media/04300/0039400001.png) 

Refer to the exhibit. Drag and drop the prefix lengths from the left onto the corresponding prefixes on the right. Not all prefixes are used.
Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04300/0039500001.png) 

![](https://www.examtopics.com/assets/media/exam-media/04300/0039500002.png) 

> The Correct order is :
> .128
> .240
> .248
> .224 : About this ..... it already stated that the 209.165.202.0/27 is subnetted into 1 subnet which is 209.165.202.128 the 5th available subnet for /27 they go as (first 0-31, second 32-63, third 64-95 , Fourth 96-127 AND the 5th 128-160 etc...)

![image-20240618082346638](https://han.blob.core.windows.net/typora/image-20240618082346638.png) 

![image-20240618082623221](https://han.blob.core.windows.net/typora/image-20240618082623221.png) 

In OSPF (Open Shortest Path First), the Administrative Distance (AD) is 110. The Administrative Distance is used to rate the trustworthiness of the routing information received on a router from different sources. Lower values indicate more trusted sources.

In the provided question, you need to configure a backup static route, and the correct choice includes an AD value higher than the OSPF's AD of 110 to ensure it is only used when the OSPF route is unavailable.

![image-20240618101142040](https://han.blob.core.windows.net/typora/image-20240618101142040.png)  

The answer can find [here](https://www.examtopics.com/discussions/cisco/view/82823-exam-200-301-topic-1-question-678-discussion/)

> WPA3 is the wireless security protocol that relies on Perfect Forward Secrecy (PFS). It uses the Simultaneous Authentication of Equals (SAE) protocol, also known as Dragonfly, to provide PFS for each Wi-Fi session, making it much more secure than its predecessors (WPA2 and WPA) in terms of key management and encryption.

![image-20240618110006776](https://han.blob.core.windows.net/typora/image-20240618110006776.png) 

Here's the corrected order:

- **Anycast**:
  - Assigned to more than one interface
  - Used exclusively by a non-host device
- **Multicast**:
  - Provides one-to-many communications
  - Derived from the FF00::/8 address range
- **Unicast**:
  - Identifies an interface on an IPv6 device
  - Includes link-local and loopback addresses

![](https://www.examtopics.com/assets/media/exam-media/04300/0008100001.png) 

Regarding "Includes link-local and loopback addresses":

Link-Local Addresses

- **Prefix**: `fe80::/10`
- **Purpose**: Used for communication within the local network segment. They are not routable beyond the link.

Loopback Addresses

- **Address**: `::1`
- **Purpose**: Used by a device to send traffic to itself. It's similar to the IPv4 loopback address `127.0.0.1`.

Unicast Addresses

- **Definition**: Includes link-local, loopback, and global unicast addresses.
- **Purpose**: Identifies a single interface on an IPv6 device.

![image-20240618134451919](https://han.blob.core.windows.net/typora/image-20240618134451919.png) 

t looks like there is a slight mistake. Let's correct it:

### Correct Matching:

1. **Anycast**:

   - Used exclusively by a non-host device
   - Assigned to more than one interface

2. **Multicast**:

   - Derived from the FF00::/8 address range
   - Provides one-to-many communications

3. **Unicast**:

   - Identifies an interface on an IPv6 device
   - Includes link-local and loopback addresses

   

![image-20240618142950149](https://han.blob.core.windows.net/typora/image-20240618142950149.png) 