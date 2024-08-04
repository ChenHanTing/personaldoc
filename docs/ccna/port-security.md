---
sidebar_position: 7
---



# Port Security

CCNA的考試一共有選擇題、拖拉題和上機題，其中有含筆記的選擇題的PDF已經上載到新北營運處的虛擬機了，大家可以到[這裡](https://ntpe.cht.com.tw/api/uploads/CCNA-2023.09.01.pdf)下載。

此外如下圖所示，PDF的內容由於是論壇裡面側錄的題目，所以會有些題目有爭議。答案有爭議的部分，可以上網打`examtopics 想要詢問的題目`，到國外的論壇找尋歐美區網友們認同的答案，留言區也有很多值得參考的地方

![image-20240603160824215](https://ntpe.cht.com.tw/api/uploads/images/image-20240603160824215.png)  

以下為點擊`Examtopics` 出現的網頁答案以及評論區

![image-20240603161758260](https://ntpe.cht.com.tw/api/uploads/images/image-20240603161758260.png) 

![image-20240603161816918](https://ntpe.cht.com.tw/api/uploads/images/image-20240603161816918.png) 

Port security 的應用主要是交換器如果連接超過一定數量的機器，會讓port關掉的機制以防不安全的機器連到交換器。假設在中華電信的某交換器只允許插入兩個設備，有個新人或外部人員想要拉額外的網路線來連接第三台設備，第三台設備的port就會被關掉或者封包被丟棄，以達到網路安全。下列為上面提及pdf 用關鍵字 `port-security` 搜尋所包含的全部題目

Port security is a feature available on many managed switches that allows you to limit the number of MAC addresses that can be learned on a port. When the number of connected devices exceeds the specified limit, the switch can take various actions such as:

- **Shutdown**: The switch port is administratively shut down, effectively disabling the port.
- **Restrict**: The switch drops packets from addresses that exceed the limit without shutting down the port.
- **Protect**: Similar to restrict, but it does not generate a notification when the limit is exceeded.

Here is an example of how to configure port security on a Cisco switch to limit the port to a single MAC address and shut it down if exceeded:

```plaintext
interface FastEthernet0/1
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security violation shutdown
 switchport port-security mac-address sticky
```

### CCNA Questions regarding port-security

**Question 220** - [DRAG DROP](https://www.examtopics.com/discussions/cisco/view/74801-exam-200-301-topic-1-question-665-discussion/) 
An engineer is tasked to configure a switch with port security to ensure devices that forward unicasts, multicasts, and broadcasts are unable to flood the port. The port must be configured to permit only two random MAC addresses at a time. Drag and drop the required configuration commands from the left onto the sequence on the right. Not all commands are used.
Select and Place:

![](https://www.examtopics.com/assets/media/exam-media/04300/0053800001.png) 

The `switchport port-security violation shutdown` command is essential if you want the port to automatically shut down upon a security violation, such as when the number of connected MAC addresses exceeds the defined maximum. If this command is omitted, the default violation mode (`shutdown`) still applies unless it has been previously changed to another mode like `restrict` or `protect` through another configuration. If the answer sheet allows only four slots and this command is omitted, it's likely assuming the default behavior, which is to shut down the port upon violation.

The answer will be 

1. #switchport mode access 
2. #switchport port-security 
3. #switchport port-security maximum 2 
4. #switch port-security sticky



**QUESTION 229** - PDF上面給D(shutdown)，但其實C(restrict)比較為正確答案

A port security violation has occurred on a switch port due to the maximum MAC address count being exceeded,which command must be configured to increment the security-violation count and forward an SNMP trap? [Referring link](https://www.examtopics.com/discussions/cisco/view/63606-exam-200-301-topic-1-question-642-discussion/)

````txt
A. switchport port-security violation access 
B. switchport port-security violation protect 
C. switchport port-security violation restrict 
D. switchport port-security violation shutdown
````

When dealing with Cisco switch port security violations, there are several actions you can configure the switch to take when a security violation occurs due to exceeding the maximum number of MAC addresses. The options include:

- **Protect**: Drops packets from unknown source addresses without shutting down the interface or sending an SNMP trap.
- **Restrict**: Drops packets from unknown source addresses, increments the security-violation count, and sends an SNMP trap.
- **Shutdown**: Disables the interface (puts it into error-disabled state) and sends an SNMP trap.

So first of all, owing to the fundamental principle, A can be omitted. Secondly, `protect` won't work on freaking snmp, so it also won't be an option

**C. Restrict** and **D. Shutdown** both send SNMP traps, but only **C. Restrict** keeps the port active while incrementing the violation count, meeting the need for active monitoring without disabling the port.

**QUESTION 304** - [Reference](https://www.examtopics.com/discussions/cisco/view/81125-exam-200-301-topic-1-question-140-discussion/)
What causes a port to be placed in the err-disabled state?
A. latency
B. port security violation ✅
C. shutdown command issued on the port
D. nothing plugged into the port

線上討論區的題目和選項為
What causes a port to be placed in the err-disabled state?
A. nothing plugged into the port
B. link flapping ✅
C. latency
D. shutdown command issued on the port

From Cisco [Website](https://learningnetwork.cisco.com/s/question/0D53i00000Kt17xCAB/error-disable-port-state):  

When a port is in error-disabled state, it is effectively shut down and no traffic is sent or received on that port. The port LED is set to the orange color and, when you issue the **show interfaces command**, the port status shows as **Errdisabled**. The **Errdisable** error disable feature was designed to inform the administrator when there is a port problem or error. The reasons a catalyst switch can go into **Errdisable** mode and shutdown a port are many and include:

- Duplex Mismatch
- Loopback Error
- ✅ Link Flapping (up/down)
  **Link Flapping** refers to a network condition where a connection (link) between two network devices rapidly toggles between being up and down. This can occur repeatedly over a short period, causing instability and disruptions in the network.
- ✅ Port Security Violation
- Unicast Flodding
- UDLD Failure
- Broadcast Storms
- BPDU Guard

But why `shutdown command issued on the port` cannot be an answer?

When discussing the `shutdown` command and the `shutdown` violation mode under port security, it's important to distinguish between these two scenarios:

1. **Shutdown Command Issued on the Port**:
   - When you manually issue the `shutdown` command on a Cisco switch port, you're administratively disabling the port. This action changes the port's operational state to "administratively down." This state is intentional and controlled by network administrators.
   - In this case, the port is not in an error condition but is intentionally disabled.
2. **Shutdown Mode in Port Security Violation**:
   - The `shutdown` mode in port security settings is different. If a port security violation occurs (e.g., an unauthorized MAC address tries to connect), and the port is configured to handle violations with the `shutdown` mode, the port is automatically disabled and placed in the `err-disabled` state.
   - This state indicates that there has been a security-related issue or another serious error, which caused the port to shut down to protect the network. The port remains in this state until it is manually reenabled, typically after administrators have addressed the cause of the security violation.

**QUESTION 304**

The SW1 interface g0/1 is in the down/down state.which two configurations are valid reasons for the interface conditions?(choose two)
A. There is a duplex mismatch
B. There is a speed mismatch
C. There is a protocol mismatch
D. The interface is shut down ❎
E. The interface is error-disabled

Applying the logic from QUESTION 304, D can't be an answer because we're administratively disabling the port, this is a manual configuration.
According to what  Cisco [Website](https://learningnetwork.cisco.com/s/question/0D53i00000Kt17xCAB/error-disable-port-state) has listed, A&E is the answers

**Real Question**

Q. Everytime seems if i use internet a lot in my OA and the internet went down. do you know the reason, is that pertaining to port-security
A. When you experience internet connectivity issues after extensive use, it might not directly relate to port security unless there are specific security settings that trigger these issues

