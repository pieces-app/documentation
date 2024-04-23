---
title: Auth0User | Python SDK
---

# Auth0User



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  User&#39;s full name. | [optional] 
**picture** | **str** | mapped from picture.URL pointing to the user&#39;s profile picture.  | [optional] 
**email** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**email_verified** | **bool** | Indicates whether the user has verified their email address. Mapped from email_verified -&gt; emailVerified. | [optional] 
**family_name** | **str** | User&#39;s family name. | [optional] 
**given_name** | **str** | User&#39;s given name.  | [optional] 
**identities** | [**List[Auth0Identity]**](Auth0Identity) | Contains info retrieved from the identity provider with which the user originally authenticates. | [optional] 
**nickname** | **str** | User&#39;s nickname.  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**username** | **str** |  (unique) User&#39;s username.   | [optional] 
**user_metadata** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] 
**locale** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**last_ip** | **str** |  | [optional] 
**last_login** | **datetime** |  | [optional] 
**logins_count** | **int** |  | [optional] 
**blocked_for** | **List[str]** |  | [optional] 
**guardian_authenticators** | **List[str]** |  | [optional] 


