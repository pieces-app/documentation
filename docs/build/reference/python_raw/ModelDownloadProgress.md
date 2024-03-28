# ModelDownloadProgress

This is the model that is sent over our ws for streaming the progress of a model that is being downloaded.  can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum) |  | [optional] 
**percentage** | **float** | Optionally if the download is in progress you will recieve a download percent(from 0-100). | [optional] 

## Example

```python
from pieces_os_client.models.model_download_progress import ModelDownloadProgress

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDownloadProgress from a JSON string
model_download_progress_instance = ModelDownloadProgress.from_json(json)
# print the JSON string representation of the object
print ModelDownloadProgress.to_json()

# convert the object into a dict
model_download_progress_dict = model_download_progress_instance.to_dict()
# create an instance of ModelDownloadProgress from a dict
model_download_progress_form_dict = model_download_progress.from_dict(model_download_progress_dict)
```



