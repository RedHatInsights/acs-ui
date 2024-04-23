# acs-ui

Advanced Cluster Security application for the consoledot platform that includes Patternfly 4 and shared Red Hat cloud service frontend components.

## Initial access setup

In order to access the <https://[env>].foo.redhat.com URL in your browser, you have to add entries to your `/etc/hosts` file. This is a **one-time** setup that has to be done only once (unless you modify hosts) on each machine.

To setup the hosts file run following command:

```bash
sudo npm run patch:hosts
```

If this command throws an error you can manually add the following to `/etc/hosts`:

```bash
127.0.0.1       prod.foo.redhat.com
127.0.0.1       stage.foo.redhat.com
```

If you want to access stage.foo, even though staging is not utilized, you have to follow [this guide](https://source.redhat.com/groups/public/customer-platform-devops/digital_experience_operations_dxp_ops_wiki/using_squid_proxy_to_access_akamai_preprod_domains_over_vpn) and set up the Red Hat Squid proxy. Depending on what browser you use, choosing either Firefox, Chrome, or Safari would be a good choice.

## Getting started

1. ```npm install```

2. ```npm run start```

3. select `prod` -> `beta`

4. Open browser to the URL listed in the terminal output

**Note:**  You will need to register for a personal Red Hat Account if you haven't already. You'll need it in order to log into the UI

### Testing

`npm run verify` will run `npm run lint` (eslint) and `npm test` (Jest)

## Definitions

* `prod` - Production
* `beta` - Some UI features or even services are in a pre-release or preview state. Usually only in stage.
* `stable` - Non-beta stable version

## Deploying

* The starter repo uses Travis to deploy the webpack build to another Github repo defined in `.travis.yml`
  * Pushing to the specified branches will update the following environments
    * `main` -> `stage-beta`
    * `qa-beta` -> `qa-beta`
    * `prod-beta` -> `prod-beta`
    * `stage-stable` -> `stage-stable`
    * `qa-stable` -> `qa-stable`
    * `prod-stable` -> `prod-stable`

## Branch links and syncing

These are the urls for each branch:

### Beta

* main -> <https://console.stage.redhat.com/preview/application-services/acs> or <https://console.stage.redhat.com/preview/openshift/acs>
* qa-beta -> <https://qaprodauth.console.redhat.com/preview/application-services/acs> or <https://qaprodauth.console.redhat.com/preview/openshift/acs>
* prod-beta -> <https://console.redhat.com/preview/application-services/acs> or <https://console.redhat.com/preview/openshift/acs>

### Stable

* stage-stable -> <https://console.stage.redhat.com/application-services/acs> or <https://console.stage.redhat.com/openshift/acs>
* qa-stable -> <https://qaprodauth.console.redhat.com/application-services/acs> or <https://qaprodauth.console.redhat.com/openshift/acs>
* prod-stable -> <https://console.redhat.com/application-services/acs> or <https://console.redhat.com/openshift/acs>
