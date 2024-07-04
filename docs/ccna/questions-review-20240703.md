# Questions Completed on 2024-07-03

![image-20240703083322501](https://han.blob.core.windows.net/typora/image-20240703083322501.png) 

````txt
Router(config)# ip dhcp pool MY_POOL
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
Router(dhcp-config)# domain-name example.com

Router(config)# ip dhcp pool MANUAL_BINDINGS
Router(dhcp-config)# host 192.168.1.10 255.255.255.0
Router(dhcp-config)# client-identifier 0100.1111.2222.33
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
Router(dhcp-config)# domain-name example.com
````

![](https://www.examtopics.com/assets/media/exam-media/04300/0040400001.png) 

Refer to the exhibit. The router R1 is in the process of being configured. Routers R2 and R3 are configured correctly for the new environment. Which two commands must be configured on R1 for PC1 to communicate to all PCs on the 10.10.10.0/24 network? (Choose two.)

- A. ip route 10.10.10.0 255.255.255.0 192.168.2.3 **Most Voted**
- B. ip route 10.10.10.10 255.255.255.255 192.168.2.2 **Most Voted**
- C. ip route 10.10.10.10 255.255.255.255 g0/1
- D. ip route 10.10.10.8 255.255.255.248 g0/1
- E. ip route 10.10.10.0 255.255.255.248 192.168.2.2

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/79779-exam-200-301-topic-1-question-488-discussion/#)

**Suggested Answer:** *AE* [🗳️](https://www.examtopics.com/discussions/cisco/view/79779-exam-200-301-topic-1-question-488-discussion/#)

> A is 100% correct while the confusion between B and E is down to people missing two important differences for those two options. B is a direct host route and it will show up in the routing table as 10.10.10.10/32 and it is called a host route. Hence subnet mask being 255.255.255.255. Whereas, E option does NOT cover the host 10.10.10.10 address as if you calculate the subnet range for the subnet in option E it only goes up to 10.10.10.0 - 10.10.10.6 and .7 being its broadcast address. It's incrementing in blocks of 8 as the subnet mask clearly states 255.255.255.248 or /29. So, how exactly the router would send traffic to host .10 which is NOT even in the subnet range. Therefore, option E route will NEVER reach .10 host hanging off that router.

以下題目答案給錯了

![image-20240703084116078](https://han.blob.core.windows.net/typora/image-20240703084116078.png) 

![image-20240703084435852](https://han.blob.core.windows.net/typora/image-20240703084435852.png)  

![image-20240703084803602](https://han.blob.core.windows.net/typora/image-20240703084803602.png) 

A DHCP client is any device (such as a computer, smartphone, or printer) that uses the Dynamic Host Configuration Protocol (DHCP) to automatically obtain an IP address and other network configuration settings from a DHCP server.

The option C is incorrect in the context of defining a DHCP client. However, it seems to refer to the DNS (Domain Name System) process rather than DHCP. 

![image-20240703085300862](https://han.blob.core.windows.net/typora/image-20240703085300862.png) 

**B is incorrect**: LLC is a sublayer of the data link layer (Layer 2) in the OSI model. It deals with logical link control protocols, such as establishing and maintaining links, but it is not a QoS tool for guaranteeing bandwidth. 

**Low Latency Queuing (LLQ)**

LLQ is an extension of CBWFQ. It combines CBWFQ with priority queuing to provide a strict priority queue for real-time traffic (like voice and video). This ensures that latency-sensitive traffic is given the highest priority and minimum delay, while other types of traffic are handled by CBWFQ.

[Question](https://www.examtopics.com/discussions/cisco/view/82416-exam-200-301-topic-1-question-583-discussion/): Drag and drop the SNMP manager and agent identifier commands from the left onto the functions on the right.

The answers should be the following:
show snmp host: displays information about the SNMP recipient
show snmp chassis: displays the SNMP Client (not server) serial number
show snmp group: displays the snmp security model in use
show snmp community: displays the snmp access string
show snmp engineID: displays the snmp unique identifier (engineID) assigned to a SNMP entity

![image-20240703090510695](https://han.blob.core.windows.net/typora/image-20240703090510695.png) 

Always remember it **learns how to forward**

![image-20240703090758476](https://han.blob.core.windows.net/typora/image-20240703090758476.png) 



The implicit deny is the point here. In the given configuration, the access list `10` is applied to the VTY lines of the router with an `access-class 10 in` command. By default, an access list has an implicit deny at the end, meaning any traffic that does not match the conditions specified in the access list is denied.

Modified command

````txt
access-list 10 deny host 10.150.1.1
access-list 10 permit any
!
line vty 0 4
 access-class 10 in
 password 7 0822455D0A16
 login
````

![image-20240703091344065](https://han.blob.core.windows.net/typora/image-20240703091344065.png) 

![image-20240703091446960](https://han.blob.core.windows.net/typora/image-20240703091446960.png) 

This is C not D

![image-20240703091732794](https://han.blob.core.windows.net/typora/image-20240703091732794.png) 

稍微記一下

What is the function of a controller in controller-based networking?

- A. It serves as the centralized management point of an SDN architecture **Most Voted**
- B. It is a pair of core routers that maintain all routing decisions for a campus
- C. It centralizes the data plane for the network
- D. It is the card on a core router that maintains all routing decisions for a campus.

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/84292-exam-200-301-topic-1-question-108-discussion/#)

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/84292-exam-200-301-topic-1-question-108-discussion/#) 

![image-20240703100415342](https://han.blob.core.windows.net/typora/image-20240703100415342.png) 

**Managing the Topology**:

One of the primary functions of an SDN controller is to manage the network topology. This includes discovering network devices, maintaining a view of the network structure, and making routing decisions based on the overall topology.

**Coordinating VTNs (Virtual Tenant Networks)**:

SDN controllers often manage Virtual Tenant Networks (VTNs). VTNs allow for the creation of isolated virtual networks on top of the physical network infrastructure. This helps in providing network services tailored to the needs of different tenants in a multi-tenant environment.

**Layer 2 Forwarding**:

While an SDN controller can make decisions about forwarding traffic, the actual forwarding is typically done by the network devices (switches, routers) based on the instructions provided by the SDN controller. The controller itself is not responsible for directly forwarding packets.

![image-20240703100654123](https://han.blob.core.windows.net/typora/image-20240703100654123.png) 

![image-20240703100722564](https://han.blob.core.windows.net/typora/image-20240703100722564.png) 

最簡單的

![image-20240703100843911](https://han.blob.core.windows.net/typora/image-20240703100843911.png) 

````txt
Router(config)# ip dhcp pool MY_POOL
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
````

**C. default-gateway**:

This is not a valid command in the context of configuring a DHCP pool. This term is often used in the context of configuring a default gateway for the router itself, not for distributing it via DHCP.

**D. default-router**:

This is the correct command to specify the default gateway (router) that the DHCP clients should use. In the context of a DHCP pool configuration, this command is used to distribute the default gateway to the DHCP clients.

![image-20240703101859036](https://han.blob.core.windows.net/typora/image-20240703101859036.png) 

**Configure it as a different VLAN ID on each end of the link is not correct**: This would actually cause a misconfiguration, leading to network issues. The native VLAN must be the same on both ends of the trunk link to ensure proper communication and avoid VLAN mismatch errors.

![image-20240703102033216](https://han.blob.core.windows.net/typora/image-20240703102033216.png) 

![](https://www.examtopics.com/assets/media/exam-media/04300/0045900001.jpg)

Refer to the exhibit. Which configuration must be applied to the router that configures PAT to translate all addresses in VLAN 200 while allowing devices on VLAN 100 to use their own IP addresses?

![image-20240703103446727](https://han.blob.core.windows.net/typora/image-20240703103446727.png) 

![image-20240703104232318](https://han.blob.core.windows.net/typora/image-20240703104232318.png) 

Access List Types

- **Standard Access Lists**: These use numbers 1-99 and 1300-1999 and filter based on the source IP address only.
- **Extended Access Lists**: These use numbers 100-199 and 2000-2699 and can filter based on source and destination IP addresses, as well as ports and protocols. 

Actual exam question from Cisco's [200-301](https://www.examtopics.com/exams/cisco/200-301/)

Question #: 559
Topic #: 1

[[All 200-301 Questions\]](https://www.examtopics.com/exams/cisco/200-301/)

![image-20240703105943704](https://han.blob.core.windows.net/typora/image-20240703105943704.png) 

Which condition must be met before an NMS handles an SNMP trap from an agent?

- A. The NMS must receive the same trap from two different SNMP agents to verify that it is reliable.
- B. The NMS must receive a trap and an inform message from the SNMP agent within a configured interval.
- C. The NMS software must be loaded with the MIB associated with the trap. **Most Voted**
- D. The NMS must be configured on the same router as the SNMP agent.

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/70214-exam-200-301-topic-1-question-559-discussion/#)

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/70214-exam-200-301-topic-1-question-559-discussion/#) 

>  Before an Network Management System (NMS) can handle an SNMP (Simple Network Management Protocol) trap from an agent, the NMS must have the appropriate Management Information Base (MIB) loaded. MIBs define the structure and attributes of the managed objects that an SNMP agent can send in traps. The NMS needs to understand the MIB associated with the trap to interpret and process the information received in the trap message. Therefore, having the correct MIB loaded is a prerequisite for handling SNMP traps effectively.

[Question](https://www.examtopics.com/discussions/cisco/view/82476-exam-200-301-topic-1-question-314-discussion/#): Which switch technology establishes a network connection immediately when it is plugged in?

- A. PortFast **Most Voted**
- B. BPDU guard
- C. UplinkFast
- D. BackboneFast

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/82476-exam-200-301-topic-1-question-314-discussion/#)

![image-20240703110404209](https://han.blob.core.windows.net/typora/image-20240703110404209.png) 

````txt
interface FastEthernet0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 2
 switchport port-security mac-address sticky

 ! Example for protect mode
 switchport port-security violation protect

 ! Example for restrict mode
 switchport port-security violation restrict

 ! Example for shutdown mode
 switchport port-security violation shutdown
````

**Shutdown Violation**: This is the default mode. When a port security violation occurs, the switch will place the port into the err-disabled state, effectively shutting it down. The port will need to be manually re-enabled or automatically re-enabled after a specified period if err-disable recovery is configured.

**Restrict Violation**: Similar to the protect violation, the switch will drop packets with unknown source MAC addresses. Additionally, it will log the security violation and increment the violation counter.

![image-20240703113305444](https://han.blob.core.windows.net/typora/image-20240703113305444.png) 

![image-20240703113421322](https://han.blob.core.windows.net/typora/image-20240703113421322.png) 

Importance of VTP Revision Number

- **Higher Revision Number**: Indicates a more recent VLAN database. If a switch with a higher revision number is introduced to the network, its VLAN database will overwrite the existing databases on other switches in the VTP domain.
- **Lower Revision Number**: Indicates an older VLAN database. Introducing a switch with a lower revision number will not affect the existing VLAN databases on other switches.

![image-20240703115055852](https://han.blob.core.windows.net/typora/image-20240703115055852.png) 

![image-20240703115615146](https://han.blob.core.windows.net/typora/image-20240703115615146.png) 

貝多分

![image-20240703115715993](https://han.blob.core.windows.net/typora/image-20240703115715993.png)  

Syslog messages are classified into eight different severity levels, each represented by a numerical code and a descriptive name:

1. **Emergency (0)**:

   - **Description**: System is unusable.
   - **Example**: Kernel panic or catastrophic hardware failure.
   - **Log Message**: `EMERG`

2. **Alert (1)**:

   - **Description**: Action must be taken immediately.
   - **Example**: Database corruption, immediate action required.
   - **Log Message**: `ALERT`

3. **Critical (2)**:

   - **Description**: Critical conditions.
   - **Example**: Hardware errors, critical application failures.
   - **Log Message**: `CRIT`

4. **Error (3)**:

   - **Description**: Error conditions.
   - **Example**: Non-critical hardware or software errors.
   - **Log Message**: `ERR`

5. **Warning (4)**:

   - **Description**: Warning conditions.
   - **Example**: Potential problems, low disk space.
   - **Log Message**: `WARNING`

   ![image-20240703173858240](https://han.blob.core.windows.net/typora/image-20240703173858240.png) 

6. **Notice (5)**:

   - **Description**: Normal but significant conditions.
   - **Example**: Normal but notable events, configuration changes.
   - **Log Message**: `NOTICE`

   ![image-20240703120042056](https://han.blob.core.windows.net/typora/image-20240703120042056-1719999553348-3.png) 

7. **Informational (6)**:

   - **Description**: Informational messages.
   - **Example**: General information messages, service start/stop.
   - **Log Message**: `INFO`

8. **Debug (7)**:

   - **Description**: Debug-level messages.
   - **Example**: Detailed troubleshooting information.

![image-20240703134226692](https://han.blob.core.windows.net/typora/image-20240703134226692.png) 

**A. Biometrics**

Biometrics refers to authentication methods based on physical characteristics such as fingerprints, facial recognition, or iris scans. While biometrics can be used for access control, the scenario specifically mentions badge readers, not biometric devices.

**B. Physical Access Control**

Physical access control involves securing physical access to facilities, rooms, or buildings. It includes mechanisms such as locks, badge readers, and security guards to restrict entry to authorized personnel only. The scenario describes installing badge readers, which is a typical example of physical access control.

**C. Multifactor Authentication**

Multifactor authentication (MFA) involves using two or more authentication methods to verify a user's identity. Examples include combining something the user knows (password), something the user has (token or badge), and something the user is (biometric data). The scenario doesn't mention using multiple factors for authentication, only badge readers.

**D. Role-Based Access Control (RBAC)**

Role-based access control restricts system access to authorized users based on their roles within an organization. While RBAC can apply to both logical and physical access controls, the installation of badge readers is more directly related to physical access control. The decision about who gets access based on job roles might involve RBAC, but the implementation tool described (badge readers) falls under physical access control.

![image-20240703134921594](https://han.blob.core.windows.net/typora/image-20240703134921594.png) 

![image-20240704111616503](https://han.blob.core.windows.net/typora/image-20240704111616503.png) 

#### Data Plane (Forwarding Plane)

The data plane is responsible for the actual forwarding of packets based on the decisions made by the control plane. Actions within the data plane include:

- Forwarding packets based on the routing table (Layer 3)
- Switching frames based on the MAC address table (Layer 2)
- Applying Quality of Service (QoS) policies
- Filtering packets with Access Control Lists (ACLs)

#### Control Plane

The control plane is responsible for making decisions about how packets should be forwarded. Actions within the control plane include:

- Running routing protocols (OSPF, EIGRP, RIP, BGP) to build routing tables
- Responding to network control messages (e.g., ICMP, ARP)
- Managing network topology and state information
- Handling configuration and management tasks

**A. Compare the destination IP address to the IP routing table**

This action occurs within the data plane. When a router receives a packet, it compares the destination IP address of the packet to the entries in its IP routing table to determine the next-hop address and interface. This process is part of the packet forwarding mechanism.

![image-20240703140057711](https://han.blob.core.windows.net/typora/image-20240703140057711.png) 

The protocol used by an access point to draw power from a connected switch is **Cisco Discovery Protocol (CDP)**. CDP helps the access point and the switch communicate their power capabilities and requirements, facilitating the appropriate power delivery via PoE. 

![image-20240703140419838](https://han.blob.core.windows.net/typora/image-20240703140419838.png) 

FHRP protocols are designed to provide redundancy for the default gateway in a network, ensuring continuous network availability even if one of the gateways fails. This is crucial in maintaining a reliable and resilient network infrastructure. The primary FHRP protocols include:

- **HSRP (Hot Standby Router Protocol)**
- **VRRP (Virtual Router Redundancy Protocol)**
- **GLBP (Gateway Load Balancing Protocol)**



![image-20240703140757200](https://han.blob.core.windows.net/typora/image-20240703140757200.png) 

PMF is a feature that provides protection for management frames, which are crucial for the operation of wireless networks. Management frames include authentication, association, disassociation, and other control messages that are essential for maintaining the network.

背起來就好了

![image-20240703141618450](https://han.blob.core.windows.net/typora/image-20240703141618450.png) 

![image-20240703141713523](https://han.blob.core.windows.net/typora/image-20240703141713523.png) 

可以用Docker聯想

![image-20240703142535554](https://han.blob.core.windows.net/typora/image-20240703142535554.png) 

![](https://www.examtopics.com/assets/media/exam-media/04300/0010100001.png) 



An engineer is configuring an encrypted password for the enable command on a router where the local user database has already been configured. Drag and drop the configuration commands from the left into the correct sequence on the right. Not all commands are used.
Select and Place:

![img](https://www.examtopics.com/assets/media/exam-media/04300/0052900001.png)

**`enable secret <password>`**: This command sets an encrypted password that is required to enter privileged EXEC mode. The password will be stored in the device's configuration in an encrypted form, providing better security compared to the `enable password` command, which stores the password in plaintext.

````txt
enable
configure terminal
enable secret $h!f@4fs
service password-encryption
line vty 0 4
login local
exit
exit
````

![image-20240703151840167](https://han.blob.core.windows.net/typora/image-20240703151840167.png) 

![image-20240703155535668](https://han.blob.core.windows.net/typora/image-20240703155535668.png) 

**Serves as the network aggregation point**

[Question](https://www.examtopics.com/discussions/cisco/view/64110-exam-200-301-topic-1-question-431-discussion/#): The distribution layer collects data from all the access layer switches. Each access switch connects multiple end devices, and the distribution layer aggregates this traffic before forwarding it to the core layer.

![](https://www.examtopics.com/assets/media/exam-media/04300/0034400001.png) 

 Refer to the exhibit. What is the metric of the route to the 192.168.10.33/28 subnet?

- A. 84
- B. 110
- C. 128
- D. 192
- E. 193 **Most Voted**

**Suggested Answer:** *E* [🗳️](https://www.examtopics.com/discussions/cisco/view/64110-exam-200-301-topic-1-question-431-discussion/#)

![image-20240703160839315](https://han.blob.core.windows.net/typora/image-20240703160839315.png) 

![image-20240703160920739](https://han.blob.core.windows.net/typora/image-20240703160920739.png) 

![image-20240703161013618](https://han.blob.core.windows.net/typora/image-20240703161013618.png) 

![image-20240703161435096](https://han.blob.core.windows.net/typora/image-20240703161435096.png) 

Ports with PortFast enabled do not cause topology change notifications (TCNs) in the network when the port state changes (e.g., when a device is connected or disconnected). This prevents unnecessary recalculations of the spanning tree, which can be disruptive.

![image-20240703161854911](https://han.blob.core.windows.net/typora/image-20240703161854911.png) 

記一下

![image-20240703171852682](https://han.blob.core.windows.net/typora/image-20240703171852682.png) 

The word "susceptible" means likely to be influenced or harmed by a particular thing. In this context, it means that 802.11a is likely to be affected by interference from devices operating at the same frequency. 

C在亂講

![image-20240703172124722](https://han.blob.core.windows.net/typora/image-20240703172124722.png) 

![image-20240703172316692](https://han.blob.core.windows.net/typora/image-20240703172316692.png) 

[Question](https://www.examtopics.com/discussions/cisco/view/75191-exam-200-301-topic-1-question-92-discussion/#): What are network endpoints?

- A. support inter-VLAN connectivity
- B. a threat to the network if they are compromised **Most Voted**
- C. act as routers to connect a user to the service provider network
- D. enforce policies for campus-wide traffic going to the Internet

**Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/75191-exam-200-301-topic-1-question-92-discussion/#)

![image-20240703172518151](https://han.blob.core.windows.net/typora/image-20240703172518151.png) 

![image-20240703172608853](https://han.blob.core.windows.net/typora/image-20240703172608853.png)

![image-20240703172825861](https://han.blob.core.windows.net/typora/image-20240703172825861.png) 

The question is asking about the type of 802.11 management frame that is used when a wireless client device moves (roams) between access points within the same SSID (Service Set Identifier), which is essentially the same wireless network.

When a client roams between access points (APs) within the same wireless network (SSID), it needs to inform the new AP of its presence and request to join the network. This is done using a **Reassociation Request** frame.

![image-20240703173018640](https://han.blob.core.windows.net/typora/image-20240703173018640.png) 

![image-20240703173227277](https://han.blob.core.windows.net/typora/image-20240703173227277.png) 

![image-20240703173330834](https://han.blob.core.windows.net/typora/image-20240703173330834.png) 

**A. Proprietary Cisco APIs leverage multiple network management tools.**

These APIs allow for seamless integration and control of various network management tools, enabling more efficient and automated network management.

**E. Artificial intelligence identifies and prevents potential design failures.**

AI can analyze network patterns, predict issues, and suggest preventive measures, leading to a more reliable and efficient network.

[Question](https://www.examtopics.com/discussions/cisco/view/19876-exam-200-301-topic-1-question-719-discussion/#): What are two benefits of network automation? (Choose two.)

- A. reduced hardware footprint
- B. reduced operational costs **Most Voted**
- C. faster changes with more reliable results **Most Voted**
- D. fewer network failures
- E. increased network security

**Suggested Answer:** *BC* [🗳️](https://www.examtopics.com/discussions/cisco/view/19876-exam-200-301-topic-1-question-719-discussion/#)

[Question](https://www.examtopics.com/discussions/cisco/view/121913-exam-200-301-topic-1-question-1173-discussion/#): What is a reason why a company would choose to use network automation in an enterprise?

- A. Provide data services faster.
- B. Enable network segmentation.
- C. Mitigate spanning-tree loop avoidance.
- D. Implement granular QoS.

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/121913-exam-200-301-topic-1-question-1173-discussion/#)

![image-20240703174027862](https://han.blob.core.windows.net/typora/image-20240703174027862.png) 

service-port ➡ out-of-band management ➡ 額外介入 ➡ Telnet, SSH

![image-20240703174413111](https://han.blob.core.windows.net/typora/image-20240703174413111.png) 

用同樣的邏輯選就對了

![image-20240703174127081](https://han.blob.core.windows.net/typora/image-20240703174127081.png) 

要溫一下

![image-20240703174312630](https://han.blob.core.windows.net/typora/image-20240703174312630.png) 
