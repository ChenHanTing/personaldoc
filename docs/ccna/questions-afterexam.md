

# TEST Content according to inkling

<img src="https://han.blob.core.windows.net/typora/image-20240715224424796.png" alt="image-20240715224424796" style="zoom:50%;" />   

**Diagram 1:**

- Three routers (R1, R2, R3) connected in a triangle formation.
- A switch (SW1) connected to R2 and R3, assigned to VLAN 15.
- Network segments:
  - R1-R2: 192.168.1.0/30
  - R2-R3: 192.168.2.0/30
  - R3-R1: 192.168.3.0/30
  - R2-SW1: 192.168.4.0/24
  - R3-SW1: 192.168.5.0/24
- OSPF Process ID: 123
- OSPF Area: 0

**Requirements:**

- R1 should be elected as the Primary Router (PR).
- R2 and R3 should be configured to not participate in the primary router election.
- R1, R2, and R3 should form an OSPF (Open Shortest Path First) network.
- OSPF neighbor relationships should not be set globally but individually.

**Tasks:** 

1. Configure R1, R2, and R3 to establish OSPF neighbor relationships using Process ID 123 on their respective interfaces without using the global `network` command.
2. Ensure R1 is elected as the DR and R2, R3 do not participate in the DR/BDR election.

**Implementation:**

Based on the diagram and the requirements provided, here's how to configure the OSPF settings to meet your needs:

1. **Set R1 to be the OSPF DR (Designated Router):**

   This can be done by setting the OSPF priority higher on R1 and setting it lower on R2 and R3. 

   ```bash
   ! Configuration for R1
   interface g0/0
    ip ospf priority 255
   ```

2. **Ensure R2 and R3 do not participate in the DR/BDR election:**

   This can be done by setting the OSPF priority to 0 on R2 and R3.

   ```bash
   ! Configuration for R2
   interface g0/1
    ip ospf priority 0

   ! Configuration for R3
   interface g0/0
    ip ospf priority 0
   ```

3. **Configure OSPF process ID 123 and ensure individual neighbor relationships are set:**

   Here's a basic example of the OSPF configuration on each router:

   ```txt
   ! Configuration for R1
   router ospf 123
    network 192.168.1.0 0.0.0.3 area 0
    network 192.168.3.0 0.0.0.3 area 0
   
   ! Configuration for R2
   router ospf 123
    network 192.168.1.0 0.0.0.3 area 0
    network 192.168.2.0 0.0.0.3 area 0
   
   ! Configuration for R3
   router ospf 123
    network 192.168.2.0 0.0.0.3 area 0
    network 192.168.3.0 0.0.0.3 area 0
   ```

This setup ensures that R1 will always be the Designated Router (DR), and R2 and R3 will not participate in the election. Additionally, OSPF neighbor relationships are formed only between the specified interfaces. If you need more specific details or further assistance, feel free to ask!

<img src="https://han.blob.core.windows.net/typora/image-20240715224404029.png" alt="image-20240715224404029" style="zoom:40%;" />     

**Diagram 2:**

- Two switches (SW1 and SW2) connected with an EtherChannel.
- Two PCs (PC1 and PC2) each connected to SW1 and SW2 respectively.
- Network segments:
  - SW1 - SW2 EtherChannel: 10.0.0.0/30
  - PC1: 10.0.1.0/24
  - PC2: 10.0.2.0/24

**Tasks:**

1. Configure SW1 and SW2 to form a vendor-neutral EtherChannel.
2. Verify that PC1 can ping PC2 through the EtherChannel.

To configure SW1 and SW2 to form a vendor-neutral EtherChannel, you can use Link Aggregation Control Protocol (LACP), which is part of the IEEE 802.3ad standard. Here's how you can configure the switches:

**On SW1:**

1. Create the EtherChannel group using LACP.
2. Configure the interfaces that will participate in the EtherChannel.

```txt
! SW1 Configuration
interface range Ethernet0/0 - 1
  channel-group 1 mode active
  exit

interface Port-channel1
  switchport mode trunk
  exit
```

**On SW2:**

1. Create the EtherChannel group using LACP.
2. Configure the interfaces that will participate in the EtherChannel.

```txt
! SW2 Configuration
interface range Ethernet0/0 - 1
  channel-group 1 mode active
  exit

interface Port-channel1
  switchport mode trunk
  exit
```

**Verification**

**Ensure that the EtherChannel is established:**

```bash
! On both SW1 and SW2
show etherchannel summary
```

**Ping Test from PC1 to PC2:** Ensure that the PCs are properly configured with IP addresses and that they can ping each other. 

PC1:

```bash
ping 10.0.2.x
```

PC2:

```bash
ping 10.0.1.x
```

**Additional Configuration**

Ensure the VLANs are properly configured and that both switches have the correct VLANs allowed on the trunk ports.

```txt
! SW1 Configuration
interface Port-channel1
  switchport trunk allowed vlan add 1,10,20
  exit
```

```txt
! SW2 Configuration
interface Port-channel1
  switchport trunk allowed vlan add 1,10,20
  exit
```

With these configurations, SW1 and SW2 should form a vendor-neutral EtherChannel, and PC1 should be able to ping PC2 through the aggregated logical link.