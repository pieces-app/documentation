
# UpdatingStatusEnum Model

This is a simple enum used to determine the status of the Updating process.(of PiecesOS)  UpdatingStatusEnum(READY_TO_RESTART, AVAILABLE(but not downloaded), DOWNLOADING, UNKNOWN, UP_TO_DATE)  UNKNOWN: should never be the case  These are some enums that are currently not implemented but are for future support( REINSTALL_REQUIRED, CONTACT_SUPPORT)

## Properties Model

Name | Type
------------ | -------------

## Example Model

```typescript
import { UpdatingStatusEnum } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: UpdatingStatusEnum = {
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatingStatusEnum
console.log(exampleParsed)
```


