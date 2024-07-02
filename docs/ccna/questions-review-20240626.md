

# Questions Completed on 2024-06-26

### Metric in eigrp

In EIGRP (Enhanced Interior Gateway Routing Protocol), the lower the , the better the path. The metric is used to determine the best path to a destination, and a lower metric indicates a more preferred route.

Important Concepts:

1. **Feasible Distance (FD)**:

   The Feasible Distance is the total metric (cost) of the path to a destination. It is the sum of the Advertised Distance (AD) and the cost between the local router and the next-hop router.

2. **Advertised Distance (AD)**:

   The Advertised Distance is the metric (cost) from the next-hop router to the destination network. It is the metric as reported by the neighboring router.

3. **Feasible Successor**:

   A Feasible Successor is a backup route that can be used if the primary route (Successor) fails. For a route to qualify as a Feasible Successor, its Advertised Distance must be less than the Feasible Distance of the current Successor route. This ensures that the backup route is loop-free.

### Configurations for Access Mode

When configuring switch ports to function in access mode, there are several other considerations and settings that may be necessary to ensure proper network functionality and security. Here is a comprehensive list of additional settings and features to consider:

1. **Assign VLAN:**
   Specify the VLAN for the access port.

   ```cisco
   interface FastEthernet0/1
    switchport mode access
    switchport access vlan 10
   ```

2. **Enable Portfast:**
   Configure Portfast to enable the port to quickly transition to the forwarding state.

   ```cisco
   interface FastEthernet0/1
    switchport mode access
    spanning-tree portfast
   ```

3. **Enable BPDU Guard:**
   Protect against network loops by disabling the port if a BPDU is received.

   ```cisco
   interface FastEthernet0/1
    switchport mode access
    spanning-tree portfast
    spanning-tree bpduguard enable
   ```

   The `spanning-tree bpduguard enable` command is commonly used in conjunction with `spanning-tree portfast`. This is because BPDU Guard is designed to protect the network by disabling a port that receives a Bridge Protocol Data Unit (BPDU). Typically, ports configured with PortFast should not receive BPDUs since they are usually connected to end devices, not other switches.

   It is a common practice to configure `spanning-tree bpduguard enable` along with `spanning-tree portfast` to ensure that ports intended for end devices do not accidentally introduce loops into the network by receiving BPDUs.

4. **Enable Port Security:**

   In Cisco switch configurations, the `switchport port-security` command should be applied to an interface that is configured as an access port. This is because port security is typically used to control access on ports that connect to end devices (like computers or printers), which are generally configured as access ports.

   Restrict the number of MAC addresses allowed on the port to prevent MAC flooding attacks.

   ```cisco
   interface FastEthernet0/1
    
    switchport port-security
    switchport port-security maximum 2
    switchport port-security violation restrict
    switchport port-security mac-address sticky
   ```

5. **Enable DHCP Snooping:**
   Prevent unauthorized DHCP servers from assigning IP addresses.
   ```cisco
   ip dhcp snooping
   ip dhcp snooping vlan 10,20
   interface FastEthernet0/1
    switchport mode access
    switchport access vlan 10
    switchport voice vlan 20
    # Limits the rate of DHCP packets the port can receive to 15 packets per second. 
    # This helps mitigate DHCP starvation attacks.
    ip dhcp snooping limit rate 15
   ```

6. **Voice VLAN Configuration (Optional):**
   If connecting a Cisco IP phone, configure a separate VLAN for voice traffic.

   ```cisco
   interface FastEthernet0/1
    switchport mode access
    switchport access vlan 10
    switchport voice vlan 20
   ```

![image-20240626141412612](https://han.blob.core.windows.net/typora/image-20240626141412612.png) 

[Question](https://www.examtopics.com/discussions/cisco/view/19826-exam-200-301-topic-1-question-360-discussion/#): When OSPF learns multiple paths to a network, how does it select a route?

- A. For each existing interface, it adds the metric from the source router to the destination to calculate the route with the lowest bandwidth.
- B. It counts the number of hops between the source router and the destination to determine the route with the lowest metric.
- C. It divides a reference bandwidth of 100 Mbps by the actual bandwidth of the exiting interface to calculate the route with the lowest cost. **Most Voted**
- D. It multiplies the active K values by 256 to calculate the route with the lowest metric.

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/19826-exam-200-301-topic-1-question-360-discussion/#)

> OSPF uses cost to make routing decisions

**EIGRP Metric Calculation**: EIGRP uses a composite metric based on several factors, including bandwidth, delay, load, reliability, and MTU. The formula involves multiplying these factors by specific constants (K values) and then summing them up. This is where the multiplication by 256 comes into play, but it is specific to EIGRP.

[Question](https://www.examtopics.com/discussions/cisco/view/19823-exam-200-301-topic-1-question-197-discussion/#): A Cisco IP phone receives untagged data traffic from an attached PC. Which action is taken by the phone?

- A. It drops the traffic.
- B. It allows the traffic to pass through unchanged.
- C. It tags the traffic with the native VLAN.
- D. It tags the traffic with the default VLAN.

**Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/19823-exam-200-301-topic-1-question-197-discussion/#)
Untagged traffic from the device attached to the Cisco IP Phone passes through the phone unchanged, regardless of the trust state of the access port on the phone. [Reference](https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_40_se/configuration/guide/scg/swvoip.pdf)

**VLAN Tagging Conditions (General Case):**

Traffic can change its VLAN number in specific scenarios based on switch port configurations, such as:

- **Access Ports:** When a switch port is configured as an access port, all untagged traffic is assigned to the VLAN configured on that port.
- **Trunk Ports:** When a switch port is configured as a trunk port, it can handle multiple VLANs. Untagged traffic on a trunk port is assigned to the native VLAN.
- **Dynamic VLAN Assignment:** Some advanced configurations involve dynamic VLAN assignment based on policies or authentication (e.g., using protocols like 802.1X).

When a PC and a Cisco IP phone are connected together, typically the Cisco IP phone is connected to the switch, and the PC is connected to the IP phone. Here’s the**access port with voice VLANconfiguration:**

- The switch port connected to the Cisco IP phone is configured as an access port with a special configuration for voice and data traffic.

- Example configuration:

  ```
  interface FastEthernet0/1
    switchport mode access
    switchport access vlan 10        ! Data VLAN
    switchport voice vlan 20         ! Voice VLAN
  ```

---

[Question](https://www.examtopics.com/discussions/cisco/view/19870-exam-200-301-topic-1-question-618-discussion/#): Which feature on the Cisco Wireless LAN Controller when enabled restricts management access from specific networks?

- A. TACACS
- B. CPU ACL **Most Voted**
- C. Flex ACL
- D. RADIUS

**Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/19870-exam-200-301-topic-1-question-618-discussion/#)
Whenever you want to control which devices can talk to the main CPU, a CPU ACL is used.
Note: CPU ACLs only filter traffic towards the CPU, and not any traffic exiting or generated by the CPU.

**CPU ACL**

A CPU ACL (Access Control List) is a specific type of ACL that is used to control traffic destined to the control plane of a network device, such as a router or switch. The control plane is responsible for the management and operation of the device, including processing routing protocols, management traffic, and other control messages. CPU ACLs are implemented to protect the control plane from unnecessary or potentially harmful traffic, ensuring the stability and security of the device.

**Flex ACL Purpose and Application**

- Provides a more flexible and granular approach to traffic filtering and security policies across the entire network, not just the control plane.
- Allows for more advanced filtering criteria and actions based on various parameters such as IP addresses, protocols, ports, and even application-level information.

- Applied to interfaces or sub-interfaces, typically at the ingress or egress points of the network.
- Can be used to implement complex security policies, QoS, traffic shaping, and more.

````txt
ip access-list extended FLEX-ACL
 permit ip any any
 permit tcp any any eq 80
 permit udp any any eq 53
 deny ip any any log

interface GigabitEthernet0/0
 ip access-group FLEX-ACL in
````

"FLEX-ACL" is not a reserved name; it is a custom name that can be used when defining an Access Control List (ACL) on Cisco devices. When configuring ACLs, you can choose any descriptive name that suits your network's naming conventions and organizational practices.

[Misleading Question](https://www.examtopics.com/discussions/cisco/view/86489-exam-200-301-topic-1-question-507-discussion/#): A router has two static routes to the same destination network under the same OSPF process. How does the router forward packets to the destination if the net- hop devices are different?

- A. The router chooses the route with the oldest age.
- B. The router chooses the next hop with the lowest IP address.
- C. The router chooses the next hop with the lowest MAC address.
- D. The router load-balances traffic over all routes to the destination. **Most Voted**

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/86489-exam-200-301-topic-1-question-507-discussion/#)
Load balancing is a standard functionality of Cisco IOS Software that is available across all router platforms. It is inherent to the forwarding process in the router, and it enables a router to use multiple paths to a destination when it forwards packets. The number of paths used is limited by the number of entries that the routing protocol puts in the routing table. Four entries is the default in Cisco IOS Software for IP routing protocols except for BGP. BGP has a default of one entry.

![image-20240626141518820](https://han.blob.core.windows.net/typora/image-20240626141518820.png) 

**Traditional campus device management schemes can typically deploy patches and updates more quickly than Cisco DNA Center device management.**
This statement suggests that traditional methods are faster for deploying patches and updates. However, one of the key advantages of Cisco DNA Center is its automation capabilities, which streamline and expedite these processes. Traditional methods typically involve more manual intervention, which can be slower and more error-prone.

**Cisco DNA Center device management can deploy a network more quickly than traditional campus device management.**
This is correct because Cisco DNA Center leverages advanced automation and orchestration tools to speed up the deployment of network configurations, policies, and updates. It reduces the need for manual configuration and allows for faster, more consistent deployments across the network.

![image-20240626142139875](https://han.blob.core.windows.net/typora/image-20240626142139875.png) 

The ports on SW1 (`Et1/0` and `Et1/1`) show that the neighbor devices (identified by `Dev ID aabb.cc80.7000`) are in Passive mode (P).

> With LACP, at least one side must be active. So if the SW1 neighbor is passive, SW1 must be active.
>
> In configuring Dynamic EtherChannel, with PAgP, at least one of the two sides must use desirable, and with LACP, at least one of the two sides must use active. The question is showing the other device with SP code...means, its LACP is PASSIVE. Therefore, opposite device's LACP configuration must be ACTIVE.

![image-20240626143940537](https://han.blob.core.windows.net/typora/image-20240626143940537.png) 

> 💙 簡單記憶這一題: The two answers with feasible in it, make them feasible answers.

![image-20240626145552956](https://han.blob.core.windows.net/typora/image-20240626145552956.png) 

**Option C**: While WRED prioritizes higher-priority packets by dropping lower-priority packets first, it does not guarantee the delivery of high-priority packets.

![image-20240626160656809](https://han.blob.core.windows.net/typora/image-20240626160656809.png) 

![image-20240626161614065](https://han.blob.core.windows.net/typora/image-20240626161614065.png) 

It's because this is a broadcast domain

[Question](https://www.examtopics.com/discussions/cisco/view/41818-exam-200-301-topic-1-question-366-discussion/):  Refer to the exhibit. An engineer is bringing up a new circuit to the MPLS provider on the Gi0/1 interface of Router 1. The new circuit uses eBGP and learns the route to VLAN25 from the BGP path.
What is the expected behavior for the traffic flow for route 10.10.13.0/25?

![](https://www.examtopics.com/assets/media/exam-media/04300/0028800001.png) 

- A. Traffic to 10.10.13.0/25 is load balanced out of multiple interfaces.
- B. Traffic to 10.10.13.0/25 is asymmetrical.
- C. Route 10.10.13.0/25 is updated in the routing table as being learned from interface Gi0/1. **Most Voted**
- D. Route 10.10.13.0/25 learned via the Gi0/0 interface remains in the routing table.

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/41818-exam-200-301-topic-1-question-366-discussion/#)
The AD of eBGP (20) is smaller than that of OSPF (110) so the route to 10.10.13.0/25 will be updated as being learned from the new BGP path.

[Question](https://www.examtopics.com/discussions/cisco/view/99856-exam-200-301-topic-1-question-1005-discussion/#): Which advantage does the network assurance capability of Cisco DNA Center provide over traditional campus management?

- A. Cisco DNA Center leverages YANG and NETCONF to assess the status of fabric and nonfabric devices, and traditional campus management uses CLI exclusively.
- B. Cisco DNA Center handles management tasks at the controller to reduce the load on infrastructure devices, and traditional campus management uses the data backbone.
- C. Cisco DNA Center automatically compares security postures among network devices, and traditional campus management needs manual comparisons.
- D. Cisco DNA Center correlates information from different management protocols to obtain insights, and traditional campus management requires manual analysis. **Most Voted**

[Question](https://www.examtopics.com/discussions/cisco/view/28529-exam-200-301-topic-1-question-31-discussion/#): What are two descriptions of three-tier network topologies? (Choose two.)

- A. The distribution layer runs Layer 2 and Layer 3 technologies **Most Voted**
- B. The network core is designed to maintain continuous connectivity when devices fail **Most Voted**
- C. The access layer manages routing between devices in different domains
- D. The core layer maintains wired connections for each host
- E. The core and distribution layers perform the same functions

**Suggested Answer:** *AB* [🗳️](https://www.examtopics.com/discussions/cisco/view/28529-exam-200-301-topic-1-question-31-discussion/#)

> A correct because distribution layer has multilayer switches (L2 and L3 technologies)
> B correct oore provides reliability
> C incorrect because it must be core layer, not access
> D incorrect because it must be access layer, not core
> E incorrect because core & distribution only perform same functions in 2-tier model (since they are aggregated)

![](https://media.fs.com/images/community/upload/kindEditor/202105/25/distribution-layer-diagram-1621937301-ES7wiU19cL.jpg) 

[Question](https://www.examtopics.com/discussions/cisco/view/19805-exam-200-301-topic-1-question-20-discussion/#): What is a benefit of using a Cisco Wireless LAN Controller?

- A. It eliminates the need to configure each access point individually.
- B. Central AP management requires more complex configurations.
- C. Unique SSIDs cannot use the same authentication method.
- D. It supports autonomous and lightweight APs. (❌, as it supports Lightweight but not autonomous)

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/19805-exam-200-301-topic-1-question-20-discussion/#)

> A is correct
> D could also be correct if there is no autonomous wording. Autonomous doesn't support LWAPP protocol ( Autonomous Ap's are standalone Ap's which does not support CAPWAP/LWAPP) that Wireless Lan Controller uses)
>
> Option A & D seems to be correct But for Option D :- Wireless LAN Controller not associated with Autonomous ( Meaning of Autonomous is "Standalone access point are known as Autonomous Access Point") Keyword Lightweight is correct WLC supports Lightweight but not autonomous

[Question](https://www.examtopics.com/discussions/cisco/view/19818-exam-200-301-topic-1-question-190-discussion/#): Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?

- A. active
- B. on
- C. auto
- D. desirable

**Suggested Answer:** *B* [🗳️](https://www.examtopics.com/discussions/cisco/view/19818-exam-200-301-topic-1-question-190-discussion/#)

Mode that forces the LAN port to channel unconditionally. In the on mode, a usable EtherChannel exists only when a LAN port group in the on mode is connected to another LAN port group in the on mode. Because ports configured in the on mode do not negotiate, there is no negotiation traffic between the ports. You cannot configure the on mode with an EtherChannel protocol. If one end uses the on mode, the other end must also. 

![image-20240626164530155](https://han.blob.core.windows.net/typora/image-20240626164530155.png) 

Since the permit statement is first, it overrides the deny statement for HTTP traffic to the web server. Therefore, the HTTP traffic would not be blocked because the traffic is already permitted by the first statement.

The key point is that access control lists (ACLs) process statements in order, and the first matching rule is applied. So, in option D, the deny rule is correctly placed before the permit rule, making it effective for blocking HTTP traffic from VLAN 20 to the web server.

所以 deny 要寫在 permit 前面

[Question](https://www.examtopics.com/discussions/cisco/view/19871-exam-200-301-topic-1-question-619-discussion/#): Which set of actions satisfy the requirement for multifactor authentication?

- A. The user enters a user name and password, and then re-enters the credentials on a second screen.
- B. The user swipes a key fob, then clicks through an email link.
- C. The user enters a user name and password, and then clicks a notification in an authentication app on a mobile device.
- D. The user enters a PIN into an RSA token, and then enters the displayed RSA key on a login screen.

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/19871-exam-200-301-topic-1-question-619-discussion/#)

This is an example of how two-factor authentication (2FA) works:

1. The user logs in to the website or service with their username and password.
2. The password is validated by an authentication server and, if correct, the user becomes eligible for the second factor.
3. The authentication server sends a unique code to the user's second-factor method (such as a smartphone app).
4. The user confirms their identity by providing the additional authentication for their second-factor method.

> multi factor can be 2 of the 3
> 1. something you know - password, pin
> 2. something you have - card, badge
> 3. something you are - retina, voice, facial recognition

![image-20240626170248594](https://han.blob.core.windows.net/typora/image-20240626170248594.png) 

