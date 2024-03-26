# TrackedSessionEventIdentifierDescriptionPairs Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**sessionInitialized** | **String** | The key value pair for an application being opened. | [optional] 
**sessionLocalConnectionSucceeded** | **String** | There was a successful connection locally | [optional] 
**sessionLocalConnectionFailed** | **String** | There was a failed connection locally | [optional] 
**sessionInactive** | **String** | If the current application is in the background or not, could also be minimized. | [optional] 
**sessionActive** | **String** | If the application has been brought to the forground. | [optional] 
**sessionTerminated** | **String** | If the user has closed the application, thus ending the session. | [optional] 
**sessionAuthenticatedWithSignIn** | **String** | A user has signed into this session with a an external account | [optional] 
**sessionUnauthenticatedWithSignOut** | **String** | A user has signed out of this session | [optional] 
**sessionUnauthenticatedWithDismiss** | **String** | A user did not sign into the session with a dismissal | [optional] 
**sessionUnauthenticatedWithRemind** | **String** | A user did not sign into the session with a reminder | [optional] 
**sessionOnboardingInitialized** | **String** | Onboarding has been initialized for this session | [optional] 
**sessionOnboardingCompleted** | **String** | Onboarding has been completed for this session | [optional] 




