---
sidebar_position: 6
---



# VLAN (Virtual Local Area Network)

A VLAN is a logical subgroup within a local area network (LAN) that combines a group of devices from different physical LAN segments. VLANs are implemented to improve network management and security by segmenting the network into distinct broadcast domains.

### Types of VLANs:

1. **Default VLAN**: Typically VLAN 1, where all switch ports belong by default.
2. **Data VLAN**: Used to carry user-generated data. Each VLAN is a separate broadcast domain.
3. **Voice VLAN**: Specifically designed for VoIP traffic to ensure Quality of Service (QoS).
4. **Management VLAN**: Used to manage network devices, ensuring that management traffic is separate from user data traffic.
5. **Native VLAN**: Used for untagged traffic on a trunk port. Typically VLAN 1 by default but can be changed.

### VLAN Configuration

1. **Creating a VLAN**:

   ```
   Switch(config)# vlan 10
   Switch(config-vlan)# name SALES
   ```

2. **Assigning a Port to a VLAN**:

   ```
   Switch(config)# interface gigabitEthernet 0/1
   Switch(config-if)# switchport mode access
   Switch(config-if)# switchport access vlan 10
   ```

3. **Configuring a Trunk Port** (to carry traffic for multiple VLANs):

   ```
   Switch(config)# interface gigabitEthernet 0/24
   Switch(config-if)# switchport mode trunk
   Switch(config-if)# switchport trunk allowed vlan 10,20
   ```

### VLAN Trunking Mode Interactions and Configurations

The following matrix shows whether a trunk link is formed (`Yes`) or not (`No`) based on the combinations of local and remote port modes:

| Local Port Mode \ Remote Port Mode | Access | Trunk | Dynamic Auto | Dynamic Desirable |
| ---------------------------------- | ------ | ----- | ------------ | ----------------- |
| **Access**                         | No     | No    | No           | No                |
| **Trunk**                          | No     | Yes   | Yes          | Yes               |
| **Dynamic Auto**                   | No     | Yes   | No           | Yes               |
| **Dynamic Desirable**              | No     | Yes   | Yes          | Yes               |

Descriptions of Port Modes:

- **Access**: Configures the port to carry traffic for a single VLAN. No VLAN tagging is performed.
- **Trunk**: Configures the port to carry traffic for multiple VLANs, with VLAN tags.
- **Dynamic Auto**: Passively waits to form a trunk link. Becomes a trunk if the other end initiates trunking.
- **Dynamic Desirable**: Actively tries to form a trunk link. Negotiates trunking with the other end.

Here’s a chart that describes the interactions between different switch port modes to determine if a trunk link is formed or not. This chart includes the combinations of modes on two connected switch ports and the resulting trunking behavior.

| Local Port Mode       | Remote Port Mode  | Trunk Formed? | Behavior Description                                         |
| --------------------- | ----------------- | ------------- | ------------------------------------------------------------ |
| **Access**            | Access            | No            | Both ports operate as access ports, and no trunk is formed.  |
| **Access**            | Trunk             | No            | The trunk port sends tagged frames, but the access port does not recognize them, so no trunk is formed. |
| **Access**            | Dynamic Auto      | No            | The access port does not attempt to form a trunk, so no trunk is formed. |
| **Access**            | Dynamic Desirable | No            | The access port does not attempt to form a trunk, so no trunk is formed. |
| **Trunk**             | Access            | No            | The trunk port sends tagged frames, but the access port does not recognize them, so no trunk is formed. |
| **Trunk**             | Trunk             | Yes           | Both ports are configured as trunk ports, so a trunk is formed. |
| **Trunk**             | Dynamic Auto      | Yes           | The trunk port actively attempts to form a trunk, and the auto port agrees to form a trunk. |
| **Trunk**             | Dynamic Desirable | Yes           | The trunk port actively attempts to form a trunk, and the desirable port also actively attempts to form a trunk. |
| **Dynamic Auto**      | Access            | No            | The auto port does not attempt to form a trunk, so no trunk is formed. |
| **Dynamic Auto**      | Trunk             | Yes           | The auto port agrees to form a trunk when the remote port is configured as a trunk. |
| **Dynamic Auto**      | Dynamic Auto      | No            | Both ports are in auto mode and do not actively attempt to form a trunk, so no trunk is formed. |
| **Dynamic Auto**      | Dynamic Desirable | Yes           | The auto port agrees to form a trunk when the remote port actively attempts to form a trunk (desirable mode). |
| **Dynamic Desirable** | Access            | No            | The desirable port attempts to form a trunk, but the access port does not agree, so no trunk is formed. |
| **Dynamic Desirable** | Trunk             | Yes           | The desirable port actively attempts to form a trunk, and the trunk port also agrees, so a trunk is formed. |
| **Dynamic Desirable** | Dynamic Auto      | Yes           | The desirable port actively attempts to form a trunk, and the auto port agrees to form a trunk. |
| **Dynamic Desirable** | Dynamic Desirable | Yes           | Both ports actively attempt to form a trunk, so a trunk is formed. |

### Real Example

![image-20240530160617830](https://ntpe.cht.com.tw/uploads/images/image-20240530160617830.png)

### Tasks Overview:

1. **Configure SW-1 with VLAN 15 and label it exactly as OPS.**
2. **Configure SW-2 with VLAN 66 and label it exactly as ENGINEERING.**
3. **Configure the switch port connecting to PC1 (SW-1).**
4. **Configure the switch port connecting to PC2 (SW-2).**
5. **Configure the E0/2 connections on SW-1 and SW-2 for neighbor discovery using the vendor-neutral standard protocol (lldp) and ensure that E0/0 on both switches uses the Cisco proprietary protocol (cdp).**

**Vendor-Neutral Standard Protocol**

The most common vendor-neutral protocol for neighbor discovery is **LLDP (Link Layer Discovery Protocol)**. LLDP is defined by the IEEE as 802.1AB and is supported by many networking vendors. It allows network devices to advertise information about themselves to other devices on the network.

**Cisco Proprietary Protocol**

The Cisco proprietary protocol for neighbor discovery is **CDP (Cisco Discovery Protocol)**. CDP is Cisco-specific and allows Cisco devices to share information about themselves with other directly connected Cisco devices.

### Configuration

SW-1 Configuration:

```
configure terminal

vlan 15
 name OPS

interface e0/1
 switchport mode access
 switchport access vlan 15

interface e0/0
 switchport trunk encapsulation dot1q
 switchport mode trunk
 cdp enable

interface e0/2
 switchport trunk encapsulation dot1q
 switchport mode trunk
 lldp transmit
 lldp receive
```

SW-2 Configuration:

```
configure terminal

vlan 66
 name ENGINEERING

interface e0/1
 switchport mode access
 switchport access vlan 66

interface e0/0
 switchport trunk encapsulation dot1q
 switchport mode trunk
 cdp enable

interface e0/2
 switchport trunk encapsulation dot1q
 switchport mode trunk
 lldp transmit
 lldp receive
```

The `lldp transmit` and `lldp receive` commands serve a similar purpose to the `cdp enable` command but for different protocols.

LLDP (Link Layer Discovery Protocol)

- **lldp transmit:** Enables LLDP transmissions on the interface, allowing the switch to send LLDP advertisements.
- **lldp receive:** Enables LLDP reception on the interface, allowing the switch to receive LLDP advertisements from other devices.

CDP (Cisco Discovery Protocol)

- **cdp enable:** Enables CDP on the interface, allowing the switch to both send and receive CDP advertisements.

LLDP Configuration on an Interface:

```plaintext
interface e0/2
 lldp transmit
 lldp receive
```

CDP Configuration on an Interface:

```plaintext
interface e0/0
 cdp enable
```

`lldp transmit` and `lldp receive` are used to enable LLDP on an interface for transmitting and receiving LLDP advertisements, respectively, while `cdp enable` is used to enable CDP on an interface for both transmitting and receiving CDP advertisements. This allows the switch to discover and be discovered by other network devices using the respective protocols.

### Purpose of `switchport trunk encapsulation dot1q`

The `switchport trunk encapsulation dot1q` command explicitly sets the encapsulation type on a trunk port to 802.1Q. This is important in ensuring that VLAN information is correctly tagged and recognized by other devices on the network.

Static Trunk Configuration:

```
interface e0/0
 switchport trunk encapsulation dot1q
 switchport mode trunk
```

Dynamic Desirable Mode:

```
interface e0/0
 switchport trunk encapsulation dot1q
 switchport mode dynamic desirable
```

Dynamic Auto Mode:

```
interface e0/0
 switchport trunk encapsulation dot1q
 switchport mode dynamic auto
```

If you configure the interface with the commands `switchport mode trunk` and `cdp enable` without specifying the encapsulation type, the behavior will depend on the type and model of the switch you are using.

### Configuration Example Without Explicit Encapsulation

Behavior on Different Switch Models

1. **Older Cisco Switches (e.g., Catalyst 2950, 3550):**
   - Older Cisco switches support both 802.1Q (dot1q) and Cisco's proprietary ISL encapsulation methods.
   - On these switches, it is necessary to specify the trunk encapsulation type explicitly before setting the interface to trunk mode.
   - If you omit the encapsulation command, the switch may not allow you to set the port to trunk mode.
2. **Newer Cisco Switches (e.g., Catalyst 2960, 3650, 3850, 9300):**
   - Newer Cisco switches typically support only 802.1Q encapsulation for VLAN tagging and do not require specifying the encapsulation type explicitly.
   - On these switches, the default and only supported trunk encapsulation is 802.1Q.
   - Therefore, the command `switchport mode trunk` will automatically configure the port to use 802.1Q encapsulation.