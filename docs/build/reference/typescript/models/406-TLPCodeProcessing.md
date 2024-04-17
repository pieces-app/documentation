
# TLPCodeProcessing


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**fragment** | [**TLPCodeSnippetAnalytics**](TLPCodeSnippetAnalytics)
**file** | [**TLPCodeFileAnalytics**](TLPCodeFileAnalytics)
**directory** | [**TLPCodeDirectoryAnalytics**](TLPCodeDirectoryAnalytics)
**repository** | [**TLPCodeRepositoryAnalytics**](TLPCodeRepositoryAnalytics)

## Example

```typescript
import { TLPCodeProcessing } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeProcessing = {
    "schema": null,
    "fragment": null,
    "file": null,
    "directory": null,
    "repository": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeProcessing
console.log(exampleParsed)
```


