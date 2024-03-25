
# TokenizedPKCE

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grantType** | [**inline**](#GrantType) | Denotes the flow you are using. For Authorization Code, use authorization_code or refresh_token. | 
**clientId** | **kotlin.String** | Your application&#39;s Client ID. | 
**code** | **kotlin.String** | The Authorization Code received from the initial /authorize call. | 
**redirectUri** | **kotlin.String** | This is required only if it was set at the GET /authorize endpoint. The values must match. | 
**codeVerifier** | **kotlin.String** | Cryptographically random key that was used to generate the code_challenge passed to /authorize. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**audience** | **kotlin.String** | The audience domain: i.e. https://pieces.us.auth0.com |  [optional]


<a id="GrantType"></a>
## Enum: grant_type
Name | Value
---- | -----
grantType | refresh_token, authorization_code



