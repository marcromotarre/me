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
const getUser = () => {
    return Promise.resolve({
        id: "123",
        name: "John",
        email: "john@example.com",
    });
};

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

// SOLUTION
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

/**
 * B is a union, but not a discriminated union.
 */
type B = "a" | "b" | "c";

/**
 * C is an enum.
 */
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};`;
