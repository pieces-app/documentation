
# TLPDirectedDiscoveryFilters

Contains array of TLPDirectedDiscoveryFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iterable** | [**Array&lt;TLPDirectedDiscoveryFilter&gt;**](TLPDirectedDiscoveryFilter) | Array that contains filters like class/function/loop | [default to undefined]

## Example

```typescript
import { TLPDirectedDiscoveryFilters } from '';

// TODO: Update the object below with actual values
const example: TLPDirectedDiscoveryFilters = {
    "iterable": null, // Array that contains filters like class/function/loop
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPDirectedDiscoveryFilters;
console.log(exampleParsed);
```




