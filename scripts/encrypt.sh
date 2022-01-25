#!/bin/bash

tar -cf temp_bundle.tar $3
echo "$1" | gpg --batch --no-tty --yes --passphrase-fd 0 --symmetric -o $2 temp_bundle.tar
rm -rf temp_bundle.tar
