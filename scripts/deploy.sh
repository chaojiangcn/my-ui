#!/bin/bash

echo "🚀 Starting deployment process..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Error: You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# 安装依赖
echo "📦 Installing dependencies..."
npm install

# 类型检查
echo "🔍 Running type check..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Type check failed. Please fix the errors before publishing."
    exit 1
fi

# 构建库
echo "🔨 Building library..."
npm run build:lib

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors before publishing."
    exit 1
fi

# 构建 Storybook
echo "📚 Building Storybook..."
npm run build-storybook

if [ $? -ne 0 ]; then
    echo "❌ Storybook build failed. Please fix the errors before publishing."
    exit 1
fi

# 发布到 npm
echo "📤 Publishing to npm..."
npm publish

if [ $? -eq 0 ]; then
    echo "✅ Successfully published to npm!"
    echo "🌐 Documentation will be deployed via GitHub Actions"
else
    echo "❌ Failed to publish to npm"
    exit 1
fi

echo "🎉 Deployment completed!" 