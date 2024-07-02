---
sidebar_position: 54
---



# Questions Completed on 2024-06-12

For the trunk with the necessary and optional commands

````txt
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security violation shutdown
Switch(config-if)# switchport port-security mac-address sticky  # (Optional)
````

### Other questions

![image-20240612091943464](https://han.blob.core.windows.net/typora/image-20240612091943464.png) 

C. Inspect packets for malicious activity
**Explanation**: This function typically falls under the responsibilities of security appliances or devices such as Intrusion Detection Systems (IDS) or Intrusion Prevention Systems (IPS), which are often part of the distribution layer in a three-tier architecture. These devices monitor network traffic for suspicious activity and potential threats.

D. Police traffic that is sent to the edge of the network
**Explanation**: Policing traffic involves regulating the rate of traffic flow and ensuring that traffic complies with network policies. This task is generally managed by devices at the distribution layer, which enforces policies and performs filtering before traffic reaches the core or edge layers.

E. Provide direct connectivity for end-user devices
**Explanation**: Providing direct connectivity for end-user devices is a primary function of the access layer in a three-tier architecture. This layer connects end-user devices, such as computers and phones, to the network and often includes switches and wireless access points. Option E is characteristic of the access layer

![image-20240612092114289](https://han.blob.core.windows.net/typora/image-20240612092114289.png) 

Traffic shaping, also known as packet shaping, is a network management technique used to control the volume of traffic being sent into a network to ensure a smooth and consistent flow of data. The primary purpose of traffic shaping is to optimize or guarantee performance, improve latency, and increase usable bandwidth for certain types of traffic.

![image-20240612100600600](https://han.blob.core.windows.net/typora/image-20240612100600600.png) 

![image-20240612101109662](https://han.blob.core.windows.net/typora/image-20240612101109662.png) 

Domain Name System (DNS) lookup is what facilitates a Telnet connection between devices by allowing users to enter the device name instead of having to remember and input the device's IP address. DNS resolves human-readable domain names to IP addresses, making it easier for users to connect to devices using familiar names instead of numerical addresses.

![image-20240612113018334](https://han.blob.core.windows.net/typora/image-20240612113018334.png) 

答案給錯了

A port security violation has occurred on a switch port due to the maximum MAC address count being exceeded. Which command must be configured to increment the security-violation count and forward an SNMP trap?

- A. switchport port-security violation access
- B. switchport port-security violation protect
- C. switchport port-security violation restrict **Most Voted**
- D. switchport port-security violation shutdown

![image-20240612113735663](https://han.blob.core.windows.net/typora/image-20240612113735663.png)　

"actively" corresponds to the "desirable" mode, which means the switch port will actively attempt to form a trunk link with the neighbor switch. On the other hand, "passive" corresponds to the "auto" mode, where the switch port will form a trunk link if the neighbor switch initiates it.

![image-20240612114323520](https://han.blob.core.windows.net/typora/image-20240612114323520.png)　

TFTP (Trivial File Transfer Protocol) is a simple file transfer protocol that is often used for transferring small files between network devices. One of the primary functions of TFTP in network operations is to transfer IOS (Internetwork Operating System) images from a TFTP server to a router for firmware upgrades. Therefore, option A is the correct answer.　

![image-20240612114902366](https://han.blob.core.windows.net/typora/image-20240612114902366.png) 

![image-20240612114554597](https://han.blob.core.windows.net/typora/image-20240612114554597.png)　

![image-20240612114642085](https://han.blob.core.windows.net/typora/image-20240612114642085.png)　

Local web admin SSL cert ⏩ HTTPS

![image-20240612133845499](https://han.blob.core.windows.net/typora/image-20240612133845499.png) 

> **Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/55964-exam-200-301-topic-1-question-641-discussion/#)
> Already a statement is there in last to allow SSH Traffic for network 10.20.1.0 0.0.0.127, but Second statement says deny ip any 10.20.1.0 0.0.0.255, so how it will work once it is denied. So the right answer is remove the --- no access-list 2699 deny ip any 10.20.1.0 0.0.0.255.