---
title: RevokedPKCE | TypeScript SDK
---


# RevokedPKCE

A model to support revoking a Token Generated Through PKCE  The behaviour of this endpoint depends on the state of the Refresh Token Revocation Deletes Grant toggle.  If this toggle is enabled, then each revocation request invalidates not only the specific token, but all other tokens based on the same authorization grant.  This means that all Refresh Tokens that have been issued for the same user, application, and audience will be revoked. If this toggle is disabled, then only the refresh token is revoked, while the grant is left intact

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**clientId** | **string**
**token** | **string**


