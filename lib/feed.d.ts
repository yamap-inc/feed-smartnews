import { SNFFeedOptions, SNFItem } from "./typings";
export declare class SNFFeed {
    options: SNFFeedOptions;
    items: SNFItem[];
    categories: string[];
    constructor(options: SNFFeedOptions);
    addItem: (item: SNFItem) => number;
    addCategory: (category: string) => number;
    rss2: () => string;
}
