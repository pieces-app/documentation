
# WorkstreamEventTrigger Model

This is the specific event that represent the Shadow Activity ie the copy/paste ...xyz

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**checkIn** | **boolean**
**copy** | **boolean**
**paste** | **boolean**
**fileOpen** | **boolean**
**fileClose** | **boolean**
**tabSwitch** | **boolean**
**tabClose** | **boolean**
**tabOpen** | **boolean**
**tabEnter** | **boolean**
**tabLeave** | **boolean**
**urlChanged** | **boolean**
**applicationEnter** | **boolean**
**applicationLeave** | **boolean**
**applicationSwitch** | **boolean**

## Example Model

```typescript
import { WorkstreamEventTrigger } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: WorkstreamEventTrigger = {
    "schema": null,
    "checkIn": null,
    "copy": null,
    "paste": null,
    "fileOpen": null,
    "fileClose": null,
    "tabSwitch": null,
    "tabClose": null,
    "tabOpen": null,
    "tabEnter": null,
    "tabLeave": null,
    "urlChanged": null,
    "applicationEnter": null,
    "applicationLeave": null,
    "applicationSwitch": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamEventTrigger
console.log(exampleParsed)
```


