
# Auth0UserMetadata

User Metadata from Auth0

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**globalId** | **string** |  | [default to undefined]
**cloudKey** | **string** |  | [optional] [default to undefined]
**stripeCustomerId** | **string** | A customer ID that is added to the user in the case of payments | [optional] [default to undefined]
**vanityname** | **string** | this is the vanityname of the user.(set from their custom CNAME dns record.) ie mark.pieces.cloud where \&quot;mark\&quot; is the vanityname. | [optional] [default to undefined]
**allocation** | [**Auth0UserAllocationMetadata**](Auth0UserAllocationMetadata) |  | [optional] [default to undefined]
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata) |  | [optional] [default to undefined]
**beta** | [**TimestampRange**](TimestampRange) |  | [optional] [default to undefined]

## Example

```typescript
import { Auth0UserMetadata } from '';

// TODO: Update the object below with actual values
const example: Auth0UserMetadata = {
    "schema": null, // 
    "globalId": null, // 
    "cloudKey": null, // 
    "stripeCustomerId": null, // A customer ID that is added to the user in the case of payments
    "vanityname": null, // this is the vanityname of the user.(set from their custom CNAME dns record.) ie mark.pieces.cloud where \&quot;mark\&quot; is the vanityname.
    "allocation": null, // 
    "openAI": null, // 
    "beta": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0UserMetadata;
console.log(exampleParsed);
```




