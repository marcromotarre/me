export const EXERCISE_1 = `
const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = unknown;`;

export const EXERCISE_1_SOLUTION = `
const myFunc = () => {
  return "hello";
};

// Just changed this line
type MyFuncReturn = ReturnType<typeof myFunc>; // SOLUTION`;

export const EXERCISE_2 = `
const makeQuery = (
    url: string,
    opts?: {
      method?: string;
      headers?: {
        [key: string]: string;
      };
      body?: string;
    },
  ) => {};
  
  //Change this line to create a type with makeQueryParameters
  type MakeQueryParameters = unknown;`;

export const EXERCISE_2_SOLUTION = `
const makeQuery = (
    url: string,
    opts?: {
        method?: string;
        headers?: {
        [key: string]: string;
        };
        body?: string;
    },
) => {};
  
type MakeQueryParameters = Parameters<typeof makeQuery>; // SOLUTION

// this is just a TIP, not part of the exercise
// To access to the diffrent params
type FirstParam = MakeQueryParameters[0]; // string
type SecondParam = MakeQueryParameters[1]; // { method?: string; headers ... }
`;

export const EXERCISE_3_AWAITED = `
const getUser = () => {
    return Promise.resolve({
        id: "123",
        name: "John",
        email: "john@example.com",
    });
};

// Edit next line in order that ReturnValue has the Promise of the return of getUser
type ReturnValue = ReturnType<typeof getUser>;`;

export const EXERCISE_3_AWAITED_SOLUTION = `
type ReturnValue = Awaited<ReturnType<typeof getUser>>;`;

export const EXERCISE_4_GET_OBJECT_KEYS = `
const testingFrameworks = {
    vitest: {
        label: "Vitest",
    },
    jest: {
        label: "Jest",
    },
    mocha: {
        label: "Mocha",
    },
};

// Edit next line to make Testing framework has the Object testingFrameworks keys
type TestingFramework = unknown;`;

export const EXERCISE_4_GET_OBJECT_KEYS_SOLUTION = `
type TestingFramework = keyof typeof testingFrameworks;`;

export const EXERCISE_5_TERMINOLOGY = `
/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};`;

export const EXERCISE_5_TERMINOLOGY_SOLUTION = `
/**
 * A is a discriminated union, with 'type' as the discriminator.
 *
 * Discriminated unions have common properties which are used to
 * differentiate between members of the union. In this case, type
 * is the discriminator.
 */

/**
 * B is a union, but not a discriminated union.
 */
type B = "a" | "b" | "c";

/**
 * C is an enum.
 */`;

export const EXERCISE_6_EXTRACT_FROM_DISCRIMINATED_UNION = `
 export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = unknown;`;

export const EXERCISE_6_EXTRACT_FROM_DISCRIMINATED_UNION_SULUTION = `
type ClickEvent = Extract<Event, { type: "click" }>;`;

export const EXERCISE_7_EXCLUDE_FROM_DISCRIMINATED_UNION = `
export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type NonKeyDownEvents = unknown;`;

export const EXERCISE_7_EXCLUDE_FROM_DISCRIMINATED_UNION_SOLUCTION = `
type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;`;

export const EXERCISE_8_INDEXED_ACCESS = `
export const fakeDataDefaults = {
    String: "Default string",
    Int: 1,
    Float: 1.14,
    Boolean: true,
    ID: "id",
  };
  
  export type StringType = unknown;
  export type IntType = unknown;
  export type FloatType = unknown;
  export type BooleanType = unknown;
  export type IDType = unknown;`;

export const EXERCISE_8_INDEXED_ACCESS_SOLUTION = `
type FakeDataDefaults = typeof fakeDataDefaults;

export type StringType = FakeDataDefaults["String"];
export type IntType = FakeDataDefaults["Int"];
export type FloatType = FakeDataDefaults["Float"];
export type BooleanType = FakeDataDefaults["Boolean"];
export type IDType = FakeDataDefaults["ID"];`;

export const EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR = `
`;

export const EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR_SOLUTION = `
`;

export const EXERCISE_10_AS_CONST = `
`;

export const EXERCISE_10_AS_CONST_SOLUTION = `
`;

export const EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS = `
`;

export const EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS_SOLUTION = `
`;

export const EXERCISE_12_GET_OBJECT_VALUES = `
`;

export const EXERCISE_12_GET_OBJECT_VALUES_SOLUTION = `
`;

export const EXERCISE_13_GET_ARRAY_VALUE = `
`;

export const EXERCISE_13_GET_ARRAY_VALUE_SOLUTION = `
`;

// 3 TEMPLATE LITERALS
export const EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING = `
`;

export const EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING_SOLUTION = `
`;

export const EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS = `
`;

export const EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS_SOLUTION = `
`;

export const EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS = `
`;

export const EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS_SOLUTION = `
`;

export const EXERCISE_17_SPLITTING_STRINGS = `
`;

export const EXERCISE_17_SPLITTING_STRINGS_SOLUTION = `
`;

export const EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS = `
`;

export const EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS_SOLUTION = `
`;

export const EXERCISE_19_UPPERCASE_OBJECT = `
`;

export const EXERCISE_19_UPPERCASE_OBJECT_SOLUTION = `
`;
