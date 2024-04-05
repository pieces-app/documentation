
# TrackedFormatEventIdentifierDescriptionPairs

This is a model that allows us to send send over super specific format related events such as copied, deleted, downloaded, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**formatCreated** | **string** | The key value pair for an asset being created. | [optional] [default to undefined]
**formatCopied** | **string** | If a format was copied entirely | [optional] [default to undefined]
**formatPartiallyCopied** | **string** | If a format was copied partially | [optional] [default to undefined]
**formatDownloaded** | **string** | If a format was downloaded | [optional] [default to undefined]
**formatDeleted** | **string** | If an format was deleted | [optional] [default to undefined]
**formatGenericClassificationUpdated** | **string** | If a generic classification was changed on a format | [optional] [default to undefined]
**formatSpecificClassificationUpdated** | **string** | If a specific classification was changed on a format | [optional] [default to undefined]
**formatUpdated** | **string** | a format was updated, generic update. | [optional] [default to undefined]
**formatInserted** | **string** | a format was inserted | [optional] [default to undefined]
**formatValueEdited** | **string** | a format\&#39;s value was update ie, the text, etc... | [optional] [default to undefined]

## Example

```typescript
import { TrackedFormatEventIdentifierDescriptionPairs } from '';

// TODO: Update the object below with actual values
const example: TrackedFormatEventIdentifierDescriptionPairs = {
    "schema": null, // 
    "formatCreated": null, // The key value pair for an asset being created.
    "formatCopied": null, // If a format was copied entirely
    "formatPartiallyCopied": null, // If a format was copied partially
    "formatDownloaded": null, // If a format was downloaded
    "formatDeleted": null, // If an format was deleted
    "formatGenericClassificationUpdated": null, // If a generic classification was changed on a format
    "formatSpecificClassificationUpdated": null, // If a specific classification was changed on a format
    "formatUpdated": null, // a format was updated, generic update.
    "formatInserted": null, // a format was inserted
    "formatValueEdited": null, // a format\&#39;s value was update ie, the text, etc...
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedFormatEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```




