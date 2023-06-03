import { pipe, type Predicate } from "fp-ts/function";
import { chain, Either } from "fp-ts/Either";
import { validate } from "../func/form";

const startsWith =
  (search: string): Predicate<string> =>
  (text: string) =>
    text.startsWith(search);

const minLength =
  (limit: number): Predicate<string> =>
  (text: string) =>
    text.length >= limit;

const maxLength =
  (limit: number): Predicate<string> =>
  (text: string) =>
    text.length <= limit;

const testPhoneNumberPattern = (text: string) => !/[^0-9\\s\\-]/gi.test(text);

export const validatePhoneNumber = (
  phoneNumber: string
): Either<string, string> =>
  pipe(
    validate([minLength(1)], "필수항목입니다.")(phoneNumber),
    chain(
      validate(
        [
          testPhoneNumberPattern,
          startsWith("01"),
          minLength(10),
          maxLength(11),
        ],
        "올바르지 않은 번호형식입니다."
      )
    )
  );
