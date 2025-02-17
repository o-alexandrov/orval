"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  builder: () => builder,
  default: () => src_default,
  generateAxios: () => generateAxios,
  generateAxiosFooter: () => generateAxiosFooter,
  generateAxiosFunctions: () => generateAxiosFunctions,
  generateAxiosHeader: () => generateAxiosHeader,
  generateAxiosTitle: () => generateAxiosTitle,
  getAxiosDependencies: () => getAxiosDependencies
});
module.exports = __toCommonJS(src_exports);
var import_core = require("@orval/core");
var AXIOS_DEPENDENCIES = [
  {
    exports: [
      {
        name: "axios",
        default: true,
        values: true,
        syntheticDefaultImport: true
      },
      { name: "AxiosRequestConfig" },
      { name: "AxiosResponse" }
    ],
    dependency: "axios"
  }
];
var PARAMS_SERIALIZER_DEPENDENCIES = [
  {
    exports: [
      {
        name: "qs",
        default: true,
        values: true,
        syntheticDefaultImport: true
      }
    ],
    dependency: "qs"
  }
];
var returnTypesToWrite = /* @__PURE__ */ new Map();
var getAxiosDependencies = (hasGlobalMutator, hasParamsSerializerOptions) => [
  ...!hasGlobalMutator ? AXIOS_DEPENDENCIES : [],
  ...hasParamsSerializerOptions ? PARAMS_SERIALIZER_DEPENDENCIES : []
];
var generateAxiosImplementation = ({
  headers,
  queryParams,
  operationName,
  response,
  mutator,
  body,
  props,
  verb,
  override,
  formData,
  formUrlEncoded,
  paramsSerializer
}, { route, context }) => {
  var _a, _b;
  const isRequestOptions = (override == null ? void 0 : override.requestOptions) !== false;
  const isFormData = (override == null ? void 0 : override.formData) !== false;
  const isFormUrlEncoded = (override == null ? void 0 : override.formUrlEncoded) !== false;
  const isExactOptionalPropertyTypes = !!((_b = (_a = context.tsconfig) == null ? void 0 : _a.compilerOptions) == null ? void 0 : _b.exactOptionalPropertyTypes);
  const isSyntheticDefaultImportsAllowed = (0, import_core.isSyntheticDefaultImportsAllow)(
    context.tsconfig
  );
  const bodyForm = (0, import_core.generateFormDataAndUrlEncodedFunction)({
    formData,
    formUrlEncoded,
    body,
    isFormData,
    isFormUrlEncoded
  });
  const isBodyVerb = import_core.VERBS_WITH_BODY.includes(verb);
  if (mutator) {
    const mutatorConfig = (0, import_core.generateMutatorConfig)({
      route,
      body,
      headers,
      queryParams,
      response,
      verb,
      isFormData,
      isFormUrlEncoded,
      isBodyVerb,
      hasSignal: false,
      isExactOptionalPropertyTypes
    });
    const requestOptions = isRequestOptions ? (0, import_core.generateMutatorRequestOptions)(
      override == null ? void 0 : override.requestOptions,
      mutator.hasSecondArg
    ) : "";
    returnTypesToWrite.set(
      operationName,
      (title) => `export type ${(0, import_core.pascal)(
        operationName
      )}Result = NonNullable<Awaited<ReturnType<${title ? `ReturnType<typeof ${title}>['${operationName}']` : `typeof ${operationName}`}>>>`
    );
    const propsImplementation = mutator.bodyTypeName && body.definition ? (0, import_core.toObjectString)(props, "implementation").replace(
      new RegExp(`(\\w*):\\s?${body.definition}`),
      `$1: ${mutator.bodyTypeName}<${body.definition}>`
    ) : (0, import_core.toObjectString)(props, "implementation");
    return `const ${operationName} = (
    ${propsImplementation}
 ${isRequestOptions && mutator.hasSecondArg ? `options?: SecondParameter<typeof ${mutator.name}>,` : ""}) => {${bodyForm}
      return ${mutator.name}<${response.definition.success || "unknown"}>(
      ${mutatorConfig},
      ${requestOptions});
    }
  `;
  }
  const options = (0, import_core.generateOptions)({
    route,
    body,
    headers,
    queryParams,
    response,
    verb,
    requestOptions: override == null ? void 0 : override.requestOptions,
    isFormData,
    isFormUrlEncoded,
    paramsSerializer,
    paramsSerializerOptions: override == null ? void 0 : override.paramsSerializerOptions,
    isExactOptionalPropertyTypes,
    hasSignal: false
  });
  returnTypesToWrite.set(
    operationName,
    () => `export type ${(0, import_core.pascal)(operationName)}Result = AxiosResponse<${response.definition.success || "unknown"}>`
  );
  return `const ${operationName} = <TData = AxiosResponse<${response.definition.success || "unknown"}>>(
    ${(0, import_core.toObjectString)(props, "implementation")} ${isRequestOptions ? `options?: AxiosRequestConfig
` : ""} ): Promise<TData> => {${bodyForm}
    return axios${!isSyntheticDefaultImportsAllowed ? ".default" : ""}.${verb}(${options});
  }
`;
};
var generateAxiosTitle = (title) => {
  const sanTitle = (0, import_core.sanitize)(title);
  return `get${(0, import_core.pascal)(sanTitle)}`;
};
var generateAxiosHeader = ({
  title,
  isRequestOptions,
  isMutator,
  noFunction
}) => `
${isRequestOptions && isMutator ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

` : ""}
  ${!noFunction ? `export const ${title} = () => {
` : ""}`;
var generateAxiosFooter = ({
  operationNames,
  title,
  noFunction,
  hasMutator,
  hasAwaitedType
}) => {
  let footer = "";
  if (!noFunction) {
    footer += `return {${operationNames.join(",")}}};
`;
  }
  if (hasMutator && !hasAwaitedType) {
    footer += `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`;
  }
  operationNames.forEach((operationName) => {
    if (returnTypesToWrite.has(operationName)) {
      const func = returnTypesToWrite.get(operationName);
      footer += func(!noFunction ? title : void 0) + "\n";
    }
  });
  return footer;
};
var generateAxios = (verbOptions, options) => {
  const imports = (0, import_core.generateVerbImports)(verbOptions);
  const implementation = generateAxiosImplementation(verbOptions, options);
  return { implementation, imports };
};
var generateAxiosFunctions = async (verbOptions, options) => {
  const { implementation, imports } = generateAxios(verbOptions, options);
  return {
    implementation: "export " + implementation,
    imports
  };
};
var axiosClientBuilder = {
  client: generateAxios,
  header: generateAxiosHeader,
  dependencies: getAxiosDependencies,
  footer: generateAxiosFooter,
  title: generateAxiosTitle
};
var axiosFunctionsClientBuilder = {
  client: generateAxiosFunctions,
  header: (options) => generateAxiosHeader({ ...options, noFunction: true }),
  dependencies: getAxiosDependencies,
  footer: (options) => generateAxiosFooter({ ...options, noFunction: true }),
  title: generateAxiosTitle
};
var builders = {
  axios: axiosClientBuilder,
  "axios-functions": axiosFunctionsClientBuilder
};
var builder = ({ type = "axios-functions" } = {}) => () => builders[type];
var src_default = builder;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  builder,
  generateAxios,
  generateAxiosFooter,
  generateAxiosFunctions,
  generateAxiosHeader,
  generateAxiosTitle,
  getAxiosDependencies
});
