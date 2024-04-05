
# PersonType

basic or platform is absolutely required here. basic: if provided is just information that has been either extracted from the piece or other wise added here. platform: is a real Pieces User.(this user will also exist within the user\'s users collection. && if not then we will just use the data we have.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**basic** | [**PersonBasicType**](PersonBasicType) |  | [optional] [default to undefined]
**platform** | [**UserProfile**](UserProfile) |  | [optional] [default to undefined]

## Example

```typescript
import { PersonType } from '';

// TODO: Update the object below with actual values
const example: PersonType = {
    "schema": null, // 
    "basic": null, // 
    "platform": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonType;
console.log(exampleParsed);
```




