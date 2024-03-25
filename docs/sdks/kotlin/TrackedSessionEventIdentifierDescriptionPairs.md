
# TrackedSessionEventIdentifierDescriptionPairs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**sessionInitialized** | [**inline**](#SessionInitialized) | The key value pair for an application being opened. |  [optional]
**sessionLocalConnectionSucceeded** | [**inline**](#SessionLocalConnectionSucceeded) | There was a successful connection locally |  [optional]
**sessionLocalConnectionFailed** | [**inline**](#SessionLocalConnectionFailed) | There was a failed connection locally |  [optional]
**sessionInactive** | [**inline**](#SessionInactive) | If the current application is in the background or not, could also be minimized. |  [optional]
**sessionActive** | [**inline**](#SessionActive) | If the application has been brought to the forground. |  [optional]
**sessionTerminated** | [**inline**](#SessionTerminated) | If the user has closed the application, thus ending the session. |  [optional]
**sessionAuthenticatedWithSignIn** | [**inline**](#SessionAuthenticatedWithSignIn) | A user has signed into this session with a an external account |  [optional]
**sessionUnauthenticatedWithSignOut** | [**inline**](#SessionUnauthenticatedWithSignOut) | A user has signed out of this session |  [optional]
**sessionUnauthenticatedWithDismiss** | [**inline**](#SessionUnauthenticatedWithDismiss) | A user did not sign into the session with a dismissal |  [optional]
**sessionUnauthenticatedWithRemind** | [**inline**](#SessionUnauthenticatedWithRemind) | A user did not sign into the session with a reminder |  [optional]
**sessionOnboardingInitialized** | [**inline**](#SessionOnboardingInitialized) | Onboarding has been initialized for this session |  [optional]
**sessionOnboardingCompleted** | [**inline**](#SessionOnboardingCompleted) | Onboarding has been completed for this session |  [optional]


<a id="SessionInitialized"></a>
## Enum: session_initialized
Name | Value
---- | -----
sessionInitialized | a_session_has_been_initialized_and_the_application_has_been_opened


<a id="SessionLocalConnectionSucceeded"></a>
## Enum: session_local_connection_succeeded
Name | Value
---- | -----
sessionLocalConnectionSucceeded | one_or_more_applications_has_successfully_connected


<a id="SessionLocalConnectionFailed"></a>
## Enum: session_local_connection_failed
Name | Value
---- | -----
sessionLocalConnectionFailed | one_or_more_applications_has_failed_to_connect_locally


<a id="SessionInactive"></a>
## Enum: session_inactive
Name | Value
---- | -----
sessionInactive | a_session_is_inactive_because_the_application_is_not_in_the_foreground


<a id="SessionActive"></a>
## Enum: session_active
Name | Value
---- | -----
sessionActive | a_session_is_active_because_the_application_is_in_the_foreground


<a id="SessionTerminated"></a>
## Enum: session_terminated
Name | Value
---- | -----
sessionTerminated | a_session_has_been_ended_and_the_application_has_been_closed


<a id="SessionAuthenticatedWithSignIn"></a>
## Enum: session_authenticated_with_sign_in
Name | Value
---- | -----
sessionAuthenticatedWithSignIn | a_user_has_signed_into_this_session_with_a_an_external_account


<a id="SessionUnauthenticatedWithSignOut"></a>
## Enum: session_unauthenticated_with_sign_out
Name | Value
---- | -----
sessionUnauthenticatedWithSignOut | a_user_has_signed_out_of_this_session


<a id="SessionUnauthenticatedWithDismiss"></a>
## Enum: session_unauthenticated_with_dismiss
Name | Value
---- | -----
sessionUnauthenticatedWithDismiss | a_user_did_not_sign_into_the_session_with_a_dismissal


<a id="SessionUnauthenticatedWithRemind"></a>
## Enum: session_unauthenticated_with_remind
Name | Value
---- | -----
sessionUnauthenticatedWithRemind | a_user_did_not_sign_into_the_session_with_a_reminder


<a id="SessionOnboardingInitialized"></a>
## Enum: session_onboarding_initialized
Name | Value
---- | -----
sessionOnboardingInitialized | onboarding_has_been_initialized_for_this_session


<a id="SessionOnboardingCompleted"></a>
## Enum: session_onboarding_completed
Name | Value
---- | -----
sessionOnboardingCompleted | onboarding_has_been_completed_for_this_session



