
# Space Model

This is used in the TrackedAssetsEventSearchMetadata

## Properties Model

Name | Type
------------ | -------------
**size** | **number**
**duration** | **number**

## Example Model

```typescript
import { Space } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Space = {
    "size": null,
    "duration": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Space
console.log(exampleParsed)
```


