
# WorkstreamEventTrigger

This is the specific event that represent the Shadow Activity ie the copy/paste ...xyz

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**checkIn** | **boolean** | this is a sort of check-in event(ie when ever your application is in the forground on there is an interaction) | [optional] [default to undefined]
**copy** | **boolean** |  | [optional] [default to undefined]
**paste** | **boolean** |  | [optional] [default to undefined]
**fileOpen** | **boolean** |  | [optional] [default to undefined]
**fileClose** | **boolean** |  | [optional] [default to undefined]
**tabSwitch** | **boolean** |  | [optional] [default to undefined]
**tabClose** | **boolean** |  | [optional] [default to undefined]
**tabOpen** | **boolean** |  | [optional] [default to undefined]
**tabEnter** | **boolean** |  | [optional] [default to undefined]
**tabLeave** | **boolean** |  | [optional] [default to undefined]
**urlChanged** | **boolean** |  | [optional] [default to undefined]
**applicationEnter** | **boolean** |  | [optional] [default to undefined]
**applicationLeave** | **boolean** |  | [optional] [default to undefined]
**applicationSwitch** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { WorkstreamEventTrigger } from '';

// TODO: Update the object below with actual values
const example: WorkstreamEventTrigger = {
    "schema": null, // 
    "checkIn": null, // this is a sort of check-in event(ie when ever your application is in the forground on there is an interaction)
    "copy": null, // 
    "paste": null, // 
    "fileOpen": null, // 
    "fileClose": null, // 
    "tabSwitch": null, // 
    "tabClose": null, // 
    "tabOpen": null, // 
    "tabEnter": null, // 
    "tabLeave": null, // 
    "urlChanged": null, // 
    "applicationEnter": null, // 
    "applicationLeave": null, // 
    "applicationSwitch": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamEventTrigger;
console.log(exampleParsed);
```




