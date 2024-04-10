
# TrackedFormat

A minimal format to send to Mixpanel

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**classification** | [**Classification**](Classification)
**role** | [**Role**](Role)
**asset** | **string**
**fragment** | **boolean**
**file** | **boolean**

## Example

```typescript
import { TrackedFormat } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedFormat = {
    "schema": null,
    "id": null,
    "classification": null,
    "role": null,
    "asset": null,
    "fragment": null,
    "file": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedFormat
console.log(exampleParsed)
```


