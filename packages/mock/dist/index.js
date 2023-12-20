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
  DEFAULT_MOCK_OPTIONS: () => DEFAULT_MOCK_OPTIONS,
  generateMock: () => generateMock,
  generateMockImports: () => generateMockImports
});
module.exports = __toCommonJS(src_exports);

// src/msw/index.ts
var import_core7 = require("@orval/core");

// src/faker/getters/combine.ts
var import_core4 = require("@orval/core");
var import_lodash2 = __toESM(require("lodash.omit"));

// src/faker/resolvers/value.ts
var import_core3 = require("@orval/core");
var import_lodash = __toESM(require("lodash.get"));

// src/faker/getters/scalar.ts
var import_core2 = require("@orval/core");

// src/faker/getters/object.ts
var import_core = require("@orval/core");

// src/faker/constants.ts
var DEFAULT_FORMAT_MOCK = {
  bic: "faker.finance.bic()",
  city: "faker.location.city()",
  country: "faker.location.country()",
  date: "faker.date.past().toISOString().split('T')[0]",
  "date-time": "`${faker.date.past().toISOString().split('.')[0]}Z`",
  email: "faker.internet.email()",
  firstName: "faker.person.firstName()",
  gender: "faker.person.gender()",
  iban: "faker.finance.iban()",
  ipv4: "faker.internet.ipv4()",
  ipv6: "faker.internet.ipv6()",
  jobTitle: "faker.person.jobTitle()",
  lastName: "faker.person.lastName()",
  password: "faker.internet.password()",
  phoneNumber: "faker.phone.number()",
  streetName: "faker.location.street()",
  uri: "faker.internet.url()",
  url: "faker.internet.url()",
  userName: "faker.internet.userName()",
  uuid: "faker.string.uuid()",
  zipCode: "faker.location.zipCode()"
};
var DEFAULT_OBJECT_KEY_MOCK = "faker.string.alphanumeric(5)";

// src/faker/getters/object.ts
var getMockObject = ({
  item,
  mockOptions,
  operationId,
  tags,
  combine,
  context,
  imports,
  existingReferencedProperties
}) => {
  if ((0, import_core.isReference)(item)) {
    return resolveMockValue({
      schema: {
        ...item,
        name: item.name,
        path: item.path ? `${item.path}.${item.name}` : item.name
      },
      mockOptions,
      operationId,
      tags,
      context,
      imports,
      existingReferencedProperties
    });
  }
  if (item.allOf || item.oneOf || item.anyOf) {
    const separator = item.allOf ? "allOf" : item.oneOf ? "oneOf" : "anyOf";
    return combineSchemasMock({
      item,
      separator,
      mockOptions,
      operationId,
      tags,
      combine,
      context,
      imports,
      existingReferencedProperties
    });
  }
  if (item.properties) {
    let value = !combine || (combine == null ? void 0 : combine.separator) === "oneOf" || (combine == null ? void 0 : combine.separator) === "anyOf" ? "{" : "";
    let imports2 = [];
    let includedProperties = [];
    value += Object.entries(item.properties).sort((a, b) => {
      return a[0].localeCompare(b[0]);
    }).map(([key, prop]) => {
      if (combine == null ? void 0 : combine.includedProperties.includes(key)) {
        return void 0;
      }
      const isRequired = (mockOptions == null ? void 0 : mockOptions.required) || (Array.isArray(item.required) ? item.required : []).includes(key);
      if ("$ref" in prop && existingReferencedProperties.includes(prop.$ref.split("/").pop())) {
        return void 0;
      }
      const resolvedValue = resolveMockValue({
        schema: {
          ...prop,
          name: key,
          path: item.path ? `${item.path}.${key}` : `#.${key}`
        },
        mockOptions,
        operationId,
        tags,
        context,
        imports: imports2,
        existingReferencedProperties
      });
      imports2.push(...resolvedValue.imports);
      includedProperties.push(key);
      const keyDefinition = (0, import_core.getKey)(key);
      if (!isRequired && !resolvedValue.overrided) {
        return `${keyDefinition}: faker.helpers.arrayElement([${resolvedValue.value}, undefined])`;
      }
      return `${keyDefinition}: ${resolvedValue.value}`;
    }).filter(Boolean).join(", ");
    value += !combine || (combine == null ? void 0 : combine.separator) === "oneOf" || (combine == null ? void 0 : combine.separator) === "anyOf" ? "}" : "";
    return {
      value,
      imports: imports2,
      name: item.name,
      includedProperties
    };
  }
  if (item.additionalProperties) {
    if ((0, import_core.isBoolean)(item.additionalProperties)) {
      return { value: `{}`, imports: [], name: item.name };
    }
    const resolvedValue = resolveMockValue({
      schema: {
        ...item.additionalProperties,
        name: item.name,
        path: item.path ? `${item.path}.#` : "#"
      },
      mockOptions,
      operationId,
      tags,
      context,
      imports,
      existingReferencedProperties
    });
    return {
      ...resolvedValue,
      value: `{
        [${DEFAULT_OBJECT_KEY_MOCK}]: ${resolvedValue.value}
      }`
    };
  }
  return { value: "{}", imports: [], name: item.name };
};

// src/faker/getters/scalar.ts
var getMockScalar = ({
  item,
  imports,
  mockOptions,
  operationId,
  tags,
  combine,
  context,
  existingReferencedProperties
}) => {
  var _a, _b, _c, _d, _e, _f;
  if (item.isRef) {
    existingReferencedProperties = [...existingReferencedProperties, item.name];
  }
  const operationProperty = resolveMockOverride(
    (_b = (_a = mockOptions == null ? void 0 : mockOptions.operations) == null ? void 0 : _a[operationId]) == null ? void 0 : _b.properties,
    item
  );
  if (operationProperty) {
    return operationProperty;
  }
  const overrideTag = Object.entries((_c = mockOptions == null ? void 0 : mockOptions.tags) != null ? _c : {}).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  }).reduce(
    (acc, [tag, options]) => tags.includes(tag) ? (0, import_core2.mergeDeep)(acc, options) : acc,
    {}
  );
  const tagProperty = resolveMockOverride(overrideTag == null ? void 0 : overrideTag.properties, item);
  if (tagProperty) {
    return tagProperty;
  }
  const property = resolveMockOverride(mockOptions == null ? void 0 : mockOptions.properties, item);
  if (property) {
    return property;
  }
  if ((((_e = (_d = context.override) == null ? void 0 : _d.mock) == null ? void 0 : _e.useExamples) || (mockOptions == null ? void 0 : mockOptions.useExamples)) && item.example) {
    return {
      value: JSON.stringify(item.example),
      imports: [],
      name: item.name,
      overrided: true
    };
  }
  const ALL_FORMAT = {
    ...DEFAULT_FORMAT_MOCK,
    ...(_f = mockOptions == null ? void 0 : mockOptions.format) != null ? _f : {}
  };
  if (item.format && ALL_FORMAT[item.format]) {
    return {
      value: getNullable(`${ALL_FORMAT[item.format]}`, item.nullable),
      imports: [],
      name: item.name,
      overrided: false
    };
  }
  switch (item.type) {
    case "number":
    case "integer": {
      return {
        value: getNullable(
          `faker.number.int({min: ${item.minimum}, max: ${item.maximum}})`,
          item.nullable
        ),
        imports: [],
        name: item.name
      };
    }
    case "boolean": {
      return {
        value: "faker.datatype.boolean()",
        imports: [],
        name: item.name
      };
    }
    case "array": {
      if (!item.items) {
        return { value: "[]", imports: [], name: item.name };
      }
      if ("$ref" in item.items && existingReferencedProperties.includes(item.items.$ref.split("/").pop())) {
        return { value: "[]", imports: [], name: item.name };
      }
      const {
        value,
        enums,
        imports: resolvedImports,
        name
      } = resolveMockValue({
        schema: {
          ...item.items,
          name: item.name,
          path: item.path ? `${item.path}.[]` : "#.[]"
        },
        combine,
        mockOptions,
        operationId,
        tags,
        context,
        imports,
        existingReferencedProperties
      });
      if (enums) {
        if (!(0, import_core2.isReference)(item.items)) {
          return {
            value,
            imports: resolvedImports,
            name: item.name
          };
        }
        const enumImp = imports.find(
          (imp) => name.replace("[]", "") === imp.name
        );
        const enumValue = (enumImp == null ? void 0 : enumImp.name) || name;
        return {
          value: `faker.helpers.arrayElements(Object.values(${enumValue}))`,
          imports: enumImp ? [
            ...resolvedImports,
            {
              ...enumImp,
              values: true,
              ...!(0, import_core2.isRootKey)(context.specKey, context.target) ? { specKey: context.specKey } : {}
            }
          ] : resolvedImports,
          name: item.name
        };
      }
      let mapValue = value;
      if (combine && !value.startsWith("faker") && !value.startsWith("{")) {
        mapValue = `{${value}}`;
      }
      return {
        value: `Array.from({ length: faker.number.int({ min: ${mockOptions == null ? void 0 : mockOptions.arrayMin}, max: ${mockOptions == null ? void 0 : mockOptions.arrayMax} }) }, (_, i) => i + 1).map(() => (${mapValue}))`,
        imports: resolvedImports,
        name: item.name
      };
    }
    case "string": {
      let value = "faker.word.sample()";
      let imports2 = [];
      if (item.enum) {
        let enumValue = "['" + item.enum.map((e) => (0, import_core2.escape)(e)).join("','") + "'] as const";
        if (item.isRef) {
          enumValue = `Object.values(${item.name})`;
          imports2 = [
            {
              name: item.name,
              values: true,
              ...!(0, import_core2.isRootKey)(context.specKey, context.target) ? { specKey: context.specKey } : {}
            }
          ];
        }
        value = `faker.helpers.arrayElement(${enumValue})`;
      }
      return {
        value: getNullable(value, item.nullable),
        enums: item.enum,
        name: item.name,
        imports: imports2
      };
    }
    case "object":
    default: {
      return getMockObject({
        item,
        mockOptions,
        operationId,
        tags,
        combine,
        context,
        imports,
        existingReferencedProperties
      });
    }
  }
};

// src/faker/resolvers/value.ts
var isRegex = (key) => key[0] === "/" && key[key.length - 1] === "/";
var resolveMockOverride = (properties = {}, item) => {
  const path = item.path ? item.path : `#.${item.name}`;
  const property = Object.entries(properties).find(([key]) => {
    if (isRegex(key)) {
      const regex = new RegExp(key.slice(1, key.length - 1));
      if (regex.test(item.name) || regex.test(path)) {
        return true;
      }
    }
    if (`#.${key}` === path) {
      return true;
    }
    return false;
  });
  if (!property) {
    return;
  }
  return {
    value: getNullable(property[1], item.nullable),
    imports: [],
    name: item.name,
    overrided: true
  };
};
var getNullable = (value, nullable) => nullable ? `faker.helpers.arrayElement([${value}, null])` : value;
var resolveMockValue = ({
  schema,
  mockOptions,
  operationId,
  tags,
  combine,
  context,
  imports,
  existingReferencedProperties
}) => {
  if ((0, import_core3.isReference)(schema)) {
    const {
      name,
      specKey = context.specKey,
      refPaths
    } = (0, import_core3.getRefInfo)(schema.$ref, context);
    const schemaRef = (0, import_lodash.default)(context.specs[specKey], refPaths);
    const newSchema = {
      ...schemaRef,
      name,
      path: schema.path,
      isRef: true
    };
    const scalar2 = getMockScalar({
      item: newSchema,
      mockOptions,
      operationId,
      tags,
      combine,
      context: {
        ...context,
        specKey
      },
      imports,
      existingReferencedProperties
    });
    return {
      ...scalar2,
      type: newSchema.type
    };
  }
  const scalar = getMockScalar({
    item: schema,
    mockOptions,
    operationId,
    tags,
    combine,
    context,
    imports,
    existingReferencedProperties
  });
  return {
    ...scalar,
    type: schema.type
  };
};

// src/faker/getters/combine.ts
var combineSchemasMock = ({
  item,
  separator,
  mockOptions,
  operationId,
  tags,
  combine,
  context,
  imports,
  existingReferencedProperties
}) => {
  var _a, _b, _c, _d;
  let combineImports = [];
  let includedProperties = ((_a = combine == null ? void 0 : combine.includedProperties) != null ? _a : []).slice(
    0
  );
  const isRefAndNotExisting = (0, import_core4.isReference)(item) && !existingReferencedProperties.includes(item.name);
  const itemResolvedValue = isRefAndNotExisting || item.properties ? resolveMockValue({
    schema: (0, import_lodash2.default)(item, separator),
    combine: {
      separator: "allOf",
      includedProperties: []
    },
    mockOptions,
    operationId,
    tags,
    context,
    imports,
    existingReferencedProperties
  }) : void 0;
  includedProperties.push(...(_b = itemResolvedValue == null ? void 0 : itemResolvedValue.includedProperties) != null ? _b : []);
  combineImports.push(...(_c = itemResolvedValue == null ? void 0 : itemResolvedValue.imports) != null ? _c : []);
  const value = ((_d = item[separator]) != null ? _d : []).reduce((acc, val, index, arr) => {
    var _a2, _b2;
    if ("$ref" in val && existingReferencedProperties.includes(val.$ref.split("/").pop())) {
      if (arr.length === 1) {
        return "undefined";
      }
      return acc;
    }
    const resolvedValue = resolveMockValue({
      schema: {
        ...val,
        name: item.name,
        path: item.path ? item.path : "#"
      },
      combine: {
        separator,
        includedProperties: separator !== "oneOf" ? includedProperties : (_a2 = itemResolvedValue == null ? void 0 : itemResolvedValue.includedProperties) != null ? _a2 : []
      },
      mockOptions,
      operationId,
      tags,
      context,
      imports,
      existingReferencedProperties
    });
    combineImports.push(...resolvedValue.imports);
    includedProperties.push(...(_b2 = resolvedValue.includedProperties) != null ? _b2 : []);
    const isLastElement = index === arr.length - 1;
    let currentValue = resolvedValue.value;
    if ((itemResolvedValue == null ? void 0 : itemResolvedValue.value) && separator === "oneOf") {
      currentValue = `${resolvedValue.value.slice(0, -1)},${itemResolvedValue.value}}`;
    }
    if ((itemResolvedValue == null ? void 0 : itemResolvedValue.value) && separator !== "oneOf" && isLastElement) {
      currentValue = `${currentValue}${(itemResolvedValue == null ? void 0 : itemResolvedValue.value) ? `,${itemResolvedValue.value}` : ""}`;
    }
    const isObjectBounds = !combine || combine.separator === "oneOf" && separator === "allOf";
    if (!index && isObjectBounds) {
      if (resolvedValue.enums || separator === "oneOf" || separator === "anyOf" || resolvedValue.type === "array") {
        if (arr.length === 1) {
          return `faker.helpers.arrayElement([${currentValue}])`;
        }
        return `faker.helpers.arrayElement([${currentValue},`;
      }
      if (arr.length === 1) {
        if (resolvedValue.type && resolvedValue.type !== "object") {
          return currentValue;
        }
        return `{${currentValue}}`;
      }
      return `{${currentValue},`;
    }
    if (isLastElement) {
      if (resolvedValue.enums || separator === "oneOf" || separator === "anyOf" || resolvedValue.type === "array") {
        return `${acc}${currentValue}${!combine ? "])" : ""}`;
      }
      return `${acc}${currentValue}${isObjectBounds ? "}" : ""}`;
    }
    if (!currentValue) {
      return acc;
    }
    return `${acc}${currentValue},`;
  }, "");
  return {
    value,
    imports: combineImports,
    name: item.name,
    includedProperties
  };
};

// src/faker/getters/route.ts
var import_core5 = require("@orval/core");
var hasParam = (path) => /[^{]*{[\w*_-]*}.*/.test(path);
var getRoutePath = (path) => {
  const matches = path.match(/([^{]*){?([\w*_-]*)}?(.*)/);
  if (!(matches == null ? void 0 : matches.length))
    return path;
  const prev = matches[1];
  const param = (0, import_core5.sanitize)((0, import_core5.camel)(matches[2]), {
    es5keyword: true,
    underscore: true,
    dash: true,
    dot: true
  });
  const next = hasParam(matches[3]) ? getRoutePath(matches[3]) : matches[3];
  if (hasParam(path)) {
    return `${prev}:${param}${next}`;
  } else {
    return `${prev}${param}${next}`;
  }
};
var getRouteMSW = (route, baseUrl = "*") => {
  const splittedRoute = route.split("/");
  return splittedRoute.reduce((acc, path, i) => {
    if (!path && !i) {
      return acc;
    }
    if (!path.includes("{")) {
      return `${acc}/${path}`;
    }
    return `${acc}/${getRoutePath(path)}`;
  }, baseUrl);
};

// src/msw/mocks.ts
var import_core6 = require("@orval/core");
var getMockPropertiesWithoutFunc = (properties, spec) => Object.entries((0, import_core6.isFunction)(properties) ? properties(spec) : properties).reduce((acc, [key, value]) => {
  const implementation = (0, import_core6.isFunction)(value) ? `(${value})()` : (0, import_core6.stringify)(value);
  acc[key] = implementation == null ? void 0 : implementation.replace(
    /import_faker.defaults|import_faker.faker/g,
    "faker"
  );
  return acc;
}, {});
var getMockWithoutFunc = (spec, override) => {
  var _a, _b, _c, _d, _e;
  return {
    arrayMin: (_a = override == null ? void 0 : override.mock) == null ? void 0 : _a.arrayMin,
    arrayMax: (_b = override == null ? void 0 : override.mock) == null ? void 0 : _b.arrayMax,
    required: (_c = override == null ? void 0 : override.mock) == null ? void 0 : _c.required,
    ...((_d = override == null ? void 0 : override.mock) == null ? void 0 : _d.properties) ? {
      properties: getMockPropertiesWithoutFunc(
        override.mock.properties,
        spec
      )
    } : {},
    ...((_e = override == null ? void 0 : override.mock) == null ? void 0 : _e.format) ? {
      format: getMockPropertiesWithoutFunc(override.mock.format, spec)
    } : {},
    ...(override == null ? void 0 : override.operations) ? {
      operations: Object.entries(override.operations).reduce((acc, [key, value]) => {
        var _a2;
        if ((_a2 = value.mock) == null ? void 0 : _a2.properties) {
          acc[key] = {
            properties: getMockPropertiesWithoutFunc(
              value.mock.properties,
              spec
            )
          };
        }
        return acc;
      }, {})
    } : {},
    ...(override == null ? void 0 : override.tags) ? {
      tags: Object.entries(override.tags).reduce((acc, [key, value]) => {
        var _a2;
        if ((_a2 = value.mock) == null ? void 0 : _a2.properties) {
          acc[key] = {
            properties: getMockPropertiesWithoutFunc(
              value.mock.properties,
              spec
            )
          };
        }
        return acc;
      }, {})
    } : {}
  };
};
var getMockScalarJsTypes = (definition, mockOptionsWithoutFunc) => {
  const isArray = definition.endsWith("[]");
  const type = isArray ? definition.slice(0, -2) : definition;
  switch (type) {
    case "number":
      return isArray ? `Array.from({length: faker.number.int({min: ${mockOptionsWithoutFunc.arrayMin}, max: ${mockOptionsWithoutFunc.arrayMax}})}, () => faker.number.int())` : "faker.number.int().toString()";
    case "string":
      return isArray ? `Array.from({length: faker.number.int({min: ${mockOptionsWithoutFunc == null ? void 0 : mockOptionsWithoutFunc.arrayMin},max: ${mockOptionsWithoutFunc == null ? void 0 : mockOptionsWithoutFunc.arrayMax}})}, () => faker.word.sample())` : "faker.word.sample()";
    default:
      return "undefined";
  }
};
var getResponsesMockDefinition = ({
  operationId,
  tags,
  response,
  mockOptionsWithoutFunc,
  transformer,
  context,
  mockOptions
}) => {
  return response.types.success.reduce(
    (acc, { value: definition, originalSchema, example, examples, imports, isRef }) => {
      var _a, _b, _c, _d, _e, _f;
      if (((_b = (_a = context.override) == null ? void 0 : _a.mock) == null ? void 0 : _b.useExamples) || (mockOptions == null ? void 0 : mockOptions.useExamples)) {
        const exampleValue = example || (originalSchema == null ? void 0 : originalSchema.example) || ((_c = Object.values(examples || {})[0]) == null ? void 0 : _c.value) || ((_d = originalSchema == null ? void 0 : originalSchema.examples) == null ? void 0 : _d[0]);
        if (exampleValue) {
          acc.definitions.push(
            transformer ? transformer(exampleValue, response.definition.success) : JSON.stringify(exampleValue)
          );
          return acc;
        }
      }
      if (!definition || import_core6.generalJSTypesWithArray.includes(definition)) {
        const value = getMockScalarJsTypes(definition, mockOptionsWithoutFunc);
        acc.definitions.push(
          transformer ? transformer(value, response.definition.success) : value
        );
        return acc;
      }
      if (!originalSchema) {
        return acc;
      }
      const resolvedRef = (0, import_core6.resolveRef)(originalSchema, context);
      const scalar = getMockScalar({
        item: {
          name: definition,
          ...resolvedRef.schema
        },
        imports,
        mockOptions: mockOptionsWithoutFunc,
        operationId,
        tags,
        context: isRef ? {
          ...context,
          specKey: (_f = (_e = response.imports[0]) == null ? void 0 : _e.specKey) != null ? _f : context.specKey
        } : context,
        existingReferencedProperties: []
      });
      acc.imports.push(...scalar.imports);
      acc.definitions.push(
        transformer ? transformer(scalar.value, response.definition.success) : scalar.value.toString()
      );
      return acc;
    },
    {
      definitions: [],
      imports: []
    }
  );
};
var getMockDefinition = ({
  operationId,
  tags,
  response,
  override,
  transformer,
  context,
  mockOptions
}) => {
  const mockOptionsWithoutFunc = getMockWithoutFunc(
    context.specs[context.specKey],
    override
  );
  const { definitions, imports } = getResponsesMockDefinition({
    operationId,
    tags,
    response,
    mockOptionsWithoutFunc,
    transformer,
    context,
    mockOptions
  });
  return {
    definition: "[" + definitions.join(", ") + "]",
    definitions,
    imports
  };
};
var getMockOptionsDataOverride = (operationId, override) => {
  var _a, _b, _c;
  const responseOverride = (_c = (_b = (_a = override == null ? void 0 : override.operations) == null ? void 0 : _a[operationId]) == null ? void 0 : _b.mock) == null ? void 0 : _c.data;
  const implementation = (0, import_core6.isFunction)(responseOverride) ? `(${responseOverride})()` : (0, import_core6.stringify)(responseOverride);
  return implementation == null ? void 0 : implementation.replace(
    /import_faker.defaults|import_faker.faker/g,
    "faker"
  );
};

// src/delay.ts
var getDelay = (override, options) => {
  var _a, _b;
  const overrideDelay = typeof ((_a = override == null ? void 0 : override.mock) == null ? void 0 : _a.delay) === "number" ? (_b = override == null ? void 0 : override.mock) == null ? void 0 : _b.delay : options == null ? void 0 : options.delay;
  switch (typeof overrideDelay) {
    case "function":
      return overrideDelay();
    case "number":
      return overrideDelay;
    default:
      return 1e3;
  }
};

// src/msw/index.ts
var getMSWDependencies = (locale) => [
  {
    exports: [
      { name: "http", values: true },
      { name: "HttpResponse", values: true },
      { name: "delay", values: true }
    ],
    dependency: "msw"
  },
  {
    exports: [{ name: "faker", values: true }],
    dependency: locale ? `@faker-js/faker/locale/${locale}` : "@faker-js/faker"
  }
];
var generateMSWImports = ({
  implementation,
  imports,
  specsName,
  hasSchemaDir,
  isAllowSyntheticDefaultImports,
  options
}) => {
  return (0, import_core7.generateDependencyImports)(
    implementation,
    [...getMSWDependencies(options == null ? void 0 : options.locale), ...imports],
    specsName,
    hasSchemaDir,
    isAllowSyntheticDefaultImports
  );
};
var generateMSW = ({ operationId, response, verb, tags }, { pathRoute, override, context, mock }) => {
  var _a, _b;
  const { definitions, definition, imports } = getMockDefinition({
    operationId,
    tags,
    response,
    override,
    context,
    mockOptions: !(0, import_core7.isFunction)(mock) ? mock : void 0
  });
  const route = getRouteMSW(
    pathRoute,
    (_b = (_a = override == null ? void 0 : override.mock) == null ? void 0 : _a.baseUrl) != null ? _b : !(0, import_core7.isFunction)(mock) ? mock == null ? void 0 : mock.baseUrl : void 0
  );
  const mockData = getMockOptionsDataOverride(operationId, override);
  let value = "";
  if (mockData) {
    value = mockData;
  } else if (definitions.length > 1) {
    value = `faker.helpers.arrayElement(${definition})`;
  } else if (definitions[0]) {
    value = definitions[0];
  }
  const isTextPlain = response.contentTypes.includes("text/plain");
  const functionName = `get${(0, import_core7.pascal)(operationId)}Mock`;
  return {
    implementation: {
      function: value && value !== "undefined" ? `export const ${functionName} = () => (${value})

` : "",
      handler: `http.${verb}('${route}', async () => {
        await delay(${getDelay(
        override,
        !(0, import_core7.isFunction)(mock) ? mock : void 0
      )});
        return new HttpResponse(${value && value !== "undefined" ? isTextPlain ? `${functionName}()` : `JSON.stringify(${functionName}())` : null},
          { 
            status: 200,
            headers: {
              'Content-Type': '${isTextPlain ? "text/plain" : "application/json"}',
            }
          }
        )
      }),`
    },
    imports
  };
};

// src/index.ts
var DEFAULT_MOCK_OPTIONS = {
  type: "msw",
  useExamples: false
};
var generateMockImports = (importOptions) => {
  var _a;
  switch ((_a = importOptions.options) == null ? void 0 : _a.type) {
    default:
      return generateMSWImports(importOptions);
  }
};
var generateMock = (generatorVerbOptions, generatorOptions) => {
  switch (generatorOptions.mock.type) {
    default:
      return generateMSW(generatorVerbOptions, generatorOptions);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_MOCK_OPTIONS,
  generateMock,
  generateMockImports
});
