
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ChatInteraction
 * 
 */
export type ChatInteraction = $Result.DefaultSelection<Prisma.$ChatInteractionPayload>
/**
 * Model MaintenancePrediction
 * 
 */
export type MaintenancePrediction = $Result.DefaultSelection<Prisma.$MaintenancePredictionPayload>
/**
 * Model EnvironmentalImpact
 * 
 */
export type EnvironmentalImpact = $Result.DefaultSelection<Prisma.$EnvironmentalImpactPayload>
/**
 * Model PriceAnalysis
 * 
 */
export type PriceAnalysis = $Result.DefaultSelection<Prisma.$PriceAnalysisPayload>
/**
 * Model Comparison
 * 
 */
export type Comparison = $Result.DefaultSelection<Prisma.$ComparisonPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Car
 * 
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>
/**
 * Model DealershipInfo
 * 
 */
export type DealershipInfo = $Result.DefaultSelection<Prisma.$DealershipInfoPayload>
/**
 * Model WorkingHour
 * 
 */
export type WorkingHour = $Result.DefaultSelection<Prisma.$WorkingHourPayload>
/**
 * Model UserSavedCar
 * 
 */
export type UserSavedCar = $Result.DefaultSelection<Prisma.$UserSavedCarPayload>
/**
 * Model TestDriveBooking
 * 
 */
export type TestDriveBooking = $Result.DefaultSelection<Prisma.$TestDriveBookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CarStatus: {
  AVAILABLE: 'AVAILABLE',
  UNAVAILABLE: 'UNAVAILABLE',
  SOLD: 'SOLD'
};

export type CarStatus = (typeof CarStatus)[keyof typeof CarStatus]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CarStatus = $Enums.CarStatus

export const CarStatus: typeof $Enums.CarStatus

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChatInteractions
 * const chatInteractions = await prisma.chatInteraction.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChatInteractions
   * const chatInteractions = await prisma.chatInteraction.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chatInteraction`: Exposes CRUD operations for the **ChatInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatInteractions
    * const chatInteractions = await prisma.chatInteraction.findMany()
    * ```
    */
  get chatInteraction(): Prisma.ChatInteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenancePrediction`: Exposes CRUD operations for the **MaintenancePrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenancePredictions
    * const maintenancePredictions = await prisma.maintenancePrediction.findMany()
    * ```
    */
  get maintenancePrediction(): Prisma.MaintenancePredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentalImpact`: Exposes CRUD operations for the **EnvironmentalImpact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentalImpacts
    * const environmentalImpacts = await prisma.environmentalImpact.findMany()
    * ```
    */
  get environmentalImpact(): Prisma.EnvironmentalImpactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceAnalysis`: Exposes CRUD operations for the **PriceAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceAnalyses
    * const priceAnalyses = await prisma.priceAnalysis.findMany()
    * ```
    */
  get priceAnalysis(): Prisma.PriceAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comparison`: Exposes CRUD operations for the **Comparison** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comparisons
    * const comparisons = await prisma.comparison.findMany()
    * ```
    */
  get comparison(): Prisma.ComparisonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cars
    * const cars = await prisma.car.findMany()
    * ```
    */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dealershipInfo`: Exposes CRUD operations for the **DealershipInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealershipInfos
    * const dealershipInfos = await prisma.dealershipInfo.findMany()
    * ```
    */
  get dealershipInfo(): Prisma.DealershipInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workingHour`: Exposes CRUD operations for the **WorkingHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkingHours
    * const workingHours = await prisma.workingHour.findMany()
    * ```
    */
  get workingHour(): Prisma.WorkingHourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSavedCar`: Exposes CRUD operations for the **UserSavedCar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSavedCars
    * const userSavedCars = await prisma.userSavedCar.findMany()
    * ```
    */
  get userSavedCar(): Prisma.UserSavedCarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testDriveBooking`: Exposes CRUD operations for the **TestDriveBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestDriveBookings
    * const testDriveBookings = await prisma.testDriveBooking.findMany()
    * ```
    */
  get testDriveBooking(): Prisma.TestDriveBookingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ChatInteraction: 'ChatInteraction',
    MaintenancePrediction: 'MaintenancePrediction',
    EnvironmentalImpact: 'EnvironmentalImpact',
    PriceAnalysis: 'PriceAnalysis',
    Comparison: 'Comparison',
    User: 'User',
    Car: 'Car',
    DealershipInfo: 'DealershipInfo',
    WorkingHour: 'WorkingHour',
    UserSavedCar: 'UserSavedCar',
    TestDriveBooking: 'TestDriveBooking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chatInteraction" | "maintenancePrediction" | "environmentalImpact" | "priceAnalysis" | "comparison" | "user" | "car" | "dealershipInfo" | "workingHour" | "userSavedCar" | "testDriveBooking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ChatInteraction: {
        payload: Prisma.$ChatInteractionPayload<ExtArgs>
        fields: Prisma.ChatInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>
          }
          findFirst: {
            args: Prisma.ChatInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>
          }
          findMany: {
            args: Prisma.ChatInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>[]
          }
          create: {
            args: Prisma.ChatInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>
          }
          createMany: {
            args: Prisma.ChatInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatInteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>[]
          }
          delete: {
            args: Prisma.ChatInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>
          }
          update: {
            args: Prisma.ChatInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>
          }
          deleteMany: {
            args: Prisma.ChatInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatInteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>[]
          }
          upsert: {
            args: Prisma.ChatInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatInteractionPayload>
          }
          aggregate: {
            args: Prisma.ChatInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatInteraction>
          }
          groupBy: {
            args: Prisma.ChatInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatInteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatInteractionCountAggregateOutputType> | number
          }
        }
      }
      MaintenancePrediction: {
        payload: Prisma.$MaintenancePredictionPayload<ExtArgs>
        fields: Prisma.MaintenancePredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenancePredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenancePredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>
          }
          findFirst: {
            args: Prisma.MaintenancePredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenancePredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>
          }
          findMany: {
            args: Prisma.MaintenancePredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>[]
          }
          create: {
            args: Prisma.MaintenancePredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>
          }
          createMany: {
            args: Prisma.MaintenancePredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenancePredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>[]
          }
          delete: {
            args: Prisma.MaintenancePredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>
          }
          update: {
            args: Prisma.MaintenancePredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>
          }
          deleteMany: {
            args: Prisma.MaintenancePredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenancePredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenancePredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>[]
          }
          upsert: {
            args: Prisma.MaintenancePredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePredictionPayload>
          }
          aggregate: {
            args: Prisma.MaintenancePredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenancePrediction>
          }
          groupBy: {
            args: Prisma.MaintenancePredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenancePredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenancePredictionCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenancePredictionCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentalImpact: {
        payload: Prisma.$EnvironmentalImpactPayload<ExtArgs>
        fields: Prisma.EnvironmentalImpactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentalImpactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentalImpactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>
          }
          findFirst: {
            args: Prisma.EnvironmentalImpactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentalImpactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>
          }
          findMany: {
            args: Prisma.EnvironmentalImpactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>[]
          }
          create: {
            args: Prisma.EnvironmentalImpactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>
          }
          createMany: {
            args: Prisma.EnvironmentalImpactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentalImpactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>[]
          }
          delete: {
            args: Prisma.EnvironmentalImpactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>
          }
          update: {
            args: Prisma.EnvironmentalImpactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentalImpactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentalImpactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentalImpactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentalImpactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentalImpactPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentalImpactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentalImpact>
          }
          groupBy: {
            args: Prisma.EnvironmentalImpactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentalImpactGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentalImpactCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentalImpactCountAggregateOutputType> | number
          }
        }
      }
      PriceAnalysis: {
        payload: Prisma.$PriceAnalysisPayload<ExtArgs>
        fields: Prisma.PriceAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>
          }
          findFirst: {
            args: Prisma.PriceAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>
          }
          findMany: {
            args: Prisma.PriceAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>[]
          }
          create: {
            args: Prisma.PriceAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>
          }
          createMany: {
            args: Prisma.PriceAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>[]
          }
          delete: {
            args: Prisma.PriceAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>
          }
          update: {
            args: Prisma.PriceAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.PriceAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.PriceAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceAnalysisPayload>
          }
          aggregate: {
            args: Prisma.PriceAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceAnalysis>
          }
          groupBy: {
            args: Prisma.PriceAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<PriceAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Comparison: {
        payload: Prisma.$ComparisonPayload<ExtArgs>
        fields: Prisma.ComparisonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComparisonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComparisonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>
          }
          findFirst: {
            args: Prisma.ComparisonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComparisonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>
          }
          findMany: {
            args: Prisma.ComparisonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>[]
          }
          create: {
            args: Prisma.ComparisonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>
          }
          createMany: {
            args: Prisma.ComparisonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComparisonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>[]
          }
          delete: {
            args: Prisma.ComparisonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>
          }
          update: {
            args: Prisma.ComparisonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>
          }
          deleteMany: {
            args: Prisma.ComparisonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComparisonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComparisonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>[]
          }
          upsert: {
            args: Prisma.ComparisonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComparisonPayload>
          }
          aggregate: {
            args: Prisma.ComparisonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComparison>
          }
          groupBy: {
            args: Prisma.ComparisonGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComparisonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComparisonCountArgs<ExtArgs>
            result: $Utils.Optional<ComparisonCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>
        fields: Prisma.CarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[]
          }
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarPayload>
          }
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCar>
          }
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarCountArgs<ExtArgs>
            result: $Utils.Optional<CarCountAggregateOutputType> | number
          }
        }
      }
      DealershipInfo: {
        payload: Prisma.$DealershipInfoPayload<ExtArgs>
        fields: Prisma.DealershipInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealershipInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealershipInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          findFirst: {
            args: Prisma.DealershipInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealershipInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          findMany: {
            args: Prisma.DealershipInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>[]
          }
          create: {
            args: Prisma.DealershipInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          createMany: {
            args: Prisma.DealershipInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealershipInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>[]
          }
          delete: {
            args: Prisma.DealershipInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          update: {
            args: Prisma.DealershipInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          deleteMany: {
            args: Prisma.DealershipInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealershipInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DealershipInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>[]
          }
          upsert: {
            args: Prisma.DealershipInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealershipInfoPayload>
          }
          aggregate: {
            args: Prisma.DealershipInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealershipInfo>
          }
          groupBy: {
            args: Prisma.DealershipInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealershipInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealershipInfoCountArgs<ExtArgs>
            result: $Utils.Optional<DealershipInfoCountAggregateOutputType> | number
          }
        }
      }
      WorkingHour: {
        payload: Prisma.$WorkingHourPayload<ExtArgs>
        fields: Prisma.WorkingHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkingHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkingHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          findFirst: {
            args: Prisma.WorkingHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkingHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          findMany: {
            args: Prisma.WorkingHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>[]
          }
          create: {
            args: Prisma.WorkingHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          createMany: {
            args: Prisma.WorkingHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkingHourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>[]
          }
          delete: {
            args: Prisma.WorkingHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          update: {
            args: Prisma.WorkingHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          deleteMany: {
            args: Prisma.WorkingHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkingHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkingHourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>[]
          }
          upsert: {
            args: Prisma.WorkingHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkingHourPayload>
          }
          aggregate: {
            args: Prisma.WorkingHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkingHour>
          }
          groupBy: {
            args: Prisma.WorkingHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkingHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkingHourCountArgs<ExtArgs>
            result: $Utils.Optional<WorkingHourCountAggregateOutputType> | number
          }
        }
      }
      UserSavedCar: {
        payload: Prisma.$UserSavedCarPayload<ExtArgs>
        fields: Prisma.UserSavedCarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSavedCarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSavedCarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          findFirst: {
            args: Prisma.UserSavedCarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSavedCarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          findMany: {
            args: Prisma.UserSavedCarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>[]
          }
          create: {
            args: Prisma.UserSavedCarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          createMany: {
            args: Prisma.UserSavedCarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSavedCarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>[]
          }
          delete: {
            args: Prisma.UserSavedCarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          update: {
            args: Prisma.UserSavedCarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          deleteMany: {
            args: Prisma.UserSavedCarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSavedCarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSavedCarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>[]
          }
          upsert: {
            args: Prisma.UserSavedCarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSavedCarPayload>
          }
          aggregate: {
            args: Prisma.UserSavedCarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSavedCar>
          }
          groupBy: {
            args: Prisma.UserSavedCarGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSavedCarGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSavedCarCountArgs<ExtArgs>
            result: $Utils.Optional<UserSavedCarCountAggregateOutputType> | number
          }
        }
      }
      TestDriveBooking: {
        payload: Prisma.$TestDriveBookingPayload<ExtArgs>
        fields: Prisma.TestDriveBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestDriveBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestDriveBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          findFirst: {
            args: Prisma.TestDriveBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestDriveBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          findMany: {
            args: Prisma.TestDriveBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>[]
          }
          create: {
            args: Prisma.TestDriveBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          createMany: {
            args: Prisma.TestDriveBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestDriveBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>[]
          }
          delete: {
            args: Prisma.TestDriveBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          update: {
            args: Prisma.TestDriveBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          deleteMany: {
            args: Prisma.TestDriveBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestDriveBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestDriveBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>[]
          }
          upsert: {
            args: Prisma.TestDriveBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestDriveBookingPayload>
          }
          aggregate: {
            args: Prisma.TestDriveBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestDriveBooking>
          }
          groupBy: {
            args: Prisma.TestDriveBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestDriveBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestDriveBookingCountArgs<ExtArgs>
            result: $Utils.Optional<TestDriveBookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chatInteraction?: ChatInteractionOmit
    maintenancePrediction?: MaintenancePredictionOmit
    environmentalImpact?: EnvironmentalImpactOmit
    priceAnalysis?: PriceAnalysisOmit
    comparison?: ComparisonOmit
    user?: UserOmit
    car?: CarOmit
    dealershipInfo?: DealershipInfoOmit
    workingHour?: WorkingHourOmit
    userSavedCar?: UserSavedCarOmit
    testDriveBooking?: TestDriveBookingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChatInteractionCountOutputType
   */

  export type ChatInteractionCountOutputType = {
    recommendedCars: number
  }

  export type ChatInteractionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendedCars?: boolean | ChatInteractionCountOutputTypeCountRecommendedCarsArgs
  }

  // Custom InputTypes
  /**
   * ChatInteractionCountOutputType without action
   */
  export type ChatInteractionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteractionCountOutputType
     */
    select?: ChatInteractionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatInteractionCountOutputType without action
   */
  export type ChatInteractionCountOutputTypeCountRecommendedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedCars: number
    testDrives: number
    chatInteractions: number
    maintenancePredictions: number
    environmentalImpacts: number
    priceAnalyses: number
    comparisons: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedCars?: boolean | UserCountOutputTypeCountSavedCarsArgs
    testDrives?: boolean | UserCountOutputTypeCountTestDrivesArgs
    chatInteractions?: boolean | UserCountOutputTypeCountChatInteractionsArgs
    maintenancePredictions?: boolean | UserCountOutputTypeCountMaintenancePredictionsArgs
    environmentalImpacts?: boolean | UserCountOutputTypeCountEnvironmentalImpactsArgs
    priceAnalyses?: boolean | UserCountOutputTypeCountPriceAnalysesArgs
    comparisons?: boolean | UserCountOutputTypeCountComparisonsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedCarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveBookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatInteractionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenancePredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenancePredictionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnvironmentalImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentalImpactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPriceAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComparisonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComparisonWhereInput
  }


  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    savedBy: number
    testDriveBookings: number
    chatRecommendations: number
    maintenancePredictions: number
    environmentalImpacts: number
    priceAnalyses: number
  }

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | CarCountOutputTypeCountSavedByArgs
    testDriveBookings?: boolean | CarCountOutputTypeCountTestDriveBookingsArgs
    chatRecommendations?: boolean | CarCountOutputTypeCountChatRecommendationsArgs
    maintenancePredictions?: boolean | CarCountOutputTypeCountMaintenancePredictionsArgs
    environmentalImpacts?: boolean | CarCountOutputTypeCountEnvironmentalImpactsArgs
    priceAnalyses?: boolean | CarCountOutputTypeCountPriceAnalysesArgs
  }

  // Custom InputTypes
  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedCarWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountTestDriveBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveBookingWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountChatRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatInteractionWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountMaintenancePredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenancePredictionWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountEnvironmentalImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentalImpactWhereInput
  }

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountPriceAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAnalysisWhereInput
  }


  /**
   * Count Type DealershipInfoCountOutputType
   */

  export type DealershipInfoCountOutputType = {
    workingHours: number
  }

  export type DealershipInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | DealershipInfoCountOutputTypeCountWorkingHoursArgs
  }

  // Custom InputTypes
  /**
   * DealershipInfoCountOutputType without action
   */
  export type DealershipInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfoCountOutputType
     */
    select?: DealershipInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealershipInfoCountOutputType without action
   */
  export type DealershipInfoCountOutputTypeCountWorkingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHourWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ChatInteraction
   */

  export type AggregateChatInteraction = {
    _count: ChatInteractionCountAggregateOutputType | null
    _min: ChatInteractionMinAggregateOutputType | null
    _max: ChatInteractionMaxAggregateOutputType | null
  }

  export type ChatInteractionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userMessage: string | null
    aiResponse: string | null
    createdAt: Date | null
  }

  export type ChatInteractionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userMessage: string | null
    aiResponse: string | null
    createdAt: Date | null
  }

  export type ChatInteractionCountAggregateOutputType = {
    id: number
    userId: number
    userMessage: number
    aiResponse: number
    preferences: number
    recommendedCarIds: number
    createdAt: number
    _all: number
  }


  export type ChatInteractionMinAggregateInputType = {
    id?: true
    userId?: true
    userMessage?: true
    aiResponse?: true
    createdAt?: true
  }

  export type ChatInteractionMaxAggregateInputType = {
    id?: true
    userId?: true
    userMessage?: true
    aiResponse?: true
    createdAt?: true
  }

  export type ChatInteractionCountAggregateInputType = {
    id?: true
    userId?: true
    userMessage?: true
    aiResponse?: true
    preferences?: true
    recommendedCarIds?: true
    createdAt?: true
    _all?: true
  }

  export type ChatInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatInteraction to aggregate.
     */
    where?: ChatInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatInteractions to fetch.
     */
    orderBy?: ChatInteractionOrderByWithRelationInput | ChatInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatInteractions
    **/
    _count?: true | ChatInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatInteractionMaxAggregateInputType
  }

  export type GetChatInteractionAggregateType<T extends ChatInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatInteraction[P]>
      : GetScalarType<T[P], AggregateChatInteraction[P]>
  }




  export type ChatInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatInteractionWhereInput
    orderBy?: ChatInteractionOrderByWithAggregationInput | ChatInteractionOrderByWithAggregationInput[]
    by: ChatInteractionScalarFieldEnum[] | ChatInteractionScalarFieldEnum
    having?: ChatInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatInteractionCountAggregateInputType | true
    _min?: ChatInteractionMinAggregateInputType
    _max?: ChatInteractionMaxAggregateInputType
  }

  export type ChatInteractionGroupByOutputType = {
    id: string
    userId: string
    userMessage: string
    aiResponse: string
    preferences: JsonValue
    recommendedCarIds: string[]
    createdAt: Date
    _count: ChatInteractionCountAggregateOutputType | null
    _min: ChatInteractionMinAggregateOutputType | null
    _max: ChatInteractionMaxAggregateOutputType | null
  }

  type GetChatInteractionGroupByPayload<T extends ChatInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatInteractionGroupByOutputType[P]>
        }
      >
    >


  export type ChatInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userMessage?: boolean
    aiResponse?: boolean
    preferences?: boolean
    recommendedCarIds?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recommendedCars?: boolean | ChatInteraction$recommendedCarsArgs<ExtArgs>
    _count?: boolean | ChatInteractionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatInteraction"]>

  export type ChatInteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userMessage?: boolean
    aiResponse?: boolean
    preferences?: boolean
    recommendedCarIds?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatInteraction"]>

  export type ChatInteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userMessage?: boolean
    aiResponse?: boolean
    preferences?: boolean
    recommendedCarIds?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatInteraction"]>

  export type ChatInteractionSelectScalar = {
    id?: boolean
    userId?: boolean
    userMessage?: boolean
    aiResponse?: boolean
    preferences?: boolean
    recommendedCarIds?: boolean
    createdAt?: boolean
  }

  export type ChatInteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userMessage" | "aiResponse" | "preferences" | "recommendedCarIds" | "createdAt", ExtArgs["result"]["chatInteraction"]>
  export type ChatInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recommendedCars?: boolean | ChatInteraction$recommendedCarsArgs<ExtArgs>
    _count?: boolean | ChatInteractionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatInteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatInteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatInteraction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recommendedCars: Prisma.$CarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userMessage: string
      aiResponse: string
      preferences: Prisma.JsonValue
      recommendedCarIds: string[]
      createdAt: Date
    }, ExtArgs["result"]["chatInteraction"]>
    composites: {}
  }

  type ChatInteractionGetPayload<S extends boolean | null | undefined | ChatInteractionDefaultArgs> = $Result.GetResult<Prisma.$ChatInteractionPayload, S>

  type ChatInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatInteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatInteractionCountAggregateInputType | true
    }

  export interface ChatInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatInteraction'], meta: { name: 'ChatInteraction' } }
    /**
     * Find zero or one ChatInteraction that matches the filter.
     * @param {ChatInteractionFindUniqueArgs} args - Arguments to find a ChatInteraction
     * @example
     * // Get one ChatInteraction
     * const chatInteraction = await prisma.chatInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatInteractionFindUniqueArgs>(args: SelectSubset<T, ChatInteractionFindUniqueArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatInteraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatInteractionFindUniqueOrThrowArgs} args - Arguments to find a ChatInteraction
     * @example
     * // Get one ChatInteraction
     * const chatInteraction = await prisma.chatInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionFindFirstArgs} args - Arguments to find a ChatInteraction
     * @example
     * // Get one ChatInteraction
     * const chatInteraction = await prisma.chatInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatInteractionFindFirstArgs>(args?: SelectSubset<T, ChatInteractionFindFirstArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionFindFirstOrThrowArgs} args - Arguments to find a ChatInteraction
     * @example
     * // Get one ChatInteraction
     * const chatInteraction = await prisma.chatInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatInteractions
     * const chatInteractions = await prisma.chatInteraction.findMany()
     * 
     * // Get first 10 ChatInteractions
     * const chatInteractions = await prisma.chatInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatInteractionWithIdOnly = await prisma.chatInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatInteractionFindManyArgs>(args?: SelectSubset<T, ChatInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatInteraction.
     * @param {ChatInteractionCreateArgs} args - Arguments to create a ChatInteraction.
     * @example
     * // Create one ChatInteraction
     * const ChatInteraction = await prisma.chatInteraction.create({
     *   data: {
     *     // ... data to create a ChatInteraction
     *   }
     * })
     * 
     */
    create<T extends ChatInteractionCreateArgs>(args: SelectSubset<T, ChatInteractionCreateArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatInteractions.
     * @param {ChatInteractionCreateManyArgs} args - Arguments to create many ChatInteractions.
     * @example
     * // Create many ChatInteractions
     * const chatInteraction = await prisma.chatInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatInteractionCreateManyArgs>(args?: SelectSubset<T, ChatInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatInteractions and returns the data saved in the database.
     * @param {ChatInteractionCreateManyAndReturnArgs} args - Arguments to create many ChatInteractions.
     * @example
     * // Create many ChatInteractions
     * const chatInteraction = await prisma.chatInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatInteractions and only return the `id`
     * const chatInteractionWithIdOnly = await prisma.chatInteraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatInteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatInteraction.
     * @param {ChatInteractionDeleteArgs} args - Arguments to delete one ChatInteraction.
     * @example
     * // Delete one ChatInteraction
     * const ChatInteraction = await prisma.chatInteraction.delete({
     *   where: {
     *     // ... filter to delete one ChatInteraction
     *   }
     * })
     * 
     */
    delete<T extends ChatInteractionDeleteArgs>(args: SelectSubset<T, ChatInteractionDeleteArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatInteraction.
     * @param {ChatInteractionUpdateArgs} args - Arguments to update one ChatInteraction.
     * @example
     * // Update one ChatInteraction
     * const chatInteraction = await prisma.chatInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatInteractionUpdateArgs>(args: SelectSubset<T, ChatInteractionUpdateArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatInteractions.
     * @param {ChatInteractionDeleteManyArgs} args - Arguments to filter ChatInteractions to delete.
     * @example
     * // Delete a few ChatInteractions
     * const { count } = await prisma.chatInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatInteractionDeleteManyArgs>(args?: SelectSubset<T, ChatInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatInteractions
     * const chatInteraction = await prisma.chatInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatInteractionUpdateManyArgs>(args: SelectSubset<T, ChatInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatInteractions and returns the data updated in the database.
     * @param {ChatInteractionUpdateManyAndReturnArgs} args - Arguments to update many ChatInteractions.
     * @example
     * // Update many ChatInteractions
     * const chatInteraction = await prisma.chatInteraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatInteractions and only return the `id`
     * const chatInteractionWithIdOnly = await prisma.chatInteraction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatInteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatInteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatInteraction.
     * @param {ChatInteractionUpsertArgs} args - Arguments to update or create a ChatInteraction.
     * @example
     * // Update or create a ChatInteraction
     * const chatInteraction = await prisma.chatInteraction.upsert({
     *   create: {
     *     // ... data to create a ChatInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatInteraction we want to update
     *   }
     * })
     */
    upsert<T extends ChatInteractionUpsertArgs>(args: SelectSubset<T, ChatInteractionUpsertArgs<ExtArgs>>): Prisma__ChatInteractionClient<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionCountArgs} args - Arguments to filter ChatInteractions to count.
     * @example
     * // Count the number of ChatInteractions
     * const count = await prisma.chatInteraction.count({
     *   where: {
     *     // ... the filter for the ChatInteractions we want to count
     *   }
     * })
    **/
    count<T extends ChatInteractionCountArgs>(
      args?: Subset<T, ChatInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatInteractionAggregateArgs>(args: Subset<T, ChatInteractionAggregateArgs>): Prisma.PrismaPromise<GetChatInteractionAggregateType<T>>

    /**
     * Group by ChatInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatInteractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatInteractionGroupByArgs['orderBy'] }
        : { orderBy?: ChatInteractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatInteraction model
   */
  readonly fields: ChatInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recommendedCars<T extends ChatInteraction$recommendedCarsArgs<ExtArgs> = {}>(args?: Subset<T, ChatInteraction$recommendedCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatInteraction model
   */
  interface ChatInteractionFieldRefs {
    readonly id: FieldRef<"ChatInteraction", 'String'>
    readonly userId: FieldRef<"ChatInteraction", 'String'>
    readonly userMessage: FieldRef<"ChatInteraction", 'String'>
    readonly aiResponse: FieldRef<"ChatInteraction", 'String'>
    readonly preferences: FieldRef<"ChatInteraction", 'Json'>
    readonly recommendedCarIds: FieldRef<"ChatInteraction", 'String[]'>
    readonly createdAt: FieldRef<"ChatInteraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatInteraction findUnique
   */
  export type ChatInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * Filter, which ChatInteraction to fetch.
     */
    where: ChatInteractionWhereUniqueInput
  }

  /**
   * ChatInteraction findUniqueOrThrow
   */
  export type ChatInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * Filter, which ChatInteraction to fetch.
     */
    where: ChatInteractionWhereUniqueInput
  }

  /**
   * ChatInteraction findFirst
   */
  export type ChatInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * Filter, which ChatInteraction to fetch.
     */
    where?: ChatInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatInteractions to fetch.
     */
    orderBy?: ChatInteractionOrderByWithRelationInput | ChatInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatInteractions.
     */
    cursor?: ChatInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatInteractions.
     */
    distinct?: ChatInteractionScalarFieldEnum | ChatInteractionScalarFieldEnum[]
  }

  /**
   * ChatInteraction findFirstOrThrow
   */
  export type ChatInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * Filter, which ChatInteraction to fetch.
     */
    where?: ChatInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatInteractions to fetch.
     */
    orderBy?: ChatInteractionOrderByWithRelationInput | ChatInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatInteractions.
     */
    cursor?: ChatInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatInteractions.
     */
    distinct?: ChatInteractionScalarFieldEnum | ChatInteractionScalarFieldEnum[]
  }

  /**
   * ChatInteraction findMany
   */
  export type ChatInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * Filter, which ChatInteractions to fetch.
     */
    where?: ChatInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatInteractions to fetch.
     */
    orderBy?: ChatInteractionOrderByWithRelationInput | ChatInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatInteractions.
     */
    cursor?: ChatInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatInteractions.
     */
    skip?: number
    distinct?: ChatInteractionScalarFieldEnum | ChatInteractionScalarFieldEnum[]
  }

  /**
   * ChatInteraction create
   */
  export type ChatInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatInteraction.
     */
    data: XOR<ChatInteractionCreateInput, ChatInteractionUncheckedCreateInput>
  }

  /**
   * ChatInteraction createMany
   */
  export type ChatInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatInteractions.
     */
    data: ChatInteractionCreateManyInput | ChatInteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatInteraction createManyAndReturn
   */
  export type ChatInteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatInteractions.
     */
    data: ChatInteractionCreateManyInput | ChatInteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatInteraction update
   */
  export type ChatInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatInteraction.
     */
    data: XOR<ChatInteractionUpdateInput, ChatInteractionUncheckedUpdateInput>
    /**
     * Choose, which ChatInteraction to update.
     */
    where: ChatInteractionWhereUniqueInput
  }

  /**
   * ChatInteraction updateMany
   */
  export type ChatInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatInteractions.
     */
    data: XOR<ChatInteractionUpdateManyMutationInput, ChatInteractionUncheckedUpdateManyInput>
    /**
     * Filter which ChatInteractions to update
     */
    where?: ChatInteractionWhereInput
    /**
     * Limit how many ChatInteractions to update.
     */
    limit?: number
  }

  /**
   * ChatInteraction updateManyAndReturn
   */
  export type ChatInteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * The data used to update ChatInteractions.
     */
    data: XOR<ChatInteractionUpdateManyMutationInput, ChatInteractionUncheckedUpdateManyInput>
    /**
     * Filter which ChatInteractions to update
     */
    where?: ChatInteractionWhereInput
    /**
     * Limit how many ChatInteractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatInteraction upsert
   */
  export type ChatInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatInteraction to update in case it exists.
     */
    where: ChatInteractionWhereUniqueInput
    /**
     * In case the ChatInteraction found by the `where` argument doesn't exist, create a new ChatInteraction with this data.
     */
    create: XOR<ChatInteractionCreateInput, ChatInteractionUncheckedCreateInput>
    /**
     * In case the ChatInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatInteractionUpdateInput, ChatInteractionUncheckedUpdateInput>
  }

  /**
   * ChatInteraction delete
   */
  export type ChatInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    /**
     * Filter which ChatInteraction to delete.
     */
    where: ChatInteractionWhereUniqueInput
  }

  /**
   * ChatInteraction deleteMany
   */
  export type ChatInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatInteractions to delete
     */
    where?: ChatInteractionWhereInput
    /**
     * Limit how many ChatInteractions to delete.
     */
    limit?: number
  }

  /**
   * ChatInteraction.recommendedCars
   */
  export type ChatInteraction$recommendedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    where?: CarWhereInput
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    cursor?: CarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * ChatInteraction without action
   */
  export type ChatInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
  }


  /**
   * Model MaintenancePrediction
   */

  export type AggregateMaintenancePrediction = {
    _count: MaintenancePredictionCountAggregateOutputType | null
    _avg: MaintenancePredictionAvgAggregateOutputType | null
    _sum: MaintenancePredictionSumAggregateOutputType | null
    _min: MaintenancePredictionMinAggregateOutputType | null
    _max: MaintenancePredictionMaxAggregateOutputType | null
  }

  export type MaintenancePredictionAvgAggregateOutputType = {
    totalMaintenanceCost: number | null
  }

  export type MaintenancePredictionSumAggregateOutputType = {
    totalMaintenanceCost: number | null
  }

  export type MaintenancePredictionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    totalMaintenanceCost: number | null
    createdAt: Date | null
  }

  export type MaintenancePredictionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    totalMaintenanceCost: number | null
    createdAt: Date | null
  }

  export type MaintenancePredictionCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    nextServices: number
    partsReplacement: number
    totalMaintenanceCost: number
    maintenanceSchedule: number
    createdAt: number
    _all: number
  }


  export type MaintenancePredictionAvgAggregateInputType = {
    totalMaintenanceCost?: true
  }

  export type MaintenancePredictionSumAggregateInputType = {
    totalMaintenanceCost?: true
  }

  export type MaintenancePredictionMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    totalMaintenanceCost?: true
    createdAt?: true
  }

  export type MaintenancePredictionMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    totalMaintenanceCost?: true
    createdAt?: true
  }

  export type MaintenancePredictionCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    nextServices?: true
    partsReplacement?: true
    totalMaintenanceCost?: true
    maintenanceSchedule?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenancePredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenancePrediction to aggregate.
     */
    where?: MaintenancePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenancePredictions to fetch.
     */
    orderBy?: MaintenancePredictionOrderByWithRelationInput | MaintenancePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenancePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenancePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenancePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenancePredictions
    **/
    _count?: true | MaintenancePredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenancePredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenancePredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenancePredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenancePredictionMaxAggregateInputType
  }

  export type GetMaintenancePredictionAggregateType<T extends MaintenancePredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenancePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenancePrediction[P]>
      : GetScalarType<T[P], AggregateMaintenancePrediction[P]>
  }




  export type MaintenancePredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenancePredictionWhereInput
    orderBy?: MaintenancePredictionOrderByWithAggregationInput | MaintenancePredictionOrderByWithAggregationInput[]
    by: MaintenancePredictionScalarFieldEnum[] | MaintenancePredictionScalarFieldEnum
    having?: MaintenancePredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenancePredictionCountAggregateInputType | true
    _avg?: MaintenancePredictionAvgAggregateInputType
    _sum?: MaintenancePredictionSumAggregateInputType
    _min?: MaintenancePredictionMinAggregateInputType
    _max?: MaintenancePredictionMaxAggregateInputType
  }

  export type MaintenancePredictionGroupByOutputType = {
    id: string
    userId: string
    carId: string
    nextServices: JsonValue
    partsReplacement: JsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonValue
    createdAt: Date
    _count: MaintenancePredictionCountAggregateOutputType | null
    _avg: MaintenancePredictionAvgAggregateOutputType | null
    _sum: MaintenancePredictionSumAggregateOutputType | null
    _min: MaintenancePredictionMinAggregateOutputType | null
    _max: MaintenancePredictionMaxAggregateOutputType | null
  }

  type GetMaintenancePredictionGroupByPayload<T extends MaintenancePredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenancePredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenancePredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenancePredictionGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenancePredictionGroupByOutputType[P]>
        }
      >
    >


  export type MaintenancePredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    nextServices?: boolean
    partsReplacement?: boolean
    totalMaintenanceCost?: boolean
    maintenanceSchedule?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenancePrediction"]>

  export type MaintenancePredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    nextServices?: boolean
    partsReplacement?: boolean
    totalMaintenanceCost?: boolean
    maintenanceSchedule?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenancePrediction"]>

  export type MaintenancePredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    nextServices?: boolean
    partsReplacement?: boolean
    totalMaintenanceCost?: boolean
    maintenanceSchedule?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenancePrediction"]>

  export type MaintenancePredictionSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    nextServices?: boolean
    partsReplacement?: boolean
    totalMaintenanceCost?: boolean
    maintenanceSchedule?: boolean
    createdAt?: boolean
  }

  export type MaintenancePredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "nextServices" | "partsReplacement" | "totalMaintenanceCost" | "maintenanceSchedule" | "createdAt", ExtArgs["result"]["maintenancePrediction"]>
  export type MaintenancePredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type MaintenancePredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type MaintenancePredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $MaintenancePredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenancePrediction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carId: string
      nextServices: Prisma.JsonValue
      partsReplacement: Prisma.JsonValue
      totalMaintenanceCost: number
      maintenanceSchedule: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["maintenancePrediction"]>
    composites: {}
  }

  type MaintenancePredictionGetPayload<S extends boolean | null | undefined | MaintenancePredictionDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePredictionPayload, S>

  type MaintenancePredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenancePredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenancePredictionCountAggregateInputType | true
    }

  export interface MaintenancePredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenancePrediction'], meta: { name: 'MaintenancePrediction' } }
    /**
     * Find zero or one MaintenancePrediction that matches the filter.
     * @param {MaintenancePredictionFindUniqueArgs} args - Arguments to find a MaintenancePrediction
     * @example
     * // Get one MaintenancePrediction
     * const maintenancePrediction = await prisma.maintenancePrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenancePredictionFindUniqueArgs>(args: SelectSubset<T, MaintenancePredictionFindUniqueArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenancePrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenancePredictionFindUniqueOrThrowArgs} args - Arguments to find a MaintenancePrediction
     * @example
     * // Get one MaintenancePrediction
     * const maintenancePrediction = await prisma.maintenancePrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenancePredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenancePredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenancePrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionFindFirstArgs} args - Arguments to find a MaintenancePrediction
     * @example
     * // Get one MaintenancePrediction
     * const maintenancePrediction = await prisma.maintenancePrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenancePredictionFindFirstArgs>(args?: SelectSubset<T, MaintenancePredictionFindFirstArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenancePrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionFindFirstOrThrowArgs} args - Arguments to find a MaintenancePrediction
     * @example
     * // Get one MaintenancePrediction
     * const maintenancePrediction = await prisma.maintenancePrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenancePredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenancePredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenancePredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenancePredictions
     * const maintenancePredictions = await prisma.maintenancePrediction.findMany()
     * 
     * // Get first 10 MaintenancePredictions
     * const maintenancePredictions = await prisma.maintenancePrediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenancePredictionWithIdOnly = await prisma.maintenancePrediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenancePredictionFindManyArgs>(args?: SelectSubset<T, MaintenancePredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenancePrediction.
     * @param {MaintenancePredictionCreateArgs} args - Arguments to create a MaintenancePrediction.
     * @example
     * // Create one MaintenancePrediction
     * const MaintenancePrediction = await prisma.maintenancePrediction.create({
     *   data: {
     *     // ... data to create a MaintenancePrediction
     *   }
     * })
     * 
     */
    create<T extends MaintenancePredictionCreateArgs>(args: SelectSubset<T, MaintenancePredictionCreateArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenancePredictions.
     * @param {MaintenancePredictionCreateManyArgs} args - Arguments to create many MaintenancePredictions.
     * @example
     * // Create many MaintenancePredictions
     * const maintenancePrediction = await prisma.maintenancePrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenancePredictionCreateManyArgs>(args?: SelectSubset<T, MaintenancePredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenancePredictions and returns the data saved in the database.
     * @param {MaintenancePredictionCreateManyAndReturnArgs} args - Arguments to create many MaintenancePredictions.
     * @example
     * // Create many MaintenancePredictions
     * const maintenancePrediction = await prisma.maintenancePrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenancePredictions and only return the `id`
     * const maintenancePredictionWithIdOnly = await prisma.maintenancePrediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenancePredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenancePredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenancePrediction.
     * @param {MaintenancePredictionDeleteArgs} args - Arguments to delete one MaintenancePrediction.
     * @example
     * // Delete one MaintenancePrediction
     * const MaintenancePrediction = await prisma.maintenancePrediction.delete({
     *   where: {
     *     // ... filter to delete one MaintenancePrediction
     *   }
     * })
     * 
     */
    delete<T extends MaintenancePredictionDeleteArgs>(args: SelectSubset<T, MaintenancePredictionDeleteArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenancePrediction.
     * @param {MaintenancePredictionUpdateArgs} args - Arguments to update one MaintenancePrediction.
     * @example
     * // Update one MaintenancePrediction
     * const maintenancePrediction = await prisma.maintenancePrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenancePredictionUpdateArgs>(args: SelectSubset<T, MaintenancePredictionUpdateArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenancePredictions.
     * @param {MaintenancePredictionDeleteManyArgs} args - Arguments to filter MaintenancePredictions to delete.
     * @example
     * // Delete a few MaintenancePredictions
     * const { count } = await prisma.maintenancePrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenancePredictionDeleteManyArgs>(args?: SelectSubset<T, MaintenancePredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenancePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenancePredictions
     * const maintenancePrediction = await prisma.maintenancePrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenancePredictionUpdateManyArgs>(args: SelectSubset<T, MaintenancePredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenancePredictions and returns the data updated in the database.
     * @param {MaintenancePredictionUpdateManyAndReturnArgs} args - Arguments to update many MaintenancePredictions.
     * @example
     * // Update many MaintenancePredictions
     * const maintenancePrediction = await prisma.maintenancePrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenancePredictions and only return the `id`
     * const maintenancePredictionWithIdOnly = await prisma.maintenancePrediction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenancePredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenancePredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenancePrediction.
     * @param {MaintenancePredictionUpsertArgs} args - Arguments to update or create a MaintenancePrediction.
     * @example
     * // Update or create a MaintenancePrediction
     * const maintenancePrediction = await prisma.maintenancePrediction.upsert({
     *   create: {
     *     // ... data to create a MaintenancePrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenancePrediction we want to update
     *   }
     * })
     */
    upsert<T extends MaintenancePredictionUpsertArgs>(args: SelectSubset<T, MaintenancePredictionUpsertArgs<ExtArgs>>): Prisma__MaintenancePredictionClient<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenancePredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionCountArgs} args - Arguments to filter MaintenancePredictions to count.
     * @example
     * // Count the number of MaintenancePredictions
     * const count = await prisma.maintenancePrediction.count({
     *   where: {
     *     // ... the filter for the MaintenancePredictions we want to count
     *   }
     * })
    **/
    count<T extends MaintenancePredictionCountArgs>(
      args?: Subset<T, MaintenancePredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenancePredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenancePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenancePredictionAggregateArgs>(args: Subset<T, MaintenancePredictionAggregateArgs>): Prisma.PrismaPromise<GetMaintenancePredictionAggregateType<T>>

    /**
     * Group by MaintenancePrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenancePredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenancePredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenancePredictionGroupByArgs['orderBy'] }
        : { orderBy?: MaintenancePredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenancePredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenancePredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenancePrediction model
   */
  readonly fields: MaintenancePredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenancePrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenancePredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenancePrediction model
   */
  interface MaintenancePredictionFieldRefs {
    readonly id: FieldRef<"MaintenancePrediction", 'String'>
    readonly userId: FieldRef<"MaintenancePrediction", 'String'>
    readonly carId: FieldRef<"MaintenancePrediction", 'String'>
    readonly nextServices: FieldRef<"MaintenancePrediction", 'Json'>
    readonly partsReplacement: FieldRef<"MaintenancePrediction", 'Json'>
    readonly totalMaintenanceCost: FieldRef<"MaintenancePrediction", 'Float'>
    readonly maintenanceSchedule: FieldRef<"MaintenancePrediction", 'Json'>
    readonly createdAt: FieldRef<"MaintenancePrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenancePrediction findUnique
   */
  export type MaintenancePredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * Filter, which MaintenancePrediction to fetch.
     */
    where: MaintenancePredictionWhereUniqueInput
  }

  /**
   * MaintenancePrediction findUniqueOrThrow
   */
  export type MaintenancePredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * Filter, which MaintenancePrediction to fetch.
     */
    where: MaintenancePredictionWhereUniqueInput
  }

  /**
   * MaintenancePrediction findFirst
   */
  export type MaintenancePredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * Filter, which MaintenancePrediction to fetch.
     */
    where?: MaintenancePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenancePredictions to fetch.
     */
    orderBy?: MaintenancePredictionOrderByWithRelationInput | MaintenancePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenancePredictions.
     */
    cursor?: MaintenancePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenancePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenancePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenancePredictions.
     */
    distinct?: MaintenancePredictionScalarFieldEnum | MaintenancePredictionScalarFieldEnum[]
  }

  /**
   * MaintenancePrediction findFirstOrThrow
   */
  export type MaintenancePredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * Filter, which MaintenancePrediction to fetch.
     */
    where?: MaintenancePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenancePredictions to fetch.
     */
    orderBy?: MaintenancePredictionOrderByWithRelationInput | MaintenancePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenancePredictions.
     */
    cursor?: MaintenancePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenancePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenancePredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenancePredictions.
     */
    distinct?: MaintenancePredictionScalarFieldEnum | MaintenancePredictionScalarFieldEnum[]
  }

  /**
   * MaintenancePrediction findMany
   */
  export type MaintenancePredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * Filter, which MaintenancePredictions to fetch.
     */
    where?: MaintenancePredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenancePredictions to fetch.
     */
    orderBy?: MaintenancePredictionOrderByWithRelationInput | MaintenancePredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenancePredictions.
     */
    cursor?: MaintenancePredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenancePredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenancePredictions.
     */
    skip?: number
    distinct?: MaintenancePredictionScalarFieldEnum | MaintenancePredictionScalarFieldEnum[]
  }

  /**
   * MaintenancePrediction create
   */
  export type MaintenancePredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenancePrediction.
     */
    data: XOR<MaintenancePredictionCreateInput, MaintenancePredictionUncheckedCreateInput>
  }

  /**
   * MaintenancePrediction createMany
   */
  export type MaintenancePredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenancePredictions.
     */
    data: MaintenancePredictionCreateManyInput | MaintenancePredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenancePrediction createManyAndReturn
   */
  export type MaintenancePredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenancePredictions.
     */
    data: MaintenancePredictionCreateManyInput | MaintenancePredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenancePrediction update
   */
  export type MaintenancePredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenancePrediction.
     */
    data: XOR<MaintenancePredictionUpdateInput, MaintenancePredictionUncheckedUpdateInput>
    /**
     * Choose, which MaintenancePrediction to update.
     */
    where: MaintenancePredictionWhereUniqueInput
  }

  /**
   * MaintenancePrediction updateMany
   */
  export type MaintenancePredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenancePredictions.
     */
    data: XOR<MaintenancePredictionUpdateManyMutationInput, MaintenancePredictionUncheckedUpdateManyInput>
    /**
     * Filter which MaintenancePredictions to update
     */
    where?: MaintenancePredictionWhereInput
    /**
     * Limit how many MaintenancePredictions to update.
     */
    limit?: number
  }

  /**
   * MaintenancePrediction updateManyAndReturn
   */
  export type MaintenancePredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * The data used to update MaintenancePredictions.
     */
    data: XOR<MaintenancePredictionUpdateManyMutationInput, MaintenancePredictionUncheckedUpdateManyInput>
    /**
     * Filter which MaintenancePredictions to update
     */
    where?: MaintenancePredictionWhereInput
    /**
     * Limit how many MaintenancePredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenancePrediction upsert
   */
  export type MaintenancePredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenancePrediction to update in case it exists.
     */
    where: MaintenancePredictionWhereUniqueInput
    /**
     * In case the MaintenancePrediction found by the `where` argument doesn't exist, create a new MaintenancePrediction with this data.
     */
    create: XOR<MaintenancePredictionCreateInput, MaintenancePredictionUncheckedCreateInput>
    /**
     * In case the MaintenancePrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenancePredictionUpdateInput, MaintenancePredictionUncheckedUpdateInput>
  }

  /**
   * MaintenancePrediction delete
   */
  export type MaintenancePredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    /**
     * Filter which MaintenancePrediction to delete.
     */
    where: MaintenancePredictionWhereUniqueInput
  }

  /**
   * MaintenancePrediction deleteMany
   */
  export type MaintenancePredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenancePredictions to delete
     */
    where?: MaintenancePredictionWhereInput
    /**
     * Limit how many MaintenancePredictions to delete.
     */
    limit?: number
  }

  /**
   * MaintenancePrediction without action
   */
  export type MaintenancePredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentalImpact
   */

  export type AggregateEnvironmentalImpact = {
    _count: EnvironmentalImpactCountAggregateOutputType | null
    _min: EnvironmentalImpactMinAggregateOutputType | null
    _max: EnvironmentalImpactMaxAggregateOutputType | null
  }

  export type EnvironmentalImpactMinAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    createdAt: Date | null
  }

  export type EnvironmentalImpactMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    createdAt: Date | null
  }

  export type EnvironmentalImpactCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    carbonFootprint: number
    greenScore: number
    environmentalMetrics: number
    createdAt: number
    _all: number
  }


  export type EnvironmentalImpactMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    createdAt?: true
  }

  export type EnvironmentalImpactMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    createdAt?: true
  }

  export type EnvironmentalImpactCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    carbonFootprint?: true
    greenScore?: true
    environmentalMetrics?: true
    createdAt?: true
    _all?: true
  }

  export type EnvironmentalImpactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentalImpact to aggregate.
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalImpacts to fetch.
     */
    orderBy?: EnvironmentalImpactOrderByWithRelationInput | EnvironmentalImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentalImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentalImpacts
    **/
    _count?: true | EnvironmentalImpactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentalImpactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentalImpactMaxAggregateInputType
  }

  export type GetEnvironmentalImpactAggregateType<T extends EnvironmentalImpactAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentalImpact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentalImpact[P]>
      : GetScalarType<T[P], AggregateEnvironmentalImpact[P]>
  }




  export type EnvironmentalImpactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentalImpactWhereInput
    orderBy?: EnvironmentalImpactOrderByWithAggregationInput | EnvironmentalImpactOrderByWithAggregationInput[]
    by: EnvironmentalImpactScalarFieldEnum[] | EnvironmentalImpactScalarFieldEnum
    having?: EnvironmentalImpactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentalImpactCountAggregateInputType | true
    _min?: EnvironmentalImpactMinAggregateInputType
    _max?: EnvironmentalImpactMaxAggregateInputType
  }

  export type EnvironmentalImpactGroupByOutputType = {
    id: string
    userId: string
    carId: string
    carbonFootprint: JsonValue
    greenScore: JsonValue
    environmentalMetrics: JsonValue
    createdAt: Date
    _count: EnvironmentalImpactCountAggregateOutputType | null
    _min: EnvironmentalImpactMinAggregateOutputType | null
    _max: EnvironmentalImpactMaxAggregateOutputType | null
  }

  type GetEnvironmentalImpactGroupByPayload<T extends EnvironmentalImpactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentalImpactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentalImpactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentalImpactGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentalImpactGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentalImpactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    carbonFootprint?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentalImpact"]>

  export type EnvironmentalImpactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    carbonFootprint?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentalImpact"]>

  export type EnvironmentalImpactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    carbonFootprint?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentalImpact"]>

  export type EnvironmentalImpactSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    carbonFootprint?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    createdAt?: boolean
  }

  export type EnvironmentalImpactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "carbonFootprint" | "greenScore" | "environmentalMetrics" | "createdAt", ExtArgs["result"]["environmentalImpact"]>
  export type EnvironmentalImpactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type EnvironmentalImpactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type EnvironmentalImpactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $EnvironmentalImpactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentalImpact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carId: string
      carbonFootprint: Prisma.JsonValue
      greenScore: Prisma.JsonValue
      environmentalMetrics: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["environmentalImpact"]>
    composites: {}
  }

  type EnvironmentalImpactGetPayload<S extends boolean | null | undefined | EnvironmentalImpactDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentalImpactPayload, S>

  type EnvironmentalImpactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentalImpactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentalImpactCountAggregateInputType | true
    }

  export interface EnvironmentalImpactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentalImpact'], meta: { name: 'EnvironmentalImpact' } }
    /**
     * Find zero or one EnvironmentalImpact that matches the filter.
     * @param {EnvironmentalImpactFindUniqueArgs} args - Arguments to find a EnvironmentalImpact
     * @example
     * // Get one EnvironmentalImpact
     * const environmentalImpact = await prisma.environmentalImpact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentalImpactFindUniqueArgs>(args: SelectSubset<T, EnvironmentalImpactFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnvironmentalImpact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentalImpactFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentalImpact
     * @example
     * // Get one EnvironmentalImpact
     * const environmentalImpact = await prisma.environmentalImpact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentalImpactFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentalImpactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentalImpact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactFindFirstArgs} args - Arguments to find a EnvironmentalImpact
     * @example
     * // Get one EnvironmentalImpact
     * const environmentalImpact = await prisma.environmentalImpact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentalImpactFindFirstArgs>(args?: SelectSubset<T, EnvironmentalImpactFindFirstArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentalImpact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactFindFirstOrThrowArgs} args - Arguments to find a EnvironmentalImpact
     * @example
     * // Get one EnvironmentalImpact
     * const environmentalImpact = await prisma.environmentalImpact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentalImpactFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentalImpactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnvironmentalImpacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentalImpacts
     * const environmentalImpacts = await prisma.environmentalImpact.findMany()
     * 
     * // Get first 10 EnvironmentalImpacts
     * const environmentalImpacts = await prisma.environmentalImpact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentalImpactWithIdOnly = await prisma.environmentalImpact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentalImpactFindManyArgs>(args?: SelectSubset<T, EnvironmentalImpactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnvironmentalImpact.
     * @param {EnvironmentalImpactCreateArgs} args - Arguments to create a EnvironmentalImpact.
     * @example
     * // Create one EnvironmentalImpact
     * const EnvironmentalImpact = await prisma.environmentalImpact.create({
     *   data: {
     *     // ... data to create a EnvironmentalImpact
     *   }
     * })
     * 
     */
    create<T extends EnvironmentalImpactCreateArgs>(args: SelectSubset<T, EnvironmentalImpactCreateArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnvironmentalImpacts.
     * @param {EnvironmentalImpactCreateManyArgs} args - Arguments to create many EnvironmentalImpacts.
     * @example
     * // Create many EnvironmentalImpacts
     * const environmentalImpact = await prisma.environmentalImpact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentalImpactCreateManyArgs>(args?: SelectSubset<T, EnvironmentalImpactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentalImpacts and returns the data saved in the database.
     * @param {EnvironmentalImpactCreateManyAndReturnArgs} args - Arguments to create many EnvironmentalImpacts.
     * @example
     * // Create many EnvironmentalImpacts
     * const environmentalImpact = await prisma.environmentalImpact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentalImpacts and only return the `id`
     * const environmentalImpactWithIdOnly = await prisma.environmentalImpact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentalImpactCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentalImpactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnvironmentalImpact.
     * @param {EnvironmentalImpactDeleteArgs} args - Arguments to delete one EnvironmentalImpact.
     * @example
     * // Delete one EnvironmentalImpact
     * const EnvironmentalImpact = await prisma.environmentalImpact.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentalImpact
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentalImpactDeleteArgs>(args: SelectSubset<T, EnvironmentalImpactDeleteArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnvironmentalImpact.
     * @param {EnvironmentalImpactUpdateArgs} args - Arguments to update one EnvironmentalImpact.
     * @example
     * // Update one EnvironmentalImpact
     * const environmentalImpact = await prisma.environmentalImpact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentalImpactUpdateArgs>(args: SelectSubset<T, EnvironmentalImpactUpdateArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnvironmentalImpacts.
     * @param {EnvironmentalImpactDeleteManyArgs} args - Arguments to filter EnvironmentalImpacts to delete.
     * @example
     * // Delete a few EnvironmentalImpacts
     * const { count } = await prisma.environmentalImpact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentalImpactDeleteManyArgs>(args?: SelectSubset<T, EnvironmentalImpactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentalImpacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentalImpacts
     * const environmentalImpact = await prisma.environmentalImpact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentalImpactUpdateManyArgs>(args: SelectSubset<T, EnvironmentalImpactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentalImpacts and returns the data updated in the database.
     * @param {EnvironmentalImpactUpdateManyAndReturnArgs} args - Arguments to update many EnvironmentalImpacts.
     * @example
     * // Update many EnvironmentalImpacts
     * const environmentalImpact = await prisma.environmentalImpact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnvironmentalImpacts and only return the `id`
     * const environmentalImpactWithIdOnly = await prisma.environmentalImpact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnvironmentalImpactUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentalImpactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnvironmentalImpact.
     * @param {EnvironmentalImpactUpsertArgs} args - Arguments to update or create a EnvironmentalImpact.
     * @example
     * // Update or create a EnvironmentalImpact
     * const environmentalImpact = await prisma.environmentalImpact.upsert({
     *   create: {
     *     // ... data to create a EnvironmentalImpact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentalImpact we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentalImpactUpsertArgs>(args: SelectSubset<T, EnvironmentalImpactUpsertArgs<ExtArgs>>): Prisma__EnvironmentalImpactClient<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnvironmentalImpacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactCountArgs} args - Arguments to filter EnvironmentalImpacts to count.
     * @example
     * // Count the number of EnvironmentalImpacts
     * const count = await prisma.environmentalImpact.count({
     *   where: {
     *     // ... the filter for the EnvironmentalImpacts we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentalImpactCountArgs>(
      args?: Subset<T, EnvironmentalImpactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentalImpactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentalImpact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentalImpactAggregateArgs>(args: Subset<T, EnvironmentalImpactAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentalImpactAggregateType<T>>

    /**
     * Group by EnvironmentalImpact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentalImpactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentalImpactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentalImpactGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentalImpactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentalImpactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentalImpactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentalImpact model
   */
  readonly fields: EnvironmentalImpactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentalImpact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentalImpactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentalImpact model
   */
  interface EnvironmentalImpactFieldRefs {
    readonly id: FieldRef<"EnvironmentalImpact", 'String'>
    readonly userId: FieldRef<"EnvironmentalImpact", 'String'>
    readonly carId: FieldRef<"EnvironmentalImpact", 'String'>
    readonly carbonFootprint: FieldRef<"EnvironmentalImpact", 'Json'>
    readonly greenScore: FieldRef<"EnvironmentalImpact", 'Json'>
    readonly environmentalMetrics: FieldRef<"EnvironmentalImpact", 'Json'>
    readonly createdAt: FieldRef<"EnvironmentalImpact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentalImpact findUnique
   */
  export type EnvironmentalImpactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentalImpact to fetch.
     */
    where: EnvironmentalImpactWhereUniqueInput
  }

  /**
   * EnvironmentalImpact findUniqueOrThrow
   */
  export type EnvironmentalImpactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentalImpact to fetch.
     */
    where: EnvironmentalImpactWhereUniqueInput
  }

  /**
   * EnvironmentalImpact findFirst
   */
  export type EnvironmentalImpactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentalImpact to fetch.
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalImpacts to fetch.
     */
    orderBy?: EnvironmentalImpactOrderByWithRelationInput | EnvironmentalImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentalImpacts.
     */
    cursor?: EnvironmentalImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentalImpacts.
     */
    distinct?: EnvironmentalImpactScalarFieldEnum | EnvironmentalImpactScalarFieldEnum[]
  }

  /**
   * EnvironmentalImpact findFirstOrThrow
   */
  export type EnvironmentalImpactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentalImpact to fetch.
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalImpacts to fetch.
     */
    orderBy?: EnvironmentalImpactOrderByWithRelationInput | EnvironmentalImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentalImpacts.
     */
    cursor?: EnvironmentalImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalImpacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentalImpacts.
     */
    distinct?: EnvironmentalImpactScalarFieldEnum | EnvironmentalImpactScalarFieldEnum[]
  }

  /**
   * EnvironmentalImpact findMany
   */
  export type EnvironmentalImpactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentalImpacts to fetch.
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentalImpacts to fetch.
     */
    orderBy?: EnvironmentalImpactOrderByWithRelationInput | EnvironmentalImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentalImpacts.
     */
    cursor?: EnvironmentalImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentalImpacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentalImpacts.
     */
    skip?: number
    distinct?: EnvironmentalImpactScalarFieldEnum | EnvironmentalImpactScalarFieldEnum[]
  }

  /**
   * EnvironmentalImpact create
   */
  export type EnvironmentalImpactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentalImpact.
     */
    data: XOR<EnvironmentalImpactCreateInput, EnvironmentalImpactUncheckedCreateInput>
  }

  /**
   * EnvironmentalImpact createMany
   */
  export type EnvironmentalImpactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentalImpacts.
     */
    data: EnvironmentalImpactCreateManyInput | EnvironmentalImpactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentalImpact createManyAndReturn
   */
  export type EnvironmentalImpactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * The data used to create many EnvironmentalImpacts.
     */
    data: EnvironmentalImpactCreateManyInput | EnvironmentalImpactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentalImpact update
   */
  export type EnvironmentalImpactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentalImpact.
     */
    data: XOR<EnvironmentalImpactUpdateInput, EnvironmentalImpactUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentalImpact to update.
     */
    where: EnvironmentalImpactWhereUniqueInput
  }

  /**
   * EnvironmentalImpact updateMany
   */
  export type EnvironmentalImpactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentalImpacts.
     */
    data: XOR<EnvironmentalImpactUpdateManyMutationInput, EnvironmentalImpactUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentalImpacts to update
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * Limit how many EnvironmentalImpacts to update.
     */
    limit?: number
  }

  /**
   * EnvironmentalImpact updateManyAndReturn
   */
  export type EnvironmentalImpactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * The data used to update EnvironmentalImpacts.
     */
    data: XOR<EnvironmentalImpactUpdateManyMutationInput, EnvironmentalImpactUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentalImpacts to update
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * Limit how many EnvironmentalImpacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentalImpact upsert
   */
  export type EnvironmentalImpactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentalImpact to update in case it exists.
     */
    where: EnvironmentalImpactWhereUniqueInput
    /**
     * In case the EnvironmentalImpact found by the `where` argument doesn't exist, create a new EnvironmentalImpact with this data.
     */
    create: XOR<EnvironmentalImpactCreateInput, EnvironmentalImpactUncheckedCreateInput>
    /**
     * In case the EnvironmentalImpact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentalImpactUpdateInput, EnvironmentalImpactUncheckedUpdateInput>
  }

  /**
   * EnvironmentalImpact delete
   */
  export type EnvironmentalImpactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentalImpact to delete.
     */
    where: EnvironmentalImpactWhereUniqueInput
  }

  /**
   * EnvironmentalImpact deleteMany
   */
  export type EnvironmentalImpactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentalImpacts to delete
     */
    where?: EnvironmentalImpactWhereInput
    /**
     * Limit how many EnvironmentalImpacts to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentalImpact without action
   */
  export type EnvironmentalImpactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
  }


  /**
   * Model PriceAnalysis
   */

  export type AggregatePriceAnalysis = {
    _count: PriceAnalysisCountAggregateOutputType | null
    _min: PriceAnalysisMinAggregateOutputType | null
    _max: PriceAnalysisMaxAggregateOutputType | null
  }

  export type PriceAnalysisMinAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    createdAt: Date | null
  }

  export type PriceAnalysisMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    createdAt: Date | null
  }

  export type PriceAnalysisCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    marketValue: number
    priceAnalysis: number
    buyingRecommendation: number
    seasonalTrends: number
    createdAt: number
    _all: number
  }


  export type PriceAnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    createdAt?: true
  }

  export type PriceAnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    createdAt?: true
  }

  export type PriceAnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    marketValue?: true
    priceAnalysis?: true
    buyingRecommendation?: true
    seasonalTrends?: true
    createdAt?: true
    _all?: true
  }

  export type PriceAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAnalysis to aggregate.
     */
    where?: PriceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAnalyses to fetch.
     */
    orderBy?: PriceAnalysisOrderByWithRelationInput | PriceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceAnalyses
    **/
    _count?: true | PriceAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceAnalysisMaxAggregateInputType
  }

  export type GetPriceAnalysisAggregateType<T extends PriceAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceAnalysis[P]>
      : GetScalarType<T[P], AggregatePriceAnalysis[P]>
  }




  export type PriceAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceAnalysisWhereInput
    orderBy?: PriceAnalysisOrderByWithAggregationInput | PriceAnalysisOrderByWithAggregationInput[]
    by: PriceAnalysisScalarFieldEnum[] | PriceAnalysisScalarFieldEnum
    having?: PriceAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceAnalysisCountAggregateInputType | true
    _min?: PriceAnalysisMinAggregateInputType
    _max?: PriceAnalysisMaxAggregateInputType
  }

  export type PriceAnalysisGroupByOutputType = {
    id: string
    userId: string
    carId: string
    marketValue: JsonValue
    priceAnalysis: JsonValue
    buyingRecommendation: JsonValue
    seasonalTrends: JsonValue
    createdAt: Date
    _count: PriceAnalysisCountAggregateOutputType | null
    _min: PriceAnalysisMinAggregateOutputType | null
    _max: PriceAnalysisMaxAggregateOutputType | null
  }

  type GetPriceAnalysisGroupByPayload<T extends PriceAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], PriceAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type PriceAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    marketValue?: boolean
    priceAnalysis?: boolean
    buyingRecommendation?: boolean
    seasonalTrends?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAnalysis"]>

  export type PriceAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    marketValue?: boolean
    priceAnalysis?: boolean
    buyingRecommendation?: boolean
    seasonalTrends?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAnalysis"]>

  export type PriceAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    marketValue?: boolean
    priceAnalysis?: boolean
    buyingRecommendation?: boolean
    seasonalTrends?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceAnalysis"]>

  export type PriceAnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    marketValue?: boolean
    priceAnalysis?: boolean
    buyingRecommendation?: boolean
    seasonalTrends?: boolean
    createdAt?: boolean
  }

  export type PriceAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "marketValue" | "priceAnalysis" | "buyingRecommendation" | "seasonalTrends" | "createdAt", ExtArgs["result"]["priceAnalysis"]>
  export type PriceAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type PriceAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type PriceAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $PriceAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carId: string
      marketValue: Prisma.JsonValue
      priceAnalysis: Prisma.JsonValue
      buyingRecommendation: Prisma.JsonValue
      seasonalTrends: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["priceAnalysis"]>
    composites: {}
  }

  type PriceAnalysisGetPayload<S extends boolean | null | undefined | PriceAnalysisDefaultArgs> = $Result.GetResult<Prisma.$PriceAnalysisPayload, S>

  type PriceAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceAnalysisCountAggregateInputType | true
    }

  export interface PriceAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceAnalysis'], meta: { name: 'PriceAnalysis' } }
    /**
     * Find zero or one PriceAnalysis that matches the filter.
     * @param {PriceAnalysisFindUniqueArgs} args - Arguments to find a PriceAnalysis
     * @example
     * // Get one PriceAnalysis
     * const priceAnalysis = await prisma.priceAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceAnalysisFindUniqueArgs>(args: SelectSubset<T, PriceAnalysisFindUniqueArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceAnalysisFindUniqueOrThrowArgs} args - Arguments to find a PriceAnalysis
     * @example
     * // Get one PriceAnalysis
     * const priceAnalysis = await prisma.priceAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisFindFirstArgs} args - Arguments to find a PriceAnalysis
     * @example
     * // Get one PriceAnalysis
     * const priceAnalysis = await prisma.priceAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceAnalysisFindFirstArgs>(args?: SelectSubset<T, PriceAnalysisFindFirstArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisFindFirstOrThrowArgs} args - Arguments to find a PriceAnalysis
     * @example
     * // Get one PriceAnalysis
     * const priceAnalysis = await prisma.priceAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceAnalyses
     * const priceAnalyses = await prisma.priceAnalysis.findMany()
     * 
     * // Get first 10 PriceAnalyses
     * const priceAnalyses = await prisma.priceAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceAnalysisWithIdOnly = await prisma.priceAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceAnalysisFindManyArgs>(args?: SelectSubset<T, PriceAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceAnalysis.
     * @param {PriceAnalysisCreateArgs} args - Arguments to create a PriceAnalysis.
     * @example
     * // Create one PriceAnalysis
     * const PriceAnalysis = await prisma.priceAnalysis.create({
     *   data: {
     *     // ... data to create a PriceAnalysis
     *   }
     * })
     * 
     */
    create<T extends PriceAnalysisCreateArgs>(args: SelectSubset<T, PriceAnalysisCreateArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceAnalyses.
     * @param {PriceAnalysisCreateManyArgs} args - Arguments to create many PriceAnalyses.
     * @example
     * // Create many PriceAnalyses
     * const priceAnalysis = await prisma.priceAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceAnalysisCreateManyArgs>(args?: SelectSubset<T, PriceAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceAnalyses and returns the data saved in the database.
     * @param {PriceAnalysisCreateManyAndReturnArgs} args - Arguments to create many PriceAnalyses.
     * @example
     * // Create many PriceAnalyses
     * const priceAnalysis = await prisma.priceAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceAnalyses and only return the `id`
     * const priceAnalysisWithIdOnly = await prisma.priceAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceAnalysis.
     * @param {PriceAnalysisDeleteArgs} args - Arguments to delete one PriceAnalysis.
     * @example
     * // Delete one PriceAnalysis
     * const PriceAnalysis = await prisma.priceAnalysis.delete({
     *   where: {
     *     // ... filter to delete one PriceAnalysis
     *   }
     * })
     * 
     */
    delete<T extends PriceAnalysisDeleteArgs>(args: SelectSubset<T, PriceAnalysisDeleteArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceAnalysis.
     * @param {PriceAnalysisUpdateArgs} args - Arguments to update one PriceAnalysis.
     * @example
     * // Update one PriceAnalysis
     * const priceAnalysis = await prisma.priceAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceAnalysisUpdateArgs>(args: SelectSubset<T, PriceAnalysisUpdateArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceAnalyses.
     * @param {PriceAnalysisDeleteManyArgs} args - Arguments to filter PriceAnalyses to delete.
     * @example
     * // Delete a few PriceAnalyses
     * const { count } = await prisma.priceAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceAnalysisDeleteManyArgs>(args?: SelectSubset<T, PriceAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceAnalyses
     * const priceAnalysis = await prisma.priceAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceAnalysisUpdateManyArgs>(args: SelectSubset<T, PriceAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceAnalyses and returns the data updated in the database.
     * @param {PriceAnalysisUpdateManyAndReturnArgs} args - Arguments to update many PriceAnalyses.
     * @example
     * // Update many PriceAnalyses
     * const priceAnalysis = await prisma.priceAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceAnalyses and only return the `id`
     * const priceAnalysisWithIdOnly = await prisma.priceAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceAnalysis.
     * @param {PriceAnalysisUpsertArgs} args - Arguments to update or create a PriceAnalysis.
     * @example
     * // Update or create a PriceAnalysis
     * const priceAnalysis = await prisma.priceAnalysis.upsert({
     *   create: {
     *     // ... data to create a PriceAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends PriceAnalysisUpsertArgs>(args: SelectSubset<T, PriceAnalysisUpsertArgs<ExtArgs>>): Prisma__PriceAnalysisClient<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisCountArgs} args - Arguments to filter PriceAnalyses to count.
     * @example
     * // Count the number of PriceAnalyses
     * const count = await prisma.priceAnalysis.count({
     *   where: {
     *     // ... the filter for the PriceAnalyses we want to count
     *   }
     * })
    **/
    count<T extends PriceAnalysisCountArgs>(
      args?: Subset<T, PriceAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAnalysisAggregateArgs>(args: Subset<T, PriceAnalysisAggregateArgs>): Prisma.PrismaPromise<GetPriceAnalysisAggregateType<T>>

    /**
     * Group by PriceAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: PriceAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceAnalysis model
   */
  readonly fields: PriceAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceAnalysis model
   */
  interface PriceAnalysisFieldRefs {
    readonly id: FieldRef<"PriceAnalysis", 'String'>
    readonly userId: FieldRef<"PriceAnalysis", 'String'>
    readonly carId: FieldRef<"PriceAnalysis", 'String'>
    readonly marketValue: FieldRef<"PriceAnalysis", 'Json'>
    readonly priceAnalysis: FieldRef<"PriceAnalysis", 'Json'>
    readonly buyingRecommendation: FieldRef<"PriceAnalysis", 'Json'>
    readonly seasonalTrends: FieldRef<"PriceAnalysis", 'Json'>
    readonly createdAt: FieldRef<"PriceAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceAnalysis findUnique
   */
  export type PriceAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PriceAnalysis to fetch.
     */
    where: PriceAnalysisWhereUniqueInput
  }

  /**
   * PriceAnalysis findUniqueOrThrow
   */
  export type PriceAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PriceAnalysis to fetch.
     */
    where: PriceAnalysisWhereUniqueInput
  }

  /**
   * PriceAnalysis findFirst
   */
  export type PriceAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PriceAnalysis to fetch.
     */
    where?: PriceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAnalyses to fetch.
     */
    orderBy?: PriceAnalysisOrderByWithRelationInput | PriceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAnalyses.
     */
    cursor?: PriceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAnalyses.
     */
    distinct?: PriceAnalysisScalarFieldEnum | PriceAnalysisScalarFieldEnum[]
  }

  /**
   * PriceAnalysis findFirstOrThrow
   */
  export type PriceAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PriceAnalysis to fetch.
     */
    where?: PriceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAnalyses to fetch.
     */
    orderBy?: PriceAnalysisOrderByWithRelationInput | PriceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceAnalyses.
     */
    cursor?: PriceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceAnalyses.
     */
    distinct?: PriceAnalysisScalarFieldEnum | PriceAnalysisScalarFieldEnum[]
  }

  /**
   * PriceAnalysis findMany
   */
  export type PriceAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which PriceAnalyses to fetch.
     */
    where?: PriceAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceAnalyses to fetch.
     */
    orderBy?: PriceAnalysisOrderByWithRelationInput | PriceAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceAnalyses.
     */
    cursor?: PriceAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceAnalyses.
     */
    skip?: number
    distinct?: PriceAnalysisScalarFieldEnum | PriceAnalysisScalarFieldEnum[]
  }

  /**
   * PriceAnalysis create
   */
  export type PriceAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceAnalysis.
     */
    data: XOR<PriceAnalysisCreateInput, PriceAnalysisUncheckedCreateInput>
  }

  /**
   * PriceAnalysis createMany
   */
  export type PriceAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceAnalyses.
     */
    data: PriceAnalysisCreateManyInput | PriceAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceAnalysis createManyAndReturn
   */
  export type PriceAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many PriceAnalyses.
     */
    data: PriceAnalysisCreateManyInput | PriceAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAnalysis update
   */
  export type PriceAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceAnalysis.
     */
    data: XOR<PriceAnalysisUpdateInput, PriceAnalysisUncheckedUpdateInput>
    /**
     * Choose, which PriceAnalysis to update.
     */
    where: PriceAnalysisWhereUniqueInput
  }

  /**
   * PriceAnalysis updateMany
   */
  export type PriceAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceAnalyses.
     */
    data: XOR<PriceAnalysisUpdateManyMutationInput, PriceAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which PriceAnalyses to update
     */
    where?: PriceAnalysisWhereInput
    /**
     * Limit how many PriceAnalyses to update.
     */
    limit?: number
  }

  /**
   * PriceAnalysis updateManyAndReturn
   */
  export type PriceAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update PriceAnalyses.
     */
    data: XOR<PriceAnalysisUpdateManyMutationInput, PriceAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which PriceAnalyses to update
     */
    where?: PriceAnalysisWhereInput
    /**
     * Limit how many PriceAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceAnalysis upsert
   */
  export type PriceAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceAnalysis to update in case it exists.
     */
    where: PriceAnalysisWhereUniqueInput
    /**
     * In case the PriceAnalysis found by the `where` argument doesn't exist, create a new PriceAnalysis with this data.
     */
    create: XOR<PriceAnalysisCreateInput, PriceAnalysisUncheckedCreateInput>
    /**
     * In case the PriceAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceAnalysisUpdateInput, PriceAnalysisUncheckedUpdateInput>
  }

  /**
   * PriceAnalysis delete
   */
  export type PriceAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    /**
     * Filter which PriceAnalysis to delete.
     */
    where: PriceAnalysisWhereUniqueInput
  }

  /**
   * PriceAnalysis deleteMany
   */
  export type PriceAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceAnalyses to delete
     */
    where?: PriceAnalysisWhereInput
    /**
     * Limit how many PriceAnalyses to delete.
     */
    limit?: number
  }

  /**
   * PriceAnalysis without action
   */
  export type PriceAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Comparison
   */

  export type AggregateComparison = {
    _count: ComparisonCountAggregateOutputType | null
    _min: ComparisonMinAggregateOutputType | null
    _max: ComparisonMaxAggregateOutputType | null
  }

  export type ComparisonMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ComparisonMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ComparisonCountAggregateOutputType = {
    id: number
    userId: number
    carIds: number
    comparisonData: number
    createdAt: number
    _all: number
  }


  export type ComparisonMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type ComparisonMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type ComparisonCountAggregateInputType = {
    id?: true
    userId?: true
    carIds?: true
    comparisonData?: true
    createdAt?: true
    _all?: true
  }

  export type ComparisonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comparison to aggregate.
     */
    where?: ComparisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comparisons to fetch.
     */
    orderBy?: ComparisonOrderByWithRelationInput | ComparisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComparisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comparisons
    **/
    _count?: true | ComparisonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComparisonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComparisonMaxAggregateInputType
  }

  export type GetComparisonAggregateType<T extends ComparisonAggregateArgs> = {
        [P in keyof T & keyof AggregateComparison]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComparison[P]>
      : GetScalarType<T[P], AggregateComparison[P]>
  }




  export type ComparisonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComparisonWhereInput
    orderBy?: ComparisonOrderByWithAggregationInput | ComparisonOrderByWithAggregationInput[]
    by: ComparisonScalarFieldEnum[] | ComparisonScalarFieldEnum
    having?: ComparisonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComparisonCountAggregateInputType | true
    _min?: ComparisonMinAggregateInputType
    _max?: ComparisonMaxAggregateInputType
  }

  export type ComparisonGroupByOutputType = {
    id: string
    userId: string
    carIds: string[]
    comparisonData: JsonValue
    createdAt: Date
    _count: ComparisonCountAggregateOutputType | null
    _min: ComparisonMinAggregateOutputType | null
    _max: ComparisonMaxAggregateOutputType | null
  }

  type GetComparisonGroupByPayload<T extends ComparisonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComparisonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComparisonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComparisonGroupByOutputType[P]>
            : GetScalarType<T[P], ComparisonGroupByOutputType[P]>
        }
      >
    >


  export type ComparisonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carIds?: boolean
    comparisonData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comparison"]>

  export type ComparisonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carIds?: boolean
    comparisonData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comparison"]>

  export type ComparisonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carIds?: boolean
    comparisonData?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comparison"]>

  export type ComparisonSelectScalar = {
    id?: boolean
    userId?: boolean
    carIds?: boolean
    comparisonData?: boolean
    createdAt?: boolean
  }

  export type ComparisonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carIds" | "comparisonData" | "createdAt", ExtArgs["result"]["comparison"]>
  export type ComparisonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ComparisonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ComparisonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ComparisonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comparison"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carIds: string[]
      comparisonData: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["comparison"]>
    composites: {}
  }

  type ComparisonGetPayload<S extends boolean | null | undefined | ComparisonDefaultArgs> = $Result.GetResult<Prisma.$ComparisonPayload, S>

  type ComparisonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComparisonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComparisonCountAggregateInputType | true
    }

  export interface ComparisonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comparison'], meta: { name: 'Comparison' } }
    /**
     * Find zero or one Comparison that matches the filter.
     * @param {ComparisonFindUniqueArgs} args - Arguments to find a Comparison
     * @example
     * // Get one Comparison
     * const comparison = await prisma.comparison.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComparisonFindUniqueArgs>(args: SelectSubset<T, ComparisonFindUniqueArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comparison that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComparisonFindUniqueOrThrowArgs} args - Arguments to find a Comparison
     * @example
     * // Get one Comparison
     * const comparison = await prisma.comparison.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComparisonFindUniqueOrThrowArgs>(args: SelectSubset<T, ComparisonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comparison that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonFindFirstArgs} args - Arguments to find a Comparison
     * @example
     * // Get one Comparison
     * const comparison = await prisma.comparison.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComparisonFindFirstArgs>(args?: SelectSubset<T, ComparisonFindFirstArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comparison that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonFindFirstOrThrowArgs} args - Arguments to find a Comparison
     * @example
     * // Get one Comparison
     * const comparison = await prisma.comparison.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComparisonFindFirstOrThrowArgs>(args?: SelectSubset<T, ComparisonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comparisons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comparisons
     * const comparisons = await prisma.comparison.findMany()
     * 
     * // Get first 10 Comparisons
     * const comparisons = await prisma.comparison.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const comparisonWithIdOnly = await prisma.comparison.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComparisonFindManyArgs>(args?: SelectSubset<T, ComparisonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comparison.
     * @param {ComparisonCreateArgs} args - Arguments to create a Comparison.
     * @example
     * // Create one Comparison
     * const Comparison = await prisma.comparison.create({
     *   data: {
     *     // ... data to create a Comparison
     *   }
     * })
     * 
     */
    create<T extends ComparisonCreateArgs>(args: SelectSubset<T, ComparisonCreateArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comparisons.
     * @param {ComparisonCreateManyArgs} args - Arguments to create many Comparisons.
     * @example
     * // Create many Comparisons
     * const comparison = await prisma.comparison.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComparisonCreateManyArgs>(args?: SelectSubset<T, ComparisonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comparisons and returns the data saved in the database.
     * @param {ComparisonCreateManyAndReturnArgs} args - Arguments to create many Comparisons.
     * @example
     * // Create many Comparisons
     * const comparison = await prisma.comparison.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comparisons and only return the `id`
     * const comparisonWithIdOnly = await prisma.comparison.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComparisonCreateManyAndReturnArgs>(args?: SelectSubset<T, ComparisonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comparison.
     * @param {ComparisonDeleteArgs} args - Arguments to delete one Comparison.
     * @example
     * // Delete one Comparison
     * const Comparison = await prisma.comparison.delete({
     *   where: {
     *     // ... filter to delete one Comparison
     *   }
     * })
     * 
     */
    delete<T extends ComparisonDeleteArgs>(args: SelectSubset<T, ComparisonDeleteArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comparison.
     * @param {ComparisonUpdateArgs} args - Arguments to update one Comparison.
     * @example
     * // Update one Comparison
     * const comparison = await prisma.comparison.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComparisonUpdateArgs>(args: SelectSubset<T, ComparisonUpdateArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comparisons.
     * @param {ComparisonDeleteManyArgs} args - Arguments to filter Comparisons to delete.
     * @example
     * // Delete a few Comparisons
     * const { count } = await prisma.comparison.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComparisonDeleteManyArgs>(args?: SelectSubset<T, ComparisonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comparisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comparisons
     * const comparison = await prisma.comparison.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComparisonUpdateManyArgs>(args: SelectSubset<T, ComparisonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comparisons and returns the data updated in the database.
     * @param {ComparisonUpdateManyAndReturnArgs} args - Arguments to update many Comparisons.
     * @example
     * // Update many Comparisons
     * const comparison = await prisma.comparison.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comparisons and only return the `id`
     * const comparisonWithIdOnly = await prisma.comparison.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComparisonUpdateManyAndReturnArgs>(args: SelectSubset<T, ComparisonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comparison.
     * @param {ComparisonUpsertArgs} args - Arguments to update or create a Comparison.
     * @example
     * // Update or create a Comparison
     * const comparison = await prisma.comparison.upsert({
     *   create: {
     *     // ... data to create a Comparison
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comparison we want to update
     *   }
     * })
     */
    upsert<T extends ComparisonUpsertArgs>(args: SelectSubset<T, ComparisonUpsertArgs<ExtArgs>>): Prisma__ComparisonClient<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comparisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonCountArgs} args - Arguments to filter Comparisons to count.
     * @example
     * // Count the number of Comparisons
     * const count = await prisma.comparison.count({
     *   where: {
     *     // ... the filter for the Comparisons we want to count
     *   }
     * })
    **/
    count<T extends ComparisonCountArgs>(
      args?: Subset<T, ComparisonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComparisonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comparison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComparisonAggregateArgs>(args: Subset<T, ComparisonAggregateArgs>): Prisma.PrismaPromise<GetComparisonAggregateType<T>>

    /**
     * Group by Comparison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComparisonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComparisonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComparisonGroupByArgs['orderBy'] }
        : { orderBy?: ComparisonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComparisonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComparisonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comparison model
   */
  readonly fields: ComparisonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comparison.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComparisonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comparison model
   */
  interface ComparisonFieldRefs {
    readonly id: FieldRef<"Comparison", 'String'>
    readonly userId: FieldRef<"Comparison", 'String'>
    readonly carIds: FieldRef<"Comparison", 'String[]'>
    readonly comparisonData: FieldRef<"Comparison", 'Json'>
    readonly createdAt: FieldRef<"Comparison", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comparison findUnique
   */
  export type ComparisonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * Filter, which Comparison to fetch.
     */
    where: ComparisonWhereUniqueInput
  }

  /**
   * Comparison findUniqueOrThrow
   */
  export type ComparisonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * Filter, which Comparison to fetch.
     */
    where: ComparisonWhereUniqueInput
  }

  /**
   * Comparison findFirst
   */
  export type ComparisonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * Filter, which Comparison to fetch.
     */
    where?: ComparisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comparisons to fetch.
     */
    orderBy?: ComparisonOrderByWithRelationInput | ComparisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comparisons.
     */
    cursor?: ComparisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comparisons.
     */
    distinct?: ComparisonScalarFieldEnum | ComparisonScalarFieldEnum[]
  }

  /**
   * Comparison findFirstOrThrow
   */
  export type ComparisonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * Filter, which Comparison to fetch.
     */
    where?: ComparisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comparisons to fetch.
     */
    orderBy?: ComparisonOrderByWithRelationInput | ComparisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comparisons.
     */
    cursor?: ComparisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comparisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comparisons.
     */
    distinct?: ComparisonScalarFieldEnum | ComparisonScalarFieldEnum[]
  }

  /**
   * Comparison findMany
   */
  export type ComparisonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * Filter, which Comparisons to fetch.
     */
    where?: ComparisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comparisons to fetch.
     */
    orderBy?: ComparisonOrderByWithRelationInput | ComparisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comparisons.
     */
    cursor?: ComparisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comparisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comparisons.
     */
    skip?: number
    distinct?: ComparisonScalarFieldEnum | ComparisonScalarFieldEnum[]
  }

  /**
   * Comparison create
   */
  export type ComparisonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * The data needed to create a Comparison.
     */
    data: XOR<ComparisonCreateInput, ComparisonUncheckedCreateInput>
  }

  /**
   * Comparison createMany
   */
  export type ComparisonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comparisons.
     */
    data: ComparisonCreateManyInput | ComparisonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comparison createManyAndReturn
   */
  export type ComparisonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * The data used to create many Comparisons.
     */
    data: ComparisonCreateManyInput | ComparisonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comparison update
   */
  export type ComparisonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * The data needed to update a Comparison.
     */
    data: XOR<ComparisonUpdateInput, ComparisonUncheckedUpdateInput>
    /**
     * Choose, which Comparison to update.
     */
    where: ComparisonWhereUniqueInput
  }

  /**
   * Comparison updateMany
   */
  export type ComparisonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comparisons.
     */
    data: XOR<ComparisonUpdateManyMutationInput, ComparisonUncheckedUpdateManyInput>
    /**
     * Filter which Comparisons to update
     */
    where?: ComparisonWhereInput
    /**
     * Limit how many Comparisons to update.
     */
    limit?: number
  }

  /**
   * Comparison updateManyAndReturn
   */
  export type ComparisonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * The data used to update Comparisons.
     */
    data: XOR<ComparisonUpdateManyMutationInput, ComparisonUncheckedUpdateManyInput>
    /**
     * Filter which Comparisons to update
     */
    where?: ComparisonWhereInput
    /**
     * Limit how many Comparisons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comparison upsert
   */
  export type ComparisonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * The filter to search for the Comparison to update in case it exists.
     */
    where: ComparisonWhereUniqueInput
    /**
     * In case the Comparison found by the `where` argument doesn't exist, create a new Comparison with this data.
     */
    create: XOR<ComparisonCreateInput, ComparisonUncheckedCreateInput>
    /**
     * In case the Comparison was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComparisonUpdateInput, ComparisonUncheckedUpdateInput>
  }

  /**
   * Comparison delete
   */
  export type ComparisonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    /**
     * Filter which Comparison to delete.
     */
    where: ComparisonWhereUniqueInput
  }

  /**
   * Comparison deleteMany
   */
  export type ComparisonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comparisons to delete
     */
    where?: ComparisonWhereInput
    /**
     * Limit how many Comparisons to delete.
     */
    limit?: number
  }

  /**
   * Comparison without action
   */
  export type ComparisonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    phone: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    savedCars?: boolean | User$savedCarsArgs<ExtArgs>
    testDrives?: boolean | User$testDrivesArgs<ExtArgs>
    chatInteractions?: boolean | User$chatInteractionsArgs<ExtArgs>
    maintenancePredictions?: boolean | User$maintenancePredictionsArgs<ExtArgs>
    environmentalImpacts?: boolean | User$environmentalImpactsArgs<ExtArgs>
    priceAnalyses?: boolean | User$priceAnalysesArgs<ExtArgs>
    comparisons?: boolean | User$comparisonsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "name" | "imageUrl" | "phone" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedCars?: boolean | User$savedCarsArgs<ExtArgs>
    testDrives?: boolean | User$testDrivesArgs<ExtArgs>
    chatInteractions?: boolean | User$chatInteractionsArgs<ExtArgs>
    maintenancePredictions?: boolean | User$maintenancePredictionsArgs<ExtArgs>
    environmentalImpacts?: boolean | User$environmentalImpactsArgs<ExtArgs>
    priceAnalyses?: boolean | User$priceAnalysesArgs<ExtArgs>
    comparisons?: boolean | User$comparisonsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedCars: Prisma.$UserSavedCarPayload<ExtArgs>[]
      testDrives: Prisma.$TestDriveBookingPayload<ExtArgs>[]
      chatInteractions: Prisma.$ChatInteractionPayload<ExtArgs>[]
      maintenancePredictions: Prisma.$MaintenancePredictionPayload<ExtArgs>[]
      environmentalImpacts: Prisma.$EnvironmentalImpactPayload<ExtArgs>[]
      priceAnalyses: Prisma.$PriceAnalysisPayload<ExtArgs>[]
      comparisons: Prisma.$ComparisonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedCars<T extends User$savedCarsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedCarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testDrives<T extends User$testDrivesArgs<ExtArgs> = {}>(args?: Subset<T, User$testDrivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatInteractions<T extends User$chatInteractionsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatInteractionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenancePredictions<T extends User$maintenancePredictionsArgs<ExtArgs> = {}>(args?: Subset<T, User$maintenancePredictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    environmentalImpacts<T extends User$environmentalImpactsArgs<ExtArgs> = {}>(args?: Subset<T, User$environmentalImpactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceAnalyses<T extends User$priceAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, User$priceAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comparisons<T extends User$comparisonsArgs<ExtArgs> = {}>(args?: Subset<T, User$comparisonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComparisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.savedCars
   */
  export type User$savedCarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    where?: UserSavedCarWhereInput
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    cursor?: UserSavedCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * User.testDrives
   */
  export type User$testDrivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    where?: TestDriveBookingWhereInput
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    cursor?: TestDriveBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * User.chatInteractions
   */
  export type User$chatInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    where?: ChatInteractionWhereInput
    orderBy?: ChatInteractionOrderByWithRelationInput | ChatInteractionOrderByWithRelationInput[]
    cursor?: ChatInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatInteractionScalarFieldEnum | ChatInteractionScalarFieldEnum[]
  }

  /**
   * User.maintenancePredictions
   */
  export type User$maintenancePredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    where?: MaintenancePredictionWhereInput
    orderBy?: MaintenancePredictionOrderByWithRelationInput | MaintenancePredictionOrderByWithRelationInput[]
    cursor?: MaintenancePredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenancePredictionScalarFieldEnum | MaintenancePredictionScalarFieldEnum[]
  }

  /**
   * User.environmentalImpacts
   */
  export type User$environmentalImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    where?: EnvironmentalImpactWhereInput
    orderBy?: EnvironmentalImpactOrderByWithRelationInput | EnvironmentalImpactOrderByWithRelationInput[]
    cursor?: EnvironmentalImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentalImpactScalarFieldEnum | EnvironmentalImpactScalarFieldEnum[]
  }

  /**
   * User.priceAnalyses
   */
  export type User$priceAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    where?: PriceAnalysisWhereInput
    orderBy?: PriceAnalysisOrderByWithRelationInput | PriceAnalysisOrderByWithRelationInput[]
    cursor?: PriceAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAnalysisScalarFieldEnum | PriceAnalysisScalarFieldEnum[]
  }

  /**
   * User.comparisons
   */
  export type User$comparisonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comparison
     */
    select?: ComparisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comparison
     */
    omit?: ComparisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComparisonInclude<ExtArgs> | null
    where?: ComparisonWhereInput
    orderBy?: ComparisonOrderByWithRelationInput | ComparisonOrderByWithRelationInput[]
    cursor?: ComparisonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComparisonScalarFieldEnum | ComparisonScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  export type CarAvgAggregateOutputType = {
    year: number | null
    price: Decimal | null
    mileage: number | null
    seats: number | null
    greenScore: number | null
  }

  export type CarSumAggregateOutputType = {
    year: number | null
    price: Decimal | null
    mileage: number | null
    seats: number | null
    greenScore: number | null
  }

  export type CarMinAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: Decimal | null
    mileage: number | null
    color: string | null
    fuelType: string | null
    transmission: string | null
    bodyType: string | null
    seats: number | null
    description: string | null
    status: $Enums.CarStatus | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    greenScore: number | null
  }

  export type CarMaxAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: Decimal | null
    mileage: number | null
    color: string | null
    fuelType: string | null
    transmission: string | null
    bodyType: string | null
    seats: number | null
    description: string | null
    status: $Enums.CarStatus | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    greenScore: number | null
  }

  export type CarCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    price: number
    mileage: number
    color: number
    fuelType: number
    transmission: number
    bodyType: number
    seats: number
    description: number
    status: number
    featured: number
    images: number
    createdAt: number
    updatedAt: number
    greenScore: number
    environmentalMetrics: number
    priceHistory: number
    _all: number
  }


  export type CarAvgAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seats?: true
    greenScore?: true
  }

  export type CarSumAggregateInputType = {
    year?: true
    price?: true
    mileage?: true
    seats?: true
    greenScore?: true
  }

  export type CarMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuelType?: true
    transmission?: true
    bodyType?: true
    seats?: true
    description?: true
    status?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    greenScore?: true
  }

  export type CarMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuelType?: true
    transmission?: true
    bodyType?: true
    seats?: true
    description?: true
    status?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    greenScore?: true
  }

  export type CarCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    mileage?: true
    color?: true
    fuelType?: true
    transmission?: true
    bodyType?: true
    seats?: true
    description?: true
    status?: true
    featured?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    greenScore?: true
    environmentalMetrics?: true
    priceHistory?: true
    _all?: true
  }

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cars
    **/
    _count?: true | CarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarMaxAggregateInputType
  }

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
        [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>
  }




  export type CarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarWhereInput
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[]
    by: CarScalarFieldEnum[] | CarScalarFieldEnum
    having?: CarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarCountAggregateInputType | true
    _avg?: CarAvgAggregateInputType
    _sum?: CarSumAggregateInputType
    _min?: CarMinAggregateInputType
    _max?: CarMaxAggregateInputType
  }

  export type CarGroupByOutputType = {
    id: string
    make: string
    model: string
    year: number
    price: Decimal
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats: number | null
    description: string
    status: $Enums.CarStatus
    featured: boolean
    images: string[]
    createdAt: Date
    updatedAt: Date
    greenScore: number | null
    environmentalMetrics: JsonValue | null
    priceHistory: JsonValue | null
    _count: CarCountAggregateOutputType | null
    _avg: CarAvgAggregateOutputType | null
    _sum: CarSumAggregateOutputType | null
    _min: CarMinAggregateOutputType | null
    _max: CarMaxAggregateOutputType | null
  }

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarGroupByOutputType[P]>
            : GetScalarType<T[P], CarGroupByOutputType[P]>
        }
      >
    >


  export type CarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    transmission?: boolean
    bodyType?: boolean
    seats?: boolean
    description?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    priceHistory?: boolean
    savedBy?: boolean | Car$savedByArgs<ExtArgs>
    testDriveBookings?: boolean | Car$testDriveBookingsArgs<ExtArgs>
    chatRecommendations?: boolean | Car$chatRecommendationsArgs<ExtArgs>
    maintenancePredictions?: boolean | Car$maintenancePredictionsArgs<ExtArgs>
    environmentalImpacts?: boolean | Car$environmentalImpactsArgs<ExtArgs>
    priceAnalyses?: boolean | Car$priceAnalysesArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["car"]>

  export type CarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    transmission?: boolean
    bodyType?: boolean
    seats?: boolean
    description?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    priceHistory?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    transmission?: boolean
    bodyType?: boolean
    seats?: boolean
    description?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    priceHistory?: boolean
  }, ExtArgs["result"]["car"]>

  export type CarSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    mileage?: boolean
    color?: boolean
    fuelType?: boolean
    transmission?: boolean
    bodyType?: boolean
    seats?: boolean
    description?: boolean
    status?: boolean
    featured?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    greenScore?: boolean
    environmentalMetrics?: boolean
    priceHistory?: boolean
  }

  export type CarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "make" | "model" | "year" | "price" | "mileage" | "color" | "fuelType" | "transmission" | "bodyType" | "seats" | "description" | "status" | "featured" | "images" | "createdAt" | "updatedAt" | "greenScore" | "environmentalMetrics" | "priceHistory", ExtArgs["result"]["car"]>
  export type CarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | Car$savedByArgs<ExtArgs>
    testDriveBookings?: boolean | Car$testDriveBookingsArgs<ExtArgs>
    chatRecommendations?: boolean | Car$chatRecommendationsArgs<ExtArgs>
    maintenancePredictions?: boolean | Car$maintenancePredictionsArgs<ExtArgs>
    environmentalImpacts?: boolean | Car$environmentalImpactsArgs<ExtArgs>
    priceAnalyses?: boolean | Car$priceAnalysesArgs<ExtArgs>
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Car"
    objects: {
      savedBy: Prisma.$UserSavedCarPayload<ExtArgs>[]
      testDriveBookings: Prisma.$TestDriveBookingPayload<ExtArgs>[]
      chatRecommendations: Prisma.$ChatInteractionPayload<ExtArgs>[]
      maintenancePredictions: Prisma.$MaintenancePredictionPayload<ExtArgs>[]
      environmentalImpacts: Prisma.$EnvironmentalImpactPayload<ExtArgs>[]
      priceAnalyses: Prisma.$PriceAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      make: string
      model: string
      year: number
      price: Prisma.Decimal
      mileage: number
      color: string
      fuelType: string
      transmission: string
      bodyType: string
      seats: number | null
      description: string
      status: $Enums.CarStatus
      featured: boolean
      images: string[]
      createdAt: Date
      updatedAt: Date
      greenScore: number | null
      environmentalMetrics: Prisma.JsonValue | null
      priceHistory: Prisma.JsonValue | null
    }, ExtArgs["result"]["car"]>
    composites: {}
  }

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = $Result.GetResult<Prisma.$CarPayload, S>

  type CarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarCountAggregateInputType | true
    }

  export interface CarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Car'], meta: { name: 'Car' } }
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     * 
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarFindManyArgs>(args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     * 
     */
    create<T extends CarCreateArgs>(args: SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarCreateManyArgs>(args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     * 
     */
    delete<T extends CarDeleteArgs>(args: SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarUpdateArgs>(args: SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarDeleteManyArgs>(args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarUpdateManyArgs>(args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(args: SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
    **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarAggregateArgs>(args: Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs['orderBy'] }
        : { orderBy?: CarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Car model
   */
  readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedBy<T extends Car$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Car$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testDriveBookings<T extends Car$testDriveBookingsArgs<ExtArgs> = {}>(args?: Subset<T, Car$testDriveBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRecommendations<T extends Car$chatRecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Car$chatRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenancePredictions<T extends Car$maintenancePredictionsArgs<ExtArgs> = {}>(args?: Subset<T, Car$maintenancePredictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    environmentalImpacts<T extends Car$environmentalImpactsArgs<ExtArgs> = {}>(args?: Subset<T, Car$environmentalImpactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentalImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceAnalyses<T extends Car$priceAnalysesArgs<ExtArgs> = {}>(args?: Subset<T, Car$priceAnalysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", 'String'>
    readonly make: FieldRef<"Car", 'String'>
    readonly model: FieldRef<"Car", 'String'>
    readonly year: FieldRef<"Car", 'Int'>
    readonly price: FieldRef<"Car", 'Decimal'>
    readonly mileage: FieldRef<"Car", 'Int'>
    readonly color: FieldRef<"Car", 'String'>
    readonly fuelType: FieldRef<"Car", 'String'>
    readonly transmission: FieldRef<"Car", 'String'>
    readonly bodyType: FieldRef<"Car", 'String'>
    readonly seats: FieldRef<"Car", 'Int'>
    readonly description: FieldRef<"Car", 'String'>
    readonly status: FieldRef<"Car", 'CarStatus'>
    readonly featured: FieldRef<"Car", 'Boolean'>
    readonly images: FieldRef<"Car", 'String[]'>
    readonly createdAt: FieldRef<"Car", 'DateTime'>
    readonly updatedAt: FieldRef<"Car", 'DateTime'>
    readonly greenScore: FieldRef<"Car", 'Float'>
    readonly environmentalMetrics: FieldRef<"Car", 'Json'>
    readonly priceHistory: FieldRef<"Car", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car findMany
   */
  export type CarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cars.
     */
    skip?: number
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[]
  }

  /**
   * Car create
   */
  export type CarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>
  }

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Car update
   */
  export type CarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to update.
     */
    limit?: number
  }

  /**
   * Car upsert
   */
  export type CarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>
  }

  /**
   * Car delete
   */
  export type CarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput
  }

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput
    /**
     * Limit how many Cars to delete.
     */
    limit?: number
  }

  /**
   * Car.savedBy
   */
  export type Car$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    where?: UserSavedCarWhereInput
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    cursor?: UserSavedCarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * Car.testDriveBookings
   */
  export type Car$testDriveBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    where?: TestDriveBookingWhereInput
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    cursor?: TestDriveBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * Car.chatRecommendations
   */
  export type Car$chatRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatInteraction
     */
    select?: ChatInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatInteraction
     */
    omit?: ChatInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInteractionInclude<ExtArgs> | null
    where?: ChatInteractionWhereInput
    orderBy?: ChatInteractionOrderByWithRelationInput | ChatInteractionOrderByWithRelationInput[]
    cursor?: ChatInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatInteractionScalarFieldEnum | ChatInteractionScalarFieldEnum[]
  }

  /**
   * Car.maintenancePredictions
   */
  export type Car$maintenancePredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenancePrediction
     */
    select?: MaintenancePredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenancePrediction
     */
    omit?: MaintenancePredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenancePredictionInclude<ExtArgs> | null
    where?: MaintenancePredictionWhereInput
    orderBy?: MaintenancePredictionOrderByWithRelationInput | MaintenancePredictionOrderByWithRelationInput[]
    cursor?: MaintenancePredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenancePredictionScalarFieldEnum | MaintenancePredictionScalarFieldEnum[]
  }

  /**
   * Car.environmentalImpacts
   */
  export type Car$environmentalImpactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentalImpact
     */
    select?: EnvironmentalImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentalImpact
     */
    omit?: EnvironmentalImpactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentalImpactInclude<ExtArgs> | null
    where?: EnvironmentalImpactWhereInput
    orderBy?: EnvironmentalImpactOrderByWithRelationInput | EnvironmentalImpactOrderByWithRelationInput[]
    cursor?: EnvironmentalImpactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentalImpactScalarFieldEnum | EnvironmentalImpactScalarFieldEnum[]
  }

  /**
   * Car.priceAnalyses
   */
  export type Car$priceAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceAnalysis
     */
    select?: PriceAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceAnalysis
     */
    omit?: PriceAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceAnalysisInclude<ExtArgs> | null
    where?: PriceAnalysisWhereInput
    orderBy?: PriceAnalysisOrderByWithRelationInput | PriceAnalysisOrderByWithRelationInput[]
    cursor?: PriceAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceAnalysisScalarFieldEnum | PriceAnalysisScalarFieldEnum[]
  }

  /**
   * Car without action
   */
  export type CarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null
  }


  /**
   * Model DealershipInfo
   */

  export type AggregateDealershipInfo = {
    _count: DealershipInfoCountAggregateOutputType | null
    _min: DealershipInfoMinAggregateOutputType | null
    _max: DealershipInfoMaxAggregateOutputType | null
  }

  export type DealershipInfoMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealershipInfoMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealershipInfoCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DealershipInfoMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealershipInfoMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealershipInfoCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DealershipInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealershipInfo to aggregate.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealershipInfos
    **/
    _count?: true | DealershipInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealershipInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealershipInfoMaxAggregateInputType
  }

  export type GetDealershipInfoAggregateType<T extends DealershipInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateDealershipInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealershipInfo[P]>
      : GetScalarType<T[P], AggregateDealershipInfo[P]>
  }




  export type DealershipInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealershipInfoWhereInput
    orderBy?: DealershipInfoOrderByWithAggregationInput | DealershipInfoOrderByWithAggregationInput[]
    by: DealershipInfoScalarFieldEnum[] | DealershipInfoScalarFieldEnum
    having?: DealershipInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealershipInfoCountAggregateInputType | true
    _min?: DealershipInfoMinAggregateInputType
    _max?: DealershipInfoMaxAggregateInputType
  }

  export type DealershipInfoGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: DealershipInfoCountAggregateOutputType | null
    _min: DealershipInfoMinAggregateOutputType | null
    _max: DealershipInfoMaxAggregateOutputType | null
  }

  type GetDealershipInfoGroupByPayload<T extends DealershipInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealershipInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealershipInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealershipInfoGroupByOutputType[P]>
            : GetScalarType<T[P], DealershipInfoGroupByOutputType[P]>
        }
      >
    >


  export type DealershipInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workingHours?: boolean | DealershipInfo$workingHoursArgs<ExtArgs>
    _count?: boolean | DealershipInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealershipInfo"]>

  export type DealershipInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dealershipInfo"]>

  export type DealershipInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dealershipInfo"]>

  export type DealershipInfoSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DealershipInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["dealershipInfo"]>
  export type DealershipInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workingHours?: boolean | DealershipInfo$workingHoursArgs<ExtArgs>
    _count?: boolean | DealershipInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealershipInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DealershipInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DealershipInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealershipInfo"
    objects: {
      workingHours: Prisma.$WorkingHourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dealershipInfo"]>
    composites: {}
  }

  type DealershipInfoGetPayload<S extends boolean | null | undefined | DealershipInfoDefaultArgs> = $Result.GetResult<Prisma.$DealershipInfoPayload, S>

  type DealershipInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DealershipInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DealershipInfoCountAggregateInputType | true
    }

  export interface DealershipInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealershipInfo'], meta: { name: 'DealershipInfo' } }
    /**
     * Find zero or one DealershipInfo that matches the filter.
     * @param {DealershipInfoFindUniqueArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealershipInfoFindUniqueArgs>(args: SelectSubset<T, DealershipInfoFindUniqueArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DealershipInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DealershipInfoFindUniqueOrThrowArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealershipInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, DealershipInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealershipInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoFindFirstArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealershipInfoFindFirstArgs>(args?: SelectSubset<T, DealershipInfoFindFirstArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DealershipInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoFindFirstOrThrowArgs} args - Arguments to find a DealershipInfo
     * @example
     * // Get one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealershipInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, DealershipInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DealershipInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealershipInfos
     * const dealershipInfos = await prisma.dealershipInfo.findMany()
     * 
     * // Get first 10 DealershipInfos
     * const dealershipInfos = await prisma.dealershipInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealershipInfoWithIdOnly = await prisma.dealershipInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealershipInfoFindManyArgs>(args?: SelectSubset<T, DealershipInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DealershipInfo.
     * @param {DealershipInfoCreateArgs} args - Arguments to create a DealershipInfo.
     * @example
     * // Create one DealershipInfo
     * const DealershipInfo = await prisma.dealershipInfo.create({
     *   data: {
     *     // ... data to create a DealershipInfo
     *   }
     * })
     * 
     */
    create<T extends DealershipInfoCreateArgs>(args: SelectSubset<T, DealershipInfoCreateArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DealershipInfos.
     * @param {DealershipInfoCreateManyArgs} args - Arguments to create many DealershipInfos.
     * @example
     * // Create many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealershipInfoCreateManyArgs>(args?: SelectSubset<T, DealershipInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealershipInfos and returns the data saved in the database.
     * @param {DealershipInfoCreateManyAndReturnArgs} args - Arguments to create many DealershipInfos.
     * @example
     * // Create many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealershipInfos and only return the `id`
     * const dealershipInfoWithIdOnly = await prisma.dealershipInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealershipInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, DealershipInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DealershipInfo.
     * @param {DealershipInfoDeleteArgs} args - Arguments to delete one DealershipInfo.
     * @example
     * // Delete one DealershipInfo
     * const DealershipInfo = await prisma.dealershipInfo.delete({
     *   where: {
     *     // ... filter to delete one DealershipInfo
     *   }
     * })
     * 
     */
    delete<T extends DealershipInfoDeleteArgs>(args: SelectSubset<T, DealershipInfoDeleteArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DealershipInfo.
     * @param {DealershipInfoUpdateArgs} args - Arguments to update one DealershipInfo.
     * @example
     * // Update one DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealershipInfoUpdateArgs>(args: SelectSubset<T, DealershipInfoUpdateArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DealershipInfos.
     * @param {DealershipInfoDeleteManyArgs} args - Arguments to filter DealershipInfos to delete.
     * @example
     * // Delete a few DealershipInfos
     * const { count } = await prisma.dealershipInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealershipInfoDeleteManyArgs>(args?: SelectSubset<T, DealershipInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealershipInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealershipInfoUpdateManyArgs>(args: SelectSubset<T, DealershipInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealershipInfos and returns the data updated in the database.
     * @param {DealershipInfoUpdateManyAndReturnArgs} args - Arguments to update many DealershipInfos.
     * @example
     * // Update many DealershipInfos
     * const dealershipInfo = await prisma.dealershipInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DealershipInfos and only return the `id`
     * const dealershipInfoWithIdOnly = await prisma.dealershipInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DealershipInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, DealershipInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DealershipInfo.
     * @param {DealershipInfoUpsertArgs} args - Arguments to update or create a DealershipInfo.
     * @example
     * // Update or create a DealershipInfo
     * const dealershipInfo = await prisma.dealershipInfo.upsert({
     *   create: {
     *     // ... data to create a DealershipInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealershipInfo we want to update
     *   }
     * })
     */
    upsert<T extends DealershipInfoUpsertArgs>(args: SelectSubset<T, DealershipInfoUpsertArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DealershipInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoCountArgs} args - Arguments to filter DealershipInfos to count.
     * @example
     * // Count the number of DealershipInfos
     * const count = await prisma.dealershipInfo.count({
     *   where: {
     *     // ... the filter for the DealershipInfos we want to count
     *   }
     * })
    **/
    count<T extends DealershipInfoCountArgs>(
      args?: Subset<T, DealershipInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealershipInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealershipInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealershipInfoAggregateArgs>(args: Subset<T, DealershipInfoAggregateArgs>): Prisma.PrismaPromise<GetDealershipInfoAggregateType<T>>

    /**
     * Group by DealershipInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealershipInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealershipInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealershipInfoGroupByArgs['orderBy'] }
        : { orderBy?: DealershipInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealershipInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealershipInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealershipInfo model
   */
  readonly fields: DealershipInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealershipInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealershipInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workingHours<T extends DealershipInfo$workingHoursArgs<ExtArgs> = {}>(args?: Subset<T, DealershipInfo$workingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DealershipInfo model
   */
  interface DealershipInfoFieldRefs {
    readonly id: FieldRef<"DealershipInfo", 'String'>
    readonly name: FieldRef<"DealershipInfo", 'String'>
    readonly address: FieldRef<"DealershipInfo", 'String'>
    readonly phone: FieldRef<"DealershipInfo", 'String'>
    readonly email: FieldRef<"DealershipInfo", 'String'>
    readonly createdAt: FieldRef<"DealershipInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"DealershipInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DealershipInfo findUnique
   */
  export type DealershipInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo findUniqueOrThrow
   */
  export type DealershipInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo findFirst
   */
  export type DealershipInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealershipInfos.
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealershipInfos.
     */
    distinct?: DealershipInfoScalarFieldEnum | DealershipInfoScalarFieldEnum[]
  }

  /**
   * DealershipInfo findFirstOrThrow
   */
  export type DealershipInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfo to fetch.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealershipInfos.
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealershipInfos.
     */
    distinct?: DealershipInfoScalarFieldEnum | DealershipInfoScalarFieldEnum[]
  }

  /**
   * DealershipInfo findMany
   */
  export type DealershipInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter, which DealershipInfos to fetch.
     */
    where?: DealershipInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealershipInfos to fetch.
     */
    orderBy?: DealershipInfoOrderByWithRelationInput | DealershipInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealershipInfos.
     */
    cursor?: DealershipInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealershipInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealershipInfos.
     */
    skip?: number
    distinct?: DealershipInfoScalarFieldEnum | DealershipInfoScalarFieldEnum[]
  }

  /**
   * DealershipInfo create
   */
  export type DealershipInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a DealershipInfo.
     */
    data: XOR<DealershipInfoCreateInput, DealershipInfoUncheckedCreateInput>
  }

  /**
   * DealershipInfo createMany
   */
  export type DealershipInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealershipInfos.
     */
    data: DealershipInfoCreateManyInput | DealershipInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealershipInfo createManyAndReturn
   */
  export type DealershipInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * The data used to create many DealershipInfos.
     */
    data: DealershipInfoCreateManyInput | DealershipInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealershipInfo update
   */
  export type DealershipInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a DealershipInfo.
     */
    data: XOR<DealershipInfoUpdateInput, DealershipInfoUncheckedUpdateInput>
    /**
     * Choose, which DealershipInfo to update.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo updateMany
   */
  export type DealershipInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealershipInfos.
     */
    data: XOR<DealershipInfoUpdateManyMutationInput, DealershipInfoUncheckedUpdateManyInput>
    /**
     * Filter which DealershipInfos to update
     */
    where?: DealershipInfoWhereInput
    /**
     * Limit how many DealershipInfos to update.
     */
    limit?: number
  }

  /**
   * DealershipInfo updateManyAndReturn
   */
  export type DealershipInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * The data used to update DealershipInfos.
     */
    data: XOR<DealershipInfoUpdateManyMutationInput, DealershipInfoUncheckedUpdateManyInput>
    /**
     * Filter which DealershipInfos to update
     */
    where?: DealershipInfoWhereInput
    /**
     * Limit how many DealershipInfos to update.
     */
    limit?: number
  }

  /**
   * DealershipInfo upsert
   */
  export type DealershipInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the DealershipInfo to update in case it exists.
     */
    where: DealershipInfoWhereUniqueInput
    /**
     * In case the DealershipInfo found by the `where` argument doesn't exist, create a new DealershipInfo with this data.
     */
    create: XOR<DealershipInfoCreateInput, DealershipInfoUncheckedCreateInput>
    /**
     * In case the DealershipInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealershipInfoUpdateInput, DealershipInfoUncheckedUpdateInput>
  }

  /**
   * DealershipInfo delete
   */
  export type DealershipInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
    /**
     * Filter which DealershipInfo to delete.
     */
    where: DealershipInfoWhereUniqueInput
  }

  /**
   * DealershipInfo deleteMany
   */
  export type DealershipInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealershipInfos to delete
     */
    where?: DealershipInfoWhereInput
    /**
     * Limit how many DealershipInfos to delete.
     */
    limit?: number
  }

  /**
   * DealershipInfo.workingHours
   */
  export type DealershipInfo$workingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    where?: WorkingHourWhereInput
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[]
    cursor?: WorkingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[]
  }

  /**
   * DealershipInfo without action
   */
  export type DealershipInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealershipInfo
     */
    select?: DealershipInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DealershipInfo
     */
    omit?: DealershipInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealershipInfoInclude<ExtArgs> | null
  }


  /**
   * Model WorkingHour
   */

  export type AggregateWorkingHour = {
    _count: WorkingHourCountAggregateOutputType | null
    _min: WorkingHourMinAggregateOutputType | null
    _max: WorkingHourMaxAggregateOutputType | null
  }

  export type WorkingHourMinAggregateOutputType = {
    id: string | null
    dealershipId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isOpen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingHourMaxAggregateOutputType = {
    id: string | null
    dealershipId: string | null
    dayOfWeek: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isOpen: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkingHourCountAggregateOutputType = {
    id: number
    dealershipId: number
    dayOfWeek: number
    openTime: number
    closeTime: number
    isOpen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkingHourMinAggregateInputType = {
    id?: true
    dealershipId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkingHourMaxAggregateInputType = {
    id?: true
    dealershipId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkingHourCountAggregateInputType = {
    id?: true
    dealershipId?: true
    dayOfWeek?: true
    openTime?: true
    closeTime?: true
    isOpen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkingHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHour to aggregate.
     */
    where?: WorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkingHours
    **/
    _count?: true | WorkingHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkingHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkingHourMaxAggregateInputType
  }

  export type GetWorkingHourAggregateType<T extends WorkingHourAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkingHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkingHour[P]>
      : GetScalarType<T[P], AggregateWorkingHour[P]>
  }




  export type WorkingHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkingHourWhereInput
    orderBy?: WorkingHourOrderByWithAggregationInput | WorkingHourOrderByWithAggregationInput[]
    by: WorkingHourScalarFieldEnum[] | WorkingHourScalarFieldEnum
    having?: WorkingHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkingHourCountAggregateInputType | true
    _min?: WorkingHourMinAggregateInputType
    _max?: WorkingHourMaxAggregateInputType
  }

  export type WorkingHourGroupByOutputType = {
    id: string
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen: boolean
    createdAt: Date
    updatedAt: Date
    _count: WorkingHourCountAggregateOutputType | null
    _min: WorkingHourMinAggregateOutputType | null
    _max: WorkingHourMaxAggregateOutputType | null
  }

  type GetWorkingHourGroupByPayload<T extends WorkingHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkingHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkingHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkingHourGroupByOutputType[P]>
            : GetScalarType<T[P], WorkingHourGroupByOutputType[P]>
        }
      >
    >


  export type WorkingHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHour"]>

  export type WorkingHourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHour"]>

  export type WorkingHourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workingHour"]>

  export type WorkingHourSelectScalar = {
    id?: boolean
    dealershipId?: boolean
    dayOfWeek?: boolean
    openTime?: boolean
    closeTime?: boolean
    isOpen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkingHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dealershipId" | "dayOfWeek" | "openTime" | "closeTime" | "isOpen" | "createdAt" | "updatedAt", ExtArgs["result"]["workingHour"]>
  export type WorkingHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }
  export type WorkingHourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }
  export type WorkingHourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dealership?: boolean | DealershipInfoDefaultArgs<ExtArgs>
  }

  export type $WorkingHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkingHour"
    objects: {
      dealership: Prisma.$DealershipInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dealershipId: string
      dayOfWeek: $Enums.DayOfWeek
      openTime: string
      closeTime: string
      isOpen: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workingHour"]>
    composites: {}
  }

  type WorkingHourGetPayload<S extends boolean | null | undefined | WorkingHourDefaultArgs> = $Result.GetResult<Prisma.$WorkingHourPayload, S>

  type WorkingHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkingHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkingHourCountAggregateInputType | true
    }

  export interface WorkingHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkingHour'], meta: { name: 'WorkingHour' } }
    /**
     * Find zero or one WorkingHour that matches the filter.
     * @param {WorkingHourFindUniqueArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkingHourFindUniqueArgs>(args: SelectSubset<T, WorkingHourFindUniqueArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkingHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkingHourFindUniqueOrThrowArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkingHourFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkingHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourFindFirstArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkingHourFindFirstArgs>(args?: SelectSubset<T, WorkingHourFindFirstArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkingHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourFindFirstOrThrowArgs} args - Arguments to find a WorkingHour
     * @example
     * // Get one WorkingHour
     * const workingHour = await prisma.workingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkingHourFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkingHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkingHours
     * const workingHours = await prisma.workingHour.findMany()
     * 
     * // Get first 10 WorkingHours
     * const workingHours = await prisma.workingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workingHourWithIdOnly = await prisma.workingHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkingHourFindManyArgs>(args?: SelectSubset<T, WorkingHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkingHour.
     * @param {WorkingHourCreateArgs} args - Arguments to create a WorkingHour.
     * @example
     * // Create one WorkingHour
     * const WorkingHour = await prisma.workingHour.create({
     *   data: {
     *     // ... data to create a WorkingHour
     *   }
     * })
     * 
     */
    create<T extends WorkingHourCreateArgs>(args: SelectSubset<T, WorkingHourCreateArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkingHours.
     * @param {WorkingHourCreateManyArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHour = await prisma.workingHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkingHourCreateManyArgs>(args?: SelectSubset<T, WorkingHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkingHours and returns the data saved in the database.
     * @param {WorkingHourCreateManyAndReturnArgs} args - Arguments to create many WorkingHours.
     * @example
     * // Create many WorkingHours
     * const workingHour = await prisma.workingHour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkingHours and only return the `id`
     * const workingHourWithIdOnly = await prisma.workingHour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkingHourCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkingHourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkingHour.
     * @param {WorkingHourDeleteArgs} args - Arguments to delete one WorkingHour.
     * @example
     * // Delete one WorkingHour
     * const WorkingHour = await prisma.workingHour.delete({
     *   where: {
     *     // ... filter to delete one WorkingHour
     *   }
     * })
     * 
     */
    delete<T extends WorkingHourDeleteArgs>(args: SelectSubset<T, WorkingHourDeleteArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkingHour.
     * @param {WorkingHourUpdateArgs} args - Arguments to update one WorkingHour.
     * @example
     * // Update one WorkingHour
     * const workingHour = await prisma.workingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkingHourUpdateArgs>(args: SelectSubset<T, WorkingHourUpdateArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkingHours.
     * @param {WorkingHourDeleteManyArgs} args - Arguments to filter WorkingHours to delete.
     * @example
     * // Delete a few WorkingHours
     * const { count } = await prisma.workingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkingHourDeleteManyArgs>(args?: SelectSubset<T, WorkingHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkingHours
     * const workingHour = await prisma.workingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkingHourUpdateManyArgs>(args: SelectSubset<T, WorkingHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkingHours and returns the data updated in the database.
     * @param {WorkingHourUpdateManyAndReturnArgs} args - Arguments to update many WorkingHours.
     * @example
     * // Update many WorkingHours
     * const workingHour = await prisma.workingHour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkingHours and only return the `id`
     * const workingHourWithIdOnly = await prisma.workingHour.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkingHourUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkingHourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkingHour.
     * @param {WorkingHourUpsertArgs} args - Arguments to update or create a WorkingHour.
     * @example
     * // Update or create a WorkingHour
     * const workingHour = await prisma.workingHour.upsert({
     *   create: {
     *     // ... data to create a WorkingHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkingHour we want to update
     *   }
     * })
     */
    upsert<T extends WorkingHourUpsertArgs>(args: SelectSubset<T, WorkingHourUpsertArgs<ExtArgs>>): Prisma__WorkingHourClient<$Result.GetResult<Prisma.$WorkingHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourCountArgs} args - Arguments to filter WorkingHours to count.
     * @example
     * // Count the number of WorkingHours
     * const count = await prisma.workingHour.count({
     *   where: {
     *     // ... the filter for the WorkingHours we want to count
     *   }
     * })
    **/
    count<T extends WorkingHourCountArgs>(
      args?: Subset<T, WorkingHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkingHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkingHourAggregateArgs>(args: Subset<T, WorkingHourAggregateArgs>): Prisma.PrismaPromise<GetWorkingHourAggregateType<T>>

    /**
     * Group by WorkingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkingHourGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkingHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkingHourGroupByArgs['orderBy'] }
        : { orderBy?: WorkingHourGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkingHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkingHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkingHour model
   */
  readonly fields: WorkingHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkingHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkingHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dealership<T extends DealershipInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealershipInfoDefaultArgs<ExtArgs>>): Prisma__DealershipInfoClient<$Result.GetResult<Prisma.$DealershipInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkingHour model
   */
  interface WorkingHourFieldRefs {
    readonly id: FieldRef<"WorkingHour", 'String'>
    readonly dealershipId: FieldRef<"WorkingHour", 'String'>
    readonly dayOfWeek: FieldRef<"WorkingHour", 'DayOfWeek'>
    readonly openTime: FieldRef<"WorkingHour", 'String'>
    readonly closeTime: FieldRef<"WorkingHour", 'String'>
    readonly isOpen: FieldRef<"WorkingHour", 'Boolean'>
    readonly createdAt: FieldRef<"WorkingHour", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkingHour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkingHour findUnique
   */
  export type WorkingHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour findUniqueOrThrow
   */
  export type WorkingHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour findFirst
   */
  export type WorkingHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where?: WorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[]
  }

  /**
   * WorkingHour findFirstOrThrow
   */
  export type WorkingHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHour to fetch.
     */
    where?: WorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkingHours.
     */
    cursor?: WorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkingHours.
     */
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[]
  }

  /**
   * WorkingHour findMany
   */
  export type WorkingHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter, which WorkingHours to fetch.
     */
    where?: WorkingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkingHours to fetch.
     */
    orderBy?: WorkingHourOrderByWithRelationInput | WorkingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkingHours.
     */
    cursor?: WorkingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkingHours.
     */
    skip?: number
    distinct?: WorkingHourScalarFieldEnum | WorkingHourScalarFieldEnum[]
  }

  /**
   * WorkingHour create
   */
  export type WorkingHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkingHour.
     */
    data: XOR<WorkingHourCreateInput, WorkingHourUncheckedCreateInput>
  }

  /**
   * WorkingHour createMany
   */
  export type WorkingHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHourCreateManyInput | WorkingHourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkingHour createManyAndReturn
   */
  export type WorkingHourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * The data used to create many WorkingHours.
     */
    data: WorkingHourCreateManyInput | WorkingHourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHour update
   */
  export type WorkingHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkingHour.
     */
    data: XOR<WorkingHourUpdateInput, WorkingHourUncheckedUpdateInput>
    /**
     * Choose, which WorkingHour to update.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour updateMany
   */
  export type WorkingHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHourUpdateManyMutationInput, WorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHourWhereInput
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number
  }

  /**
   * WorkingHour updateManyAndReturn
   */
  export type WorkingHourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * The data used to update WorkingHours.
     */
    data: XOR<WorkingHourUpdateManyMutationInput, WorkingHourUncheckedUpdateManyInput>
    /**
     * Filter which WorkingHours to update
     */
    where?: WorkingHourWhereInput
    /**
     * Limit how many WorkingHours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkingHour upsert
   */
  export type WorkingHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkingHour to update in case it exists.
     */
    where: WorkingHourWhereUniqueInput
    /**
     * In case the WorkingHour found by the `where` argument doesn't exist, create a new WorkingHour with this data.
     */
    create: XOR<WorkingHourCreateInput, WorkingHourUncheckedCreateInput>
    /**
     * In case the WorkingHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkingHourUpdateInput, WorkingHourUncheckedUpdateInput>
  }

  /**
   * WorkingHour delete
   */
  export type WorkingHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
    /**
     * Filter which WorkingHour to delete.
     */
    where: WorkingHourWhereUniqueInput
  }

  /**
   * WorkingHour deleteMany
   */
  export type WorkingHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkingHours to delete
     */
    where?: WorkingHourWhereInput
    /**
     * Limit how many WorkingHours to delete.
     */
    limit?: number
  }

  /**
   * WorkingHour without action
   */
  export type WorkingHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkingHour
     */
    select?: WorkingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkingHour
     */
    omit?: WorkingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkingHourInclude<ExtArgs> | null
  }


  /**
   * Model UserSavedCar
   */

  export type AggregateUserSavedCar = {
    _count: UserSavedCarCountAggregateOutputType | null
    _min: UserSavedCarMinAggregateOutputType | null
    _max: UserSavedCarMaxAggregateOutputType | null
  }

  export type UserSavedCarMinAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    savedAt: Date | null
  }

  export type UserSavedCarMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    carId: string | null
    savedAt: Date | null
  }

  export type UserSavedCarCountAggregateOutputType = {
    id: number
    userId: number
    carId: number
    savedAt: number
    _all: number
  }


  export type UserSavedCarMinAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    savedAt?: true
  }

  export type UserSavedCarMaxAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    savedAt?: true
  }

  export type UserSavedCarCountAggregateInputType = {
    id?: true
    userId?: true
    carId?: true
    savedAt?: true
    _all?: true
  }

  export type UserSavedCarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSavedCar to aggregate.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSavedCars
    **/
    _count?: true | UserSavedCarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSavedCarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSavedCarMaxAggregateInputType
  }

  export type GetUserSavedCarAggregateType<T extends UserSavedCarAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSavedCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSavedCar[P]>
      : GetScalarType<T[P], AggregateUserSavedCar[P]>
  }




  export type UserSavedCarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSavedCarWhereInput
    orderBy?: UserSavedCarOrderByWithAggregationInput | UserSavedCarOrderByWithAggregationInput[]
    by: UserSavedCarScalarFieldEnum[] | UserSavedCarScalarFieldEnum
    having?: UserSavedCarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSavedCarCountAggregateInputType | true
    _min?: UserSavedCarMinAggregateInputType
    _max?: UserSavedCarMaxAggregateInputType
  }

  export type UserSavedCarGroupByOutputType = {
    id: string
    userId: string
    carId: string
    savedAt: Date
    _count: UserSavedCarCountAggregateOutputType | null
    _min: UserSavedCarMinAggregateOutputType | null
    _max: UserSavedCarMaxAggregateOutputType | null
  }

  type GetUserSavedCarGroupByPayload<T extends UserSavedCarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSavedCarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSavedCarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSavedCarGroupByOutputType[P]>
            : GetScalarType<T[P], UserSavedCarGroupByOutputType[P]>
        }
      >
    >


  export type UserSavedCarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedCar"]>

  export type UserSavedCarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedCar"]>

  export type UserSavedCarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSavedCar"]>

  export type UserSavedCarSelectScalar = {
    id?: boolean
    userId?: boolean
    carId?: boolean
    savedAt?: boolean
  }

  export type UserSavedCarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "carId" | "savedAt", ExtArgs["result"]["userSavedCar"]>
  export type UserSavedCarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type UserSavedCarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }
  export type UserSavedCarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    car?: boolean | CarDefaultArgs<ExtArgs>
  }

  export type $UserSavedCarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSavedCar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      car: Prisma.$CarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      carId: string
      savedAt: Date
    }, ExtArgs["result"]["userSavedCar"]>
    composites: {}
  }

  type UserSavedCarGetPayload<S extends boolean | null | undefined | UserSavedCarDefaultArgs> = $Result.GetResult<Prisma.$UserSavedCarPayload, S>

  type UserSavedCarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSavedCarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSavedCarCountAggregateInputType | true
    }

  export interface UserSavedCarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSavedCar'], meta: { name: 'UserSavedCar' } }
    /**
     * Find zero or one UserSavedCar that matches the filter.
     * @param {UserSavedCarFindUniqueArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSavedCarFindUniqueArgs>(args: SelectSubset<T, UserSavedCarFindUniqueArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSavedCar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSavedCarFindUniqueOrThrowArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSavedCarFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSavedCarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSavedCar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarFindFirstArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSavedCarFindFirstArgs>(args?: SelectSubset<T, UserSavedCarFindFirstArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSavedCar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarFindFirstOrThrowArgs} args - Arguments to find a UserSavedCar
     * @example
     * // Get one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSavedCarFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSavedCarFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSavedCars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSavedCars
     * const userSavedCars = await prisma.userSavedCar.findMany()
     * 
     * // Get first 10 UserSavedCars
     * const userSavedCars = await prisma.userSavedCar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSavedCarWithIdOnly = await prisma.userSavedCar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSavedCarFindManyArgs>(args?: SelectSubset<T, UserSavedCarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSavedCar.
     * @param {UserSavedCarCreateArgs} args - Arguments to create a UserSavedCar.
     * @example
     * // Create one UserSavedCar
     * const UserSavedCar = await prisma.userSavedCar.create({
     *   data: {
     *     // ... data to create a UserSavedCar
     *   }
     * })
     * 
     */
    create<T extends UserSavedCarCreateArgs>(args: SelectSubset<T, UserSavedCarCreateArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSavedCars.
     * @param {UserSavedCarCreateManyArgs} args - Arguments to create many UserSavedCars.
     * @example
     * // Create many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSavedCarCreateManyArgs>(args?: SelectSubset<T, UserSavedCarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSavedCars and returns the data saved in the database.
     * @param {UserSavedCarCreateManyAndReturnArgs} args - Arguments to create many UserSavedCars.
     * @example
     * // Create many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSavedCars and only return the `id`
     * const userSavedCarWithIdOnly = await prisma.userSavedCar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSavedCarCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSavedCarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSavedCar.
     * @param {UserSavedCarDeleteArgs} args - Arguments to delete one UserSavedCar.
     * @example
     * // Delete one UserSavedCar
     * const UserSavedCar = await prisma.userSavedCar.delete({
     *   where: {
     *     // ... filter to delete one UserSavedCar
     *   }
     * })
     * 
     */
    delete<T extends UserSavedCarDeleteArgs>(args: SelectSubset<T, UserSavedCarDeleteArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSavedCar.
     * @param {UserSavedCarUpdateArgs} args - Arguments to update one UserSavedCar.
     * @example
     * // Update one UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSavedCarUpdateArgs>(args: SelectSubset<T, UserSavedCarUpdateArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSavedCars.
     * @param {UserSavedCarDeleteManyArgs} args - Arguments to filter UserSavedCars to delete.
     * @example
     * // Delete a few UserSavedCars
     * const { count } = await prisma.userSavedCar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSavedCarDeleteManyArgs>(args?: SelectSubset<T, UserSavedCarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSavedCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSavedCarUpdateManyArgs>(args: SelectSubset<T, UserSavedCarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSavedCars and returns the data updated in the database.
     * @param {UserSavedCarUpdateManyAndReturnArgs} args - Arguments to update many UserSavedCars.
     * @example
     * // Update many UserSavedCars
     * const userSavedCar = await prisma.userSavedCar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSavedCars and only return the `id`
     * const userSavedCarWithIdOnly = await prisma.userSavedCar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSavedCarUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSavedCarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSavedCar.
     * @param {UserSavedCarUpsertArgs} args - Arguments to update or create a UserSavedCar.
     * @example
     * // Update or create a UserSavedCar
     * const userSavedCar = await prisma.userSavedCar.upsert({
     *   create: {
     *     // ... data to create a UserSavedCar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSavedCar we want to update
     *   }
     * })
     */
    upsert<T extends UserSavedCarUpsertArgs>(args: SelectSubset<T, UserSavedCarUpsertArgs<ExtArgs>>): Prisma__UserSavedCarClient<$Result.GetResult<Prisma.$UserSavedCarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSavedCars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarCountArgs} args - Arguments to filter UserSavedCars to count.
     * @example
     * // Count the number of UserSavedCars
     * const count = await prisma.userSavedCar.count({
     *   where: {
     *     // ... the filter for the UserSavedCars we want to count
     *   }
     * })
    **/
    count<T extends UserSavedCarCountArgs>(
      args?: Subset<T, UserSavedCarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSavedCarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSavedCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSavedCarAggregateArgs>(args: Subset<T, UserSavedCarAggregateArgs>): Prisma.PrismaPromise<GetUserSavedCarAggregateType<T>>

    /**
     * Group by UserSavedCar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSavedCarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSavedCarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSavedCarGroupByArgs['orderBy'] }
        : { orderBy?: UserSavedCarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSavedCarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSavedCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSavedCar model
   */
  readonly fields: UserSavedCarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSavedCar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSavedCarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSavedCar model
   */
  interface UserSavedCarFieldRefs {
    readonly id: FieldRef<"UserSavedCar", 'String'>
    readonly userId: FieldRef<"UserSavedCar", 'String'>
    readonly carId: FieldRef<"UserSavedCar", 'String'>
    readonly savedAt: FieldRef<"UserSavedCar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSavedCar findUnique
   */
  export type UserSavedCarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar findUniqueOrThrow
   */
  export type UserSavedCarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar findFirst
   */
  export type UserSavedCarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSavedCars.
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSavedCars.
     */
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * UserSavedCar findFirstOrThrow
   */
  export type UserSavedCarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCar to fetch.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSavedCars.
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSavedCars.
     */
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * UserSavedCar findMany
   */
  export type UserSavedCarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter, which UserSavedCars to fetch.
     */
    where?: UserSavedCarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSavedCars to fetch.
     */
    orderBy?: UserSavedCarOrderByWithRelationInput | UserSavedCarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSavedCars.
     */
    cursor?: UserSavedCarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSavedCars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSavedCars.
     */
    skip?: number
    distinct?: UserSavedCarScalarFieldEnum | UserSavedCarScalarFieldEnum[]
  }

  /**
   * UserSavedCar create
   */
  export type UserSavedCarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSavedCar.
     */
    data: XOR<UserSavedCarCreateInput, UserSavedCarUncheckedCreateInput>
  }

  /**
   * UserSavedCar createMany
   */
  export type UserSavedCarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSavedCars.
     */
    data: UserSavedCarCreateManyInput | UserSavedCarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSavedCar createManyAndReturn
   */
  export type UserSavedCarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * The data used to create many UserSavedCars.
     */
    data: UserSavedCarCreateManyInput | UserSavedCarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSavedCar update
   */
  export type UserSavedCarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSavedCar.
     */
    data: XOR<UserSavedCarUpdateInput, UserSavedCarUncheckedUpdateInput>
    /**
     * Choose, which UserSavedCar to update.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar updateMany
   */
  export type UserSavedCarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSavedCars.
     */
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyInput>
    /**
     * Filter which UserSavedCars to update
     */
    where?: UserSavedCarWhereInput
    /**
     * Limit how many UserSavedCars to update.
     */
    limit?: number
  }

  /**
   * UserSavedCar updateManyAndReturn
   */
  export type UserSavedCarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * The data used to update UserSavedCars.
     */
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyInput>
    /**
     * Filter which UserSavedCars to update
     */
    where?: UserSavedCarWhereInput
    /**
     * Limit how many UserSavedCars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSavedCar upsert
   */
  export type UserSavedCarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSavedCar to update in case it exists.
     */
    where: UserSavedCarWhereUniqueInput
    /**
     * In case the UserSavedCar found by the `where` argument doesn't exist, create a new UserSavedCar with this data.
     */
    create: XOR<UserSavedCarCreateInput, UserSavedCarUncheckedCreateInput>
    /**
     * In case the UserSavedCar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSavedCarUpdateInput, UserSavedCarUncheckedUpdateInput>
  }

  /**
   * UserSavedCar delete
   */
  export type UserSavedCarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
    /**
     * Filter which UserSavedCar to delete.
     */
    where: UserSavedCarWhereUniqueInput
  }

  /**
   * UserSavedCar deleteMany
   */
  export type UserSavedCarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSavedCars to delete
     */
    where?: UserSavedCarWhereInput
    /**
     * Limit how many UserSavedCars to delete.
     */
    limit?: number
  }

  /**
   * UserSavedCar without action
   */
  export type UserSavedCarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSavedCar
     */
    select?: UserSavedCarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSavedCar
     */
    omit?: UserSavedCarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSavedCarInclude<ExtArgs> | null
  }


  /**
   * Model TestDriveBooking
   */

  export type AggregateTestDriveBooking = {
    _count: TestDriveBookingCountAggregateOutputType | null
    _min: TestDriveBookingMinAggregateOutputType | null
    _max: TestDriveBookingMaxAggregateOutputType | null
  }

  export type TestDriveBookingMinAggregateOutputType = {
    id: string | null
    carId: string | null
    userId: string | null
    bookingDate: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestDriveBookingMaxAggregateOutputType = {
    id: string | null
    carId: string | null
    userId: string | null
    bookingDate: Date | null
    startTime: string | null
    endTime: string | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestDriveBookingCountAggregateOutputType = {
    id: number
    carId: number
    userId: number
    bookingDate: number
    startTime: number
    endTime: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestDriveBookingMinAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    bookingDate?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestDriveBookingMaxAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    bookingDate?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestDriveBookingCountAggregateInputType = {
    id?: true
    carId?: true
    userId?: true
    bookingDate?: true
    startTime?: true
    endTime?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestDriveBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestDriveBooking to aggregate.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestDriveBookings
    **/
    _count?: true | TestDriveBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestDriveBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestDriveBookingMaxAggregateInputType
  }

  export type GetTestDriveBookingAggregateType<T extends TestDriveBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateTestDriveBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestDriveBooking[P]>
      : GetScalarType<T[P], AggregateTestDriveBooking[P]>
  }




  export type TestDriveBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestDriveBookingWhereInput
    orderBy?: TestDriveBookingOrderByWithAggregationInput | TestDriveBookingOrderByWithAggregationInput[]
    by: TestDriveBookingScalarFieldEnum[] | TestDriveBookingScalarFieldEnum
    having?: TestDriveBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestDriveBookingCountAggregateInputType | true
    _min?: TestDriveBookingMinAggregateInputType
    _max?: TestDriveBookingMaxAggregateInputType
  }

  export type TestDriveBookingGroupByOutputType = {
    id: string
    carId: string
    userId: string
    bookingDate: Date
    startTime: string
    endTime: string
    status: $Enums.BookingStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestDriveBookingCountAggregateOutputType | null
    _min: TestDriveBookingMinAggregateOutputType | null
    _max: TestDriveBookingMaxAggregateOutputType | null
  }

  type GetTestDriveBookingGroupByPayload<T extends TestDriveBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestDriveBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestDriveBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestDriveBookingGroupByOutputType[P]>
            : GetScalarType<T[P], TestDriveBookingGroupByOutputType[P]>
        }
      >
    >


  export type TestDriveBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDriveBooking"]>

  export type TestDriveBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDriveBooking"]>

  export type TestDriveBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carId?: boolean
    userId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testDriveBooking"]>

  export type TestDriveBookingSelectScalar = {
    id?: boolean
    carId?: boolean
    userId?: boolean
    bookingDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestDriveBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carId" | "userId" | "bookingDate" | "startTime" | "endTime" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["testDriveBooking"]>
  export type TestDriveBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestDriveBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestDriveBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | CarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestDriveBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestDriveBooking"
    objects: {
      car: Prisma.$CarPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      carId: string
      userId: string
      bookingDate: Date
      startTime: string
      endTime: string
      status: $Enums.BookingStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testDriveBooking"]>
    composites: {}
  }

  type TestDriveBookingGetPayload<S extends boolean | null | undefined | TestDriveBookingDefaultArgs> = $Result.GetResult<Prisma.$TestDriveBookingPayload, S>

  type TestDriveBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestDriveBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestDriveBookingCountAggregateInputType | true
    }

  export interface TestDriveBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestDriveBooking'], meta: { name: 'TestDriveBooking' } }
    /**
     * Find zero or one TestDriveBooking that matches the filter.
     * @param {TestDriveBookingFindUniqueArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestDriveBookingFindUniqueArgs>(args: SelectSubset<T, TestDriveBookingFindUniqueArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestDriveBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestDriveBookingFindUniqueOrThrowArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestDriveBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, TestDriveBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestDriveBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingFindFirstArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestDriveBookingFindFirstArgs>(args?: SelectSubset<T, TestDriveBookingFindFirstArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestDriveBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingFindFirstOrThrowArgs} args - Arguments to find a TestDriveBooking
     * @example
     * // Get one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestDriveBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, TestDriveBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestDriveBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestDriveBookings
     * const testDriveBookings = await prisma.testDriveBooking.findMany()
     * 
     * // Get first 10 TestDriveBookings
     * const testDriveBookings = await prisma.testDriveBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testDriveBookingWithIdOnly = await prisma.testDriveBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestDriveBookingFindManyArgs>(args?: SelectSubset<T, TestDriveBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestDriveBooking.
     * @param {TestDriveBookingCreateArgs} args - Arguments to create a TestDriveBooking.
     * @example
     * // Create one TestDriveBooking
     * const TestDriveBooking = await prisma.testDriveBooking.create({
     *   data: {
     *     // ... data to create a TestDriveBooking
     *   }
     * })
     * 
     */
    create<T extends TestDriveBookingCreateArgs>(args: SelectSubset<T, TestDriveBookingCreateArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestDriveBookings.
     * @param {TestDriveBookingCreateManyArgs} args - Arguments to create many TestDriveBookings.
     * @example
     * // Create many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestDriveBookingCreateManyArgs>(args?: SelectSubset<T, TestDriveBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestDriveBookings and returns the data saved in the database.
     * @param {TestDriveBookingCreateManyAndReturnArgs} args - Arguments to create many TestDriveBookings.
     * @example
     * // Create many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestDriveBookings and only return the `id`
     * const testDriveBookingWithIdOnly = await prisma.testDriveBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestDriveBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, TestDriveBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestDriveBooking.
     * @param {TestDriveBookingDeleteArgs} args - Arguments to delete one TestDriveBooking.
     * @example
     * // Delete one TestDriveBooking
     * const TestDriveBooking = await prisma.testDriveBooking.delete({
     *   where: {
     *     // ... filter to delete one TestDriveBooking
     *   }
     * })
     * 
     */
    delete<T extends TestDriveBookingDeleteArgs>(args: SelectSubset<T, TestDriveBookingDeleteArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestDriveBooking.
     * @param {TestDriveBookingUpdateArgs} args - Arguments to update one TestDriveBooking.
     * @example
     * // Update one TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestDriveBookingUpdateArgs>(args: SelectSubset<T, TestDriveBookingUpdateArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestDriveBookings.
     * @param {TestDriveBookingDeleteManyArgs} args - Arguments to filter TestDriveBookings to delete.
     * @example
     * // Delete a few TestDriveBookings
     * const { count } = await prisma.testDriveBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDriveBookingDeleteManyArgs>(args?: SelectSubset<T, TestDriveBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestDriveBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestDriveBookingUpdateManyArgs>(args: SelectSubset<T, TestDriveBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestDriveBookings and returns the data updated in the database.
     * @param {TestDriveBookingUpdateManyAndReturnArgs} args - Arguments to update many TestDriveBookings.
     * @example
     * // Update many TestDriveBookings
     * const testDriveBooking = await prisma.testDriveBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestDriveBookings and only return the `id`
     * const testDriveBookingWithIdOnly = await prisma.testDriveBooking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestDriveBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, TestDriveBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestDriveBooking.
     * @param {TestDriveBookingUpsertArgs} args - Arguments to update or create a TestDriveBooking.
     * @example
     * // Update or create a TestDriveBooking
     * const testDriveBooking = await prisma.testDriveBooking.upsert({
     *   create: {
     *     // ... data to create a TestDriveBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestDriveBooking we want to update
     *   }
     * })
     */
    upsert<T extends TestDriveBookingUpsertArgs>(args: SelectSubset<T, TestDriveBookingUpsertArgs<ExtArgs>>): Prisma__TestDriveBookingClient<$Result.GetResult<Prisma.$TestDriveBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestDriveBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingCountArgs} args - Arguments to filter TestDriveBookings to count.
     * @example
     * // Count the number of TestDriveBookings
     * const count = await prisma.testDriveBooking.count({
     *   where: {
     *     // ... the filter for the TestDriveBookings we want to count
     *   }
     * })
    **/
    count<T extends TestDriveBookingCountArgs>(
      args?: Subset<T, TestDriveBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestDriveBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestDriveBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestDriveBookingAggregateArgs>(args: Subset<T, TestDriveBookingAggregateArgs>): Prisma.PrismaPromise<GetTestDriveBookingAggregateType<T>>

    /**
     * Group by TestDriveBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestDriveBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestDriveBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestDriveBookingGroupByArgs['orderBy'] }
        : { orderBy?: TestDriveBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestDriveBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestDriveBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestDriveBooking model
   */
  readonly fields: TestDriveBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestDriveBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestDriveBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends CarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarDefaultArgs<ExtArgs>>): Prisma__CarClient<$Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestDriveBooking model
   */
  interface TestDriveBookingFieldRefs {
    readonly id: FieldRef<"TestDriveBooking", 'String'>
    readonly carId: FieldRef<"TestDriveBooking", 'String'>
    readonly userId: FieldRef<"TestDriveBooking", 'String'>
    readonly bookingDate: FieldRef<"TestDriveBooking", 'DateTime'>
    readonly startTime: FieldRef<"TestDriveBooking", 'String'>
    readonly endTime: FieldRef<"TestDriveBooking", 'String'>
    readonly status: FieldRef<"TestDriveBooking", 'BookingStatus'>
    readonly notes: FieldRef<"TestDriveBooking", 'String'>
    readonly createdAt: FieldRef<"TestDriveBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"TestDriveBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestDriveBooking findUnique
   */
  export type TestDriveBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking findUniqueOrThrow
   */
  export type TestDriveBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking findFirst
   */
  export type TestDriveBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestDriveBookings.
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDriveBookings.
     */
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * TestDriveBooking findFirstOrThrow
   */
  export type TestDriveBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBooking to fetch.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestDriveBookings.
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestDriveBookings.
     */
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * TestDriveBooking findMany
   */
  export type TestDriveBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter, which TestDriveBookings to fetch.
     */
    where?: TestDriveBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestDriveBookings to fetch.
     */
    orderBy?: TestDriveBookingOrderByWithRelationInput | TestDriveBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestDriveBookings.
     */
    cursor?: TestDriveBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestDriveBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestDriveBookings.
     */
    skip?: number
    distinct?: TestDriveBookingScalarFieldEnum | TestDriveBookingScalarFieldEnum[]
  }

  /**
   * TestDriveBooking create
   */
  export type TestDriveBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a TestDriveBooking.
     */
    data: XOR<TestDriveBookingCreateInput, TestDriveBookingUncheckedCreateInput>
  }

  /**
   * TestDriveBooking createMany
   */
  export type TestDriveBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestDriveBookings.
     */
    data: TestDriveBookingCreateManyInput | TestDriveBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestDriveBooking createManyAndReturn
   */
  export type TestDriveBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * The data used to create many TestDriveBookings.
     */
    data: TestDriveBookingCreateManyInput | TestDriveBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestDriveBooking update
   */
  export type TestDriveBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a TestDriveBooking.
     */
    data: XOR<TestDriveBookingUpdateInput, TestDriveBookingUncheckedUpdateInput>
    /**
     * Choose, which TestDriveBooking to update.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking updateMany
   */
  export type TestDriveBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestDriveBookings.
     */
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyInput>
    /**
     * Filter which TestDriveBookings to update
     */
    where?: TestDriveBookingWhereInput
    /**
     * Limit how many TestDriveBookings to update.
     */
    limit?: number
  }

  /**
   * TestDriveBooking updateManyAndReturn
   */
  export type TestDriveBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * The data used to update TestDriveBookings.
     */
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyInput>
    /**
     * Filter which TestDriveBookings to update
     */
    where?: TestDriveBookingWhereInput
    /**
     * Limit how many TestDriveBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestDriveBooking upsert
   */
  export type TestDriveBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the TestDriveBooking to update in case it exists.
     */
    where: TestDriveBookingWhereUniqueInput
    /**
     * In case the TestDriveBooking found by the `where` argument doesn't exist, create a new TestDriveBooking with this data.
     */
    create: XOR<TestDriveBookingCreateInput, TestDriveBookingUncheckedCreateInput>
    /**
     * In case the TestDriveBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestDriveBookingUpdateInput, TestDriveBookingUncheckedUpdateInput>
  }

  /**
   * TestDriveBooking delete
   */
  export type TestDriveBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
    /**
     * Filter which TestDriveBooking to delete.
     */
    where: TestDriveBookingWhereUniqueInput
  }

  /**
   * TestDriveBooking deleteMany
   */
  export type TestDriveBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestDriveBookings to delete
     */
    where?: TestDriveBookingWhereInput
    /**
     * Limit how many TestDriveBookings to delete.
     */
    limit?: number
  }

  /**
   * TestDriveBooking without action
   */
  export type TestDriveBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestDriveBooking
     */
    select?: TestDriveBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestDriveBooking
     */
    omit?: TestDriveBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestDriveBookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChatInteractionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userMessage: 'userMessage',
    aiResponse: 'aiResponse',
    preferences: 'preferences',
    recommendedCarIds: 'recommendedCarIds',
    createdAt: 'createdAt'
  };

  export type ChatInteractionScalarFieldEnum = (typeof ChatInteractionScalarFieldEnum)[keyof typeof ChatInteractionScalarFieldEnum]


  export const MaintenancePredictionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    nextServices: 'nextServices',
    partsReplacement: 'partsReplacement',
    totalMaintenanceCost: 'totalMaintenanceCost',
    maintenanceSchedule: 'maintenanceSchedule',
    createdAt: 'createdAt'
  };

  export type MaintenancePredictionScalarFieldEnum = (typeof MaintenancePredictionScalarFieldEnum)[keyof typeof MaintenancePredictionScalarFieldEnum]


  export const EnvironmentalImpactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    carbonFootprint: 'carbonFootprint',
    greenScore: 'greenScore',
    environmentalMetrics: 'environmentalMetrics',
    createdAt: 'createdAt'
  };

  export type EnvironmentalImpactScalarFieldEnum = (typeof EnvironmentalImpactScalarFieldEnum)[keyof typeof EnvironmentalImpactScalarFieldEnum]


  export const PriceAnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    marketValue: 'marketValue',
    priceAnalysis: 'priceAnalysis',
    buyingRecommendation: 'buyingRecommendation',
    seasonalTrends: 'seasonalTrends',
    createdAt: 'createdAt'
  };

  export type PriceAnalysisScalarFieldEnum = (typeof PriceAnalysisScalarFieldEnum)[keyof typeof PriceAnalysisScalarFieldEnum]


  export const ComparisonScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carIds: 'carIds',
    comparisonData: 'comparisonData',
    createdAt: 'createdAt'
  };

  export type ComparisonScalarFieldEnum = (typeof ComparisonScalarFieldEnum)[keyof typeof ComparisonScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CarScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    price: 'price',
    mileage: 'mileage',
    color: 'color',
    fuelType: 'fuelType',
    transmission: 'transmission',
    bodyType: 'bodyType',
    seats: 'seats',
    description: 'description',
    status: 'status',
    featured: 'featured',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    greenScore: 'greenScore',
    environmentalMetrics: 'environmentalMetrics',
    priceHistory: 'priceHistory'
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum]


  export const DealershipInfoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DealershipInfoScalarFieldEnum = (typeof DealershipInfoScalarFieldEnum)[keyof typeof DealershipInfoScalarFieldEnum]


  export const WorkingHourScalarFieldEnum: {
    id: 'id',
    dealershipId: 'dealershipId',
    dayOfWeek: 'dayOfWeek',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isOpen: 'isOpen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkingHourScalarFieldEnum = (typeof WorkingHourScalarFieldEnum)[keyof typeof WorkingHourScalarFieldEnum]


  export const UserSavedCarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    carId: 'carId',
    savedAt: 'savedAt'
  };

  export type UserSavedCarScalarFieldEnum = (typeof UserSavedCarScalarFieldEnum)[keyof typeof UserSavedCarScalarFieldEnum]


  export const TestDriveBookingScalarFieldEnum: {
    id: 'id',
    carId: 'carId',
    userId: 'userId',
    bookingDate: 'bookingDate',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestDriveBookingScalarFieldEnum = (typeof TestDriveBookingScalarFieldEnum)[keyof typeof TestDriveBookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'CarStatus'
   */
  export type EnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus'>
    


  /**
   * Reference to a field of type 'CarStatus[]'
   */
  export type ListEnumCarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'DayOfWeek[]'
   */
  export type ListEnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ChatInteractionWhereInput = {
    AND?: ChatInteractionWhereInput | ChatInteractionWhereInput[]
    OR?: ChatInteractionWhereInput[]
    NOT?: ChatInteractionWhereInput | ChatInteractionWhereInput[]
    id?: StringFilter<"ChatInteraction"> | string
    userId?: StringFilter<"ChatInteraction"> | string
    userMessage?: StringFilter<"ChatInteraction"> | string
    aiResponse?: StringFilter<"ChatInteraction"> | string
    preferences?: JsonFilter<"ChatInteraction">
    recommendedCarIds?: StringNullableListFilter<"ChatInteraction">
    createdAt?: DateTimeFilter<"ChatInteraction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recommendedCars?: CarListRelationFilter
  }

  export type ChatInteractionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userMessage?: SortOrder
    aiResponse?: SortOrder
    preferences?: SortOrder
    recommendedCarIds?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    recommendedCars?: CarOrderByRelationAggregateInput
  }

  export type ChatInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatInteractionWhereInput | ChatInteractionWhereInput[]
    OR?: ChatInteractionWhereInput[]
    NOT?: ChatInteractionWhereInput | ChatInteractionWhereInput[]
    userId?: StringFilter<"ChatInteraction"> | string
    userMessage?: StringFilter<"ChatInteraction"> | string
    aiResponse?: StringFilter<"ChatInteraction"> | string
    preferences?: JsonFilter<"ChatInteraction">
    recommendedCarIds?: StringNullableListFilter<"ChatInteraction">
    createdAt?: DateTimeFilter<"ChatInteraction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recommendedCars?: CarListRelationFilter
  }, "id">

  export type ChatInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userMessage?: SortOrder
    aiResponse?: SortOrder
    preferences?: SortOrder
    recommendedCarIds?: SortOrder
    createdAt?: SortOrder
    _count?: ChatInteractionCountOrderByAggregateInput
    _max?: ChatInteractionMaxOrderByAggregateInput
    _min?: ChatInteractionMinOrderByAggregateInput
  }

  export type ChatInteractionScalarWhereWithAggregatesInput = {
    AND?: ChatInteractionScalarWhereWithAggregatesInput | ChatInteractionScalarWhereWithAggregatesInput[]
    OR?: ChatInteractionScalarWhereWithAggregatesInput[]
    NOT?: ChatInteractionScalarWhereWithAggregatesInput | ChatInteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatInteraction"> | string
    userId?: StringWithAggregatesFilter<"ChatInteraction"> | string
    userMessage?: StringWithAggregatesFilter<"ChatInteraction"> | string
    aiResponse?: StringWithAggregatesFilter<"ChatInteraction"> | string
    preferences?: JsonWithAggregatesFilter<"ChatInteraction">
    recommendedCarIds?: StringNullableListFilter<"ChatInteraction">
    createdAt?: DateTimeWithAggregatesFilter<"ChatInteraction"> | Date | string
  }

  export type MaintenancePredictionWhereInput = {
    AND?: MaintenancePredictionWhereInput | MaintenancePredictionWhereInput[]
    OR?: MaintenancePredictionWhereInput[]
    NOT?: MaintenancePredictionWhereInput | MaintenancePredictionWhereInput[]
    id?: StringFilter<"MaintenancePrediction"> | string
    userId?: StringFilter<"MaintenancePrediction"> | string
    carId?: StringFilter<"MaintenancePrediction"> | string
    nextServices?: JsonFilter<"MaintenancePrediction">
    partsReplacement?: JsonFilter<"MaintenancePrediction">
    totalMaintenanceCost?: FloatFilter<"MaintenancePrediction"> | number
    maintenanceSchedule?: JsonFilter<"MaintenancePrediction">
    createdAt?: DateTimeFilter<"MaintenancePrediction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type MaintenancePredictionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    nextServices?: SortOrder
    partsReplacement?: SortOrder
    totalMaintenanceCost?: SortOrder
    maintenanceSchedule?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type MaintenancePredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenancePredictionWhereInput | MaintenancePredictionWhereInput[]
    OR?: MaintenancePredictionWhereInput[]
    NOT?: MaintenancePredictionWhereInput | MaintenancePredictionWhereInput[]
    userId?: StringFilter<"MaintenancePrediction"> | string
    carId?: StringFilter<"MaintenancePrediction"> | string
    nextServices?: JsonFilter<"MaintenancePrediction">
    partsReplacement?: JsonFilter<"MaintenancePrediction">
    totalMaintenanceCost?: FloatFilter<"MaintenancePrediction"> | number
    maintenanceSchedule?: JsonFilter<"MaintenancePrediction">
    createdAt?: DateTimeFilter<"MaintenancePrediction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type MaintenancePredictionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    nextServices?: SortOrder
    partsReplacement?: SortOrder
    totalMaintenanceCost?: SortOrder
    maintenanceSchedule?: SortOrder
    createdAt?: SortOrder
    _count?: MaintenancePredictionCountOrderByAggregateInput
    _avg?: MaintenancePredictionAvgOrderByAggregateInput
    _max?: MaintenancePredictionMaxOrderByAggregateInput
    _min?: MaintenancePredictionMinOrderByAggregateInput
    _sum?: MaintenancePredictionSumOrderByAggregateInput
  }

  export type MaintenancePredictionScalarWhereWithAggregatesInput = {
    AND?: MaintenancePredictionScalarWhereWithAggregatesInput | MaintenancePredictionScalarWhereWithAggregatesInput[]
    OR?: MaintenancePredictionScalarWhereWithAggregatesInput[]
    NOT?: MaintenancePredictionScalarWhereWithAggregatesInput | MaintenancePredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenancePrediction"> | string
    userId?: StringWithAggregatesFilter<"MaintenancePrediction"> | string
    carId?: StringWithAggregatesFilter<"MaintenancePrediction"> | string
    nextServices?: JsonWithAggregatesFilter<"MaintenancePrediction">
    partsReplacement?: JsonWithAggregatesFilter<"MaintenancePrediction">
    totalMaintenanceCost?: FloatWithAggregatesFilter<"MaintenancePrediction"> | number
    maintenanceSchedule?: JsonWithAggregatesFilter<"MaintenancePrediction">
    createdAt?: DateTimeWithAggregatesFilter<"MaintenancePrediction"> | Date | string
  }

  export type EnvironmentalImpactWhereInput = {
    AND?: EnvironmentalImpactWhereInput | EnvironmentalImpactWhereInput[]
    OR?: EnvironmentalImpactWhereInput[]
    NOT?: EnvironmentalImpactWhereInput | EnvironmentalImpactWhereInput[]
    id?: StringFilter<"EnvironmentalImpact"> | string
    userId?: StringFilter<"EnvironmentalImpact"> | string
    carId?: StringFilter<"EnvironmentalImpact"> | string
    carbonFootprint?: JsonFilter<"EnvironmentalImpact">
    greenScore?: JsonFilter<"EnvironmentalImpact">
    environmentalMetrics?: JsonFilter<"EnvironmentalImpact">
    createdAt?: DateTimeFilter<"EnvironmentalImpact"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type EnvironmentalImpactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    carbonFootprint?: SortOrder
    greenScore?: SortOrder
    environmentalMetrics?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type EnvironmentalImpactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnvironmentalImpactWhereInput | EnvironmentalImpactWhereInput[]
    OR?: EnvironmentalImpactWhereInput[]
    NOT?: EnvironmentalImpactWhereInput | EnvironmentalImpactWhereInput[]
    userId?: StringFilter<"EnvironmentalImpact"> | string
    carId?: StringFilter<"EnvironmentalImpact"> | string
    carbonFootprint?: JsonFilter<"EnvironmentalImpact">
    greenScore?: JsonFilter<"EnvironmentalImpact">
    environmentalMetrics?: JsonFilter<"EnvironmentalImpact">
    createdAt?: DateTimeFilter<"EnvironmentalImpact"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type EnvironmentalImpactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    carbonFootprint?: SortOrder
    greenScore?: SortOrder
    environmentalMetrics?: SortOrder
    createdAt?: SortOrder
    _count?: EnvironmentalImpactCountOrderByAggregateInput
    _max?: EnvironmentalImpactMaxOrderByAggregateInput
    _min?: EnvironmentalImpactMinOrderByAggregateInput
  }

  export type EnvironmentalImpactScalarWhereWithAggregatesInput = {
    AND?: EnvironmentalImpactScalarWhereWithAggregatesInput | EnvironmentalImpactScalarWhereWithAggregatesInput[]
    OR?: EnvironmentalImpactScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentalImpactScalarWhereWithAggregatesInput | EnvironmentalImpactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnvironmentalImpact"> | string
    userId?: StringWithAggregatesFilter<"EnvironmentalImpact"> | string
    carId?: StringWithAggregatesFilter<"EnvironmentalImpact"> | string
    carbonFootprint?: JsonWithAggregatesFilter<"EnvironmentalImpact">
    greenScore?: JsonWithAggregatesFilter<"EnvironmentalImpact">
    environmentalMetrics?: JsonWithAggregatesFilter<"EnvironmentalImpact">
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentalImpact"> | Date | string
  }

  export type PriceAnalysisWhereInput = {
    AND?: PriceAnalysisWhereInput | PriceAnalysisWhereInput[]
    OR?: PriceAnalysisWhereInput[]
    NOT?: PriceAnalysisWhereInput | PriceAnalysisWhereInput[]
    id?: StringFilter<"PriceAnalysis"> | string
    userId?: StringFilter<"PriceAnalysis"> | string
    carId?: StringFilter<"PriceAnalysis"> | string
    marketValue?: JsonFilter<"PriceAnalysis">
    priceAnalysis?: JsonFilter<"PriceAnalysis">
    buyingRecommendation?: JsonFilter<"PriceAnalysis">
    seasonalTrends?: JsonFilter<"PriceAnalysis">
    createdAt?: DateTimeFilter<"PriceAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type PriceAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    marketValue?: SortOrder
    priceAnalysis?: SortOrder
    buyingRecommendation?: SortOrder
    seasonalTrends?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type PriceAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceAnalysisWhereInput | PriceAnalysisWhereInput[]
    OR?: PriceAnalysisWhereInput[]
    NOT?: PriceAnalysisWhereInput | PriceAnalysisWhereInput[]
    userId?: StringFilter<"PriceAnalysis"> | string
    carId?: StringFilter<"PriceAnalysis"> | string
    marketValue?: JsonFilter<"PriceAnalysis">
    priceAnalysis?: JsonFilter<"PriceAnalysis">
    buyingRecommendation?: JsonFilter<"PriceAnalysis">
    seasonalTrends?: JsonFilter<"PriceAnalysis">
    createdAt?: DateTimeFilter<"PriceAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id">

  export type PriceAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    marketValue?: SortOrder
    priceAnalysis?: SortOrder
    buyingRecommendation?: SortOrder
    seasonalTrends?: SortOrder
    createdAt?: SortOrder
    _count?: PriceAnalysisCountOrderByAggregateInput
    _max?: PriceAnalysisMaxOrderByAggregateInput
    _min?: PriceAnalysisMinOrderByAggregateInput
  }

  export type PriceAnalysisScalarWhereWithAggregatesInput = {
    AND?: PriceAnalysisScalarWhereWithAggregatesInput | PriceAnalysisScalarWhereWithAggregatesInput[]
    OR?: PriceAnalysisScalarWhereWithAggregatesInput[]
    NOT?: PriceAnalysisScalarWhereWithAggregatesInput | PriceAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceAnalysis"> | string
    userId?: StringWithAggregatesFilter<"PriceAnalysis"> | string
    carId?: StringWithAggregatesFilter<"PriceAnalysis"> | string
    marketValue?: JsonWithAggregatesFilter<"PriceAnalysis">
    priceAnalysis?: JsonWithAggregatesFilter<"PriceAnalysis">
    buyingRecommendation?: JsonWithAggregatesFilter<"PriceAnalysis">
    seasonalTrends?: JsonWithAggregatesFilter<"PriceAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"PriceAnalysis"> | Date | string
  }

  export type ComparisonWhereInput = {
    AND?: ComparisonWhereInput | ComparisonWhereInput[]
    OR?: ComparisonWhereInput[]
    NOT?: ComparisonWhereInput | ComparisonWhereInput[]
    id?: StringFilter<"Comparison"> | string
    userId?: StringFilter<"Comparison"> | string
    carIds?: StringNullableListFilter<"Comparison">
    comparisonData?: JsonFilter<"Comparison">
    createdAt?: DateTimeFilter<"Comparison"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ComparisonOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carIds?: SortOrder
    comparisonData?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ComparisonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ComparisonWhereInput | ComparisonWhereInput[]
    OR?: ComparisonWhereInput[]
    NOT?: ComparisonWhereInput | ComparisonWhereInput[]
    userId?: StringFilter<"Comparison"> | string
    carIds?: StringNullableListFilter<"Comparison">
    comparisonData?: JsonFilter<"Comparison">
    createdAt?: DateTimeFilter<"Comparison"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ComparisonOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carIds?: SortOrder
    comparisonData?: SortOrder
    createdAt?: SortOrder
    _count?: ComparisonCountOrderByAggregateInput
    _max?: ComparisonMaxOrderByAggregateInput
    _min?: ComparisonMinOrderByAggregateInput
  }

  export type ComparisonScalarWhereWithAggregatesInput = {
    AND?: ComparisonScalarWhereWithAggregatesInput | ComparisonScalarWhereWithAggregatesInput[]
    OR?: ComparisonScalarWhereWithAggregatesInput[]
    NOT?: ComparisonScalarWhereWithAggregatesInput | ComparisonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comparison"> | string
    userId?: StringWithAggregatesFilter<"Comparison"> | string
    carIds?: StringNullableListFilter<"Comparison">
    comparisonData?: JsonWithAggregatesFilter<"Comparison">
    createdAt?: DateTimeWithAggregatesFilter<"Comparison"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    savedCars?: UserSavedCarListRelationFilter
    testDrives?: TestDriveBookingListRelationFilter
    chatInteractions?: ChatInteractionListRelationFilter
    maintenancePredictions?: MaintenancePredictionListRelationFilter
    environmentalImpacts?: EnvironmentalImpactListRelationFilter
    priceAnalyses?: PriceAnalysisListRelationFilter
    comparisons?: ComparisonListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    savedCars?: UserSavedCarOrderByRelationAggregateInput
    testDrives?: TestDriveBookingOrderByRelationAggregateInput
    chatInteractions?: ChatInteractionOrderByRelationAggregateInput
    maintenancePredictions?: MaintenancePredictionOrderByRelationAggregateInput
    environmentalImpacts?: EnvironmentalImpactOrderByRelationAggregateInput
    priceAnalyses?: PriceAnalysisOrderByRelationAggregateInput
    comparisons?: ComparisonOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    savedCars?: UserSavedCarListRelationFilter
    testDrives?: TestDriveBookingListRelationFilter
    chatInteractions?: ChatInteractionListRelationFilter
    maintenancePredictions?: MaintenancePredictionListRelationFilter
    environmentalImpacts?: EnvironmentalImpactListRelationFilter
    priceAnalyses?: PriceAnalysisListRelationFilter
    comparisons?: ComparisonListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    id?: StringFilter<"Car"> | string
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: DecimalFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Car"> | number
    color?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    seats?: IntNullableFilter<"Car"> | number | null
    description?: StringFilter<"Car"> | string
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    greenScore?: FloatNullableFilter<"Car"> | number | null
    environmentalMetrics?: JsonNullableFilter<"Car">
    priceHistory?: JsonNullableFilter<"Car">
    savedBy?: UserSavedCarListRelationFilter
    testDriveBookings?: TestDriveBookingListRelationFilter
    chatRecommendations?: ChatInteractionListRelationFilter
    maintenancePredictions?: MaintenancePredictionListRelationFilter
    environmentalImpacts?: EnvironmentalImpactListRelationFilter
    priceAnalyses?: PriceAnalysisListRelationFilter
  }

  export type CarOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    seats?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    greenScore?: SortOrderInput | SortOrder
    environmentalMetrics?: SortOrderInput | SortOrder
    priceHistory?: SortOrderInput | SortOrder
    savedBy?: UserSavedCarOrderByRelationAggregateInput
    testDriveBookings?: TestDriveBookingOrderByRelationAggregateInput
    chatRecommendations?: ChatInteractionOrderByRelationAggregateInput
    maintenancePredictions?: MaintenancePredictionOrderByRelationAggregateInput
    environmentalImpacts?: EnvironmentalImpactOrderByRelationAggregateInput
    priceAnalyses?: PriceAnalysisOrderByRelationAggregateInput
  }

  export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CarWhereInput | CarWhereInput[]
    OR?: CarWhereInput[]
    NOT?: CarWhereInput | CarWhereInput[]
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: DecimalFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Car"> | number
    color?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    seats?: IntNullableFilter<"Car"> | number | null
    description?: StringFilter<"Car"> | string
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    greenScore?: FloatNullableFilter<"Car"> | number | null
    environmentalMetrics?: JsonNullableFilter<"Car">
    priceHistory?: JsonNullableFilter<"Car">
    savedBy?: UserSavedCarListRelationFilter
    testDriveBookings?: TestDriveBookingListRelationFilter
    chatRecommendations?: ChatInteractionListRelationFilter
    maintenancePredictions?: MaintenancePredictionListRelationFilter
    environmentalImpacts?: EnvironmentalImpactListRelationFilter
    priceAnalyses?: PriceAnalysisListRelationFilter
  }, "id">

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    seats?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    greenScore?: SortOrderInput | SortOrder
    environmentalMetrics?: SortOrderInput | SortOrder
    priceHistory?: SortOrderInput | SortOrder
    _count?: CarCountOrderByAggregateInput
    _avg?: CarAvgOrderByAggregateInput
    _max?: CarMaxOrderByAggregateInput
    _min?: CarMinOrderByAggregateInput
    _sum?: CarSumOrderByAggregateInput
  }

  export type CarScalarWhereWithAggregatesInput = {
    AND?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    OR?: CarScalarWhereWithAggregatesInput[]
    NOT?: CarScalarWhereWithAggregatesInput | CarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Car"> | string
    make?: StringWithAggregatesFilter<"Car"> | string
    model?: StringWithAggregatesFilter<"Car"> | string
    year?: IntWithAggregatesFilter<"Car"> | number
    price?: DecimalWithAggregatesFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntWithAggregatesFilter<"Car"> | number
    color?: StringWithAggregatesFilter<"Car"> | string
    fuelType?: StringWithAggregatesFilter<"Car"> | string
    transmission?: StringWithAggregatesFilter<"Car"> | string
    bodyType?: StringWithAggregatesFilter<"Car"> | string
    seats?: IntNullableWithAggregatesFilter<"Car"> | number | null
    description?: StringWithAggregatesFilter<"Car"> | string
    status?: EnumCarStatusWithAggregatesFilter<"Car"> | $Enums.CarStatus
    featured?: BoolWithAggregatesFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string
    greenScore?: FloatNullableWithAggregatesFilter<"Car"> | number | null
    environmentalMetrics?: JsonNullableWithAggregatesFilter<"Car">
    priceHistory?: JsonNullableWithAggregatesFilter<"Car">
  }

  export type DealershipInfoWhereInput = {
    AND?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    OR?: DealershipInfoWhereInput[]
    NOT?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    id?: StringFilter<"DealershipInfo"> | string
    name?: StringFilter<"DealershipInfo"> | string
    address?: StringFilter<"DealershipInfo"> | string
    phone?: StringFilter<"DealershipInfo"> | string
    email?: StringFilter<"DealershipInfo"> | string
    createdAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    workingHours?: WorkingHourListRelationFilter
  }

  export type DealershipInfoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workingHours?: WorkingHourOrderByRelationAggregateInput
  }

  export type DealershipInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    OR?: DealershipInfoWhereInput[]
    NOT?: DealershipInfoWhereInput | DealershipInfoWhereInput[]
    name?: StringFilter<"DealershipInfo"> | string
    address?: StringFilter<"DealershipInfo"> | string
    phone?: StringFilter<"DealershipInfo"> | string
    email?: StringFilter<"DealershipInfo"> | string
    createdAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    updatedAt?: DateTimeFilter<"DealershipInfo"> | Date | string
    workingHours?: WorkingHourListRelationFilter
  }, "id">

  export type DealershipInfoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DealershipInfoCountOrderByAggregateInput
    _max?: DealershipInfoMaxOrderByAggregateInput
    _min?: DealershipInfoMinOrderByAggregateInput
  }

  export type DealershipInfoScalarWhereWithAggregatesInput = {
    AND?: DealershipInfoScalarWhereWithAggregatesInput | DealershipInfoScalarWhereWithAggregatesInput[]
    OR?: DealershipInfoScalarWhereWithAggregatesInput[]
    NOT?: DealershipInfoScalarWhereWithAggregatesInput | DealershipInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DealershipInfo"> | string
    name?: StringWithAggregatesFilter<"DealershipInfo"> | string
    address?: StringWithAggregatesFilter<"DealershipInfo"> | string
    phone?: StringWithAggregatesFilter<"DealershipInfo"> | string
    email?: StringWithAggregatesFilter<"DealershipInfo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DealershipInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DealershipInfo"> | Date | string
  }

  export type WorkingHourWhereInput = {
    AND?: WorkingHourWhereInput | WorkingHourWhereInput[]
    OR?: WorkingHourWhereInput[]
    NOT?: WorkingHourWhereInput | WorkingHourWhereInput[]
    id?: StringFilter<"WorkingHour"> | string
    dealershipId?: StringFilter<"WorkingHour"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"WorkingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"WorkingHour"> | string
    closeTime?: StringFilter<"WorkingHour"> | string
    isOpen?: BoolFilter<"WorkingHour"> | boolean
    createdAt?: DateTimeFilter<"WorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingHour"> | Date | string
    dealership?: XOR<DealershipInfoScalarRelationFilter, DealershipInfoWhereInput>
  }

  export type WorkingHourOrderByWithRelationInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dealership?: DealershipInfoOrderByWithRelationInput
  }

  export type WorkingHourWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dealershipId_dayOfWeek?: WorkingHourDealershipIdDayOfWeekCompoundUniqueInput
    AND?: WorkingHourWhereInput | WorkingHourWhereInput[]
    OR?: WorkingHourWhereInput[]
    NOT?: WorkingHourWhereInput | WorkingHourWhereInput[]
    dealershipId?: StringFilter<"WorkingHour"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"WorkingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"WorkingHour"> | string
    closeTime?: StringFilter<"WorkingHour"> | string
    isOpen?: BoolFilter<"WorkingHour"> | boolean
    createdAt?: DateTimeFilter<"WorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingHour"> | Date | string
    dealership?: XOR<DealershipInfoScalarRelationFilter, DealershipInfoWhereInput>
  }, "id" | "dealershipId_dayOfWeek">

  export type WorkingHourOrderByWithAggregationInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkingHourCountOrderByAggregateInput
    _max?: WorkingHourMaxOrderByAggregateInput
    _min?: WorkingHourMinOrderByAggregateInput
  }

  export type WorkingHourScalarWhereWithAggregatesInput = {
    AND?: WorkingHourScalarWhereWithAggregatesInput | WorkingHourScalarWhereWithAggregatesInput[]
    OR?: WorkingHourScalarWhereWithAggregatesInput[]
    NOT?: WorkingHourScalarWhereWithAggregatesInput | WorkingHourScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkingHour"> | string
    dealershipId?: StringWithAggregatesFilter<"WorkingHour"> | string
    dayOfWeek?: EnumDayOfWeekWithAggregatesFilter<"WorkingHour"> | $Enums.DayOfWeek
    openTime?: StringWithAggregatesFilter<"WorkingHour"> | string
    closeTime?: StringWithAggregatesFilter<"WorkingHour"> | string
    isOpen?: BoolWithAggregatesFilter<"WorkingHour"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WorkingHour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkingHour"> | Date | string
  }

  export type UserSavedCarWhereInput = {
    AND?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    OR?: UserSavedCarWhereInput[]
    NOT?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    id?: StringFilter<"UserSavedCar"> | string
    userId?: StringFilter<"UserSavedCar"> | string
    carId?: StringFilter<"UserSavedCar"> | string
    savedAt?: DateTimeFilter<"UserSavedCar"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }

  export type UserSavedCarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    car?: CarOrderByWithRelationInput
  }

  export type UserSavedCarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_carId?: UserSavedCarUserIdCarIdCompoundUniqueInput
    AND?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    OR?: UserSavedCarWhereInput[]
    NOT?: UserSavedCarWhereInput | UserSavedCarWhereInput[]
    userId?: StringFilter<"UserSavedCar"> | string
    carId?: StringFilter<"UserSavedCar"> | string
    savedAt?: DateTimeFilter<"UserSavedCar"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
  }, "id" | "userId_carId">

  export type UserSavedCarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
    _count?: UserSavedCarCountOrderByAggregateInput
    _max?: UserSavedCarMaxOrderByAggregateInput
    _min?: UserSavedCarMinOrderByAggregateInput
  }

  export type UserSavedCarScalarWhereWithAggregatesInput = {
    AND?: UserSavedCarScalarWhereWithAggregatesInput | UserSavedCarScalarWhereWithAggregatesInput[]
    OR?: UserSavedCarScalarWhereWithAggregatesInput[]
    NOT?: UserSavedCarScalarWhereWithAggregatesInput | UserSavedCarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSavedCar"> | string
    userId?: StringWithAggregatesFilter<"UserSavedCar"> | string
    carId?: StringWithAggregatesFilter<"UserSavedCar"> | string
    savedAt?: DateTimeWithAggregatesFilter<"UserSavedCar"> | Date | string
  }

  export type TestDriveBookingWhereInput = {
    AND?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    OR?: TestDriveBookingWhereInput[]
    NOT?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    id?: StringFilter<"TestDriveBooking"> | string
    carId?: StringFilter<"TestDriveBooking"> | string
    userId?: StringFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeFilter<"TestDriveBooking"> | Date | string
    startTime?: StringFilter<"TestDriveBooking"> | string
    endTime?: StringFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestDriveBookingOrderByWithRelationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: CarOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TestDriveBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    OR?: TestDriveBookingWhereInput[]
    NOT?: TestDriveBookingWhereInput | TestDriveBookingWhereInput[]
    carId?: StringFilter<"TestDriveBooking"> | string
    userId?: StringFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeFilter<"TestDriveBooking"> | Date | string
    startTime?: StringFilter<"TestDriveBooking"> | string
    endTime?: StringFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    car?: XOR<CarScalarRelationFilter, CarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestDriveBookingOrderByWithAggregationInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestDriveBookingCountOrderByAggregateInput
    _max?: TestDriveBookingMaxOrderByAggregateInput
    _min?: TestDriveBookingMinOrderByAggregateInput
  }

  export type TestDriveBookingScalarWhereWithAggregatesInput = {
    AND?: TestDriveBookingScalarWhereWithAggregatesInput | TestDriveBookingScalarWhereWithAggregatesInput[]
    OR?: TestDriveBookingScalarWhereWithAggregatesInput[]
    NOT?: TestDriveBookingScalarWhereWithAggregatesInput | TestDriveBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    carId?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    userId?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeWithAggregatesFilter<"TestDriveBooking"> | Date | string
    startTime?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    endTime?: StringWithAggregatesFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableWithAggregatesFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestDriveBooking"> | Date | string
  }

  export type ChatInteractionCreateInput = {
    id?: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatInteractionsInput
    recommendedCars?: CarCreateNestedManyWithoutChatRecommendationsInput
  }

  export type ChatInteractionUncheckedCreateInput = {
    id?: string
    userId: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
    recommendedCars?: CarUncheckedCreateNestedManyWithoutChatRecommendationsInput
  }

  export type ChatInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatInteractionsNestedInput
    recommendedCars?: CarUpdateManyWithoutChatRecommendationsNestedInput
  }

  export type ChatInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedCars?: CarUncheckedUpdateManyWithoutChatRecommendationsNestedInput
  }

  export type ChatInteractionCreateManyInput = {
    id?: string
    userId: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
  }

  export type ChatInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionCreateInput = {
    id?: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMaintenancePredictionsInput
    car: CarCreateNestedOneWithoutMaintenancePredictionsInput
  }

  export type MaintenancePredictionUncheckedCreateInput = {
    id?: string
    userId: string
    carId: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaintenancePredictionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMaintenancePredictionsNestedInput
    car?: CarUpdateOneRequiredWithoutMaintenancePredictionsNestedInput
  }

  export type MaintenancePredictionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionCreateManyInput = {
    id?: string
    userId: string
    carId: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaintenancePredictionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactCreateInput = {
    id?: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEnvironmentalImpactsInput
    car: CarCreateNestedOneWithoutEnvironmentalImpactsInput
  }

  export type EnvironmentalImpactUncheckedCreateInput = {
    id?: string
    userId: string
    carId: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentalImpactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnvironmentalImpactsNestedInput
    car?: CarUpdateOneRequiredWithoutEnvironmentalImpactsNestedInput
  }

  export type EnvironmentalImpactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactCreateManyInput = {
    id?: string
    userId: string
    carId: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentalImpactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisCreateInput = {
    id?: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPriceAnalysesInput
    car: CarCreateNestedOneWithoutPriceAnalysesInput
  }

  export type PriceAnalysisUncheckedCreateInput = {
    id?: string
    userId: string
    carId: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PriceAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPriceAnalysesNestedInput
    car?: CarUpdateOneRequiredWithoutPriceAnalysesNestedInput
  }

  export type PriceAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisCreateManyInput = {
    id?: string
    userId: string
    carId: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PriceAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComparisonCreateInput = {
    id?: string
    carIds?: ComparisonCreatecarIdsInput | string[]
    comparisonData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutComparisonsInput
  }

  export type ComparisonUncheckedCreateInput = {
    id?: string
    userId: string
    carIds?: ComparisonCreatecarIdsInput | string[]
    comparisonData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComparisonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComparisonsNestedInput
  }

  export type ComparisonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComparisonCreateManyInput = {
    id?: string
    userId: string
    carIds?: ComparisonCreatecarIdsInput | string[]
    comparisonData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComparisonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComparisonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type CarCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateManyInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DealershipInfoCreateInput = {
    id?: string
    name?: string
    address?: string
    phone?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: WorkingHourCreateNestedManyWithoutDealershipInput
  }

  export type DealershipInfoUncheckedCreateInput = {
    id?: string
    name?: string
    address?: string
    phone?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workingHours?: WorkingHourUncheckedCreateNestedManyWithoutDealershipInput
  }

  export type DealershipInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: WorkingHourUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingHours?: WorkingHourUncheckedUpdateManyWithoutDealershipNestedInput
  }

  export type DealershipInfoCreateManyInput = {
    id?: string
    name?: string
    address?: string
    phone?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealershipInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealershipInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourCreateInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dealership: DealershipInfoCreateNestedOneWithoutWorkingHoursInput
  }

  export type WorkingHourUncheckedCreateInput = {
    id?: string
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dealership?: DealershipInfoUpdateOneRequiredWithoutWorkingHoursNestedInput
  }

  export type WorkingHourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealershipId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourCreateManyInput = {
    id?: string
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dealershipId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarCreateInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCarsInput
    car: CarCreateNestedOneWithoutSavedByInput
  }

  export type UserSavedCarUncheckedCreateInput = {
    id?: string
    userId: string
    carId: string
    savedAt?: Date | string
  }

  export type UserSavedCarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCarsNestedInput
    car?: CarUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type UserSavedCarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarCreateManyInput = {
    id?: string
    userId: string
    carId: string
    savedAt?: Date | string
  }

  export type UserSavedCarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingCreateInput = {
    id?: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutTestDriveBookingsInput
    user: UserCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveBookingUncheckedCreateInput = {
    id?: string
    carId: string
    userId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutTestDriveBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingCreateManyInput = {
    id?: string
    carId: string
    userId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CarListRelationFilter = {
    every?: CarWhereInput
    some?: CarWhereInput
    none?: CarWhereInput
  }

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userMessage?: SortOrder
    aiResponse?: SortOrder
    preferences?: SortOrder
    recommendedCarIds?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userMessage?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userMessage?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CarScalarRelationFilter = {
    is?: CarWhereInput
    isNot?: CarWhereInput
  }

  export type MaintenancePredictionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    nextServices?: SortOrder
    partsReplacement?: SortOrder
    totalMaintenanceCost?: SortOrder
    maintenanceSchedule?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenancePredictionAvgOrderByAggregateInput = {
    totalMaintenanceCost?: SortOrder
  }

  export type MaintenancePredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    totalMaintenanceCost?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenancePredictionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    totalMaintenanceCost?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenancePredictionSumOrderByAggregateInput = {
    totalMaintenanceCost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnvironmentalImpactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    carbonFootprint?: SortOrder
    greenScore?: SortOrder
    environmentalMetrics?: SortOrder
    createdAt?: SortOrder
  }

  export type EnvironmentalImpactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnvironmentalImpactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    marketValue?: SortOrder
    priceAnalysis?: SortOrder
    buyingRecommendation?: SortOrder
    seasonalTrends?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    createdAt?: SortOrder
  }

  export type ComparisonCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carIds?: SortOrder
    comparisonData?: SortOrder
    createdAt?: SortOrder
  }

  export type ComparisonMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ComparisonMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserSavedCarListRelationFilter = {
    every?: UserSavedCarWhereInput
    some?: UserSavedCarWhereInput
    none?: UserSavedCarWhereInput
  }

  export type TestDriveBookingListRelationFilter = {
    every?: TestDriveBookingWhereInput
    some?: TestDriveBookingWhereInput
    none?: TestDriveBookingWhereInput
  }

  export type ChatInteractionListRelationFilter = {
    every?: ChatInteractionWhereInput
    some?: ChatInteractionWhereInput
    none?: ChatInteractionWhereInput
  }

  export type MaintenancePredictionListRelationFilter = {
    every?: MaintenancePredictionWhereInput
    some?: MaintenancePredictionWhereInput
    none?: MaintenancePredictionWhereInput
  }

  export type EnvironmentalImpactListRelationFilter = {
    every?: EnvironmentalImpactWhereInput
    some?: EnvironmentalImpactWhereInput
    none?: EnvironmentalImpactWhereInput
  }

  export type PriceAnalysisListRelationFilter = {
    every?: PriceAnalysisWhereInput
    some?: PriceAnalysisWhereInput
    none?: PriceAnalysisWhereInput
  }

  export type ComparisonListRelationFilter = {
    every?: ComparisonWhereInput
    some?: ComparisonWhereInput
    none?: ComparisonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserSavedCarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestDriveBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenancePredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnvironmentalImpactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComparisonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    seats?: SortOrder
    description?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    greenScore?: SortOrder
    environmentalMetrics?: SortOrder
    priceHistory?: SortOrder
  }

  export type CarAvgOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
    greenScore?: SortOrder
  }

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    seats?: SortOrder
    description?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    greenScore?: SortOrder
  }

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    fuelType?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    seats?: SortOrder
    description?: SortOrder
    status?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    greenScore?: SortOrder
  }

  export type CarSumOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    mileage?: SortOrder
    seats?: SortOrder
    greenScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WorkingHourListRelationFilter = {
    every?: WorkingHourWhereInput
    some?: WorkingHourWhereInput
    none?: WorkingHourWhereInput
  }

  export type WorkingHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealershipInfoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealershipInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealershipInfoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type DealershipInfoScalarRelationFilter = {
    is?: DealershipInfoWhereInput
    isNot?: DealershipInfoWhereInput
  }

  export type WorkingHourDealershipIdDayOfWeekCompoundUniqueInput = {
    dealershipId: string
    dayOfWeek: $Enums.DayOfWeek
  }

  export type WorkingHourCountOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkingHourMaxOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkingHourMinOrderByAggregateInput = {
    id?: SortOrder
    dealershipId?: SortOrder
    dayOfWeek?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isOpen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type UserSavedCarUserIdCarIdCompoundUniqueInput = {
    userId: string
    carId: string
  }

  export type UserSavedCarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
  }

  export type UserSavedCarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
  }

  export type UserSavedCarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    carId?: SortOrder
    savedAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type TestDriveBookingCountOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestDriveBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestDriveBookingMinOrderByAggregateInput = {
    id?: SortOrder
    carId?: SortOrder
    userId?: SortOrder
    bookingDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type ChatInteractionCreaterecommendedCarIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutChatInteractionsInput = {
    create?: XOR<UserCreateWithoutChatInteractionsInput, UserUncheckedCreateWithoutChatInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedManyWithoutChatRecommendationsInput = {
    create?: XOR<CarCreateWithoutChatRecommendationsInput, CarUncheckedCreateWithoutChatRecommendationsInput> | CarCreateWithoutChatRecommendationsInput[] | CarUncheckedCreateWithoutChatRecommendationsInput[]
    connectOrCreate?: CarCreateOrConnectWithoutChatRecommendationsInput | CarCreateOrConnectWithoutChatRecommendationsInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type CarUncheckedCreateNestedManyWithoutChatRecommendationsInput = {
    create?: XOR<CarCreateWithoutChatRecommendationsInput, CarUncheckedCreateWithoutChatRecommendationsInput> | CarCreateWithoutChatRecommendationsInput[] | CarUncheckedCreateWithoutChatRecommendationsInput[]
    connectOrCreate?: CarCreateOrConnectWithoutChatRecommendationsInput | CarCreateOrConnectWithoutChatRecommendationsInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ChatInteractionUpdaterecommendedCarIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutChatInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutChatInteractionsInput, UserUncheckedCreateWithoutChatInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInteractionsInput
    upsert?: UserUpsertWithoutChatInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatInteractionsInput, UserUpdateWithoutChatInteractionsInput>, UserUncheckedUpdateWithoutChatInteractionsInput>
  }

  export type CarUpdateManyWithoutChatRecommendationsNestedInput = {
    create?: XOR<CarCreateWithoutChatRecommendationsInput, CarUncheckedCreateWithoutChatRecommendationsInput> | CarCreateWithoutChatRecommendationsInput[] | CarUncheckedCreateWithoutChatRecommendationsInput[]
    connectOrCreate?: CarCreateOrConnectWithoutChatRecommendationsInput | CarCreateOrConnectWithoutChatRecommendationsInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutChatRecommendationsInput | CarUpsertWithWhereUniqueWithoutChatRecommendationsInput[]
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutChatRecommendationsInput | CarUpdateWithWhereUniqueWithoutChatRecommendationsInput[]
    updateMany?: CarUpdateManyWithWhereWithoutChatRecommendationsInput | CarUpdateManyWithWhereWithoutChatRecommendationsInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type CarUncheckedUpdateManyWithoutChatRecommendationsNestedInput = {
    create?: XOR<CarCreateWithoutChatRecommendationsInput, CarUncheckedCreateWithoutChatRecommendationsInput> | CarCreateWithoutChatRecommendationsInput[] | CarUncheckedCreateWithoutChatRecommendationsInput[]
    connectOrCreate?: CarCreateOrConnectWithoutChatRecommendationsInput | CarCreateOrConnectWithoutChatRecommendationsInput[]
    upsert?: CarUpsertWithWhereUniqueWithoutChatRecommendationsInput | CarUpsertWithWhereUniqueWithoutChatRecommendationsInput[]
    set?: CarWhereUniqueInput | CarWhereUniqueInput[]
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[]
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[]
    update?: CarUpdateWithWhereUniqueWithoutChatRecommendationsInput | CarUpdateWithWhereUniqueWithoutChatRecommendationsInput[]
    updateMany?: CarUpdateManyWithWhereWithoutChatRecommendationsInput | CarUpdateManyWithWhereWithoutChatRecommendationsInput[]
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMaintenancePredictionsInput = {
    create?: XOR<UserCreateWithoutMaintenancePredictionsInput, UserUncheckedCreateWithoutMaintenancePredictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancePredictionsInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutMaintenancePredictionsInput = {
    create?: XOR<CarCreateWithoutMaintenancePredictionsInput, CarUncheckedCreateWithoutMaintenancePredictionsInput>
    connectOrCreate?: CarCreateOrConnectWithoutMaintenancePredictionsInput
    connect?: CarWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMaintenancePredictionsNestedInput = {
    create?: XOR<UserCreateWithoutMaintenancePredictionsInput, UserUncheckedCreateWithoutMaintenancePredictionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenancePredictionsInput
    upsert?: UserUpsertWithoutMaintenancePredictionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenancePredictionsInput, UserUpdateWithoutMaintenancePredictionsInput>, UserUncheckedUpdateWithoutMaintenancePredictionsInput>
  }

  export type CarUpdateOneRequiredWithoutMaintenancePredictionsNestedInput = {
    create?: XOR<CarCreateWithoutMaintenancePredictionsInput, CarUncheckedCreateWithoutMaintenancePredictionsInput>
    connectOrCreate?: CarCreateOrConnectWithoutMaintenancePredictionsInput
    upsert?: CarUpsertWithoutMaintenancePredictionsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutMaintenancePredictionsInput, CarUpdateWithoutMaintenancePredictionsInput>, CarUncheckedUpdateWithoutMaintenancePredictionsInput>
  }

  export type UserCreateNestedOneWithoutEnvironmentalImpactsInput = {
    create?: XOR<UserCreateWithoutEnvironmentalImpactsInput, UserUncheckedCreateWithoutEnvironmentalImpactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnvironmentalImpactsInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutEnvironmentalImpactsInput = {
    create?: XOR<CarCreateWithoutEnvironmentalImpactsInput, CarUncheckedCreateWithoutEnvironmentalImpactsInput>
    connectOrCreate?: CarCreateOrConnectWithoutEnvironmentalImpactsInput
    connect?: CarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnvironmentalImpactsNestedInput = {
    create?: XOR<UserCreateWithoutEnvironmentalImpactsInput, UserUncheckedCreateWithoutEnvironmentalImpactsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnvironmentalImpactsInput
    upsert?: UserUpsertWithoutEnvironmentalImpactsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnvironmentalImpactsInput, UserUpdateWithoutEnvironmentalImpactsInput>, UserUncheckedUpdateWithoutEnvironmentalImpactsInput>
  }

  export type CarUpdateOneRequiredWithoutEnvironmentalImpactsNestedInput = {
    create?: XOR<CarCreateWithoutEnvironmentalImpactsInput, CarUncheckedCreateWithoutEnvironmentalImpactsInput>
    connectOrCreate?: CarCreateOrConnectWithoutEnvironmentalImpactsInput
    upsert?: CarUpsertWithoutEnvironmentalImpactsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutEnvironmentalImpactsInput, CarUpdateWithoutEnvironmentalImpactsInput>, CarUncheckedUpdateWithoutEnvironmentalImpactsInput>
  }

  export type UserCreateNestedOneWithoutPriceAnalysesInput = {
    create?: XOR<UserCreateWithoutPriceAnalysesInput, UserUncheckedCreateWithoutPriceAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutPriceAnalysesInput = {
    create?: XOR<CarCreateWithoutPriceAnalysesInput, CarUncheckedCreateWithoutPriceAnalysesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPriceAnalysesInput
    connect?: CarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPriceAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutPriceAnalysesInput, UserUncheckedCreateWithoutPriceAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPriceAnalysesInput
    upsert?: UserUpsertWithoutPriceAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPriceAnalysesInput, UserUpdateWithoutPriceAnalysesInput>, UserUncheckedUpdateWithoutPriceAnalysesInput>
  }

  export type CarUpdateOneRequiredWithoutPriceAnalysesNestedInput = {
    create?: XOR<CarCreateWithoutPriceAnalysesInput, CarUncheckedCreateWithoutPriceAnalysesInput>
    connectOrCreate?: CarCreateOrConnectWithoutPriceAnalysesInput
    upsert?: CarUpsertWithoutPriceAnalysesInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutPriceAnalysesInput, CarUpdateWithoutPriceAnalysesInput>, CarUncheckedUpdateWithoutPriceAnalysesInput>
  }

  export type ComparisonCreatecarIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutComparisonsInput = {
    create?: XOR<UserCreateWithoutComparisonsInput, UserUncheckedCreateWithoutComparisonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutComparisonsInput
    connect?: UserWhereUniqueInput
  }

  export type ComparisonUpdatecarIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutComparisonsNestedInput = {
    create?: XOR<UserCreateWithoutComparisonsInput, UserUncheckedCreateWithoutComparisonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutComparisonsInput
    upsert?: UserUpsertWithoutComparisonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComparisonsInput, UserUpdateWithoutComparisonsInput>, UserUncheckedUpdateWithoutComparisonsInput>
  }

  export type UserSavedCarCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type TestDriveBookingCreateNestedManyWithoutUserInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type ChatInteractionCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatInteractionCreateWithoutUserInput, ChatInteractionUncheckedCreateWithoutUserInput> | ChatInteractionCreateWithoutUserInput[] | ChatInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutUserInput | ChatInteractionCreateOrConnectWithoutUserInput[]
    createMany?: ChatInteractionCreateManyUserInputEnvelope
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
  }

  export type MaintenancePredictionCreateNestedManyWithoutUserInput = {
    create?: XOR<MaintenancePredictionCreateWithoutUserInput, MaintenancePredictionUncheckedCreateWithoutUserInput> | MaintenancePredictionCreateWithoutUserInput[] | MaintenancePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutUserInput | MaintenancePredictionCreateOrConnectWithoutUserInput[]
    createMany?: MaintenancePredictionCreateManyUserInputEnvelope
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
  }

  export type EnvironmentalImpactCreateNestedManyWithoutUserInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutUserInput, EnvironmentalImpactUncheckedCreateWithoutUserInput> | EnvironmentalImpactCreateWithoutUserInput[] | EnvironmentalImpactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutUserInput | EnvironmentalImpactCreateOrConnectWithoutUserInput[]
    createMany?: EnvironmentalImpactCreateManyUserInputEnvelope
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
  }

  export type PriceAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<PriceAnalysisCreateWithoutUserInput, PriceAnalysisUncheckedCreateWithoutUserInput> | PriceAnalysisCreateWithoutUserInput[] | PriceAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutUserInput | PriceAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: PriceAnalysisCreateManyUserInputEnvelope
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
  }

  export type ComparisonCreateNestedManyWithoutUserInput = {
    create?: XOR<ComparisonCreateWithoutUserInput, ComparisonUncheckedCreateWithoutUserInput> | ComparisonCreateWithoutUserInput[] | ComparisonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComparisonCreateOrConnectWithoutUserInput | ComparisonCreateOrConnectWithoutUserInput[]
    createMany?: ComparisonCreateManyUserInputEnvelope
    connect?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
  }

  export type UserSavedCarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type TestDriveBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type ChatInteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatInteractionCreateWithoutUserInput, ChatInteractionUncheckedCreateWithoutUserInput> | ChatInteractionCreateWithoutUserInput[] | ChatInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutUserInput | ChatInteractionCreateOrConnectWithoutUserInput[]
    createMany?: ChatInteractionCreateManyUserInputEnvelope
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
  }

  export type MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MaintenancePredictionCreateWithoutUserInput, MaintenancePredictionUncheckedCreateWithoutUserInput> | MaintenancePredictionCreateWithoutUserInput[] | MaintenancePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutUserInput | MaintenancePredictionCreateOrConnectWithoutUserInput[]
    createMany?: MaintenancePredictionCreateManyUserInputEnvelope
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
  }

  export type EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutUserInput, EnvironmentalImpactUncheckedCreateWithoutUserInput> | EnvironmentalImpactCreateWithoutUserInput[] | EnvironmentalImpactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutUserInput | EnvironmentalImpactCreateOrConnectWithoutUserInput[]
    createMany?: EnvironmentalImpactCreateManyUserInputEnvelope
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
  }

  export type PriceAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PriceAnalysisCreateWithoutUserInput, PriceAnalysisUncheckedCreateWithoutUserInput> | PriceAnalysisCreateWithoutUserInput[] | PriceAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutUserInput | PriceAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: PriceAnalysisCreateManyUserInputEnvelope
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
  }

  export type ComparisonUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComparisonCreateWithoutUserInput, ComparisonUncheckedCreateWithoutUserInput> | ComparisonCreateWithoutUserInput[] | ComparisonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComparisonCreateOrConnectWithoutUserInput | ComparisonCreateOrConnectWithoutUserInput[]
    createMany?: ComparisonCreateManyUserInputEnvelope
    connect?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserSavedCarUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutUserInput | UserSavedCarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutUserInput | UserSavedCarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutUserInput | UserSavedCarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type TestDriveBookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutUserInput | TestDriveBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutUserInput | TestDriveBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutUserInput | TestDriveBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type ChatInteractionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatInteractionCreateWithoutUserInput, ChatInteractionUncheckedCreateWithoutUserInput> | ChatInteractionCreateWithoutUserInput[] | ChatInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutUserInput | ChatInteractionCreateOrConnectWithoutUserInput[]
    upsert?: ChatInteractionUpsertWithWhereUniqueWithoutUserInput | ChatInteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatInteractionCreateManyUserInputEnvelope
    set?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    disconnect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    delete?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    update?: ChatInteractionUpdateWithWhereUniqueWithoutUserInput | ChatInteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatInteractionUpdateManyWithWhereWithoutUserInput | ChatInteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatInteractionScalarWhereInput | ChatInteractionScalarWhereInput[]
  }

  export type MaintenancePredictionUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaintenancePredictionCreateWithoutUserInput, MaintenancePredictionUncheckedCreateWithoutUserInput> | MaintenancePredictionCreateWithoutUserInput[] | MaintenancePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutUserInput | MaintenancePredictionCreateOrConnectWithoutUserInput[]
    upsert?: MaintenancePredictionUpsertWithWhereUniqueWithoutUserInput | MaintenancePredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaintenancePredictionCreateManyUserInputEnvelope
    set?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    disconnect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    delete?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    update?: MaintenancePredictionUpdateWithWhereUniqueWithoutUserInput | MaintenancePredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaintenancePredictionUpdateManyWithWhereWithoutUserInput | MaintenancePredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaintenancePredictionScalarWhereInput | MaintenancePredictionScalarWhereInput[]
  }

  export type EnvironmentalImpactUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutUserInput, EnvironmentalImpactUncheckedCreateWithoutUserInput> | EnvironmentalImpactCreateWithoutUserInput[] | EnvironmentalImpactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutUserInput | EnvironmentalImpactCreateOrConnectWithoutUserInput[]
    upsert?: EnvironmentalImpactUpsertWithWhereUniqueWithoutUserInput | EnvironmentalImpactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnvironmentalImpactCreateManyUserInputEnvelope
    set?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    disconnect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    delete?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    update?: EnvironmentalImpactUpdateWithWhereUniqueWithoutUserInput | EnvironmentalImpactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnvironmentalImpactUpdateManyWithWhereWithoutUserInput | EnvironmentalImpactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnvironmentalImpactScalarWhereInput | EnvironmentalImpactScalarWhereInput[]
  }

  export type PriceAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<PriceAnalysisCreateWithoutUserInput, PriceAnalysisUncheckedCreateWithoutUserInput> | PriceAnalysisCreateWithoutUserInput[] | PriceAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutUserInput | PriceAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: PriceAnalysisUpsertWithWhereUniqueWithoutUserInput | PriceAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PriceAnalysisCreateManyUserInputEnvelope
    set?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    disconnect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    delete?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    update?: PriceAnalysisUpdateWithWhereUniqueWithoutUserInput | PriceAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PriceAnalysisUpdateManyWithWhereWithoutUserInput | PriceAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PriceAnalysisScalarWhereInput | PriceAnalysisScalarWhereInput[]
  }

  export type ComparisonUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComparisonCreateWithoutUserInput, ComparisonUncheckedCreateWithoutUserInput> | ComparisonCreateWithoutUserInput[] | ComparisonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComparisonCreateOrConnectWithoutUserInput | ComparisonCreateOrConnectWithoutUserInput[]
    upsert?: ComparisonUpsertWithWhereUniqueWithoutUserInput | ComparisonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComparisonCreateManyUserInputEnvelope
    set?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    disconnect?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    delete?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    connect?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    update?: ComparisonUpdateWithWhereUniqueWithoutUserInput | ComparisonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComparisonUpdateManyWithWhereWithoutUserInput | ComparisonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComparisonScalarWhereInput | ComparisonScalarWhereInput[]
  }

  export type UserSavedCarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput> | UserSavedCarCreateWithoutUserInput[] | UserSavedCarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutUserInput | UserSavedCarCreateOrConnectWithoutUserInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutUserInput | UserSavedCarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSavedCarCreateManyUserInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutUserInput | UserSavedCarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutUserInput | UserSavedCarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput> | TestDriveBookingCreateWithoutUserInput[] | TestDriveBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutUserInput | TestDriveBookingCreateOrConnectWithoutUserInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutUserInput | TestDriveBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestDriveBookingCreateManyUserInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutUserInput | TestDriveBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutUserInput | TestDriveBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type ChatInteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatInteractionCreateWithoutUserInput, ChatInteractionUncheckedCreateWithoutUserInput> | ChatInteractionCreateWithoutUserInput[] | ChatInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutUserInput | ChatInteractionCreateOrConnectWithoutUserInput[]
    upsert?: ChatInteractionUpsertWithWhereUniqueWithoutUserInput | ChatInteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatInteractionCreateManyUserInputEnvelope
    set?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    disconnect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    delete?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    update?: ChatInteractionUpdateWithWhereUniqueWithoutUserInput | ChatInteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatInteractionUpdateManyWithWhereWithoutUserInput | ChatInteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatInteractionScalarWhereInput | ChatInteractionScalarWhereInput[]
  }

  export type MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MaintenancePredictionCreateWithoutUserInput, MaintenancePredictionUncheckedCreateWithoutUserInput> | MaintenancePredictionCreateWithoutUserInput[] | MaintenancePredictionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutUserInput | MaintenancePredictionCreateOrConnectWithoutUserInput[]
    upsert?: MaintenancePredictionUpsertWithWhereUniqueWithoutUserInput | MaintenancePredictionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MaintenancePredictionCreateManyUserInputEnvelope
    set?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    disconnect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    delete?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    update?: MaintenancePredictionUpdateWithWhereUniqueWithoutUserInput | MaintenancePredictionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MaintenancePredictionUpdateManyWithWhereWithoutUserInput | MaintenancePredictionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MaintenancePredictionScalarWhereInput | MaintenancePredictionScalarWhereInput[]
  }

  export type EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutUserInput, EnvironmentalImpactUncheckedCreateWithoutUserInput> | EnvironmentalImpactCreateWithoutUserInput[] | EnvironmentalImpactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutUserInput | EnvironmentalImpactCreateOrConnectWithoutUserInput[]
    upsert?: EnvironmentalImpactUpsertWithWhereUniqueWithoutUserInput | EnvironmentalImpactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnvironmentalImpactCreateManyUserInputEnvelope
    set?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    disconnect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    delete?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    update?: EnvironmentalImpactUpdateWithWhereUniqueWithoutUserInput | EnvironmentalImpactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnvironmentalImpactUpdateManyWithWhereWithoutUserInput | EnvironmentalImpactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnvironmentalImpactScalarWhereInput | EnvironmentalImpactScalarWhereInput[]
  }

  export type PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PriceAnalysisCreateWithoutUserInput, PriceAnalysisUncheckedCreateWithoutUserInput> | PriceAnalysisCreateWithoutUserInput[] | PriceAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutUserInput | PriceAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: PriceAnalysisUpsertWithWhereUniqueWithoutUserInput | PriceAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PriceAnalysisCreateManyUserInputEnvelope
    set?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    disconnect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    delete?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    update?: PriceAnalysisUpdateWithWhereUniqueWithoutUserInput | PriceAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PriceAnalysisUpdateManyWithWhereWithoutUserInput | PriceAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PriceAnalysisScalarWhereInput | PriceAnalysisScalarWhereInput[]
  }

  export type ComparisonUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComparisonCreateWithoutUserInput, ComparisonUncheckedCreateWithoutUserInput> | ComparisonCreateWithoutUserInput[] | ComparisonUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComparisonCreateOrConnectWithoutUserInput | ComparisonCreateOrConnectWithoutUserInput[]
    upsert?: ComparisonUpsertWithWhereUniqueWithoutUserInput | ComparisonUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComparisonCreateManyUserInputEnvelope
    set?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    disconnect?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    delete?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    connect?: ComparisonWhereUniqueInput | ComparisonWhereUniqueInput[]
    update?: ComparisonUpdateWithWhereUniqueWithoutUserInput | ComparisonUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComparisonUpdateManyWithWhereWithoutUserInput | ComparisonUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComparisonScalarWhereInput | ComparisonScalarWhereInput[]
  }

  export type CarCreateimagesInput = {
    set: string[]
  }

  export type UserSavedCarCreateNestedManyWithoutCarInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type TestDriveBookingCreateNestedManyWithoutCarInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type ChatInteractionCreateNestedManyWithoutRecommendedCarsInput = {
    create?: XOR<ChatInteractionCreateWithoutRecommendedCarsInput, ChatInteractionUncheckedCreateWithoutRecommendedCarsInput> | ChatInteractionCreateWithoutRecommendedCarsInput[] | ChatInteractionUncheckedCreateWithoutRecommendedCarsInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutRecommendedCarsInput | ChatInteractionCreateOrConnectWithoutRecommendedCarsInput[]
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
  }

  export type MaintenancePredictionCreateNestedManyWithoutCarInput = {
    create?: XOR<MaintenancePredictionCreateWithoutCarInput, MaintenancePredictionUncheckedCreateWithoutCarInput> | MaintenancePredictionCreateWithoutCarInput[] | MaintenancePredictionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutCarInput | MaintenancePredictionCreateOrConnectWithoutCarInput[]
    createMany?: MaintenancePredictionCreateManyCarInputEnvelope
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
  }

  export type EnvironmentalImpactCreateNestedManyWithoutCarInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutCarInput, EnvironmentalImpactUncheckedCreateWithoutCarInput> | EnvironmentalImpactCreateWithoutCarInput[] | EnvironmentalImpactUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutCarInput | EnvironmentalImpactCreateOrConnectWithoutCarInput[]
    createMany?: EnvironmentalImpactCreateManyCarInputEnvelope
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
  }

  export type PriceAnalysisCreateNestedManyWithoutCarInput = {
    create?: XOR<PriceAnalysisCreateWithoutCarInput, PriceAnalysisUncheckedCreateWithoutCarInput> | PriceAnalysisCreateWithoutCarInput[] | PriceAnalysisUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutCarInput | PriceAnalysisCreateOrConnectWithoutCarInput[]
    createMany?: PriceAnalysisCreateManyCarInputEnvelope
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
  }

  export type UserSavedCarUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
  }

  export type TestDriveBookingUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
  }

  export type ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput = {
    create?: XOR<ChatInteractionCreateWithoutRecommendedCarsInput, ChatInteractionUncheckedCreateWithoutRecommendedCarsInput> | ChatInteractionCreateWithoutRecommendedCarsInput[] | ChatInteractionUncheckedCreateWithoutRecommendedCarsInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutRecommendedCarsInput | ChatInteractionCreateOrConnectWithoutRecommendedCarsInput[]
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
  }

  export type MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<MaintenancePredictionCreateWithoutCarInput, MaintenancePredictionUncheckedCreateWithoutCarInput> | MaintenancePredictionCreateWithoutCarInput[] | MaintenancePredictionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutCarInput | MaintenancePredictionCreateOrConnectWithoutCarInput[]
    createMany?: MaintenancePredictionCreateManyCarInputEnvelope
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
  }

  export type EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutCarInput, EnvironmentalImpactUncheckedCreateWithoutCarInput> | EnvironmentalImpactCreateWithoutCarInput[] | EnvironmentalImpactUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutCarInput | EnvironmentalImpactCreateOrConnectWithoutCarInput[]
    createMany?: EnvironmentalImpactCreateManyCarInputEnvelope
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
  }

  export type PriceAnalysisUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<PriceAnalysisCreateWithoutCarInput, PriceAnalysisUncheckedCreateWithoutCarInput> | PriceAnalysisCreateWithoutCarInput[] | PriceAnalysisUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutCarInput | PriceAnalysisCreateOrConnectWithoutCarInput[]
    createMany?: PriceAnalysisCreateManyCarInputEnvelope
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCarStatusFieldUpdateOperationsInput = {
    set?: $Enums.CarStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CarUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSavedCarUpdateManyWithoutCarNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutCarInput | UserSavedCarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutCarInput | UserSavedCarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutCarInput | UserSavedCarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type TestDriveBookingUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutCarInput | TestDriveBookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutCarInput | TestDriveBookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutCarInput | TestDriveBookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput = {
    create?: XOR<ChatInteractionCreateWithoutRecommendedCarsInput, ChatInteractionUncheckedCreateWithoutRecommendedCarsInput> | ChatInteractionCreateWithoutRecommendedCarsInput[] | ChatInteractionUncheckedCreateWithoutRecommendedCarsInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutRecommendedCarsInput | ChatInteractionCreateOrConnectWithoutRecommendedCarsInput[]
    upsert?: ChatInteractionUpsertWithWhereUniqueWithoutRecommendedCarsInput | ChatInteractionUpsertWithWhereUniqueWithoutRecommendedCarsInput[]
    set?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    disconnect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    delete?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    update?: ChatInteractionUpdateWithWhereUniqueWithoutRecommendedCarsInput | ChatInteractionUpdateWithWhereUniqueWithoutRecommendedCarsInput[]
    updateMany?: ChatInteractionUpdateManyWithWhereWithoutRecommendedCarsInput | ChatInteractionUpdateManyWithWhereWithoutRecommendedCarsInput[]
    deleteMany?: ChatInteractionScalarWhereInput | ChatInteractionScalarWhereInput[]
  }

  export type MaintenancePredictionUpdateManyWithoutCarNestedInput = {
    create?: XOR<MaintenancePredictionCreateWithoutCarInput, MaintenancePredictionUncheckedCreateWithoutCarInput> | MaintenancePredictionCreateWithoutCarInput[] | MaintenancePredictionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutCarInput | MaintenancePredictionCreateOrConnectWithoutCarInput[]
    upsert?: MaintenancePredictionUpsertWithWhereUniqueWithoutCarInput | MaintenancePredictionUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: MaintenancePredictionCreateManyCarInputEnvelope
    set?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    disconnect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    delete?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    update?: MaintenancePredictionUpdateWithWhereUniqueWithoutCarInput | MaintenancePredictionUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: MaintenancePredictionUpdateManyWithWhereWithoutCarInput | MaintenancePredictionUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: MaintenancePredictionScalarWhereInput | MaintenancePredictionScalarWhereInput[]
  }

  export type EnvironmentalImpactUpdateManyWithoutCarNestedInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutCarInput, EnvironmentalImpactUncheckedCreateWithoutCarInput> | EnvironmentalImpactCreateWithoutCarInput[] | EnvironmentalImpactUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutCarInput | EnvironmentalImpactCreateOrConnectWithoutCarInput[]
    upsert?: EnvironmentalImpactUpsertWithWhereUniqueWithoutCarInput | EnvironmentalImpactUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: EnvironmentalImpactCreateManyCarInputEnvelope
    set?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    disconnect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    delete?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    update?: EnvironmentalImpactUpdateWithWhereUniqueWithoutCarInput | EnvironmentalImpactUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: EnvironmentalImpactUpdateManyWithWhereWithoutCarInput | EnvironmentalImpactUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: EnvironmentalImpactScalarWhereInput | EnvironmentalImpactScalarWhereInput[]
  }

  export type PriceAnalysisUpdateManyWithoutCarNestedInput = {
    create?: XOR<PriceAnalysisCreateWithoutCarInput, PriceAnalysisUncheckedCreateWithoutCarInput> | PriceAnalysisCreateWithoutCarInput[] | PriceAnalysisUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutCarInput | PriceAnalysisCreateOrConnectWithoutCarInput[]
    upsert?: PriceAnalysisUpsertWithWhereUniqueWithoutCarInput | PriceAnalysisUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PriceAnalysisCreateManyCarInputEnvelope
    set?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    disconnect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    delete?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    update?: PriceAnalysisUpdateWithWhereUniqueWithoutCarInput | PriceAnalysisUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PriceAnalysisUpdateManyWithWhereWithoutCarInput | PriceAnalysisUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PriceAnalysisScalarWhereInput | PriceAnalysisScalarWhereInput[]
  }

  export type UserSavedCarUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput> | UserSavedCarCreateWithoutCarInput[] | UserSavedCarUncheckedCreateWithoutCarInput[]
    connectOrCreate?: UserSavedCarCreateOrConnectWithoutCarInput | UserSavedCarCreateOrConnectWithoutCarInput[]
    upsert?: UserSavedCarUpsertWithWhereUniqueWithoutCarInput | UserSavedCarUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: UserSavedCarCreateManyCarInputEnvelope
    set?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    disconnect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    delete?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    connect?: UserSavedCarWhereUniqueInput | UserSavedCarWhereUniqueInput[]
    update?: UserSavedCarUpdateWithWhereUniqueWithoutCarInput | UserSavedCarUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: UserSavedCarUpdateManyWithWhereWithoutCarInput | UserSavedCarUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput> | TestDriveBookingCreateWithoutCarInput[] | TestDriveBookingUncheckedCreateWithoutCarInput[]
    connectOrCreate?: TestDriveBookingCreateOrConnectWithoutCarInput | TestDriveBookingCreateOrConnectWithoutCarInput[]
    upsert?: TestDriveBookingUpsertWithWhereUniqueWithoutCarInput | TestDriveBookingUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: TestDriveBookingCreateManyCarInputEnvelope
    set?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    disconnect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    delete?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    connect?: TestDriveBookingWhereUniqueInput | TestDriveBookingWhereUniqueInput[]
    update?: TestDriveBookingUpdateWithWhereUniqueWithoutCarInput | TestDriveBookingUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: TestDriveBookingUpdateManyWithWhereWithoutCarInput | TestDriveBookingUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
  }

  export type ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput = {
    create?: XOR<ChatInteractionCreateWithoutRecommendedCarsInput, ChatInteractionUncheckedCreateWithoutRecommendedCarsInput> | ChatInteractionCreateWithoutRecommendedCarsInput[] | ChatInteractionUncheckedCreateWithoutRecommendedCarsInput[]
    connectOrCreate?: ChatInteractionCreateOrConnectWithoutRecommendedCarsInput | ChatInteractionCreateOrConnectWithoutRecommendedCarsInput[]
    upsert?: ChatInteractionUpsertWithWhereUniqueWithoutRecommendedCarsInput | ChatInteractionUpsertWithWhereUniqueWithoutRecommendedCarsInput[]
    set?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    disconnect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    delete?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    connect?: ChatInteractionWhereUniqueInput | ChatInteractionWhereUniqueInput[]
    update?: ChatInteractionUpdateWithWhereUniqueWithoutRecommendedCarsInput | ChatInteractionUpdateWithWhereUniqueWithoutRecommendedCarsInput[]
    updateMany?: ChatInteractionUpdateManyWithWhereWithoutRecommendedCarsInput | ChatInteractionUpdateManyWithWhereWithoutRecommendedCarsInput[]
    deleteMany?: ChatInteractionScalarWhereInput | ChatInteractionScalarWhereInput[]
  }

  export type MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<MaintenancePredictionCreateWithoutCarInput, MaintenancePredictionUncheckedCreateWithoutCarInput> | MaintenancePredictionCreateWithoutCarInput[] | MaintenancePredictionUncheckedCreateWithoutCarInput[]
    connectOrCreate?: MaintenancePredictionCreateOrConnectWithoutCarInput | MaintenancePredictionCreateOrConnectWithoutCarInput[]
    upsert?: MaintenancePredictionUpsertWithWhereUniqueWithoutCarInput | MaintenancePredictionUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: MaintenancePredictionCreateManyCarInputEnvelope
    set?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    disconnect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    delete?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    connect?: MaintenancePredictionWhereUniqueInput | MaintenancePredictionWhereUniqueInput[]
    update?: MaintenancePredictionUpdateWithWhereUniqueWithoutCarInput | MaintenancePredictionUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: MaintenancePredictionUpdateManyWithWhereWithoutCarInput | MaintenancePredictionUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: MaintenancePredictionScalarWhereInput | MaintenancePredictionScalarWhereInput[]
  }

  export type EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<EnvironmentalImpactCreateWithoutCarInput, EnvironmentalImpactUncheckedCreateWithoutCarInput> | EnvironmentalImpactCreateWithoutCarInput[] | EnvironmentalImpactUncheckedCreateWithoutCarInput[]
    connectOrCreate?: EnvironmentalImpactCreateOrConnectWithoutCarInput | EnvironmentalImpactCreateOrConnectWithoutCarInput[]
    upsert?: EnvironmentalImpactUpsertWithWhereUniqueWithoutCarInput | EnvironmentalImpactUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: EnvironmentalImpactCreateManyCarInputEnvelope
    set?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    disconnect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    delete?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    connect?: EnvironmentalImpactWhereUniqueInput | EnvironmentalImpactWhereUniqueInput[]
    update?: EnvironmentalImpactUpdateWithWhereUniqueWithoutCarInput | EnvironmentalImpactUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: EnvironmentalImpactUpdateManyWithWhereWithoutCarInput | EnvironmentalImpactUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: EnvironmentalImpactScalarWhereInput | EnvironmentalImpactScalarWhereInput[]
  }

  export type PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<PriceAnalysisCreateWithoutCarInput, PriceAnalysisUncheckedCreateWithoutCarInput> | PriceAnalysisCreateWithoutCarInput[] | PriceAnalysisUncheckedCreateWithoutCarInput[]
    connectOrCreate?: PriceAnalysisCreateOrConnectWithoutCarInput | PriceAnalysisCreateOrConnectWithoutCarInput[]
    upsert?: PriceAnalysisUpsertWithWhereUniqueWithoutCarInput | PriceAnalysisUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: PriceAnalysisCreateManyCarInputEnvelope
    set?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    disconnect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    delete?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    connect?: PriceAnalysisWhereUniqueInput | PriceAnalysisWhereUniqueInput[]
    update?: PriceAnalysisUpdateWithWhereUniqueWithoutCarInput | PriceAnalysisUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: PriceAnalysisUpdateManyWithWhereWithoutCarInput | PriceAnalysisUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: PriceAnalysisScalarWhereInput | PriceAnalysisScalarWhereInput[]
  }

  export type WorkingHourCreateNestedManyWithoutDealershipInput = {
    create?: XOR<WorkingHourCreateWithoutDealershipInput, WorkingHourUncheckedCreateWithoutDealershipInput> | WorkingHourCreateWithoutDealershipInput[] | WorkingHourUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHourCreateOrConnectWithoutDealershipInput | WorkingHourCreateOrConnectWithoutDealershipInput[]
    createMany?: WorkingHourCreateManyDealershipInputEnvelope
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
  }

  export type WorkingHourUncheckedCreateNestedManyWithoutDealershipInput = {
    create?: XOR<WorkingHourCreateWithoutDealershipInput, WorkingHourUncheckedCreateWithoutDealershipInput> | WorkingHourCreateWithoutDealershipInput[] | WorkingHourUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHourCreateOrConnectWithoutDealershipInput | WorkingHourCreateOrConnectWithoutDealershipInput[]
    createMany?: WorkingHourCreateManyDealershipInputEnvelope
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
  }

  export type WorkingHourUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<WorkingHourCreateWithoutDealershipInput, WorkingHourUncheckedCreateWithoutDealershipInput> | WorkingHourCreateWithoutDealershipInput[] | WorkingHourUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHourCreateOrConnectWithoutDealershipInput | WorkingHourCreateOrConnectWithoutDealershipInput[]
    upsert?: WorkingHourUpsertWithWhereUniqueWithoutDealershipInput | WorkingHourUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: WorkingHourCreateManyDealershipInputEnvelope
    set?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    disconnect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    delete?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    update?: WorkingHourUpdateWithWhereUniqueWithoutDealershipInput | WorkingHourUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: WorkingHourUpdateManyWithWhereWithoutDealershipInput | WorkingHourUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[]
  }

  export type WorkingHourUncheckedUpdateManyWithoutDealershipNestedInput = {
    create?: XOR<WorkingHourCreateWithoutDealershipInput, WorkingHourUncheckedCreateWithoutDealershipInput> | WorkingHourCreateWithoutDealershipInput[] | WorkingHourUncheckedCreateWithoutDealershipInput[]
    connectOrCreate?: WorkingHourCreateOrConnectWithoutDealershipInput | WorkingHourCreateOrConnectWithoutDealershipInput[]
    upsert?: WorkingHourUpsertWithWhereUniqueWithoutDealershipInput | WorkingHourUpsertWithWhereUniqueWithoutDealershipInput[]
    createMany?: WorkingHourCreateManyDealershipInputEnvelope
    set?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    disconnect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    delete?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    connect?: WorkingHourWhereUniqueInput | WorkingHourWhereUniqueInput[]
    update?: WorkingHourUpdateWithWhereUniqueWithoutDealershipInput | WorkingHourUpdateWithWhereUniqueWithoutDealershipInput[]
    updateMany?: WorkingHourUpdateManyWithWhereWithoutDealershipInput | WorkingHourUpdateManyWithWhereWithoutDealershipInput[]
    deleteMany?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[]
  }

  export type DealershipInfoCreateNestedOneWithoutWorkingHoursInput = {
    create?: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: DealershipInfoCreateOrConnectWithoutWorkingHoursInput
    connect?: DealershipInfoWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type DealershipInfoUpdateOneRequiredWithoutWorkingHoursNestedInput = {
    create?: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
    connectOrCreate?: DealershipInfoCreateOrConnectWithoutWorkingHoursInput
    upsert?: DealershipInfoUpsertWithoutWorkingHoursInput
    connect?: DealershipInfoWhereUniqueInput
    update?: XOR<XOR<DealershipInfoUpdateToOneWithWhereWithoutWorkingHoursInput, DealershipInfoUpdateWithoutWorkingHoursInput>, DealershipInfoUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type UserCreateNestedOneWithoutSavedCarsInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput
    connect?: UserWhereUniqueInput
  }

  export type CarCreateNestedOneWithoutSavedByInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput
    connect?: CarWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedCarsNestedInput = {
    create?: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedCarsInput
    upsert?: UserUpsertWithoutSavedCarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedCarsInput, UserUpdateWithoutSavedCarsInput>, UserUncheckedUpdateWithoutSavedCarsInput>
  }

  export type CarUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: CarCreateOrConnectWithoutSavedByInput
    upsert?: CarUpsertWithoutSavedByInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutSavedByInput, CarUpdateWithoutSavedByInput>, CarUncheckedUpdateWithoutSavedByInput>
  }

  export type CarCreateNestedOneWithoutTestDriveBookingsInput = {
    create?: XOR<CarCreateWithoutTestDriveBookingsInput, CarUncheckedCreateWithoutTestDriveBookingsInput>
    connectOrCreate?: CarCreateOrConnectWithoutTestDriveBookingsInput
    connect?: CarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTestDrivesInput = {
    create?: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestDrivesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type CarUpdateOneRequiredWithoutTestDriveBookingsNestedInput = {
    create?: XOR<CarCreateWithoutTestDriveBookingsInput, CarUncheckedCreateWithoutTestDriveBookingsInput>
    connectOrCreate?: CarCreateOrConnectWithoutTestDriveBookingsInput
    upsert?: CarUpsertWithoutTestDriveBookingsInput
    connect?: CarWhereUniqueInput
    update?: XOR<XOR<CarUpdateToOneWithWhereWithoutTestDriveBookingsInput, CarUpdateWithoutTestDriveBookingsInput>, CarUncheckedUpdateWithoutTestDriveBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutTestDrivesNestedInput = {
    create?: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestDrivesInput
    upsert?: UserUpsertWithoutTestDrivesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestDrivesInput, UserUpdateWithoutTestDrivesInput>, UserUncheckedUpdateWithoutTestDrivesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusFilter<$PrismaModel> | $Enums.CarStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumCarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarStatus | EnumCarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarStatus[] | ListEnumCarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCarStatusWithAggregatesFilter<$PrismaModel> | $Enums.CarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarStatusFilter<$PrismaModel>
    _max?: NestedEnumCarStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    notIn?: $Enums.DayOfWeek[] | ListEnumDayOfWeekFieldRefInput<$PrismaModel>
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutChatInteractionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatInteractionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatInteractionsInput, UserUncheckedCreateWithoutChatInteractionsInput>
  }

  export type CarCreateWithoutChatRecommendationsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutChatRecommendationsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutChatRecommendationsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutChatRecommendationsInput, CarUncheckedCreateWithoutChatRecommendationsInput>
  }

  export type UserUpsertWithoutChatInteractionsInput = {
    update: XOR<UserUpdateWithoutChatInteractionsInput, UserUncheckedUpdateWithoutChatInteractionsInput>
    create: XOR<UserCreateWithoutChatInteractionsInput, UserUncheckedCreateWithoutChatInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatInteractionsInput, UserUncheckedUpdateWithoutChatInteractionsInput>
  }

  export type UserUpdateWithoutChatInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithWhereUniqueWithoutChatRecommendationsInput = {
    where: CarWhereUniqueInput
    update: XOR<CarUpdateWithoutChatRecommendationsInput, CarUncheckedUpdateWithoutChatRecommendationsInput>
    create: XOR<CarCreateWithoutChatRecommendationsInput, CarUncheckedCreateWithoutChatRecommendationsInput>
  }

  export type CarUpdateWithWhereUniqueWithoutChatRecommendationsInput = {
    where: CarWhereUniqueInput
    data: XOR<CarUpdateWithoutChatRecommendationsInput, CarUncheckedUpdateWithoutChatRecommendationsInput>
  }

  export type CarUpdateManyWithWhereWithoutChatRecommendationsInput = {
    where: CarScalarWhereInput
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyWithoutChatRecommendationsInput>
  }

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[]
    OR?: CarScalarWhereInput[]
    NOT?: CarScalarWhereInput | CarScalarWhereInput[]
    id?: StringFilter<"Car"> | string
    make?: StringFilter<"Car"> | string
    model?: StringFilter<"Car"> | string
    year?: IntFilter<"Car"> | number
    price?: DecimalFilter<"Car"> | Decimal | DecimalJsLike | number | string
    mileage?: IntFilter<"Car"> | number
    color?: StringFilter<"Car"> | string
    fuelType?: StringFilter<"Car"> | string
    transmission?: StringFilter<"Car"> | string
    bodyType?: StringFilter<"Car"> | string
    seats?: IntNullableFilter<"Car"> | number | null
    description?: StringFilter<"Car"> | string
    status?: EnumCarStatusFilter<"Car"> | $Enums.CarStatus
    featured?: BoolFilter<"Car"> | boolean
    images?: StringNullableListFilter<"Car">
    createdAt?: DateTimeFilter<"Car"> | Date | string
    updatedAt?: DateTimeFilter<"Car"> | Date | string
    greenScore?: FloatNullableFilter<"Car"> | number | null
    environmentalMetrics?: JsonNullableFilter<"Car">
    priceHistory?: JsonNullableFilter<"Car">
  }

  export type UserCreateWithoutMaintenancePredictionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMaintenancePredictionsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMaintenancePredictionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenancePredictionsInput, UserUncheckedCreateWithoutMaintenancePredictionsInput>
  }

  export type CarCreateWithoutMaintenancePredictionsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionCreateNestedManyWithoutRecommendedCarsInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutMaintenancePredictionsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutMaintenancePredictionsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutMaintenancePredictionsInput, CarUncheckedCreateWithoutMaintenancePredictionsInput>
  }

  export type UserUpsertWithoutMaintenancePredictionsInput = {
    update: XOR<UserUpdateWithoutMaintenancePredictionsInput, UserUncheckedUpdateWithoutMaintenancePredictionsInput>
    create: XOR<UserCreateWithoutMaintenancePredictionsInput, UserUncheckedCreateWithoutMaintenancePredictionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenancePredictionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenancePredictionsInput, UserUncheckedUpdateWithoutMaintenancePredictionsInput>
  }

  export type UserUpdateWithoutMaintenancePredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenancePredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithoutMaintenancePredictionsInput = {
    update: XOR<CarUpdateWithoutMaintenancePredictionsInput, CarUncheckedUpdateWithoutMaintenancePredictionsInput>
    create: XOR<CarCreateWithoutMaintenancePredictionsInput, CarUncheckedCreateWithoutMaintenancePredictionsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutMaintenancePredictionsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutMaintenancePredictionsInput, CarUncheckedUpdateWithoutMaintenancePredictionsInput>
  }

  export type CarUpdateWithoutMaintenancePredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutMaintenancePredictionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserCreateWithoutEnvironmentalImpactsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnvironmentalImpactsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnvironmentalImpactsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnvironmentalImpactsInput, UserUncheckedCreateWithoutEnvironmentalImpactsInput>
  }

  export type CarCreateWithoutEnvironmentalImpactsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutEnvironmentalImpactsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutEnvironmentalImpactsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutEnvironmentalImpactsInput, CarUncheckedCreateWithoutEnvironmentalImpactsInput>
  }

  export type UserUpsertWithoutEnvironmentalImpactsInput = {
    update: XOR<UserUpdateWithoutEnvironmentalImpactsInput, UserUncheckedUpdateWithoutEnvironmentalImpactsInput>
    create: XOR<UserCreateWithoutEnvironmentalImpactsInput, UserUncheckedCreateWithoutEnvironmentalImpactsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnvironmentalImpactsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnvironmentalImpactsInput, UserUncheckedUpdateWithoutEnvironmentalImpactsInput>
  }

  export type UserUpdateWithoutEnvironmentalImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnvironmentalImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithoutEnvironmentalImpactsInput = {
    update: XOR<CarUpdateWithoutEnvironmentalImpactsInput, CarUncheckedUpdateWithoutEnvironmentalImpactsInput>
    create: XOR<CarCreateWithoutEnvironmentalImpactsInput, CarUncheckedCreateWithoutEnvironmentalImpactsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutEnvironmentalImpactsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutEnvironmentalImpactsInput, CarUncheckedUpdateWithoutEnvironmentalImpactsInput>
  }

  export type CarUpdateWithoutEnvironmentalImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutEnvironmentalImpactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserCreateWithoutPriceAnalysesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPriceAnalysesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPriceAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPriceAnalysesInput, UserUncheckedCreateWithoutPriceAnalysesInput>
  }

  export type CarCreateWithoutPriceAnalysesInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutPriceAnalysesInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
    testDriveBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutPriceAnalysesInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutPriceAnalysesInput, CarUncheckedCreateWithoutPriceAnalysesInput>
  }

  export type UserUpsertWithoutPriceAnalysesInput = {
    update: XOR<UserUpdateWithoutPriceAnalysesInput, UserUncheckedUpdateWithoutPriceAnalysesInput>
    create: XOR<UserCreateWithoutPriceAnalysesInput, UserUncheckedCreateWithoutPriceAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPriceAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPriceAnalysesInput, UserUncheckedUpdateWithoutPriceAnalysesInput>
  }

  export type UserUpdateWithoutPriceAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPriceAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithoutPriceAnalysesInput = {
    update: XOR<CarUpdateWithoutPriceAnalysesInput, CarUncheckedUpdateWithoutPriceAnalysesInput>
    create: XOR<CarCreateWithoutPriceAnalysesInput, CarUncheckedCreateWithoutPriceAnalysesInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutPriceAnalysesInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutPriceAnalysesInput, CarUncheckedUpdateWithoutPriceAnalysesInput>
  }

  export type CarUpdateWithoutPriceAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutPriceAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserCreateWithoutComparisonsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutComparisonsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutComparisonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComparisonsInput, UserUncheckedCreateWithoutComparisonsInput>
  }

  export type UserUpsertWithoutComparisonsInput = {
    update: XOR<UserUpdateWithoutComparisonsInput, UserUncheckedUpdateWithoutComparisonsInput>
    create: XOR<UserCreateWithoutComparisonsInput, UserUncheckedCreateWithoutComparisonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComparisonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComparisonsInput, UserUncheckedUpdateWithoutComparisonsInput>
  }

  export type UserUpdateWithoutComparisonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutComparisonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserSavedCarCreateWithoutUserInput = {
    id?: string
    savedAt?: Date | string
    car: CarCreateNestedOneWithoutSavedByInput
  }

  export type UserSavedCarUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    savedAt?: Date | string
  }

  export type UserSavedCarCreateOrConnectWithoutUserInput = {
    where: UserSavedCarWhereUniqueInput
    create: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput>
  }

  export type UserSavedCarCreateManyUserInputEnvelope = {
    data: UserSavedCarCreateManyUserInput | UserSavedCarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TestDriveBookingCreateWithoutUserInput = {
    id?: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: CarCreateNestedOneWithoutTestDriveBookingsInput
  }

  export type TestDriveBookingUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingCreateOrConnectWithoutUserInput = {
    where: TestDriveBookingWhereUniqueInput
    create: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput>
  }

  export type TestDriveBookingCreateManyUserInputEnvelope = {
    data: TestDriveBookingCreateManyUserInput | TestDriveBookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatInteractionCreateWithoutUserInput = {
    id?: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
    recommendedCars?: CarCreateNestedManyWithoutChatRecommendationsInput
  }

  export type ChatInteractionUncheckedCreateWithoutUserInput = {
    id?: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
    recommendedCars?: CarUncheckedCreateNestedManyWithoutChatRecommendationsInput
  }

  export type ChatInteractionCreateOrConnectWithoutUserInput = {
    where: ChatInteractionWhereUniqueInput
    create: XOR<ChatInteractionCreateWithoutUserInput, ChatInteractionUncheckedCreateWithoutUserInput>
  }

  export type ChatInteractionCreateManyUserInputEnvelope = {
    data: ChatInteractionCreateManyUserInput | ChatInteractionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MaintenancePredictionCreateWithoutUserInput = {
    id?: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutMaintenancePredictionsInput
  }

  export type MaintenancePredictionUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaintenancePredictionCreateOrConnectWithoutUserInput = {
    where: MaintenancePredictionWhereUniqueInput
    create: XOR<MaintenancePredictionCreateWithoutUserInput, MaintenancePredictionUncheckedCreateWithoutUserInput>
  }

  export type MaintenancePredictionCreateManyUserInputEnvelope = {
    data: MaintenancePredictionCreateManyUserInput | MaintenancePredictionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EnvironmentalImpactCreateWithoutUserInput = {
    id?: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutEnvironmentalImpactsInput
  }

  export type EnvironmentalImpactUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentalImpactCreateOrConnectWithoutUserInput = {
    where: EnvironmentalImpactWhereUniqueInput
    create: XOR<EnvironmentalImpactCreateWithoutUserInput, EnvironmentalImpactUncheckedCreateWithoutUserInput>
  }

  export type EnvironmentalImpactCreateManyUserInputEnvelope = {
    data: EnvironmentalImpactCreateManyUserInput | EnvironmentalImpactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PriceAnalysisCreateWithoutUserInput = {
    id?: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    car: CarCreateNestedOneWithoutPriceAnalysesInput
  }

  export type PriceAnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    carId: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PriceAnalysisCreateOrConnectWithoutUserInput = {
    where: PriceAnalysisWhereUniqueInput
    create: XOR<PriceAnalysisCreateWithoutUserInput, PriceAnalysisUncheckedCreateWithoutUserInput>
  }

  export type PriceAnalysisCreateManyUserInputEnvelope = {
    data: PriceAnalysisCreateManyUserInput | PriceAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComparisonCreateWithoutUserInput = {
    id?: string
    carIds?: ComparisonCreatecarIdsInput | string[]
    comparisonData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComparisonUncheckedCreateWithoutUserInput = {
    id?: string
    carIds?: ComparisonCreatecarIdsInput | string[]
    comparisonData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComparisonCreateOrConnectWithoutUserInput = {
    where: ComparisonWhereUniqueInput
    create: XOR<ComparisonCreateWithoutUserInput, ComparisonUncheckedCreateWithoutUserInput>
  }

  export type ComparisonCreateManyUserInputEnvelope = {
    data: ComparisonCreateManyUserInput | ComparisonCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSavedCarUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSavedCarWhereUniqueInput
    update: XOR<UserSavedCarUpdateWithoutUserInput, UserSavedCarUncheckedUpdateWithoutUserInput>
    create: XOR<UserSavedCarCreateWithoutUserInput, UserSavedCarUncheckedCreateWithoutUserInput>
  }

  export type UserSavedCarUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSavedCarWhereUniqueInput
    data: XOR<UserSavedCarUpdateWithoutUserInput, UserSavedCarUncheckedUpdateWithoutUserInput>
  }

  export type UserSavedCarUpdateManyWithWhereWithoutUserInput = {
    where: UserSavedCarScalarWhereInput
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSavedCarScalarWhereInput = {
    AND?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
    OR?: UserSavedCarScalarWhereInput[]
    NOT?: UserSavedCarScalarWhereInput | UserSavedCarScalarWhereInput[]
    id?: StringFilter<"UserSavedCar"> | string
    userId?: StringFilter<"UserSavedCar"> | string
    carId?: StringFilter<"UserSavedCar"> | string
    savedAt?: DateTimeFilter<"UserSavedCar"> | Date | string
  }

  export type TestDriveBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: TestDriveBookingWhereUniqueInput
    update: XOR<TestDriveBookingUpdateWithoutUserInput, TestDriveBookingUncheckedUpdateWithoutUserInput>
    create: XOR<TestDriveBookingCreateWithoutUserInput, TestDriveBookingUncheckedCreateWithoutUserInput>
  }

  export type TestDriveBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: TestDriveBookingWhereUniqueInput
    data: XOR<TestDriveBookingUpdateWithoutUserInput, TestDriveBookingUncheckedUpdateWithoutUserInput>
  }

  export type TestDriveBookingUpdateManyWithWhereWithoutUserInput = {
    where: TestDriveBookingScalarWhereInput
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyWithoutUserInput>
  }

  export type TestDriveBookingScalarWhereInput = {
    AND?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
    OR?: TestDriveBookingScalarWhereInput[]
    NOT?: TestDriveBookingScalarWhereInput | TestDriveBookingScalarWhereInput[]
    id?: StringFilter<"TestDriveBooking"> | string
    carId?: StringFilter<"TestDriveBooking"> | string
    userId?: StringFilter<"TestDriveBooking"> | string
    bookingDate?: DateTimeFilter<"TestDriveBooking"> | Date | string
    startTime?: StringFilter<"TestDriveBooking"> | string
    endTime?: StringFilter<"TestDriveBooking"> | string
    status?: EnumBookingStatusFilter<"TestDriveBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"TestDriveBooking"> | string | null
    createdAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
    updatedAt?: DateTimeFilter<"TestDriveBooking"> | Date | string
  }

  export type ChatInteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatInteractionWhereUniqueInput
    update: XOR<ChatInteractionUpdateWithoutUserInput, ChatInteractionUncheckedUpdateWithoutUserInput>
    create: XOR<ChatInteractionCreateWithoutUserInput, ChatInteractionUncheckedCreateWithoutUserInput>
  }

  export type ChatInteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatInteractionWhereUniqueInput
    data: XOR<ChatInteractionUpdateWithoutUserInput, ChatInteractionUncheckedUpdateWithoutUserInput>
  }

  export type ChatInteractionUpdateManyWithWhereWithoutUserInput = {
    where: ChatInteractionScalarWhereInput
    data: XOR<ChatInteractionUpdateManyMutationInput, ChatInteractionUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatInteractionScalarWhereInput = {
    AND?: ChatInteractionScalarWhereInput | ChatInteractionScalarWhereInput[]
    OR?: ChatInteractionScalarWhereInput[]
    NOT?: ChatInteractionScalarWhereInput | ChatInteractionScalarWhereInput[]
    id?: StringFilter<"ChatInteraction"> | string
    userId?: StringFilter<"ChatInteraction"> | string
    userMessage?: StringFilter<"ChatInteraction"> | string
    aiResponse?: StringFilter<"ChatInteraction"> | string
    preferences?: JsonFilter<"ChatInteraction">
    recommendedCarIds?: StringNullableListFilter<"ChatInteraction">
    createdAt?: DateTimeFilter<"ChatInteraction"> | Date | string
  }

  export type MaintenancePredictionUpsertWithWhereUniqueWithoutUserInput = {
    where: MaintenancePredictionWhereUniqueInput
    update: XOR<MaintenancePredictionUpdateWithoutUserInput, MaintenancePredictionUncheckedUpdateWithoutUserInput>
    create: XOR<MaintenancePredictionCreateWithoutUserInput, MaintenancePredictionUncheckedCreateWithoutUserInput>
  }

  export type MaintenancePredictionUpdateWithWhereUniqueWithoutUserInput = {
    where: MaintenancePredictionWhereUniqueInput
    data: XOR<MaintenancePredictionUpdateWithoutUserInput, MaintenancePredictionUncheckedUpdateWithoutUserInput>
  }

  export type MaintenancePredictionUpdateManyWithWhereWithoutUserInput = {
    where: MaintenancePredictionScalarWhereInput
    data: XOR<MaintenancePredictionUpdateManyMutationInput, MaintenancePredictionUncheckedUpdateManyWithoutUserInput>
  }

  export type MaintenancePredictionScalarWhereInput = {
    AND?: MaintenancePredictionScalarWhereInput | MaintenancePredictionScalarWhereInput[]
    OR?: MaintenancePredictionScalarWhereInput[]
    NOT?: MaintenancePredictionScalarWhereInput | MaintenancePredictionScalarWhereInput[]
    id?: StringFilter<"MaintenancePrediction"> | string
    userId?: StringFilter<"MaintenancePrediction"> | string
    carId?: StringFilter<"MaintenancePrediction"> | string
    nextServices?: JsonFilter<"MaintenancePrediction">
    partsReplacement?: JsonFilter<"MaintenancePrediction">
    totalMaintenanceCost?: FloatFilter<"MaintenancePrediction"> | number
    maintenanceSchedule?: JsonFilter<"MaintenancePrediction">
    createdAt?: DateTimeFilter<"MaintenancePrediction"> | Date | string
  }

  export type EnvironmentalImpactUpsertWithWhereUniqueWithoutUserInput = {
    where: EnvironmentalImpactWhereUniqueInput
    update: XOR<EnvironmentalImpactUpdateWithoutUserInput, EnvironmentalImpactUncheckedUpdateWithoutUserInput>
    create: XOR<EnvironmentalImpactCreateWithoutUserInput, EnvironmentalImpactUncheckedCreateWithoutUserInput>
  }

  export type EnvironmentalImpactUpdateWithWhereUniqueWithoutUserInput = {
    where: EnvironmentalImpactWhereUniqueInput
    data: XOR<EnvironmentalImpactUpdateWithoutUserInput, EnvironmentalImpactUncheckedUpdateWithoutUserInput>
  }

  export type EnvironmentalImpactUpdateManyWithWhereWithoutUserInput = {
    where: EnvironmentalImpactScalarWhereInput
    data: XOR<EnvironmentalImpactUpdateManyMutationInput, EnvironmentalImpactUncheckedUpdateManyWithoutUserInput>
  }

  export type EnvironmentalImpactScalarWhereInput = {
    AND?: EnvironmentalImpactScalarWhereInput | EnvironmentalImpactScalarWhereInput[]
    OR?: EnvironmentalImpactScalarWhereInput[]
    NOT?: EnvironmentalImpactScalarWhereInput | EnvironmentalImpactScalarWhereInput[]
    id?: StringFilter<"EnvironmentalImpact"> | string
    userId?: StringFilter<"EnvironmentalImpact"> | string
    carId?: StringFilter<"EnvironmentalImpact"> | string
    carbonFootprint?: JsonFilter<"EnvironmentalImpact">
    greenScore?: JsonFilter<"EnvironmentalImpact">
    environmentalMetrics?: JsonFilter<"EnvironmentalImpact">
    createdAt?: DateTimeFilter<"EnvironmentalImpact"> | Date | string
  }

  export type PriceAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: PriceAnalysisWhereUniqueInput
    update: XOR<PriceAnalysisUpdateWithoutUserInput, PriceAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<PriceAnalysisCreateWithoutUserInput, PriceAnalysisUncheckedCreateWithoutUserInput>
  }

  export type PriceAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: PriceAnalysisWhereUniqueInput
    data: XOR<PriceAnalysisUpdateWithoutUserInput, PriceAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type PriceAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: PriceAnalysisScalarWhereInput
    data: XOR<PriceAnalysisUpdateManyMutationInput, PriceAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type PriceAnalysisScalarWhereInput = {
    AND?: PriceAnalysisScalarWhereInput | PriceAnalysisScalarWhereInput[]
    OR?: PriceAnalysisScalarWhereInput[]
    NOT?: PriceAnalysisScalarWhereInput | PriceAnalysisScalarWhereInput[]
    id?: StringFilter<"PriceAnalysis"> | string
    userId?: StringFilter<"PriceAnalysis"> | string
    carId?: StringFilter<"PriceAnalysis"> | string
    marketValue?: JsonFilter<"PriceAnalysis">
    priceAnalysis?: JsonFilter<"PriceAnalysis">
    buyingRecommendation?: JsonFilter<"PriceAnalysis">
    seasonalTrends?: JsonFilter<"PriceAnalysis">
    createdAt?: DateTimeFilter<"PriceAnalysis"> | Date | string
  }

  export type ComparisonUpsertWithWhereUniqueWithoutUserInput = {
    where: ComparisonWhereUniqueInput
    update: XOR<ComparisonUpdateWithoutUserInput, ComparisonUncheckedUpdateWithoutUserInput>
    create: XOR<ComparisonCreateWithoutUserInput, ComparisonUncheckedCreateWithoutUserInput>
  }

  export type ComparisonUpdateWithWhereUniqueWithoutUserInput = {
    where: ComparisonWhereUniqueInput
    data: XOR<ComparisonUpdateWithoutUserInput, ComparisonUncheckedUpdateWithoutUserInput>
  }

  export type ComparisonUpdateManyWithWhereWithoutUserInput = {
    where: ComparisonScalarWhereInput
    data: XOR<ComparisonUpdateManyMutationInput, ComparisonUncheckedUpdateManyWithoutUserInput>
  }

  export type ComparisonScalarWhereInput = {
    AND?: ComparisonScalarWhereInput | ComparisonScalarWhereInput[]
    OR?: ComparisonScalarWhereInput[]
    NOT?: ComparisonScalarWhereInput | ComparisonScalarWhereInput[]
    id?: StringFilter<"Comparison"> | string
    userId?: StringFilter<"Comparison"> | string
    carIds?: StringNullableListFilter<"Comparison">
    comparisonData?: JsonFilter<"Comparison">
    createdAt?: DateTimeFilter<"Comparison"> | Date | string
  }

  export type UserSavedCarCreateWithoutCarInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedCarsInput
  }

  export type UserSavedCarUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type UserSavedCarCreateOrConnectWithoutCarInput = {
    where: UserSavedCarWhereUniqueInput
    create: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput>
  }

  export type UserSavedCarCreateManyCarInputEnvelope = {
    data: UserSavedCarCreateManyCarInput | UserSavedCarCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type TestDriveBookingCreateWithoutCarInput = {
    id?: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTestDrivesInput
  }

  export type TestDriveBookingUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestDriveBookingCreateOrConnectWithoutCarInput = {
    where: TestDriveBookingWhereUniqueInput
    create: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput>
  }

  export type TestDriveBookingCreateManyCarInputEnvelope = {
    data: TestDriveBookingCreateManyCarInput | TestDriveBookingCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type ChatInteractionCreateWithoutRecommendedCarsInput = {
    id?: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatInteractionsInput
  }

  export type ChatInteractionUncheckedCreateWithoutRecommendedCarsInput = {
    id?: string
    userId: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
  }

  export type ChatInteractionCreateOrConnectWithoutRecommendedCarsInput = {
    where: ChatInteractionWhereUniqueInput
    create: XOR<ChatInteractionCreateWithoutRecommendedCarsInput, ChatInteractionUncheckedCreateWithoutRecommendedCarsInput>
  }

  export type MaintenancePredictionCreateWithoutCarInput = {
    id?: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMaintenancePredictionsInput
  }

  export type MaintenancePredictionUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type MaintenancePredictionCreateOrConnectWithoutCarInput = {
    where: MaintenancePredictionWhereUniqueInput
    create: XOR<MaintenancePredictionCreateWithoutCarInput, MaintenancePredictionUncheckedCreateWithoutCarInput>
  }

  export type MaintenancePredictionCreateManyCarInputEnvelope = {
    data: MaintenancePredictionCreateManyCarInput | MaintenancePredictionCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type EnvironmentalImpactCreateWithoutCarInput = {
    id?: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEnvironmentalImpactsInput
  }

  export type EnvironmentalImpactUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentalImpactCreateOrConnectWithoutCarInput = {
    where: EnvironmentalImpactWhereUniqueInput
    create: XOR<EnvironmentalImpactCreateWithoutCarInput, EnvironmentalImpactUncheckedCreateWithoutCarInput>
  }

  export type EnvironmentalImpactCreateManyCarInputEnvelope = {
    data: EnvironmentalImpactCreateManyCarInput | EnvironmentalImpactCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type PriceAnalysisCreateWithoutCarInput = {
    id?: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPriceAnalysesInput
  }

  export type PriceAnalysisUncheckedCreateWithoutCarInput = {
    id?: string
    userId: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PriceAnalysisCreateOrConnectWithoutCarInput = {
    where: PriceAnalysisWhereUniqueInput
    create: XOR<PriceAnalysisCreateWithoutCarInput, PriceAnalysisUncheckedCreateWithoutCarInput>
  }

  export type PriceAnalysisCreateManyCarInputEnvelope = {
    data: PriceAnalysisCreateManyCarInput | PriceAnalysisCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type UserSavedCarUpsertWithWhereUniqueWithoutCarInput = {
    where: UserSavedCarWhereUniqueInput
    update: XOR<UserSavedCarUpdateWithoutCarInput, UserSavedCarUncheckedUpdateWithoutCarInput>
    create: XOR<UserSavedCarCreateWithoutCarInput, UserSavedCarUncheckedCreateWithoutCarInput>
  }

  export type UserSavedCarUpdateWithWhereUniqueWithoutCarInput = {
    where: UserSavedCarWhereUniqueInput
    data: XOR<UserSavedCarUpdateWithoutCarInput, UserSavedCarUncheckedUpdateWithoutCarInput>
  }

  export type UserSavedCarUpdateManyWithWhereWithoutCarInput = {
    where: UserSavedCarScalarWhereInput
    data: XOR<UserSavedCarUpdateManyMutationInput, UserSavedCarUncheckedUpdateManyWithoutCarInput>
  }

  export type TestDriveBookingUpsertWithWhereUniqueWithoutCarInput = {
    where: TestDriveBookingWhereUniqueInput
    update: XOR<TestDriveBookingUpdateWithoutCarInput, TestDriveBookingUncheckedUpdateWithoutCarInput>
    create: XOR<TestDriveBookingCreateWithoutCarInput, TestDriveBookingUncheckedCreateWithoutCarInput>
  }

  export type TestDriveBookingUpdateWithWhereUniqueWithoutCarInput = {
    where: TestDriveBookingWhereUniqueInput
    data: XOR<TestDriveBookingUpdateWithoutCarInput, TestDriveBookingUncheckedUpdateWithoutCarInput>
  }

  export type TestDriveBookingUpdateManyWithWhereWithoutCarInput = {
    where: TestDriveBookingScalarWhereInput
    data: XOR<TestDriveBookingUpdateManyMutationInput, TestDriveBookingUncheckedUpdateManyWithoutCarInput>
  }

  export type ChatInteractionUpsertWithWhereUniqueWithoutRecommendedCarsInput = {
    where: ChatInteractionWhereUniqueInput
    update: XOR<ChatInteractionUpdateWithoutRecommendedCarsInput, ChatInteractionUncheckedUpdateWithoutRecommendedCarsInput>
    create: XOR<ChatInteractionCreateWithoutRecommendedCarsInput, ChatInteractionUncheckedCreateWithoutRecommendedCarsInput>
  }

  export type ChatInteractionUpdateWithWhereUniqueWithoutRecommendedCarsInput = {
    where: ChatInteractionWhereUniqueInput
    data: XOR<ChatInteractionUpdateWithoutRecommendedCarsInput, ChatInteractionUncheckedUpdateWithoutRecommendedCarsInput>
  }

  export type ChatInteractionUpdateManyWithWhereWithoutRecommendedCarsInput = {
    where: ChatInteractionScalarWhereInput
    data: XOR<ChatInteractionUpdateManyMutationInput, ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsInput>
  }

  export type MaintenancePredictionUpsertWithWhereUniqueWithoutCarInput = {
    where: MaintenancePredictionWhereUniqueInput
    update: XOR<MaintenancePredictionUpdateWithoutCarInput, MaintenancePredictionUncheckedUpdateWithoutCarInput>
    create: XOR<MaintenancePredictionCreateWithoutCarInput, MaintenancePredictionUncheckedCreateWithoutCarInput>
  }

  export type MaintenancePredictionUpdateWithWhereUniqueWithoutCarInput = {
    where: MaintenancePredictionWhereUniqueInput
    data: XOR<MaintenancePredictionUpdateWithoutCarInput, MaintenancePredictionUncheckedUpdateWithoutCarInput>
  }

  export type MaintenancePredictionUpdateManyWithWhereWithoutCarInput = {
    where: MaintenancePredictionScalarWhereInput
    data: XOR<MaintenancePredictionUpdateManyMutationInput, MaintenancePredictionUncheckedUpdateManyWithoutCarInput>
  }

  export type EnvironmentalImpactUpsertWithWhereUniqueWithoutCarInput = {
    where: EnvironmentalImpactWhereUniqueInput
    update: XOR<EnvironmentalImpactUpdateWithoutCarInput, EnvironmentalImpactUncheckedUpdateWithoutCarInput>
    create: XOR<EnvironmentalImpactCreateWithoutCarInput, EnvironmentalImpactUncheckedCreateWithoutCarInput>
  }

  export type EnvironmentalImpactUpdateWithWhereUniqueWithoutCarInput = {
    where: EnvironmentalImpactWhereUniqueInput
    data: XOR<EnvironmentalImpactUpdateWithoutCarInput, EnvironmentalImpactUncheckedUpdateWithoutCarInput>
  }

  export type EnvironmentalImpactUpdateManyWithWhereWithoutCarInput = {
    where: EnvironmentalImpactScalarWhereInput
    data: XOR<EnvironmentalImpactUpdateManyMutationInput, EnvironmentalImpactUncheckedUpdateManyWithoutCarInput>
  }

  export type PriceAnalysisUpsertWithWhereUniqueWithoutCarInput = {
    where: PriceAnalysisWhereUniqueInput
    update: XOR<PriceAnalysisUpdateWithoutCarInput, PriceAnalysisUncheckedUpdateWithoutCarInput>
    create: XOR<PriceAnalysisCreateWithoutCarInput, PriceAnalysisUncheckedCreateWithoutCarInput>
  }

  export type PriceAnalysisUpdateWithWhereUniqueWithoutCarInput = {
    where: PriceAnalysisWhereUniqueInput
    data: XOR<PriceAnalysisUpdateWithoutCarInput, PriceAnalysisUncheckedUpdateWithoutCarInput>
  }

  export type PriceAnalysisUpdateManyWithWhereWithoutCarInput = {
    where: PriceAnalysisScalarWhereInput
    data: XOR<PriceAnalysisUpdateManyMutationInput, PriceAnalysisUncheckedUpdateManyWithoutCarInput>
  }

  export type WorkingHourCreateWithoutDealershipInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHourUncheckedCreateWithoutDealershipInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHourCreateOrConnectWithoutDealershipInput = {
    where: WorkingHourWhereUniqueInput
    create: XOR<WorkingHourCreateWithoutDealershipInput, WorkingHourUncheckedCreateWithoutDealershipInput>
  }

  export type WorkingHourCreateManyDealershipInputEnvelope = {
    data: WorkingHourCreateManyDealershipInput | WorkingHourCreateManyDealershipInput[]
    skipDuplicates?: boolean
  }

  export type WorkingHourUpsertWithWhereUniqueWithoutDealershipInput = {
    where: WorkingHourWhereUniqueInput
    update: XOR<WorkingHourUpdateWithoutDealershipInput, WorkingHourUncheckedUpdateWithoutDealershipInput>
    create: XOR<WorkingHourCreateWithoutDealershipInput, WorkingHourUncheckedCreateWithoutDealershipInput>
  }

  export type WorkingHourUpdateWithWhereUniqueWithoutDealershipInput = {
    where: WorkingHourWhereUniqueInput
    data: XOR<WorkingHourUpdateWithoutDealershipInput, WorkingHourUncheckedUpdateWithoutDealershipInput>
  }

  export type WorkingHourUpdateManyWithWhereWithoutDealershipInput = {
    where: WorkingHourScalarWhereInput
    data: XOR<WorkingHourUpdateManyMutationInput, WorkingHourUncheckedUpdateManyWithoutDealershipInput>
  }

  export type WorkingHourScalarWhereInput = {
    AND?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[]
    OR?: WorkingHourScalarWhereInput[]
    NOT?: WorkingHourScalarWhereInput | WorkingHourScalarWhereInput[]
    id?: StringFilter<"WorkingHour"> | string
    dealershipId?: StringFilter<"WorkingHour"> | string
    dayOfWeek?: EnumDayOfWeekFilter<"WorkingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"WorkingHour"> | string
    closeTime?: StringFilter<"WorkingHour"> | string
    isOpen?: BoolFilter<"WorkingHour"> | boolean
    createdAt?: DateTimeFilter<"WorkingHour"> | Date | string
    updatedAt?: DateTimeFilter<"WorkingHour"> | Date | string
  }

  export type DealershipInfoCreateWithoutWorkingHoursInput = {
    id?: string
    name?: string
    address?: string
    phone?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealershipInfoUncheckedCreateWithoutWorkingHoursInput = {
    id?: string
    name?: string
    address?: string
    phone?: string
    email?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealershipInfoCreateOrConnectWithoutWorkingHoursInput = {
    where: DealershipInfoWhereUniqueInput
    create: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
  }

  export type DealershipInfoUpsertWithoutWorkingHoursInput = {
    update: XOR<DealershipInfoUpdateWithoutWorkingHoursInput, DealershipInfoUncheckedUpdateWithoutWorkingHoursInput>
    create: XOR<DealershipInfoCreateWithoutWorkingHoursInput, DealershipInfoUncheckedCreateWithoutWorkingHoursInput>
    where?: DealershipInfoWhereInput
  }

  export type DealershipInfoUpdateToOneWithWhereWithoutWorkingHoursInput = {
    where?: DealershipInfoWhereInput
    data: XOR<DealershipInfoUpdateWithoutWorkingHoursInput, DealershipInfoUncheckedUpdateWithoutWorkingHoursInput>
  }

  export type DealershipInfoUpdateWithoutWorkingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealershipInfoUncheckedUpdateWithoutWorkingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSavedCarsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    testDrives?: TestDriveBookingCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedCarsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    testDrives?: TestDriveBookingUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedCarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
  }

  export type CarCreateWithoutSavedByInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    testDriveBookings?: TestDriveBookingCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutSavedByInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    testDriveBookings?: TestDriveBookingUncheckedCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutSavedByInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedCarsInput = {
    update: XOR<UserUpdateWithoutSavedCarsInput, UserUncheckedUpdateWithoutSavedCarsInput>
    create: XOR<UserCreateWithoutSavedCarsInput, UserUncheckedCreateWithoutSavedCarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedCarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedCarsInput, UserUncheckedUpdateWithoutSavedCarsInput>
  }

  export type UserUpdateWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    testDrives?: TestDriveBookingUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    testDrives?: TestDriveBookingUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpsertWithoutSavedByInput = {
    update: XOR<CarUpdateWithoutSavedByInput, CarUncheckedUpdateWithoutSavedByInput>
    create: XOR<CarCreateWithoutSavedByInput, CarUncheckedCreateWithoutSavedByInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutSavedByInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutSavedByInput, CarUncheckedUpdateWithoutSavedByInput>
  }

  export type CarUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    testDriveBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    testDriveBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarCreateWithoutTestDriveBookingsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutCarInput
  }

  export type CarUncheckedCreateWithoutTestDriveBookingsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: Decimal | DecimalJsLike | number | string
    mileage: number
    color: string
    fuelType: string
    transmission: string
    bodyType: string
    seats?: number | null
    description: string
    status?: $Enums.CarStatus
    featured?: boolean
    images?: CarCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    greenScore?: number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedCreateNestedManyWithoutCarInput
    chatRecommendations?: ChatInteractionUncheckedCreateNestedManyWithoutRecommendedCarsInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutCarInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutCarInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutCarInput
  }

  export type CarCreateOrConnectWithoutTestDriveBookingsInput = {
    where: CarWhereUniqueInput
    create: XOR<CarCreateWithoutTestDriveBookingsInput, CarUncheckedCreateWithoutTestDriveBookingsInput>
  }

  export type UserCreateWithoutTestDrivesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisCreateNestedManyWithoutUserInput
    comparisons?: ComparisonCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTestDrivesInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    savedCars?: UserSavedCarUncheckedCreateNestedManyWithoutUserInput
    chatInteractions?: ChatInteractionUncheckedCreateNestedManyWithoutUserInput
    maintenancePredictions?: MaintenancePredictionUncheckedCreateNestedManyWithoutUserInput
    environmentalImpacts?: EnvironmentalImpactUncheckedCreateNestedManyWithoutUserInput
    priceAnalyses?: PriceAnalysisUncheckedCreateNestedManyWithoutUserInput
    comparisons?: ComparisonUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTestDrivesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
  }

  export type CarUpsertWithoutTestDriveBookingsInput = {
    update: XOR<CarUpdateWithoutTestDriveBookingsInput, CarUncheckedUpdateWithoutTestDriveBookingsInput>
    create: XOR<CarCreateWithoutTestDriveBookingsInput, CarUncheckedCreateWithoutTestDriveBookingsInput>
    where?: CarWhereInput
  }

  export type CarUpdateToOneWithWhereWithoutTestDriveBookingsInput = {
    where?: CarWhereInput
    data: XOR<CarUpdateWithoutTestDriveBookingsInput, CarUncheckedUpdateWithoutTestDriveBookingsInput>
  }

  export type CarUpdateWithoutTestDriveBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutTestDriveBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
    chatRecommendations?: ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput
  }

  export type UserUpsertWithoutTestDrivesInput = {
    update: XOR<UserUpdateWithoutTestDrivesInput, UserUncheckedUpdateWithoutTestDrivesInput>
    create: XOR<UserCreateWithoutTestDrivesInput, UserUncheckedCreateWithoutTestDrivesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestDrivesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestDrivesInput, UserUncheckedUpdateWithoutTestDrivesInput>
  }

  export type UserUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTestDrivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    savedCars?: UserSavedCarUncheckedUpdateManyWithoutUserNestedInput
    chatInteractions?: ChatInteractionUncheckedUpdateManyWithoutUserNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutUserNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutUserNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutUserNestedInput
    comparisons?: ComparisonUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CarUpdateWithoutChatRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUpdateManyWithoutCarNestedInput
    maintenancePredictions?: MaintenancePredictionUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateWithoutChatRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
    savedBy?: UserSavedCarUncheckedUpdateManyWithoutCarNestedInput
    testDriveBookings?: TestDriveBookingUncheckedUpdateManyWithoutCarNestedInput
    maintenancePredictions?: MaintenancePredictionUncheckedUpdateManyWithoutCarNestedInput
    environmentalImpacts?: EnvironmentalImpactUncheckedUpdateManyWithoutCarNestedInput
    priceAnalyses?: PriceAnalysisUncheckedUpdateManyWithoutCarNestedInput
  }

  export type CarUncheckedUpdateManyWithoutChatRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    fuelType?: StringFieldUpdateOperationsInput | string
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    seats?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumCarStatusFieldUpdateOperationsInput | $Enums.CarStatus
    featured?: BoolFieldUpdateOperationsInput | boolean
    images?: CarUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    greenScore?: NullableFloatFieldUpdateOperationsInput | number | null
    environmentalMetrics?: NullableJsonNullValueInput | InputJsonValue
    priceHistory?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSavedCarCreateManyUserInput = {
    id?: string
    carId: string
    savedAt?: Date | string
  }

  export type TestDriveBookingCreateManyUserInput = {
    id?: string
    carId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatInteractionCreateManyUserInput = {
    id?: string
    userMessage: string
    aiResponse: string
    preferences: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionCreaterecommendedCarIdsInput | string[]
    createdAt?: Date | string
  }

  export type MaintenancePredictionCreateManyUserInput = {
    id?: string
    carId: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentalImpactCreateManyUserInput = {
    id?: string
    carId: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PriceAnalysisCreateManyUserInput = {
    id?: string
    carId: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ComparisonCreateManyUserInput = {
    id?: string
    carIds?: ComparisonCreatecarIdsInput | string[]
    comparisonData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserSavedCarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type UserSavedCarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutTestDriveBookingsNestedInput
  }

  export type TestDriveBookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatInteractionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedCars?: CarUpdateManyWithoutChatRecommendationsNestedInput
  }

  export type ChatInteractionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendedCars?: CarUncheckedUpdateManyWithoutChatRecommendationsNestedInput
  }

  export type ChatInteractionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutMaintenancePredictionsNestedInput
  }

  export type MaintenancePredictionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutEnvironmentalImpactsNestedInput
  }

  export type EnvironmentalImpactUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: CarUpdateOneRequiredWithoutPriceAnalysesNestedInput
  }

  export type PriceAnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carId?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComparisonUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComparisonUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComparisonUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    carIds?: ComparisonUpdatecarIdsInput | string[]
    comparisonData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarCreateManyCarInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type TestDriveBookingCreateManyCarInput = {
    id?: string
    userId: string
    bookingDate: Date | string
    startTime: string
    endTime: string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenancePredictionCreateManyCarInput = {
    id?: string
    userId: string
    nextServices: JsonNullValueInput | InputJsonValue
    partsReplacement: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost: number
    maintenanceSchedule: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EnvironmentalImpactCreateManyCarInput = {
    id?: string
    userId: string
    carbonFootprint: JsonNullValueInput | InputJsonValue
    greenScore: JsonNullValueInput | InputJsonValue
    environmentalMetrics: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PriceAnalysisCreateManyCarInput = {
    id?: string
    userId: string
    marketValue: JsonNullValueInput | InputJsonValue
    priceAnalysis: JsonNullValueInput | InputJsonValue
    buyingRecommendation: JsonNullValueInput | InputJsonValue
    seasonalTrends: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserSavedCarUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedCarsNestedInput
  }

  export type UserSavedCarUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSavedCarUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestDrivesNestedInput
  }

  export type TestDriveBookingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestDriveBookingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatInteractionUpdateWithoutRecommendedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatInteractionsNestedInput
  }

  export type ChatInteractionUncheckedUpdateWithoutRecommendedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatInteractionUncheckedUpdateManyWithoutRecommendedCarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    preferences?: JsonNullValueInput | InputJsonValue
    recommendedCarIds?: ChatInteractionUpdaterecommendedCarIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMaintenancePredictionsNestedInput
  }

  export type MaintenancePredictionUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenancePredictionUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    nextServices?: JsonNullValueInput | InputJsonValue
    partsReplacement?: JsonNullValueInput | InputJsonValue
    totalMaintenanceCost?: FloatFieldUpdateOperationsInput | number
    maintenanceSchedule?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnvironmentalImpactsNestedInput
  }

  export type EnvironmentalImpactUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentalImpactUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    carbonFootprint?: JsonNullValueInput | InputJsonValue
    greenScore?: JsonNullValueInput | InputJsonValue
    environmentalMetrics?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPriceAnalysesNestedInput
  }

  export type PriceAnalysisUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceAnalysisUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marketValue?: JsonNullValueInput | InputJsonValue
    priceAnalysis?: JsonNullValueInput | InputJsonValue
    buyingRecommendation?: JsonNullValueInput | InputJsonValue
    seasonalTrends?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourCreateManyDealershipInput = {
    id?: string
    dayOfWeek: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isOpen?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkingHourUpdateWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourUncheckedUpdateWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkingHourUncheckedUpdateManyWithoutDealershipInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isOpen?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}