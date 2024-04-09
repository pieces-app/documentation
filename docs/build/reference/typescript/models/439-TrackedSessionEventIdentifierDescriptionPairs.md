
# TrackedSessionEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**sessionInitialized** | **string**
**sessionLocalConnectionSucceeded** | **string**
**sessionLocalConnectionFailed** | **string**
**sessionInactive** | **string**
**sessionActive** | **string**
**sessionTerminated** | **string**
**sessionAuthenticatedWithSignIn** | **string**
**sessionUnauthenticatedWithSignOut** | **string**
**sessionUnauthenticatedWithDismiss** | **string**
**sessionUnauthenticatedWithRemind** | **string**
**sessionOnboardingInitialized** | **string**
**sessionOnboardingCompleted** | **string**

## Example

```typescript
import { TrackedSessionEventIdentifierDescriptionPairs } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TrackedSessionEventIdentifierDescriptionPairs = {
    "schema": null,
    "sessionInitialized": null,
    "sessionLocalConnectionSucceeded": null,
    "sessionLocalConnectionFailed": null,
    "sessionInactive": null,
    "sessionActive": null,
    "sessionTerminated": null,
    "sessionAuthenticatedWithSignIn": null,
    "sessionUnauthenticatedWithSignOut": null,
    "sessionUnauthenticatedWithDismiss": null,
    "sessionUnauthenticatedWithRemind": null,
    "sessionOnboardingInitialized": null,
    "sessionOnboardingCompleted": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedSessionEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```


