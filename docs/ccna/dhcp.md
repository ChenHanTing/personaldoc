---
sidebar_position: 9
---

# DHCP

What about DHCP

1. `DHCP snooping` 
   DHCP snooping is a security feature that provides security by filtering untrusted DHCP messages and by rate-limiting DHCP traffic. By limiting the rate of DHCP traffic from untrusted sources, DHCP snooping can prevent attacks such as DHCP starvation where an attacker floods the DHCP server with requests to exhaust the IP address pool.
2. `default gateway`
   Dynamic Host Configuration Protocol (DHCP) is responsible for providing configuration information to clients on a network, including the default gateway. When a Windows workstation is set to obtain its IP address automatically, the DHCP server provides the device with an IP address, subnet mask, default gateway, and other necessary network configuration details. This allows the device to communicate with other networks by routing traffic through the default gateway.

### Minimal Configuration Example

````txt
Router> enable
Router# configure terminal
Router(config)# ip dhcp pool MYPOOL
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 ➡ Even this is also optional
Router(dhcp-config)# exit
Router(config)# exit
Router# write memory
````

When DHCP is configured on a router, `default-router` must be entered so the default gateway is automatically distributed?

### How to become DHCP client

By setting `ip address dhcp`. 

````txt
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address dhcp
Router(config-if)# no shutdown
````

This configuration will allow the router's interface to request an IP address from a DHCP server.

### Bunches of CCNA questions

Question - [Reference](https://www.examtopics.com/discussions/cisco/view/99826-exam-200-301-topic-1-question-962-discussion/)

![img](https://img.examtopics.com/200-301/image82.png) 

Refer to the exhibit. The DHCP server is configured with a DHCP pool for each of the subnets represented. Which command must be configured on switch SW1 to allow DHCP clients on VLAN 10 to receive dynamic IP addresses from the DHCP server?

- A. SW1(config-if)#ip helper-address 192.168.10.1
- B. SW1(config-if)#ip helper-address 192.168.20.1
- C. SW1(config-if)#ip helper-address 192.168.20.2 ✅ (左手傳到右手的右手)
- D. SW1(config-if)#ip helper-address 192.168.10.2

The keypoint I guess is `ip addre 192.168.20.2 255.255.255.0`. We need the DHCP server address which is 192.168.20.2. The exhibit with the long output is meant to throw us off, just look at the topology diagram and it is there. 

If we only needed 192.168.10.2 for DHCP for VLAN 10, then we would not need an IP helper address.

Question2 - [Reference](https://www.examtopics.com/discussions/cisco/view/110801-exam-350-701-topic-1-question-561-discussion/) 
#`DHCP snooping database` 
#`Dynamic ARP Inspection (DAI)`

![img](https://img.examtopics.com/350-701/image18.png) 

The DHCP snooping database resides on router R1, and dynamic ARP inspection is configured only on switch SW2. Which ports must be configured as untrusted so that dynamic ARP inspection operates normally? 
A. P2 and P3 only 
B. P5, P6, and P7 only 
C. P1, P2, P3, and P4 only 
D. P2, P3, and P6 only

**Correct Answer: D. P2, P3, and P6 only**

Dynamic ARP Inspection (DAI) relies on the DHCP snooping database to validate ARP packets and prevent ARP spoofing attacks. In this scenario, DAI is configured only on switch SW2, and the DHCP snooping database resides on router R1. To ensure DAI operates correctly, the following considerations are made:

- Trusted ports are typically those connected to other network devices, such as switches and routers, where you expect legitimate ARP traffic.
- Untrusted ports are typically those connected to hosts, where ARP requests and responses are validated against the DHCP snooping database.

Given this setup, let's identify which ports should be configured as untrusted on switch SW2:

- **P2**: Connected to SW1 (potentially trusted, if SW1 is trusted).
- **P3**: Connected to SW3 (potentially trusted, if SW3 is trusted).
- **P6**: Connected to a host (untrusted).

Question 3

What are two roles of the Dynamic Host Configuration Protocol (DHCP)? (Choose two.)
A. The DHCP client maintains a pool of IP addresses it can assign
B. The DHCP server assigns IP addresses without requiring the client to renew them.
C. The DHCP client can request up to four DNS server addresses.
D. The DHCP server offers the ability to exclude specific IP addresses from a pool of IP addresses
E. The DHCP server leases client IP addresses dynamically

The answer

- **A** is wrong because the DHCP client does not manage IP address pools.
   It is the DHCP server, not the client, that maintains and manages the pool of IP addresses from which it assigns addresses to clients
- **B** is wrong because DHCP requires clients to renew leases.
  Clients must renew their leases periodically to continue using the IP addresses, unless an infinite lease time is specifically configured, which is rare and not standard practice
- **C** is wrong because the client can request multiple DNS server addresses, but this is a feature, not a primary role of DHCP.
- **D** is correct because excluding specific IP addresses from the pool is a fundamental DHCP server function.
- **E** is correct because dynamic leasing of IP addresses is the primary role of DHCP.

Question 4 

![img](https://www.examtopics.com/assets/media/exam-media/04300/0043600001.png) 

> R2 plays as a relay and R1 plays as dhcp client

**On R2 (DHCP Relay):**

```
R2> enable
R2# configure terminal
R2(config)# interface GigabitEthernet0/0
R2(config-if)# ip address 192.0.2.2 255.255.255.0
R2(config-if)# no shutdown
R2(config)# interface GigabitEthernet0/1
R2(config-if)# ip address 198.51.100.1 255.255.255.0
R2(config-if)# no shutdown
R2(config)# interface GigabitEthernet0/0
R2(config-if)# ip helper-address 198.51.100.100
```

**On R1 (DHCP Client):**

```
R1> enable
R1# configure terminal
R1(config)# interface FastEthernet0/0
R1(config-if)# ip address dhcp
R1(config-if)# no shutdown
```

Refer to the exhibit. An engineer deploys a topology in which R1 obtains its IP configuration from DHCP. If the switch and DHCP server configurations are complete and correct, which two sets of commands must be configured on R1 and R2 to complete the task? (Choose two.)

- A. 
  R1(config)# interface fa0/0 
  R1(config-if)# ip helper-address 198.51.100.100
- B. ✅
  R2(config)# interface gi0/0 
  R2(config-if)# ip helper-address 198.51.100.100  (左手傳到右手的右手)
- C. ✅
  R1(config)# interface fa0/0 
  R1(config-if)# ip address dhcp 
  R1(config-if)# no shutdown
- D. 
  R2(config)# interface gi0/0 
  R2(config-if)# ip address dhcp
- E. 
  R1(config)# interface fa0/0 
  R1(config-if)# ip helper-address 192.0.2.2

> DHCP across different VLAN also needs helper-address

Question 6. Where does a switch maintain DHCP snooping information?

- 1️⃣❌A. In the CAM table

- B. In the frame forwarding database

- 1️⃣❌C. In the MAC address table

- ✅D. In the binding database

  A DHCP table is built that includes the source MAC address of a device on an untrusted port and the IP address assigned by the DHCP server to that device. The MAC address and IP address are bound together. Therefore, this table is called the DHCP snooping binding table.

>  Keep in mind a CAM table, and a MAC table are the same thing! Therefore, since they are each listed, you can eliminate both as potential answers. One way to remember is that CAM is MAC spelled backward.

Question 7.  A network administrator must enable DHCP services between two sites. What must be configured for the router to pass DHCPDISCOVER messages on to the server?

- A. DHCP Binding
- ✅ B. a DHCP Relay Agent
  In my opinion, answer is: B. Because they ask what is needed "to pass DHCPDISCOVER messages" and this is the role of a DHCP Relay Agent.
- C. DHCP Snooping
- D. a DHCP Pool
- 

Question 8.  Which type of information resides on a DHCP server ?

- A. a list of statically assigned MAC addresses
- ✅ B. a list of the available IP addresses in a pool
- C. a list of public IP addresses and their corresponding names
- D. usernames and passwords for the end users in a domain

````txt
dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8 ➡ Even this is also optional
Router(dhcp-config)# exit
Router(config)# exit
Router# write memory
````



Question 9.  Which command must be entered so that the default gateway is automatically distributed when DHCP is configured on a router?

- A. dns-server
- B. default-router
- C. ip helper-address
- D. default-gateway

Question 10. DRAG DROP - 超級爭議題
Drag and drop the functions of DHCP from the left onto any of the positions on the right. Not all functions are used.

![img](https://www.examtopics.com/assets/media/exam-media/04300/0048400001.png) 

Question 11. When a client and server are not on the `same physical network`, which device is used to forward requests and replies between client
and server for DHCP?

- ✅A. DHCP relay agent
- B. DHCP server
- C. DHCPDISCOVER
- D. DHCPOFFER

when clients and servers are on different VLANs within the same network, they are considered separate broadcast domains, and DHCP messages cannot typically pass between them without assistance.

Here are some scenarios where a client and server might not be on the same physical network:

1. **Different Subnets**: The client and server are in different IP subnets, meaning they are separated by a router.
2. **Different VLANs**: The client and server are on different virtual LANs within the same physical network infrastructure.
3. **Remote Access**: The client is accessing services hosted on a server over the internet or via a virtual private network (VPN).



Question 12. What prevents a workstation from receiving a DHCP address? - [Reference](https://www.examtopics.com/discussions/cisco/view/83127-exam-200-301-topic-1-question-577-discussion/)

- A. STP **Most Voted** ✅
  - The time it takes to get to the Forwarding state might be too long for a client's DHCP process (which starts after the interface on the client becomes 'up'). Using Spanning-Tree PortFast can mitigate this exact issue. So yes, STP can prevent workstations from getting an IP-adress using DHCP.
  - I think its STP, specifically portfast. I found this one the cisco white pages, under the DHCP troubleshooting section. "...verify that the port has STP portfast enabled and trunking/channeling disabled. The default configuration is STP portfast disabled and trunking/channeling auto, if applicable. For the 2900XL/3500XL/2950/3550 switches, STP portfast is the only required configuration. These configuration changes resolve the most common DHCP client issues that occur with an initial installation of a Catalyst switch."
  - Spanning Tree Protocol (STP) can potentially prevent a workstation from receiving a DHCP address if it blocks or disables the port through which DHCP requests are transmitted. STP operates at Layer 2 of the OSI model and is responsible for preventing loops in network topologies by blocking redundant links. If a port is in a blocking state due to STP convergence or a topology change, DHCP requests sent from workstations connected to that port may not reach the DHCP server, resulting in the inability to obtain an IP address dynamically.
- B. VTP
- C. 802.1Q
- D. DTP

Question 13. What is the purpose of the ip address dhcp command?
A. to configure an Interface as a DHCP server
B. to configure an interface as a DHCP helper
C. to configure an interface as a DHCP relay
✅ D. to configure an interface as a DHCP client
