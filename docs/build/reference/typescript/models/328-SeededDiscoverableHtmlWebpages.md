
# SeededDiscoverableHtmlWebpages Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;SeededDiscoverableHtmlWebpage&gt;**](SeededDiscoverableHtmlWebpage)
**application** | **string**

## Example Model

```typescript
import { SeededDiscoverableHtmlWebpages } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededDiscoverableHtmlWebpages = {
    "schema": null,
    "iterable": null,
    "application": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableHtmlWebpages
console.log(exampleParsed)
```


