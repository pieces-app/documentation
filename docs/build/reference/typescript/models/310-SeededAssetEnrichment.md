
# SeededAssetEnrichment

This is a specific Model for the SeededAsset that will enable the developer to modify the enrichment levels of persons, tags, websites.  These enrichment levels will guarentee that the # of people/tags/websites do not eceeed the provided value, but will not guarentee a minimum.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**tags** | **number**
**websites** | **number**
**persons** | **number**
**hints** | **number**

## Example

```typescript
import { SeededAssetEnrichment } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAssetEnrichment = {
    "schema": null,
    "tags": null,
    "websites": null,
    "persons": null,
    "hints": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetEnrichment
console.log(exampleParsed)
```


