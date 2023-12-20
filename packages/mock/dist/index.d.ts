import * as _orval_core from '@orval/core';
import { GlobalMockOptions, GenerateMockImports, GeneratorVerbOptions, GeneratorOptions } from '@orval/core';

declare const DEFAULT_MOCK_OPTIONS: GlobalMockOptions;
declare const generateMockImports: GenerateMockImports;
declare const generateMock: (generatorVerbOptions: GeneratorVerbOptions, generatorOptions: Omit<GeneratorOptions, 'mock'> & {
    mock: GlobalMockOptions;
}) => {
    implementation: {
        function: string;
        handler: string;
    };
    imports: _orval_core.GeneratorImport[];
};

export { DEFAULT_MOCK_OPTIONS, generateMock, generateMockImports };
