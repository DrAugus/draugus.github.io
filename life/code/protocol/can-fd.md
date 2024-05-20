# CAN FD

## concepts

- CAN-FD – Controller Area Network with Flexible Data-rate
- RRS – Remote Request Substitution
- IDE – IDentifier Extension
- FDF – FD Format Indicator
- res – Reserved bit in FD frames
- BRS – Bit Rate Switch
- ESI – Error State Indicator
- DLC – Data Length Code

## tutorial links

- [CAN tutorial by Kvaser](https://kvaser.com/can-protocol-tutorial/)
- [CAN FD tutorial by Kvaser](https://kvaser.com/can-fd-protocol-tutorial/)

## cases

- [OpenCyphal/libcanard](https://github.com/OpenCyphal/libcanard/)

## diff can-fd & flexray

CAN FD XL 和 FlexRay 是两种用于汽车和工业应用的通信协议。它们各有优缺点，设计目标和使用场景也有所不同。

CAN FD XL

CAN FD（Controller Area Network with Flexible Data-rate）XL 是标准 CAN 协议的扩展版本，它旨在克服传统 CAN 协议的一些限制，特别是在数据速率和数据量方面。CAN FD XL 是指 CAN FD 协议的进一步扩展，通常用于描述新一代的 CAN 技术，它包含以下特点：

更高的数据速率：相比传统 CAN 的最高 1 Mbps，CAN FD 支持高达 5 Mbps（在特定条件下甚至更高）。  
更大的数据帧：传统 CAN 帧的数据长度限制为 8 字节，而 CAN FD 可扩展至 64 字节。  
灵活的数据率：数据部分和仲裁部分可以使用不同的数据速率，提高了通信效率。  
向后兼容：能够与传统 CAN 节点共存，允许在同一总线上运行混合的传统 CAN 和 CAN FD 设备。

CAN FD XL 特别适用于需要更高吞吐量和更大数据帧的应用场景，比如复杂的电子控制单元（ECU）之间的通信、高频数据采集和传输等。

FlexRay

FlexRay 是另一种高级的汽车通信总线标准，由 FlexRay Consortium 开发，特别适用于高数据率和高可靠性的应用场景。其特点如下：

高数据速率：支持高达 10 Mbps 的数据传输速率，比传统 CAN 更快，适合实时性要求高的应用。  
双通道冗余：FlexRay 一般提供双通道通信，这增加了系统的可靠性和容错能力。即使一个通道发生故障，通信仍可通过另一个通道进行。  
灵活的时间调度：支持静态和动态时间分段（TDMA 和 FTDMA），可以满足不同数据帧的实时传输需求。  
确定性传输：FlexRay 提供确定性的通信时间，这对实时性要求高的安全关键型应用非常重要，如高级驾驶辅助系统（ADAS）和自动驾驶功能。  
高可靠性：设计上具备高鲁棒性，抗干扰能力强，适用于关键任务和安全相关的系统。

FlexRay 通常用于比 CAN FD 更苛刻的环境和应用场景，如自动驾驶车辆、底盘控制、动力传动系统等，在这些场景中数据量大、实时性和可靠性要求高。

总结而言，CAN FD XL 和 FlexRay 各有所长，选择哪种协议取决于具体的应用需求、性能要求和系统架构。CAN FD XL 更适用于需要较高数据速率和灵活性的系统，而 FlexRay 则适用于需要极高可靠性和确定性时间调度的应用场景。

## 帧格式

7 部分  
SOF(Start of Frame) 帧起始，Arbitration Field 仲裁场，Control Field 控制场，Data Field 数据场，CRC Field(Stuff Count + CRC Sequence)，ACK Field，EOF(End of Frame) 帧结束

![alt text](can-fd-frame.png)

### SOF

CAN, CAN FD 均使用显性 1 bit SOF

### Arbitration Field

ID: 相同，标准ID/扩展ID，11位  
CAN：RTR 1位，CAN FD：RSS 1位

### Control Field

CAN, CAN FD 的 IDE(1bit), res(1bit), DLC(4bits) 位相同

CAN FD 增加：  

- FDF：FD 格式位，隐性(CAN FD)，显性(CAN)
- BRS：速率切换位，隐性（切换可变速率），显性（不切换）
- ESI：错误状态指示位，隐性（主动错误），显性（被动错误）

DLC（Data Length Code，数据长度码）是一个重要的字段，用于指示数据帧中的数据字节数。然而，与经典CAN的DLC不同，CAN FD中的DLC有一些新的特点和扩展。

在经典CAN和CAN FD中，DLC字段位于CAN帧的控制字段中，其主要功能是指示数据字段中包含的数据字节数。

在CAN FD中，DLC的值可以取0到15，并且根据DLC值，实际的数据字节数可以从0到64个字节不等。  
DLC值为0到8时，实际的数据字节数对应DLC的值。  
DLC值为9到15时，实际的数据字节数对应特定的预定义长度。

下面是一个DLC值与实际数据字节数的映射表：

|DLC|DLC(bin)|数据字节数|
|:---:|:---:|:---:|
|0|0000|0|
|1|0001|1|
| 2   | 0010           | 2          |  
| 3   | 0011           | 3          |  
| 4   | 0100           | 4          |  
| 5   | 0101           | 5          |  
| 6   | 0110           | 6          |  
| 7   | 0111           | 7          |  
| 8   | 1000           | 8          |  
| 9   | 1001           | 12         |  
| 10  | 1010           | 16         |  
| 11  | 1011           | 20         |  
| 12  | 1100           | 24         |  
| 13  | 1101           | 32         |  
| 14  | 1110           | 48         |  
| 15  | 1111           | 64         |

### Data Field

CAN: 0-8 Bytes  
CAN FD: 0-8, 12, 16, 20, 24, 32, 48, 64 Bytes  
数据场里低字节先发 Byte0...Byte7  
每个字节高位先发 bit7...bit0  
DLC=0 无数据场

### CRC Field

Stuff Count: 4位，CAN 中不使用该填充位  
表示在 CRC Sequence 前填充位的数量，模8算法以3位格雷码和一位奇偶校验码存储

:::info 格雷码
最高位保留，次高位为二进制最高位与次高位异或运算结果
:::

CRC Sequence


### ACK Field

### EOF

