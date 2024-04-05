
# Context

A Context that is returned from almost all calls to the ContextAPI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**os** | **string** | This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment\&#39;s anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os | [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**health** | [**Health**](Health) |  | [default to undefined]
**user** | [**UserProfile**](UserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { Context } from '';

// TODO: Update the object below with actual values
const example: Context = {
    "schema": null, // 
    "os": null, // This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment\&#39;s anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os
    "application": null, // 
    "health": null, // 
    "user": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Context;
console.log(exampleParsed);
```




