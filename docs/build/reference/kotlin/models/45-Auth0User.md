
# Auth0User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **kotlin.String** |  User&#39;s full name. |  [optional]
**picture** | **java.net.URI** | mapped from picture.URL pointing to the user&#39;s profile picture.  |  [optional]
**email** | **kotlin.String** |  |  [optional]
**createdAt** | **java.time.OffsetDateTime** |  |  [optional]
**emailVerified** | **kotlin.Boolean** | Indicates whether the user has verified their email address. Mapped from email_verified -&gt; emailVerified. |  [optional]
**familyName** | **kotlin.String** | User&#39;s family name. |  [optional]
**givenName** | **kotlin.String** | User&#39;s given name.  |  [optional]
**identities** | [**kotlin.collections.List&lt;Auth0Identity&gt;**](Auth0Identity) | Contains info retrieved from the identity provider with which the user originally authenticates. |  [optional]
**nickname** | **kotlin.String** | User&#39;s nickname.  |  [optional]
**updatedAt** | **java.time.OffsetDateTime** |  |  [optional]
**username** | **kotlin.String** |  (unique) User&#39;s username.   |  [optional]
**userMetadata** | [**Auth0UserMetadata**](Auth0UserMetadata) |  |  [optional]
**locale** | **kotlin.String** |  |  [optional]
**userId** | **kotlin.String** |  |  [optional]
**lastIp** | **kotlin.String** |  |  [optional]
**lastLogin** | **java.time.OffsetDateTime** |  |  [optional]
**loginsCount** | **kotlin.Int** |  |  [optional]
**blockedFor** | **kotlin.collections.List&lt;kotlin.String&gt;** |  |  [optional]
**guardianAuthenticators** | **kotlin.collections.List&lt;kotlin.String&gt;** |  |  [optional]



