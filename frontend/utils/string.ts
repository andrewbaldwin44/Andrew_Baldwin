interface IObjectPath {
  [key: string]: any | IObjectPath;
}

export const TEMPLATE_STRING_MATCH = /<%= (.*?) %>/g;

export const templateString = (string: string, variables: { [key: string]: string }) =>
  string.replace(
    TEMPLATE_STRING_MATCH,
    match => variables[match.replace(/<%= /g, '').replace(/ %>/g, '')] || '',
  );

export const objectPath = (path: string[], object: IObjectPath) =>
  path.reduce(
    (reducedObject: any | IObjectPath, pathname: string) => reducedObject[pathname],
    object,
  );
