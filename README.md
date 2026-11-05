
# Node.js Application Deployment - DevOps Assignment

## 1. Project Overview

This project demonstrates the deployment of a Node.js
application on a local Ubuntu machine using PM2, Nginx,
Jenkins CI/CD and Cloudflare Tunnel.

Docker is not used.

## 2. Technologies Used

- Ubuntu Linux
- Node.js
- Express.js
- npm
- PM2
- Nginx
- Jenkins
- Git and GitHub
- Cloudflare Tunnel

## 3. Architecture

GitHub -> Jenkins -> Deployment on Ubuntu
-> PM2 -> Node.js Application
-> Nginx Reverse Proxy
-> Cloudflare Tunnel -> Public HTTPS

## 4. Application Details

Application Name: DevOps Assignment

Backend: Node.js with Express.js

Application Port: 3000

Reverse Proxy: Nginx Port 80

Process Manager: PM2

## 5. Deployment Instructions

Install dependencies:

npm ci

Start application:

pm2 start ecosystem.config.js

Check application:

pm2 list

View logs:

pm2 logs devops-app

## 6. Nginx Configuration

Nginx forwards requests from port 80
to the Node.js application on port 3000.

## 7. CI/CD Pipeline

Jenkins pipeline stages:

1. Checkout source code
2. Install dependencies
3. Deploy application
4. Reload application using PM2

Pipeline is configured to poll GitHub
for source-code changes.

## 8. Monitoring

PM2 monitoring:

pm2 monit

System monitoring:

top
free -h
df -h

## 9. Public Access

Public HTTPS URL: ADD_YOUR_CLOUDFLARE_URL

GitHub Repository: ADD_YOUR_GITHUB_URL

## 10. Conclusion

Successfully deployed a Node.js application
on Ubuntu using PM2 and Nginx.

Implemented Jenkins CI/CD integration with GitHub
and provided public HTTPS access using Cloudflare Tunnel.

Application monitoring is performed using PM2
and Linux system monitoring commands.
