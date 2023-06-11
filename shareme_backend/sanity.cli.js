import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: '4tfmc61v',
    dataset: 'production',
    revalidate: 1
  }
});
