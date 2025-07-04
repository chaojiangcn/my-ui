#!/bin/bash

# 构建组件库
echo "Building library..."
npm run build:lib

# 构建 Storybook
echo "Building Storybook..."
npm run build-storybook

# 发布到 npm
echo "Publishing to npm..."
npm publish

echo "Deployment completed!"