---
sidebar_position: 6
---



# EtherChannel

**EtherChannel** is a technology used to combine multiple physical Ethernet links into a single logical link, increasing bandwidth and providing redundancy. It can use different protocols, primarily PAgP (Port Aggregation Protocol) and LACP (Link Aggregation Control Protocol).

**PAgP (Port Aggregation Protocol)**:

- Cisco proprietary.
- Automatically forms an EtherChannel by negotiating settings between devices.

**LACP (Link Aggregation Control Protocol)**:

- IEEE 802.3ad standard.
- Allows automatic formation and maintenance of EtherChannel with devices from different vendors.

To configure EtherChannel on Cisco switches, we use interface configuration commands. Here, we'll focus on both PAgP and LACP protocols with a focus on the command line.

#### Example Commands:

**Using PAgP:**

```plaintext
SW2(config)# interface range gigabitEthernet 0/1 - 2
SW2(config-if-range)# channel-group 1 mode desirable
SW2(config-if-range)# exit
SW2(config)# interface port-channel 1
SW2(config-if)# switchport mode trunk
SW2(config-if)# end
SW2# copy running-config startup-config
```

**Using LACP:**

```plaintext
SW2(config)# interface range gigabitEthernet 0/1 - 2
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# exit
SW2(config)# interface port-channel 1
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk native vlan 15
SW2(config-if)# end
SW2# copy running-config startup-config
```

### Key Points:

- **EtherChannel Modes**:
  - **PAgP**: Auto, Desirable.
  - **LACP**: Passive, Active.
- **Port Configuration**: Ensure port configurations match on both ends.
- **Verification**: Use commands like `show etherchannel summary` to verify configuration.

### Real Example

![image-20240531091906335](https://ntpe.cht.com.tw/uploads/images/image-20240531091906335.png)

Sure, let's break down the configuration steps provided in the image for setting up an LACP EtherChannel between two switches (SW1 and SW2) with a native VLAN 15.

### Configuration Steps:

1. **Configure VLAN 15:**
   

  Create VLAN 15 on both switches.

2. **Configure EtherChannel on SW1:**
   
    Enable EtherChannel using LACP (Link Aggregation Control Protocol).

    Use interfaces `Ethernet0/0` and `Ethernet0/1`.
    
3. **Configure Trunk Links:**
   
    Set the EtherChannel as a trunk link.
    
    Configure the trunk link with 802.1Q encapsulation.
    
    Set the native VLAN of the EtherChannel to VLAN 15.

Configuration for SW1:

```plaintext
SW1(config)# conf terminal
SW1(config)# vlan 15
SW1(config)# exit
SW1(config)# interface range eth0/0 - 1
SW1(config-if-range)# channel-group 1 mode active  // LACP
SW1(config-if-range)# exit
SW1(config)# interface port-channel 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 15
SW1(config-if)# end
SW1# copy run start
```

Configuration for SW2:

```plaintext
SW2(config)# conf terminal
SW2(config)# vlan 15
SW2(config)# exit
SW2(config)# interface range eth0/0 - 1
SW2(config-if-range)# channel-group 1 mode active  // LACP
SW2(config-if-range)# exit
SW2(config)# interface port-channel 1
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk native vlan 15
SW2(config-if)# end
SW2# copy run start
```

**VLAN 15 Configuration:**

- `vlan 15` creates VLAN 15.

**EtherChannel Configuration:**

- `interface range eth0/0 - 1` selects the interfaces to be included in the EtherChannel.
- `channel-group 1 mode active` configures LACP mode active, enabling the EtherChannel.

**Trunk Configuration:**

- `interface port-channel 1` selects the EtherChannel interface.
- `switchport trunk encapsulation dot1q` sets the trunk encapsulation to 802.1Q.
- `switchport mode trunk` sets the port to trunk mode.
- `switchport trunk native vlan 15` sets the native VLAN to 15.

These configurations ensure that the EtherChannel is correctly set up between the two switches using LACP, with VLAN 15 as the native VLAN. The trunk link is properly configured to handle tagged traffic and untagged traffic on the native VLAN.

