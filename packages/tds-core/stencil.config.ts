import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { resolve } from 'path';

const COMPONENT_CORE_PACKAGE_NAME = '@tesla/design-core';
const COMPONENT_LIB_PREFIX = 'tds';
const PACKAGES_ROOT = resolve(__dirname, '../');

export const config: Config = {
  namespace: 'tds',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: `${PACKAGES_ROOT}/${COMPONENT_LIB_PREFIX}-core/loader`,
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    // vueOutputTarget({
    //   componentCorePackage: COMPONENT_CORE_PACKAGE_NAME,
    //   proxiesFile: `${PACKAGES_ROOT}/${COMPONENT_CORE_PACKAGE_NAME}-vue/src/components.ts`,
    // }),
    reactOutputTarget({
      // Relative path to where the React components will be generated
      outDir: `${PACKAGES_ROOT}/${COMPONENT_LIB_PREFIX}-react/src/`,
    }),
    angularOutputTarget({
      componentCorePackage: COMPONENT_CORE_PACKAGE_NAME,
      directivesProxyFile: `${PACKAGES_ROOT}/${COMPONENT_LIB_PREFIX}-angular/projects/tesla/design-angular/src/lib/directives/proxies.ts`,
      directivesArrayFile: `${PACKAGES_ROOT}/${COMPONENT_LIB_PREFIX}-angular/projects/tesla/design-angular/src/lib/directives/index.ts`,
    }),
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
