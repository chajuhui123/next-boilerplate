import Link from "next/link";
import { useStateWithValidator } from "@hooks/useStateWithValidator";
import { validatePhoneNumber } from "@modules/util/validate";

const TestPage = () => {
  const [phoneNumber, setPhoneNumber, phoneNumberValidator] =
    useStateWithValidator<string>("", validatePhoneNumber);

  const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const onSubmit = () => {
    const validators = [phoneNumberValidator];
    const isValid = validators
      .map((validator) => validator.validate())
      .some((valid) => !valid);

    //  if (isValid) Submit Logic...
  };
  return (
    <div>
      <h1>Test</h1>
      <input onChange={onPhoneNumberChange} value={phoneNumber} />
      <span className="error">{phoneNumberValidator.error}</span>
      <button onClick={onSubmit}>제출</button>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  );
};

export default TestPage;
