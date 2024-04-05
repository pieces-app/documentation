
# TrackedSessionEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**sessionInitialized** | **string** | The key value pair for an application being opened. | [optional] [default to undefined]
**sessionLocalConnectionSucceeded** | **string** | There was a successful connection locally | [optional] [default to undefined]
**sessionLocalConnectionFailed** | **string** | There was a failed connection locally | [optional] [default to undefined]
**sessionInactive** | **string** | If the current application is in the background or not, could also be minimized. | [optional] [default to undefined]
**sessionActive** | **string** | If the application has been brought to the forground. | [optional] [default to undefined]
**sessionTerminated** | **string** | If the user has closed the application, thus ending the session. | [optional] [default to undefined]
**sessionAuthenticatedWithSignIn** | **string** | A user has signed into this session with a an external account | [optional] [default to undefined]
**sessionUnauthenticatedWithSignOut** | **string** | A user has signed out of this session | [optional] [default to undefined]
**sessionUnauthenticatedWithDismiss** | **string** | A user did not sign into the session with a dismissal | [optional] [default to undefined]
**sessionUnauthenticatedWithRemind** | **string** | A user did not sign into the session with a reminder | [optional] [default to undefined]
**sessionOnboardingInitialized** | **string** | Onboarding has been initialized for this session | [optional] [default to undefined]
**sessionOnboardingCompleted** | **string** | Onboarding has been completed for this session | [optional] [default to undefined]

## Example

```typescript
import { TrackedSessionEventIdentifierDescriptionPairs } from '';

// TODO: Update the object below with actual values
const example: TrackedSessionEventIdentifierDescriptionPairs = {
    "schema": null, // 
    "sessionInitialized": null, // The key value pair for an application being opened.
    "sessionLocalConnectionSucceeded": null, // There was a successful connection locally
    "sessionLocalConnectionFailed": null, // There was a failed connection locally
    "sessionInactive": null, // If the current application is in the background or not, could also be minimized.
    "sessionActive": null, // If the application has been brought to the forground.
    "sessionTerminated": null, // If the user has closed the application, thus ending the session.
    "sessionAuthenticatedWithSignIn": null, // A user has signed into this session with a an external account
    "sessionUnauthenticatedWithSignOut": null, // A user has signed out of this session
    "sessionUnauthenticatedWithDismiss": null, // A user did not sign into the session with a dismissal
    "sessionUnauthenticatedWithRemind": null, // A user did not sign into the session with a reminder
    "sessionOnboardingInitialized": null, // Onboarding has been initialized for this session
    "sessionOnboardingCompleted": null, // Onboarding has been completed for this session
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedSessionEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```




