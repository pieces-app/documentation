
# Notification

config model for notification invoking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **number** |  | [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**payload** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Notification } from '';

// TODO: Update the object below with actual values
const example: Notification = {
    "schema": null, // 
    "id": null, // 
    "title": null, // 
    "message": null, // 
    "payload": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Notification;
console.log(exampleParsed);
```




