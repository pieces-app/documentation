---
title: Auth0Identity | Python SDK
---

# Auth0Identity

Contains info retrieved from the identity provider with which the user originally authenticates. Users may also link their profile to multiple identity providers; those identities will then also appear in this array. The contents of an individual identity provider object varies by provider, but it will typically include the following. Link: [https://auth0.com/docs/rules/user-object-in-rules]  Currently left out: - profile_data: (Object) User information associated with the connection. When profiles are linked, it is populated with the associated user info for secondary accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | **str** | Name of the Auth0 connection used to authenticate the user.  | [optional] 
**is_social** | **bool** | Indicates whether the connection is a social one.  | [optional] 
**provider** | **str** | mapped from user_id  -&gt; id | [optional] 
**user_id** | **str** | User&#39;s unique identifier for this connection/provider. | [optional] 
**access_token** | **str** |  | [optional] 
**expires_in** | **int** |  | [optional] 


