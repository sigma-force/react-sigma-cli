import shell from "shelljs";

interface Prompt {
  typeScriptConfirm: boolean;
  projectName: string;
  framework: string;
}
/**
 * Clone the correspondent repository
 * @param prompt User answers
 */
const cloneBaseProject = (prompt: Prompt): void => {
  const { typeScriptConfirm, projectName } = prompt;
  if (typeScriptConfirm) {
    shell.exec(
      `git clone https://github.com/sigma-force/react-base-typescript.git ${projectName}`
    );
  } else {
    shell.exec(
      `git clone https://github.com/sigma-force/react-base.git ${projectName}`
    );
  }
};

export default cloneBaseProject;
