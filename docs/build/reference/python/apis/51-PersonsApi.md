# Persons API

All URIs are relative to *http://localhost:1000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**person_disassociate_asset**](PersonsApi#person_disassociate_asset) | **POST** /persons/\{person\}/assets/delete/\{asset\} | /persons/\{person\}/assets/delete/\{asset\} [POST]
[**persons_create_new_person**](PersonsApi#persons_create_new_person) | **POST** /persons/create | /persons/create [POST]
[**persons_delete_person**](PersonsApi#persons_delete_person) | **POST** /persons/\{person\}/delete | /persons/\{person\}/delete [POST]
[**persons_snapshot**](PersonsApi#persons_snapshot) | **GET** /persons | /persons [GET]


## **person_disassociate_asset** {#person_disassociate_asset}
> person_disassociate_asset(person, asset)

/persons/\{person\}/assets/delete/\{asset\} [POST]

This will update both the asset and the person reference, that will remove a person from an asset(only the references).  This will NOT remove the person. This will NOT remove the asset. This will only update the references so that they are disconnected from one another.

### Example


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PersonsApi(api_client)
    person = 'person_example' # str | This is a uuid that represents a person.
    asset = '2254f2c8-5797-40e8-ac56-41166dc0e159' # str | The id (uuid) of the asset that you are trying to access.

    try:
        # /persons/\{person\}/assets/delete/\{asset\} [POST]
        api_instance.person_disassociate_asset(person, asset)
    except Exception as e:
        print("Exception when calling PersonsApi->person_disassociate_asset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| This is a uuid that represents a person. | 
 **asset** | **str**| The id (uuid) of the asset that you are trying to access. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **persons_create_new_person** {#persons_create_new_person}
> Person persons_create_new_person(transferables=transferables, seeded_person=seeded_person)

/persons/create [POST]

This will create a new person.

### Example


```python
import pieces_os_client
from pieces_os_client.models.person import Person
from pieces_os_client.models.seeded_person import SeededPerson
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PersonsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)
    seeded_person = pieces_os_client.SeededPerson() # SeededPerson |  (optional)

    try:
        # /persons/create [POST]
        api_response = api_instance.persons_create_new_person(transferables=transferables, seeded_person=seeded_person)
        print("The response of PersonsApi->persons_create_new_person:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonsApi->persons_create_new_person: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 
 **seeded_person** | [**SeededPerson**](../models/SeededPerson)|  | [optional] 

### Return type

[**Person**](../models/Person)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



## **persons_delete_person** {#persons_delete_person}
> persons_delete_person(person)

/persons/\{person\}/delete [POST]

This will delete a specific person.

### Example


```python
import pieces_os_client
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PersonsApi(api_client)
    person = 'person_example' # str | This is a uuid that represents a person.

    try:
        # /persons/\{person\}/delete [POST]
        api_instance.persons_delete_person(person)
    except Exception as e:
        print("Exception when calling PersonsApi->persons_delete_person: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **person** | **str**| This is a uuid that represents a person. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**500** | Internal Server Error |  -  |



## **persons_snapshot** {#persons_snapshot}
> Persons persons_snapshot(transferables=transferables)

/persons [GET]

This will get a snapshot of all of your people

### Example


```python
import pieces_os_client
from pieces_os_client.models.persons import Persons
from pieces_os_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:1000
# See configuration.py for a list of all supported configuration parameters.
configuration = pieces_os_client.Configuration(
    host = "http://localhost:1000"
)


# Enter a context with an instance of the API client
with pieces_os_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pieces_os_client.PersonsApi(api_client)
    transferables = True # bool | This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) (optional)

    try:
        # /persons [GET]
        api_response = api_instance.persons_snapshot(transferables=transferables)
        print("The response of PersonsApi->persons_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PersonsApi->persons_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transferables** | **bool**| This is a boolean that will decided if we are want to return the transferable data (default) or not(performance enhancement) | [optional] 

### Return type

[**Persons**](../models/Persons)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**500** | Internal Server Error |  -  |



