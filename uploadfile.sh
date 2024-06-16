#!/bin/bash

# Check if the file path argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <local-file-path>"
  exit 1
fi

# Assign the first argument to a variable
LOCAL_FILE=$1

# Azure Storage account credentials and container name
ACCOUNT_NAME="han"
ACCOUNT_KEY="iNy9UFd0dHcZwMlcoTth9jXyWb53jdGlL1FdFA6ySGim3jvlJb9O2rEfO+YTh5Uu0sVUesCwpuof+AStAkFQeA=="
CONTAINER_NAME="typora"

# Extract the file name from the local file path
FILE_NAME=$(basename "$LOCAL_FILE")

# Check if already logged in to Azure
if ! az account show > /dev/null 2>&1; then
  echo "Not logged in to Azure. Logging in..."
  az login
else
  echo "Already logged in to Azure."
fi

# Get the size of the local file
LOCAL_FILE_SIZE=$(wc -c < "$LOCAL_FILE" | xargs)
# Check if the blob exists and get its size
BLOB_SIZE=$(az storage blob show --account-name $ACCOUNT_NAME --account-key $ACCOUNT_KEY --container-name $CONTAINER_NAME --name $FILE_NAME --query "properties.contentLength" --output tsv)

# Echo the sizes
echo "💻 Local file size: $LOCAL_FILE_SIZE"
echo "🤖 Blob size: $BLOB_SIZE"

# Compare sizes and upload if different or blob doesn't exist
if [ "$LOCAL_FILE_SIZE" != "$BLOB_SIZE" ]; then
  echo "Uploading file..."
  az storage blob upload --account-name $ACCOUNT_NAME --account-key $ACCOUNT_KEY --container-name $CONTAINER_NAME --name $FILE_NAME --file "$LOCAL_FILE"
  echo "File uploaded!"
else
  echo "File already exists with the same size. Skipping upload."
fi

# Print the URL of the uploaded file
echo "https://$ACCOUNT_NAME.blob.core.windows.net/$CONTAINER_NAME/$FILE_NAME"
