
# TemporalRangeGrounding

This is used in the QGPT flow as well as within the conversation.  This will let us know grounding\'s that you want us to use within a given time range(s).  workstreams: is used to describe workstreams context. (specific to the \"workstream mapper\" - name subject to change)

## Properties

Name | Type
------------ | -------------
**workstreams** | [**FlattenedRanges**](FlattenedRanges)

## Example

```typescript
import { TemporalRangeGrounding } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TemporalRangeGrounding = {
    "workstreams": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemporalRangeGrounding
console.log(exampleParsed)
```


