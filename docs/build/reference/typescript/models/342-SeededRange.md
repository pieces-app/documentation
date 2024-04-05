
# SeededRange

This is a preIdentified version of a Range.  conversation: this is here to specify the relationship that we want to set up with the Range.  IE for this case we want to associate a Range with a Conversation.grounding.temporal.workstream. Otherwise, if this was a conversation we would have no way to know what relationship that we want to set up on the conversation w/ the range. (because this will be set up for many relationShip opportunities that have different functionalities)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**between** | **boolean** |  | [optional] [default to undefined]
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  | [optional] [default to undefined]
**conversation** | [**SeededRangeConversationAssociation**](SeededRangeConversationAssociation) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededRange } from '';

// TODO: Update the object below with actual values
const example: SeededRange = {
    "schema": null, // 
    "to": null, // 
    "from": null, // 
    "between": null, // 
    "summary": null, // 
    "conversation": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededRange;
console.log(exampleParsed);
```




