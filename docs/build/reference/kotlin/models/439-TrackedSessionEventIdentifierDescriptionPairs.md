---
title: TrackedSessionEventIdentifierDescriptionPairs | Kotlin SDK
---



# TrackedSessionEventIdentifierDescriptionPairs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**sessionInitialized** | [**inline**](#session_initialized) | The key value pair for an application being opened. |  [optional]
**sessionLocalConnectionSucceeded** | [**inline**](#session_local_connection_succeeded) | There was a successful connection locally |  [optional]
**sessionLocalConnectionFailed** | [**inline**](#session_local_connection_failed) | There was a failed connection locally |  [optional]
**sessionInactive** | [**inline**](#session_inactive) | If the current application is in the background or not, could also be minimized. |  [optional]
**sessionActive** | [**inline**](#session_active) | If the application has been brought to the forground. |  [optional]
**sessionTerminated** | [**inline**](#session_terminated) | If the user has closed the application, thus ending the session. |  [optional]
**sessionAuthenticatedWithSignIn** | [**inline**](#session_authenticated_with_sign_in) | A user has signed into this session with a an external account |  [optional]
**sessionUnauthenticatedWithSignOut** | [**inline**](#session_unauthenticated_with_sign_out) | A user has signed out of this session |  [optional]
**sessionUnauthenticatedWithDismiss** | [**inline**](#session_unauthenticated_with_dismiss) | A user did not sign into the session with a dismissal |  [optional]
**sessionUnauthenticatedWithRemind** | [**inline**](#session_unauthenticated_with_remind) | A user did not sign into the session with a reminder |  [optional]
**sessionOnboardingInitialized** | [**inline**](#session_onboarding_initialized) | Onboarding has been initialized for this session |  [optional]
**sessionOnboardingCompleted** | [**inline**](#session_onboarding_completed) | Onboarding has been completed for this session |  [optional]


## session_initialized
Name | Value
---- | -----
sessionInitialized | a_session_has_been_initialized_and_the_application_has_been_opened


## session_local_connection_succeeded
Name | Value
---- | -----
sessionLocalConnectionSucceeded | one_or_more_applications_has_successfully_connected


## session_local_connection_failed
Name | Value
---- | -----
sessionLocalConnectionFailed | one_or_more_applications_has_failed_to_connect_locally


## session_inactive
Name | Value
---- | -----
sessionInactive | a_session_is_inactive_because_the_application_is_not_in_the_foreground


## session_active
Name | Value
---- | -----
sessionActive | a_session_is_active_because_the_application_is_in_the_foreground


## session_terminated
Name | Value
---- | -----
sessionTerminated | a_session_has_been_ended_and_the_application_has_been_closed


## session_authenticated_with_sign_in
Name | Value
---- | -----
sessionAuthenticatedWithSignIn | a_user_has_signed_into_this_session_with_a_an_external_account


## session_unauthenticated_with_sign_out
Name | Value
---- | -----
sessionUnauthenticatedWithSignOut | a_user_has_signed_out_of_this_session


## session_unauthenticated_with_dismiss
Name | Value
---- | -----
sessionUnauthenticatedWithDismiss | a_user_did_not_sign_into_the_session_with_a_dismissal


## session_unauthenticated_with_remind
Name | Value
---- | -----
sessionUnauthenticatedWithRemind | a_user_did_not_sign_into_the_session_with_a_reminder


## session_onboarding_initialized
Name | Value
---- | -----
sessionOnboardingInitialized | onboarding_has_been_initialized_for_this_session


## session_onboarding_completed
Name | Value
---- | -----
sessionOnboardingCompleted | onboarding_has_been_completed_for_this_session




