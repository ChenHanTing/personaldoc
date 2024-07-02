# Questions Completed on 2024-06-14

Question You are designing the QoS policy for a company that is running many TCP-based applications. The company is experiencing tail drops for these applications. The company wants to use a congestion avoidance technique for these applications. Which QoS strategy can be used to fulfill the requirement?

- A. weighted fair queuing
- B. weighted random early detection
- C. first-in first-out
- D. low-latency queuing

weighted random early detection (WRED) can be used to implement a congestion avoidance technique for TCP-based applications. WRED allows the router to selectively drop packets when the congestion level exceeds a certain threshold. By dropping packets early in the queue, before the queue becomes full, it helps to prevent tail drops and reduce congestion. WRED uses probabilistic dropping based on the IP Precedence or Differentiated Services Code Point (DSCP) values of the packets to prioritize and protect important traffic while allowing less important traffic to be dropped.

In QoS, which prioritization method is appropriate for interactive voice and video?

- A. traffic policing
- B. round-robin scheduling
- C. low-latency queuing **Most Voted**
- D. expedited forwarding

> Suggested Answer: C 🗳️
> Low Latency Queuing (LLQ) is the preferred queuing policy for VoIP audio. Given the stringent delay/jitter sensitive requirements of voice and video and the need to synchronize audio and video for CUVA, priority (LLQ) queuing is the recommended for all video traffic as well. Note that, for video, priority bandwidth is generally fudged up by 20% to account for the overhead.

[Question](https://www.examtopics.com/discussions/cisco/view/116922-exam-200-301-topic-1-question-982-discussion/): Which type of security program is violated when a group of employees enters a building using the ID badge of only one person?

- A. intrusion detection
- B. network authorization
- C. physical access control **Most Voted**
- D. user awareness

> Yes it´s physical access control security program. Physical access control is a security program that regulates and restricts access to physical spaces, such as buildings or rooms, within an organization.

Which 802.11 frame type is indicated by a probe response after a client sends a probe request?

- A. data
- B. management **Most Voted**
- C. control
- D. action

> Ref: 802.11 Association Process Explained - Cisco Meraki
>
> 1. A mobile station sends probe requests to discover 802.11 networks within its proximity. Probe requests advertise the mobile stations supported data rates and 802.11 capabilities such as 802.11n. Because the probe request is sent from the mobile station to the destination layer-2 address and BSSID of ff:ff:ff:ff:ff:ff all AP's that receive it will respond.
>
> 2. APs receiving the probe request check to see if the mobile station has at least one common supported data rate. If they have compatible data rates, a probe response is sent advertising the SSID (wireless network name), supported data rates, encryption types if required, and other 802.11 capabilities of the AP.

### Other questions

![image-20240614154557880](https://han.blob.core.windows.net/typora/image-20240614154557880.png)

The device that tracks the state of active connections in order to make a decision to forward a packet is referred to as a "stateful" device. This is indeed related to the term "stateful." 

Why Other Options Are Incorrect:

- **A. Wireless Access Point**: A wireless access point provides wireless network connectivity but does not track the state of active connections for making forwarding decisions.
- **C. Wireless LAN Controller**: A wireless LAN controller manages multiple wireless access points but typically does not perform stateful inspection of individual connections.
- **D. Router**: A router forwards packets based on routing tables and IP addresses but does not inherently track the state of connections in the same way a stateful firewall does.

![image-20240614160713641](https://han.blob.core.windows.net/typora/image-20240614160713641.png) 

> In my opinion, answer is: B. Because they ask what is needed "to pass DHCPDISCOVER messages" and this is the role of a DHCP Relay Agent. 

![image-20240614161436338](https://han.blob.core.windows.net/typora/image-20240614161436338.png)

>show snmp chassis: displays the snmp server serial number
>show snmp community: displays the snmp access string
>show snmp engineID: displays the IP address of the remote snmp device
>show snmp group: displays the snmp security model in use
>show snmp host: displays information about the snmp recipient
>
>Sources:
>https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/snmp/command/snmp-xe-3se-3850-cr-book/snmp-xe-3se-3850-cr-book_chapter_0110.html
>& ChatGPT

![image-20240614161639554](https://han.blob.core.windows.net/typora/image-20240614161639554.png) 

Understanding the Question:

The question asks about aggregating 4 ports into a single logical link, which involves combining multiple physical ports to act as one logical port. This is typically referred to as link aggregation or port channeling. The key phrase here is "negotiate layer 2 connectivity to ports on another switch" using "active mode on both sides of the connection."

Key Concepts:

1. **LACP (Link Aggregation Control Protocol)**:
   - LACP is a part of the IEEE 802.3ad standard.
   - It allows multiple physical Ethernet links to be combined into one logical link.
   - LACP supports dynamic link aggregation, where links are automatically added or removed based on their status.
   - **Active Mode**: In active mode, the switch actively tries to form an LACP link with the other side.
   - It ensures redundancy and increases the bandwidth by bundling multiple physical links.
2. **LLDP (Link Layer Discovery Protocol)**:
   - LLDP is a vendor-neutral link layer protocol used by network devices for advertising their identity, capabilities, and neighbors.
   - It is used for network discovery and topology.
   - LLDP does not aggregate links or negotiate layer 2 connectivity for creating logical links. It is purely for discovery purposes.

What i'm looking for

- **CDP & LLDP**: Both are used for device discovery, with CDP being Cisco proprietary and LLDP being a vendor-neutral standard.
- **LACP & PAgP**: Both are used for link aggregation, with LACP being the industry standard and PAgP being Cisco proprietary.

![image-20240614161937344](https://han.blob.core.windows.net/typora/image-20240614161937344.png) 

> D and E is right because
> STP goes from blocked, listening, learning, and forwarding
> and RSTP goes from Discarding, Learning, and Forwarding
>
> Poor question - there are not two correct answers. RSTP does not transition through "Forwarding". 
> Forwarding is a steady state, not transitional.
>
> There are only three port states left in RSTP that correspond to the three possible operational states. The 802.1D disabled, blocking, and listening states are merged into a unique 802.1w discarding state.
>
> STP (802.1D) Port State - Disabled -> Blocking -> Listening -> Learning -> Forwarding
> RSTP (802.1w) Port State - Discarding -> Learning -> Forwarding

PortFast Configuration:

**In STP:**

When PortFast is enabled on an STP-enabled port, it skips the listening and learning states and transitions directly to the forwarding state.

**In RSTP:**

When PortFast (referred to as an edge port in RSTP) is enabled, the port immediately transitions to the forwarding state, bypassing the discarding and learning states.

Configuration Example:

Enabling PortFast on an Interface (Cisco IOS):

```
Switch(config)# interface [interface-id]
Switch(config-if)# spanning-tree portfast
```

Enabling PortFast Globally (Cisco IOS):

```
Switch(config)# spanning-tree portfast default
```

Configuring PortFast on an Interface:

```
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# spanning-tree portfast
```

**PortFast** should only be enabled on ports connected to end devices, not on ports connected to other switches. Enabling PortFast on switch-to-switch links can create network loops and cause broadcast storms.

Summary:

- **PortFast** allows a port to bypass the normal STP or RSTP state progression and transition directly to the forwarding state.
- **STP**: PortFast skips the listening and learning states.
- **RSTP**: PortFast (edge ports) skips the discarding and learning states.
- **Configuration**: Use `spanning-tree portfast` command on individual interfaces or globally for all access ports.

[Question](https://www.examtopics.com/discussions/cisco/view/127630-exam-200-301-topic-1-question-1205-discussion/): Refer to the exhibit. Which per-hop QoS behavior is R1 applying to incoming packets?

![](https://img.examtopics.com/200-301/image265.png)

- A. marking
- B. shaping
- C. queuing **Most Voted**
- D. policing

C. Queuing would be the process of managing packets in different queues, often based on their markings, before transmitting them, which may be what is occurring here.

[Question](https://www.examtopics.com/discussions/cisco/view/86528-exam-200-301-topic-1-question-585-discussion/): Which per-hop traffic-control feature does an ISP implement to mitigate the potential negative effects of a customer exceeding its committed bandwidth?

- A. policing **Most Voted**
- B. queuing
- C. marking
- D. shaping **Most Voted**

> Remember that
> The customer Router does the shaping (cares and saves your traffic in a queue if you surpass the configured rate), but ISP Router does the policing (it drops your packets and doesn't care or save your traffic in a queue if you surpass the configured rate )
>
> A is correct
> Shaping: Delay packets by hold them in a queue.
> Policing: Discard or re-mark packets.

 ![](https://img.examtopics.com/200-301/image78.png)

![](https://img.examtopics.com/200-301/image78-1.png) 

> given answers are incorrect
>
> applies a specific action to packets whenever the maximum rate of packets is exceeded == policing
> set the ToS value to associate a packet with a QoS group == marking
> reduces traffic congestion by holding packets and distributing them when the available bandwidth allows == queuing
> the overall process of using specific criteria to differentiate traffic into categories == classification

![image-20240614163934593](https://han.blob.core.windows.net/typora/image-20240614163934593.png) 

Completed Matching:

- **CBWFQ**: provides guaranteed bandwidth to a specified class of traffic.
- **CQ**: services a specified number of bytes in one queue before continuing to the next queue.
- **FIFO**: uses store-and-forward queuing.
- **PQ**: places packets into one of four priority-based queues.
- **WFQ**: provides minimum guaranteed bandwidth to one or more flows.

let's break down each queuing method and its description to understand why they match:

1. CBWFQ (Class-Based Weighted Fair Queuing)

**Description**: provides guaranteed bandwidth to a specified class of traffic.

**Explanation**:

- CBWFQ is an extension of WFQ that allows you to define traffic classes based on match criteria such as access control lists (ACLs), protocols, or input interfaces.
- You can allocate a minimum guaranteed bandwidth to each class of traffic, ensuring that critical applications receive the necessary bandwidth.
- It provides more control over how bandwidth is allocated compared to traditional WFQ.

2. CQ (Custom Queuing)

**Description**: services a specified number of bytes in one queue before continuing to the next queue.

**Explanation**:

- CQ divides traffic into different queues and services each queue for a configured number of bytes or packets.
- This method ensures that each type of traffic gets a fair share of the bandwidth, although not necessarily in a strict priority order.
- It cycles through the queues in a round-robin fashion, servicing a defined amount of traffic from each queue before moving to the next.

3. FIFO (First In, First Out)

**Description**: uses store-and-forward queuing.

**Explanation**:

- FIFO is the simplest form of queuing where packets are processed in the order they arrive without any prioritization.
- It operates on a first-come, first-served basis, which can lead to delays for high-priority traffic if the queue is filled with lower-priority packets.
- The term "store-and-forward" means that packets are stored in the queue and then forwarded in the exact order of their arrival.

4. PQ (Priority Queuing)

**Description**: places packets into one of four priority-based queues.

**Explanation**:

- PQ assigns packets to one of four priority queues: high, medium, normal, or low.
- High-priority queues are serviced first, ensuring that critical traffic is forwarded before any lower-priority traffic.
- This method ensures that high-priority traffic gets the bandwidth it needs but can potentially starve lower-priority traffic if not managed correctly.

5. WFQ (Weighted Fair Queuing)

**Description**: provides minimum guaranteed bandwidth to one or more flows.

**Explanation**:

- WFQ dynamically allocates bandwidth to flows based on weights, which are typically derived from the IP precedence or DSCP value of the packets.
- It ensures that all flows receive a fair share of the bandwidth, with higher priority flows receiving more bandwidth.
- WFQ is designed to minimize latency for all traffic types, providing a minimum guaranteed bandwidth to ensure no flow is completely starved of resources.

![image-20240614164323524](https://han.blob.core.windows.net/typora/image-20240614164323524.png) 

Option D: Assign physically adjacent access points to the same Wi-Fi channel is**Incorrect**: Assigning adjacent access points to the same channel will cause co-channel interference, leading to performance degradation as the access points will interfere with each other.

Option B: Configure the first three access points are configured to use Channels 1, 6, and 11 is **Correct**: In the 2.4 GHz Wi-Fi band, channels 1, 6, and 11 are non-overlapping. Using these channels minimizes interference and allows multiple access points to operate simultaneously in close proximity without causing channel overlap. This practice maximizes the performance and coverage of the wireless network.

![image-20240614164547000](https://han.blob.core.windows.net/typora/image-20240614164547000.png) 

| **Term**                      | **Answer**                                                   | **Explanation**                                              |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **DHCP server**               | network component that assigns IP addresses to hosts on the network | A DHCP server dynamically assigns IP addresses and other network configuration parameters to devices. |
| **snooping binding database** | list of hosts on the network that are known to the administrative domain | This database contains mappings of IP addresses, MAC addresses, and VLAN information for trusted hosts. |
| **spurious DHCP server**      | unknown DHCP server within an administrative domain          | A rogue or unauthorized DHCP server that can cause conflicts and security issues within the network. |
| **trusted**                   | internal device under the control of the network administrator | Ports or interfaces marked as trusted, typically those connected to legitimate DHCP servers or trusted devices. |
| **untrusted**                 | default state of all interfaces                              | All interfaces are untrusted by default to prevent rogue DHCP servers; only trusted interfaces can assign IP addresses. |

![image-20240614165005869](https://han.blob.core.windows.net/typora/image-20240614165005869.png) 

When BPDU guard is enabled on a PortFast-enabled port, the port is expected to connect to an end device, not another switch or device that sends BPDUs. If a BPDU is received on this port, it indicates a potential misconfiguration or security issue, such as a loop or an unauthorized device attempting to participate in the STP process. BPDU guard protects the network by shutting down the port (putting it into an error-disabled state) to prevent any possible loops or network issues. 

