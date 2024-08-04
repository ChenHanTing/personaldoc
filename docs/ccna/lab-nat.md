---
sidebar_position: 6
---

# NAT

Network Address Translation (NAT) is a process used in routers to map private IP addresses to public IP addresses and vice versa. This allows multiple devices on a local network to access the internet using a single public IP address. NAT is also used for various other purposes, such as conserving the global IP address space and enhancing network security.

### Types of NAT

NAT is a vital function in modern networking for IP address management and network security. By using Cisco IOS commands, NAT can be configured in different modes to suit various network requirements:

1. **Static NAT**: Maps a single private IP address to a single public IP address. This is a one-to-one mapping.
2. **Dynamic NAT**: Maps a private IP address to a public IP address from a pool of public IP addresses. This is a many-to-many mapping. This is for many-to-many IP address mapping using a pool of public IP addresses.
3. **PAT (Port Address Translation)**: Also known as NAT Overload, maps multiple private IP addresses to a single public IP address by using different ports. This is a many-to-one mapping. This is for many-to-one IP address mapping using port numbers.

#### Static NAT
Maps a single private IP address to a single public IP address.

**Configuration Example**:
```plaintext
R1#conf t
R1(config)#ip nat inside source static 192.168.1.10 203.0.113.10
R1(config)#interface GigabitEthernet0/0
R1(config-if)#ip nat inside
R1(config-if)#exit
R1(config)#interface GigabitEthernet0/1
R1(config-if)#ip nat outside
R1(config-if)#end
```

#### Dynamic NAT
Maps private IP addresses to a pool of public IP addresses.

**Configuration Example**:
```plaintext
R1#conf t
R1(config)#ip nat pool PUBLIC_POOL 203.0.113.20 203.0.113.30 netmask 255.255.255.0
R1(config)#access-list 1 permit 192.168.1.0 0.0.0.255
R1(config)#ip nat inside source list 1 pool PUBLIC_POOL
R1(config)#interface GigabitEthernet0/0
R1(config-if)#ip nat inside
R1(config-if)#exit
R1(config)#interface GigabitEthernet0/1
R1(config-if)#ip nat outside
R1(config-if)#end
```

#### PAT (Port Address Translation)
Maps multiple private IP addresses to a single public IP address by using different ports.

**Configuration Example**:
```plaintext
R1#conf t
R1(config)#access-list 1 permit 192.168.1.0 0.0.0.255
R1(config)#ip nat inside source list 1 interface GigabitEthernet0/1 overload
R1(config)#interface GigabitEthernet0/0
R1(config-if)#ip nat inside
R1(config-if)#exit
R1(config)#interface GigabitEthernet0/1
R1(config-if)#ip nat outside
R1(config-if)#end
```

### Brief Description of NAT Commands

- **ip nat inside source static**: Configures static NAT by mapping a specific inside local IP address to an inside global IP address.
- **ip nat pool**: Defines a pool of public IP addresses for use with dynamic NAT.
- **access-list**: Defines the range of private IP addresses that will be translated.
- **ip nat inside source list**: Configures dynamic NAT or PAT using an access list to define the private IP addresses and a pool or interface for the public IP addresses.
- **interface**: Enters the interface configuration mode.
- **ip nat inside**: Specifies that the interface is on the inside of the NAT.
- **ip nat outside**: Specifies that the interface is on the outside of the NAT.
- **overload**: Enables PAT by allowing multiple private IP addresses to share a single public IP address using different ports.

### Configuring Port Address Translation (PAT) for Multiple Internal Hosts with a Single Public IP Address

*Is it possible to configure different internal hosts to share the same public IP address while using different ports for their connections?*

It is possible to configure different internal addresses to be mapped to the same public address using different ports. This is known as Port Address Translation (PAT) or overloading. PAT allows multiple internal addresses to be mapped to a single public IP address but with different port numbers.

Here is an example of how to configure PAT on a Cisco router:

1. **Define the inside and outside interfaces**:
    ```bash
    R1(config)# interface GigabitEthernet0/0
    R1(config-if)# ip nat inside
    R1(config-if)# exit
    R1(config)# interface GigabitEthernet0/1
    R1(config-if)# ip nat outside
    R1(config-if)# exit
    ```

2. **Configure the PAT**:
    ```bash
    R1(config)# access-list 1 permit 10.0.0.0 0.0.0.255
    R1(config)# ip nat inside source list 1 interface GigabitEthernet0/1 overload
    ```

In the above example, any internal IP address in the 10.0.0.0/24 range will be translated to the public IP address of the GigabitEthernet0/1 interface with different port numbers.

For static PAT (also known as port forwarding), where specific internal IP addresses and ports are mapped to a single public IP address and port, you can configure it as follows:

1. **Configure the static NAT with different ports**:
    ```bash
    R1(config)# ip nat inside source static tcp 10.0.0.1 80 20.0.0.1 8080
    R1(config)# ip nat inside source static tcp 10.0.0.2 80 20.0.0.1 8081
    ```

In this configuration:
- Traffic destined for `20.0.0.1:8080` will be translated to `10.0.0.1:80`.
- Traffic destined for `20.0.0.1:8081` will be translated to `10.0.0.2:80`.

