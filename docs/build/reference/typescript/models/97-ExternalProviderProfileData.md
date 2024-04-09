
# ExternalProviderProfileData

All of these will be optional.  Will support ProfileData from all our social providers.

## Properties

Name | Type
------------ | -------------
**name** | **string**
**picture** | **string**
**nickname** | **string**
**email** | **string**
**emailVerified** | **boolean**
**nodeId** | **string**
**gravatarId** | **string**
**url** | **string**
**htmlUrl** | **string**
**followersUrl** | **string**
**followingUrl** | **string**
**gistsUrl** | **string**
**starredUrl** | **string**
**subscriptionsUrl** | **string**
**organizationsUrl** | **string**
**reposUrl** | **string**
**eventsUrl** | **string**
**receivedEventsUrl** | **string**
**type** | **string**
**siteAdmin** | **boolean**
**company** | **string**
**blog** | **string**
**anchor** | **string**
**hireable** | **boolean**
**bio** | **string**
**twitterUsername** | **string**
**publicRepos** | **number**
**publicGists** | **number**
**followers** | **number**
**following** | **number**
**createdAt** | **string**
**updatedAt** | **string**
**privateGists** | **number**
**totalPrivateRepos** | **number**
**ownedPrivateRepos** | **number**
**diskUsage** | **number**
**collaborators** | **number**
**twoFactorAuthentication** | **boolean**

## Example

```typescript
import { ExternalProviderProfileData } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ExternalProviderProfileData = {
    "name": null,
    "picture": null,
    "nickname": null,
    "email": null,
    "emailVerified": null,
    "nodeId": null,
    "gravatarId": null,
    "url": null,
    "htmlUrl": null,
    "followersUrl": null,
    "followingUrl": null,
    "gistsUrl": null,
    "starredUrl": null,
    "subscriptionsUrl": null,
    "organizationsUrl": null,
    "reposUrl": null,
    "eventsUrl": null,
    "receivedEventsUrl": null,
    "type": null,
    "siteAdmin": null,
    "company": null,
    "blog": null,
    "anchor": null,
    "hireable": null,
    "bio": null,
    "twitterUsername": null,
    "publicRepos": null,
    "publicGists": null,
    "followers": null,
    "following": null,
    "createdAt": null,
    "updatedAt": null,
    "privateGists": null,
    "totalPrivateRepos": null,
    "ownedPrivateRepos": null,
    "diskUsage": null,
    "collaborators": null,
    "twoFactorAuthentication": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalProviderProfileData;
console.log(exampleParsed);
```


