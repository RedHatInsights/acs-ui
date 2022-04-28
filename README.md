# acs-ui

ACS app for the consoledot platform that includes Patternfly 4 and shared Red Hat cloud service frontend components.

## Initial access setup

In order to access the https://[env].foo.redhat.com in your browser, you have to add entries to your `/etc/hosts` file. This is a **one-time** setup that has to be done only once (unless you modify hosts) on each machine.

To setup the hosts file run following command:
```bash
npm run patch:hosts
```

If this command throws an error run it as a `sudo`:
```bash
sudo npm run patch:hosts
```

You should also set up the Red Hat squid proxy using [this guide](https://source.redhat.com/groups/public/customer-platform-devops/digital_experience_operations_dxp_ops_wiki/using_squid_proxy_to_access_akamai_preprod_domains_over_vpn). Depending on what browser you use, choosing either Firefox, Chrome, or Safari would be a good choice.

## Getting started

1. ```npm install```

2. ```npm run start:beta```

3. Open browser in URL listed in the terminal output

### Testing

`npm run verify` will run `npm run lint` (eslint) and `npm test` (Jest)

### Mocking

The `dev.webpack.config.js` file contains the webpack custom config options that we use for our development environment. The `customProxy` field is used to proxy our `/api/*` requests to the appropriate Backend API Server. We can optionally pass a `bypass` field that can intercept API requests and provide mock data instead of letting it go through to the Backend API Server. This is nice for testing purposes. You can run the Dev Server by running the following:

`npm run start:mock`

## Definitions
* `stage` - Development and Testing
* `prod` - Production
* `qaprodauth` - Same environment as stage but uses production SSO instead of stage SSO
* `beta` - Some UI features or even services are in a pre-release or preview state. Usually only in stage.
* `stable` - Non-beta stable version

## Deploying

- This repo uses Github Actions to build and deploy the webpack `dist/` directory to another Github repo defined in `.github/workflows`
  - Pushing to the specified branches will push the build files to the following branches in the build repo:
    - `main` -> `ci-beta` -> `qa-beta` -> `stage-beta`
    - `stable` -> `ci-stable` -> `qa-stable` -> `stage-stable`
    - `prod-beta` -> `prod-beta`
    - `prod-stable` -> `prod-stable`

## Branch links and syncing

These are the urls for each branch:

### Beta
* ci-beta -> https://ci.console.redhat.com/beta
* qa-beta -> https://qa.console.redhat.com/beta
* stage-beta -> https://console.stage.redhat.com/beta
* prod-beta -> https://console.redhat.com/beta

### Stable
* ci-stable -> https://ci.console.redhat.com
* qa-stable -> https://qa.console.redhat.com
* stage -> https://console.stage.redhat.com
* prod-stable -> https://console.redhat.com