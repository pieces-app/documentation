
# BackupStatus

TODO add more description to this.  can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**value** | [**BackupStatusEnum**](BackupStatusEnum)
**percentage** | **number**
**backup** | [**Backup**](Backup)

## Example

```typescript
import { BackupStatus } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: BackupStatus = {
    "schema": null,
    "value": null,
    "percentage": null,
    "backup": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupStatus
console.log(exampleParsed)
```


