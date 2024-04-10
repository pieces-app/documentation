
# FormatsMetrics Model



## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;FormatMetric&gt;**](FormatMetric)

## Example Model

```typescript
import { FormatsMetrics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FormatsMetrics = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FormatsMetrics
console.log(exampleParsed)
```


