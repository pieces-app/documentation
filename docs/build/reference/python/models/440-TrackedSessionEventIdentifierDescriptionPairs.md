---
title: TrackedSessionEventIdentifierDescriptionPairs | Python SDK
---

# TrackedSessionEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**session_initialized** | **str** | The key value pair for an application being opened. | [optional] 
**session_local_connection_succeeded** | **str** | There was a successful connection locally | [optional] 
**session_local_connection_failed** | **str** | There was a failed connection locally | [optional] 
**session_inactive** | **str** | If the current application is in the background or not, could also be minimized. | [optional] 
**session_active** | **str** | If the application has been brought to the forground. | [optional] 
**session_terminated** | **str** | If the user has closed the application, thus ending the session. | [optional] 
**session_authenticated_with_sign_in** | **str** | A user has signed into this session with a an external account | [optional] 
**session_unauthenticated_with_sign_out** | **str** | A user has signed out of this session | [optional] 
**session_unauthenticated_with_dismiss** | **str** | A user did not sign into the session with a dismissal | [optional] 
**session_unauthenticated_with_remind** | **str** | A user did not sign into the session with a reminder | [optional] 
**session_onboarding_initialized** | **str** | Onboarding has been initialized for this session | [optional] 
**session_onboarding_completed** | **str** | Onboarding has been completed for this session | [optional] 


