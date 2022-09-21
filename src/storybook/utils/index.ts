// takes list of properties names and builds argsTypes object
export const buildExcludeArgTypes = (keys: string[]) => {
  const argTypes: Record<string, any> = {};
  keys.forEach((key) => {
    argTypes[key] = {
      table: {
        disable: true,
      },
    };
  });
  return argTypes;
};
