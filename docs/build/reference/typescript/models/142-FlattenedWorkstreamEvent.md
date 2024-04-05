
# FlattenedWorkstreamEvent

This is a singular (DAG Safe) version of a WorkstreamEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger) |  | [default to undefined]
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata) |  | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedWorkstreamEvent } from '';

// TODO: Update the object below with actual values
const example: FlattenedWorkstreamEvent = {
    "schema": null, // 
    "id": null, // 
    "score": null, // 
    "application": null, // 
    "created": null, // 
    "updated": null, // 
    "trigger": null, // 
    "metadata": null, // 
    "summaries": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWorkstreamEvent;
console.log(exampleParsed);
```




