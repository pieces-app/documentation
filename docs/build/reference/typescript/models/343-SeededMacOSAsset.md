
# SeededMacOSAsset

An Seeded Asset specific to MacOS which takes in a Value, and Application

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | [**Application**](Application)
**value** | **string**

## Example

```typescript
import { SeededMacOSAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededMacOSAsset = {
    "schema": null,
    "application": null,
    "value": console.log("hello world"),
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededMacOSAsset
console.log(exampleParsed)
```


