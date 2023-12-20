"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  builder: () => builder,
  default: () => src_default,
  generateZod: () => generateZod,
  getZodDependencies: () => getZodDependencies,
  parseZodValidationSchemaDefinition: () => parseZodValidationSchemaDefinition
});
module.exports = __toCommonJS(src_exports);
var import_core = require("@orval/core");
var import_lodash = __toESM(require("lodash.uniq"));
var ZOD_DEPENDENCIES = [
  {
    exports: [
      {
        name: "z",
        alias: "zod",
        values: true
      }
    ],
    dependency: "zod"
  }
];
var getZodDependencies = () => ZOD_DEPENDENCIES;
var resolveZodType = (schemaTypeValue) => {
  switch (schemaTypeValue) {
    case "integer":
      return "number";
    case "null":
      return "mixed";
    default:
      return schemaTypeValue != null ? schemaTypeValue : "any";
  }
};
var counter = 0;
var COERCEABLE_TYPES = ["string", "number", "boolean", "bigint", "date"];
var generateZodValidationSchemaDefinition = (schema, _required, name) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  if (!schema)
    return { functions: [], consts: [] };
  const consts = [];
  const functions = [];
  const type = resolveZodType(schema.type);
  const required = schema.default !== void 0 ? false : _required != null ? _required : false;
  const nullable = (_a = schema.nullable) != null ? _a : false;
  const min = (_e = (_d = (_c = (_b = schema.minimum) != null ? _b : schema.exclusiveMinimum) != null ? _c : schema.minLength) != null ? _d : schema.minItems) != null ? _e : void 0;
  const max = (_i = (_h = (_g = (_f = schema.maximum) != null ? _f : schema.exclusiveMaximum) != null ? _g : schema.maxLength) != null ? _h : schema.maxItems) != null ? _i : void 0;
  const matches = (_j = schema.pattern) != null ? _j : void 0;
  switch (type) {
    case "array":
      const items = schema.items;
      functions.push([
        "array",
        generateZodValidationSchemaDefinition(items, true, (0, import_core.camel)(name))
      ]);
      break;
    case "string": {
      if (schema.enum && type === "string") {
        break;
      }
      if (schema.format === "date") {
        functions.push(["date", void 0]);
        break;
      }
      functions.push([type, void 0]);
      if (schema.format === "date-time") {
        functions.push(["datetime", void 0]);
        break;
      }
      if (schema.format === "email") {
        functions.push(["email", void 0]);
        break;
      }
      if (schema.format === "uri" || schema.format === "hostname") {
        functions.push(["url", void 0]);
        break;
      }
      if (schema.format === "uuid") {
        functions.push(["uuid", void 0]);
        break;
      }
      break;
    }
    case "object":
    default: {
      if (schema.allOf || schema.oneOf || schema.anyOf) {
        const separator = schema.allOf ? "allOf" : schema.oneOf ? "oneOf" : "anyOf";
        const schemas = (_l = (_k = schema.allOf) != null ? _k : schema.oneOf) != null ? _l : schema.anyOf;
        functions.push([
          separator,
          schemas.map(
            (schema2) => generateZodValidationSchemaDefinition(
              schema2,
              true,
              (0, import_core.camel)(name)
            )
          )
        ]);
        break;
      }
      if (schema.properties) {
        functions.push([
          "object",
          Object.keys(schema.properties).map((key) => {
            var _a2, _b2;
            return {
              [key]: generateZodValidationSchemaDefinition(
                (_a2 = schema.properties) == null ? void 0 : _a2[key],
                (_b2 = schema.required) == null ? void 0 : _b2.includes(key),
                (0, import_core.camel)(`${name}-${key}`)
              )
            };
          }).reduce((acc, curr) => ({ ...acc, ...curr }), {})
        ]);
        break;
      }
      if (schema.additionalProperties) {
        functions.push([
          "additionalProperties",
          (0, import_core.isBoolean)(schema.additionalProperties) ? schema.additionalProperties : generateZodValidationSchemaDefinition(
            schema.additionalProperties,
            true,
            name
          )
        ]);
        break;
      }
      functions.push([type, void 0]);
      break;
    }
  }
  if (min !== void 0) {
    if (min === 1) {
      functions.push(["min", `${min}`]);
    } else {
      counter++;
      consts.push(`export const ${name}Min${counter} = ${min};
`);
      functions.push(["min", `${name}Min${counter}`]);
    }
  }
  if (max !== void 0) {
    counter++;
    consts.push(`export const ${name}Max${counter} = ${max};
`);
    functions.push(["max", `${name}Max${counter}`]);
  }
  if (matches) {
    const isStartWithSlash = matches.startsWith("/");
    const isEndWithSlash = matches.endsWith("/");
    const regexp = `new RegExp('${(0, import_core.jsStringEscape)(
      matches.slice(isStartWithSlash ? 1 : 0, isEndWithSlash ? -1 : void 0)
    )}')`;
    consts.push(`export const ${name}RegExp = ${regexp};
`);
    functions.push(["regex", `${name}RegExp`]);
  }
  if (schema.enum && type !== "number") {
    functions.push([
      "enum",
      [
        `[${schema.enum.map((value) => (0, import_core.isString)(value) ? `'${(0, import_core.escape)(value)}'` : `${value}`).join(", ")}]`
      ]
    ]);
  }
  if (!required && nullable) {
    functions.push(["nullish", void 0]);
  } else if (nullable) {
    functions.push(["nullable", void 0]);
  } else if (!required) {
    functions.push(["optional", void 0]);
  }
  return { functions, consts: (0, import_lodash.default)(consts) };
};
var parseZodValidationSchemaDefinition = (input, coerceTypes = false) => {
  if (!Object.keys(input).length) {
    return { zod: "", consts: "" };
  }
  let consts = "";
  const parseProperty = (property) => {
    const [fn, args = ""] = property;
    if (fn === "allOf") {
      return args.reduce(
        (acc, { functions }) => {
          const value = functions.map(parseProperty).join("");
          const valueWithZod = `${value.startsWith(".") ? "zod" : ""}${value}`;
          if (!acc) {
            acc += valueWithZod;
            return acc;
          }
          acc += `.and(${valueWithZod})`;
          return acc;
        },
        ""
      );
    }
    if (fn === "oneOf" || fn === "anyOf") {
      return args.reduce(
        (acc, { functions }) => {
          const value = functions.map(parseProperty).join("");
          const valueWithZod = `${value.startsWith(".") ? "zod" : ""}${value}`;
          if (!acc) {
            acc += valueWithZod;
            return acc;
          }
          acc += `.or(${valueWithZod})`;
          return acc;
        },
        ""
      );
    }
    if (fn === "additionalProperties") {
      const value = args.functions.map(parseProperty).join("");
      const valueWithZod = `${value.startsWith(".") ? "zod" : ""}${value}`;
      consts += args.consts;
      return `zod.record(zod.string(), ${valueWithZod})`;
    }
    if (fn === "object") {
      const parsed = parseZodValidationSchemaDefinition(args);
      consts += parsed.consts;
      return ` ${parsed.zod}`;
    }
    if (fn === "array") {
      const value = args.functions.map(parseProperty).join("");
      if (typeof args.consts === "string") {
        consts += args.consts;
      } else if (Array.isArray(args.consts)) {
        consts += args.consts.join("\n");
      }
      return `.array(${value.startsWith(".") ? "zod" : ""}${value})`;
    }
    if (coerceTypes && COERCEABLE_TYPES.includes(fn)) {
      return `.coerce.${fn}(${args})`;
    }
    return `.${fn}(${args})`;
  };
  consts += Object.entries(input).reduce((acc, [key, schema]) => {
    return acc + schema.consts.join("\n");
  }, "");
  const zod = `zod.object({
${Object.entries(input).map(([key, schema]) => {
    const value = schema.functions.map(parseProperty).join("");
    return `  "${key}": ${value.startsWith(".") ? "zod" : ""}${value}`;
  }).join(",\n")}
})`;
  return { zod, consts };
};
var deferenceScalar = (value, context) => {
  if ((0, import_core.isObject)(value)) {
    return deference(value, context);
  } else if (Array.isArray(value)) {
    return value.map((item) => deferenceScalar(item, context));
  } else {
    return value;
  }
};
var deference = (schema, context) => {
  var _a;
  const refName = "$ref" in schema ? schema.$ref : void 0;
  if (refName && ((_a = context.parents) == null ? void 0 : _a.includes(refName))) {
    return {};
  }
  const childContext = {
    ...context,
    ...refName ? { parents: [...context.parents || [], refName] } : void 0
  };
  const { schema: resolvedSchema } = (0, import_core.resolveRef)(
    schema,
    childContext
  );
  return Object.entries(resolvedSchema).reduce((acc, [key, value]) => {
    acc[key] = deferenceScalar(value, childContext);
    return acc;
  }, {});
};
var generateZodRoute = ({ operationName, body, verb }, { pathRoute, context, override }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const spec = context.specs[context.specKey].paths[pathRoute];
  const parameters = (_a = spec == null ? void 0 : spec[verb]) == null ? void 0 : _a.parameters;
  const requestBody = (_b = spec == null ? void 0 : spec[verb]) == null ? void 0 : _b.requestBody;
  const response = (_d = (_c = spec == null ? void 0 : spec[verb]) == null ? void 0 : _c.responses) == null ? void 0 : _d["200"];
  const resolvedResponse = response ? (0, import_core.resolveRef)(response, context).schema : void 0;
  const resolvedResponseJsonSchema = ((_f = (_e = resolvedResponse == null ? void 0 : resolvedResponse.content) == null ? void 0 : _e["application/json"]) == null ? void 0 : _f.schema) ? (0, import_core.resolveRef)(
    resolvedResponse.content["application/json"].schema,
    context
  ).schema : void 0;
  const zodDefinitionsResponseProperties = (_g = resolvedResponseJsonSchema == null ? void 0 : resolvedResponseJsonSchema.properties) != null ? _g : {};
  const zodDefinitionsResponse = Object.entries(
    zodDefinitionsResponseProperties
  ).map(([key, response2]) => {
    var _a2;
    const schema = deference(response2, context);
    return {
      [key]: generateZodValidationSchemaDefinition(
        schema,
        !!((_a2 = resolvedResponseJsonSchema == null ? void 0 : resolvedResponseJsonSchema.required) == null ? void 0 : _a2.find(
          (requiredKey) => requiredKey === key
        )),
        (0, import_core.camel)(`${operationName}-response-${key}`)
      )
    };
  }).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  const resolvedRequestBody = requestBody ? (0, import_core.resolveRef)(requestBody, context).schema : void 0;
  const resolvedRequestBodyJsonSchema = ((_i = (_h = resolvedRequestBody == null ? void 0 : resolvedRequestBody.content) == null ? void 0 : _h["application/json"]) == null ? void 0 : _i.schema) ? (0, import_core.resolveRef)(
    resolvedRequestBody.content["application/json"].schema,
    context
  ).schema : void 0;
  const zodDefinitionsBodyProperties = (_j = resolvedRequestBodyJsonSchema == null ? void 0 : resolvedRequestBodyJsonSchema.properties) != null ? _j : {};
  const zodDefinitionsBody = Object.entries(zodDefinitionsBodyProperties).map(([key, body2]) => {
    var _a2;
    const schema = deference(body2, context);
    return {
      [key]: generateZodValidationSchemaDefinition(
        schema,
        !!((_a2 = resolvedRequestBodyJsonSchema == null ? void 0 : resolvedRequestBodyJsonSchema.required) == null ? void 0 : _a2.find(
          (requiredKey) => requiredKey === key
        )),
        (0, import_core.camel)(`${operationName}-body-${key}`)
      )
    };
  }).reduce((acc, curr) => ({ ...acc, ...curr }), {});
  const zodDefinitionsParameters = (parameters != null ? parameters : []).reduce(
    (acc, val) => {
      const { schema: parameter } = (0, import_core.resolveRef)(val, context);
      if (!parameter.schema) {
        return acc;
      }
      const schema = deference(parameter.schema, context);
      const definition = generateZodValidationSchemaDefinition(
        schema,
        parameter.required,
        (0, import_core.camel)(`${operationName}-${parameter.in}-${parameter.name}`)
      );
      if (parameter.in === "header") {
        return {
          ...acc,
          headers: { ...acc.headers, [parameter.name]: definition }
        };
      }
      if (parameter.in === "query") {
        return {
          ...acc,
          queryParams: { ...acc.queryParams, [parameter.name]: definition }
        };
      }
      if (parameter.in === "path") {
        return {
          ...acc,
          params: { ...acc.params, [parameter.name]: definition }
        };
      }
      return acc;
    },
    {
      headers: {},
      queryParams: {},
      params: {}
    }
  );
  const inputParams = parseZodValidationSchemaDefinition(
    zodDefinitionsParameters.params
  );
  const inputQueryParams = parseZodValidationSchemaDefinition(
    zodDefinitionsParameters.queryParams,
    override.coerceTypes
  );
  const inputHeaders = parseZodValidationSchemaDefinition(
    zodDefinitionsParameters.headers
  );
  const inputBody = parseZodValidationSchemaDefinition(zodDefinitionsBody);
  const inputResponse = parseZodValidationSchemaDefinition(
    zodDefinitionsResponse
  );
  if (!inputParams.zod && !inputQueryParams.zod && !inputHeaders.zod && !inputBody.zod && !inputResponse.zod) {
    return "";
  }
  return [
    ...inputParams.consts ? [inputParams.consts] : [],
    ...inputParams.zod ? [`export const ${operationName}Params = ${inputParams.zod}`] : [],
    ...inputQueryParams.consts ? [inputQueryParams.consts] : [],
    ...inputQueryParams.zod ? [`export const ${operationName}QueryParams = ${inputQueryParams.zod}`] : [],
    ...inputHeaders.consts ? [inputHeaders.consts] : [],
    ...inputHeaders.zod ? [`export const ${operationName}Header = ${inputHeaders.zod}`] : [],
    ...inputBody.consts ? [inputBody.consts] : [],
    ...inputBody.zod ? [`export const ${operationName}Body = ${inputBody.zod}`] : [],
    ...inputResponse.consts ? [inputResponse.consts] : [],
    ...inputResponse.zod ? [`export const ${operationName}Response = ${inputResponse.zod}`] : []
  ].join("\n\n");
};
var generateZod = (verbOptions, options) => {
  const routeImplementation = generateZodRoute(verbOptions, options);
  return {
    implementation: routeImplementation ? `${routeImplementation}

` : "",
    imports: []
  };
};
var zodClientBuilder = {
  client: generateZod,
  dependencies: getZodDependencies
};
var builder = () => () => zodClientBuilder;
var src_default = builder;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  builder,
  generateZod,
  getZodDependencies,
  parseZodValidationSchemaDefinition
});
//# sourceMappingURL=index.js.map