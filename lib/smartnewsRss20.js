"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convert = require("xml-js");
exports.default = (function (ins) {
    var options = ins.options;
    var isAtom = false;
    var isContent = false;
    var base = {
        _declaration: { _attributes: { version: "1.0", encoding: "utf-8" } },
        rss: {
            _attributes: { version: "2.0" },
            channel: {
                title: { _text: options.title },
                link: { _text: options.link },
                description: { _text: options.description },
                pubDate: { _text: options.pubDate ? options.pubDate.toUTCString() : new Date().toUTCString() }
            }
        }
    };
    if (options.language) {
        base.rss.channel.language = { _text: options.language };
    }
    if (options.copyright) {
        base.rss.channel.copyright = { _text: options.copyright };
    }
    if (options.ttl) {
        base.rss.channel.ttl = { _text: options.ttl };
    }
    if (options["snf:logo"].url) {
        base.rss.channel["snf:logo"] = {
            _attributes: {
                url: options["snf:logo"].url
            }
        };
    }
    base.rss.channel.item = [];
    ins.items.map(function (entry) {
        var item = {
            title: {
                _cdata: entry.title
            },
            link: {
                _text: entry.link
            },
            pubDate: {
                _text: entry.pubDate.toUTCString()
            },
            "content:encoded": {
                _cdata: entry["content:encoded"]
            }
        };
        if (entry.guid) {
            item.guid = { _text: entry.guid };
        }
        if (entry.description) {
            item.description = { _text: entry.description };
        }
        if (entry.category) {
            item.category = { _text: entry.category };
        }
        if (entry["dc:creator"]) {
            item["dc:creator"] = { _text: entry["dc:creator"] };
        }
        if (entry["dc:language"]) {
            item["dc:language"] = { _text: entry["dc:language"] };
        }
        if (entry["media:thumbnail"].url) {
            item["media:thumbnail"] = {
                _attributes: {
                    url: entry["media:thumbnail"].url
                }
            };
        }
        if (entry["snf:video"].url) {
            item["snf:video"] = {
                _attributes: {
                    url: entry["snf:video"].url,
                    caption: entry["snf:video"].caption
                }
            };
        }
        if (entry["media:status"]) {
            item["media:status"] = { _text: entry["media:status"] };
        }
        if (entry["snf:advertisement"].length !== 0) {
            item["snf:advertisement"] = {
                "snf:sponsoredLink": []
            };
            for (var _i = 0, _a = entry["snf:advertisement"]; _i < _a.length; _i++) {
                var adv = _a[_i];
                var sponsoredLink = {
                    _attributes: {
                        link: adv.link,
                        advertiser: adv.advertiser
                    }
                };
                if (adv.title) {
                    sponsoredLink._attributes.title = adv.title;
                }
                if (adv.thumbnail) {
                    sponsoredLink._attributes.thumbnail = adv.thumbnail;
                }
                item["snf:advertisement"]["snf:sponsoredLink"].push(sponsoredLink);
            }
        }
        if (entry.guid) {
            item.guid = { _cdata: entry.guid };
        }
        if (entry.guid) {
            item.guid = { _cdata: entry.guid };
        }
        if (entry.guid) {
            item.guid = { _cdata: entry.guid };
        }
        if (entry.guid) {
            item.guid = { _cdata: entry.guid };
        }
        if (entry.guid) {
            item.guid = { _cdata: entry.guid };
        }
        base.rss.channel.item.push(item);
    });
    if (isContent) {
        base.rss._attributes["xmlns:content"] = "http://purl.org/rss/1.0/modules/content/";
    }
    if (isAtom) {
        base.rss._attributes["xmlns:atom"] = "http://www.w3.org/2005/Atom";
    }
    return convert.js2xml(base, { compact: true, ignoreComment: true, spaces: 4 });
});
//# sourceMappingURL=smartnewsRss20.js.map