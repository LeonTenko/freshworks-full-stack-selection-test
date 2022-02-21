# Freshworks - Full Stack Selection Test

## Description
You have been asked to develop a small application for FreshWorks Studio. We want to learn about how you think, communicate and code. 

## Installation Instructions

1) Clone the repository:
`https://github.com/LeonTenko/freshworks-full-stack-selection-test.git`
2) Navigate to the main folder:
`cd freshworks-full-stack-selection-test`
3) Install packages:
`npm install`
4) Navigate to the client (forntend) folder:
`cd client`
5) Install packages:
`npm install`
6) Navigate back to the main folder:
`cd ..`
7) Run both front and back-end servers concurrently:
`npm run dev`

## PORTS

Frontend: :3000
Backend:  :5000

If port :5000 is in use, please change the frontend PROXY to your backend port in
`client/package.json`
`"proxy": "http://localhost:<YOUR PORT>"`

## Available Scripts

### npm run server

Uses NodeMon package to run the server. NodeMon allows the server to refresh every time there's a change in code.

### npm run client

Starts the frontend (React) server separately on port 3000 by default.
    
### npm run dev

Starts both frontend and backend servers using the Concurrently package.



