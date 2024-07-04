# Questions Completed on 2024-07-04



## Important Concepts

The data plane, also known as the forwarding plane, is responsible for the actual movement of packets through the network. It handles tasks such as forwarding packets based on established rules and making real-time decisions about packet handling.



## Questions

![image-20240704082402680](https://han.blob.core.windows.net/typora/image-20240704082402680.png) 

- The **control plane** resides in the **control layer** of the SDN architecture, where the SDN controller makes decisions about how traffic should be handled.

- The **data plane** resides in the **infrastructure layer**, where the physical network devices (switches and routers) execute the forwarding of traffic based on the control plane's instructions.

![image-20240704082558935](https://han.blob.core.windows.net/typora/image-20240704082558935.png) 

![image-20240704082823303](https://han.blob.core.windows.net/typora/image-20240704082823303.png) 

How does Rapid PVST+ create a fast loop-free network topology?

- A. It uses multiple active paths between end stations.
- B. It requires multiple links between core switches.
- C. It maps multiple VLANs into the same spanning-tree instance.
- D. It generates one spanning-tree instance for each VLAN. **Most Voted**

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/101139-exam-200-301-topic-1-question-838-discussion/#)

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/101139-exam-200-301-topic-1-question-838-discussion/#)  

![](https://www.examtopics.com/assets/media/exam-media/04300/0019100001.png) 

Processes BPDUs received from the system module. """But it doesn't transmit"""".

Answer correct:
1- BPDUs received are forwarded to the system module.
4- Frames received from attached segment are processed.
5- Switched frames from other ports are advanced.
6- Port in the forwarding state responds to network mngmt messages.

![image-20240704094900529](https://han.blob.core.windows.net/typora/image-20240704094900529.png) 

**Accessible for management via Telnet, SSH, or a web GUI**: Autonomous access points can be managed directly using various methods such as Telnet, SSH, or a web interface.

**Requires a management IP address**: Each autonomous access point needs its own management IP address for configuration and management purposes.

![image-20240704100752235](https://han.blob.core.windows.net/typora/image-20240704100752235.png) 

- **Layer 2** is the correct answer because it is where the authentication process is technically implemented and executed.

- **SSID** is not the correct answer because it is used for network identification and selection, not for the actual authentication process. 

​	![image-20240704101601829](https://han.blob.core.windows.net/typora/image-20240704101601829.png) 



![image-20240704101040709](https://han.blob.core.windows.net/typora/image-20240704101040709.png) 

The answer is wrong

What are two characteristics of a public cloud implementation? (Choose two.)

- A. It is owned and maintained by one party, but it is shared among multiple organizations **Most Voted**
- B. It enables an organization to fully customize how it deploys network resources
- C. It provides services that are accessed over the Internet **Most Voted**
- D. It is a data center on the public Internet that maintains cloud services for only one company
- E. It supports network resources from a centralized third-party provider and privately-owned virtual resources

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/97442-exam-200-301-topic-1-question-775-discussion/#)

**Suggested Answer:** *AC* [🗳️](https://www.examtopics.com/discussions/cisco/view/97442-exam-200-301-topic-1-question-775-discussion/#)

![image-20240704101156135](https://han.blob.core.windows.net/typora/image-20240704101156135.png) 

**B - Multicast Traffic**: Multicast involves one-to-many communication. IPsec does not natively support multicast traffic well. To secure multicast traffic, protocols such as GRE (Generic Routing Encapsulation) are often used in conjunction with IPsec to encapsulate the multicast packets.

**C - Broadcast Traffic**: Broadcast traffic is one-to-all communication within a subnet. IPsec does not natively support broadcast traffic. Like multicast, GRE can be used in conjunction with IPsec for scenarios where broadcast traffic needs to be secured.

[Question](https://www.examtopics.com/discussions/cisco/view/123880-exam-200-301-topic-1-question-1207-discussion/#): What is the temporary state that switch ports always enter immediately after the boot process when Rapid PVST+ is used?

- A. forwarding
- B. listening
- C. learning
- ✔ D. discarding 

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/123880-exam-200-301-topic-1-question-1207-discussion/#)

In Rapid PVST+, the first state that a switch port enters after the boot process is the "discarding" state. During this state, the port doesn´t forward frames but listens to BPDUs to determine the network topology. After the discarding state, the port transitions through the listening and learning states before reaching the forwarding state, where it actively forwards frames.

![image-20240704102843907](https://han.blob.core.windows.net/typora/image-20240704102843907.png) 

1000BASE-LX:
Used for Gigabit Ethernet over optical fiber
Supports distances up to 10 km
Uses a single-mode fiber (SMF)

1000BASE-T:
Used for Gigabit Ethernet over copper cable
Supports distances up to 100 meters
Uses 4 pairs of copper wires
Supports speeds up to 1000 Mbps (1 Gbps)

Since both 1000BASE-LX and 1000BASE-T use the Ethernet data-link layer protocol, and the header and trailer formats are standardized by IEEE 802.3, ensuring consistency and interoperability within Ethernet networks.

![image-20240704103629262](https://han.blob.core.windows.net/typora/image-20240704103629262.png) 



![image-20240704104825605](https://han.blob.core.windows.net/typora/image-20240704104825605.png) 

If your switch port is set to "dynamic auto" and the neighboring switch port is set to "desirable," the trunk link will be established because "dynamic auto" will passively form a trunk if the other side is actively trying to negotiate a trunk (i.e., set to "desirable").

While configuring both ends to "dynamic desirable" is acceptable and will indeed establish a trunk link, the most passive and typically recommended approach when one side is already actively trying to negotiate (in "desirable" mode) is to set the other side to "dynamic auto." This ensures the port only becomes a trunk when the other side initiates the negotiation, thus avoiding potential conflicts and simplifying the configuration process.

**B. configure switchport trunk dynamic desirable**: This is not a valid command. The correct command is "switchport mode dynamic desirable."

**D. configure switchport mode dynamic desirable**: This is also correct but more aggressive than necessary given that "dynamic auto" suffices.

C for best practice ...

![image-20240704105051605](https://han.blob.core.windows.net/typora/image-20240704105051605.png) 

![image-20240704105154357](https://han.blob.core.windows.net/typora/image-20240704105154357.png) 



![image-20240704105324461](https://han.blob.core.windows.net/typora/image-20240704105324461.png) 

Switch 1 Configuration (Active Mode):

```
Switch1> enable
Switch1# configure terminal
Switch1(config)# interface range GigabitEthernet0/1 - 2
Switch1(config-if-range)# switchport mode access
Switch1(config-if-range)# switchport access vlan 2
Switch1(config-if-range)# channel-group 1 mode active
Switch1(config-if-range)# exit
Switch1(config)# interface Port-channel 1
Switch1(config-if)# switchport mode access
Switch1(config-if)# switchport access vlan 2
Switch1(config-if)# end
Switch1# write memory
```

Switch 2 Configuration (Passive Mode):

```
Switch2> enable
Switch2# configure terminal
Switch2(config)# interface range GigabitEthernet0/1 - 2
Switch2(config-if-range)# switchport mode access
Switch2(config-if-range)# switchport access vlan 2
Switch2(config-if-range)# channel-group 1 mode passive
Switch2(config-if-range)# exit
Switch2(config)# interface Port-channel 1
Switch2(config-if)# switchport mode access
Switch2(config-if)# switchport access vlan 2
Switch2(config-if)# end
Switch2# write memory
```

The answer is C

If the EtherChannel does not need to be in trunk mode and can be in access mode, the previous configurations are correct. 

Given that the initial scenario did not specify the need for multiple VLANs, it might have implied access mode. However, typically for switch-to-switch connections, trunk mode is more common

So it isn't really necessary to be trunk or access mode

![image-20240704111006068](https://han.blob.core.windows.net/typora/image-20240704111006068.png) 

![image-20240704111156610](https://han.blob.core.windows.net/typora/image-20240704111156610.png) 

![image-20240704111253211](https://han.blob.core.windows.net/typora/image-20240704111253211.png)

Many bridges

![image-20240704111429418](https://han.blob.core.windows.net/typora/image-20240704111429418.png) 

worded

![image-20240704112055780](https://han.blob.core.windows.net/typora/image-20240704112055780.png) 

```
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address dhcp
```

The interface `GigabitEthernet0/0` is configured to act as a DHCP client.
It will send a DHCPDISCOVER message to locate a DHCP server and obtain an IP address along with other necessary network information.

![image-20240704113205531](https://han.blob.core.windows.net/typora/image-20240704113205531.png) 

![image-20240704113417789](https://han.blob.core.windows.net/typora/image-20240704113417789.png) 

 **B. It supports network resources from a centralized third-party provider and privately-owned virtual resources**:
Public clouds are provided by third-party providers who own and manage the physical infrastructure. Users can deploy virtual resources on this infrastructure.

**C. It is owned and maintained by one party, but it is shared among multiple organizations**:
While it is true that a public cloud is owned and maintained by a third-party provider and shared among multiple organizations, the question asks for characteristics specific to a public cloud implementation. The selected correct answers provide a more precise definition.

![image-20240704114224489](https://han.blob.core.windows.net/typora/image-20240704114224489.png) 

解題線索1

````txt
access-list [access-list-number] permit [protocol] host [source-ip] host [destination-ip] eq [port]
````

解題線索2

| **Service** | **Port** | **Protocol** | **Usage**                          |
| ----------- | -------- | ------------ | ---------------------------------- |
| **DHCP**    | 67       | UDP          | Server                             |
| **DHCP**    | 68       | UDP          | Client                             |
| **DNS**     | 53       | UDP          | Queries and Responses              |
| **DNS**     | 53       | TCP          | Zone Transfers and large responses |

DHCP uses UDP, not TCP. The entry `access-list 100 permit tcp` is incorrect because DHCP communication between clients and servers happens over UDP ports 67 and 68.

C - If you need to permit DHCP traffic using an access list, it should look like this:

```
access-list 100 permit udp any eq bootpc any eq bootps
```

or more specifically for your given scenario:

```
access-list 100 permit udp host 10.0.1.1 eq 67 host 10.148.2.1 eq 68
```

![image-20240704123515260](https://han.blob.core.windows.net/typora/image-20240704123515260.png) 

Commands to Enable SSH on Router:

**Generate RSA Keys**:

- The `crypto key generate rsa` command generates RSA key pairs, which are required for SSH encryption.
- This command is crucial for enabling SSH because it provides the necessary encryption keys for secure communication.

**Enable SSH**:

The `ip ssh pubkey-chain` command is used to configure SSH key pairs for user authentication. This command enables SSH on the router and allows the configuration of SSH key pairs.

Configuration Example:

````txt
R1# configure terminal
R1(config)# crypto key generate rsa
R1(config)# ip ssh pubkey-chain
````

![image-20240704123656027](https://han.blob.core.windows.net/typora/image-20240704123656027.png) 

最高級是15 

![image-20240704134339830](https://han.blob.core.windows.net/typora/image-20240704134339830.png) 

![image-20240704134517668](https://han.blob.core.windows.net/typora/image-20240704134517668.png) 

![image-20240704142500918](https://han.blob.core.windows.net/typora/image-20240704142500918.png) 

This correctly describes the primary difference. A unicast address uniquely identifies one interface on a single node, whereas an anycast address can be assigned to multiple interfaces on multiple nodes, with the closest one receiving the packet.

**Option D** is incorrect because it inaccurately describes the configuration requirements for unicast and anycast addresses. Both unicast and anycast addresses must be explicitly configured, but anycast requires additional configuration to function correctly.

![image-20240704143047788](https://han.blob.core.windows.net/typora/image-20240704143047788.png) 

Here is a complete example of how to configure the router to accept only SSH connections:

```
R1> enable
R1# configure terminal
R1(config)# ip domain-name CNAC.com
R1(config)# crypto key generate rsa modulus 1024
R1(config)# line vty 0 15
R1(config-line)# transport input ssh
R1(config-line)# login local
R1(config)# username CNAC secret R14!143!9115@
R1(config)# ip ssh version 2
R1(config)# end
R1# write memory
```
