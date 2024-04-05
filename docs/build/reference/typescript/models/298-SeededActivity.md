
# SeededActivity

This is the preseed to a full blown Activity.  This is the minimum information needed to create an Activity, used within our [POST] /activities/create  if mechenism is not passed in we will default to AUTOMATIC  NOT required to pass in an asset/user/format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]
**user** | [**ReferencedUser**](ReferencedUser) |  | [optional] [default to undefined]
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededActivity } from '';

// TODO: Update the object below with actual values
const example: SeededActivity = {
    "event": null, // 
    "application": null, // 
    "asset": null, // 
    "user": null, // 
    "format": null, // 
    "mechanism": null, // 
    "conversation": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededActivity;
console.log(exampleParsed);
```




