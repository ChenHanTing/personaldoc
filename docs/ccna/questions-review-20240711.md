# Questions Completed on 2024-07-10

### About Test

having a lesson taught

![image-20240710103513987](https://han.blob.core.windows.net/typora/image-20240710103513987.png)

### Other Questions

When you configure SSH with public key authentication, users authenticate using a cryptographic key instead of a password. This method enhances security and convenience as users do not need to type a password

```
R1(config)# hostname R1
R1(config)# ip domain-name example.com
R1(config)# crypto key generate rsa modulus 2048
R1(config)# username admin privilege 15
R1(config)# ip ssh public-key-chain
R1(conf-ssh-pubkey)# username admin
R1(conf-ssh-pubkey-user)# key-string
R1(conf-ssh-pubkey-data)# ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArVz... user@host
R1(conf-ssh-pubkey-data)# exit
R1(conf-ssh-pubkey-user)# exit
R1(conf-ssh-pubkey)# exit
R1(config)# line vty 0 4
R1(config-line)# login local
R1(config-line)# transport input ssh
R1(config)# ip ssh version 2
R1(config)# end
R1# write memory
```

**Authentication:** When the user connects to the router, the SSH client uses the private key to authenticate. If the private key matches the public key stored on the router, the user is granted access without needing to type a password.

```txt
R1(config)# ip ssh public-key-chain
R1(conf-ssh-pubkey)# username admin
R1(conf-ssh-pubkey-user)# key-string
R1(conf-ssh-pubkey-data)# ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEArVz... user@host
R1(conf-ssh-pubkey-data)# exit
R1(conf-ssh-pubkey-user)# exit
R1(conf-ssh-pubkey)# exit
```

![img](https://www.examtopics.com/assets/media/exam-media/04300/0035700001.png)

```txt
R1(config)# router ospf 1
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0
R1(config-router)# exit
R1(config)# interface Serial0/1
R1(config-if)# ip ospf 1 area 0
R1(config-if)# exit
```

```txt
R2(config)# router ospf 1
R2(config-router)# network 10.0.0.0 0.0.0.3 area 0
R2(config-router)# exit
R2(config)# interface Serial0/1
R2(config-if)# ip ospf 1 area 0
R2(config-if)# exit
```

![img](https://www.examtopics.com/assets/media/exam-media/04300/0021700001.jpg)

Trunk ports are set individually on each interface. However, the configuration also includes `channel-group` commands, which are used to create an EtherChannel. This allows multiple physical links to be combined into a single logical link, providing increased bandwidth and redundancy.

When configuring EtherChannel, you don't need to set trunk configuration on the logical port (Port-Channel interface) separately if you already configured it on the individual physical interfaces. The configuration applied to the physical interfaces will be inherited by the Port-Channel interface.

When configuring EtherChannel, you still need to set each member port as a trunk individually before adding them to the channel group. This ensures that all the member ports have the same configuration, which is necessary for the EtherChannel to function correctly.

```plaintext
SW1(config)# interface range fastEthernet 0/1 - 2
SW1(config-if-range)# switchport trunk encapsulation dot1q
SW1(config-if-range)# switchport mode trunk
SW1(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW1(config-if-range)# channel-group 1 mode on
```

```plaintext
SW2(config)# interface range fastEthernet 0/1 - 2
SW2(config-if-range)# switchport trunk encapsulation dot1q
SW2(config-if-range)# switchport mode trunk
SW2(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW2(config-if-range)# channel-group 1 mode active
```

The configuration at the following is thorough and ensures that both the physical interfaces and the logical port-channel interface are set up correctly. This approach can be considered best practice

```txt
SW1# configure terminal
SW1(config)# interface range fastEthernet 0/1 - 2
SW1(config-if-range)# switchport trunk encapsulation dot1q
SW1(config-if-range)# switchport mode trunk
SW1(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW1(config-if-range)# channel-group 1 mode on
SW1(config-if-range)# exit
SW1(config)# interface port-channel 1
SW1(config-if)# switchport trunk encapsulation dot1q
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk allowed vlan 100, 200, 300
SW1(config-if)# exit
```

```txt
SW2# configure terminal
SW2(config)# interface range fastEthernet 0/1 - 2
SW2(config-if-range)# switchport trunk encapsulation dot1q
SW2(config-if-range)# switchport mode trunk
SW2(config-if-range)# switchport trunk allowed vlan 100, 200, 300
SW2(config-if-range)# channel-group 1 mode active
SW2(config-if-range)# exit
SW2(config)# interface port-channel 1
SW2(config-if)# switchport trunk encapsulation dot1q
SW2(config-if)# switchport mode trunk
SW2(config-if)# switchport trunk allowed vlan 100, 200, 300
SW2(config-if)# exit
```

This configuration is indeed robust and ensures that all necessary settings are applied consistently. It combines the benefits of both detailed physical interface configuration and centralized logical interface management.

[Question](https://www.examtopics.com/discussions/cisco/view/80815-exam-200-301-topic-1-question-115-discussion/#): A network engineer must implement an IPv6 configuration on the vlan 2000 interface to create a routable locally-unique unicast address that is blocked from being advertised to the internet. Which configuration must the engineer apply?

- A. interface vlan 2000 ipv6 address ff00:0000:aaaa::1234:2343/64
- ✔ B. interface vlan 2000 ipv6 address fd00::1234:2343/64 **Most Voted**
- C. interface vlan 2000 ipv6 address fe80:0000:aaaa::1234:2343/64
- D. interface vlan 2000 ipv6 address fc00:0000:aaaa::a15d:1234:2343:8aca/64

**Suggested Answer:** _D_ [🗳️](https://www.examtopics.com/discussions/cisco/view/80815-exam-200-301-topic-1-question-115-discussion/#)

Although it starts with `fc00::` which is within the `fc00::/7` range for Unique Local Addresses (ULA), the correct range for ULA according to RFC 4193 is `fd00::/8`.

![img](https://www.examtopics.com/assets/media/exam-media/04300/0046100001.png)

[Question](https://www.examtopics.com/discussions/cisco/view/77915-exam-200-301-topic-1-question-566-discussion/#): Refer to the exhibit. Which two commands must be added to update the configuration of router R1 so that it accepts only encrypted connections? (Choose two.)

- A. transport input ssh **Most Voted**
- B. username CNAC secret R!41!3705926@
- C. crypto key generate rsa 1024 **Most Voted**
- D. line vty 0 4
- E. ip ssh version 2

**Suggested Answer:** _CE_ [🗳️](https://www.examtopics.com/discussions/cisco/view/77915-exam-200-301-topic-1-question-566-discussion/#)
