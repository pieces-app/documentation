---
title: TokenizedPKCE | Python SDK
---

# TokenizedPKCE

This is the flow that mobile apps use to access an API. Use this endpoint to exchange an Authorization Code for a Token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**grant_type** | **str** | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | 
**client_id** | **str** | Your application&#39;s Client ID. | 
**code** | **str** | The Authorization Code received from the initial /authorize call. | 
**redirect_uri** | **str** | This is required only if it was set at the GET /authorize endpoint. The values must match. | 
**code_verifier** | **str** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | 
**audience** | **str** | The audience domain: i.e. `https://pieces.us.auth0.com` | [optional] 


