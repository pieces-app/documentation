
# SeededShare Model

 required to pass in an asset or assets.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | [**Asset**](Asset)
**users** | [**Array&lt;SeededUser&gt;**](SeededUser)
**access** | [**AccessEnum**](AccessEnum)
**assets** | [**Assets**](Assets)
**name** | **string**

## Example Model

```typescript
import { SeededShare } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededShare = {
    "schema": null,
    "asset": null,
    "users": null,
    "access": null,
    "assets": null,
    "name": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededShare
console.log(exampleParsed)
```


