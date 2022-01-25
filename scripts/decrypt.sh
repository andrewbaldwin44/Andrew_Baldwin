#!/bin/bash

echo "$1" | gpg --batch --no-tty --yes --passphrase-fd 0 --decrypt -o temp_bundle.tar $2
tar -xf temp_bundle.tar
rm -rf temp_bundle.tar
