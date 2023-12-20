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
  generateSwr: () => generateSwr,
  generateSwrHeader: () => generateSwrHeader,
  getSwrDependencies: () => getSwrDependencies
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
      { name: "AxiosResponse" },
      { name: "AxiosError" }
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
var SWR_DEPENDENCIES = [
  {
    exports: [
      { name: "useSwr", values: true, default: true },
      { name: "SWRConfiguration" },
      { name: "Key" }
    ],
    dependency: "swr"
  }
];
var getSwrDependencies = (hasGlobalMutator, hasParamsSerializerOptions) => [
  ...!hasGlobalMutator ? AXIOS_DEPENDENCIES : [],
  ...hasParamsSerializerOptions ? PARAMS_SERIALIZER_DEPENDENCIES : [],
  ...SWR_DEPENDENCIES
];
var generateSwrRequestFunction = ({
  headers,
  queryParams,
  operationName,
  response,
  mutator,
  body,
  props,
  verb,
  formData,
  formUrlEncoded,
  override,
  paramsSerializer
}, { route, context }) => {
  var _a, _b;
  const isRequestOptions = (override == null ? void 0 : override.requestOptions) !== false;
  const isFormData = (override == null ? void 0 : override.formData) !== false;
  const isFormUrlEncoded = (override == null ? void 0 : override.formUrlEncoded) !== false;
  const isExactOptionalPropertyTypes = !!((_b = (_a = context.tsconfig) == null ? void 0 : _a.compilerOptions) == null ? void 0 : _b.exactOptionalPropertyTypes);
  const isBodyVerb = import_core.VERBS_WITH_BODY.includes(verb);
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
      hasSignal: false,
      isBodyVerb,
      isExactOptionalPropertyTypes
    });
    const propsImplementation = (mutator == null ? void 0 : mutator.bodyTypeName) && body.definition ? (0, import_core.toObjectString)(props, "implementation").replace(
      new RegExp(`(\\w*):\\s?${body.definition}`),
      `$1: ${mutator.bodyTypeName}<${body.definition}>`
    ) : (0, import_core.toObjectString)(props, "implementation");
    const requestOptions = isRequestOptions ? (0, import_core.generateMutatorRequestOptions)(
      override == null ? void 0 : override.requestOptions,
      mutator.hasSecondArg
    ) : "";
    return `export const ${operationName} = (
    ${propsImplementation}
 ${isRequestOptions && mutator.hasSecondArg ? `options?: SecondParameter<typeof ${mutator.name}>` : ""}) => {${bodyForm}
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
  return `export const ${operationName} = (
    ${(0, import_core.toObjectString)(
    props,
    "implementation"
  )} ${isRequestOptions ? `options?: AxiosRequestConfig
` : ""} ): Promise<AxiosResponse<${response.definition.success || "unknown"}>> => {${bodyForm}
    return axios${!isSyntheticDefaultImportsAllowed ? ".default" : ""}.${verb}(${options});
  }
`;
};
var generateSwrArguments = ({
  operationName,
  mutator,
  isRequestOptions
}) => {
  const definition = `SWRConfiguration<Awaited<ReturnType<typeof ${operationName}>>, TError> & { swrKey?: Key, enabled?: boolean }`;
  if (!isRequestOptions) {
    return `swrOptions?: ${definition}`;
  }
  return `options?: { swr?:${definition}, ${!mutator ? `axios?: AxiosRequestConfig` : (mutator == null ? void 0 : mutator.hasSecondArg) ? `request?: SecondParameter<typeof ${mutator.name}>` : ""} }
`;
};
var generateSwrImplementation = ({
  operationName,
  swrKeyFnName,
  swrProperties,
  swrKeyProperties,
  params,
  mutator,
  isRequestOptions,
  response,
  swrOptions,
  props,
  doc
}) => {
  var _a;
  const swrProps = (0, import_core.toObjectString)(props, "implementation");
  const httpFunctionProps = swrProperties;
  const swrKeyImplementation = `const isEnabled = swrOptions?.enabled !== false${params.length ? ` && !!(${params.map(({ name }) => name).join(" && ")})` : ""}
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? ${swrKeyFnName}(${swrKeyProperties}) : null);`;
  let errorType = `AxiosError<${response.definition.errors || "unknown"}>`;
  if (mutator) {
    errorType = mutator.hasErrorType ? `ErrorType<${response.definition.errors || "unknown"}>` : response.definition.errors || "unknown";
  }
  return `
export type ${(0, import_core.pascal)(
    operationName
  )}QueryResult = NonNullable<Awaited<ReturnType<typeof ${operationName}>>>
export type ${(0, import_core.pascal)(operationName)}QueryError = ${errorType}

${doc}export const ${(0, import_core.camel)(
    `use-${operationName}`
  )} = <TError = ${errorType}>(
 ${swrProps} ${generateSwrArguments({
    operationName,
    mutator,
    isRequestOptions
  })}
  ) => {

  ${isRequestOptions ? `const {swr: swrOptions${!mutator ? `, axios: axiosOptions` : (mutator == null ? void 0 : mutator.hasSecondArg) ? ", request: requestOptions" : ""}} = options ?? {}` : ""}

  ${swrKeyImplementation}
  const swrFn = () => ${operationName}(${httpFunctionProps}${httpFunctionProps ? ", " : ""}${isRequestOptions ? !mutator ? `axiosOptions` : (mutator == null ? void 0 : mutator.hasSecondArg) ? "requestOptions" : "" : ""});

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, ${swrOptions.options ? `{
    ${(_a = (0, import_core.stringify)(swrOptions.options)) == null ? void 0 : _a.slice(1, -1)}
    ...swrOptions
  }` : "swrOptions"})

  return {
    swrKey,
    ...query
  }
}
`;
};
var generateSwrHook = ({
  queryParams,
  operationName,
  body,
  props,
  verb,
  params,
  override,
  mutator,
  response,
  summary,
  deprecated
}, { route }) => {
  const isRequestOptions = (override == null ? void 0 : override.requestOptions) !== false;
  if (verb !== import_core.Verbs.GET) {
    return "";
  }
  const swrProperties = props.map((param) => {
    if (param.type === import_core.GetterPropType.NAMED_PATH_PARAMS)
      return param.destructured;
    return param.type === import_core.GetterPropType.BODY ? body.implementation : param.name;
  }).join(",");
  const swrKeyProperties = props.filter((prop) => prop.type !== import_core.GetterPropType.HEADER).map((param) => {
    if (param.type === import_core.GetterPropType.NAMED_PATH_PARAMS)
      return param.destructured;
    return param.type === import_core.GetterPropType.BODY ? body.implementation : param.name;
  }).join(",");
  const swrKeyFnName = (0, import_core.camel)(`get-${operationName}-key`);
  const queryKeyProps = (0, import_core.toObjectString)(
    props.filter((prop) => prop.type !== import_core.GetterPropType.HEADER),
    "implementation"
  );
  const doc = (0, import_core.jsDoc)({ summary, deprecated });
  return `export const ${swrKeyFnName} = (${queryKeyProps}) => [\`${route}\`${queryParams ? ", ...(params ? [params]: [])" : ""}${body.implementation ? `, ${body.implementation}` : ""}] as const;

    ${generateSwrImplementation({
    operationName,
    swrKeyFnName,
    swrProperties,
    swrKeyProperties,
    params,
    props,
    mutator,
    isRequestOptions,
    response,
    swrOptions: override.swr,
    doc
  })}
`;
};
var generateSwrHeader = ({
  isRequestOptions,
  isMutator,
  hasAwaitedType
}) => `
  ${!hasAwaitedType ? `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

` : ""}
  ${isRequestOptions && isMutator ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

` : ""}`;
var generateSwr = (verbOptions, options) => {
  const imports = (0, import_core.generateVerbImports)(verbOptions);
  const functionImplementation = generateSwrRequestFunction(
    verbOptions,
    options
  );
  const hookImplementation = generateSwrHook(verbOptions, options);
  return {
    implementation: `${functionImplementation}

${hookImplementation}`,
    imports
  };
};
var swrClientBuilder = {
  client: generateSwr,
  header: generateSwrHeader,
  dependencies: getSwrDependencies
};
var builder = () => () => swrClientBuilder;
var src_default = builder;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  builder,
  generateSwr,
  generateSwrHeader,
  getSwrDependencies
});
