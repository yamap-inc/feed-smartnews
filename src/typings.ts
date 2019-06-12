export interface SNFItem {
  id?: string;
  title: string;
  link: string;
  guid?: string;
  description?: string;
  pubDate: Date;
  "content:encoded"?: string;
  category?: string;
  "dc:creator"?: string;
  "dc:language"?: string;
  "media:thumbnail"?: {
    url: string;
  };
  "snf:video"?: {
    url: string;
    caption: string;
  };
  "item.media:status"?: string;
  "item.snf:advertisement"?: {
    "snf:sponsoredLink": [
      {
        link: string;
        title?: string;
        thumbnail?: string;
        advertiser: string;
      }
    ];
  };
  "item.snf:analytics"?: string;
}

export interface SNFFeedOptions {
  id?: string;
  title: string;
  link: string;
  description: string;
  pubDate: Date;
  language?: string;
  copyright?: string;
  ttl?: number;
  ["snf:logo"]?: {
    url: string;
  };
}
