import { WishAll } from "../type";

// 说明：
// 20 + 21= 41 days one version /42days/
// ver2.6 下半因上海疫情封城拖延
// 3.0 3.1 3.2 三个版本时间缩短 或许跟上面有关系吧 均为34天 16+18 /35days/
export const WISH: WishAll = {
  characters: [
    {
      name: ["Romaritime Meluserenity"],
      image: [1],
      shortName: ["liu_ping"],
      start: "2024/07/04 10:00:00 +0800",
      end: "2024/07/24 17:59:00 +0800",
      wish5star: ["liu_ping"],
      wish4star: ["liu_ping", "liu_ping", "liu_ping"],
      version: "1.0",
      wishName: ["柔柔海露心"],
      url: ["?", "?"]
    }, {
      name: ["Romaritime Meluserenity"],
      image: [1],
      shortName: ["liu_ping"],
      start: "2024/07/24 18:00:00 +0800",
      end: "2024/08/14 14:59:00 +0800",
      wish5star: ["liu_ping"],
      wish4star: ["liu_ping", "liu_ping", "liu_ping"],
      version: "1.0",
      wishName: ["柔柔海露心"],
      url: ["?", "?"]
    },
  ],
  weapons: [
    {
      name: "Epitome Invocation",
      image: 1,
      start: "2024/07/04 10:00:00 +0800",
      end: "2024/07/24 17:59:00 +0800",
      wish5star: ["Silvershower Heartstrings", "Splendor of Tranquil Waters"],
      wish4star: ["Lion's Roar", "Favonius Lance", "Favonius Codex", "Sacrificial Bow"],
    }, {
      name: "Epitome Invocation",
      image: 2,
      start: "2024/07/24 18:00:00 +0800",
      end: "2024/08/14 14:59:00 +0800",
      wish5star: ["Silvershower Heartstrings", "Splendor of Tranquil Waters"],
      wish4star: ["Lion's Roar", "Favonius Lance", "Favonius Codex", "Sacrificial Bow"],
    },
  ],
};
