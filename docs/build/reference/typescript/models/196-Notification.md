
# Notification

config model for notification invoking

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **number**
**title** | **string**
**message** | **string**
**payload** | **string**

## Example

```typescript
import { Notification } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Notification = {
    "schema": null,
    "id": null,
    "title": null,
    "message": null,
    "payload": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Notification
console.log(exampleParsed)
```


