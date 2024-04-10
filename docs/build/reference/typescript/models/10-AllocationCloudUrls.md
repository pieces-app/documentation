
# AllocationCloudUrls Model

you will have at minimum 2 urls,  base: is the default url of your cloud.  id: is the branded url, uuid.pieces.cloud.  (optional) vanity: is the custom branded url, mark.pieces.cloud

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**base** | [**AllocationCloudUrl**](AllocationCloudUrl)
**id** | [**AllocationCloudUrl**](AllocationCloudUrl)
**vanity** | [**AllocationCloudUrl**](AllocationCloudUrl)

## Example Model

```typescript
import { AllocationCloudUrls } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AllocationCloudUrls = {
    "schema": null,
    "base": null,
    "id": null,
    "vanity": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloudUrls
console.log(exampleParsed)
```


