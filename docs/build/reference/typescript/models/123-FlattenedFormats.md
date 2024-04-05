
# FlattenedFormats

A collection of Formats specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;ReferencedFormat&gt;**](ReferencedFormat) |  | [default to undefined]

## Example

```typescript
import { FlattenedFormats } from '';

// TODO: Update the object below with actual values
const example: FlattenedFormats = {
    "schema": null, // 
    "iterable": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedFormats;
console.log(exampleParsed);
```




