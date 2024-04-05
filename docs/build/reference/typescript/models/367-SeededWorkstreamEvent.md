
# SeededWorkstreamEvent

This is a precreated version of a WorkstreamEvent event, this will be used ingested into PiecesOS and PiecesOS will do all the magic to transform this into relevant data show in the workstream feed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger) |  | [default to undefined]
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata) |  | [optional] [default to undefined]
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  | [optional] [default to undefined]
**internalIdentifier** | **string** | This is used to override the event identifier, if this was an event that was originally in the internal events collection. | [optional] [default to undefined]

## Example

```typescript
import { SeededWorkstreamEvent } from '';

// TODO: Update the object below with actual values
const example: SeededWorkstreamEvent = {
    "schema": null, // 
    "score": null, // 
    "application": null, // 
    "trigger": null, // 
    "metadata": null, // 
    "summary": null, // 
    "internalIdentifier": null, // This is used to override the event identifier, if this was an event that was originally in the internal events collection.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededWorkstreamEvent;
console.log(exampleParsed);
```




