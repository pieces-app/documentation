
# PersonBasicType

This is all optional properties around the most basic information around a non-pieces user.  A Basic type will NOT have a scope as it is not an actual pieces user.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**username** | **string**
**name** | **string**
**picture** | **string**
**email** | **string**
**sourced** | [**ExternallySourcedEnum**](ExternallySourcedEnum)
**url** | **string**
**mailgun** | [**MailgunMetadata**](MailgunMetadata)

## Example

```typescript
import { PersonBasicType } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: PersonBasicType = {
    "schema": null,
    "username": null,
    "name": null,
    "picture": null,
    "email": null,
    "sourced": null,
    "url": null,
    "mailgun": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PersonBasicType;
console.log(exampleParsed);
```


