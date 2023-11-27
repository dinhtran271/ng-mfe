import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

export default withModuleFederation({
    ...config,
  remotes: [
    ['home', 'http://127.0.0.1:4201/remoteEntry.mjs']
  ]
});

