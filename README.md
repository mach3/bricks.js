
# Bricks.js

Just arrange blocks like bricks.

## Usage

```javascript
// Initialize instance
var bricks = $("#container").bricks({ /* options */ });

bricks.add( BLOCK_ELEMENT ); // Add block
bricks.clean(); // Clean all blocks
```

- `BLOCK_ELEMENT` is jQuery object or HTML*Element.


## Options

```javascript
var bricks = $("#container").bricks({
	width: 320, // Block width
	cols: 3,    // Column's count
	gutter: 30  // Gutter size
})
```
