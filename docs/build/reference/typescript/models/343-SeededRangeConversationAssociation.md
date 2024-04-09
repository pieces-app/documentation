
# SeededRangeConversationAssociation


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**reference** | [**ReferencedConversation**](ReferencedConversation)
**grounding** | [**SeededRangeConversationGroundingAssociation**](SeededRangeConversationGroundingAssociation)

## Example

```typescript
import { SeededRangeConversationAssociation } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededRangeConversationAssociation = {
    "schema": null,
    "reference": null,
    "grounding": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededRangeConversationAssociation;
console.log(exampleParsed);
```


