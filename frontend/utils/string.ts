interface Translation {
  [key: string]: string | Translation;
}

export const objectPath = (path: string[], object: Translation) =>
  path.reduce(
    (reducedObject: string | Translation, pathname: string) =>
      typeof reducedObject === 'string' ? reducedObject : reducedObject[pathname],
    object,
  );
