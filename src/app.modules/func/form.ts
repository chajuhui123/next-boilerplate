import { fromPredicate } from "fp-ts/Either";
import { pipe, type Predicate } from "fp-ts/function";
import { every, map } from "fp-ts/Array";

const validate =
  <T>(validators: Array<Predicate<T>>, errorMessage: string) =>
  (value: T) =>
    pipe(
      value,
      fromPredicate(
        (val) =>
          pipe(
            validators,
            map((fn) => fn(val)),
            every(Boolean)
          ),
        () => errorMessage
      )
    );
