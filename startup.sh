#!/bin/sh
sed -i "s|window.env=\"local\"|window.env=\"$env\"|" /usr/share/nginx/html/index.html
nginx -g 'daemon off;'