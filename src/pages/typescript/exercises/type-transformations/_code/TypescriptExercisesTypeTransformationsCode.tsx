export const EXERCISE_1 = `
const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFuncReturn = unknown;`;

export const EXERCISE_1_SOLUTION = `
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

type EventType = unknown;
`;

export const EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR_SOLUTION = `
type EventType = Event["type"];`;

export const EXERCISE_10_AS_CONST = `
/**
 * Some docs that might help!
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
};

export type GroupProgram = typeof programModeEnumMap["GROUP"];
export type AnnouncementProgram = typeof programModeEnumMap["ANNOUNCEMENT"];
export type OneOnOneProgram = typeof programModeEnumMap["ONE_ON_ONE"];
export type SelfDirectedProgram = typeof programModeEnumMap["SELF_DIRECTED"];
export type PlannedOneOnOneProgram =
  typeof programModeEnumMap["PLANNED_ONE_ON_ONE"];
export type PlannedSelfDirectedProgram =
  typeof programModeEnumMap["PLANNED_SELF_DIRECTED"];`;

export const EXERCISE_10_AS_CONST_SOLUTION = `
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;`;

export const EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS = `
export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type IndividualProgram = unknown;`;

export const EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS_SOLUTION = `
export type IndividualProgram = typeof programModeEnumMap[
  | "ONE_ON_ONE"
  | "SELF_DIRECTED"
  | "PLANNED_ONE_ON_ONE"
  | "PLANNED_SELF_DIRECTED"];`;

export const EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS_SOLUTION_2 = `
export type IndividualProgram = typeof programModeEnumMap[Exclude<
  keyof typeof programModeEnumMap,
  "GROUP" | "ANNOUNCEMENT"
>];`;

export const EXERCISE_12_GET_OBJECT_VALUES = `
const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type BackendModuleEnum = unknown;`;

export const EXERCISE_12_GET_OBJECT_VALUES_SOLUTION = `
type BackendModuleEnum =
  typeof frontendToBackendEnumMap[keyof typeof frontendToBackendEnumMap];`;

export const EXERCISE_13_GET_ARRAY_VALUE = `
const fruits = ["apple", "banana", "orange"];

type AppleOrBanana = unknown;
type Fruit = unknown;`;

export const EXERCISE_13_GET_ARRAY_VALUE_SOLUTION = `
type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];`;

// 3 TEMPLATE LITERALS
export const EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING = `
type Route = unknown;

export const goToRoute = (route: Route) => {};

// Should succeed:

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");`;

const TEXT_SOLUTION_14 = "`/${string}`";

export const EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING_SOLUTION = `
type Route = ${TEXT_SOLUTION_14};`;

export const EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS = `
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";

type DynamicRoutes = unknown;`;

const TEXT_SOLUTION_15 = "`${string}:${string}`";
export const EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS_SOLUTION = `
type DynamicRoutes = Extract<Routes, ${TEXT_SOLUTION_15}>;`;

export const EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS = `
type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = unknown;

// type sandwich should be a string with content <any of bread types>  sandwich with  <any of fillings>`;

const TEXT_SOLUTION_16 = "`${BreadType} sandwich with ${Filling}`";
export const EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS_SOLUTION = `
type Sandwich = ${TEXT_SOLUTION_16};`;

export const EXERCISE_17_SPLITTING_STRINGS = `
// Might come in handy!
// import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

type Path = "Users/John/Documents/notes.txt";

type SplitPath = unknown;
// Split path can type should be ["Users", "John", "Documents", "notes.txt"]`;

export const EXERCISE_17_SPLITTING_STRINGS_SOLUTION = `
import { S } from "ts-toolbelt";

type SplitPath = S.Split<Path, "/">;`;

const TEXT_EXERCISE_18 = '`${"user" | "post" | "comment"}${"Id" | "Name"}`';

export const EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS = `
type TemplateLiteralKey = ${TEXT_EXERCISE_18};

type ObjectOfKeys = unknown;

/*
  type ObjectOfKeys should be:
  {
    userId: string;
    userName: string;
    postId: string;
    postName: string;
    commentId: string;
    commentName: string;
  };
*/`;

export const EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS_SOLUTION = `
type ObjectOfKeys = Record<TemplateLiteralKey, string>;`;

const TEXT_EXERCISE_19 = "`log_in`";
export const EXERCISE_19_UPPERCASE_OBJECT = `
type Event = ${TEXT_EXERCISE_19} | "log_out" | "sign_up";

type ObjectOfKeys = unknown;

/*
type ObjectOfKeys should be: 
  {
    LOG_IN: string;
    LOG_OUT: string;
    SIGN_UP: string;
  }
*/`;

export const EXERCISE_19_UPPERCASE_OBJECT_SOLUTION = `
type ObjectOfKeys = Record<Uppercase<Event>, string>;`;
