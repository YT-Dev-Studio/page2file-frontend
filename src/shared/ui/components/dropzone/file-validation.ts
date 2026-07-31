export type RejectedFile = {
  file: File;
  reason: "unsupported-type" | "too-large";
};

export type FileValidationResult = {
  accepted: ReadonlyArray<File>;
  rejected: ReadonlyArray<RejectedFile>;
};

const getFileExtension = (filename: string): string => {
  const extensionIndex = filename.lastIndexOf(".");

  return extensionIndex >= 0
    ? filename.slice(extensionIndex).toLowerCase()
    : "";
};

const matchesAcceptedType = (
  file: File,
  acceptedType: string,
): boolean => {
  const normalizedType = acceptedType.trim().toLowerCase();

  if (normalizedType.startsWith(".")) {
    return getFileExtension(file.name) === normalizedType;
  }

  if (normalizedType.endsWith("/*")) {
    return file.type
      .toLowerCase()
      .startsWith(normalizedType.slice(0, -1));
  }

  return file.type.toLowerCase() === normalizedType;
};

export const validateFiles = (
  files: ReadonlyArray<File>,
  accept: ReadonlyArray<string>,
  maxBytes: number,
): FileValidationResult => {
  const accepted: File[] = [];
  const rejected: RejectedFile[] = [];

  files.forEach((file) => {
    if (file.size > maxBytes) {
      rejected.push({ file, reason: "too-large" });
      return;
    }

    if (!accept.some((acceptedType) => matchesAcceptedType(file, acceptedType))) {
      rejected.push({ file, reason: "unsupported-type" });
      return;
    }

    accepted.push(file);
  });

  return { accepted, rejected };
};
