
# SeededTrackedFormatEvent

Again this is a model designed to be sent over to a context server to be built and then sent along to segment. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**identifierDescriptionPair** | [**TrackedFormatEventIdentifierDescriptionPairs**](TrackedFormatEventIdentifierDescriptionPairs) |  | [default to undefined]
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [default to undefined]
**metadata** | [**TrackedFormatEventMetadata**](TrackedFormatEventMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededTrackedFormatEvent } from '';

// TODO: Update the object below with actual values
const example: SeededTrackedFormatEvent = {
    "schema": null, // 
    "identifierDescriptionPair": null, // 
    "format": null, // 
    "metadata": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedFormatEvent;
console.log(exampleParsed);
```




