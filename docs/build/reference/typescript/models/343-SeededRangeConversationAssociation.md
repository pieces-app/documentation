
# SeededRangeConversationAssociation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**reference** | [**ReferencedConversation**](ReferencedConversation) |  | [default to undefined]
**grounding** | [**SeededRangeConversationGroundingAssociation**](SeededRangeConversationGroundingAssociation) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededRangeConversationAssociation } from '';

// TODO: Update the object below with actual values
const example: SeededRangeConversationAssociation = {
    "schema": null, // 
    "reference": null, // 
    "grounding": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededRangeConversationAssociation;
console.log(exampleParsed);
```




