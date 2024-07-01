---
sidebar_position: 6
---

# Azure Storage

This is the place where i store the public data

## Container

```sh
> az storage container list --account-name han --account-key iNy9UFd0dHcZwMlcoTth9jXyWb53jdGlL1FdFA6ySGim3jvlJb9O2rEfO+YTh5Uu0sVUesCwpuof+AStAkFQeA== --output table

Name                 Lease Status    Last Modified
-------------------  --------------  -------------------------
$web                                 2024-06-01T08:06:49+00:00
hnsonerror                           2024-05-19T13:10:37+00:00
hyte                                 2024-06-01T02:56:28+00:00
personal                             2024-05-19T15:18:59+00:00
typora                               2024-05-19T15:18:59+00:00
webpage-suggestions                  2024-05-19T13:13:56+00:00
```

That's how you can copy file

```sh
az storage blob upload --account-name han --account-key iNy9UFd0dHcZwMlcoTth9jXyWb53jdGlL1FdFA6ySGim3jvlJb9O2rEfO+YTh5Uu0sVUesCwpuof+AStAkFQeA== --container-name typora --name logo2.svg --file ./static/img/logo.svg

Finished[#############################################################]  100.0000%
{
  "client_request_id": "6ba1677a-2b95-11ef-bb3c-7241af498ea5",
  "content_md5": "qk+izcOdM/LuO48kW20w2Q==",
  "date": "2024-06-16T04:03:42+00:00",
  "encryption_key_sha256": null,
  "encryption_scope": null,
  "etag": "\"0x8DC8DB9503F755F\"",
  "lastModified": "2024-06-16T04:03:43+00:00",
  "request_id": "08116826-e01e-0071-0ba2-bfb2a1000000",
  "request_server_encrypted": true,
  "version": "2022-11-02",
  "version_id": null
}
```

## File shares

This is found by accident

```sh
az storage share create --account-name han --account-key iNy9UFd0dHcZwMlcoTth9jXyWb53jdGlL1FdFA6ySGim3jvlJb9O2rEfO+YTh5Uu0sVUesCwpuof+AStAkFQeA== --name typora

{
"created": true
}
```

```sh
> az storage file upload --account-name han --account-key iNy9UFd0dHcZwMlcoTth9jXyWb53jdGlL1FdFA6ySGim3jvlJb9O2rEfO+YTh5Uu0sVUesCwpuof+AStAkFQeA== --share-name typora --path "typora/logo2.svg" --source "./static/img/logo.svg"
> The specified parent path does not exist.
> RequestId:cdd54bdd-d01a-0027-23a1-bf434e000000
> Time:2024-06-16T03:56:45.8783844Z
> ErrorCode:ParentNotFound
> az storage file upload --account-name han --account-key iNy9UFd0dHcZwMlcoTth9jXyWb53jdGlL1FdFA6ySGim3jvlJb9O2rEfO+YTh5Uu0sVUesCwpuof+AStAkFQeA== --share-name typora --path "logo2.svg" --source "./static/img/logo.svg"
> Alive[################################################################] 100.000Finished[#############################################################] 100.0000%
> {
> "content_md5": "0xaa0x4f0xa20xcd0xc30x9d0x330xf20xee0x3b0x8f0x240x5b0x6d0x300xd9",
> "date": "2024-06-16T03:56:58+00:00",
> "etag": "\"0x8DC8DB85F463DE8\"",
> "file_last_write_time": "2024-06-16T03:56:59.1705576Z",
> "last_modified": "2024-06-16T03:56:59+00:00",
> "request_id": "dbc3e3d9-401a-001a-50a1-bf3555000000",
> "request_server_encrypted": true,
> "version": "2022-11-02"
> }
```

## ![image-20240616143747337](https://han.blob.core.windows.net/typora/image-20240616143747337.png)Static Site

![image-20240616125308042](https://han.blob.core.windows.net/typora/image-20240616125308042.png)

The ultimate static site will be

![image-20240616144320171](https://han.blob.core.windows.net/typora/image-20240616144320171.png)
