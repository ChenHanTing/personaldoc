# Questions Completed on 2024-06-27

**Port States in RSTP**: In Rapid Spanning Tree Protocol (RSTP, IEEE 802.1w), there are three main port states: **Discarding, learning and forwarding** 

The **PortFast** feature in Cisco switches allows ports to **skip the Learning and Listening states** and immediately transition to the Forwarding state. This feature is particularly useful for ports connected to end devices, such as workstations, servers, or printers, where there is no risk of creating network loops.

![](https://www.examtopics.com/assets/media/exam-media/04300/0029400001.png) 

[Question](https://www.examtopics.com/discussions/cisco/view/44890-exam-200-301-topic-1-question-372-discussion/#): Refer to the exhibit. Which action establishes the OSPF neighbor relationship without forming an adjacency?

- A. modify hello interval **Most Voted**
- B. modify process ID
- C. modify priority
- D. modify network type

**Suggested Answer:** *A* [🗳️](https://www.examtopics.com/discussions/cisco/view/44890-exam-200-301-topic-1-question-372-discussion/#)

![image-20240627100210356](https://han.blob.core.windows.net/typora/image-20240627100210356.png) 

[Question](https://www.examtopics.com/discussions/cisco/view/33399-exam-200-301-topic-1-question-539-discussion/#): What protocol allows an engineer to back up 20 network router configurations globally while using the copy function?

- A. TCP
- B. SMTP
- C. FTP **Most Voted**
- D. SNMP

**Suggested Answer:** *D* [🗳️](https://www.examtopics.com/discussions/cisco/view/33399-exam-200-301-topic-1-question-539-discussion/#)

Which technology is used to improve web traffic performance by proxy caching?

- A. WSA **Most Voted**

  > Web security application

- B. Firepower

- C. ASA

- D. FireSIGHT

![image-20240627104957867](https://han.blob.core.windows.net/typora/image-20240627104957867.png) 

![](https://www.examtopics.com/assets/media/exam-media/04300/0049200001.png) 

  Combining all the commands, here is the full configuration to enable Telnet access with a user account:

````txt
R1(config)# username admin privilege 15 secret p@ss1234
R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input telnet
R1(config-line)# exit
R1(config)# interface gigabitEthernet 0/0
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# exit
````

Once the above configuration is complete, you can connect to the router via Telnet from a terminal or command prompt on a device that has network access to the router’s IP address. Here’s how to initiate a Telnet connection:

```sh
telnet 192.168.1.1
```

![image-20240627110431126](https://han.blob.core.windows.net/typora/image-20240627110431126.png) 

![image-20240627115914504](https://han.blob.core.windows.net/typora/image-20240627115914504.png) 

![image-20240627120132216](https://han.blob.core.windows.net/typora/image-20240627120132216.png)  

> Collision occurs in the first 64 bytes
> A late collision occurs after the 512th bit (64th byte) of a frame has been transmitted by a device.
> Anything under 64byte frame is considered a runt.

![image-20240627121045712](https://han.blob.core.windows.net/typora/image-20240627121045712.png) 