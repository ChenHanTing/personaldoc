# CCNA June 28th

### Three Triangular Routers Connect to OSPF

To create a network design where three routers are connected in a triangular topology using OSPF, follow these steps

Step 1: Assign IP Addresses to Interfaces

**Router R1:**

```
interface GigabitEthernet0/0
  ip address 10.0.0.1 255.255.255.0
  no shutdown

interface GigabitEthernet0/1
  ip address 10.0.1.1 255.255.255.0
  no shutdown
```

**Router R2:**

```
interface GigabitEthernet0/0
  ip address 10.0.0.2 255.255.255.0
  no shutdown

interface GigabitEthernet0/1
  ip address 10.0.2.1 255.255.255.0
  no shutdown
```

**Router R3:**

```
interface GigabitEthernet0/0
  ip address 10.0.1.2 255.255.255.0
  no shutdown

interface GigabitEthernet0/1
  ip address 10.0.2.2 255.255.255.0
  no shutdown
```

Step 2: Configure OSPF on Each Router

**Router R1:**

```
router ospf 1
  network 10.0.0.0 0.0.0.255 area 0
  network 10.0.1.0 0.0.0.255 area 0
```

**Router R2:**

```
router ospf 1
  network 10.0.0.0 0.0.0.255 area 0
  network 10.0.2.0 0.0.0.255 area 0
```

**Router R3:**

```
router ospf 1
  network 10.0.1.0 0.0.0.255 area 0
  network 10.0.2.0 0.0.0.255 area 0
```

Step 3: Verify OSPF Configuration

**On each router, use the following commands to verify OSPF neighbors and routes:**

```
show ip ospf neighbor
show ip route ospf
```

**IP Addressing:**

- R1 and R2 share the subnet 10.0.0.0/24.
- R2 and R3 share the subnet 10.0.2.0/24.
- R3 and R1 share the subnet 10.0.1.0/24.

**OSPF Configuration:**

- All routers are configured with OSPF process ID 1.
- All interfaces participating in OSPF are assigned to Area 0.

**Verification:**

- Use the `show ip ospf neighbor` command to ensure that OSPF adjacencies have been formed.
- Use the `show ip route ospf` command to check that OSPF routes are being advertised and received correctly.

### Two Switches With Both Trunk and Access

Below are examples of configuring two switches connected via a trunk port, with each switch also connected to a downstream device on an access port.

```txt
Switch1# configure terminal
Switch1(config)# interface GigabitEthernet0/1
Switch1(config-if)# switchport mode trunk
Switch1(config-if)# switchport trunk encapsulation dot1q
Switch1(config-if)# exit

Switch1(config)# interface GigabitEthernet0/2
Switch1(config-if)# switchport mode access
Switch1(config-if)# switchport access vlan 10
Switch1(config-if)# exit
Switch1(config)# end
Switch1# write memory
```

```txt
Switch2# configure terminal
Switch2(config)# interface GigabitEthernet0/1
Switch2(config-if)# switchport mode trunk
Switch2(config-if)# switchport trunk encapsulation dot1q
Switch2(config-if)# exit

Switch2(config)# interface GigabitEthernet0/2
Switch2(config-if)# switchport mode access
Switch2(config-if)# switchport access vlan 10
Switch2(config-if)# exit
Switch2(config)# end
Switch2# write memory
```

with untagged vlan

```txt
Switch1# configure terminal
Switch1(config)# interface GigabitEthernet0/1
Switch1(config-if)# switchport mode trunk
Switch1(config-if)# switchport trunk encapsulation dot1q
Switch1(config-if)# switchport trunk native vlan 99
Switch1(config-if)# exit

Switch1(config)# interface GigabitEthernet0/2
Switch1(config-if)# switchport mode access
Switch1(config-if)# switchport access vlan 10
Switch1(config-if)# exit
Switch1(config)# end
Switch1# write memory
```

```txt
Switch2# configure terminal
Switch2(config)# interface GigabitEthernet0/1
Switch2(config-if)# switchport mode trunk
Switch2(config-if)# switchport trunk encapsulation dot1q
Switch2(config-if)# switchport trunk native vlan 99
Switch2(config-if)# exit

Switch2(config)# interface GigabitEthernet0/2
Switch2(config-if)# switchport mode access
Switch2(config-if)# switchport access vlan 10
Switch2(config-if)# exit
Switch2(config)# end
Switch2# write memory
```

### NAT

```txt
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 203.0.113.1 255.255.255.252
Router(config-if)# ip nat outside
Router(config-if)# exit

Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# ip nat inside source list 1 interface GigabitEthernet0/1 overload
```

verification

```txt
Router# show ip nat translations
Router# show ip nat statistics
```

### NAT with named pool

```txt
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 203.0.113.1 255.255.255.252
Router(config-if)# ip nat outside
Router(config-if)# exit

Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# ip nat pool MY_POOL 203.0.113.2 203.0.113.5 netmask 255.255.255.252
Router(config)# ip nat inside source list 1 pool MY_POOL overload
```

When you use a NAT pool, you have a range of public IP addresses that can be assigned to internal devices. This allows for more flexibility and better resource management, especially in environments where multiple public IP addresses are available and needed.

### Exclude Certain IPs from NAT Pool

```txt
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# ip nat inside
Router(config-if)# exit

Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 203.0.113.1 255.255.255.252
Router(config-if)# ip nat outside
Router(config-if)# exit

Router(config)# access-list 1 deny 192.168.1.100
Router(config)# access-list 1 deny 192.168.1.101
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

Router(config)# ip nat pool MY_POOL 203.0.113.2 203.0.113.5 netmask 255.255.255.252
Router(config)# ip nat inside source list 1 pool MY_POOL overload
```

### Exclude Certain IPs from NAT Pool and named ACL

```txt
# Enter global configuration mode
configure terminal

# Configure inside interface
interface GigabitEthernet0/0
ip address 192.168.1.1 255.255.255.0
ip nat inside
no shutdown
exit

# Configure outside interface
interface GigabitEthernet0/1
ip address 203.0.113.1 255.255.255.252
ip nat outside
no shutdown
exit

# Create a named access list to exclude certain IPs
ip access-list standard EXCLUDE_NAT
deny 192.168.1.100
deny 192.168.1.101
permit 192.168.1.0 0.0.0.255
exit

# Create a named NAT pool
ip nat pool MY_NAT_POOL 203.0.113.2 203.0.113.5 netmask 255.255.255.252

# Configure NAT using the named ACL and NAT pool
ip nat inside source list EXCLUDE_NAT pool MY_NAT_POOL overload
```

### With extended named ACL

```txt
# Enter global configuration mode
configure terminal

# Configure inside interface
interface GigabitEthernet0/0
ip address 192.168.1.1 255.255.255.0
ip nat inside
no shutdown
exit

# Configure outside interface
interface GigabitEthernet0/1
ip address 203.0.113.1 255.255.255.252
ip nat outside
no shutdown
exit

# Create an extended access list to match specific traffic types
ip access-list extended NAT_TRAFFIC
permit tcp 192.168.1.0 0.0.0.255 any eq www    # HTTP traffic
permit tcp 192.168.1.0 0.0.0.255 any eq https  # HTTPS traffic
permit tcp 192.168.1.0 0.0.0.255 any           # All TCP traffic
permit tcp 192.168.1.0 0.0.0.255 any eq ftp    # FTP traffic
exit

# Create a named NAT pool
ip nat pool MY_NAT_POOL 203.0.113.2 203.0.113.5 netmask 255.255.255.252

# Configure NAT using the extended ACL and NAT pool
ip nat inside source list NAT_TRAFFIC pool MY_NAT_POOL overload
```

### NAT_INSIDE_RANGES

With protect mode, the only action the switch takes for a frame that violates the port security rules is to discard the frame. The switch does not change the port to an errdisabled state, does not generate messages, and does not even increment the violations counter (Official Cert Guide, V2 pg350).

![](https://www.examtopics.com/assets/media/exam-media/04300/0049000001.png)

Refer to the exhibit. Users on existing VLAN 100 can reach sites on the Internet. Which action must the administrator take to establish connectivity to the Internet for users in VLAN 200?

- A. Define a NAT pool on the router.
- B. Configure the ip nat outside command on another interface for VLAN 200
- C. Configure static NAT translations for VLAN 200.
- D. Update the NAT_INSIDE_RANGES ACL. **Most Voted**

```txt
Router1# configure terminal
Router1(config)# ip access-list standard NAT_INSIDE_RANGES
Router1(config-std-nacl)# permit 10.10.10.0 0.0.0.255
Router1(config-std-nacl)# permit 10.10.20.0 0.0.0.255
Router1(config-std-nacl)# exit
Router1(config)# exit
Router1# write memory
```

### Router on a stick

i suddenly don't know what's the number from `encapsulation dot1q 10`

```txt
Router> enable
Router# configure terminal
Router(config)# interface fa0/0.10
Router(config-subif)# encapsulation dot1q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config-subif)# exit
Router(config)# interface fa0/0.20
Router(config-subif)# encapsulation dot1q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0
Router(config-subif)# exit
Router(config)# ip routing
Router(config)# exit
Router# ping 192.168.20.1
```

```txt
Switch> enable
Switch# configure terminal
Switch(config)# vlan 10
Switch(config-vlan)# name Sales
Switch(config-vlan)# exit
Switch(config)# vlan 20
Switch(config-vlan)# name Marketing
Switch(config-vlan)# exit
Switch(config)# interface range fa0/1 - 4
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 10
Switch(config-if-range)# exit
Switch(config)# interface range fa0/5 - 8
Switch(config-if-range)# switchport mode access
Switch(config-if-range)# switchport access vlan 20
Switch(config-if-range)# exit
Switch(config)# interface fa0/24
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# exit
Switch# exit
```

The shorter term

```txt
Router> en
Router# conf t
Router(config)# int fa0/0.10
Router(config-subif)# encap dot1q 10
Router(config-subif)# ip add 192.168.10.1 255.255.255.0
Router(config-subif)# exit
Router(config)# int fa0/0.20
Router(config-subif)# encap dot1q 20
Router(config-subif)# ip add 192.168.20.1 255.255.255.0
Router(config-subif)# exit
Router(config)# ip routing
Router(config)# exit
Router# ping 192.168.20.1
```

```txt
Switch> en
Switch# conf t
Switch(config)# vlan 10
Switch(config-vlan)# name Sales
Switch(config-vlan)# exit
Switch(config)# vlan 20
Switch(config-vlan)# name Marketing
Switch(config-vlan)# exit
Switch(config)# int range fa0/1 - 4
Switch(config-if-range)# sw mode access
Switch(config-if-range)# sw access vlan 10
Switch(config-if-range)# exit
Switch(config)# int range fa0/5 - 8
Switch(config-if-range)# sw mode access
Switch(config-if-range)# sw access vlan 20
Switch(config-if-range)# exit
Switch(config)# int fa0/24
Switch(config-if)# sw mode trunk
Switch(config-if)# sw trunk encap dot1q
Switch(config-if)# exit
Switch# exit
```

### encapsulation dot1q 20

在 router 上真的有這個指令，so the answer here should be **B**

```
R1(config)#interface Ethernet0/0.20
R1(config-subif)#encapsulation dot1Q 20
R1(config-subif)#ip address 10.20.20.1 255.255.255.0
```

### ACL with port channel

Here's a full configuration example including both the standard and extended ACLs applied to a Port Channel interface

```txt
! Define a standard ACL to permit traffic from the 192.168.1.0/24 network
access-list 10 permit 192.168.1.0 0.0.0.255

! Define an extended ACL to permit traffic from the 192.168.1.0/24 network to any destination
access-list 100 permit ip 192.168.1.0 0.0.0.255 any

! Configure physical interfaces to be part of Port Channel 1
interface range GigabitEthernet0/1 - 2
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 channel-group 1 mode active

! Configure Port Channel 1
interface port-channel 1
 description Link Aggregation for VLANs 10, 20, 30
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30
 ip access-group 10 in    ! Apply the standard ACL inbound
 ip access-group 100 out  ! Apply the extended ACL outbound
```

<img src="https://han.blob.core.windows.net/typora/image-20240629000354152.png" alt="image-20240629063004156"  />

<img src="https://han.blob.core.windows.net/typora/image-20240629063004156.png" alt="image-20240629063004156"  />

### OSPF

Which two minimum parameters must be configured on an active interface to enable OSPFV2 to operate? (Choose two.)

- A. OSPF process ID **Most Voted**
- B. OSPF MD5 authentication key
- C. OSPF stub flag
- D. IPv6 address
- E. OSPF area **Most Voted**

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/56040-exam-200-301-topic-1-question-353-discussion)

**Question:** _AE_ [🗳️](https://www.examtopics.com/discussions/cisco/view/56040-exam-200-301-topic-1-question-353-discussion)

Here’s a complete example of configuring OSPFv2 on a router with two interfaces, assigning them to different OSPF areas:

```plaintext
enable
configure terminal

! Define the OSPF process
router ospf 1
! Optionally set a router ID (not mandatory but recommended)
router-id 1.1.1.1

! Configure the first interface in OSPF area 0
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 ip ospf 1 area 0
 no shutdown

! Configure the second interface in OSPF area 1
interface GigabitEthernet0/1
 ip address 10.0.0.1 255.255.255.0
 ip ospf 1 area 1
 no shutdown

! Exit configuration mode and save the configuration
end
write memory
```

In the context of configuring OSPF (Open Shortest Path First) on a Cisco router, the process ID is indeed necessary. The process ID is used to distinguish between different OSPF processes that may be running on the router. This allows for multiple OSPF processes to operate independently on the same router.

![image-20240629160539608](https://han.blob.core.windows.net/typora/image-20240629160539608.png)

**Setting the Router ID** is optional. However, setting a router ID is recommended for easier identification and troubleshooting.

```
router-id 1.1.1.1
```

<img src="https://han.blob.core.windows.net/typora/image-20240629002827610.png" alt="Image" width="500px" align="left" />

If multiple routes have the same AD, the router will choose the route with the lowest metric. Among the EIGRP routes, the metrics are 1441, 144, and 1441. The EIGRP route with the lowest metric (144) is via interface F0/11 will be selected

<img src="https://han.blob.core.windows.net/typora/image-20240629003605596.png" alt="Image" width="500px"  align="left" />

<img src="https://han.blob.core.windows.net/typora/image-20240629003803820.png" alt="Image" width="500px"  align="left" />

Here’s how to configure Router A with the highest priority to ensure it is elected as the DR:

```
! Enter interface configuration mode for the relevant interface
interface GigabitEthernet0/0
 ip ospf priority 255
```

This command sets the OSPF priority of Router A’s interface to the highest possible value (255), ensuring that Router A will be elected as the DR as long as no other router has a priority set higher than this.

### show cdp neighbor

<img src="https://han.blob.core.windows.net/typora/image-20240629044634144.png" width="500" align="left" />

### Access Port Configuration

```plaintext
enable
configure terminal
interface GigabitEthernet0/1
 switchport mode access
 switchport access vlan 10
 no shutdown
end
write memory
```

In this configuration, GigabitEthernet0/1 is set as an access port in VLAN 10. All traffic on this port is untagged and belongs to VLAN 10.

### Trunk Port Configuration with Native VLAN

```plaintext
enable
configure terminal
interface GigabitEthernet0/2
 switchport trunk encapsulation dot1q
 switchport mode trunk
 switchport trunk native vlan 20
 switchport trunk allowed vlan 10,20,30
 no shutdown
end
write memory
```

In this configuration, GigabitEthernet0/2 is set as a trunk port:

- The native VLAN is set to 20.
- VLANs 10, 20, and 30 are allowed on the trunk.
- Traffic for VLAN 20 is sent untagged, while traffic for VLANs 10 and 30 is tagged.

<img src="https://han.blob.core.windows.net/typora/image-20240629050328292.png" width="500" />

Refer to the exhibit. An extended ACL has been configured and applied to router R2. The configuration failed to work as intended.
Which two changes stop outbound traffic on TCP ports 25 and 80 to 10.0.20.0/26 from the 10.0.10.0/26 subnet while still allowing all other traffic? (Choose two.)

- A. Add a "permit ip any any" statement at the end of ACL 101 for allowed traffic. **Most Voted**
- B. Add a "permit ip any any" statement to the beginning of ACL 101 for allowed traffic.
- C. The ACL must be moved to the Gi0/1 interface outbound on R2.
- D. The source and destination IPs must be swapped in ACL 101. **Most Voted**
- E. The ACL must be configured the Gi0/2 interface inbound on R1.

**Keypoint**:

- from ... to ...
- permit 要放在後面，因為放在前面的會先生效

### WLAN Quality of Service (QoS) list

- Platinum (voice) 考試唯一考過的
- Gold (video)
- Silver (best effort) is the default value.
- Bronze (background)

![image-20240629050823707](https://han.blob.core.windows.net/typora/image-20240629050823707.png)

![image-20240629050916952](https://han.blob.core.windows.net/typora/image-20240629050916952.png)

Explanation:

- A- Each virtualization solution have virtual switches (logical network), these virtual switches allows virtual machines to communicate on the network. We also assign vlan tag on these switches or make them trunk.
- B) The main purpose of Server Virtualization is to run many VMs on the same physical server

<img src="https://han.blob.core.windows.net/typora/image-20240629051220833.png" alt="image-20240629051220833"  />

**Unique Local Address (ULA) - FC00::/8 and FD00::/8**

he IPv6 address block **FC00::/8** is reserved for future use, which means it is not currently assigned for a specific purpose and is set aside for potential future allocation by the Internet Assigned Numbers Authority (IANA) or other governing bodies.

**FD00::/8** is a subset of the Unique Local Address (ULA) range, which is defined by the **FC00::/7** address space. ULAs are used for local communications within a site or organization and are not intended to be routable on the global internet.

**FE80::/10**: Link-Local Address

### **switchport mode dynamic desirable** dnt need to explicitly set trunk mode

When configuring DTP on Cisco switches, using `switchport mode dynamic desirable` or `switchport mode dynamic auto` allows the interfaces to negotiate trunking automatically without explicitly setting the interface to trunk mode. However, setting the encapsulation type (`switchport trunk encapsulation dot1q`) is necessary if the switch supports multiple encapsulation types and you want to ensure a specific encapsulation is used.

```plaintext
enable
configure terminal
interface GigabitEthernet0/1
 switchport mode dynamic desirable
 switchport trunk encapsulation dot1q
end
write memory
```

LACP (Link Aggregation Control Protocol) is used to configure EtherChannel (port channel) on Cisco devices, enabling the bundling of multiple physical interfaces into a single logical link for increased bandwidth and redundancy. Unlike PAgP (Port Aggregation Protocol), which is Cisco proprietary, LACP is an open standard (IEEE 802.3ad).

When configuring Link Aggregation Control Protocol (LACP) on Cisco switches, the trunking mode does need to be set explicitly on interfaces that will participate in an EtherChannel (LACP). Unlike Dynamic Trunking Protocol (DTP), which can negotiate trunking automatically, LACP is specifically designed for aggregating multiple physical interfaces into a single logical link and requires trunking to be set.

[Question](https://www.examtopics.com/discussions/cisco/view/22696-exam-200-301-topic-1-question-233-discussion): What is a difference between local AP mode and FlexConnect AP mode?

- A. Local AP mode creates two CAPWAP tunnels per AP to the WLC **Most Voted**
- B. Local AP mode causes the AP to behave as if it were an autonomous AP
- C. FlexConnect AP mode fails to function if the AP loses connectivity with the WLC
- D. FlexConnect AP mode bridges the traffic from the AP to the WLC when local switching is configured

**Question:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/22696-exam-200-301-topic-1-question-233-discussion)

A is an accurate statement as data traffic is tunneled back to the controller for an SSID with Local AP Mode
B should have referenced FlexConnect AP [Standalone Mode], not local ap mode [Central Switching or Connected Mode]
C is wrong as the purpose of FlexConnect is to provide local connectivity when the connection to controller is lost

| Feature                             | Local AP Mode                              | FlexConnect AP Mode                                   |
| ----------------------------------- | ------------------------------------------ | ----------------------------------------------------- |
| Traffic Handling                    | Centralized (CAPWAP tunnels to WLC)        | Flexible (Local Switching or Central Switching)       |
| Operation                           | Centralized, dependent on WLC              | Autonomous capability, low WLC dependency             |
| WLC Dependency                      | High                                       | Low                                                   |
| Ideal Use Case                      | Campus environments                        | Remote sites, branch offices                          |
| Functionality without WLC           | Limited (cannot serve clients effectively) | Continues to serve clients, local switching           |
| Control and Data Traffic Separation | Both tunneled to WLC                       | Control tunneled to WLC, data can be locally switched |

<img src="https://han.blob.core.windows.net/typora/image-20240629062058523.png" alt="image-20240629062058523"  />

**Default STP Path Costs**: Cisco switches use specific default costs based on the bandwidth of the link:

- 10 Mbps (Ethernet): Cost = 100
- 100 Mbps (Fast Ethernet): Cost = 19
- 1 Gbps (Gigabit Ethernet): Cost = 4
- 10 Gbps (10 Gigabit Ethernet): Cost = 2

### default hello interval

**Broadcast and Point-to-Point Networks**: The default hello interval is 10 seconds.
**Non-Broadcast Multi-Access (NBMA) and Point-to-Multipoint Networks**: The default hello interval is 30 seconds.

### Example Configuration and Impact on OSPF

Consider two routers, R1 and R2, connected on the same subnet:

- **Router R1** configuration:
- **Router R2** configuration:

In this scenario, R1 sends hello packets every 10 seconds, while R2 sends them every 30 seconds. When R1 receives a hello packet from R2, it sees that the hello interval does not match its own setting of 10 seconds. As a result, R1 will not establish an OSPF adjacency with R2.

```plaintext
interface GigabitEthernet0/0
 ip address 192.168.1.2 255.255.255.0
 ip ospf hello-interval 30
 ip ospf 1 area 0
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
 ip ospf hello-interval 10
 ip ospf 1 area 0
```

<img src="https://han.blob.core.windows.net/typora/image-20240629063729580.png" alt="image-20240629063729580" />

**Delay Calculation**: The delay value used in the metric calculation is not just the delay of the exiting interface. Instead, it is the cumulative delay of all the interfaces along the path to the destination.

<img src="https://han.blob.core.windows.net/typora/image-20240629063812791.png" alt="image-20240629063812791" />

### Configuring the NTP Client

<img src="https://han.blob.core.windows.net/typora/image-20240629063857417.png" alt="image-20240629063857417"  />

The NTP client is configured to synchronize its time with the NTP server. Here’s how to configure an NTP client:

**Example for a Cisco device:**

```plaintext
ntp server <NTP_SERVER_IP>
```

![image-20240629064007483](https://han.blob.core.windows.net/typora/image-20240629064007483.png)

clock set 00:00:00 January 1 2020

<img src="https://han.blob.core.windows.net/typora/image-20240629064042718.png" alt="image-20240629064042718"  />

### VPN

**Site-to-Site VPN Purpose:**

- Connects entire networks to each other, typically between different office locations.
- Used to securely connect branch offices with the main office over the internet.

**Remote Access VPN Purpose:**

- Allows individual users to connect securely to a private network from a remote location.
- Used to enable employees to access the company network from home, hotels, or other remote locations.

Enabling the "allow AAA Override" option on a Cisco Wireless LAN Controller (WLC) allows the controller to forward the user authentication and authorization information to an external AAA (Authentication, Authorization, and Accounting) server, such as Cisco Identity Services Engine (ISE), for further policy enforcement

[Question](https://www.examtopics.com/discussions/cisco/view/84277-exam-200-301-topic-1-question-341-discussion): After installing a new Cisco ISE server which task must the engineer perform on the Cisco WLC to connect wireless clients on a specific VLAN based on their credentials?

- A. Disable the LAG Mode on Next Reboot.
- B. Enable the Event Driven RRM.
- C. Enable the Allow AAA Override. **Most Voted**
- D. Enable the Authorize MIC APs against auth-list or AAA

**Question:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/84277-exam-200-301-topic-1-question-341-discussion)

**Functionality**: By enabling the AAA Override, the WLC can dynamically assign VLANs, QoS profiles, and other policies based on the information provided by the AAA server. This is crucial for implementing role-based access control and dynamic VLAN assignments.

<img src="https://han.blob.core.windows.net/typora/image-20240629065958197.png" alt="image-20240629065958197"  />

[Question](https://www.examtopics.com/discussions/cisco/view/110564-exam-200-301-topic-1-question-307-discussion): Refer to the exhibit. A network engineer must update the configuration on Switch2 so that it sends LLDP packets every minute and the information sent via LLDP is refreshed every 3 minutes. Which configuration must the engineer apply?

- A. Switch2(config)#lldp timer 60 Switch2(config)#lldp tlv-select 180
- B. Switch2(config)#lldp timer 60
  Switch2(config)#lldp holdtime 180
- C. Switch2(config)#lldp timer 1 Switch2(config)#lldp holdtime 3
- D. Switch2(config)#lldp timer 1 Switch2(config)#lldp tlv-select 3

**Question:** _B_ 🗳️ Reference:
https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/6-x/system_management/configuration/guide/ b_Cisco_Nexus_9000_Series_NX-OS_System_Management_Configuration_Guide/sm_lldp.pdf

Explanation of LLDP Commands

- **`lldp timer <seconds>`**: This command sets the frequency at which LLDP advertisements are sent. Setting this to 60 seconds means LLDP packets will be sent every 60 seconds (1 minute).
- **`lldp holdtime <seconds>`**: This command sets the time to hold LLDP information before it is discarded if no new information is received. Setting this to 180 seconds means the information will be refreshed every 3 minutes.

![image-20240629095515289](https://han.blob.core.windows.net/typora/image-20240629095515289.png)

LAG (Link Aggregation Group)

LAG combines multiple physical ports into a single logical port to increase bandwidth and provide redundancy. When configuring or removing LAG on a Cisco WLC, there are specific requirements and procedures that must be followed to ensure proper operation and connectivity.

**System Changes Require Reboot**: Enabling or reconfiguring LAG affects the fundamental operation of the WLC's network interfaces. Such changes typically require a reboot for the new configuration to take effect properly. This is a common requirement for network devices to ensure that all changes are applied correctly and the system operates as expected.

**A. The Incoming and outgoing ports for traffic flow must be specified if LAG is enabled.**
**Incorrect**: When LAG is enabled on a WLC, all ports are treated as a single logical port, so you don't need to specify individual incoming and outgoing ports.

**B. The controller must be rebooted after enabling or reconfiguring LAG.**
**Correct**: Enabling or reconfiguring LAG on a Cisco WLC requires a reboot for the changes to take effect. This is necessary to properly initialize the LAG configuration and ensure all ports are correctly aggregated.

LAG (Link Aggregation Group) on Cisco devices is a general term that refers to the bundling of multiple physical network connections into a single logical connection to increase bandwidth and provide redundancy. LAG can be implemented using different protocols, including both proprietary and standard-based protocols:

1. **PAgP (Port Aggregation Protocol)**
2. **LACP (Link Aggregation Control Protocol)**

**D. Multiple untagged interfaces on the same port must be supported.**
**Incorrect**: This is not a specific requirement related to LAG configuration or removal. Multiple untagged interfaces on the same port are more related to VLAN and port configurations.

**C. The management interface must be reassigned if LAG is disabled.**
**Incorrect**: Disabling LAG does not necessarily require reassignment of the management interface. The management interface configuration is usually retained, but the way traffic is handled on physical interfaces changes.

![image-20240629100236752](https://han.blob.core.windows.net/typora/image-20240629100236752.png)

**Option A: It serves as the centralized management point of an SDN architecture.**

This is the correct answer because, in SDN, the controller acts as a central point that manages the entire network. It makes decisions about how traffic should flow and communicates these decisions to the network devices (like switches and routers) via southbound APIs. This centralization allows for more flexible and dynamic management of the network.

**Option B: It centralizes the data plane for the network.**

This is incorrect because the controller in SDN does not centralize the data plane. The data plane, which is responsible for forwarding traffic based on the instructions from the controller, remains distributed across the network devices. **The controller centralizes the control plane, not the data plane.** The control plane is where the decisions about where traffic should be sent are made, whereas the data plane is where the actual traffic forwarding happens.

![image-20240629100334567](https://han.blob.core.windows.net/typora/image-20240629100334567.png)

第一題應該是 WLC,首先那兩個 AAA 服務器的答案肯定是錯的,因為兩個本質上就是相同的東西
那就只剩 WLC 和 AP 了,然後題目那邊它有特別強調是 lightweight AP

根據思科官方說法 APs are “lightweight,” which means that they cannot act independently of a wireless LAN controller (WLC). 那就是在思科官方的定義中, AP 是不能獨立工作的,必需通過控制器集中轉發的。

那答案就只有 WLC 了

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/85954-exam-200-301-topic-1-question-111-discussion): What provides centralized control of authentication and roaming in an enterprise network?

- A. a lightweight access point
- B. a wireless LAN controller **Most Voted**
- C. a firewall
- D. a LAN switch

**Question:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/85954-exam-200-301-topic-1-question-111-discussion)

The correct answer to the question "What provides centralized control of authentication and roaming in an enterprise network?" is B - a wireless LAN controller.

A wireless LAN (Local Area Network) controller (WLC) is a device that provides centralized control and management of multiple wireless access points (APs) in a wireless network . It is responsible for configuring and monitoring the access points, managing the wireless traffic, and providing security protocols such as authentication and encryption. The WLC also enables seamless roaming between the access points without the need for reauthentication, as it maintains a centralized database of user credentials and authentication information.

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/41484-exam-200-301-topic-1-question-225-discussion): What is a function of Wireless LAN Controller?

- A. register with a single access point that controls traffic between wired and wireless endpoints
- B. use SSIDs to distinguish between wireless clients
- C. send LWAPP packets to access points **Most Voted**
- D. monitor activity on wireless and wired LANs

**Question:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/41484-exam-200-301-topic-1-question-225-discussion)

Lightweight APs (LAPs) is devices require no initial configuration. LAPs use the Lightweight Access Point Protocol (LWAPP) to communicate with a WLAN controller (WLC), as shown in the below figure. Controller-based APs are useful in situations where many APs are required in the network. As more APs are added, each AP is automatically configured and managed by the WLC.

> Must be an old question. WLC typically uses CAPWAP, not the old LWAPP. https://ipwithease.com/capwap-vs-lwapp/

> Must be an old question.
> WLC typically uses CAPWAP, not the old LWAPP.
> https://ipwithease.com/capwap-vs-lwapp/

**A. Register with a single access point that controls traffic between wired and wireless endpoints**
This is incorrect because a Wireless LAN Controller (WLC) is not designed to register with a single access point. Instead, it manages multiple access points, centralizing the control and management of the wireless network.

**B. Use SSIDs to distinguish between wireless clients**
This is incorrect because while SSIDs (Service Set Identifiers) are used to distinguish between different wireless networks or services within a network, it is not the primary function of a WLC. SSIDs are more related to the configuration of access points rather than the core function of a WLC.

**D. Monitor activity on wireless and wired LANs**
This option is partially correct but not entirely accurate. While WLCs can monitor and manage wireless LAN activities, they are not primarily used to monitor wired LAN activities. Their main function is to control and manage wireless access points and wireless client connections.

Why LWAPP is mentioned:
**LWAPP (Lightweight Access Point Protocol)** was an early protocol used for communication between lightweight access points and wireless LAN controllers. It's being phased out and replaced by **CAPWAP** (Control and Provisioning of Wireless Access Points), which offers more features and security enhancements.

---

[Question](https://www.examtopics.com/discussions/cisco/view/55990-exam-200-301-topic-1-question-251-discussion): Which technology prevents client devices from arbitrarily connecting to the network without state remediation?

- A. 802.11n
- B. 802.1x **Most Voted**
- C. MAC Authentication Bypass
- D. IP Source Guard

**Question:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/55990-exam-200-301-topic-1-question-251-discussion)

**A. 802.11n**
802.11n is a wireless networking standard that improves network throughput over previous standards like 802.11a and 802.11g. It does not include mechanisms for authentication or preventing unauthorized network access.

**B. 802.1x**
802.1x is a network access control protocol for securing wired and wireless networks. It provides an authentication mechanism to devices wishing to connect to a LAN or WLAN. By requiring authentication before granting network access, 802.1x ensures that only authorized devices can connect, effectively preventing arbitrary connections.

![image-20240629111517962](https://han.blob.core.windows.net/typora/image-20240629111517962.png)

Rapid Spanning Tree Protocol (RSTP) uses three port states:

1. **Discarding**: The port does not participate in frame forwarding and does not learn MAC addresses.
2. **Learning**: The port does not forward frames yet, but it learns MAC addresses.
3. **Forwarding**: The port forwards frames and continues to learn MAC addresses.

**PortFast** mode does not have the learning and listening states typically found in Spanning Tree Protocol (STP) and Rapid Spanning Tree Protocol (RSTP).

**PortFast** can be used in conjunction with Rapid Spanning Tree Protocol (RSTP). In fact, RSTP has built-in optimizations that make it more compatible with PortFast, enhancing network efficiency and convergence times. In Rapid Spanning Tree Protocol (RSTP), when PortFast is enabled on a port, it will primarily be in the Discarding and Forwarding states.

[Question](https://www.examtopics.com/discussions/cisco/view/63606-exam-200-301-topic-1-question-642-discussion): A port security violation has occurred on a switch port due to the maximum MAC address count being exceeded. Which command must be configured to increment the security-violation count and forward an SNMP trap?

- A. switchport port-security violation access
- B. switchport port-security violation protect
- C. switchport port-security violation restrict **Most Voted**
- D. switchport port-security violation shutdown

**Question:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/63606-exam-200-301-topic-1-question-642-discussion)

> Protect - drops the packet with unknown src address until you remove a secure mac address to drop below the max value. no trap is sent.
> Restrict- same but violation increments and TRAP sent to SNMP manager.
> shutdown- puts interface in error disabled and sends a trap to the manager

What is a function of TFTP in network operations?

- A. transfers IOS images from a server to a router for firmware upgrades **Most Voted**
- B. transfers a backup configuration file from a server to a switch using a username and password
- C. transfers configuration files from a server to a router on a congested link
- D. transfers files between file systems on a router

TFTP (Trivial File Transfer Protocol) is a simple file transfer protocol that is often used for transferring small files between network devices. One of the primary functions of TFTP in network operations is to transfer IOS (Internetwork Operating System) images from a TFTP server to a router for firmware upgrades. Therefore, option A is the correct answer.

> always associate TFTP with ISO images and firmware upgrades

![image-20240629112200710](https://han.blob.core.windows.net/typora/image-20240629112200710.png)

When a group of employees enters a building using the ID badge of only one person, they are bypassing the physical access control measures in place. This is a violation because it allows unauthorized individuals to gain access to restricted areas, potentially compromising the security of the building or the information within.

### Full names for the abbreviations in the provided image

1. **CBWGQ**: Class-Based Weighted Queuing
2. **CQ**: Custom Queuing
3. **FIFO**: First In, First Out
4. **PQ**: Priority Queuing
5. **WFQ**: Weighted Fair Queuing|

### Differences between CQ and WFQ

**CQ (Custom Queuing)**:

- **Full Name**: Custom Queuing
- **Description**: CQ provides guaranteed bandwidth to a specified class of traffic by allocating a specific amount of bandwidth to each queue. It services a specified number of bytes in one queue before moving on to the next queue in a round-robin fashion.
- **Use Case**: CQ is useful when you need to ensure that certain types of traffic get a specific share of the bandwidth.

**WFQ (Weighted Fair Queuing)**:

- **Full Name**: Weighted Fair Queuing
- **Description**: WFQ provides minimum guaranteed bandwidth to one or more flows by dynamically adjusting the bandwidth allocation based on the weights assigned to each flow. It is designed to ensure that all flows get fair access to the network resources.
- **Use Case**: WFQ is beneficial when you want to ensure fair bandwidth distribution among multiple flows or sessions, giving priority to higher-weighted flows without completely starving other flows.

**Regarding Code Involvement:**

Custom Queuing (CQ) generally involves more manual configuration compared to Weighted Fair Queuing (WFQ). CQ requires explicit definition of queue parameters, including the amount of bandwidth for each queue and the order of service. This can involve more complex and detailed configurations to tailor the traffic management to specific needs.

On the other hand, WFQ is more dynamic and automatic. It assigns weights to flows and adjusts bandwidth allocation based on these weights. This dynamic adjustment reduces the need for extensive manual configuration, making WFQ easier to manage and implement in many cases.

**Class-Based Weighted Fair Queuing (CBWFQ)**:
CBWFQ extends WFQ by allowing explicit bandwidth guarantees to different classes of traffic, providing more granular control over bandwidth allocation. It focuses on guaranteeing bandwidth to different traffic classes.

**LLQ**: LLQ combines CBWFQ with strict priority queuing for certain traffic classes, ensuring low-latency treatment for critical traffic (like voice or video) while still providing fair bandwidth distribution for other traffic. It focuses on guaranteeing low latency for critical traffic while ensuring fair bandwidth distribution for other traffic.

### Discarding and Guaranteeing

Custom Queuing (CQ) and Weighted Fair Queuing (WFQ) primarily focus on how bandwidth is allocated and managed among different traffic flows or queues. Their main goal is to ensure fair and prioritized access to network resources, **rather than directly handling packet discards.**

**Focusing on Discarding**: RED, WRED, and Tail Drop are primarily concerned with discarding packets to manage congestion and prevent queue overflow.

**Focusing on Guaranteeing**: CQ, WFQ, CBWFQ, PQ, and LLQ aim to guarantee bandwidth, prioritize critical traffic, and ensure fair access to network resources for different traffic classes.

[Question](https://www.examtopics.com/discussions/cisco/view/83937-exam-200-301-topic-1-question-594-discussion): Which QoS queuing method discards or marks packets that exceed the desired bit rate of traffic flow?

- A. CBWFQ
- B. policing **Most Voted**
- C. LLQ
- D. shaping

**Question:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/83937-exam-200-301-topic-1-question-594-discussion)
Use the police command to mark a packet with different quality of service (QoS) values based on conformance to the service-level agreement. Traffic policing allows you to control the maximum rate of traffic transmitted or received on an interface.

> 🤖 This one made me read the entire QOS chapter again (netacad module 3 chapter 9), because of the way the question is asked...
> 🤖 "discards or (re)marks packets" -> definitely policing

**Shaping (D)**:
Traffic shaping controls the flow of outbound traffic to conform to a specified rate by buffering excess packets and releasing them in a controlled manner. It smooths traffic flows to avoid bursts and does not discard packets unless buffer overflow occurs.
**Focus**: Smoothing traffic flow to match desired rates without immediate discard.

**Policing (B)**:
**Function**: Policing measures the rate of traffic flow and ensures it does not exceed a specified threshold. If the traffic exceeds the desired bit rate, policing can either drop the excess packets or mark them (e.g., by setting a Differentiated Services Code Point (DSCP) value) for potential later discard if congestion occurs downstream.

[Question](https://www.examtopics.com/discussions/cisco/view/60667-exam-200-301-topic-1-question-553-discussion): Which two QoS tools provide congestion management? (Choose two.)

- A. CBWFQ **Most Voted**
- B. FRTS
- C. CAR
- D. PBR
- E. PQ **Most Voted**

**Question:** _AE_ [🗳️](https://www.examtopics.com/discussions/cisco/view/60667-exam-200-301-topic-1-question-553-discussion)

> Q at the end = qeueing protocol = congestion management

Which characteristic of distributed class-based weighted fair queueing addresses jitter prevention?

- A. It provides additional granularity by allowing a user to create classes.

  While CBWFQ allows the creation of different classes for granular traffic management, this characteristic alone does not specifically address jitter prevention.

- B. It uses a priority queue for voice traffic to avoid jitter.

  **Low Latency Queuing (LLQ)**, which is an extension of Class-Based Weighted Fair Queuing (CBWFQ), is designed to address the needs of real-time applications such as voice and video that are sensitive to delay and jitter. Here's why the correct answer is C:

- C. It minimizes jitter by implementing a priority queue for voice traffic. **Most Voted**

- D. It provides additional granularity by allowing a user to define custom classes. ❌

  Similar to option A, the ability to define custom classes provides granularity but does not directly address jitter prevention

**Question:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/76331-exam-350-801-topic-1-question-235-discussion)

> Class-Based Weighted Fair Queueing (CBWFQ) provides weighted fair queuing based on defined classes with no strict priority queue available for real-time traffic. CBWFQ allows a user (you) to define traffic classes and then assign characteristics to that class.

![image-20240629131725098](https://han.blob.core.windows.net/typora/image-20240629131725098.png)

[Question](https://www.examtopics.com/discussions/cisco/view/110262-exam-200-301-topic-1-question-955-discussion): What is the purpose of classifying network traffic in QoS?

- A. configures traffic-matching rules on network devices
- B. services traffic according to its class
- C. identifies the type of traffic that will receive a particular treatment
- D. writes the class identifier of a packet to a dedicated field in the packet header

**Question:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/110262-exam-200-301-topic-1-question-955-discussion)

### Drag and Drop

![image-20240629133130396](https://han.blob.core.windows.net/typora/image-20240629133130396.png)

1. **DHCP server**: Network component that propagates IP addresses to hosts on the network.

2. **snooping binding database**: List of hosts on the network that are unknown to the administrative domain.

   A database maintained by DHCP snooping that stores information about IP-to-MAC address bindings, including VLANs, interfaces, and lease times. This database helps in preventing IP address spoofing by ensuring that only legitimate devices use specific IP addresses. It's a database that maintains information about IP-to-MAC address bindings to prevent IP address spoofing.

3. **spurious DHCP server**: Unknown DHCP server within an administrative domain.

4. **trusted**: Internal device under the control of the network administrator.

5. **untrusted**: Default state of all interfaces.

![image-20240629140317954](https://han.blob.core.windows.net/typora/image-20240629140317954.png)

**Provides local control for network segments using a client-server scheme**: In a DHCP setup, the DHCP server provides IP addresses and other network configuration details to DHCP clients (e.g., computers, phones) within the network. This setup operates on a client-server model where the server manages IP address assignments and the clients request configuration details.

**Client-Server Scheme** (方案): The server (DHCP server) is the provider of IP addresses, and the clients (devices on the network) are the consumers that request IP addresses from the server.

![](https://img.examtopics.com/200-301/image150.png)

[Question](https://www.examtopics.com/discussions/cisco/view/107232-exam-200-301-topic-1-question-1080-discussion): Refer to the exhibit. All switches are configured with the default STP priorities. During the STP elections, which switch becomes the root bridge if all interfaces are in the same VLAN?

- A. MDF-DC-1: 0d:E0:43:96:02:30
- B. MDF-DC-2: 0d:0E:18:1B:05:97
- C. MDF-DC-4: 0d:E0:19:A1:B3:19
- D. MDF-DC-3: 0d:0E:18:2A:3C:9D

**Question:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/107232-exam-200-301-topic-1-question-1080-discussion)

Which configuration ensures that the switch is always the root for VLAN 750?

- A. Switch(config)#spanning-tree vlan 750 priority 38418607
- B. Switch(config)#spanning-tree vlan 750 priority 0 **Most Voted**
- C. Switch(config)#spanning-tree vlan 750 root primary
- D. Switch(config)#spanning-tree vlan 750 priority 614440

[Question](https://www.examtopics.com/discussions/cisco/view/123304-exam-200-301-topic-1-question-1193-discussion): What is the operating mode and role of a backup port on a shared LAN segment in Rapid PVST+?

- A. learning mode and provides the shortest path toward the root bridge handling traffic away from the LAN
- B. blocking mode and provides an alternate path toward the designated bridge **Most Voted**
- C. forwarding mode and provides the lowest-cost path to the root bridge for each VLAN
- D. listening mode and provides an alternate path toward the root bridge

**Question:** _B_ [🗳️](https://www.examtopics.com/discussions/cisco/view/123304-exam-200-301-topic-1-question-1193-discussion)

In Rapid PVST+ (Rapid Per-VLAN Spanning Tree Plus), a backup port is a port that provides a redundant path to a segment where another bridge port already connects. The backup port is in a blocking state to prevent loops and does not handle traffic unless the designated port fails. When the designated port is functioning normally, the backup port does not actively use its path.

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/87856-exam-200-301-topic-1-question-760-discussion): What is the function of the controller in a software-defined network?

- A. forwarding packets
- B. multicast replication at the hardware level
- C. making routing decisions
- D. fragmenting and reassembling packets

**Question:** _C_ [🗳️](https://www.examtopics.com/discussions/cisco/view/87856-exam-200-301-topic-1-question-760-discussion)

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/129741-exam-200-301-topic-1-question-1220-discussion): Which port type does a lightweight AP use to connect to the wired network when configured in FlexConnect mode with local switching and VLAN tagging?

- A. trunk
- B. LAG
- C. EtherChannel
- D. access

**Question:** _A_

When a lightweight access point (AP) is configured in FlexConnect mode with local switching and VLAN tagging, it is indeed necessary to use a trunk port on the switch to which the AP is connected. This allows the AP to handle multiple VLANs for different SSIDs.

When a lightweight access point (AP) is configured in FlexConnect mode with local switching and VLAN tagging, it typically uses a trunk port to connect to the wired network. This allows the AP to carry traffic for multiple VLANs, each identified by its VLAN tag.

```sh
configure terminal
interface GigabitEthernet 1/0/1
   switchport mode trunk
   switchport trunk allowed vlan 10,20,30
   switchport trunk native vlan 99        # Optional
exit
write memory
```

**Effect for untagged vlan**:

- Any untagged traffic sent over this trunk link will be associated with VLAN 99.
- Any untagged traffic received on this trunk link will be assigned to VLAN 99.
- This ensures that management traffic, or any other untagged traffic, is correctly routed and associated with the designated VLAN.

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/99197-exam-200-301-topic-1-question-882-discussion): Which port type does a lightweight AP use to connect to the wired network when it is configured in local mode?

- A. EtherChannel
- B. access **Most Voted**
- C. LAG
- D. trunk

**Question:** _A_ [🗳️](https://www.examtopics.com/discussions/cisco/view/99197-exam-200-301-topic-1-question-882-discussion)

> While the Cisco WLCs always connect to 802.1Q trunks, Cisco lightweight APs do not understand VLAN tagging and must only be connected to the access ports of the neighbor switch.
> https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/69719-wlc-lwap-config.html
>
> Thanks to CAPWAP data tunnel between the LAP and the WLC, the LAP does not need to know anything about VLANs.
> https://study-ccna.com/lightweight-access-point-configuration/

How does CAPWAP communicate between an access point in local mode and a WLC?

- A. The access point must not be connected to the wired network, as it would create a loop
- B. The access point must be connected to the same switch as the WLC
- C. The access point must directly connect to the WLC using a copper cable
- D. The access point has the ability to link to any switch in the network, assuming connectivity to the WLC **Most Voted**

### Frequency band

2.4 GHz Frequency Band

- **802.11b**: Operates at 2.4 GHz with maximum data rates of up to 11 Mbps.
- **802.11g**: Operates at 2.4 GHz with maximum data rates of up to 54 Mbps.
- **802.11n**: Can operate at both 2.4 GHz and 5 GHz with maximum data rates up to 600 Mbps (depending on the configuration).

5 GHz Frequency Band

- **802.11a**: Operates at 5 GHz with maximum data rates of up to 54 Mbps.
- **802.11n**: As mentioned, can operate at both 2.4 GHz and 5 GHz.
- **802.11ac**: Operates at 5 GHz with maximum data rates up to several Gbps (depending on the configuration).
- **802.11ax**: Also known as Wi-Fi 6, can operate on both 2.4 GHz and 5 GHz (and the new 6 GHz band in Wi-Fi 6E).

Summary of the Standards

- **2.4 GHz**: 802.11b, 802.11g, 802.11n
- **5 GHz**: 802.11a, 802.11n, 802.11ac, 802.11ax

![](https://img.examtopics.com/200-301/image24.png)

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/99203-exam-200-301-topic-1-question-872-discussion): Refer to the exhibit. A Cisco WLC administrator is creating a new wireless network with enhanced SSID security. The new network must operate at 2.4 Ghz with 54 Mbps of throughput. Which set of tasks must the administrator perform to complete the configuration?

- A. Uncheck the Broadcast SSID check box and set the Radio Policy to 802.11a/g only.
- B. Check the Broadcast SSID check box and set the Radio Policy to 802.11g only.
- C. Uncheck the Broadcast SSID check box and set the Radio Policy to 802.11g only. **Most Voted**
- D. Check the Broadcast SSID check box and set the Radio Policy to 802.11a only.

To correctly configure a new wireless network with enhanced SSID security, operating at 2.4 GHz with 54 Mbps of throughput, let's break down the requirements and evaluate the options:

1. **Enhanced SSID Security**: This typically involves setting options like hiding the SSID, enabling WPA2 security, and other security settings.
2. **2.4 GHz Frequency Band**: This means the network must use the 2.4 GHz band, which is supported by 802.11b, 802.11g, and 802.11n standards.
3. **54 Mbps Throughput**: This throughput is provided by the 802.11g standard.

Answer: This option ensures that the SSID is not broadcasted (enhancing security) and that the network operates at 2.4 GHz with a maximum throughput of 54 Mbps, as provided by the 802.11g standard.

What happens when a FlexConnect AP changes to standalone mode?

- A. All client roaming continues to work.
- B. Only clients on central switching WLANs stay connected.
- C. All clients on all WLANs are disconnected.
- D. All controller-dependent activities stop working except the DFS. **Most Voted**

Why DFS Continues to Work in Standalone Mode:

- **Regulatory Requirement**: DFS is a critical feature for regulatory compliance. Even in standalone mode, the access point must adhere to these regulations to avoid legal issues and interference with radar systems.
- **Autonomous Operation**: DFS operates independently of the Wireless LAN Controller (WLC). The access point can perform radar detection and channel switching without needing real-time communication with the WLC.

When a FlexConnect AP changes to standalone mode, all controller-dependent activities stop working except for DFS. This is because DFS is essential for regulatory compliance and must function correctly to prevent interference with radar systems, regardless of the AP's connection status to the WLC. Therefore, even in standalone mode, the AP must continue to monitor for radar signals and switch channels as necessary.

![image-20240629160510180](https://han.blob.core.windows.net/typora/image-20240629160510180.png)

[Hide Answer](https://www.examtopics.com/discussions/cisco/view/33296-exam-200-301-topic-1-question-28-discussion): How does CAPWAP communicate between an access point in local mode and a WLC?

- A. The access point must not be connected to the wired network, as it would create a loop
- B. The access point must be connected to the same switch as the WLC
- C. The access point must directly connect to the WLC using a copper cable
- D. The access point has the ability to link to any switch in the network, assuming connectivity to the WLC **Most Voted**

**Question:** _D_ [🗳️](https://www.examtopics.com/discussions/cisco/view/33296-exam-200-301-topic-1-question-28-discussion)

the correct answer is option D: "The access point has the ability to link to any switch in the network, assuming connectivity to the WLC." The AP can be connected to any switch in the network, as long as the switch has connectivity to the WLC. The AP and the WLC exchange CAPWAP messages over IP, using UDP port 5246 or 5247, depending on whether the messages are encrypted.

> "B" seems correct. For option "D" on the other hand, access point does not have the ability to link to any switch in the network assuming connectivity to the WLC. CAPWAP communication between an access point in local mode and a WLC typically occurs over the wired network infrastructure using the CAPWAP protocol. The access point must be able to reach the WLC's IP address, which can be configured statically or obtained dynamically through DHCP. The access point and WLC must be on the same IP subnet or have Layer 3 connectivity between their subnets.

Refer to the exhibit. Which two events occur on the interface, if packets from an unknown Source address arrive after the interface learns the maximum number of secure MAC address? (Choose two.)

![](https://www.examtopics.com/assets/media/exam-media/04300/0049400001.png)

- A. The security violation counter dose not increment
- B. The port LED turns off
- C. The interface is error-disabled
- D. A syslog message is generated
- E. The interface drops traffic from unknown MAC address
