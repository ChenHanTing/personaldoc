# Questions Completed on 2024-06-17

[Question](https://www.examtopics.com/discussions/cisco/view/83756-exam-200-301-topic-1-question-107-discussion/#): What is a function of an endpoint on a network?

- A. provides wireless services to users in a building
- B. connects server and client device to a network **Most Voted**
- C. allows users to record data and transmit to a file server **Most Voted**
- D. forwards traffic between VLANs on a network

**Suggested Answer:** *C* [🗳️](https://www.examtopics.com/discussions/cisco/view/83756-exam-200-301-topic-1-question-107-discussion/#)
An endpoint is a remote computing device that communicates back and forth with a network to which it is connected. Examples of endpoints include:
✑ Desktops
✑ Laptops
✑ Smartphones
✑ Tablets
✑ Servers
✑ Workstations
Internet-of-things (IoT) devices

[Question](https://www.examtopics.com/discussions/cisco/view/60205-exam-200-301-topic-1-question-432-discussion/): Refer to the exhibit. Traffic sourced from the loopback0 interface is trying to connect via ssh to the host at 10.0.1.15. What is the next hop to the destination address?

- A. 192.168.0.7
- B. 192.168.0.4 **Most Voted**
- C. 192.168.0.40
- D. 192.168.3.5

![](https://www.examtopics.com/assets/media/exam-media/04300/0034500001.png) 

這題沒有答案

Question: Refer to the exhibit. Which configuration enables DHCP addressing for hosts connected to interface FastEthernet0/1 on router R4?

- A. interface FastEthernet0/1 
  ip helper-address 10.0.1.1 ! 
  access-list 100 permit tcp host 10.0.1.1 eq 67 host 10.148.2.1
- B. interface FastEthernet0/0 
  ip helper-address 10.0.1.1 ! 
  access-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1
- C. interface FastEthernet0/0 
  ip helper-address 10.0.1.1 ! 
  access-list 100 permit host 10.0.1.1 host 10.148.2.1 eq bootps
- D. interface FastEthernet0/1 
  ip helper-address 10.0.1.1 ! 
  access-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1

![](https://www.examtopics.com/assets/media/exam-media/04300/0047100001.png) 

> ❤B and C configure fa0/0, so those are incorrect. Bootps uses UDP so A is also incorrect. D is correct, but the answer has a flaw: As they use a non rearrangeable ACL the ACE would be added at the bottom, below the deny rule (rendering the newly added rule useless).
>
> ❤simply.. fe0/1 + UDP

Comparison with DHCP:

- **BOOTP vs. DHCP**: DHCP (Dynamic Host Configuration Protocol) is an extension of BOOTP and provides more features. DHCP can dynamically allocate IP addresses and has the ability to reuse addresses. It also supports more configuration options and has a more flexible and efficient mechanism for address management.
- **Backward Compatibility**: DHCP servers can handle BOOTP clients, but the reverse is not true (BOOTP servers cannot handle DHCP clients).

### Other questions

![image-20240621155711106](https://han.blob.core.windows.net/typora/image-20240621155711106.png) 

"variably subnetted" is not an indication of a specific routing protocol like EIGRP. It's a description of how the network is subdivided into subnets with different subnet masks. To identify which network prefix was learned via EIGRP, you need to look for routes in the routing table that are specifically marked with an "D" for EIGRP.

![image-20240621160222087](https://han.blob.core.windows.net/typora/image-20240621160222087.png) 

The `fc00::/7` range is indeed part of the Unique Local Address (ULA) space in IPv6. However, it is important to note the distinction between the `fc00::/8` and `fd00::/8` prefixes within this space:

1. **fc00::/8** - Reserved for future use and should not be used for operational purposes at this time.
2. **fd00::/8** - This is the range that is intended for use as Unique Local Addresses (ULAs).

Therefore, although the `fc00::/7` range includes both `fc00::/8` and `fd00::/8`, only the `fd00::/8` range is currently designated for use as ULAs. The configuration provided in the question, which uses `fd00::1234:2343/64`, is the correct choice because it falls within the `fd00::/8` range.

![image-20240621162307933](https://han.blob.core.windows.net/typora/image-20240621162307933.png) 

I have a gut feeling that it need to remember

![image-20240621163244604](https://han.blob.core.windows.net/typora/image-20240621163244604.png) 

![image-20240621164416937](https://han.blob.core.windows.net/typora/image-20240621164416937.png) 

![image-20240621164822032](https://han.blob.core.windows.net/typora/image-20240621164822032.png) 

![image-20240621165423619](https://han.blob.core.windows.net/typora/image-20240621165423619.png) 

Why Access Mode is Correct:

- Lightweight APs send their traffic to the WLC, and the WLC handles the VLAN tagging.
- The switch port connected to the LAP should be in access mode, configured for the specific VLAN that the AP will use to communicate with the WLC.
- This simplifies the AP configuration and ensures proper communication with the WLC.

![image-20240621165713684](https://han.blob.core.windows.net/typora/image-20240621165713684.png) 

How It Works:

- **One Spanning Tree Instance Per VLAN**: Rapid PVST+ generates a distinct spanning tree for each VLAN in the network. This allows each VLAN to have its own optimal loop-free topology.
- **Faster Convergence**: By using RSTP, Rapid PVST+ achieves quicker convergence times compared to the traditional Spanning Tree Protocol (STP).

![image-20240621170753209](https://han.blob.core.windows.net/typora/image-20240621170753209.png) 

