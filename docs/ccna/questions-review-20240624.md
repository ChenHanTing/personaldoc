# Questions Completed on 2024-06-24



[Question](https://www.examtopics.com/discussions/cisco/view/60205-exam-200-301-topic-1-question-432-discussion/#): Refer to the exhibit. Traffic sourced from the loopback0 interface is trying to connect via ssh to the host at 10.0.1.15. What is the next hop to the destination address?https://www.examtopics.com/exams/cisco/200-301/)

![img](https://www.examtopics.com/assets/media/exam-media/04300/0034500001.png)


- A. 192.168.0.7
- B. 192.168.0.4 **Most Voted**
- C. 192.168.0.40
- D. 192.168.3.5

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/60205-exam-200-301-topic-1-question-432-discussion/#)
The router will choose the route will the longest matching prefix, in this case that is 10.0.1.0.28.



![img](https://www.examtopics.com/assets/media/exam-media/04300/0053300001.png)
[Question](https://www.examtopics.com/discussions/cisco/view/75656-exam-200-301-topic-1-question-659-discussion/#): Refer to the exhibit. Which two commands must be configured on router R1 to enable the router to accept secure remote-access connections? (Choose two.)

- A. ip ssh pubkey-chain **Most Voted**
- B. username cisco password 0 cisco
- C. crypto key generate rsa **Most Voted**
- D. transport input telnet
- E. login console

**Suggested Answer:** *BC* [🗳️](https://www.examtopics.com/discussions/cisco/view/75656-exam-200-301-topic-1-question-659-discussion/#)

[Question](https://www.examtopics.com/discussions/cisco/view/76458-exam-200-301-topic-1-question-568-discussion/#): R1 as an NTP server must have:
✑ NTP authentication enabled
✑ NTP packets sourced from Interface loopback 0
✑ NTP stratum 2
✑ NTP packets only permitted to client IP 209.165.200.225
How should R1 be configured?

- 2️⃣3️⃣4️⃣ ❌A. 
  ntp authenticate 
  ntp authentication-key 2 sha1 CISCO123 
  ntp source Loopback0 
  ntp access-group server-only 10 
  ntp master 2 
  access-list 10 permit udp host 209.165.200.225 any eq 123
- 1️⃣❌B. 
  ntp authenticate 
  ntp authentication-key 2 md5 CISCO123 
  ntp interface Loopback0 
  ntp access-group server-only 10 
  ntp stratum 2 
  access-list 10 permit 209.165.200.225
- C. ntp authenticate ntp authentication-key 2 md5 CISCO123 ntp source Loopback0 ntp access-group server-only 10 ntp master 2 ! access-list 10 permit 209.165.200.225 **Most Voted**
- 2️⃣3️⃣❌D. ntp authenticate ntp authentication-key 2 md5 CISCO123 ntp source Loopback0 ntp access-group server-only 10 ntp stratum 2 ! access-list 10 permit udp host 209.165.200.225 any eq 123

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/76458-exam-200-301-topic-1-question-568-discussion/#)
1️⃣❌ `ntp stratum 2` isn't valid
NTP stratus is NOT a valid cisco command. NTP master [stratum level]
2️⃣❌ C is correct. standard access lists do not specifically filter by protocol.
3️⃣❌Its not d, because the access list 10 is standar and cannot configure ports on this
4️⃣❌Incorrect because sha1 isn't used for NTP authentication, must be MD5

Right answer

```
ntp authenticate
ntp authentication-key 2 md5 CISCO123
ntp trusted-key 2
ntp source Loopback0
ntp access-group peer 10
ntp master 2
!
access-list 10 permit 209.165.200.225
```

Example Configuration

```
bashCopy codentp server 192.168.1.1
ntp source Loopback0
ntp access-group server-only 10
```

In this example:

- The device synchronizes with an NTP server at 192.168.1.1.
- NTP packets use the IP address of Loopback0 as the source.
- Only servers in access-list 10 can provide NTP time updates.



![img](https://www.examtopics.com/assets/media/exam-media/04300/0036100001.png)

[Question](https://www.examtopics.com/discussions/cisco/view/86483-exam-200-301-topic-1-question-451-discussion/#): Refer to the exhibit. Which route must be configured on R1 so that OSPF routing is used when OSPF is up, but the server is still reachable when OSPF goes down?

- ✅A. ip route 10.1.1.10 255.255.255.255 gi0/0 125 **Most Voted**
- 1️⃣❌ B. ip route 10.1.1.0 255.255.255.0 172.16.2.2 100
- C. ip route 10.1.1.0 255.255.255.0 gi0/1 125
- 1️⃣❌ D. ip route 10.1.1.10 255.255.255.255 172.16.2.2 100

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/86483-exam-200-301-topic-1-question-451-discussion/#)
This is an example of a floating static route when the Administrative Distance must be greater than the primary route. Currently the OSPF AD for the route is 110, so if that route was to go away then this route with an AD of 125 would be used.

1️⃣❌ lower than 110

**Option B:** `ip route 10.1.1.0 255.255.255.0 172.16.2.2 100`

This creates a static route for the network `10.1.1.0/24` via the next hop `172.16.2.2` with an administrative distance of 100.

The administrative distance of 100 is less than OSPF's 110, so this route would be preferred over OSPF, which is not what we want.

![image-20240624154211286](https://han.blob.core.windows.net/typora/image-20240624154211286.png) 

Refer to the exhibit. Traffic that is flowing over interface TenGigabitEthemet0/0/0 experiences slow transfer speeds. What is the cause of this issue?

- A. speed conflict
- B. queuing drops
- C. duplex incompatibility **Most Voted**
- D. heavy traffic congestion

**Collisions**: The interface shows `86642165` collisions. This is a significant number and indicates a problem on the network. Collisions can occur due to a variety of reasons including duplex mismatches, network congestion, or faulty hardware. 

> According to OCG and Boson practice exams, collisions are duplex incompatibility.

### Other Questions

![image-20240624163854505](https://han.blob.core.windows.net/typora/image-20240624163854505.png) 

 ````txt
 Switch(config)# interface GigabitEthernet0/1
 Switch(config-if)# switchport mode access
 Switch(config-if)# switchport access vlan 10
 Switch(config-if)# spanning-tree portfast
 Switch(config-if)# end
 ````

![image-20240625082628325](https://han.blob.core.windows.net/typora/image-20240625082628325.png) 

**IPv6 Unicast Address:**

- A unicast address uniquely identifies a single interface on a device.
- Packets sent to a unicast address are delivered to that specific interface.
- Example: An IPv6 address like `2001:db8::1` assigned to a single network interface.

**IPv6 Anycast Address:**

- An anycast address is assigned to multiple interfaces on different nodes (devices).
- Packets sent to an anycast address are delivered to the nearest interface (according to the routing protocol’s definition of distance) that is part of the anycast group.
- Example: An anycast address like `2001:db8::1` can be assigned to multiple servers, and the closest one will receive the packet.

![image-20240625093752765](https://han.blob.core.windows.net/typora/image-20240625093752765.png) 

EIGRP routes are typically indicated with the letter "D" (denoting DUAL, the EIGRP routing algorithm). 

![image-20240625122740956](https://han.blob.core.windows.net/typora/image-20240625122740956.png) 

![image-20240625135141272](https://han.blob.core.windows.net/typora/image-20240625135141272.png)  

[Related Question](https://www.examtopics.com/discussions/cisco/view/19792-exam-200-301-topic-1-question-7-discussion/#): Which 802.11 frame type is Association Response? 

- A. management
- B. protected frame
- C. action
- D. control

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/19792-exam-200-301-topic-1-question-7-discussion/#)
There are three main types of 802.11 frames: the Data Frame, the Management Frame and the Control Frame. Association Response belongs to Management
Frame. Association response is sent in response to an association request.

[recommended video](https://www.youtube.com/watch?v=PCpnRqKCWCQ)

![image-20240625135553792](https://han.blob.core.windows.net/typora/image-20240625135553792.png) 

Beacons: discovering unknown
Probes: bugging known

![image-20240701122733620](https://han.blob.core.windows.net/typora/image-20240701122733620.png) 

![image-20240625154227208](https://han.blob.core.windows.net/typora/image-20240625154227208.png) 

In my opinion, answer is: B. Because they ask what is needed "to pass DHCPDISCOVER messages" and this is the role of a DHCP Relay Agent.

![image-20240625144520524](https://han.blob.core.windows.net/typora/image-20240625144520524.png) 

![image-20240625145313268](https://han.blob.core.windows.net/typora/image-20240625145313268.png) 

![image-20240625150508875](https://han.blob.core.windows.net/typora/image-20240625150508875.png) 

[Related question](https://www.examtopics.com/discussions/cisco/view/85954-exam-200-301-topic-1-question-111-discussion/#): What provides centralized control of authentication and roaming in an enterprise network?

- A. a lightweight access point
- B. a wireless LAN controller **Most Voted**
- C. a firewall
- D. a LAN switch

**Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/85954-exam-200-301-topic-1-question-111-discussion/#)

[Related question](https://www.examtopics.com/discussions/cisco/view/94005-exam-200-301-topic-1-question-301-discussion/#): What must a network administrator consider when deciding whether to configure a new wireless network with APs in autonomous mode or APs running in cloud- based mode?

- A. Autonomous mode APs are less dependent on an underlay but more complex to maintain than APs in cloud-based mode.
- B. Cloud-based mode APs relay on underlays and are more complex to maintain than APs in autonomous mode.
- C. Cloud-based mode APs are easy to deploy but harder to automate than APs in autonomous mode.
- D. Autonomous mode APs are easy to deploy and automate than APs in cloud-based mode.

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/94005-exam-200-301-topic-1-question-301-discussion/#)

![image-20240625150656803](https://han.blob.core.windows.net/typora/image-20240625150656803.png) 

DNS (Domain Name System) lookup is the process of translating a domain name (such as [www.example.com](http://www.example.com)) into its corresponding IP address (like 192.0.2.1) so that a computer can locate and connect to the server hosting the website. 

![image-20240625152335817](https://han.blob.core.windows.net/typora/image-20240625152335817.png) 

![image-20240625150915909](https://han.blob.core.windows.net/typora/image-20240625150915909.png) 

**PortFast** allows certain ports to bypass the usual STP states and immediately transition to the forwarding state. This is particularly useful for ports connected to end devices like computers, printers, or other non-switch devices, where there is no risk of creating network loops.

[Related question](https://www.examtopics.com/discussions/cisco/view/19824-exam-200-301-topic-1-question-198-discussion/#): Which design element is a best practice when deploying an 802.11b wireless infrastructure?

- A. allocating nonoverlapping channels to access points that are in close physical proximity to one another **Most Voted**
- B. disabling TCP so that access points can negotiate signal levels with their attached wireless devices
- C. configuring access points to provide clients with a maximum of 5 Mbps
- D. setting the maximum data rate to 54 Mbps on the Cisco Wireless LAN Controller

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/19824-exam-200-301-topic-1-question-198-discussion/#) 

![image-20240625151714194](https://han.blob.core.windows.net/typora/image-20240625151714194.png) 

如果看不出答案還可以用刪去法

**Non-overlapping Channels**: In the 2.4 GHz Wi-Fi band, channels 1, 6, and 11 are non-overlapping. This means that when these channels are used, there is minimal interference between them, allowing multiple access points (APs) to operate in close proximity without degrading each other's performance.

In contrast, the other options are less effective or even counterproductive:

- **Option A (group access points together to increase throughput on a given channel)**: This would lead to co-channel interference, where multiple APs on the same channel interfere with each other, reducing overall network performance.
- **Option C (include at least two access points on nonoverlapping channels to support load balancing)**: While load balancing is important, simply having two APs on non-overlapping channels does not provide a comprehensive solution. Proper channel planning for all APs is necessary.
- **Option D (assign physically adjacent access points to the same Wi-Fi channel)**: This would cause severe co-channel interference, leading to degraded performance as adjacent APs would compete for the same channel bandwidth.

![image-20240625152132708](https://han.blob.core.windows.net/typora/image-20240625152132708.png) 

[Question](https://www.examtopics.com/discussions/cisco/view/60295-exam-200-301-topic-1-question-80-discussion/#): How does a Cisco Unified Wireless Network respond to Wi-Fi channel overlap?

- A. It allows the administrator to assign the channels on a per-device or per-interface basis.
- B. It segregates devices from different manufactures onto different channels.
- C. It analyzes client load and background noise and dynamically assigns a channel. **Most Voted**
- D. It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points.

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/60295-exam-200-301-topic-1-question-80-discussion/#)

> Best answer is C relates more to Dynamic Channel Assignment DCA
>
> - Do not agree with D, which is more about Band Select and Band Direction but the feature does not alternate AP's automatically, this is wrong with the wording. 
> - With the question specific to channel overlap, analyzing AP load with client associations, managing channel assignments per RF group

![image-20240625152917585](https://han.blob.core.windows.net/typora/image-20240625152917585.png) 

 Easily get cheated

![image-20240625153622894](https://han.blob.core.windows.net/typora/image-20240625153622894.png) 

![image-20240625153742601](https://han.blob.core.windows.net/typora/image-20240625153742601.png) 

The corrected access list should look something like this:

```
access-list 10 deny host 10.150.1.1
access-list 10 permit any
```

This way, only PC-1 is denied access, and all other hosts, including PC-2, are permitted.