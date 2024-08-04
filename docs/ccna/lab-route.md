---
sidebar_position: 6
---



# Router

## 靜態路由

![image-20240530170608340](https://ntpe.cht.com.tw/api/uploads/images/image-20240530170608340.png)

Certainly! Let's break down the tasks and provide the required configurations based on the provided image.

Tasks Overview:

1. **Configure static routing to ensure R1 prefers the path through R2 to reach only PC1 on R4's LAN.**
2. **Configure static routing that ensures traffic sourced from R1 will take an alternate path through R3 to PC1 in the event of an outage along the primary path.**
   配置靜態路由，以確保從 R1 發出的流量在主路徑中斷時通過 R3 走備用路徑到達 PC1。
3. **Configure default routes on R1 and R3 to the Internet using the least number of hops.**

Suggested Configuration Steps:

Task 1: Configure Static Routing on R1 to Prefer Path Through R2

```
R1> enable
R1# configure terminal
R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.24.2
R1(config)# end
```

Task 2: Configure Static Routing for Alternate Path on R1 Through R3

```
R1> enable
R1# configure terminal
R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.34.2 10
R1(config)# end
```

*The `10` at the end of the command sets an administrative distance higher than the primary route, making it a backup route.*

Task 3: Configure Default Routes to the Internet

```
R1> enable
R1# configure terminal
R1(config)# ip route 0.0.0.0 0.0.0.0 10.0.13.1
R1(config)# end
```

```
R3> enable
R3# configure terminal
R3(config)# ip route 0.0.0.0 0.0.0.0 209.165.201.1
R3(config)# end
```

Complete Configuration in Router Notation:

R1 Configuration:

```
R1> enable
R1# configure terminal
R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.24.2
R1(config)# ip route 10.0.41.0 255.255.255.0 10.0.34.2 10
R1(config)# ip route 0.0.0.0 0.0.0.0 10.0.13.1
R1(config)# end
```

R3 Configuration:

```
R3> enable
R3# configure terminal
R3(config)# ip route 0.0.0.0 0.0.0.0 209.165.201.1
R3(config)# end
```

This configuration ensures that the routes are set correctly, with a primary and backup path on R1 and a default route on both R1 and R3.

### Another Example

![](https://ntpe.cht.com.tw/uploads/images/image-20240531095543938-1717120597589-1.png)

![](https://ntpe.cht.com.tw/uploads/images/image-20240531095550912-1717120597589-2.png)

Configuration Steps for Static Routing

1. **Configure static routing using host routes from R3 to R1**: Source IP: 209.165.200.230
   
2. **Configure IPv4 default route on R2 to R4**.

3. **Configure IPv6 default route on R2 to R4**.

Configuration Commands

```plaintext
R3# conf t
R3(config)# ip route 192.168.1.1 255.255.255.255  E0/1 // 209.165.200.229 -  next-hop IP. it's not self-ip
R3(config)# end
R3# wr
```

```plaintext
R2# conf t
R2(config)# ip route 192.168.1.1 255.255.255.255 E0/0 // 209.165.200.225 -  next-hop IP
R2(config)# ip route 0.0.0.0 0.0.0.0 E0/2             // 209.165.200.130
R2(config)# ipv6 route ::/0 E0/2
R2(config)# end
R2# wr
```

```plaintext
R1# conf t
R1(config)# ip route 209.165.200.228 255.255.255.252 E0/0
R1(config)# end
R1# wr
```

Summary:

- **R3**: Routes traffic to R1’s loopback via R2.
- **R2**: Routes traffic to R1’s loopback and default traffic to R4.
- **R1**: Routes traffic to the subnet connecting R1 to R2.

In the given scenario, R4 does not need specific static routes configured because:

1. **Default Route from R2**: R2 is configured with default routes that direct both IPv4 and IPv6 traffic to R4. This means R4 can handle any traffic coming from R2 without needing specific static routes for each destination.
2. **Focus on R3 to R1 Connectivity**: The primary goal is to establish static routes from R3 to R1 using R2 as an intermediary. The configuration ensures that R3 can reach R1’s loopback address, with R2 properly routing the traffic.

## 動態路由

![image-20240531162915344](https://ntpe.cht.com.tw/uploads/images/image-20240531162915344.png)

![image-20240531163239621](https://ntpe.cht.com.tw/uploads/images/image-20240531163239621.png) 

To address this question, I'll guide you through configuring the required static routes on the routers R1 and R2 as described in the problem statement. Here’s a detailed step-by-step approach:

#### **Task Breakdown**

1. **Configure reachability to the switch SW1 LAN subnet on router R2:**
2. **Configure default reachability to the Internet subnet on router R1:**
3. **Configure a single static route in router R2 to reach the Internet subnet considering both redundant links between routers R1 and R2. A default route is not allowed in router R2:**
4. **Configure a static route in router R1 toward the SW1 LAN subnet where the primary link must be through Ethernet0/1, and the backup link must be through Ethernet0/2 using a floating route:**

#### **Configuration Steps**

To correct and complete the final version based on the provided images, let's ensure that the configuration steps adhere to the requirements specified:

**Reachability to SW1 LAN subnet (192.168.0.0/24):**

```shell
R2(config)# ip route 192.168.0.0 255.255.255.0 10.10.31.1
```

**Static route to the Internet subnet (172.20.20.128/25):**

```shell
R2(config)# ip route 172.20.20.128 255.255.255.128 e0/1
```

**Default reachability to the Internet subnet (172.20.20.128/25):**

```shell
R1(config)# ip route 0.0.0.0 0.0.0.0 10.10.13.3
```

**Static route to the SW1 LAN subnet (192.168.0.0/24):**

Primary route via Ethernet0/1:

```shell
R1(config)# ip route 192.168.0.0 255.255.255.0 10.10.12.2
```

**Floating static route as a backup via Ethernet0/2:**

On Router R1:
```shell
R1(config)# ip route 192.168.0.0 255.255.255.0 10.10.12.2 3
```

Verify connectivity to the SW1 LAN from R2:

```shell
R2# ping 192.168.0.1
```

By ensuring that the configuration steps are correct and aligned with the network diagram, we can achieve the required connectivity and redundancy.Verify the routing table on both R1 and R2 to ensure the routes are installed correctly:

```shell
R1# show ip route
R2# show ip route
```

By following these configurations, you will ensure that the static routes are set up correctly to meet the requirements specified in the question. Let me know if you need any further details or clarification on any of the steps.