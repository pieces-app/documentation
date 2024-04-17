---
title: AssetFilter | TypeScript SDK
---


# AssetFilter

** in the future, consider adding an optional bool\'s called nextAnd, nextOr which will say that the next filter will be  AND behavor or OR behavior.  \"operations\": here is is an optional property to allow or behavior,(we will only allow 1 level deep of or\'s), if or is not passed in then it is just simply ignored. If or is passed in then we will be or\'d together with the top level filter and considered extras. default behavior for operations is and, however yoour can specifiy OR operations as well.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**classification** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**tags** | **Array&lt;string&gt;**
**websites** | **Array&lt;string&gt;**
**persons** | **Array&lt;string&gt;**
**phrase** | [**AssetFilterPhrase**](AssetFilterPhrase)
**created** | [**AssetFilterTimestamp**](AssetFilterTimestamp)
**updated** | [**AssetFilterTimestamp**](AssetFilterTimestamp)
**operations** | [**AssetFilters**](AssetFilters)

## Example

```typescript
import { AssetFilter } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetFilter = {
    "schema": null,
    "classification": null,
    "tags": null,
    "websites": null,
    "persons": null,
    "phrase": null,
    "created": null,
    "updated": null,
    "operations": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilter
console.log(exampleParsed)
```


