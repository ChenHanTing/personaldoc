---
sidebar_position: 6
---



# IP

````txt
Tip 1.
Multicast - FF
Global Unicast - 2/3
Unique Local - FC/FD
Link Local - FE80

Tip 2.
All-nodes link-local multicast group FF02::1
All-routers link-local multicast group FF02::2
````

So question 1. When configuring IPv6 on an interface, which two IPv6 multicast groups are joined? (Choose two.)

- A. 2000::/3
- B. 2002::5
- C. FC00::/7
- ✅D. FF02::1
- ✅E. FF02::2

### Setting ipv4 and ipv6 simultaneously

The following is an example for CCNA lab

![image-20240530120332099](https://ntpe.cht.com.tw/uploads/images/image-20240530120332099.png) 

Let's address each task and provide the necessary configuration commands for IPv4 and IPv6 connectivity between the routers R1 and R2.

- Task 1: Configure the next usable /28 subnet from the 192.168.180.0/24 range
  The first subnet from 192.168.180.0/24 with a /28 mask is 192.168.180.0/28, so the next subnet is 192.168.180.16/28.
- Task 2: Configure R1 with the first usable host address
  For the subnet 192.168.180.16/28, the first usable IP address is 192.168.180.17.
- Task 3: Configure R2 with the last usable host address
  For the subnet 192.168.180.16/28, the last usable IP address is 192.168.180.30.
- Task 4: Configure the routers with the IPv6 addresses
  The IPv6 subnet provided is 2001:0db8:acca::/64.
- Task 5: Ensure ping works between the routers on both IPv4 and IPv6 addresses

**R1 Configuration:**
```plaintext
R1#conf t
R1(config)#ipv6 unicast-routing
R1(config)#interface e0/1
R1(config-if)# ip address 192.168.180.1 255.255.255.240
R1(config-if)#ipv6 address 2001:0db8:acca::1/64
R1(config-if)#no shutdown
R1(config-if)#end
R1#wr
```

**R2 Configuration:**
```plaintext
R2#conf t
R2(config)#ipv6 unicast-routing
R2(config)#interface e0/1
R2(config-if)# ip address 192.168.180.14 255.255.255.240
R2(config-if)#ipv6 address 2001:0db8:acca::2/64
R2(config-if)#no shutdown
R2(config-if)#end
R2#wr
```

If you don't set the `ipv6 unicast-routing` command on a Cisco router, the router will not be able to forward IPv6 packets between interfaces.

Using `::1` and `::2` in the IPv6 addresses for R1 and R2 respectively is a convention to assign the first and second usable addresses in the specified subnet. In IPv6, `::1` is typically used to represent the first host address and `::2` for the second host address. This mirrors the logic used in IPv4 for assigning the first and last usable addresses in a subnet.

To verify connectivity, you can use the `ping` command on both routers.

**Verify IPv4 Connectivity:**

```plaintext
R1# ping 192.168.180.30
R2# ping 192.168.180.17
```

**Verify IPv6 Connectivity:**

```plaintext
R1# ping ipv6 2001:0db8:acca::2
R2# ping ipv6 2001:0db8:acca::1
```

**Summary of Configuration Commands**

**R1:**
```plaintext
en
config t
interface e0/1
ip address 192.168.180.17 255.255.255.240
ipv6 address 2001:0db8:acca::1/64
no shutdown
end
```

**R2:**
```plaintext
en
config t
interface e0/1
ip address 192.168.180.30 255.255.255.240
ipv6 address 2001:0db8:acca::2/64
no shutdown
end
```

These configurations should establish the required IPv4 and IPv6 connectivity between R1 and R2 as specified in the tasks.

### Comparing between `ip route` and `ip address` Command

The `ip address` and `ip route` commands serve different purposes and operate at different levels within a router's configuration, which explains why they have different requirements for specifying addresses.

**`ip address` Command**

- **Purpose**: The `ip address` command is used to assign an IP address to a specific interface on a router or a switch.
- **Context**: This command is issued in interface configuration mode.
- **Parameters**:
  - `IP Address`: The address you want to assign to the interface.
  - `Subnet Mask`: The subnet mask for the IP address.

```plaintext
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.0
```

Here, `192.168.1.1` is the IP address being assigned to the `GigabitEthernet0/0` interface with a subnet mask of `255.255.255.0`.

**`ip route` Command**

- **Purpose**: The `ip route` command is used to create static routes in the router's routing table. It tells the router how to forward packets to destinations that are not directly connected to the router.
- **Context**: This command is issued in global configuration mode.
- **Parameters**:
  - `Destination Network`: The network or host address that the route applies to.
  - `Subnet Mask`: The subnet mask for the destination network.
  - `Next-Hop IP Address or Exit Interface`: Specifies where to forward the packets (either an IP address of the next-hop router or an interface on the local router).

```plaintext
ip route 192.168.2.0 255.255.255.0 10.1.1.1
```

This command creates a route to the `192.168.2.0/24` network, directing packets to the next-hop router with IP address `10.1.1.1`.

**Why `ip address` Doesn’t Need a Destination**

- **Interface Configuration**: The `ip address` command is used within the context of a specific interface. The command assigns an IP address to the interface itself, so there is no need to specify a destination. The context of the interface provides all the necessary information.
- **Single Address Assignment**: The purpose of the `ip address` command is to assign an IP address to a single interface, so it doesn't require a destination network or next-hop information.

**Why `ip route` Needs a Destination**

- **Routing Decisions**: The `ip route` command configures the router's routing table, which determines how packets should be forwarded based on their destination IP addresses.
- **Next-Hop Information**: For the router to forward packets correctly, it needs to know the destination network and how to reach it (i.e., the next-hop IP address or the exit interface).
- **Multiple Routes**: A router can have multiple routes to different destinations, so each `ip route` command must specify the destination network to differentiate between them.

Summary

| Command          | Purpose                                    | Context                      | Example                                       |
| ---------------- | ------------------------------------------ | ---------------------------- | --------------------------------------------- |
| **`ip address`** | Assigns an IP address to an interface      | Interface configuration mode | `ip address 192.168.1.1 255.255.255.0`        |
| **`ip route`**   | Creates static routes in the routing table | Global configuration mode    | `ip route 192.168.2.0 255.255.255.0 10.1.1.1` |

### Other questions

Which command automatically generates an IPv6 address from a specified IPv6 prefix and MAC address of an interface? - [Reference](https://www.examtopics.com/discussions/cisco/view/19795-exam-200-301-topic-1-question-10-discussion/)
A. ipv6 address dhcp 
✅B. ipv6 address 2001:DB8:5:112::/64 eui-64
✅C. ipv6 address autoconfig 
D. ipv6 address 2001:DB8:5:112::2/64 link-local

For B. This command uses the EUI-64 format to create the interface identifier part of the IPv6 address from the interface's MAC address.

````txt
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ipv6 address 2001:DB8:5:112::/64 eui-64
````

For Option C, the option **C. `ipv6 address autoconfig`** is used to enable Stateless Address Autoconfiguration (SLAAC) on an interface, allowing the interface to automatically generate an IPv6 address using the network prefix advertised by a local router, typically in a Router Advertisement (RA) message.

````txt
Router> enable
Router# configure terminal
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ipv6 address autoconfig
Router(config-if)# no shutdown
````

With this configuration, the interface will listen for Router Advertisement (RA) messages from local routers and use the advertised prefix, along with its own MAC address, to generate a global unicast IPv6 address. This method does not require manual prefix specification as with the `eui-64` option.

> So even ipv6 address autoconfig uses EUI-64 format implicitly?

when we use the `ipv6 address autoconfig` command, the router interface will use Stateless Address Autoconfiguration (SLAAC) to automatically generate an IPv6 address. This process typically involves using the EUI-64 format to create the interface identifier part of the address from the MAC address of the interface.

````txt
CCNA 200-301 Official Cert Guide, Volume 1
Chapter 24: Implementing IPv6 Addressing on Routers

ipv6 address address/prefix-length: Static configuration of a specific address
ipv6 address prefix/prefix-length eui-64: Static configuration of a specific prefix and
prefix length, with the router calculating the interface ID using EUI-64 rules
ipv6 address dhcp: Dynamic learning on the address and prefix length using DHCP
ipv6 address autoconfig: Dynamic learning of the prefix and prefix length, with the router
calculating the interface ID using EUI-64 rules (SLAAC)
````

People who say C is right

- C is correct Keyword is automatically (dynamically), B is static not dynamic.
- The correct command to automatically generate an IPv6 address from a specified IPv6 prefix and MAC address of an interface is the "ipv6 address autoconfig" command.



Question ([link](https://www.examtopics.com/discussions/cisco/view/99033-exam-200-301-topic-1-question-904-discussion/)). Refer to the exhibit. A network engineer must configure the link with these requirements:

![](https://img.examtopics.com/200-301/image47.png)  

• Consume as few IP addresses as possible.
• Leave at least two additional useable IP addresses for future growth.

Which set of configurations must be applied? 

- A. R1(config-if)#ip address 10.10.10.1 255.255.255.252
  R2(config-if)#ip address 10.10.10.2 255.255.255.252
- B. R1(config-if)#ip address 10.10.10.1 255.255.255.240
  R2(config-if)#ip address 10.10.10.12 255.255.255.240
- C. R1(config-if)#ip address 10.10.10.1 255.255.255.248
  R2(config-if)#ip address 10.10.10.4 255.255.255.248 ✅
- D. R1(config-if)#ip address 10.10.10.1 255.255.255.0
  R2(config-if)#ip address 10.10.10.5 255.255.255.0



Question ([link](https://www.examtopics.com/discussions/cisco/view/128507-exam-200-301-topic-1-question-1222-discussion/)) regarding VoIP
