# GetTagType

## A library for get the type of a Tag HTML

example: 

```
getTagType("<div>")      // return "Open"
getTagType("<img/>")     // return "AutoClose"
getTagType("<input>")    // return "AutoClose"
getTagType("</section>") // return "Close"
```
