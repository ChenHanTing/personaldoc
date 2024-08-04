---
sidebar_position: 8
---

# Root

Speaking of root, i found there are 2 essential concepts 

### Root bridge & Root port

In computer networking, particularly in the context of Ethernet networks that utilize the Spanning Tree Protocol (STP), the terms "root bridge" and "root port" are fundamental concepts.

1. **Root Bridge**: In a network, the root bridge is the central bridge or switch that acts as the reference point for all other bridges or switches in the network. It's essentially the bridge with the lowest Bridge ID, which is a combination of a bridge's priority value and MAC address. The root bridge is responsible for determining the topology of the network and ensuring that there are no loops by blocking certain ports.
2. **Root Port**: On each non-root bridge or switch in the network, there is a port known as the root port. This is the port that offers the shortest path to reach the root bridge. Every non-root bridge or switch will have exactly one root port, which is the port through which it can reach the root bridge with the lowest cost. All other ports on a non-root bridge will be designated or blocked to prevent loops in the network.

### Practical Questions

Question1. Which configuration ensures that the switch is always the root for VLAN 750? - [reference](https://www.examtopics.com/discussions/cisco/view/33661-exam-200-301-topic-1-question-185-discussion/)

- A. Switch(config)#spanning-tree vlan 750 priority 38418607
- B. Switch(config)#spanning-tree vlan 750 priority 0
- C. Switch(config)#spanning-tree vlan 750 root primary
- D. Switch(config)#spanning-tree vlan 750 priority 614440



Question2. Refer to the exhibit. What two conclusions should be made about this configuration? (Choose two.)

- A. The root port is FastEthernet 2/1
- B. The designated port is FastEthernet 2/1
- C. The spanning-tree mode is PVST+
- D. This is a root bridge
- E. The spanning-tree mode is Rapid PVST+

[Show Suggested Answer](https://www.examtopics.com/discussions/cisco/view/41634-exam-200-301-topic-1-question-229-discussion/#)

Answer. 

- By default, PVST+ is running and the exhibit says rstp is running. When combing the two modes we get Rapid PVST+ If the switch is the root bridge, then it would say "the bridge is the root" under the root ID section of the spanning tree output. Non-root bridges include an additional field (port field) which includes the root port.

- Rapid Spanning Tree Protocol (RSTP) is an evolution of the original Spanning Tree Protocol (STP) designed to provide faster convergence in network topologies by significantly reducing the time it takes for a network to respond to changes in link status.

  Rapid Per-VLAN Spanning Tree Plus (Rapid PVST+) is a Cisco proprietary implementation of RSTP. It extends the benefits of RSTP to support VLANs. In a Rapid PVST+ environment, a separate instance of RSTP is run for each VLAN, allowing for faster convergence and better utilization of network resources compared to traditional STP.

  The association between RSTP and Rapid PVST+ lies in the fact that Rapid PVST+ is essentially RSTP implemented on a per-VLAN basis in Cisco environments. So, when you mention Rapid PVST+, you're essentially referring to RSTP being used in a Cisco environment with support for VLANs. In this case, the root port being FastEthernet 2/1 suggests that in this specific VLAN, FastEthernet 2/1 is the port that provides the fastest path to the root bridge.

  it is pvst (per vlan spanning tree) because the show command indicates that there is a STP per vlan (in this case, showing the STP of VLAN 30). And then it's rapid because it says that "Spanning tree enabled protocol rstp", So, in conclusion it's rapid pvst (the "+" is something about Cisco but you don't have to worry about it). Hope this explanation was clear to you!
