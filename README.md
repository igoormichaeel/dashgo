# Dashgo
![mockup-multidevices](https://user-images.githubusercontent.com/31330416/156051348-bdeed1f0-d5db-4c45-bbde-85e515119173.png)

## About this project

A application of an admin panel developed at [Rocketseat's](https://www.rocketseat.com.br/) _Ignite ReactJS_ course using NextJS and Chakra UI for the entire interface. This app contains an authentication page (but authentication not yet implemented), a static dashboard page with ApexCharts.js, and a user listing page where you can add and edit users.

For user management, MirageJS was used to mock out an API (mirage is a fake server that runs on the client and can be used in both development and testing, but a real API is needed to work in production). The APP is ready to receive a real API.

Finally, React Query was used for data fetching and data caching.

## Technologies and tools

- [ReactJS](https://reactjs.org/) as library
- [NextJS](https://nextjs.org/) as framework
- [TypeScript](https://www.typescriptlang.org/) as programming language
- [Chakra UI](https://chakra-ui.com/) for the interface
- [ApexCharts.js](https://apexcharts.com/) for charts
- [MirageJS](https://miragejs.com/) to mock out an API
- [Faker](https://www.npmjs.com/package/@withshepherd/faker) to generate fake (but realistic) data
- [React Query](https://react-query.tanstack.com/) for data fetching and data caching

## Demonstration

https://user-images.githubusercontent.com/31330416/156035319-0e29a658-155f-4674-9de8-a8b9ad42cf58.mp4

## Getting Started

### Requirements

To run this project in the development mode, you'll need to have:
- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)

### Installing

On terminal, clone de repository and go to the directory
```bash
$ git clone https://github.com/igoormichaeel/dashgo.git
$ cd dashgo
```
And execute the following command to install all de dependencies:

```bash
$ yarn
```

Then, to runs the app in the development mode, execute:

```bash
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
