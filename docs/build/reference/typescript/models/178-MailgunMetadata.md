
# MailgunMetadata

TODO add additional properties. TODO eventually modify this model to look like the response from Mailgun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**messageId** | **string** | This is the id given to us from mailgun when the email was sent successfully. | [default to undefined]

## Example

```typescript
import { MailgunMetadata } from '';

// TODO: Update the object below with actual values
const example: MailgunMetadata = {
    "schema": null, // 
    "messageId": null, // This is the id given to us from mailgun when the email was sent successfully.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailgunMetadata;
console.log(exampleParsed);
```




