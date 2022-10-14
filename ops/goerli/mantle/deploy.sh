#!/bin/bash

cp -r Makefile.goerli.mantle.deploy ../../
cp -r docker-compose.goerli.mantle.deploy.yml ../../

cd ../../
rm -rf .env
make -f Makefile.goerli.mantle.deploy clean
make -f Makefile.goerli.mantle.deploy up

rm -rf Makefile.goerli.mantle.deploy
rm -rf docker-compose.goerli.mantle.deploy.yml
