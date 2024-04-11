
# SeededSensitive

This is the seededSensitive, this does not have an id yet as we will add it on the server side.  can optionally pass in our mechanism here, as the default will be manual unless specified.  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | **string**
**text** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum)
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum)
**name** | **string**
**description** | **string**
**metadata** | [**SensitiveMetadata**](SensitiveMetadata)

## Example

```typescript
import { SeededSensitive } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededSensitive = {
    "schema": null,
    "asset": null,
    "text": null,
    "mechanism": null,
    "category": null,
    "severity": null,
    "name": null,
    "description": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededSensitive
console.log(exampleParsed)
```


