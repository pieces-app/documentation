# PKCE API

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clear_pkce**](PKCEApi#clear_pkce) | **POST** /pkce/clear | /pkce/clear [POST]
[**generate_code**](PKCEApi#generate_code) | **POST** /pkce/code | /pkce/code [POST]
[**generate_token**](PKCEApi#generate_token) | **POST** /pkce/token | /pkce/token [POST]
[**get_challenge**](PKCEApi#get_challenge) | **GET** /pkce/challenge | Your GET endpoint
[**respond_with_code**](PKCEApi#respond_with_code) | **POST** /pkce/response/code | /pkce/response/code [POST]


## **clear_pkce**
> clear_pkce()

/pkce/clear [POST]

This is a function to Clear a PKCE Authentication Flow

### Example


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PKCEApi(api_client)

    try:
        # /pkce/clear [POST]
        api_instance.clear_pkce()
    except Exception as e:
        print("Exception when calling PKCEApi->clear_pkce: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |



## **generate_code**
> PKCE generate_code(seeded_pkce=seeded_pkce)

/pkce/code [POST]

An endpoint to get the PKCE Code - this endpoint proxies the call out to Authorize within Auth0

### Example


```python
import pieces_os_client
from pieces_os_client.models.pkce import PKCE
from pieces_os_client.models.seeded_pkce import SeededPKCE
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PKCEApi(api_client)
    seeded_pkce = pieces_os_client.SeededPKCE() # SeededPKCE | All of the properties that the client might want to send over to authorize a PKCE Code Flow (optional)

    try:
        # /pkce/code [POST]
        api_response = api_instance.generate_code(seeded_pkce=seeded_pkce)
        print("The response of PKCEApi->generate_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PKCEApi->generate_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seeded_pkce** | [**SeededPKCE**](../models/SeededPKCE)| All of the properties that the client might want to send over to authorize a PKCE Code Flow | [optional] 

### Return type

[**PKCE**](../models/PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **generate_token**
> PKCE generate_token(tokenized_pkce=tokenized_pkce)

/pkce/token [POST]

A proxy endpoint for PKCE token generation, internally calls Auth0 /oauth/token

### Example


```python
import pieces_os_client
from pieces_os_client.models.pkce import PKCE
from pieces_os_client.models.tokenized_pkce import TokenizedPKCE
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PKCEApi(api_client)
    tokenized_pkce = pieces_os_client.TokenizedPKCE() # TokenizedPKCE | The needed properties to exchange a PKCE Code for an OAuth Token (optional)

    try:
        # /pkce/token [POST]
        api_response = api_instance.generate_token(tokenized_pkce=tokenized_pkce)
        print("The response of PKCEApi->generate_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PKCEApi->generate_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenized_pkce** | [**TokenizedPKCE**](../models/TokenizedPKCE)| The needed properties to exchange a PKCE Code for an OAuth Token | [optional] 

### Return type

[**PKCE**](../models/PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **get_challenge**
> PKCE get_challenge()

Your GET endpoint

An endpoint that returns a PKCE Challenge

### Example


```python
import pieces_os_client
from pieces_os_client.models.pkce import PKCE
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PKCEApi(api_client)

    try:
        # Your GET endpoint
        api_response = api_instance.get_challenge()
        print("The response of PKCEApi->get_challenge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PKCEApi->get_challenge: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PKCE**](../models/PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



## **respond_with_code**
> PKCE respond_with_code(code, state, var_schema=var_schema)

/pkce/response/code [POST]

This is a callback function hosted to help pass along the ResultedPKCE code from authorize through to the callback.

### Example


```python
import pieces_os_client
from pieces_os_client.models.embedded_model_schema import EmbeddedModelSchema
from pieces_os_client.models.pkce import PKCE
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PKCEApi(api_client)
    code = 'code_example' # str | The PKCE Code to be used to access a Token.
    state = 'state_example' # str | Likely the state that will be returned which should match the requested state as well as the nonce
    var_schema = pieces_os_client.EmbeddedModelSchema() # EmbeddedModelSchema |  (optional)

    try:
        # /pkce/response/code [POST]
        api_response = api_instance.respond_with_code(code, state, var_schema=var_schema)
        print("The response of PKCEApi->respond_with_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PKCEApi->respond_with_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| The PKCE Code to be used to access a Token. | 
 **state** | **str**| Likely the state that will be returned which should match the requested state as well as the nonce | 
 **var_schema** | [**EmbeddedModelSchema**](../models/EmbeddedModelSchema)|  | [optional] 

### Return type

[**PKCE**](../models/PKCE)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |



