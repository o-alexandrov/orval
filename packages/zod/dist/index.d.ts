import { GeneratorDependency, ClientBuilder, ClientGeneratorsBuilder } from '@orval/core';

declare const getZodDependencies: () => GeneratorDependency[];
type ZodValidationSchemaDefinitionInput = Record<string, {
    functions: [string, any][];
    consts: string[];
}>;
declare const parseZodValidationSchemaDefinition: (input: ZodValidationSchemaDefinitionInput, coerceTypes?: boolean) => {
    zod: string;
    consts: string;
};
declare const generateZod: ClientBuilder;
declare const builder: () => () => ClientGeneratorsBuilder;

export { type ZodValidationSchemaDefinitionInput, builder, builder as default, generateZod, getZodDependencies, parseZodValidationSchemaDefinition };
