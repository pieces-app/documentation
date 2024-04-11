
# ByteDescriptor

This is a nice microclass to help with managing the size of a File or Fragment in a readable way for UI\'s

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**value** | **number**
**readable** | **string**

## Example

```typescript
import { ByteDescriptor } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ByteDescriptor = {
    "schema": null,
    "value": 33600,
    "readable": 33.6 KB,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ByteDescriptor
console.log(exampleParsed)
```


