
# Activity

consider a rename to Event? That being said if we go with event we need to think about a word to pre/post fix event because it is likely to be a reserved word.  additional documentation: https://www.notion.so/getpieces/Activity-4da8de193733441f85f87b510235fb74   Notes: - user/asset/format are all optional, NOT required that one of these are present. - if mechanism == internal we will not display to the user.  Thoughts around additional properties. - hmm dismissed array here, that is an array of strings, where the string is the userId that dismissed this notification? or we could potentially do it based on the os_ID. - 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | [optional] [default to undefined]
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] [default to undefined]
**format** | [**FlattenedFormat**](FlattenedFormat) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [default to undefined]
**rank** | **number** | This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -&gt; infinity but rn there arnt any value over 8. | [optional] [default to undefined]

## Example

```typescript
import { Activity } from '';

// TODO: Update the object below with actual values
const example: Activity = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "event": null, // 
    "application": null, // 
    "deleted": null, // 
    "asset": null, // 
    "user": null, // 
    "format": null, // 
    "mechanism": null, // 
    "rank": null, // This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -&gt; infinity but rn there arnt any value over 8.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Activity;
console.log(exampleParsed);
```




