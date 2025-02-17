import SwaggerParser from '@apidevtools/swagger-parser';
import * as openapi3_ts from 'openapi3-ts';
import { InfoObject, OperationObject, OpenAPIObject, ResponsesObject, ReferenceObject, RequestBodyObject, ParameterObject, SchemaObject, ComponentsObject, SchemasObject, PathItemObject, ResponseObject, ExampleObject } from 'openapi3-ts';
import swagger2openapi from 'swagger2openapi';
import { allLocales } from '@faker-js/faker';
import { CompareOperator } from 'compare-versions';
import debug from 'debug';

interface Options {
    output?: string | OutputOptions;
    input?: string | InputOptions;
    hooks?: Partial<HooksOptions>;
}
type OptionsFn = () => Options | Promise<Options>;
type OptionsExport = Options | Promise<Options> | OptionsFn;
type Config = {
    [project: string]: OptionsExport;
};
type ConfigFn = () => Config | Promise<Config>;
type ConfigExternal = Config | Promise<Config> | ConfigFn;
type NormalizedConfig = {
    [project: string]: NormalizedOptions;
};
interface NormalizedOptions {
    output: NormalizedOutputOptions;
    input: NormalizedInputOptions;
    hooks: NormalizedHookOptions;
}
type NormalizedOutputOptions = {
    workspace?: string;
    target?: string;
    schemas?: string;
    mode: OutputMode;
    mock?: GlobalMockOptions | ClientMockBuilder;
    override: NormalizedOverrideOutput;
    client: OutputClient | OutputClientFunc;
    clean: boolean | string[];
    prettier: boolean;
    tslint: boolean;
    tsconfig?: Tsconfig;
    packageJson?: PackageJson;
    headers: boolean;
    indexFiles: boolean;
    baseUrl?: string;
    allParamsOptional: boolean;
    urlEncodeParameters: boolean;
};
type NormalizedParamsSerializerOptions = {
    qs?: Record<string, any>;
};
type NormalizedOverrideOutput = {
    title?: (title: string) => string;
    transformer?: OutputTransformer;
    mutator?: NormalizedMutator;
    operations: {
        [key: string]: NormalizedOperationOptions;
    };
    tags: {
        [key: string]: NormalizedOperationOptions;
    };
    mock?: OverrideMockOptions;
    contentType?: OverrideOutputContentType;
    header: false | ((info: InfoObject) => string[] | string);
    formData: boolean | NormalizedMutator;
    formUrlEncoded: boolean | NormalizedMutator;
    paramsSerializer?: NormalizedMutator;
    paramsSerializerOptions?: NormalizedParamsSerializerOptions;
    components: {
        schemas: {
            suffix: string;
            itemSuffix: string;
        };
        responses: {
            suffix: string;
        };
        parameters: {
            suffix: string;
        };
        requestBodies: {
            suffix: string;
        };
    };
    query: NormalizedQueryOptions;
    angular: Required<AngularOptions>;
    swr: {
        options?: any;
    };
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    requestOptions: Record<string, any> | boolean;
    useDates?: boolean;
    coerceTypes?: boolean;
    useTypeOverInterfaces?: boolean;
    useDeprecatedOperations?: boolean;
    useBigInt?: boolean;
    useNamedParameters?: boolean;
    useNativeEnums?: boolean;
};
type NormalizedMutator = {
    path: string;
    name?: string;
    default: boolean;
    alias?: Record<string, string>;
};
type NormalizedOperationOptions = {
    transformer?: OutputTransformer;
    mutator?: NormalizedMutator;
    mock?: {
        data?: MockProperties;
        properties?: MockProperties;
    };
    contentType?: OverrideOutputContentType;
    query?: NormalizedQueryOptions;
    angular?: Required<AngularOptions>;
    swr?: {
        options?: any;
    };
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    formData?: boolean | NormalizedMutator;
    formUrlEncoded?: boolean | NormalizedMutator;
    paramsSerializer?: NormalizedMutator;
    requestOptions?: object | boolean;
};
type NormalizedInputOptions = {
    target: string | Record<string, unknown> | OpenAPIObject;
    validation: boolean;
    override: OverrideInput;
    converterOptions: swagger2openapi.Options;
    parserOptions: SwaggerParserOptions;
    filters?: {
        tags?: (string | RegExp)[];
    };
};
type OutputClientFunc = (clients: GeneratorClients) => ClientGeneratorsBuilder;
type OutputOptions = {
    workspace?: string;
    target?: string;
    schemas?: string;
    mode?: OutputMode;
    mock?: boolean | GlobalMockOptions | ClientMockBuilder;
    override?: OverrideOutput;
    client?: OutputClient | OutputClientFunc;
    clean?: boolean | string[];
    prettier?: boolean;
    tslint?: boolean;
    tsconfig?: string | Tsconfig;
    packageJson?: string;
    headers?: boolean;
    indexFiles?: boolean;
    baseUrl?: string;
    allParamsOptional?: boolean;
    urlEncodeParameters?: boolean;
};
type SwaggerParserOptions = Omit<SwaggerParser.Options, 'validate'> & {
    validate?: boolean;
};
type InputOptions = {
    target: string | Record<string, unknown> | OpenAPIObject;
    validation?: boolean;
    override?: OverrideInput;
    converterOptions?: swagger2openapi.Options;
    parserOptions?: SwaggerParserOptions;
    filters?: {
        tags?: string[];
    };
};
declare const OutputClient: {
    readonly ANGULAR: "angular";
    readonly AXIOS: "axios";
    readonly AXIOS_FUNCTIONS: "axios-functions";
    readonly REACT_QUERY: "react-query";
    readonly SVELTE_QUERY: "svelte-query";
    readonly VUE_QUERY: "vue-query";
    readonly SWR: "swr";
    readonly ZOD: "zod";
};
type OutputClient = typeof OutputClient[keyof typeof OutputClient];
declare const OutputMode: {
    readonly SINGLE: "single";
    readonly SPLIT: "split";
    readonly TAGS: "tags";
    readonly TAGS_SPLIT: "tags-split";
};
type OutputMode = typeof OutputMode[keyof typeof OutputMode];
declare const OutputMockType: {
    readonly MSW: "msw";
};
type OutputMockType = typeof OutputMockType[keyof typeof OutputMockType];
type GlobalMockOptions = {
    type: OutputMockType;
    useExamples?: boolean;
    delay?: number | (() => number);
    baseUrl?: string;
    locale?: keyof typeof allLocales;
};
type OverrideMockOptions = Partial<GlobalMockOptions> & {
    arrayMin?: number;
    arrayMax?: number;
    required?: boolean;
    properties?: MockProperties;
    format?: Record<string, unknown>;
};
type MockOptions = Omit<OverrideMockOptions, 'properties'> & {
    properties?: Record<string, unknown>;
    operations?: Record<string, {
        properties: Record<string, unknown>;
    }>;
    tags?: Record<string, {
        properties: Record<string, unknown>;
    }>;
};
type MockProperties = {
    [key: string]: unknown;
} | ((specs: OpenAPIObject) => {
    [key: string]: unknown;
});
type OutputTransformerFn = (verb: GeneratorVerbOptions) => GeneratorVerbOptions;
type OutputTransformer = string | OutputTransformerFn;
type MutatorObject = {
    path: string;
    name?: string;
    default?: boolean;
    alias?: Record<string, string>;
};
type Mutator = string | MutatorObject;
type ParamsSerializerOptions = {
    qs?: Record<string, any>;
};
type OverrideOutput = {
    title?: (title: string) => string;
    transformer?: OutputTransformer;
    mutator?: Mutator;
    operations?: {
        [key: string]: OperationOptions;
    };
    tags?: {
        [key: string]: OperationOptions;
    };
    mock?: OverrideMockOptions;
    contentType?: OverrideOutputContentType;
    header?: boolean | ((info: InfoObject) => string[] | string);
    formData?: boolean | Mutator;
    formUrlEncoded?: boolean | Mutator;
    paramsSerializer?: Mutator;
    paramsSerializerOptions?: ParamsSerializerOptions;
    components?: {
        schemas?: {
            suffix?: string;
            itemSuffix?: string;
        };
        responses?: {
            suffix?: string;
        };
        parameters?: {
            suffix?: string;
        };
        requestBodies?: {
            suffix?: string;
        };
    };
    query?: QueryOptions;
    swr?: {
        options?: any;
    };
    angular?: AngularOptions;
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    requestOptions?: Record<string, any> | boolean;
    useDates?: boolean;
    useTypeOverInterfaces?: boolean;
    useDeprecatedOperations?: boolean;
    useBigInt?: boolean;
    useNamedParameters?: boolean;
    useNativeEnums?: boolean;
};
type OverrideOutputContentType = {
    include?: string[];
    exclude?: string[];
};
type NormalizedQueryOptions = {
    useQuery?: boolean;
    useSuspenseQuery?: boolean;
    useMutation?: boolean;
    useInfinite?: boolean;
    useSuspenseInfiniteQuery?: boolean;
    useInfiniteQueryParam?: string;
    usePrefetch?: boolean;
    options?: any;
    queryKey?: NormalizedMutator;
    queryOptions?: NormalizedMutator;
    mutationOptions?: NormalizedMutator;
    signal?: boolean;
    version?: 3 | 4 | 5;
};
type QueryOptions = {
    useQuery?: boolean;
    useSuspenseQuery?: boolean;
    useMutation?: boolean;
    useInfinite?: boolean;
    useSuspenseInfiniteQuery?: boolean;
    useInfiniteQueryParam?: string;
    usePrefetch?: boolean;
    options?: any;
    queryKey?: Mutator;
    queryOptions?: Mutator;
    mutationOptions?: Mutator;
    signal?: boolean;
    version?: 3 | 4 | 5;
};
type AngularOptions = {
    provideIn?: 'root' | 'any' | boolean;
};
type InputTransformerFn = (spec: OpenAPIObject) => OpenAPIObject;
type InputTransformer = string | InputTransformerFn;
type OverrideInput = {
    transformer?: InputTransformer;
};
type OperationOptions = {
    transformer?: OutputTransformer;
    mutator?: Mutator;
    mock?: {
        data?: MockProperties;
        properties?: MockProperties;
    };
    query?: QueryOptions;
    angular?: Required<AngularOptions>;
    swr?: {
        options?: any;
    };
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    formData?: boolean | Mutator;
    formUrlEncoded?: boolean | Mutator;
    paramsSerializer?: Mutator;
    requestOptions?: object | boolean;
};
type Hook = 'afterAllFilesWrite';
type HookFunction = (...args: any[]) => void | Promise<void>;
type HookCommand = string | HookFunction | (string | HookFunction)[];
type NormalizedHookCommand = HookCommand[];
type HooksOptions<T = HookCommand | NormalizedHookCommand> = Partial<Record<Hook, T>>;
type NormalizedHookOptions = HooksOptions<NormalizedHookCommand>;
type Verbs = 'post' | 'put' | 'get' | 'patch' | 'delete' | 'head';
declare const Verbs: {
    POST: Verbs;
    PUT: Verbs;
    GET: Verbs;
    PATCH: Verbs;
    DELETE: Verbs;
    HEAD: Verbs;
};
type ImportOpenApi = {
    data: Record<string, unknown | OpenAPIObject>;
    input: InputOptions;
    output: NormalizedOutputOptions;
    target: string;
    workspace: string;
};
interface ContextSpecs {
    specKey: string;
    target: string;
    workspace: string;
    tslint: boolean;
    specs: Record<string, OpenAPIObject>;
    override: NormalizedOverrideOutput;
    tsconfig?: Tsconfig;
    packageJson?: PackageJson;
    parents?: string[];
}
interface GlobalOptions {
    projectName?: string;
    watch?: boolean | string | (string | boolean)[];
    clean?: boolean | string[];
    prettier?: boolean;
    tslint?: boolean;
    mock?: boolean | GlobalMockOptions;
    client?: OutputClient;
    mode?: OutputMode;
    tsconfig?: string | Tsconfig;
    packageJson?: string;
    input?: string;
    output?: string;
}
interface Tsconfig {
    baseUrl?: string;
    compilerOptions?: {
        esModuleInterop?: boolean;
        allowSyntheticDefaultImports?: boolean;
        exactOptionalPropertyTypes?: boolean;
        paths?: Record<string, string[]>;
        target?: TsConfigTarget;
    };
}
type TsConfigTarget = 'es3' | 'es5' | 'es6' | 'es2015' | 'es2016' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'es2021' | 'es2022' | 'esnext';
interface PackageJson {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
}
type GeneratorSchema = {
    name: string;
    model: string;
    imports: GeneratorImport[];
};
type GeneratorImport = {
    name: string;
    schemaName?: string;
    alias?: string;
    specKey?: string;
    default?: boolean;
    values?: boolean;
    syntheticDefaultImport?: boolean;
};
type GeneratorDependency = {
    exports: GeneratorImport[];
    dependency: string;
};
type GeneratorApiResponse = {
    operations: GeneratorOperations;
    schemas: GeneratorSchema[];
};
type GeneratorOperations = {
    [operationId: string]: GeneratorOperation;
};
type GeneratorTarget = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMock: string;
    importsMock: GeneratorImport[];
    mutators?: GeneratorMutator[];
    clientMutators?: GeneratorMutator[];
    formData?: GeneratorMutator[];
    formUrlEncoded?: GeneratorMutator[];
    paramsSerializer?: GeneratorMutator[];
};
type GeneratorTargetFull = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMock: {
        function: string;
        handler: string;
    };
    importsMock: GeneratorImport[];
    mutators?: GeneratorMutator[];
    clientMutators?: GeneratorMutator[];
    formData?: GeneratorMutator[];
    formUrlEncoded?: GeneratorMutator[];
    paramsSerializer?: GeneratorMutator[];
};
type GeneratorOperation = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMock: {
        function: string;
        handler: string;
    };
    importsMock: GeneratorImport[];
    tags: string[];
    mutator?: GeneratorMutator;
    clientMutators?: GeneratorMutator[];
    formData?: GeneratorMutator;
    formUrlEncoded?: GeneratorMutator;
    paramsSerializer?: GeneratorMutator;
    operationName: string;
    types?: {
        result: (title?: string) => string;
    };
};
type GeneratorVerbOptions = {
    verb: Verbs;
    summary?: string;
    doc: string;
    tags: string[];
    operationId: string;
    operationName: string;
    response: GetterResponse;
    body: GetterBody;
    headers?: GetterQueryParam;
    queryParams?: GetterQueryParam;
    params: GetterParams;
    props: GetterProps;
    mutator?: GeneratorMutator;
    formData?: GeneratorMutator;
    formUrlEncoded?: GeneratorMutator;
    paramsSerializer?: GeneratorMutator;
    override: NormalizedOverrideOutput;
    deprecated?: boolean;
    originalOperation: OperationObject;
};
type GeneratorVerbsOptions = GeneratorVerbOptions[];
type GeneratorOptions = {
    route: string;
    pathRoute: string;
    override: NormalizedOverrideOutput;
    context: ContextSpecs;
    mock?: GlobalMockOptions | ClientMockBuilder;
    output: string;
};
type GeneratorClient = {
    implementation: string;
    imports: GeneratorImport[];
    mutators?: GeneratorMutator[];
};
type GeneratorMutatorParsingInfo = {
    numberOfParams: number;
    returnNumberOfParams?: number;
};
type GeneratorMutator = {
    name: string;
    path: string;
    default: boolean;
    hasErrorType: boolean;
    errorTypeName: string;
    hasSecondArg: boolean;
    hasThirdArg: boolean;
    isHook: boolean;
    bodyTypeName?: string;
};
type ClientBuilder = (verbOptions: GeneratorVerbOptions, options: GeneratorOptions, outputClient: OutputClient | OutputClientFunc, output?: NormalizedOutputOptions) => GeneratorClient | Promise<GeneratorClient>;
type ClientHeaderBuilder = (params: {
    title: string;
    isRequestOptions: boolean;
    isMutator: boolean;
    noFunction?: boolean;
    isGlobalMutator: boolean;
    provideIn: boolean | 'root' | 'any';
    hasAwaitedType: boolean;
}) => string;
type ClientFooterBuilder = (params: {
    noFunction?: boolean | undefined;
    operationNames: string[];
    title?: string;
    hasAwaitedType: boolean;
    hasMutator: boolean;
}) => string;
type ClientTitleBuilder = (title: string) => string;
type ClientDependenciesBuilder = (hasGlobalMutator: boolean, hasParamsSerializerOptions: boolean, packageJson?: PackageJson) => GeneratorDependency[];
type ClientMockBuilder = (verbOptions: GeneratorVerbOptions, generatorOptions: GeneratorOptions) => {
    imports: string[];
    implementation: string;
};
interface ClientGeneratorsBuilder {
    client: ClientBuilder;
    header?: ClientHeaderBuilder;
    dependencies?: ClientDependenciesBuilder;
    footer?: ClientFooterBuilder;
    title?: ClientTitleBuilder;
}
type GeneratorClients = Record<OutputClient, ClientGeneratorsBuilder>;
type GetterResponse = {
    imports: GeneratorImport[];
    definition: {
        success: string;
        errors: string;
    };
    isBlob: boolean;
    types: {
        success: ResReqTypesValue[];
        errors: ResReqTypesValue[];
    };
    contentTypes: string[];
    schemas: GeneratorSchema[];
    originalSchema?: ResponsesObject;
};
type GetterBody = {
    originalSchema: ReferenceObject | RequestBodyObject;
    imports: GeneratorImport[];
    definition: string;
    implementation: string;
    schemas: GeneratorSchema[];
    formData?: string;
    formUrlEncoded?: string;
    contentType: string;
};
type GetterParameters = {
    query: {
        parameter: ParameterObject;
        imports: GeneratorImport[];
    }[];
    path: {
        parameter: ParameterObject;
        imports: GeneratorImport[];
    }[];
    header: {
        parameter: ParameterObject;
        imports: GeneratorImport[];
    }[];
};
type GetterParam = {
    name: string;
    definition: string;
    implementation: string;
    default: boolean;
    required: boolean;
    imports: GeneratorImport[];
};
type GetterParams = GetterParam[];
type GetterQueryParam = {
    schema: GeneratorSchema;
    deps: GeneratorSchema[];
    isOptional: boolean;
    originalSchema?: SchemaObject;
};
type GetterPropType = 'param' | 'body' | 'queryParam' | 'header' | 'namedPathParams';
declare const GetterPropType: {
    readonly PARAM: "param";
    readonly NAMED_PATH_PARAMS: "namedPathParams";
    readonly BODY: "body";
    readonly QUERY_PARAM: "queryParam";
    readonly HEADER: "header";
};
type GetterPropBase = {
    name: string;
    definition: string;
    implementation: string;
    default: boolean;
    required: boolean;
};
type GetterProp = GetterPropBase & ({
    type: 'namedPathParams';
    destructured: string;
    schema: GeneratorSchema;
} | {
    type: Exclude<GetterPropType, 'namedPathParams'>;
});
type GetterProps = GetterProp[];
type SchemaType = 'integer' | 'number' | 'string' | 'boolean' | 'object' | 'null' | 'array' | 'enum' | 'unknown';
declare const SchemaType: {
    integer: string;
    number: string;
    string: string;
    boolean: string;
    object: string;
    null: string;
    array: string;
    enum: string;
    unknown: string;
};
type ScalarValue = {
    value: string;
    isEnum: boolean;
    hasReadonlyProps: boolean;
    type: SchemaType;
    imports: GeneratorImport[];
    schemas: GeneratorSchema[];
    isRef: boolean;
    example?: any;
    examples?: Record<string, any>;
};
type ResolverValue = ScalarValue & {
    originalSchema: SchemaObject;
};
type ResReqTypesValue = ScalarValue & {
    formData?: string;
    formUrlEncoded?: string;
    isRef?: boolean;
    hasReadonlyProps?: boolean;
    key: string;
    contentType: string;
    originalSchema?: SchemaObject;
};
type WriteSpecsBuilder = {
    operations: GeneratorOperations;
    schemas: Record<string, GeneratorSchema[]>;
    title: GeneratorClientTitle;
    header: GeneratorClientHeader;
    footer: GeneratorClientFooter;
    imports: GeneratorClientImports;
    importsMock: GenerateMockImports;
    info: InfoObject;
    target: string;
};
type WriteModeProps = {
    builder: WriteSpecsBuilder;
    output: NormalizedOutputOptions;
    workspace: string;
    specsName: Record<string, string>;
    header: string;
    needSchema: boolean;
};
type GeneratorApiOperations = {
    operations: GeneratorOperations;
    schemas: GeneratorSchema[];
};
type GeneratorClientExtra = {
    implementation: string;
    implementationMock: string;
};
type GeneratorClientTitle = (data: {
    outputClient?: OutputClient | OutputClientFunc;
    title: string;
    customTitleFunc?: (title: string) => string;
    output: NormalizedOutputOptions;
}) => GeneratorClientExtra;
type GeneratorClientHeader = (data: {
    outputClient?: OutputClient | OutputClientFunc;
    isRequestOptions: boolean;
    isMutator: boolean;
    isGlobalMutator: boolean;
    provideIn: boolean | 'root' | 'any';
    hasAwaitedType: boolean;
    titles: GeneratorClientExtra;
    output: NormalizedOutputOptions;
}) => GeneratorClientExtra;
type GeneratorClientFooter = (data: {
    outputClient: OutputClient | OutputClientFunc;
    operationNames: string[];
    hasMutator: boolean;
    hasAwaitedType: boolean;
    titles: GeneratorClientExtra;
    output: NormalizedOutputOptions;
}) => GeneratorClientExtra;
type GeneratorClientImports = (data: {
    client: OutputClient | OutputClientFunc;
    implementation: string;
    imports: {
        exports: GeneratorImport[];
        dependency: string;
    }[];
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
    hasGlobalMutator: boolean;
    hasParamsSerializerOptions: boolean;
    packageJson?: PackageJson;
    output: NormalizedOutputOptions;
}) => string;
type GenerateMockImports = (data: {
    implementation: string;
    imports: {
        exports: GeneratorImport[];
        dependency: string;
    }[];
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
    options?: GlobalMockOptions;
}) => string;
type GeneratorApiBuilder = GeneratorApiOperations & {
    title: GeneratorClientTitle;
    header: GeneratorClientHeader;
    footer: GeneratorClientFooter;
    imports: GeneratorClientImports;
    importsMock: GenerateMockImports;
};

declare const generalJSTypes: string[];
declare const generalJSTypesWithArray: string[];
declare const VERBS_WITH_BODY: Verbs[];
declare const URL_REGEX: RegExp;

declare const generateComponentDefinition: (responses: ComponentsObject['responses'] | ComponentsObject['requestBodies'], context: ContextSpecs, suffix: string) => GeneratorSchema[];

declare const generateImports: ({ imports, target, isRootKey, specsName, specKey: currentSpecKey, }: {
    imports: GeneratorImport[];
    target: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
    specKey: string;
}) => string;
declare const generateMutatorImports: ({ mutators, implementation, oneMore, }: {
    mutators: GeneratorMutator[];
    implementation?: string | undefined;
    oneMore?: boolean | undefined;
}) => string;
declare const addDependency: ({ implementation, exports, dependency, specsName, hasSchemaDir, isAllowSyntheticDefaultImports, }: {
    implementation: string;
    exports: GeneratorImport[];
    dependency: string;
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
}) => string | undefined;
declare const generateDependencyImports: (implementation: string, imports: {
    exports: GeneratorImport[];
    dependency: string;
}[], specsName: Record<string, string>, hasSchemaDir: boolean, isAllowSyntheticDefaultImports: boolean) => string;
declare const generateVerbImports: ({ response, body, queryParams, props, headers, params, }: GeneratorVerbOptions) => GeneratorImport[];

declare const generateModelInline: (acc: string, model: string) => string;
declare const generateModelsInline: (obj: Record<string, GeneratorSchema[]>) => string;

declare const BODY_TYPE_NAME = "BodyType";
declare const generateMutator: ({ output, mutator, name, workspace, tsconfig, }: {
    output?: string | undefined;
    mutator?: NormalizedMutator | undefined;
    name: string;
    workspace: string;
    tsconfig?: Tsconfig | undefined;
}) => Promise<GeneratorMutator | undefined>;

declare const generateBodyOptions: (body: GetterBody, isFormData: boolean, isFormUrlEncoded: boolean) => string;
declare const generateAxiosOptions: ({ response, isExactOptionalPropertyTypes, queryParams, headers, requestOptions, hasSignal, isVue, paramsSerializer, paramsSerializerOptions, }: {
    response: GetterResponse;
    isExactOptionalPropertyTypes: boolean;
    queryParams?: GeneratorSchema | undefined;
    headers?: GeneratorSchema | undefined;
    requestOptions?: boolean | object | undefined;
    hasSignal: boolean;
    isVue: boolean;
    paramsSerializer?: GeneratorMutator | undefined;
    paramsSerializerOptions?: ParamsSerializerOptions | undefined;
}) => string;
declare const generateOptions: ({ route, body, headers, queryParams, response, verb, requestOptions, isFormData, isFormUrlEncoded, isAngular, isExactOptionalPropertyTypes, hasSignal, isVue, paramsSerializer, paramsSerializerOptions, }: {
    route: string;
    body: GetterBody;
    headers?: GetterQueryParam | undefined;
    queryParams?: GetterQueryParam | undefined;
    response: GetterResponse;
    verb: Verbs;
    requestOptions?: boolean | object | undefined;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
    isAngular?: boolean | undefined;
    isExactOptionalPropertyTypes: boolean;
    hasSignal: boolean;
    isVue?: boolean | undefined;
    paramsSerializer?: GeneratorMutator | undefined;
    paramsSerializerOptions?: ParamsSerializerOptions | undefined;
}) => string;
declare const generateBodyMutatorConfig: (body: GetterBody, isFormData: boolean, isFormUrlEncoded: boolean) => string;
declare const generateQueryParamsAxiosConfig: (response: GetterResponse, isVue: boolean, queryParams?: GetterQueryParam) => string;
declare const generateMutatorConfig: ({ route, body, headers, queryParams, response, verb, isFormData, isFormUrlEncoded, isBodyVerb, hasSignal, isExactOptionalPropertyTypes, isVue, }: {
    route: string;
    body: GetterBody;
    headers?: GetterQueryParam | undefined;
    queryParams?: GetterQueryParam | undefined;
    response: GetterResponse;
    verb: Verbs;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
    isBodyVerb: boolean;
    hasSignal: boolean;
    isExactOptionalPropertyTypes: boolean;
    isVue?: boolean | undefined;
}) => string;
declare const generateMutatorRequestOptions: (requestOptions: boolean | object | undefined, hasSecondArgument: boolean) => string;
declare const generateFormDataAndUrlEncodedFunction: ({ body, formData, formUrlEncoded, isFormData, isFormUrlEncoded, }: {
    body: GetterBody;
    formData?: GeneratorMutator | undefined;
    formUrlEncoded?: GeneratorMutator | undefined;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
}) => string;

declare const generateParameterDefinition: (parameters: ComponentsObject['parameters'], context: ContextSpecs, suffix: string) => GeneratorSchema[];

/**
 * Extract all types from #/components/schemas
 *
 * @param schemas
 */
declare const generateSchemasDefinition: (schemas: SchemasObject | undefined, context: ContextSpecs, suffix: string) => GeneratorSchema[];

declare const generateVerbsOptions: ({ verbs, input, output, route, context, }: {
    verbs: PathItemObject;
    input: NormalizedInputOptions;
    output: NormalizedOutputOptions;
    route: string;
    context: ContextSpecs;
}) => Promise<GeneratorVerbsOptions>;
declare const _filteredVerbs: (verbs: PathItemObject, filters: NormalizedInputOptions['filters']) => [string, any][];

/**
 * Return the output type from an array
 *
 * @param item item with type === "array"
 */
declare const getArray: ({ schema, name, context, }: {
    schema: SchemaObject;
    name?: string | undefined;
    context: ContextSpecs;
}) => ScalarValue;

declare const getBody: ({ requestBody, operationName, context, contentType, }: {
    requestBody: ReferenceObject | RequestBodyObject;
    operationName: string;
    context: ContextSpecs;
    contentType?: OverrideOutputContentType | undefined;
}) => GetterBody;

type Separator = 'allOf' | 'anyOf' | 'oneOf';
declare const combineSchemas: ({ name, schema, separator, context, nullable, }: {
    name?: string | undefined;
    schema: SchemaObject;
    separator: Separator;
    context: ContextSpecs;
    nullable: string;
}) => ScalarValue;

declare const resolveDiscriminators: (schemas: SchemasObject, context: ContextSpecs) => SchemasObject;

declare const getEnum: (value: string, enumName: string, names?: string[], useNativeEnums?: boolean) => string;
declare const getEnumImplementation: (value: string, names?: string[]) => string;

declare const getKey: (key: string) => string;

/**
 * Return the output type from an object
 *
 * @param item item with type === "object"
 */
declare const getObject: ({ item, name, context, nullable, }: {
    item: SchemaObject;
    name?: string | undefined;
    context: ContextSpecs;
    nullable: string;
}) => ScalarValue;

declare const getOperationId: (operation: OperationObject, route: string, verb: Verbs) => string;

declare const getParameters: ({ parameters, context, }: {
    parameters: (ReferenceObject | ParameterObject)[];
    context: ContextSpecs;
}) => GetterParameters;

/**
 * Return every params in a path
 *
 * @example
 * ```
 * getParamsInPath("/pet/{category}/{name}/");
 * // => ["category", "name"]
 * ```
 * @param path
 */
declare const getParamsInPath: (path: string) => string[];
declare const getParams: ({ route, pathParams, operationId, context, output, }: {
    route: string;
    pathParams?: {
        parameter: openapi3_ts.ParameterObject;
        imports: GeneratorImport[];
    }[] | undefined;
    operationId: string;
    context: ContextSpecs;
    output: NormalizedOutputOptions;
}) => GetterParams;

declare const getProps: ({ body, queryParams, params, operationName, headers, context, }: {
    body: GetterBody;
    queryParams?: GetterQueryParam | undefined;
    params: GetterParams;
    operationName: string;
    headers?: GetterQueryParam | undefined;
    context: ContextSpecs;
}) => GetterProps;

declare const getQueryParams: ({ queryParams, operationName, context, suffix, }: {
    queryParams: GetterParameters['query'];
    operationName: string;
    context: ContextSpecs;
    suffix?: string | undefined;
}) => GetterQueryParam | undefined;

type RefComponent = 'schemas' | 'responses' | 'parameters' | 'requestBodies';
declare const RefComponent: {
    schemas: RefComponent;
    responses: RefComponent;
    parameters: RefComponent;
    requestBodies: RefComponent;
};
declare const RefComponentSuffix: Record<RefComponent, string>;
interface RefInfo {
    name: string;
    originalName: string;
    refPaths?: string[];
    specKey?: string;
}
/**
 * Return the output type from the $ref
 *
 * @param $ref
 */
declare const getRefInfo: ($ref: ReferenceObject['$ref'], context: ContextSpecs) => RefInfo;

declare const getResReqTypes: (responsesOrRequests: Array<[
    string,
    ResponseObject | ReferenceObject | RequestBodyObject
]>, name: string, context: ContextSpecs, defaultType?: string) => ResReqTypesValue[];

declare const getResponse: ({ responses, operationName, context, contentType, }: {
    responses: ResponsesObject;
    operationName: string;
    context: ContextSpecs;
    contentType?: OverrideOutputContentType | undefined;
}) => GetterResponse;

declare const getRoute: (route: string) => string;
declare const getRouteAsArray: (route: string) => string;

/**
 * Return the typescript equivalent of open-api data type
 *
 * @param item
 * @ref https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#data-types
 */
declare const getScalar: ({ item, name, context, }: {
    item: SchemaObject;
    name?: string | undefined;
    context: ContextSpecs;
}) => ScalarValue;

declare const resolveObject: ({ schema, propName, combined, context, }: {
    schema: SchemaObject | ReferenceObject;
    propName?: string | undefined;
    combined?: boolean | undefined;
    context: ContextSpecs;
}) => ResolverValue;

type ComponentObject = SchemaObject | ResponseObject | ParameterObject | RequestBodyObject | ReferenceObject;
declare const resolveRef: <Schema extends ComponentObject = ComponentObject>(schema: ComponentObject, context: ContextSpecs, imports?: GeneratorImport[]) => {
    schema: Schema;
    imports: GeneratorImport[];
};
type Example = ExampleObject | ReferenceObject;
type Examples = Example[] | Record<string, Example> | undefined;
declare const resolveExampleRefs: (examples: Examples, context: ContextSpecs) => Examples;

declare const resolveValue: ({ schema, name, context, }: {
    schema: SchemaObject | ReferenceObject;
    name?: string | undefined;
    context: ContextSpecs;
}) => ResolverValue;

/**
 * Discriminator helper for `ReferenceObject`
 *
 * @param property
 */
declare const isReference: (property: any) => property is ReferenceObject;
declare const isDirectory: (path: string) => boolean;
declare function isObject(x: any): x is Record<string, unknown>;
declare function isModule(x: any): x is Record<string, unknown>;
declare function isString(x: any): x is string;
declare function isNumber(x: any): x is number;
declare function isNumeric(x: any): x is number;
declare function isBoolean(x: any): x is boolean;
declare function isFunction(x: any): x is Function;
declare function isUndefined(x: any): x is undefined;
declare function isNull(x: any): x is null;
declare function isSchema(x: any): x is SchemaObject;
declare const isVerb: (verb: string) => verb is Verbs;
declare const isRootKey: (specKey: string, target: string) => boolean;
declare const isUrl: (str: string) => boolean;

declare function asyncReduce<IterationItem, AccValue>(array: IterationItem[], reducer: (accumulate: AccValue, current: IterationItem) => AccValue | Promise<AccValue>, initValue: AccValue): Promise<AccValue>;

declare const pascal: (s: string) => string;
declare const camel: (s: string) => string;
declare const snake: (s: string) => string;
declare const kebab: (s: string) => string;
declare const upper: (s: string, fillWith: string, isDeapostrophe?: boolean) => string;

declare const compareVersions: (firstVersion: string, secondVersions: string, operator?: CompareOperator) => boolean;

interface DebuggerOptions {
    onlyWhenFocused?: boolean | string;
}
declare function createDebugger(ns: string, options?: DebuggerOptions): debug.Debugger['log'];

declare function jsDoc({ description, deprecated, summary, }: {
    description?: string[] | string;
    deprecated?: boolean;
    summary?: string;
}, tryOneLine?: boolean): string;

declare const dynamicImport: <T>(toImport: string | T, from?: string, takeDefault?: boolean) => Promise<T>;

declare const getExtension: (path: string) => "yaml" | "json";

declare const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const startMessage: ({ name, version, description, }: {
    name: string;
    version: string;
    description: string;
}) => void;
declare const errorMessage: (err: string) => void;
declare const mismatchArgsMessage: (mismatchArgs: string[]) => void;
declare const createSuccessMessage: (backend?: string) => void;
declare const ibmOpenapiValidatorWarnings: (warnings: {
    path: string;
    message: string;
}[]) => void;
declare const ibmOpenapiValidatorErrors: (errors: {
    path: string;
    message: string;
}[]) => void;
type LogType = 'error' | 'warn' | 'info';
type LogLevel = LogType | 'silent';
interface Logger {
    info(msg: string, options?: LogOptions): void;
    warn(msg: string, options?: LogOptions): void;
    warnOnce(msg: string, options?: LogOptions): void;
    error(msg: string, options?: LogOptions): void;
    clearScreen(type: LogType): void;
    hasWarned: boolean;
}
interface LogOptions {
    clear?: boolean;
    timestamp?: boolean;
}
declare const LogLevels: Record<LogLevel, number>;
interface LoggerOptions {
    prefix?: string;
    allowClearScreen?: boolean;
}
declare function createLogger(level?: LogLevel, options?: LoggerOptions): Logger;

declare const getFileInfo: (target?: string, { backupFilename, extension, }?: {
    backupFilename?: string | undefined;
    extension?: string | undefined;
}) => {
    path: string;
    pathWithoutExtension: string;
    extension: string;
    isDirectory: boolean;
    dirname: string;
    filename: string;
};
declare function loadFile<File = any>(filePath?: string, options?: {
    root?: string;
    defaultFileName?: string;
    logLevel?: LogLevel;
    isDefault?: boolean;
    alias?: Record<string, string>;
    tsconfig?: Tsconfig;
    load?: boolean;
}): Promise<{
    path: string;
    file?: File;
    error?: any;
    cached?: boolean;
}>;
declare function removeFiles(patterns: string[], dir: string): Promise<void>;

declare const getMockFileExtensionByTypeName: (mock: GlobalMockOptions | ClientMockBuilder) => string;

declare function mergeDeep<T extends Record<string, any>>(source: T, target: T): T;

declare const count: (str: string | undefined, key: string) => number;

declare const openApiConverter: (schema: any, options: swagger2openapi.Options | undefined, specKey: string) => Promise<OpenAPIObject>;

declare let join: (...paths: string[]) => string;
declare let resolve: (...paths: string[]) => string;
declare let extname: (path: string) => string;
declare let dirname: (path: string) => string;
declare let basename: (path: string, suffix?: string | undefined) => string;
declare let isAbsolute: (path: string) => boolean;

/**
 * Behaves exactly like `path.relative(from, to)`, but keeps the first meaningful "./"
 */
declare const relativeSafe: (from: string, to: string) => string;
declare const getSpecName: (specKey: string, target: string) => string;
declare const getSchemaFileName: (path: string) => string;
declare const separator = "/";
declare const normalizeSafe: (value: string) => string;
declare const joinSafe: (...values: string[]) => string;

declare const path_basename: typeof basename;
declare const path_dirname: typeof dirname;
declare const path_extname: typeof extname;
declare const path_getSchemaFileName: typeof getSchemaFileName;
declare const path_getSpecName: typeof getSpecName;
declare const path_isAbsolute: typeof isAbsolute;
declare const path_join: typeof join;
declare const path_joinSafe: typeof joinSafe;
declare const path_normalizeSafe: typeof normalizeSafe;
declare const path_relativeSafe: typeof relativeSafe;
declare const path_resolve: typeof resolve;
declare const path_separator: typeof separator;
declare namespace path {
  export { path_basename as basename, path_dirname as dirname, path_extname as extname, path_getSchemaFileName as getSchemaFileName, path_getSpecName as getSpecName, path_isAbsolute as isAbsolute, path_join as join, path_joinSafe as joinSafe, path_normalizeSafe as normalizeSafe, path_relativeSafe as relativeSafe, path_resolve as resolve, path_separator as separator };
}

declare const sortByPriority: <T>(arr: (T & {
    default?: boolean | undefined;
    required?: boolean | undefined;
})[]) => (T & {
    default?: boolean | undefined;
    required?: boolean | undefined;
})[];

declare const stringify: (data?: string | any[] | {
    [key: string]: any;
} | undefined) => string | undefined;
declare const sanitize: (value: string, options?: {
    whitespace?: string | true;
    underscore?: string | true;
    dot?: string | true;
    dash?: string | true;
    es5keyword?: boolean;
    es5IdentifierName?: boolean;
    special?: boolean;
}) => string;
declare const toObjectString: <T>(props: T[], path?: keyof T | undefined) => string;
declare const getNumberWord: (num: number) => string;
declare const escape: (str: string | null, char?: string) => string | undefined;
/**
 * Escape all characters not included in SingleStringCharacters and
 * DoubleStringCharacters on
 * http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
 *
 * Based on https://github.com/joliss/js-string-escape/blob/master/index.js
 *
 * @param input String to escape
 */
declare const jsStringEscape: (input: string) => string;

declare const isSyntheticDefaultImportsAllow: (config?: Tsconfig) => boolean;

/**
 * Validate the spec with ibm-openapi-validator (with a custom pretty logger).
 * More information: https://github.com/IBM/openapi-validator/#configuration
 * @param specs openAPI spec
 */
declare const ibmOpenapiValidator: (specs: OpenAPIObject) => Promise<void>;

declare const writeModelInline: (acc: string, model: string) => string;
declare const writeModelsInline: (array: GeneratorSchema[]) => string;
declare const writeSchema: ({ path, schema, target, specKey, isRootKey, specsName, header, }: {
    path: string;
    schema: GeneratorSchema;
    target: string;
    specKey: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
    header: string;
}) => Promise<void>;
declare const writeSchemas: ({ schemaPath, schemas, target, specKey, isRootKey, specsName, header, indexFiles, }: {
    schemaPath: string;
    schemas: GeneratorSchema[];
    target: string;
    specKey: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
    header: string;
    indexFiles: boolean;
}) => Promise<void>;

declare const getOrvalGeneratedTypes: () => string;

declare const writeSingleMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const writeSplitMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const writeSplitTagsMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const writeTagsMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const generateTarget: (builder: WriteSpecsBuilder, options: NormalizedOutputOptions) => GeneratorTarget;

declare const generateTargetForTags: (builder: WriteSpecsBuilder, options: NormalizedOutputOptions) => Record<string, GeneratorTarget>;

export { type AngularOptions, BODY_TYPE_NAME, type ClientBuilder, type ClientDependenciesBuilder, type ClientFooterBuilder, type ClientGeneratorsBuilder, type ClientHeaderBuilder, type ClientMockBuilder, type ClientTitleBuilder, type Config, type ConfigExternal, type ConfigFn, type ContextSpecs, type GenerateMockImports, type GeneratorApiBuilder, type GeneratorApiOperations, type GeneratorApiResponse, type GeneratorClient, type GeneratorClientExtra, type GeneratorClientFooter, type GeneratorClientHeader, type GeneratorClientImports, type GeneratorClientTitle, type GeneratorClients, type GeneratorDependency, type GeneratorImport, type GeneratorMutator, type GeneratorMutatorParsingInfo, type GeneratorOperation, type GeneratorOperations, type GeneratorOptions, type GeneratorSchema, type GeneratorTarget, type GeneratorTargetFull, type GeneratorVerbOptions, type GeneratorVerbsOptions, type GetterBody, type GetterParam, type GetterParameters, type GetterParams, type GetterProp, GetterPropType, type GetterProps, type GetterQueryParam, type GetterResponse, type GlobalMockOptions, type GlobalOptions, type Hook, type HookCommand, type HookFunction, type HooksOptions, type ImportOpenApi, type InputOptions, type InputTransformerFn, type LogLevel, LogLevels, type LogOptions, type LogType, type Logger, type LoggerOptions, type MockOptions, type MockProperties, type Mutator, type MutatorObject, type NormalizedConfig, type NormalizedHookCommand, type NormalizedHookOptions, type NormalizedInputOptions, type NormalizedMutator, type NormalizedOperationOptions, type NormalizedOptions, type NormalizedOutputOptions, type NormalizedOverrideOutput, type NormalizedParamsSerializerOptions, type NormalizedQueryOptions, type OperationOptions, type Options, type OptionsExport, type OptionsFn, OutputClient, type OutputClientFunc, OutputMockType, OutputMode, type OutputOptions, type OverrideInput, type OverrideMockOptions, type OverrideOutput, type OverrideOutputContentType, type PackageJson, type ParamsSerializerOptions, type QueryOptions, RefComponentSuffix, type RefInfo, type ResReqTypesValue, type ResolverValue, type ScalarValue, SchemaType, type SwaggerParserOptions, type TsConfigTarget, type Tsconfig, URL_REGEX, VERBS_WITH_BODY, Verbs, type WriteModeProps, type WriteSpecsBuilder, _filteredVerbs, addDependency, asyncReduce, camel, combineSchemas, compareVersions, count, createDebugger, createLogger, createSuccessMessage, dynamicImport, errorMessage, escape, generalJSTypes, generalJSTypesWithArray, generateAxiosOptions, generateBodyMutatorConfig, generateBodyOptions, generateComponentDefinition, generateDependencyImports, generateFormDataAndUrlEncodedFunction, generateImports, generateModelInline, generateModelsInline, generateMutator, generateMutatorConfig, generateMutatorImports, generateMutatorRequestOptions, generateOptions, generateParameterDefinition, generateQueryParamsAxiosConfig, generateSchemasDefinition, generateTarget, generateTargetForTags, generateVerbImports, generateVerbsOptions, getArray, getBody, getEnum, getEnumImplementation, getExtension, getFileInfo, getKey, getMockFileExtensionByTypeName, getNumberWord, getObject, getOperationId, getOrvalGeneratedTypes, getParameters, getParams, getParamsInPath, getProps, getQueryParams, getRefInfo, getResReqTypes, getResponse, getRoute, getRouteAsArray, getScalar, ibmOpenapiValidator, ibmOpenapiValidatorErrors, ibmOpenapiValidatorWarnings, isBoolean, isDirectory, isFunction, isModule, isNull, isNumber, isNumeric, isObject, isReference, isRootKey, isSchema, isString, isSyntheticDefaultImportsAllow, isUndefined, isUrl, isVerb, jsDoc, jsStringEscape, kebab, loadFile, log, mergeDeep, mismatchArgsMessage, openApiConverter, pascal, removeFiles, resolveDiscriminators, resolveExampleRefs, resolveObject, resolveRef, resolveValue, sanitize, snake, sortByPriority, startMessage, stringify, toObjectString, path as upath, upper, writeModelInline, writeModelsInline, writeSchema, writeSchemas, writeSingleMode, writeSplitMode, writeSplitTagsMode, writeTagsMode };
