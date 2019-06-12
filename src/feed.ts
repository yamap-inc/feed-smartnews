// import renderAtom from "./atom1";
// import renderJSON from "./json";
import renderRSS from "./smartnewsRss20";
import { SNFFeedOptions, SNFItem } from "./typings";

export class SNFFeed {
  options: SNFFeedOptions;
  items: SNFItem[] = [];
  categories: string[] = [];

  constructor(options: SNFFeedOptions) {
    this.options = options;
  }

  public addItem = (item: SNFItem) => this.items.push(item);

  public addCategory = (category: string) => this.categories.push(category);

  /**
   * Returns a Atom 1.0 feed
   */
  // public atom1 = (): string => renderAtom(this);

  /**
   * Returns a RSS 2.0 feed
   */
  public rss2 = (): string => renderRSS(this);
}
