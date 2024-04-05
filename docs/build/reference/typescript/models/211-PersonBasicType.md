
# PersonBasicType

This is all optional properties around the most basic information around a non-pieces user.  A Basic type will NOT have a scope as it is not an actual pieces user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**username** | **string** | username or twitter handle...etc | [optional] [default to undefined]
**name** | **string** | This is the name of the basic user. | [optional] [default to undefined]
**picture** | **string** | this is a url picture representation of a user. | [optional] [default to undefined]
**email** | **string** | an email that was extracted. | [optional] [default to undefined]
**sourced** | [**ExternallySourcedEnum**](ExternallySourcedEnum) |  | [optional] [default to undefined]
**url** | **string** | This is a specific url that this basic user came from. | [optional] [default to undefined]
**mailgun** | [**MailgunMetadata**](MailgunMetadata) |  | [optional] [default to undefined]

## Example

```typescript
import { PersonBasicType } from '';

// TODO: Update the object below with actual values
const example: PersonBasicType = {
    "schema": null, // 
    "username": null, // username or twitter handle...etc
    "name": null, // This is the name of the basic user.
    "picture": null, // this is a url picture representation of a user.
    "email": null, // an email that was extracted.
    "sourced": null, // 
    "url": null, // This is a specific url that this basic user came from.
    "mailgun": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonBasicType;
console.log(exampleParsed);
```




