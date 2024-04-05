
# Session

This is a specific model that will let us know at what time this user was using the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The UUID of the current Session | [default to undefined]
**opened** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**closed** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]

## Example

```typescript
import { Session } from '';

// TODO: Update the object below with actual values
const example: Session = {
    "id": null, // The UUID of the current Session
    "opened": null, // 
    "closed": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Session;
console.log(exampleParsed);
```




