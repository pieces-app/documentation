---
title: Auth0Identity | TypeScript SDK
---


# Auth0Identity

Contains info retrieved from the identity provider with which the user originally authenticates. Users may also link their profile to multiple identity providers; those identities will then also appear in this array. The contents of an individual identity provider object varies by provider, but it will typically include the following. Link: [https://auth0.com/docs/rules/user-object-in-rules]  Currently left out: - profile_data: (Object) User information associated with the connection. When profiles are linked, it is populated with the associated user info for secondary accounts.

## Properties

Name | Type
------------ | -------------
**connection** | **string**
**isSocial** | **boolean**
**provider** | **string**
**userId** | **string**
**accessToken** | **string**
**expiresIn** | **number**


