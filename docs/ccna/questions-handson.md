# Hands on questions

[Task](https://www.examtopics.com/discussions/cisco/view/106283-exam-200-301-topic-1-question-1059-discussion/): Three switches must be configured for Layer 2 connectivity. The company requires only the designated VLANs to be configured on their respective switches and permitted across any links between switches for security purposes. Do not modify or delete VTP configurations. The network needs two user-defined VLANs configured:

````txt
VLAN 303: FINANCE
VLAN 202: MARKETING
````

1. Configure the VLANs on the designated switches and assign them as access ports to the interfaces connected to the PCs.
2. Configure the e0/2 interfaces on Sw1 and Sw2 as 802.1q trunks with only the required VLANs permitted.
3. Configure the e0/3 interfaces on Sw2 and Sw3 as 802.1q trunks with only the required VLANs permitted.

![](https://img.examtopics.com/200-301/image123.png) 

To configure the switches according to the requirements, we will follow these steps:

1. Create VLANs on the designated switches.
2. Assign VLANs to the respective interfaces as access ports.
3. Configure the trunk interfaces to allow only the required VLANs.

Configuration for SW1

```plaintext
SW1(config)# vlan 303
SW1(config-vlan)# name FINANCE
SW1(config-vlan)# exit

SW1(config)# interface ethernet0/1
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 303
SW1(config-if)# exit

SW1(config)# interface ethernet0/2
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 202,303
SW1(config-if)# exit
```

Configuration for SW2

```plaintext
SW2(config)# vlan 202
SW2(config-vlan)# name MARKETING
SW2(config-vlan)# exit

SW2(config)# interface ethernet0/1
SW2(config-if)# switchport mode access
SW2(config-if)# switchport access vlan 202
SW2(config-if)# exit

SW2(config)# interface ethernet0/2
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk allowed vlan 202,303
SW2(config-if)# exit

SW2(config)# interface ethernet0/3
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk allowed vlan 202,303
SW2(config-if)# exit
```

Configuration for SW3

```plaintext
SW3(config)# vlan 202
SW3(config-vlan)# name MARKETING
SW3(config-vlan)# exit

SW3(config)# vlan 303
SW3(config-vlan)# name FINANCE
SW3(config-vlan)# exit

SW3(config)# interface ethernet0/0
SW3(config-if)# switchport mode access
SW3(config-if)# switchport access vlan 202
SW3(config-if)# exit

SW3(config)# interface ethernet0/1
SW3(config-if)# switchport mode access
SW3(config-if)# switchport access vlan 303
SW3(config-if)# exit

SW3(config)# interface ethernet0/3
SW3(config-if)# switchport trunk encapsulation dot1q
SW3(config-if)# switchport mode trunk
SW3(config-if)# switchport trunk allowed vlan 202,303
SW3(config-if)# exit
```

Summary of Configurations:

1. **SW1**:
    - VLAN 303 (FINANCE) is created and assigned to interface e0/1.
    - Interface e0/2 is configured as a trunk allowing VLANs 202 and 303.

2. **SW2**:
    - VLAN 202 (MARKETING) is created and assigned to interface e0/1.
    - Interfaces e0/2 and e0/3 are configured as trunks allowing VLANs 202 and 303.

3. **SW3**:
    - VLANs 202 (MARKETING) and 303 (FINANCE) are created.
    - VLAN 202 is assigned to interface e0/0 and VLAN 303 to interface e0/1.
    - Interface e0/3 is configured as a trunk allowing VLANs 202 and 303.

This configuration ensures that only the designated VLANs are permitted across the trunk links and assigned to the appropriate interfaces.

[Task](https://www.examtopics.com/discussions/cisco/view/101207-exam-200-301-topic-1-question-1041-discussion/#): Physical connectivity is implemented between the two Layer 2 switches, and the network connectivity between them must be configured.

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

In the example above, the VLAN ID for "MONITORING" is `100`.

Notion 1.  Always set the encapsulation method before setting the port to trunk mode. The commands must be in the order shown above to ensure proper configuration.

````txt
SW# configure terminal
SW(config)# interface ethernet0/0
SW(config-if)# switchport trunk encapsulation dot1q
SW(config-if)# switchport mode trunk
````

To verify the trunk configuration, use the following command:

```
SW# show interfaces ethernet0/0 switchport
```

This command will display the switchport mode and encapsulation method, among other details.

Notion 2. The configuration differences and implications of applying trunk settings directly to the physical interfaces instead of the port-channel interface.

**Pre-configuration:**

```plaintext
SW1(config)# interface range ethernet0/0 - 1
SW1(config-range)# channel-group 44 mode active
SW2(config)# interface range ethernet0/0 - 1
SW2(config-range)# channel-group 44 mode passive
```

**Current Configuration:**

```plaintext
SW1(config)# interface port-channel 44
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 100
SW1(config-if)# exit
```

**Question:**

What would be the impact if I configure the trunk settings directly on the physical interfaces instead of the port-channel interface, as shown below?

```plaintext
SW1(config)# interface range ethernet0/0 - 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 100
SW1(config-if)# exit
```

You first created the port-channel and then configured the trunk settings on the port-channel interface:

```plaintext
SW1(config)# interface range ethernet0/0 - 1
SW1(config-range)# channel-group 44 mode active

SW2(config)# interface range ethernet0/0 - 1
SW2(config-range)# channel-group 44 mode passive

SW1(config)# interface port-channel 44
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 100
SW1(config-if)# exit
```

Instead, you propose to configure the trunk settings on the physical interfaces directly:

```plaintext
SW1(config)# interface range ethernet0/0 - 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 100
SW1(config-if)# exit
```

**Differences and Considerations:**

1. **Port-Channel vs. Physical Interfaces:**
   - **Port-Channel Configuration:** When you configure the trunk settings on the port-channel interface, these settings apply to the aggregated link as a whole. This ensures consistency and simplifies the configuration.
   - **Physical Interface Configuration:** If you configure trunk settings directly on the physical interfaces, these settings will apply to each interface individually. However, when these interfaces are part of a port-channel, the port-channel settings typically override the physical interface settings.

2. **Best Practice:**
   - It is generally considered best practice to configure the trunk settings on the port-channel interface. This avoids potential inconsistencies and conflicts that may arise if individual physical interfaces have different settings.
   - The settings configured on the port-channel interface will propagate to the member interfaces, ensuring uniformity.

3. **Implications:**
   - **Current Configuration (Port-Channel):** The trunk settings will be consistently applied to the entire port-channel link, which includes all member interfaces.
   - **Proposed Configuration (Physical Interfaces):** If you apply the trunk settings directly to the physical interfaces, there is a potential for conflicts when the port-channel is formed, as the port-channel settings will take precedence.

It is advisable to configure trunk settings on the port-channel interface rather than the individual physical interfaces. This approach simplifies management and ensures consistent application of trunk settings across the aggregated link.

[Task](https://www.examtopics.com/discussions/cisco/view/103866-exam-200-301-topic-1-question-1054-discussion/): All physical cabling between the two switches is installed. Configure the network connectivity between the switches using the designated VLANs and interfaces.

![](https://img.examtopics.com/200-301/image115.png) 

1. Configure VLAN 12 named Compute and VLAN 34 named Telephony where required for each task.
2. Configure Ethernet0/1 on SW2 to use the existing VLAN named Available.
3. Configure the connection between the switches using access ports.
4. Configure Ethernet0/1 on SW1 using data and voice VLANs.
5. Configure Ethernet0/1 on SW2 so that the Cisco proprietary neighbor discovery protocol is turned off for the designated interface only.

Let's go through the steps to configure the network connectivity between the switches based on the provided tasks:

Configure VLAN 12 named Compute and VLAN 34 named Telephony where required for each task.

```plaintext
SW1(config)# vlan 12
SW1(config-vlan)# name Compute
SW1(config-vlan)# exit
SW1(config)# vlan 34
SW1(config-vlan)# name Telephony
SW1(config-vlan)# exit

SW2(config)# vlan 12
SW2(config-vlan)# name Compute
SW2(config-vlan)# exit
----- no necessary -----
SW2(config)# vlan 34
SW2(config-vlan)# name Telephony
SW2(config-vlan)# exit
```

Configure Ethernet0/1 on SW2 to use the existing VLAN named Available.

```plaintext
SW2(config)# interface ethernet0/1
SW2(config-if)# switchport mode access
SW2(config-if)# switchport access vlan <Available VLAN ID>
SW2(config-if)# exit
```
(Replace `<Available VLAN ID>` with the actual VLAN ID for the Available VLAN.)

````txt
//First we must find vlan number of Available vlan
"show vlan name Available" or "show vlan" or "show vlan brief"
interface e0/1 > sw mo ac > sw ac vlan x
````

About the following commands are wrong. On Cisco switches, the `switchport access vlan` command requires the VLAN ID, not the VLAN name. Using the VLAN name directly in the command will result in an error. You need to specify the VLAN ID that corresponds to the VLAN named "Available."

````txt
int e0/1
switchport mode access
switchport access vlan Available ❌
no cdp enable
no shutdown
````

Configure the connection between the switches using access ports.

```plaintext
SW1(config)# interface ethernet0/0
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 12
SW1(config-if)# exit
```

```plaintext
SW2(config)# interface ethernet0/0
SW2(config-if)# switchport mode access
SW2(config-if)# switchport access vlan 12
SW2(config-if)# exit
```

Configure Ethernet0/1 on SW1 using data and voice VLANs.

```plaintext
SW1(config)# interface ethernet0/1
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 12
SW1(config-if)# switchport voice vlan 34
SW1(config-if)# exit
```

Configure Ethernet0/1 on SW2 so that the Cisco proprietary neighbor discovery protocol is turned off for the designated interface only.

```plaintext
SW2(config)# interface ethernet0/1
SW2(config-if)# no cdp enable
SW2(config-if)# exit
```

Summary of the Configuration:

1. **Create VLANs 12 and 34 on both switches:**
   - VLAN 12 named Compute
   - VLAN 34 named Telephony

2. **Configure Ethernet0/1 on SW2 to use the VLAN named Available.**
3. **Set Ethernet0/0 on both switches as access ports in VLAN 12 for the connection between the switches.**
4. **Set Ethernet0/1 on SW1 to use VLAN 12 for data and VLAN 34 for voice.**
5. **Disable CDP on Ethernet0/1 on SW2.**



[Task](https://www.examtopics.com/discussions/cisco/view/106379-exam-200-301-topic-1-question-1072-discussion/): IP connectivity and OSPF are preconfigured on all devices where necessary. Do not make any changes to the IP addressing or OSPF. The company policy uses connected interfaces and next hops when configuring static routes except for load balancing or redundancy without floating static. Connectivity must be established between subnet 172.20.20.128/25 on the Internet and the LAN at 192.168.0.0/24 connected to SW1:

![](https://img.examtopics.com/200-301/image146.png) 

1. Configure **reachability** to the switch SW1 LAN subnet in router R2.
2. Configure **default reachability** to the Internet subnet in router R1.
3. Configure a single static route in **router R2** to reach to the Internet subnet considering both redundant links between routers R1 and R2. A **default route** is NOT allowed in router R2.
4. Configure a static route in router R1 toward the switch SW1 LAN subnet where the primary link must be through Ethernet0/1, and the backup link must be through Ethernet0/2 using a floating route. Use the minimal administrative distance value when required.

Solution: Here is the step-by-step solution to configure the routers based on the provided tasks:

1. Configure reachability to the switch SW1 LAN subnet in router R2.

```plaintext
R2(config)# ip route 192.168.0.0 255.255.255.0 10.10.31.1
```

2. Configure default reachability to the Internet subnet in router R1.

```plaintext
R1(config)# ip route 0.0.0.0 0.0.0.0 10.10.13.3
```

3. Configure a single static route in router R2 to reach the Internet subnet considering both redundant links between routers R1 and R2. A default route is NOT allowed in router R2.

- **Primary Route:** 

  ````txt
  R2(config)# ip route 172.20.20.128 255.255.255.128 10.10.12.129
  ````

- **Backup Route with Higher Administrative Distance:** 
  This sets up the primary static route with the next hop `10.10.12.129.`

  ````txt
  R2(config)# ip route 172.20.20.128 255.255.255.128 10.10.13.1 10
  ````

This sets up a secondary static route with the next hop `10.10.12.130` and an administrative distance of 10, making it less preferred than the primary route.

4. Configure a static route in router R1 toward the switch SW1 LAN subnet where the primary link must be through Ethernet0/1, and the backup link must be through Ethernet0/2 using a floating route. Use the minimal administrative distance value when required.

```plaintext
R1(config)# ip route 192.168.0.0 255.255.255.0 10.10.12.2 1
R1(config)# ip route 192.168.0.0 255.255.255.0 10.10.12.130 2
```

This setup ensures that:
- Router R2 can reach the LAN subnet connected to SW1.
- Router R1 has a default route pointing to the Internet via R2.
- Router R2 has a static route to the Internet subnet using both redundant links between R1 and R2.
- Router R1 has a primary static route to the SW1 LAN subnet through Ethernet0/1 and a backup route through Ethernet0/2.

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/106359-exam-200-301-topic-1-question-1060-discussion/): Refer to the topology. All physical cabling is in place. Configure a local user account, a Named ACL (NACL), and security.

![](https://img.examtopics.com/200-301/image128.png) 

Task 1
Configure a local account on Sw101 with telnet access only on virtual ports 0-4. Use the following information:
• Username: support
• Password: max2learn
• Privilege level: Exec mode

Task 2
Configure and apply a single NACL on Sw101 using the following:
• Name: ENT_ACL
• Restrict only PC2 on VLAN 200 from pinging PC1
• Allow only PC2 on VLAN 200 to telnet to Sw101
• Prevent all other devices from telnetting from VLAN 200
• Allow all other network traffic from VLAN 200

Task 3
Configure security on interface Ethernet 0/0 of Sw102:
• Set the maximum number of secure MAC addresses to four.
• Drop packets with unknown source addresses until the number of secure MAC addresses drops below the configured maximum value. No notification action is required.
• Allow secure MAC addresses to be learned dynamically.

Let's break down the tasks and provide the necessary configurations for each step.

Task 1: Configure Local Account on Sw101
Configure a local account with username `support` and password `max2learn` with telnet access on virtual ports 0-4 and set the privilege level to exec mode.

```plaintext
enable
configure terminal
username support privilege 15 password max2learn
line vty 0 4
login local
transport input telnet
end
```

Task 2: Configure and Apply a Single NACL on Sw101

1. Create an access control list (ACL) named `ENT_ACL`.
2. Restrict only PC2 (192.168.200.10) on VLAN 200 from pinging PC1 (192.168.100.10).
3. Allow only PC2 on VLAN 200 to telnet to Sw101.
4. Prevent all other devices from telnetting from VLAN 200.
5. Allow all other network traffic from VLAN 200.

```plaintext
enable
configure terminal
ip access-list extended ENT_ACL
deny icmp host 192.168.200.10 host 192.168.100.10
permit tcp host 192.168.200.10 any eq telnet
deny tcp any any eq telnet
permit ip any any
interface vlan 200
ip access-group ENT_ACL in
end
```

Task 3: Configure Security on Interface Ethernet 0/0 of Sw102

1. Set the maximum number of secure MAC addresses to four.
2. Drop packets with unknown source addresses until the number of secure MAC addresses drops below the configured maximum value.
3. Allow secure MAC addresses to be learned dynamically.

```plaintext
enable
configure terminal
interface ethernet 0/0
switchport mode access
switchport port-security
switchport port-security maximum 4
switchport port-security violation restrict
switchport port-security mac-address sticky
end
```

<div style="page-break-after: always;"></div>



[Question](https://www.examtopics.com/discussions/cisco/view/123310-exam-200-301-topic-1-question-1175-discussion/#): R1 has been pre-configured with all the necessary commands. All physical cabling is in place and verified. Connectivity from PC1, PC3, and the Server must be established to the switches, and each port must only allow one VLAN.

1. Configure the VLAN connecting to the switch port for PC3 with the name "SALES"
2. Configure the switch port connecting to Server1
3. Configure the switch port connecting to PC3
4. Ensure R1 discovers SW-1 via the Cisco proprietary neighbor discovery protocol and all other devices on the network are unable to discover SW-1

![](https://img.examtopics.com/200-301/image239.png) 

````
1.
sw-2#conf t
sw-2(config)#vlan 20
sw-2(config-vlan)#aname SERVER1
sw-2(config-vlan)#exit
sw-2(config)#vlan 30
sw-2(config-vlan)#name SALES
sw-2(config-vlan)#exit

2.
sw-2(config)#interface ETH0/2
sw-2(config-if)#sw-1port mode access
sw-2(config-if)#sw-1port access vlan 20
sw-2(config-if)#no sh
sw-2(config-if)#exit

3
sw-2(config)#interface ETH0/3
sw-2(config-if)#sw-1port mode access
sw-2(config-if)#sw-1port access vlan 30
sw-2(config-if)#no sh
sw-2(config-if)#end
sw-2#wr

4.
sw-1#configure t
sw-1(config)#cdp run
sw-1(config)#interface fastEthernet 0/1
sw-1(config-if)#cdp enable
sw-1(config-if)#no sh
sw-1(config)#interface fastEthernet 0/2
sw-1(config-if)#no cdp enable
sw-1(config-if)#no sh
sw-1(config-if)#end
sw-1#wr

to end, you can use a show cdp neig in R1 and SW-2
````

````txt
Task 1
SW-2(config)#vlan 30
SW-2(config-vlan)#name SALES

Task 2
SW-2(config)#interface gigabitEthernet 0/2
SW-2(config-if)#switchport mode access
SW-2(config-if)#switchport access vlan 20
SW-2(config-if)#no shut

Task 3
SW-2(config)#interface gigabitEthernet 0/3
SW-2(config-if)#switchport mode access
SW-2(config-if)#switchport access vlan 30
SW-2(config-if)#no shut

Task 4
SW-1(config)#cdp run
SW-1(config)#interface range gigabitEthernet 0/1-48
SW-1(config-if-range)#no cdp enable

SW-1#show cdp neighbors
Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge
S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone,
D - Remote, C - CVTA, M - Two-port Mac Relay

Device ID Local Intrfce Holdtme Capability Platform Port ID
R1 Gig 0/0 145 R B Gig 0/0.1
````

Step 1: Configure the VLAN connecting to the switch port for PC3 with the name "SALES"

```plaintext
SW-2(config)# vlan 30
SW-2(config-vlan)# name SALES
SW-2(config-vlan)# exit
```

Step 2: Configure the switch port connecting to Server1

```plaintext
SW-1(config)# interface e0/2
SW-1(config-if)# switchport mode access
SW-1(config-if)# switchport access vlan 20
SW-1(config-if)# exit
```

Step 3: Configure the switch port connecting to PC3

```plaintext
SW-2(config)# interface e0/3
SW-2(config-if)# switchport mode access
SW-2(config-if)# switchport access vlan 30
SW-2(config-if)# exit
```

Enable CDP Globally and Configure Interfaces
`cdp run` ensures that CDP is enabled globally on SW-1 and only on the required interfaces to allow R1 to discover SW-1, while other devices are unable to discover SW-1.

```plaintext
SW-1(config)# cdp run
SW-1(config)# interface range e0/0 - 1
SW-1(config-if-range)# cdp enable
SW-1(config-if-range)# exit
SW-1(config)# interface e0/2
SW-1(config-if)# no cdp enable
SW-1(config-if)# exit
```

extend: What if i want to use lldp rather than cdp

````txt
SW-1(config)# lldp run
SW-2(config)# lldp run
R1(config)# lldp run

SW-1(config)# interface range e0/0 - 1
SW-1(config-if-range)# lldp transmit
SW-1(config-if-range)# lldp receive
SW-1(config-if-range)# exit

SW-1(config)# interface e0/2
SW-1(config-if)# no lldp transmit
SW-1(config-if)# no lldp receive
SW-1(config-if)# exit

SW-2(config)# interface range e0/0 - 3
SW-2(config-if-range)# lldp transmit
SW-2(config-if-range)# lldp receive
SW-2(config-if-range)# exit

R1(config)# interface range e0/0 - 1
R1(config-if-range)# lldp transmit
R1(config-if-range)# lldp receive
R1(config-if-range)# exit
````

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/123128-exam-200-301-topic-1-question-1178-discussion/#): All physical cabling is in place. Routers R3 and R4 are fully configured and inaccessible. Configure static routes for various connectivity to the ISP and the LAN that resides on R4.

![](https://img.examtopics.com/200-301/image243.png) 

1. Configure a route on R1 to ensure that R1 prefers R2 when traffic is destined to the server only.
2. Configure a default route on R2 to the ISP
3. Configure a route on R1 to ensure that R1 will use R2 for the R4 LAN if the link fails between R3 and R4
4. Configure a route on R1 to ensure that R1 prefers R3 when traffic is destined to the R4 LAN at 10.0.41.0/24

````txt
R1(config)#ip route 10.0.41.10 255.255.255.255 e0/0
R1(config)#ip route 10.0.41.0 255.255.255.0 e0/0 201
R1(config)#ip route 10.0.41.0 255.255.255.0 e0/1
R1(config)#do write memory

R2(config)#ip route 0.0.0.0 0.0.0.0 209.165.200.225
R2(config)#do write memory

Note:

1. 201 is a safer AD; it's greater than the default distance value for any possible DRP. 200 is the value for IBGP.
2. I specified the interfaces instead of the next-hop addresses. It's easier, and works fine for IPv4.
````

````txt
R1
Task1-ip route 10.0.41.10 255.255.255.255 10.0.12.2
Task3-ip route 10.0.41.0 255.255.255.0 10.0.12.2 10
Task4-ip route 10.0.41.0 255.255.255.0 10.0.13.2
R2
Task2-ip route 0.0.0.0 0.0.0.0 209.165.200.225
````

> I think the answer is fine, but it is assuming that those are indeed the next hop addresses and it is not specified in the diagram. To be safe, I would put the exit interface number as Next Hop. Same with the administrative distance for the floating route, 200 is fine, but it can also be any other number.



[Question](https://www.examtopics.com/discussions/cisco/view/103854-exam-200-301-topic-1-question-1043-discussion/#): Connectivity between four routers has been established. IP connectivity must be configured in the order presented to complete the implementation. No dynamic routing protocols are included.

![](https://img.examtopics.com/200-301/image108.png) 

1. Configure static routing using host routes to establish connectivity from router R3 to the router R1 Loopback address using the source IP of 209.165.200.230.
2. Configure an IPv4 default route on router R2 destined for router R4.
3. Configure an IPv6 default router on router R2 destined for router R4.

To complete the configuration for the given network topology, we need to follow these steps for each router as described. Here are the commands to achieve the required configurations:

Step 1: Configure static routing using host routes to establish connectivity from router R3 to the router R1 Loopback address using the source IP of 209.165.200.230.

```
R3(config)# ip route 192.168.1.1 255.255.255.255 209.165.200.229
```

Step 2: Configure an IPv4 default route on router R2 destined for router R4.

```
R2(config)# ip route 0.0.0.0 0.0.0.0 209.165.202.130
```

Step 3: Configure an IPv6 default router on router R2 destined for router R4.

```
R2(config)# ipv6 route ::/0 2001:db8:abcd::2
```

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/132429-exam-200-301-topic-1-question-808-discussion/#): physical cabling is in place and verified. Connectivity between all four switches must be established and operational. All ports are pre-configured as 802.1q trunks.

![img](https://img.examtopics.com/200-301/image331.png) 

1. Configure both SW-1 and SW-2 ports e0/1 and e0/2 to permit only the allowed VLANs
2. Configure both SW-3 and SW-4 ports e0/2 to permit only the allowed VLANs
3. Configure both SW-1 and SW-2 e0/1 ports to send and receive untagged traffic over VLAN 99
4. Configure both SW-3 and SW-4 ports e0/0 and e0/1 for link aggregation using the industry standard protocol. All ports must immediately negotiate the link aggregation
5. Permit only the allowed VLANs on the new link

**Configure SW-1 and SW-2 ports e0/1 and e0/2 to permit only the allowed VLANs:**

```bash
SW-1(config)# interface range Ethernet0/1 - 2
SW-1(config-if-range)# switchport mode trunk  // 不確定是不是可加可不加
SW-1(config-if-range)# switchport trunk allowed vlan 56,77
SW-1(config-if-range)# exit

SW-2(config)# interface range Ethernet0/1 - 2
SW-1(config-if-range)# switchport mode trunk  // 不確定是不是可加可不加
SW-2(config-if-range)# switchport trunk allowed vlan 56,77
SW-2(config-if-range)# exit
```

**Configure SW-3 and SW-4 ports e0/2 to permit only the allowed VLANs:**

```bash
SW-3(config)# interface Ethernet0/2
SW-3(config-if)# switchport trunk allowed vlan 56,77
SW-3(config-if)# exit

SW-4(config)# interface Ethernet0/2
SW-4(config-if)# switchport trunk allowed vlan 56,77
SW-4(config-if)# exit
```

**Configure SW-1 and SW-2 e0/1 ports to send and receive untagged traffic over VLAN 99:**

```bash
SW-1(config)# interface Ethernet0/1
SW-1(config-if)# switchport trunk native vlan 99
SW-1(config-if)# exit

SW-2(config)# interface Ethernet0/1
SW-2(config-if)# switchport trunk native vlan 99
SW-2(config-if)# exit
```

This configuration sets VLAN 99 as the native VLAN on these ports.

**Configure SW-3 and SW-4 ports e0/0 and e0/1 for link aggregation using the industry standard protocol (assuming EtherChannel) and Permit only the allowed VLANs on the new link (assuming link aggregation):**

```bash
SW-3(config)# interface range e0/0 - 1
SW-3(config-if-range)# channel-group 1 mode active
SW-3(config-if-range)# exit
SW-3(config)# interface port-channel 1
SW-3(config-if)# switchport mode trunk
SW-3(config-if)# switchport trunk allowed vlan 56,77
SW-3(config-if)# exit

SW-4(config)# interface range e0/0 - 1
SW-4(config-if-range)# channel-group 1 mode active
SW-4(config-if-range)# exit
SW-4(config)# interface port-channel 1
SW-4(config-if)# switchport mode trunk
SW-4(config-if)# switchport trunk allowed vlan 56,77
SW-4(config-if)# exit
```

This configuration sets up link aggregation (EtherChannel) on these ports with negotiation.

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/119705-exam-200-301-topic-1-question-1134-discussion/): IP connectivity between the three routers is configured. OSPF adjacencies must be established.

![](https://img.examtopics.com/200-301/image206.png)  

1. Configure R1 and R2 Router IDs using the interface IP addresses from the link that is shared between them.
2. Configure the R2 links with a max value facing R1 and R3. R2 must become the DR. R1 and R3 links facing R2 must remain with the default OSPF configuration for DR election. Verify the configuration after clearing the OSPF process.
3. Using a host wildcard mask, configure all three routers to advertise their respective Loopback1 networks.
4. Configure the link between R1 and R3 to disable their ability to add other OSPF routers.

實驗題也有出現過

 Here are the steps to configure the given tasks on the routers:

Step 1: Configure Router IDs
For R1 and R2, configure the Router IDs using the interface IP addresses from the link shared between them (10.10.12.1 and 10.10.12.2).

```bash
R1(config)# router ospf 1
R1(config-router)# router-id 10.10.12.1
```

```bash
R2(config)# router ospf 1
R2(config-router)# router-id 10.10.12.2
```

 Step 2: Configure R2 as DR
Set the OSPF priority to the maximum value (255) on R2 interfaces facing R1 and R3.

```bash
R2(config)# interface Ethernet0/0
R2(config-if)# ip ospf priority 255
R2(config)# interface Ethernet0/1
R2(config-if)# ip ospf priority 255
```

Verify the configuration after clearing the OSPF process  on all routers to force the DR election:

```bash
R2# clear ip ospf process
```

Step 3: Advertise Loopback Networks
Use a host wildcard mask to advertise the Loopback1 networks on all three routers.

```bash
R1(config)# router ospf 1
R1(config-router)# network 192.168.1.1 0.0.0.0 area 0
```

```bash
R2(config)# router ospf 1
R2(config-router)# network 192.168.2.2 0.0.0.0 area 0
```

```bash
R3(config)# router ospf 1
R3(config-router)# network 192.168.3.3 0.0.0.0 area 0
```

Step 4: Configure the Link Between R1 and R3 to Disable Adding Other OSPF Routers
Use the `ip ospf network point-to-point` command to configure the link between R1 and R3 to disable adding other OSPF routers.

```bash
R1(config)# interface Ethernet0/1
R1(config-if)# ip ospf network point-to-point
```

```bash
R3(config)# interface Ethernet0/1
R3(config-if)# ip ospf network point-to-point
```

After configuring, you can verify the OSPF adjacencies and DR/BDR roles using the following commands:

```bash
R1# show ip ospf neighbor
R2# show ip ospf neighbor
R3# show ip ospf neighbor
```

This will show you the state of the OSPF adjacencies and confirm that R2 is the DR while R1 and R3 are DROTHER.

Verify the OSPF neighbor relationships to ensure that R2 is the DR:

```
show ip ospf neighbor
```

Check the OSPF routes to verify the Loopback1 networks are advertised:

```
show ip route ospf
```

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/106281-exam-200-301-topic-1-question-1058-discussion/): Configure IPv4 and IPv6 connectivity between two routers. For IPv4, use a /28 network from the 192.168.180.0/24 private range. For IPv6, use the first /64 subnet from the 2001:0db8:acca::/48 subnet.

![](https://img.examtopics.com/200-301/image119.png) 

1. Using Ethernet0/1 on routers R1 and R2, configure the next usable /28 from the 192.168.180.0/24 range. The network 192.168.180.0/28 is unavailable.
2. For the IPv4 /28 subnet, router R1 must be configured with the first usable host address.
3. For the IPv4 /28 subnet, router R2 must be configured with the last usable host address.
4. For the IPv6 /64 subnet, configure the routers with the IP addressing provided from the topology.
5. A ping must work between the routers on the IPv4 and IPv6 address ranges.

Router R1 Configuration:

```
ipv6 unicast-routing
interface Ethernet0/1
 ip address 192.168.180.17 255.255.255.240
 ipv6 address 2001:db8:acca::1/64
 no shutdown
```

Router R2 Configuration:

```
ipv6 unicast-routing
interface Ethernet0/1
 ip address 192.168.180.30 255.255.255.240
 ipv6 address 2001:db8:acca::2/64
 no shutdown
```

To verify the configuration, you can use the `ping` command to ensure connectivity between the routers.

On R1:

```
ping 192.168.180.30
ping 2001:db8:acca::2
```

On R2:

```
ping 192.168.180.17
ping 2001:db8:acca::1
```

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/133217-exam-200-301-topic-1-question-1310-discussion/): All physical cabling is in place and verified. Router R1 is configured and passing traffic for VLANs 5 and 6. All relevant ports are pre-configured as 802.1q trunks.

![](https://img.examtopics.com/200-301/image344.png) 

1. Configure SW-1 port E0/0 to permit only VLANS 5 and 6
2. Configure both SW-1 and SW-2's E0/1 ports to send and receive untagged traffic over VLAN 77
3. Configure SW-2 E0/2 port to permit only VLAN 6
4. Configure both SW-3 and SW-4 ports e0/0 and e0/1 for link aggregation using the industry standard protocol with the following requirements:

- SW-3 ports **must immediately negotiate** the aggregation protocol
- SW-4 ports **must not initiate the negotiation** for the aggregation protocol
- Use the designated number assignment

To configure the switches based on the provided requirements, we need to perform several specific configurations on SW-1, SW-2, SW-3, and SW-4. Below are the detailed steps:

1. Configure SW-1 port E0/0 to permit only VLANs 5 and 6

```plaintext
interface Ethernet0/0
 switchport trunk allowed vlan 5,6
```

2. Configure both SW-1 and SW-2's E0/1 ports to send and receive untagged traffic over VLAN 77

```plaintext
SW1(config)# interface Ethernet0/1
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 77
```

```plaintext
SW2(config)# interface Ethernet0/1
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk native vlan 77
```

3. Configure SW-2 E0/2 port to permit only VLAN 6

```plaintext
interface Ethernet0/2
 switchport trunk allowed vlan 6
```

4. Configure both SW-3 and SW-4 ports e0/0 and e0/1 for link aggregation using the industry standard protocol

On SW-3:

```plaintext
interface range Ethernet0/0, Ethernet0/1
 channel-group 34 mode active
```

On SW-4:

```plaintext
interface range Ethernet0/0, Ethernet0/1
 channel-group 34 mode passive
```

SW-1 Configuration:

```plaintext
interface Ethernet0/0
 switchport trunk allowed vlan 5,6
!
interface Ethernet0/1
 switchport mode trunk
 switchport trunk native vlan 77
```

SW-2 Configuration:

```plaintext
interface Ethernet0/1
 switchport mode trunk
 switchport trunk native vlan 77
!
interface Ethernet0/2
 switchport trunk allowed vlan 6
```

SW-3 Configuration:

```plaintext
interface range Ethernet0/0, Ethernet0/1
 channel-group 34 mode active
```

SW-4 Configuration:

```plaintext
interface range Ethernet0/0, Ethernet0/1
 channel-group 34 mode passive
```

This configuration ensures that:

- SW-1's port E0/0 permits only VLANs 5 and 6.
- SW-1 and SW-2's port E0/1 sends and receives untagged traffic over VLAN 77.
- SW-2's port E0/2 permits only VLAN 6.
- SW-3 and SW-4 ports E0/0 and E0/1 are configured for link aggregation using LACP, with SW-3 actively negotiating and SW-4 passively waiting.

Ensure to save the configuration on all switches using the `write memory` command to make the changes persistent.

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/130729-exam-200-301-topic-1-question-1285-discussion/): All physical cabling is in place and verified. Switch SW-1 is pre-configured and inaccessible. SW-2 and SW-3 ports must be configured and operational to complete the configuration.

![](https://img.examtopics.com/200-301/image319.png) 

1. Configure SW-2 and SW-3 ports E0/0 to use the industry standard encapsulation method for trunking and only tag VLAN 10
2. Configure SW-2 and SW-3 ports E0/0 to send and receive untagged traffic over VLAN 11
3. Configure SW-2 and SW-3 ports E0/2 and E0/3 to use the **industry standard encapsulation method for trunking** and tag all VLANS
4. Configure SW-2 and SW-3 ports E0/2 and E0/3 for link aggregation using the industry standard protocol with the following requirements:

- SW-2 ports must not initiate the negotiation for the aggregation protocol
- SW-3 ports must immediately negotiate the aggregation protocol
- Use the designated number assignment

To complete the configuration for SW-2 and SW-3 according to the given requirements, you will need to configure trunking, VLANs, and link aggregation. Here are the detailed steps:

Step 1: Configure SW-2 and SW-3 ports E0/0 to use the industry standard encapsulation method for trunking and only tag VLAN 10

```plaintext
SW-2(config)# interface e0/0
❗ SW-2(config-if)# switchport trunk encapsulation dot1q
SW-2(config-if)# switchport mode trunk
SW-2(config-if)# switchport trunk allowed vlan 10
SW-2(config-if)# exit

SW-3(config)# interface e0/0
❗ SW-3(config-if)# switchport trunk encapsulation dot1q
SW-3(config-if)# switchport mode trunk
SW-3(config-if)# switchport trunk allowed vlan 10
SW-3(config-if)# exit
```

![image-20240708144720759](https://han.blob.core.windows.net/typora/image-20240708144720759.png) 

❗❗❗ The error i'm encountering indicates that the `switchport trunk encapsulation dot1q` command is not recognized. This might happen for a few reasons, primarily related to the switch model and IOS version i'm using. On some Cisco switches, particularly newer models, the trunk encapsulation is fixed to `dot1q` and does not need to be specified explicitly.

Step 2: Configure SW-2 and SW-3 ports E0/0 to send and receive untagged traffic over VLAN 11

```plaintext
SW-2(config)# interface e0/0
SW-2(config-if)# switchport trunk native vlan 11
SW-2(config-if)# exit

SW-3(config)# interface e0/0
SW-3(config-if)# switchport trunk native vlan 11
SW-3(config-if)# exit
```

Step 3: Configure SW-2 and SW-3 ports E0/2 and E0/3 to use the industry standard encapsulation method for trunking and tag all VLANs

```plaintext
SW-2(config)# interface range e0/2 - 3
SW-2(config-if-range)# switchport trunk encapsulation dot1q
❌SW-2(config-if-range)# switchport mode trunk
❌SW-2(config-if-range)# switchport trunk allowed vlan all
SW-2(config-if-range)# exit

SW-3(config)# interface range e0/2 - 3
SW-3(config-if-range)# switchport trunk encapsulation dot1q
❌SW-3(config-if-range)# switchport mode trunk
❌SW-3(config-if-range)# switchport trunk allowed vlan all
SW-3(config-if-range)# exit
```

❗ By default, when you configure a switch port as a trunk, it will allow all VLANs to pass through unless explicitly restricted. The command `switchport trunk allowed vlan all` is essentially redundant because it specifies the default behavior.

Step 4: Configure SW-2 and SW-3 ports E0/2 and E0/3 for link aggregation using the industry standard protocol with the given requirements

```plaintext
SW-2(config)# interface range e0/2 - 3
SW-2(config-if-range)# channel-group 23 mode passive
SW-2(config-if-range)# exit
```

```plaintext
SW-3(config)# interface range e0/2 - 3
SW-3(config-if-range)# channel-group 23 mode active
SW-3(config-if-range)# exit
```

Summary of Commands

1. **SW-2 and SW-3 Trunking on E0/0:**
   - Use Dot1Q encapsulation.
   - Use VLAN 11 for untagged traffic.
   - Allow only VLAN 10.
2. **SW-2 and SW-3 Trunking on E0/2 and E0/3:**
   - Use Dot1Q encapsulation.
   - Allow all VLANs.
3. **SW-2 Link Aggregation:** Set ports E0/2 and E0/3 to passive mode for LACP.
4. **SW-3 Link Aggregation:** Set ports E0/2 and E0/3 to active mode for LACP.

Verify Configuration

1. **Verify Trunking Configuration:**

   ```plaintext
   SW-2# show interfaces trunk
   SW-3# show interfaces trunk
   ```

2. **Verify Link Aggregation Configuration:**

   ```plaintext
   SW-2# show etherchannel summary
   SW-3# show etherchannel summary
   ```

3. **Verify VLAN Configuration:**

   ```plaintext
   SW-2# show vlan brief
   SW-3# show vlan brief
   ```

<div style="page-break-after: always;"></div>

[Question](https://www.examtopics.com/discussions/cisco/view/102890-exam-200-301-topic-1-question-1052-discussion/#): Connectivity between three routers has been established, and IP services must be configured in the order presented to complete the implementation. Tasks assigned include configuration of NAT, NTP, DHCP, and SSH services.

![](https://img.examtopics.com/200-301/image113.png) 

1. All traffic sent from R3 to the R1 Loopback address must be configured for NAT on R2. All source addresses must be translated from R3 to the IP address of Ethernet0/0 on R2, while using only a standard access list named PUBNET. To verify, a ping must be successful to the R1 Loopback address sourced from R3. Do not use NVI NAT configuration.
2. Configure R1 as an NTP server and R2 as a client, not as a peer, using the IP address of the R1 Ethernet0/2 interface. Set the clock on the NTP server for midnight on May 1, 2018.
3. Configure R1 as a DHCP server for the network 10.1.3.0/24 in a ✔**pool named NETPOOL**. Using a single command, exclude addresses 1 - 10 from the range. Interface Ethernet0/2 on R3 must be issued the IP address of 10.1.3.11 via DHCP.
4. Configure SSH connectivity from R1 to R3, while excluding access via other remote connection protocols. Access for user netadmin and password N3t4ccess must be set on router R3 using RSA and 1024 bits. Verify connectivity using an SSH session from router R1 using a destination address of 10.1.3.11. Do NOT modify console.

General Overview

````txt
NAT:
R2(config)# ip access list standard PUBNET
R2(config-std-nacl)# permit 10.2.3.3
R2(config-std-nacl)# permit 10.1.3.11
R2(config-std-nacl)# permit 192.168.3.1
R2(config-std-nacl)# exit
R2(config)# interface e0/1
R2(config-if)# ip nat inside
R2(config)# interface e0/0
R2(config-if)# ip nat outside
R2(config)# ip nat inside source list PUBNET interface e0/0 overload

NTP (不用interface config):
R1(config)# clock set 00:00:00 jan 1 2019
R1(config)# ntp master 1
R2(config)# ntp server 10.1.3.1

DHCP:
R1(config)# ip dhcp pool👀 NETPOOL
R1(dhcp-config)# network 10.1.3.0 255.255.255.0
R1(config)# exit
R1(config)# ip dhcp excluded-address 10.1. 3.1 10.1.3.10
R3(config)# interface e0/2
R3(config-if)# ip address dhcp

SSH:
R3(config)# username netadmin password N3t4ccess
R3(config)# line vty 0 4
R3(config-line)# login local
R3(config-line)# exit
R3(config)# host R3
R3(config)# ip domain-name cisco.com
R3(config)# crypto key generate rsa

✨SSH (abbreviated command version):
R3(config)# host R3
R3(config)# user netadmin pass N3t4ccess
R3(config)# line vty 0 4
R3(config-line)# log loc
R3(config-line)# exit
R3(config)# ip dom-name cisco.com
R3(config)# cry key gen rsa mod 2048
````

NAT:

````txt
R2(config)# ip access-list standard PUBNET
R2(config-std-nacl)# permit 10.2.3.3
R2(config-std-nacl)# permit 10.1.3.11
R2(config-std-nacl)# permit 192.168.3.1
R2(config-std-nacl)# exit

R2(config)# interface e0/1
R2(config-if)# ip nat inside
R2(config)# interface e0/0
R2(config-if)# ip nat outside

R2(config)# ip nat inside source list PUBNET interface e0/0 overload
````

NTP:

````
R1(config)# clock set 00:00:00 jan 1 2019
R1(config)# ntp master 1
R2(config)# ntp server 10.1.3.1
````

DHCP

````txt
R1(config)# ip dhcp pool NETPOOL
R1(dhcp-config)# network 10.1.3.0 255.255.255.0
R1(config)# exit
R1(config)# ip dhcp excluded-address 10.1. 3.1 10.1.3.10
````

 NTP: Make sure that R3's Ethernet0/2 interface is configured to receive an IP address via DHCP. Enter Interface Configuration Mode for Ethernet0/2 on R3

````txt
R3(config)# interface Ethernet0/2
R3(config-if)# ip address dhcp
R3(config-if)# no shutdown
````

SSH

````txt
R3(config)# username netadmin privilege 15 secret N3t4ccess
R3(config)# ip domain-name example.com (cisco.com)
R3(config)# crypto key generate rsa general-keys modulus 1024
R3(config)# ip ssh version 2
R3(config)# line vty 0 4
R3(config-line)# login local
R3(config-line)# transport input ssh
R3(config-line)# exit
````

<div style="page-break-after: always;"></div>



[Question](https://www.examtopics.com/discussions/cisco/view/128567-exam-200-301-topic-1-question-1258-discussion/): R1 and R2 are pre-configured with all the necessary commands. All physical cabling is in place and verified. Connectivity for PC1 and PC2 must be established to the switches; each port must only allow one VLAN and be operational.

1. Configure SW-1 with VLAN 15 and label it exactly as OPS
2. Configure SW-2 with VLAN 66 and label it exactly as ENGINEERING
3. Configure the switch port connecting to PC1
4. Configure the switch port connecting to PC2
5. Configure the E0/2 connections on SW-1 and SW-2 for neighbor discovery using the vendor-neutral standard protocol and ensure that E0/0 on both switches uses the Cisco proprietary protocol

![](https://img.examtopics.com/200-301/image286.png) 

````txt 
Task 1:
Sw1(config)#vl 15
Sw1(config-vlan)#name OPS

Task 2:
Sw2(config)#vl 66
Sw2(config-vlan)#na ENGINEERING

Task 3:
Sw1(config)#in fa0/1
Sw1(config-if)#no sh
Sw1(config-if)#sw mo acc
Sw1(config-if)#sw acc vl 15

Task 4:
Sw2(config)#in fa0/1
Sw2(config-if)#no sh
Sw2(config-if)#sw mo acc
Sw2(config-if)#sw acc vl 66

Task 5 SW1 & SW2:
Switch(config)#lldp run

Switch(config)#in e0/2
Switch(config-if)#no cdp enable
Switch(config-if)#lldp transmit
Switch(config-if)#lldp receive

Switch(config)#in e0/0
Switch(config-if)#no lldp transmit
Switch(config-if)#no lldp receive
Switch(config-if)#cdp enable

Switch(config-if)#sw tr en dot1q
Switch(config-if)#sw mo tr
end

copy r st
````

Configuration Comparison between 801.1q and ISL:

- **ISL Encapsulation:**

  ```
  Switch(config)# interface e0/0
  Switch(config-if)# switchport trunk encapsulation isl
  Switch(config-if)# switchport mode trunk
  ```

- **802.1Q Encapsulation:**

  ```
  Switch(config)# interface e0/0
  Switch(config-if)# switchport trunk encapsulation dot1q
  Switch(config-if)# switchport mode trunk
  ```

**ISL** is a Cisco proprietary protocol, less commonly used today.
**802.1Q (dot1q)** is the industry standard, widely used across different vendors' equipment.

### Questions with Screenshot

![image-20240613170429555](https://han.blob.core.windows.net/typora/image-20240613170429555.png)

Static Routing Configuration for End-to-End Connectivity Task Details:

1. **Configure static routing to ensure R1 prefers the path through R2 to reach only PC1 on R4’s LAN.**
2. **Configure static routing that ensures traffic sourced from R1 will take an alternate path through R3 to PC1 in the event of an outage along the primary path.**
3. **Configure default routes on R1 and R3 to the Internet using the least number of hops.**

Step 1: Configure Static Routes on R1

1. **Enter Configuration Mode**:
   ```shell
   R1# configure terminal
   ```

2. **Add Static Route for Primary Path (via R2)**:
   ```shell
   ❌R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.12.3
   ✅R1(config)# ip route 10.0.41.10 255.255.255.255 e0/0
   ```
   
3. **Add Static Route for Secondary Path (via R3)**:
   ```shell
   ❌ R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.13.2 10
   ✅R1(config)# ip route 10.0.41.10 255.255.255.255 e0/1
   ```

Step 2: Configure Default Route on R1

1. **Add Default Route to the Internet**:
   ```shell
   R1(config)# ip route 0.0.0.0 0.0.0.0 209.165.201.2
   ```

Step 3: Configure Static Routes on R3

1. **Enter Configuration Mode**:
   ```shell
   R3# configure terminal
   ```

2. **Add Default Route to the Internet**:
   ```shell
   R3(config)# ip route 0.0.0.0 0.0.0.0 209.165.201.1
   ```

**Summary of Commands R1/R3 Configuration**:

```shell
R1# configure terminal
R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.12.3
R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.13.2 10
R1(config)# ip route 0.0.0.0 0.0.0.0 209.165.201.2
R1(config)# end
R1# copy running-config startup-config
```

```shell
R3# configure terminal
R3(config)# ip route 0.0.0.0 0.0.0.0 209.165.201.1
R3(config)# end
R3# copy running-config startup-config
```

Explanation

- **Primary Path Configuration**: The primary static route for reaching PC1 (10.0.41.0/24) is via R2, with the next hop set to 10.0.12.3.
- **Secondary Path Configuration**: A secondary static route with a higher administrative distance (10) is added via R3, with the next hop set to 10.0.13.2.
- **Default Route on R1**: The default route points to the ISP through the next hop IP 209.165.201.2.
- **Default Route on R3**: The default route points to the ISP through the next hop IP 209.165.201.1.

 ![image-20240613170528866](https://han.blob.core.windows.net/typora/image-20240613170528866.png) 

Configuring LACP EtherChannel Between SW1 and SW2 Task Details:

1. **Configure an LACP EtherChannel and number it as 1; configure it between switches SW1 and SW2 using interfaces Ethernet0/0 and Ethernet0/1 on both sides. The LACP mode must match on both ends.**
2. **Configure the EtherChannel as a trunk link.**
3. **Configure the trunk link with 802.1q tags.**
4. **Configure the native VLAN of the EtherChannel as VLAN 15.**

SW1 / SW2 Configuration

**Create VLAN 15**:

```shell
SW1(config)# vlan 15
SW1(config-vlan)# exit

SW2(config)# vlan 15
SW2(config-vlan)# exit
```

**Configure EtherChannel Using LACP**:

```shell
SW1(config)# interface range Ethernet0/0 - 1
SW1(config-if-range)# channel-group 1 mode active
SW1(config-if-range)# exit

SW2(config)# interface range Ethernet0/0 - 1
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# exit
```

**Configure EtherChannel as a Trunk**:

```shell
SW1(config)# interface port-channel 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 15
SW1(config-if)# end
SW1# copy running-config startup-config

SW2(config)# interface port-channel 1
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk native vlan 15
SW2(config-if)# end
SW2# copy running-config startup-config
```

Summary of Configuration Commands for SW1 and SW2

```shell
SW1# configure terminal
SW1(config)# vlan 15
SW1(config-vlan)# exit
SW1(config)# interface range Ethernet0/0 - 1
SW1(config-if-range)# channel-group 1 mode active
SW1(config-if-range)# exit
SW1(config)# interface port-channel 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 15
SW1(config-if)# end
SW1# copy running-config startup-config
```

```shell
SW2# configure terminal
SW2(config)# vlan 15
SW2(config-vlan)# exit
SW2(config)# interface range Ethernet0/0 - 1
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# exit
SW2(config)# interface port-channel 1
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk native vlan 15
SW2(config-if)# end
SW2# copy running-config startup-config
```

These commands configure the LACP EtherChannel between SW1 and SW2, ensuring that both ends match and the necessary trunk settings are applied.

![image-20240613170614754](https://han.blob.core.windows.net/typora/image-20240613170614754.png)

![image-20240614083622370](https://han.blob.core.windows.net/typora/image-20240614083622370.png)

Task 1: Configure a Local Account on Sw103

1. **Switch Configuration Mode**:
   ```shell
   Switch# enable
   Switch# configure terminal
   Switch(config)# username devnet privilege 15 algorithm-type sha256 secret access8cli
   Switch(config)# line vty 0 4
   Switch(config-line)# login local
   ```

Task 2: Modify the Named ACL (INTERNET_ACL)

1. **Allow HTTPS from 172.16.0.0/16**:
   ```shell
   R1# configure terminal
   R1(config)# ip access-list extended INTERNET_ACL
   R1(config-ext-nacl)# permit tcp 172.16.0.0 0.0.255.255 any eq https
   ```

2. **Allow Telnet Only for VLAN 101**:
   ```shell
   R1(config-ext-nacl)# permit tcp any 172.16.101.0 0.0.0.255 eq telnet
   ```

   To reflect the requirements of allowing HTTPS traffic from the 172.16.0.0/16 subnet and Telnet traffic to the 172.16.101.0/24 subnet on a Cisco device, you would configure an extended access control list (ACL) like this

   ````text
   R1# configure terminal
   R1(config)# ip access-list extended INTERNET_ACL
   R1(config-ext-nacl)# permit tcp 172.16.0.0 0.0.255.255 any eq 443
   R1(config-ext-nacl)# permit tcp any 172.16.101.0 0.0.0.255 eq 23
   R1(config-ext-nacl)# deny ip any any log
   ````

   

3. **Restrict All Other Traffic and Log Details**:

   ```shell
   R1(config-ext-nacl)# deny ip any any log
   ```

4. **Apply ACL on R1**:
   ```shell
   R1# configure terminal
   R1(config)# interface e0/0
   R1(config-if)# ip access-group INTERNET_ACL in
   ```

Task 3: Configure DHCP Snooping on Sw101

1. **Enable DHCP Snooping Globally**:
   ```shell
   Switch# configure terminal
   Switch(config)# ip dhcp snooping
   ```
2. **Enable DHCP Snooping for VLAN 101**:
   ```shell
   Switch(config)# ip dhcp snooping vlan 101
   ```
3. **Disable DHCP Option-82 Data Insertion**:
   ```shell
   Switch(config)# no ip dhcp snooping information option
   ```
4. **Enable DHCP Snooping MAC Address Verification**:
   ```shell
   Switch(config)# ip dhcp snooping verify mac-address
   ```

Summary of Commands with Prompts

**Sw103 Configuration**:

```plaintext
Switch103# enable
Switch103# configure terminal
Switch103(config)# username devnet privilege 15 algorithm-type sha256 secret access8cli
Switch103(config)# line vty 0 4
Switch103(config-line)# login local
Switch103(config-line)# transport input telnet
Switch103(config-line)# exit

! abbreviated version
Switch103# en
Switch103# conf t
Switch103(config)# username devnet privilege 15 algorithm-type sha256 secret access8cli
Switch103(config)# line vty 0 4
Switch103(config-line)# login loc
Switch103(config-line)# transp input telnet
Switch103(config-line)# exit
```

**INTERNET_ACL on R1**:

```plaintext
R1# configure terminal
R1(config)# ip access-list extended INTERNET_ACL
R1(config-ext-nacl)# permit tcp 172.16.0.0 0.0.255.255 any eq https
R1(config-ext-nacl)# permit tcp any 172.16.101.0 0.0.0.255 eq telnet
R1(config-ext-nacl)# deny ip any any log
R1(config)# interface e0/0
R1(config-if)# ip access-group INTERNET_ACL in
```

**Sw101 DHCP Snooping Configuration**:

```plaintext
Switch101# configure terminal
Switch101(config)# ip dhcp snooping
Switch101(config)# ip dhcp snooping vlan 101
Switch101(config)# no ip dhcp snooping information option
Switch101(config)# ip dhcp snooping verify mac-address
```



### standard addressing

 Let's break down the addressing scheme and ensure we correctly configure the routes based on the given network topology.

Network Topology Breakdown:

- **R1 to R2**: 10.0.13.0/30
- **R1 to R3**: 10.0.34.0/28
- **R2 to R4**: 10.0.24.0/29
- **R3 to ISP**: 209.165.201.0/27
- **R4 LAN**: 10.0.41.0/24
- **PC1**: 10.0.41.10

IP Addressing Based on Subnet:

- **Subnet 10.0.13.0/30**:
  - Usable IPs: 10.0.13.1, 10.0.13.2
  - Typically, 10.0.13.1 could be assigned to R1 and 10.0.13.2 to R2.
- **Subnet 10.0.34.0/28**:
  - Usable IPs: 10.0.34.1 to 10.0.34.14
  - Typically, 10.0.34.1 could be assigned to R1 and 10.0.34.2 to R3.
- **Subnet 10.0.24.0/29**:
  - Usable IPs: 10.0.24.1 to 10.0.24.6
  - Typically, 10.0.24.1 could be assigned to R2 and 10.0.24.2 to R4.
- **Subnet 209.165.201.0/27**:
  - Usable IPs: 209.165.201.1 to 209.165.201.30
  - Typically, 209.165.201.1 could be assigned to the ISP, and 209.165.201.2 could be assigned to R3.