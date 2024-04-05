
# TrackedAssetEventCreationMetadataFile

If an asset was created from a file attachment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyboard** | **boolean** | Whether the file was pasted via the keyboard | [optional] [default to undefined]
**dragAndDrop** | **boolean** | Whether the file was dropped onto pieces | [optional] [default to undefined]
**interaction** | **boolean** | Whether the file was attached via a button click | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetEventCreationMetadataFile } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventCreationMetadataFile = {
    "keyboard": null, // Whether the file was pasted via the keyboard
    "dragAndDrop": null, // Whether the file was dropped onto pieces
    "interaction": null, // Whether the file was attached via a button click
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventCreationMetadataFile;
console.log(exampleParsed);
```




