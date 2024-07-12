# Questions Completed on 2024-07-10

### About Test

having a lesson taught

![image-20240710103513987](https://han.blob.core.windows.net/typora/image-20240710103513987.png)

### Other Questions

When you configure SSH with public key authentication, users authenticate using a cryptographic key instead of a password. This method enhances security and convenience as users do not need to type a password

```
R1(config)# hostname R1
R1(config)# ip domain-name example.com
R1(config)# crypto key generate rsa modulus 2048
R1(config)# username admin privilege 15
R1(config)# ip ssh public-key-chain
R1(conf-ssh-pubkey)# username admin
R1(conf-ssh-pubkey-user)# key-string
R1(conf-ssh-pubkey-data)# ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArVz... user@host
R1(conf-ssh-pubkey-data)# exit
R1(conf-ssh-pubkey-user)# exit
R1(conf-ssh-pubkey)# exit
R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input ssh
R1(config)# ip ssh version 2
R1(config)# end
R1# write memory
```

**Authentication:** When the user connects to the router, the SSH client uses the private key to authenticate. If the private key matches the public key stored on the router, the user is granted access without needing to type a password.

```txt
R1(config)# ip ssh public-key-chain
R1(conf-ssh-pubkey)# username admin
R1(conf-ssh-pubkey-user)# key-string
R1(conf-ssh-pubkey-data)# ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArVz... user@host
R1(conf-ssh-pubkey-data)# exit
R1(conf-ssh-pubkey-user)# exit
R1(conf-ssh-pubkey)# exit
```

![img](https://www.examtopics.com/assets/media/exam-media/04300/0035700001.png)

```txt
R1(config)# router ospf 1
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0
R1(config-router)# exit
R1(config)# interface Serial0/1
R1(config-if)# ip ospf 1 area 0
R1(config-if)# exit
```

```txt
R2(config)# router ospf 1
R2(config-router)# network 10.0.0.0 0.0.0.3 area 0
R2(config-router)# exit
R2(config)# interface Serial0/1
R2(config-if)# ip ospf 1 area 0
R2(config-if)# exit
```

![img](https://www.examtopics.com/assets/media/exam-media/04300/0021700001.jpg)

Trunk ports are set individually on each interface. However, the configuration also includes `channel-group` commands, which are used to create an EtherChannel. This allows multiple physical links to be combined into a single logical link, providing increased bandwidth and redundancy.

When configuring EtherChannel, you don't need to set trunk configuration on the logical port (Port-Channel interface) separately if you already configured it on the individual physical interfaces. The configuration applied to the physical interfaces will be inherited by the Port-Channel interface.

When configuring EtherChannel, you still need to set each member port as a trunk individually before adding them to the channel group. This ensures that all the member ports have the same configuration, which is necessary for the EtherChannel to function correctly.

```plaintext
SW1(config)# interface range fastEthernet 0/1 - 2
SW1(config-if-range)# switchport trunk encapsulation dot1q
SW1(config-if-range)# switchport mode trunk
SW1(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW1(config-if-range)# channel-group 1 mode on
```

```plaintext
SW2(config)# interface range fastEthernet 0/1 - 2
SW2(config-if-range)# switchport trunk encapsulation dot1q
SW2(config-if-range)# switchport mode trunk
SW2(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW2(config-if-range)# channel-group 1 mode active
```

The configuration at the following is thorough and ensures that both the physical interfaces and the logical port-channel interface are set up correctly. This approach can be considered best practice

```txt
SW1# configure terminal
SW1(config)# interface range fastEthernet 0/1 - 2
SW1(config-if-range)# switchport trunk encapsulation dot1q
SW1(config-if-range)# switchport mode trunk
SW1(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW1(config-if-range)# channel-group 1 mode on
SW1(config-if-range)# exit
SW1(config)# interface port-channel 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 100, 200, 300
SW1(config-if)# exit
```

```txt
SW2# configure terminal
SW2(config)# interface range fastEthernet 0/1 - 2
SW2(config-if-range)# switchport trunk encapsulation dot1q
SW2(config-if-range)# switchport mode trunk
SW2(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# exit
SW2(config)# interface port-channel 1
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk allowed vlan 100, 200, 300
SW2(config-if)# exit
```

This configuration is indeed robust and ensures that all necessary settings are applied consistently. It combines the benefits of both detailed physical interface configuration and centralized logical interface management.

[Question](https://www.examtopics.com/discussions/cisco/view/80815-exam-200-301-topic-1-question-115-discussion/#): A network engineer must implement an IPv6 configuration on the vlan 2000 interface to create a routable locally-unique unicast address that is blocked from being advertised to the internet. Which configuration must the engineer apply?

- A. interface vlan 2000 ipv6 address ff00:0000:aaaa::1234:2343/64
- ✔ B. interface vlan 2000 ipv6 address fd00::1234:2343/64 **Most Voted**
- C. interface vlan 2000 ipv6 address fe80:0000:aaaa::1234:2343/64
- D. interface vlan 2000 ipv6 address fc00:0000:aaaa::a15d:1234:2343:8aca/64

**Suggested Answer:** _D_ [🗳️](https://www.examtopics.com/discussions/cisco/view/80815-exam-200-301-topic-1-question-115-discussion/#)

Although it starts with `fc00::` which is within the `fc00::/7` range for Unique Local Addresses (ULA), the correct range for ULA according to RFC 4193 is `fd00::/8`.

![img](https://www.examtopics.com/assets/media/exam-media/04300/0046100001.png)

[Question](https://www.examtopics.com/discussions/cisco/view/77915-exam-200-301-topic-1-question-566-discussion/#): Refer to the exhibit. Which two commands must be added to update the configuration of router R1 so that it accepts only encrypted connections? (Choose two.)

- A. transport input ssh **Most Voted**
- B. username CNAC secret R!41!3705926@
- C. crypto key generate rsa 1024 **Most Voted**
- D. line vty 0 4
- E. ip ssh version 2

**Suggested Answer:** _CE_ [🗳️](https://www.examtopics.com/discussions/cisco/view/77915-exam-200-301-topic-1-question-566-discussion/#)

![image-20240712083656389](https://han.blob.core.windows.net/typora/image-20240712083656389.png)

![image-20240712100114959](https://han.blob.core.windows.net/typora/image-20240712100114959.png) 

In NAT translations, the **Inside Local** IP address represents the actual source IP address of the device on the internal network before translation.  

![image-20240712102717080](https://han.blob.core.windows.net/typora/image-20240712102717080.png) 

**Configuring a password for the console port (Option B)**:
**Logical Access Control**: While important for security, setting a password for the console port of a device controls access to the device’s management interface, not physical access. This is considered logical or administrative access control.

**Configuring enable passwords on network devices (Option D)**: 
**Logical Access Control**: Like Option B, configuring enable passwords restricts administrative access to the device’s configuration and management but does not affect physical access.

**Setting up IP cameras to monitor key infrastructure (Option A)**:
**Physical Access Control**: IP cameras provide surveillance and monitoring of physical spaces, helping to detect and respond to unauthorized access attempts. This is a direct method of controlling and securing physical access to critical infrastructure.

IP cameras are commonly used to monitor physical spaces and the activities of users within those spaces for security purposes.

Organizations often use IP cameras to ensure compliance with safety protocols and regulatory requirements. Monitoring workspaces helps ensure that safety practices are followed, which can prevent accidents and injuries.

**B is incorrect** because both RADIUS and TACACS+ can be used for various types of authentication, not just dial-up. While RADIUS has historical ties to dial-up networking, it is widely used today for wireless authentication (e.g., 802.1X), VPNs, and other network access types.

**RADIUS** encrypts only the password in the access-request packet, leaving other information (such as username and user attributes) in plaintext, and **TACACS+** encrypts the entire payload of the packet, providing a higher level of security for all transmitted data.

![image-20240712103658960](https://han.blob.core.windows.net/typora/image-20240712103658960.png) 

![image-20240712104620893](https://han.blob.core.windows.net/typora/image-20240712104620893.png) 

**B. The distribution layer runs Layer 2 and Layer 3 technologies.**

- The distribution layer serves as an intermediary between the access and core layers in a three-tier network architecture.
- It typically handles routing (Layer 3) and switching (Layer 2) functions, enabling efficient traffic management, policy implementation, and inter-VLAN routing.

![image-20240712105513793](https://han.blob.core.windows.net/typora/image-20240712105513793.png) 

![image-20240712110422306](https://han.blob.core.windows.net/typora/image-20240712110422306.png) 

Mulricast is not similar to a unicast address, as it is used for one-to-many communication.

![image-20240712111659135](https://han.blob.core.windows.net/typora/image-20240712111659135.png) 

R1 has `mtu 1600`, while R2 does not specify an MTU size, which defaults to 1500. This mismatch can prevent the OSPF neighbor relationship from being established.

**D. R1 has an incorrect network command for interface Gi1/0 is incorrect**: The network command on R1 is correct.

**B. R2 is using the passive-interface default command**
Both routers are using the `passive-interface default` command correctly and enabling OSPF on the necessary interfaces.

Both routers have `passive-interface default` and then `no passive-interface` for their respective interfaces, which is correct for enabling OSPF on the specified interfaces.

![image-20240712113042778](https://han.blob.core.windows.net/typora/image-20240712113042778.png) 

VACLs are used to apply access control policies within a VLAN. They allow for the filtering of packets within a VLAN based on various criteria, such as IP addresses, protocols, or ports.

![img](https://www.examtopics.com/assets/media/exam-media/04300/0037400001.png)
Refer to the exhibit. An engineer is updating the R1 configuration to connect a new server to the management network. The PCs on the management network must be blocked from pinging the default gateway of the new server. Which command must be configured on R1 to complete the task?

- A. R1(config)#ip route 172.16.2.0.255.255.255.0 192.168.1.15
- B. R1(config)#ip route 172.16.2.2 255.255.255.248 gi0/1
- C. R1(config)#ip route 172.16.2.2 255.255.255.255 gi0/0 **Most Voted**
- D. R1(config)#ip route 172.16.2.0 255.255.255.0 192.168.1.5

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/86487-exam-200-301-topic-1-question-462-discussion/#)

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/86487-exam-200-301-topic-1-question-462-discussion/#)
By specifying the outgoing interface and not the next hop IP address, the Management devices will be able to ping the new server, but not the default gateway of the server.

![image-20240712115550507](https://han.blob.core.windows.net/typora/image-20240712115550507.png) 

![image-20240712120001012](https://han.blob.core.windows.net/typora/image-20240712120001012.png) 

![image-20240712120112709](https://han.blob.core.windows.net/typora/image-20240712120112709.png) 

![image-20240712120322951](https://han.blob.core.windows.net/typora/image-20240712120322951.png) 

**Link-Local Addresses** are designed for communication within a single network segment and are automatically configured on each network interface. This automatic and unique configuration per interface ensures local communication without the need for manual setup.

Each network interface on a device is automatically assigned a link-local address, typically in the range FE80::/10. This address is unique to that interface and does not change unless manually configured

![image-20240712120620375](https://han.blob.core.windows.net/typora/image-20240712120620375.png) 

For WPA2-PSK (Wi-Fi Protected Access 2 - Pre-Shared Key) configuration on a Wireless LAN Controller, the minimum number of characters required for the passphrase in ASCII format is 8. This is a standard requirement for WPA2-PSK to ensure a basic level of security.

![image-20240712142218408](https://han.blob.core.windows.net/typora/image-20240712142218408.png) 

![image-20240712142735987](https://han.blob.core.windows.net/typora/image-20240712142735987.png) 

![image-20240712143041866](https://han.blob.core.windows.net/typora/image-20240712143041866.png) 

![img](https://www.examtopics.com/assets/media/exam-media/04300/0019900001.png)
Refer to the exhibit. An engineer is asked to insert the new VLAN into the existing trunk without modifying anything previously configured. Which command accomplishes this task?

- A. switchport trunk allowed vlan 100-104
- B. switchport trunk allowed vlan 104
- C. switchport trunk allowed vlan all
- D. switchport trunk allowed vlan add 104 **Most Voted**

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/74907-exam-200-301-topic-1-question-270-discussion/#) 

![image-20240712145703188](https://han.blob.core.windows.net/typora/image-20240712145703188.png) 

**Option C**: This option suggests isolating the native VLAN from other VLANs within the administrative domain. This can be interpreted as ensuring that the native VLAN is not used for regular traffic and is separated to reduce risks associated with VLAN hopping attacks. This aligns with the best practice of not using the default VLAN 1 and assigning a unique, isolated VLAN for the native VLAN. 

Both options are valid, but in the context of securing the native VLAN directly and technically preventing VLAN hopping, **option D** might be considered more specific and actionable.

In the context of VLANs, separating the native VLAN from other VLANs within the administrative domain means ensuring that the native VLAN is not used for regular user traffic or any other critical operations. This helps in mitigating potential security risks.

In a practical scenario, securing the native VLAN within the administrative domain involves:

- Changing the native VLAN from the default VLAN 1 to a unique VLAN ID.
- Ensuring that the native VLAN does not carry any regular user traffic.
- Configuring trunk ports to only allow necessary VLANs and pruning the native VLAN if it is not required.

[Question](https://www.examtopics.com/discussions/cisco/view/55482-exam-200-301-topic-1-question-222-discussion/#): Which three statements are typical characteristics of VLAN arrangements? (Choose three.)

- A. A new switch has no VLANs configured.
- B. Connectivity between VLANs requires a Layer 3 device.
- C. VLANs typically decrease the number of collision domains.
- D. Each VLAN uses a separate address space.
- E. A switch maintains a separate bridging table for each VLAN.
- F. VLANs cannot span multiple switches.

**Suggested Answer:** *BDE* [🗳️](https://www.examtopics.com/discussions/cisco/view/55482-exam-200-301-topic-1-question-222-discussion/#)

[Question](https://www.examtopics.com/discussions/cisco/view/41335-exam-200-301-topic-1-question-209-discussion/#): Refer to the exhibit. Which VLAN ID is associated with the default VLAN in the given environment?
![img](https://www.examtopics.com/assets/media/exam-media/04300/0016000001.png)

- A. VLAN 1 **Most Voted**
- B. VLAN 5
- C. VLAN 10
- D. VLAN 20

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/41335-exam-200-301-topic-1-question-209-discussion/#) 

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/71351-exam-200-301-topic-1-question-655-discussion/#): A network engineer is asked to configure VLANS 2, 3, and 4 for a new implementation. Some ports must be assigned to the new VLANS with unused ports remaining. Which action should be taken for the unused ports?

- A. configure in a nondefault native VLAN
- B. configure ports in the native VLAN
- C. configure ports in a black hole VLAN **Most Voted**
- D. configure ports as access ports

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/71351-exam-200-301-topic-1-question-655-discussion/#)

[Question](https://www.examtopics.com/discussions/cisco/view/974-exam-200-105-topic-1-question-425-discussion/#): Placing unused ports into a "black hole" effectively isolates them from the network. No IP address is applied to the SVI, so they cannot access any infrastructural equipment. Basic CCNA Security question, which *is* within scope of CCNA.

Under normal operations, Cisco recommends that you configure switchports on which VLAN?

- A. on any VLAN except the default VLAN
- B. on the management VLAN
- C. on the native VLAN
- D. on the default VLAN

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/974-exam-200-105-topic-1-question-425-discussion/#)

![image-20240712153551133](https://han.blob.core.windows.net/typora/image-20240712153551133.png) 

A is correct

![image-20240712153643772](https://han.blob.core.windows.net/typora/image-20240712153643772.png) 

![img](https://www.examtopics.com/assets/media/exam-media/04300/0050600001.png)

[Question](https://www.examtopics.com/discussions/cisco/view/41916-exam-200-301-topic-1-question-621-discussion/#): Refer to the exhibit. An extended ACL has been configured and applied to router R2. The configuration failed to work as intended.
Which two changes stop outbound traffic on TCP ports 25 and 80 to 10.0.20.0/26 from the 10.0.10.0/26 subnet while still allowing all other traffic? (Choose two.)

- A. Add a ג€permit ip any anyג€ statement at the end of ACL 101 for allowed traffic. **Most Voted**
- B. Add a ג€permit ip any anyג€ statement to the beginning of ACL 101 for allowed traffic.
- C. The ACL must be moved to the Gi0/1 interface outbound on R2.
- D. The source and destination IPs must be swapped in ACL 101. **Most Voted**
- E. The ACL must be configured the Gi0/2 interface inbound on R1.

**Suggested Answer:** *AD* [🗳️](https://www.examtopics.com/discussions/cisco/view/41916-exam-200-301-topic-1-question-621-discussion/#)

Current config

````txt
R2(config)# access-list 101 deny tcp 10.0.20.0 0.0.0.63 10.0.10.0 0.0.0.63 eq smtp
R2(config)# access-list 101 deny tcp 10.0.20.0 0.0.0.63 10.0.10.0 0.0.0.63 eq www
R2(config)# int gi0/2
R2(config-if)# ip access-group 101 in
````

Corrected version

````txt
R2(config)# access-list 101 deny tcp 10.0.10.0 0.0.0.63 10.0.20.0 0.0.0.63 eq smtp
R2(config)# access-list 101 deny tcp 10.0.10.0 0.0.0.63 10.0.20.0 0.0.0.63 eq www
R2(config)# access-list 101 permit ip any any
R2(config)# int gi0/1
R2(config-if)# ip access-group 101 out
````

![image-20240712162036153](https://han.blob.core.windows.net/typora/image-20240712162036153.png) 

![image-20240712162236054](https://han.blob.core.windows.net/typora/image-20240712162236054.png)

Administrative Distance (AD) of the Routing Protocols:

- **Internal EIGRP**: 90
- **OSPF**: 110
- **IS-IS**: 115
- **RIP**: 120



 ![image-20240712162645624](https://han.blob.core.windows.net/typora/image-20240712162645624.png) 

**General Meaning of "Chassis"**

In networking and computing, the term **chassis** refers to the physical framework or structure **that houses and organizes** the various components of a device, such as a switch, router, or server. It can **include slots** for modules, power supplies, fans, and other hardware components.

![image-20240712163402156](https://han.blob.core.windows.net/typora/image-20240712163402156.png) 

**Coordinating VTNs (Virtual Tenant Networks)**:

- **Function**: The SDN controller can create, manage, and coordinate VTNs, which are virtual networks that provide network segmentation and isolation within a physical network.
- **Key Role**: VTNs are essential for multi-tenant environments where network resources need to be logically partitioned.

![image-20240712163832798](https://han.blob.core.windows.net/typora/image-20240712163832798.png) 

B is correct. In the absence of a manually configured router ID and loopback interfaces, OSPF will choose the highest IP address on any active physical interface.

D is incorrect. OSPF will never use 0.0.0.0 as a router ID; it will always choose a valid IP address based on the selection process.

![image-20240712164319053](https://han.blob.core.windows.net/typora/image-20240712164319053.png) 

![image-20240712165135594](https://han.blob.core.windows.net/typora/image-20240712165135594.png) 
