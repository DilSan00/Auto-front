import { useCallback, useMemo, useState } from "react";

export function useValidation(initialErrors = {}) {
  const [errors, setErrors] = useState(initialErrors);

  const setValidationErrors = useCallback((errorArray = []) => {
    const formattedErrors = {};

    errorArray.forEach((error) => {
      const constraints = Object.values(error.constraints || {});
      if (constraints.length > 0) {
        formattedErrors[error.property] = constraints[0];
      }
    });

    setErrors(formattedErrors);
  }, []);

  const resetValidation = useCallback(() => {
    setErrors({});
  }, []);

  return useMemo(
    () => ({
      errors,
      setValidationErrors,
      resetValidation,
      // setErrors,
    }),
    [errors, setValidationErrors, resetValidation]
  );
}
