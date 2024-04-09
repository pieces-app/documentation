
# StreamedIdentifier

This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class.

## Properties

Name | Type
------------ | -------------
**asset** | [**ReferencedAsset**](ReferencedAsset)
**conversation** | [**ReferencedConversation**](ReferencedConversation)
**deleted** | **boolean**

## Example

```typescript
import { StreamedIdentifier } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: StreamedIdentifier = {
    "asset": null,
    "conversation": null,
    "deleted": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StreamedIdentifier;
console.log(exampleParsed);
```


