import { useState } from "react";
import { match, type Either } from "fp-ts/Either";
import { identity, pipe } from "fp-ts/function";
import { isEmpty, empty } from "fp-ts/string";

type StateValidator = {
  validate: () => boolean;
  error: string;
};

export const useStateWithValidator = <T>(
  initialState: T,
  validator: (v: T) => Either<string, T>
): [T, (v: T, t?: boolean) => void, StateValidator] => {
  const [value, setValue] = useState<T>(initialState);
  const [error, setError] = useState("");

  const changeError = (e: string) => {
    setError(e);
    return e;
  };

  const changeValue = (v: T) => {
    pipe(
      validator(v),
      match(
        (error) => error,
        () => pipe(v, setValue, () => empty)
      ),
      changeError
    );
  };

  const stateValidator: StateValidator = {
    validate(): boolean {
      return pipe(
        validator(value),
        match(identity, () => empty),
        changeError,
        isEmpty
      );
    },

    get error(): string {
      return error;
    },
  };

  return [value, changeValue, stateValidator];
};
