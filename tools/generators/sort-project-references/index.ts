import { Tree, updateJson, formatFiles } from '@nrwl/devkit';

export default async function (host: Tree) {
  updateJson(host, 'workspace.json', workspace => {
    workspace.defaultProject = "api";
    return workspace;
  });
  await formatFiles(host);
}
