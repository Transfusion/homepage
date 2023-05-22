# Radically

## Lookup Preprocessing Algorithm

A basic implementation of a lookup system from constituent radical to character is simple - depth first search starting from the root node, adding every encountered character in every IDS string into a hash table / dictionary / similar data structure. Indeed, this is done in this project.

```
車 -> 蓮,櫣,輿,轉 ...
车 -> 莲,舆,转 ...
```

The complication arises if we want to include radical frequency in our search - e.g. "find all characters with at least 3 occurrences of 人" should return 傘, 众, and 齒, but not 从, 纵, 齿, etc.
