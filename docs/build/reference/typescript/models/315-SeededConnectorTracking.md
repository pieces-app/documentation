
# SeededConnectorTracking

This model is designed to be light weight and low friction while most of the heavy lifting will be happening inside of the context servers.  This Model is important because this has references to our materials, instead of fully referenced materials.(very similar to our SeededTrackedEvent, consider consolidating and converting these to Referenced models instead of ID\'s)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**format** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent)
**asset** | [**SeededTrackedAssetEvent**](SeededTrackedAssetEvent)
**interaction** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent)
**keyboard** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent)
**session** | [**SeededTrackedSessionEvent**](SeededTrackedSessionEvent)
**assets** | [**SeededTrackedAssetsEvent**](SeededTrackedAssetsEvent)
**ml** | [**SeededTrackedMachineLearningEvent**](SeededTrackedMachineLearningEvent)
**adoption** | [**SeededTrackedAdoptionEvent**](SeededTrackedAdoptionEvent)
**conversation** | [**SeededTrackedConversationEvent**](SeededTrackedConversationEvent)

## Example

```typescript
import { SeededConnectorTracking } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededConnectorTracking = {
    "schema": null,
    "format": null,
    "asset": null,
    "interaction": null,
    "keyboard": null,
    "session": null,
    "assets": null,
    "ml": null,
    "adoption": null,
    "conversation": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConnectorTracking;
console.log(exampleParsed);
```


