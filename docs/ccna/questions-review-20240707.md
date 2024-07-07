# Questions Completed on 2024-07-07



## SSH

````txt
Router(config)# hostname Router
Router(config)# ip domain-name example.com
Router(config)# crypto key generate rsa
The name for the keys will be: Router.example.com
Choose the size of the key modulus in the range of 360 to 4096 for your
General Purpose Keys. Choosing a key modulus greater than 512 may take
a few minutes.

How many bits in the modulus [512]: 2048
Generating RSA keys ...
[OK]

Router(config)# username admin privilege 15 secret YourPassword
Router(config)# ip ssh version 2
Router(config)# line vty 0 4
Router(config-line)# transport input ssh
Router(config-line)# login local
````



## IPv6 & IPv4

To verify the configuration, you can use the ping command to ensure connectivity between the
routers.

![image-20240707183223929](/Users/han/typora-files/image-20240707183223929.png) 

 

Router R1 Configuration: 

```plaintext
ipv6 unicast-routing
interface Ethernet0/1
ip address 192.168.180.17 255.255.255.240
ipv6 address 2001:db8:acca::1/64
no shutdown
```

Router R2 Configuration:

```plaintext
ipv6 unicast-routing
interface Ethernet0/1
ip address 192.168.180.30 255.255.255.240
ipv6 address 2001:db8:acca::2/64
no shutdown
```