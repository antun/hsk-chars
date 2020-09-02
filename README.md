# hsk-chars

Lightweight package for checking HSK levels of characters. Provides ways to check the HSK level of characters. Note the focus is on **characters**, not words. There are other utilities which are smarter, and better suited to analyzing words.

## Usage

### JavaScript
```
const hskChars = require('hsk-chars');
const average = hskChars.getAverageHskLevel('定其主理心人一个人人');
// 2 because half of the characters are HSK 1 and half are HSK 3.
```

### Command-Line

The format is `hsk-chars METHOD STRING` where METHOD is the method name.
```
$ hsk-chars getMaxHskLevel 还要一个包冤
6
```

For methods that take an argument, pass it before the string:
```
$ hsk-chars isAtOrBelowLevel -l 2 还要一个
true
```


## Documentation

In all cases, `level` can be 1-6.

### isOnlyHskLevel

```
isOnlyHskLevel(level, string)
```

Returns true if `string` is *exactly* the `level` specified. If it is below the level, or above, return false.

### isAtOrBelowLevel

```
isAtOrBelowLevel(level, string)
```

Returns true if `string` is entirely at or below the `level` specified.


### getMaxHskLevel

```
getMaxHskLevel(string)
```

Returns the maximum HSK level found in string.

### getAverageHskLevel

```
getAverageHskLevel(string)
```

Returns an average level based on the characters in the string.

## Publishing

Run `npm run publish:patch` (or `minor`, `major`) to publish.
