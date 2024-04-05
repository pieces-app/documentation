
# ExternalProviderProfileData

All of these will be optional.  Will support ProfileData from all our social providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**picture** | **string** |  | [optional] [default to undefined]
**nickname** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**emailVerified** | **boolean** |  | [optional] [default to undefined]
**nodeId** | **string** |  | [optional] [default to undefined]
**gravatarId** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**htmlUrl** | **string** |  | [optional] [default to undefined]
**followersUrl** | **string** |  | [optional] [default to undefined]
**followingUrl** | **string** |  | [optional] [default to undefined]
**gistsUrl** | **string** |  | [optional] [default to undefined]
**starredUrl** | **string** |  | [optional] [default to undefined]
**subscriptionsUrl** | **string** |  | [optional] [default to undefined]
**organizationsUrl** | **string** |  | [optional] [default to undefined]
**reposUrl** | **string** |  | [optional] [default to undefined]
**eventsUrl** | **string** |  | [optional] [default to undefined]
**receivedEventsUrl** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**siteAdmin** | **boolean** |  | [optional] [default to undefined]
**company** | **string** |  | [optional] [default to undefined]
**blog** | **string** |  | [optional] [default to undefined]
**anchor** | **string** |  | [optional] [default to undefined]
**hireable** | **boolean** |  | [optional] [default to undefined]
**bio** | **string** |  | [optional] [default to undefined]
**twitterUsername** | **string** |  | [optional] [default to undefined]
**publicRepos** | **number** |  | [optional] [default to undefined]
**publicGists** | **number** |  | [optional] [default to undefined]
**followers** | **number** |  | [optional] [default to undefined]
**following** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**privateGists** | **number** |  | [optional] [default to undefined]
**totalPrivateRepos** | **number** |  | [optional] [default to undefined]
**ownedPrivateRepos** | **number** |  | [optional] [default to undefined]
**diskUsage** | **number** |  | [optional] [default to undefined]
**collaborators** | **number** |  | [optional] [default to undefined]
**twoFactorAuthentication** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalProviderProfileData } from '';

// TODO: Update the object below with actual values
const example: ExternalProviderProfileData = {
    "name": null, // 
    "picture": null, // 
    "nickname": null, // 
    "email": null, // 
    "emailVerified": null, // 
    "nodeId": null, // 
    "gravatarId": null, // 
    "url": null, // 
    "htmlUrl": null, // 
    "followersUrl": null, // 
    "followingUrl": null, // 
    "gistsUrl": null, // 
    "starredUrl": null, // 
    "subscriptionsUrl": null, // 
    "organizationsUrl": null, // 
    "reposUrl": null, // 
    "eventsUrl": null, // 
    "receivedEventsUrl": null, // 
    "type": null, // 
    "siteAdmin": null, // 
    "company": null, // 
    "blog": null, // 
    "anchor": null, // 
    "hireable": null, // 
    "bio": null, // 
    "twitterUsername": null, // 
    "publicRepos": null, // 
    "publicGists": null, // 
    "followers": null, // 
    "following": null, // 
    "createdAt": null, // 
    "updatedAt": null, // 
    "privateGists": null, // 
    "totalPrivateRepos": null, // 
    "ownedPrivateRepos": null, // 
    "diskUsage": null, // 
    "collaborators": null, // 
    "twoFactorAuthentication": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalProviderProfileData;
console.log(exampleParsed);
```




