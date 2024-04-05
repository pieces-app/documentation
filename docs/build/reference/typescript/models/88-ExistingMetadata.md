
# ExistingMetadata

This is a shared input model for all the exists endpoints: /tags/exists : if the tag exists you will have a defined tag:ReferencedTag, if not then it doesnt exist. /websites/exists: if the url exists you will have a defined website:ReferencedWebsite, if not then it doesnt exist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**website** | [**ReferencedWebsite**](ReferencedWebsite) |  | [optional] [default to undefined]
**tag** | [**ReferencedTag**](ReferencedTag) |  | [optional] [default to undefined]

## Example

```typescript
import { ExistingMetadata } from '';

// TODO: Update the object below with actual values
const example: ExistingMetadata = {
    "schema": null, // 
    "website": null, // 
    "tag": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExistingMetadata;
console.log(exampleParsed);
```




