# Questions Completed on 2024-07-05

### Configure SSH

Given that the domain name, crypto keys, and SSH have already been configured, we will focus on configuring access control lists (ACLs) and line vty settings to allow remote access from the specified subnet.

````txt
! Step 1: Configure ACL
ip access-list standard SSH_ACCESS
 permit 10.139.58.0 0.0.0.15
 exit

! Step 2: Apply ACL to vty lines
line vty 0 4
 access-class SSH_ACCESS in
 transport input ssh
 login local
 exit

! Step 3: Configure local username (if not already done)
username admin privilege 15 secret your_password
````

with domain name

````txt
! Step 1: Set the Hostname
hostname MyRouter

! Step 2: Configure the Domain Name
ip domain-name mydomain.com

! Step 3: Generate the RSA Key Pair
crypto key generate rsa modulus 2048

! Step 4: Configure ACL
ip access-list standard SSH_ACCESS
 permit 10.139.58.0 0.0.0.15
 exit

! Step 5: Apply ACL to vty lines and Enable SSH
line vty 0 4
 access-class SSH_ACCESS in
 transport input ssh
 login local
 exit

! Step 6: Configure Local Username
username admin privilege 15 secret your_password
````

![image-20240705095511387](https://han.blob.core.windows.net/typora/image-20240705095511387.png) 

### Other Questions

![image-20240705081032279](https://han.blob.core.windows.net/typora/image-20240705081032279.png) 

The purpose of Maximum Transmission Unit (MTU) is to define the largest size of a packet or frame that can be sent in a single network transaction. MTU size can impact the efficiency and performance of network communications, as well as compatibility between network devices.

The exhibit shows that the OSPF adjacency is stuck in the "EXCHANGE" state with a neighbor. One common reason for this issue is an MTU mismatch between the routers.

**Option B: "Configure router A to use the same MTU size as router B"** directly addresses this issue by ensuring both routers have the same MTU configuration, allowing the OSPF adjacency process to complete successfully.

![](https://www.examtopics.com/assets/media/exam-media/04300/0008400001.png)

Refer to the exhibit. Site A was recently connected to site B over a new single-mode fiber path. Users at site A report intermittent connectivity issues with applications hosted at site B. What is the reason for the problem?

- A. Physical network errors are being transmitted between the two sites.
- B. Heavy usage is causing high latency.
- C. The wrong cable type was used to make the connection.
- D. An incorrect type of transceiver has been inserted into a device on the link **Most Voted**

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/82196-exam-200-301-topic-1-question-123-discussion/#)

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/82196-exam-200-301-topic-1-question-123-discussion/#)

![](https://img.examtopics.com/200-301/image35.png) 

Refer to the exhibit. Which next-hop IP address has the least desirable metric when sourced from R1?

- A. 10.10.10.4
- B. 10.10.10.5
- C. 10.10.10.3 **Most Voted**
- D. 10.10.10.2

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/99194-exam-200-301-topic-1-question-894-discussion/#)

**Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/99194-exam-200-301-topic-1-question-894-discussion/#)

Given these values, the route with the highest (least desirable) metric is the one to **10.10.10.3/32 via 10.10.10.3** with a metric of **100**.

> least desirable metric = highest metric value

![image-20240705085638281](https://han.blob.core.windows.net/typora/image-20240705085638281.png) 

**D. to provide link redundancy and load balancing**: This is the primary purpose of LAG. By aggregating multiple links, LAG ensures that if one link fails, the traffic can still flow through the remaining links (redundancy). Additionally, it distributes the traffic across the available links to make efficient use of the bandwidth (load balancing).

**Failover**: While LAG does provide failover capabilities, it does not involve switching to different VLANs. The failover in LAG is about maintaining connectivity by using the remaining active links within the same logical link.

**Different VLANs**: LAG itself does not handle VLANs differently. VLAN management is a separate function and is configured independently of whether LAG is used. LAG aggregates the links, but the VLAN configuration on those links remains the same as it would on individual links.

![image-20240705090030615](https://han.blob.core.windows.net/typora/image-20240705090030615.png) 

![img](https://www.examtopics.com/assets/media/exam-media/04300/0025000001.png)

![image-20240705090257040](https://han.blob.core.windows.net/typora/image-20240705090257040.png) 

**Suggested Answer:** *A*

![image-20240705090456897](https://han.blob.core.windows.net/typora/image-20240705090456897.png) 

DHCP snooping is a security feature that filters DHCP messages received on untrusted ports and builds a DHCP snooping binding database. This database contains information about untrusted hosts with leased IP addresses and is used to validate DHCP messages received on the network.

The DHCP server is the trusted source for DHCP messages. To allow DHCP clients to receive addresses from the DHCP server, the port connected to the **DHCP server** must be trusted. This is achieved by configuring the `ip dhcp snooping trust` command on that interface.

### 

![image-20240705092139914](https://han.blob.core.windows.net/typora/image-20240705092139914.png)

To maintain a connection as users travel between floors or to other areas in the building with IEEE 802.11r-compatible devices, the correct configuration involves enabling Fast Transition (FT). Fast Transition is a key feature of the 802.11r standard that allows for seamless and fast roaming between access points. 

![image-20240705092429317](https://han.blob.core.windows.net/typora/image-20240705092429317.png) 

![img](https://www.examtopics.com/assets/media/exam-media/04300/0046900001.png) 

I think for the most part, it's right. It just need a small adjustment

````txt
interface GigabitEthernet0/0
 ip address 172.16.0.5 255.255.255.0
 duplex auto
 speed auto
 ✅ ip nat inside
!
interface GigabitEthernet0/1
 ip address 209.165.202.130 255.255.255.224
 duplex auto
 speed auto
 ✅ ip nat outside
!
✅ access-list 1 permit 172.16.0.0 0.0.0.255 
!
ip nat inside source list 1 interface GigabitEthernet0/1 overload
````

**Modify the configured number of the second access list:**This option does not seem relevant because there is only one access list in the current configuration.

**Add either the ip nat {inside|outside} command under both interfaces:** This option is correct. The interfaces need to be correctly identified as inside or outside for NAT to function properly.

![img](https://www.examtopics.com/assets/media/exam-media/04300/0024600001.jpg) 

**Switch 1:**

```
interface range GigabitEthernet1/1 - 2
 switchport
 switchport mode access
 switchport access vlan 2
 channel-group 1 mode active
!
interface Port-channel 1
 switchport
 switchport mode access
 switchport access vlan 2
```

**Switch 2:**

```
interface range GigabitEthernet1/1 - 2
 switchport
 switchport mode access
 switchport access vlan 2
 channel-group 1 mode passive
!
interface Port-channel 1
 switchport
 switchport mode access
 switchport access vlan 2
```

**Access Port Configuration**:

```
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

**Trunk Port Configuration**:

```
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
```

[Related Lab Task](https://www.examtopics.com/discussions/cisco/view/101207-exam-200-301-topic-1-question-1041-discussion/#): Physical connectivity is implemented between the two Layer 2 switches, and the network connectivity between them must be configured.

1. Configure an LACP EtherChannel and number it as 44; configure it between switches SW1 and SW2 using interfaces Ethemet0/0 and Ethernet0/1 on both sides. The LACP mode must match on both ends.
2. Configure the EtherChannel as a trunk link.
3. Configure the trunk link with 802.1q tags.
4. Configure VLAN 'MONITORING' as the untagged VLAN of the EtherChannel.

![](https://img.examtopics.com/200-301/image107.png) 

SW1 Configuration:

```
SW1# configure terminal
SW1(config)# interface range ethernet0/0 - 1
SW1(config-if-range)# channel-group 44 mode active
SW1(config-if-range)# exit
SW1(config)# interface port-channel 44
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# exit
SW1(config)# vlan 100
SW1(config-vlan)# name MONITORING
SW1(config-vlan)# exit
SW1(config)# interface port-channel 44
SW1(config-if)# switchport trunk native vlan 100
SW1(config-if)# exit
```

SW2 Configuration:

```
SW2# configure terminal
SW2(config)# interface range ethernet0/0 - 1
SW2(config-if-range)# channel-group 44 mode active
SW2(config-if-range)# exit
SW2(config)# interface port-channel 44
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# exit
SW2(config)# vlan 100
SW2(config-vlan)# name MONITORING
SW2(config-vlan)# exit
SW2(config)# interface port-channel 44
SW2(config-if)# switchport trunk native vlan 100
SW2(config-if)# exit
```

Assuming VLAN ID for 'MONITORING' is 100 (replace 100 with the actual VLAN ID if different). 
What if we need to find a real vlan instead of assuming a vlan

To find the actual VLAN ID for a VLAN named "MONITORING," you can use the `show vlan brief` command on a Cisco switch. This command will list all VLANs along with their IDs and names. Here’s how you can do it:

````txt
SW1# show vlan brief

VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Gi0/1, Gi0/2
10   MANAGEMENT                       active    Gi0/3, Gi0/4
20   SALES                            active    Gi0/5, Gi0/6
100  MONITORING                       active    Gi0/7, Gi0/8
````



![image-20240705095104339](https://han.blob.core.windows.net/typora/image-20240705095104339.png) 

![image-20240705100125005](https://han.blob.core.windows.net/typora/image-20240705100125005.png) 

A is not necessary yet it also works

> This would work but typically, access mode with voice VLAN is preferred for IP phone connections.

![image-20240705101039559](https://han.blob.core.windows.net/typora/image-20240705101039559.png) 

![image-20240705101146715](https://han.blob.core.windows.net/typora/image-20240705101146715.png) 

This is solved through the process of elimination and a bit of lateral thinking.
Let's look at the first two categories first (the easier ones)...

![image-20240705101950214](https://han.blob.core.windows.net/typora/image-20240705101950214.png) 

Multicast:

1. Derived from the FFOO::/8 address range. Can't argue with that.
2. Provides one-to-many communications. That's what multicast is , one-to-many.
Unicast:
1. Includes Link-Local and Loopback addresses. Yip, these are single destinations.
2. Identifies an interface on an IPv6 device. Again, yip - it's a single destination.
AnyCast:
1. Used exclusively by a non-host device. I think what they are alluding to here is that this address is associated with a group of servers that share an IP address, not a single host (non-host).
2. Assigned to more than one interface. Yes - by definition its one-to-closest, so that implies there's more than one instance of it, so it must be assigned to more than one interface. 

![image-20240705102212532](https://han.blob.core.windows.net/typora/image-20240705102212532.png)  

![image-20240705102837175](https://han.blob.core.windows.net/typora/image-20240705102837175.png) 

靠直覺答對

![image-20240705103156593](https://han.blob.core.windows.net/typora/image-20240705103156593.png) 

![image-20240705103511782](https://han.blob.core.windows.net/typora/image-20240705103511782.png) 

![image-20240705104015652](https://han.blob.core.windows.net/typora/image-20240705104015652.png) 

SNMP (Simple Network Management Protocol) has three versions: SNMPv1, SNMPv2c, and SNMPv3. The primary differences between these versions are related to security and authentication.

1. **SNMPv1 and SNMPv2c**:
   - Use community strings for authentication.
   - Have minimal security features.
   - Commands like `snmp-server community` and `snmp-server host` are associated with these versions.
2. **SNMPv3**:
   - Introduces enhanced security features including authentication and encryption.
   - Uses user-based security model (USM).
   - Commands related to user creation and management (`snmp-server user`) are specific to SNMPv3. 

**C. snmp-server enable traps**:

- This command enables the sending of SNMP traps.
- Applicable to all versions of SNMP.
- Does not specifically imply SNMPv3.

![image-20240705104448783](https://han.blob.core.windows.net/typora/image-20240705104448783.png) 

[Question](https://www.examtopics.com/discussions/cisco/view/119847-exam-200-301-topic-1-question-1149-discussion/#): Refer to the exhibit. The engineer configured the VLANs on the new AccSw2 switch. A router-on-a-stick is connected to both switches. How must the ports be configured on AccSw2 to establish full connectivity between the two switches and for Server1?

![image-20240705105322440](https://han.blob.core.windows.net/typora/image-20240705105322440.png) 

- A. interface GigabitEthernet1/1
  switchport access vlan 11
  !
  interface GigabitEthernet1/24
  switchport mode trunk
  switchport trunk allowed vlan 10,11 🐱‍🐉 (not necessary)

  > ✔by default, all vlans are allowed on a trunk link unless we use the 'allow vlan [vlan id]' command to state which vlans can access pass through it

- B. interface GigabitEthernet1/3
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

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/119847-exam-200-301-topic-1-question-1149-discussion/#) 

![img](https://www.examtopics.com/assets/media/exam-media/04300/0019800001.png)
Refer to the exhibit. Users need to connect to the wireless network with IEEE 802.11r-compatible devices. The connection must be maintained as users travel between floors or to other areas in the building. What must be the configuration of the connection?

- A. Disable AES encryption.
- B. Enable Fast Transition and select the FT 802.1x option.
- C. Enable Fast Transition and select the FT PSK option.
- D. Select the WPA Policy option with the CCKM option.

![image-20240705110614090](https://han.blob.core.windows.net/typora/image-20240705110614090.png) 

> I believe that in the WLC GUI, generally, **you cannot simultaneously enable both 802.1x and PSK authentication methods for the same WLAN, it would have to be on separate WLANs.** Therefore, as the PSK method is already used, we should not change it to 802.1x/EAP, and legacy devices that do not have the 802.11r feature would just not take advantage of FT fast roaming with the initial handshake already pre-established with another AP via the 802.11r protocol, having to go through the entire reauthentication and reassociation process when roaming, creating a delay, but the devices it supports would take advantage of this feature (FT) while they roam the company's floors getting almost instantaneous associations when needs roaming. 

[Question](https://www.examtopics.com/discussions/cisco/view/124925-exam-350-401-topic-1-question-823-discussion/#): An engineer must configure a new WLAN that supports 802.11r and requires users to enter a passphrase. What must be configured to support this requirement?

- A. 802.1X and Fast Transition
- B. FT PSK and Fast Transition **Most Voted**
- C. 802.1X and SUITEB-1X
- D. FT PSK and SUITEB-1X

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/124925-exam-350-401-topic-1-question-823-discussion/#)

![image-20240705111539620](https://han.blob.core.windows.net/typora/image-20240705111539620.png) 

802.11w, also known as Protected Management Frames (PMF), is a standard within the IEEE 802.11 family of wireless networking standards. It enhances the security of Wi-Fi networks by protecting management frames exchanged between wireless devices and access points. Management frames are used for tasks such as association, authentication, and disassociation in a Wi-Fi network.

![image-20240705112134811](https://han.blob.core.windows.net/typora/image-20240705112134811.png)  

Odd / Even:

- Network Address: Even
- Broadcast Address: Odd
- First Usable Address: Odd
- Last Usable Address: Even

Another drag-and-drop question

> Correct me if I wrong but it should be:
> Database syn traffic - shaping
> Standart web - best effort
> Video - policing
> VoIP - priorty queue

![image-20240705113513691](https://han.blob.core.windows.net/typora/image-20240705113513691.png) 

![image-20240705114330847](https://han.blob.core.windows.net/typora/image-20240705114330847.png) 

![image-20240705114551594](https://han.blob.core.windows.net/typora/image-20240705114551594.png) 

**Dynamic ARP Inspection (DAI)**:
DAI is used to prevent ARP cache poisoning. ARP cache poisoning occurs when an attacker sends falsified ARP messages over a local area network. This is an attempt to associate their MAC address with the IP address of another device (e.g., the default gateway), thereby intercepting the traffic meant for that IP address.

**IP Source Guard**: 
IP Source Guard is used to prevent rogue clients on the network. It works by filtering traffic based on the IP-to-MAC address bindings stored in the DHCP snooping database. This helps to ensure that only legitimate clients with valid IP addresses can access the network.

![image-20240705115304685](https://han.blob.core.windows.net/typora/image-20240705115304685.png) 

left matches right

![image-20240705115638339](https://han.blob.core.windows.net/typora/image-20240705115638339.png) 

 

![image-20240705122154360](https://han.blob.core.windows.net/typora/image-20240705122154360.png) 

"Passive client" is a feature often used in wireless networks, particularly with wireless access points (APs) and controllers. It helps manage devices that do not participate actively in the network management protocols like DHCP.  

![image-20240705122302064](https://han.blob.core.windows.net/typora/image-20240705122302064.png)  

it starts with `ipv6` and it's in global config mode

![image-20240705122329410](https://han.blob.core.windows.net/typora/image-20240705122329410.png)  

![image-20240705122421944](https://han.blob.core.windows.net/typora/image-20240705122421944.png) 

![image-20240705122759450](https://han.blob.core.windows.net/typora/image-20240705122759450.png) 

![image-20240705132533906](https://han.blob.core.windows.net/typora/image-20240705132533906.png) 

![image-20240705134536049](https://han.blob.core.windows.net/typora/image-20240705134536049.png) 

![image-20240705134816303](https://han.blob.core.windows.net/typora/image-20240705134816303.png) 

![image-20240705162343744](https://han.blob.core.windows.net/typora/image-20240705162343744.png) 

紅色是答錯的，橘色是答對的
