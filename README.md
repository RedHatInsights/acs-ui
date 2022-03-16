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

2. ```npm run dev```

3. Open browser in URL listed in the terminal output

### Testing

`npm run verify` will run `npm run lint` (eslint) and `npm test` (Jest)

## Deploying

- This repo uses Github Actions to build and deploy the webpack `dist/` directory to another Github repo defined in `.github/workflows`
  - That Github repo has the following branches:
    - `ci-beta` (deployed by pushing to `main` on this repo)
    - `ci-stable` (deployed by pushing to `ci-stable` on this repo)
    - `qa-beta` (deployed by pushing to `qa-beta` on this repo)
    - `qa-stable` (deployed by pushing to `qa-stable` on this repo)
    - `prod-beta` (deployed by pushing to `prod-beta` on this repo)
    - `prod-stable` (deployed by pushing to `prod-stable` on this repo)

