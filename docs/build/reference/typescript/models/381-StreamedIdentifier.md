
# StreamedIdentifier

This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] [default to undefined]
**deleted** | **boolean** | This is a specific bool that will let us know if we deleted an Identifierfrom the db. | [optional] [default to undefined]

## Example

```typescript
import { StreamedIdentifier } from '';

// TODO: Update the object below with actual values
const example: StreamedIdentifier = {
    "asset": null, // 
    "conversation": null, // 
    "deleted": null, // This is a specific bool that will let us know if we deleted an Identifierfrom the db.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StreamedIdentifier;
console.log(exampleParsed);
```




