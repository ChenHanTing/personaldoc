# CCNA June 29th

## LAB1

> There are 3 switches. They connect altogether through trunk. Each switch is also connect to diff devices. From left to right, the switch connect to one vlan303 pc, one vlan202 pc, and (one vlan202+one vlan 303) pcs. How to do with cisco

To configure the three switches and their connections to the devices as described, follow these steps. The switches are connected via trunk ports, and each switch has PCs connected to specific VLANs. Here’s how to set up the configuration:

#### Switch 1 Configuration (Left)

1. **Create VLANs**
2. **Assign Ports to VLANs**
3. **Configure Trunk Ports**

```bash
# Enter global configuration mode
configure terminal

# Create VLAN 303
vlan 303
name VLAN303

# Exit VLAN configuration mode
exit

# Assign port to VLAN 303
interface FastEthernet0/1
switchport mode access
switchport access vlan 303

# Configure trunk port to Switch 2
interface FastEthernet0/24
switchport mode trunk
switchport trunk allowed vlan 202,303

# Exit interface configuration mode
exit
exit
```

#### Switch 2 Configuration (Middle)

1. **Create VLANs**
2. **Assign Ports to VLANs**
3. **Configure Trunk Ports**

```bash
# Enter global configuration mode
configure terminal

# Create VLAN 202 and VLAN 303
vlan 202
name VLAN202
vlan 303
name VLAN303

# Exit VLAN configuration mode
exit

# Assign port to VLAN 202
interface FastEthernet0/2
switchport mode access
switchport access vlan 202

# Configure trunk ports to Switch 1 and Switch 3
interface FastEthernet0/23
switchport mode trunk
switchport trunk allowed vlan 202,303

interface FastEthernet0/24
switchport mode trunk
switchport trunk allowed vlan 202,303

# Exit interface configuration mode
exit
exit
```

#### Switch 3 Configuration (Right)

1. **Create VLANs**
2. **Assign Ports to VLANs**
3. **Configure Trunk Ports**

```bash
# Enter global configuration mode
configure terminal

# Create VLAN 202 and VLAN 303
vlan 202
name VLAN202
vlan 303
name VLAN303

# Exit VLAN configuration mode
exit

# Assign port to VLAN 202
interface FastEthernet0/3
switchport mode access
switchport access vlan 202

# Assign port to VLAN 303
interface FastEthernet0/4
switchport mode access
switchport access vlan 303

# Configure trunk port to Switch 2
interface FastEthernet0/24
switchport mode trunk
switchport trunk allowed vlan 202,303

# Exit interface configuration mode
exit
exit
```

**Switch 1 (Left)**:

- Port Fa0/1: VLAN 303 (PC)
- Port Fa0/24: Trunk to Switch 2 (VLANs 202, 303)

**Switch 2 (Middle)**:

- Port Fa0/2: VLAN 202 (PC)
- Port Fa0/23: Trunk to Switch 1 (VLANs 202, 303)
- Port Fa0/24: Trunk to Switch 3 (VLANs 202, 303)

**Switch 3 (Right)**:

- Port Fa0/3: VLAN 202 (PC)
- Port Fa0/4: VLAN 303 (PC)
- Port Fa0/24: Trunk to Switch 2 (VLANs 202, 303)

## LAB2

> how bout 2 switches connect as etherchannel and the number is 44. it'll be connected through lacp, and the vlan name should be "monitoring"
>
> i guess it's "Configure an LACP EtherChannel and number it as 44" not vlan 44. I think it's fine, it doesn't specify vlan number. it just want to name vlan "monitoring"

Let's configure an LACP EtherChannel and number it as 44, and create a VLAN named "monitoring" without specifying a VLAN number.

#### Switch 1 Configuration

1. **Create VLAN and Name it "Monitoring"**
2. **Configure LACP EtherChannel and Number it 44**
3. **Assign Ports to EtherChannel**
4. **Configure Trunking on the EtherChannel**

```bash
# Enter global configuration mode
configure terminal

# Create VLAN and name it "monitoring"
vlan 100
name monitoring

# Exit VLAN configuration mode
exit

# Configure EtherChannel using LACP
# Assume ports Fa0/1 and Fa0/2 are used for EtherChannel
interface range FastEthernet0/1 - 2
channel-group 44 mode active
switchport mode trunk

# Exit interface configuration mode
exit

# Configure the EtherChannel port
interface Port-channel44
switchport mode trunk

# Exit interface configuration mode
exit
exit
```

#### Switch 2 Configuration

1. **Create VLAN and Name it "Monitoring"**
2. **Configure LACP EtherChannel and Number it 44**
3. **Assign Ports to EtherChannel**
4. **Configure Trunking on the EtherChannel**

```bash
# Enter global configuration mode
configure terminal

# Create VLAN and name it "monitoring"
vlan 100
name monitoring

# Exit VLAN configuration mode
exit

# Configure EtherChannel using LACP
# Assume ports Fa0/1 and Fa0/2 are used for EtherChannel
interface range FastEthernet0/1 - 2
channel-group 44 mode active
switchport mode trunk

# Exit interface configuration mode
exit

# Configure the EtherChannel port
interface Port-channel44
switchport mode trunk

# Exit interface configuration mode
exit
exit
```

**Switch 1**:

- Ports Fa0/1 and Fa0/2: Assigned to EtherChannel 44 (LACP, active mode)
- Port-channel 44: Configured as a trunk
- VLAN 100 named "monitoring"

**Switch 2**:

- Ports Fa0/1 and Fa0/2: Assigned to EtherChannel 44 (LACP, active mode)
- Port-channel 44: Configured as a trunk
- VLAN 100 named "monitoring"

This configuration sets up an EtherChannel using LACP on ports Fa0/1 and Fa0/2 on both switches, numbered as 44. The EtherChannel is configured as a trunk. A VLAN named "monitoring" is created without specifying a VLAN number, but using VLAN 100 as an example. Adjust the VLAN number as needed.

The number 100 was used as an example and is not special in any way. You can choose any VLAN number that suits your network requirements. Below is the revised configuration, allowing you to specify your preferred VLAN number for the VLAN named "monitoring."

## LAB 3

<img src="https://han.blob.core.windows.net/typora/image-20240630105234494.png" alt="image-20240630105234494" style="zoom:50%;" /> 

> There are 2 router connect together with 2 lines. one is for dp and the other is for bdp. R1 connects to R3 and R3 connects to the internet. R2 connects to a switch which i think this switch will connnect to one PC and one VoIP. How can i provision?

To provision a network with the described setup, follow these steps to configure the routers, switches, and connections. Here’s the detailed configuration process:

- R1 and R2 are connected with two lines (one for primary (dp) and one for backup (bdp)).
- R1 connects to R3.
- R3 connects to the internet.
- R2 connects to a switch, which connects to one PC and one VoIP device.

Assumptions:

- R1 and R2 use Ethernet for primary and backup connections.
- IP addressing scheme:
  - R1 to R2: 10.0.1.0/30 (dp) and 10.0.2.0/30 (bdp)
  - R1 to R3: 10.0.3.0/30
  - R2 to Switch: 192.168.1.0/24
  - R3 to Internet: 203.0.113.0/30

**R1 Configuration:**

1. **Configure Interfaces**
2. **Set up Routing**
3. **Configure HSRP for Redundancy (if applicable)**

```bash
# Enter global configuration mode
configure terminal

# Configure interfaces to R2
interface GigabitEthernet0/0
ip address 10.0.1.1 255.255.255.252
no shutdown

interface GigabitEthernet0/1
ip address 10.0.2.1 255.255.255.252
no shutdown

# Configure interface to R3
interface GigabitEthernet0/2
ip address 10.0.3.1 255.255.255.252
no shutdown

# Configure static routes
ip route 192.168.1.0 255.255.255.0 10.0.1.2
ip route 192.168.1.0 255.255.255.0 10.0.2.2 10

# Exit configuration mode
exit
```

**R2 Configuration:**

1. **Configure Interfaces**
2. **Set up Routing**
3. **Configure HSRP for Redundancy (if applicable)**

```bash
# Enter global configuration mode
configure terminal

# Configure interfaces to R1
interface GigabitEthernet0/0
ip address 10.0.1.2 255.255.255.252
no shutdown

interface GigabitEthernet0/1
ip address 10.0.2.2 255.255.255.252
no shutdown

# Configure interface to switch
interface GigabitEthernet0/2
ip address 192.168.1.1 255.255.255.0
no shutdown

# Configure static routes
ip route 0.0.0.0 0.0.0.0 10.0.1.1
ip route 0.0.0.0 0.0.0.0 10.0.2.1 10

# Exit configuration mode
exit
```

**R3 Configuration:**

1. **Configure Interfaces**
2. **Set up Routing**

```bash
# Enter global configuration mode
configure terminal

# Configure interface to R1
interface GigabitEthernet0/0
ip address 10.0.3.2 255.255.255.252
no shutdown

# Configure interface to the internet
interface GigabitEthernet0/1
ip address 203.0.113.1 255.255.255.252
no shutdown

# (Optional) Configure static route to the 192.168.1.0/24 network if needed
ip route 192.168.1.0 255.255.255.0 10.0.3.1

# Configure default route to the internet
ip route 0.0.0.0 0.0.0.0 203.0.113.2

# Exit configuration mode
exit
```

**Switch Configuration:** **Configure VLANs and Assign Ports**

```bash
# Enter global configuration mode
configure terminal

# Create VLAN 10 for data
vlan 10
name Data

# Create VLAN 20 for VoIP
vlan 20
name VoIP

# Exit VLAN configuration mode
exit

# Assign ports to VLANs
interface FastEthernet0/1
switchport mode access
switchport access vlan 10
no shutdown

interface FastEthernet0/2
switchport mode access
switchport voice vlan 20
no shutdown

# Configure the uplink port to R2
interface FastEthernet0/24
switchport mode trunk
no shutdown

# Exit configuration mode
exit
```

**Summary:**

- **R1**: Connects to R2 with primary (dp) and backup (bdp) lines, and connects to R3.
- **R2**: Connects to R1 with primary and backup lines, and connects to the switch.
- **R3**: Connects to R1 and the internet.
- **Switch**: Configured with VLANs for Data (PC) and VoIP, with trunk port connected to R2.
