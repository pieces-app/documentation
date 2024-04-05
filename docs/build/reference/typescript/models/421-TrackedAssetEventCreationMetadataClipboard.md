
# TrackedAssetEventCreationMetadataClipboard

If an asset was created from a clipboard event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**keyboard** | **boolean** | Whether the clipboard was utilized via the keyboard | [optional] [default to undefined]
**interaction** | **boolean** | Whether the clipboard was extracted through a button click | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetEventCreationMetadataClipboard } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventCreationMetadataClipboard = {
    "schema": null, // 
    "keyboard": null, // Whether the clipboard was utilized via the keyboard
    "interaction": null, // Whether the clipboard was extracted through a button click
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventCreationMetadataClipboard;
console.log(exampleParsed);
```




