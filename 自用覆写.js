function main(config) {
  config["proxy-groups"] = [
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      name: "手动选择",
      type: "select",
	  url: "http://www.gstatic.com/generate_204",
      proxies: ["DIRECT", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Urltest.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      name: "自动选择",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      filter: "(?i)香港|Hong Kong|HK|Hongkong",
      name: "香港",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      filter: "(?i)新加坡|Singapore|SG",
      name: "新加坡",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      filter: "(?i)日本|Japan|JP",
      name: "日本",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      filter: "(?i)台湾|Taiwan|TW",
      name: "台湾",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/KR.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      filter: "(?i)韩国|Korea|KR",
      name: "韩国",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群",
      filter: "(?i)美国|US",
      name: "美国",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/UN.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网|TG|群|韩国|Korea|KR|South Korea|美国|US|台湾|Taiwan|TW|日本|Japan|JP|新加坡|Singapore|SG|香港|Hong Kong|HK|Hongkong|United",
      name: "其他地区",
      type: "select",
      interval: 300,
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Telegram.png",
      name: "Telegram",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Google.png",
      name: "Google",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/YouTube.png",
      name: "Youtube",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Netflix.png",
      name: "Netflix",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Bili.png",
      name: "哔哩哔哩",
      type: "select",
      proxies: ["DIRECT", "手动选择", "香港", "台湾"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/steam.png",
      name: "Steam",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/epic.png",
      name: "Epic",
      type: "select",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
    },
    {
      icon: "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Global.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置|机场|官网",
      proxies: ["DIRECT", "手动选择", "自动选择", "香港", "新加坡", "台湾", "日本", "韩国", "美国", "其他地区"],
      name: "GLOBAL",
      type: "select",
    }
  ];
  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  config["rule-providers"] = Object.assign(config["rule-providers"], {
    private: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.yaml",
      path: "./ruleset/private.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    cn_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
      path: "./ruleset/cn_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    telegram_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.yaml",
      path: "./ruleset/telegram_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    telegram_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/telegram.yaml",
      path: "./ruleset/telegram_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    google_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google.yaml",
      path: "./ruleset/google_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    "geolocation-!cn": {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.yaml",
      path: "./ruleset/geolocation-!cn.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    cn_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml",
      path: "./ruleset/cn_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    bahamut_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bahamut.yaml",
      path: "./ruleset/bahamut_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    bilibili1_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bilibili.yaml",
      path: "./ruleset/bilibili1_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    bilibili2_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/bilibili2.yaml",
      path: "./ruleset/bilibili2_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    google_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.yaml",
      path: "./ruleset/google_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    youtube_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.yaml",
      path: "./ruleset/youtube_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    youtube_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/yt.yaml",
      path: "./ruleset/youtube_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    netflix_ip: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.yaml",
      path: "./ruleset/netflix_domain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    netflix_domain: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.yaml",
      path: "./ruleset/netflix_ip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    steam: {
      url: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam.yaml",
      path: "./ruleset/steam.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    epic: {
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Epic/Epic.yaml",
      path: "./ruleset/epic.yaml",
      behavior: "classical",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
  });

  config["rules"] = [
    "RULE-SET,private,DIRECT",
    "RULE-SET,steam,Steam",
    "RULE-SET,epic,Epic",
    "RULE-SET,bilibili1_domain,哔哩哔哩",
    "RULE-SET,bilibili2_domain,哔哩哔哩",
    "RULE-SET,youtube_domain,Youtube",
    "RULE-SET,youtube_ip,Youtube",
    "RULE-SET,netflix_domain,Netflix",
    "rULE-SET,netflix_ip,Netflix",
    "RULE-SET,telegram_domain,Telegram",
    "RULE-SET,telegram_ip,Telegram",
    "RULE-SET,google_domain,Google",
    "RULE-SET,google_ip,Google",
    "RULE-SET,geolocation-!cn,手动选择",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,cn_ip,DIRECT",
    "MATCH,手动选择",
  ];
  return config;
}
