# hsk-chars

Lightweight package for checking HSK levels of characters. Provides ways to check the HSK level of characters. Note the focus is on **characters**, not words. There are other utilities which are smarter, and better suited to analyzing words.

## Usage

### JavaScript


### Command-Line

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
