
# Backup

This is a cloud Backup. This is specific metadata needed inorder to retrieve a Backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**version** | **string** |  | [default to undefined]
**timestamp** | **string** |  | [default to undefined]
**bytes** | **number** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deviceName** | **string** |  | [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum) |  | [default to undefined]

## Example

```typescript
import { Backup } from '';

// TODO: Update the object below with actual values
const example: Backup = {
    "schema": null, // 
    "id": null, // 
    "version": null, // 
    "timestamp": null, // 
    "bytes": null, // 
    "created": null, // 
    "deviceName": null, // 
    "platform": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Backup;
console.log(exampleParsed);
```




