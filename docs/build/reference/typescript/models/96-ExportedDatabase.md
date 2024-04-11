
# ExportedDatabase Model


## Properties Model

Name | Type
------------ | -------------
**analyses** | **Array&lt;number&gt;**
**applications** | **Array&lt;number&gt;**
**assets** | **Array&lt;number&gt;**
**codeAnalyses** | **Array&lt;number&gt;**
**files** | **Array&lt;number&gt;**
**formatMetrics** | **Array&lt;number&gt;**
**formats** | **Array&lt;number&gt;**
**fragments** | **Array&lt;number&gt;**
**imageAnalyses** | **Array&lt;number&gt;**
**models** | **Array&lt;number&gt;**
**ocrAnalyses** | **Array&lt;number&gt;**
**persons** | **Array&lt;number&gt;**
**sensitives** | **Array&lt;number&gt;**
**tags** | **Array&lt;number&gt;**
**websites** | **Array&lt;number&gt;**
**values** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats)
**version** | **string**
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**relationships** | **Array&lt;number&gt;**
**activities** | **Array&lt;number&gt;**
**annotations** | **Array&lt;number&gt;**
**hints** | **Array&lt;number&gt;**
**anchors** | **Array&lt;number&gt;**
**anchorPoints** | **Array&lt;number&gt;**
**conversations** | **Array&lt;number&gt;**
**conversationMessages** | **Array&lt;number&gt;**
**workstreamEvents** | **Array&lt;number&gt;**
**ranges** | **Array&lt;number&gt;**
**workstreamSummaries** | **Array&lt;number&gt;**
**messageValues** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats)
**workstreamEventValues** | [**ExportedDatabaseFormats**](ExportedDatabaseFormats)

## Example Model

```typescript
import { ExportedDatabase } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ExportedDatabase = {
    "analyses": null,
    "applications": null,
    "assets": null,
    "codeAnalyses": null,
    "files": null,
    "formatMetrics": null,
    "formats": null,
    "fragments": null,
    "imageAnalyses": null,
    "models": null,
    "ocrAnalyses": null,
    "persons": null,
    "sensitives": null,
    "tags": null,
    "websites": null,
    "values": null,
    "version": null,
    "schema": null,
    "relationships": null,
    "activities": null,
    "annotations": null,
    "hints": null,
    "anchors": null,
    "anchorPoints": null,
    "conversations": null,
    "conversationMessages": null,
    "workstreamEvents": null,
    "ranges": null,
    "workstreamSummaries": null,
    "messageValues": null,
    "workstreamEventValues": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportedDatabase
console.log(exampleParsed)
```


