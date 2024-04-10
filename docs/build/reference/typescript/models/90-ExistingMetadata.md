
# ExistingMetadata

This is a shared input model for all the exists endpoints: /tags/exists : if the tag exists you will have a defined tag:ReferencedTag, if not then it doesnt exist. /websites/exists: if the url exists you will have a defined website:ReferencedWebsite, if not then it doesnt exist.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**website** | [**ReferencedWebsite**](ReferencedWebsite)
**tag** | [**ReferencedTag**](ReferencedTag)

## Example

```typescript
import { ExistingMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ExistingMetadata = {
    "schema": null,
    "website": null,
    "tag": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExistingMetadata
console.log(exampleParsed)
```


