
# SeededConnectorTracking

This model is designed to be light weight and low friction while most of the heavy lifting will be happening inside of the context servers.  This Model is important because this has references to our materials, instead of fully referenced materials.(very similar to our SeededTrackedEvent, consider consolidating and converting these to Referenced models instead of ID\'s)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**format** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent) |  | [optional] [default to undefined]
**asset** | [**SeededTrackedAssetEvent**](SeededTrackedAssetEvent) |  | [optional] [default to undefined]
**interaction** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent) |  | [optional] [default to undefined]
**keyboard** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent) |  | [optional] [default to undefined]
**session** | [**SeededTrackedSessionEvent**](SeededTrackedSessionEvent) |  | [optional] [default to undefined]
**assets** | [**SeededTrackedAssetsEvent**](SeededTrackedAssetsEvent) |  | [optional] [default to undefined]
**ml** | [**SeededTrackedMachineLearningEvent**](SeededTrackedMachineLearningEvent) |  | [optional] [default to undefined]
**adoption** | [**SeededTrackedAdoptionEvent**](SeededTrackedAdoptionEvent) |  | [optional] [default to undefined]
**conversation** | [**SeededTrackedConversationEvent**](SeededTrackedConversationEvent) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededConnectorTracking } from '';

// TODO: Update the object below with actual values
const example: SeededConnectorTracking = {
    "schema": null, // 
    "format": null, // 
    "asset": null, // 
    "interaction": null, // 
    "keyboard": null, // 
    "session": null, // 
    "assets": null, // 
    "ml": null, // 
    "adoption": null, // 
    "conversation": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConnectorTracking;
console.log(exampleParsed);
```




